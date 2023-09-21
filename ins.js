import { createMint } from '@solana/spl-token';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const payer = Keypair.generate();
const mintAuthority = Keypair.generate();
const freezeAuthority = Keypair.generate();

const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

const mint = await createMint(
  connection,
  payer,
  mintAuthority.publicKey,
  freezeAuthority.publicKey,
  9 // We are using 9 to match the CLI decimal default exactly
);

console.log(mint.toBase58());
// AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
const mintInfo = await getMint(
  connection,
  mint
)

console.log(mintInfo.supply);
// 0
const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  payer,
  mint,
  payer.publicKey
)

console.log(tokenAccount.address.toBase58());
// 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
const tokenAccountInfo = await getAccount(
  connection,
  tokenAccount.address
)

console.log(tokenAccountInfo.amount);
// 0
await mintTo(
  connection,
  payer,
  mint,
  tokenAccount.address,
  mintAuthority,
  100000000000 // because decimals for the mint are set to 9 
)
const mintInfo = await getMint(
  connection,
  mint
)

console.log(mintInfo.supply);
// 100

const tokenAccountInfo = await getAccount(
  connection,
  tokenAccount.address
)

console.log(tokenAccountInfo.amount);
// 100