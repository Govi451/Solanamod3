// src/MintNFT.js
import React, { useState, useEffect } from 'react';
import { Connection, Keypair, PublicKey, Transaction, TransactionInstruction, sendAndConfirmTransaction } from '@solana/web3.js';

function MintNFT() {
  const [mintAmount, setMintAmount] = useState(1);

  const handleMint = async () => {
    const connection = new Connection('https://api.devnet.solana.com');
    const fromWallet = Keypair.generate();
    const candyMachineId = ' 8Hd5PnvjpwvQKHEHSiCAASTRbNeNHEZQfhMQkMPt136B';

    // Create a transaction to mint SPL tokens
    const transaction = new Transaction();
    transaction.add(
      new TransactionInstruction({
        keys: [
          { pubkey: fromWallet.publicKey, isSigner: true, isWritable: true },
          { pubkey: new PublicKey(candyMachineId), isSigner: false, isWritable: true },
        ],
        programId: new PublicKey('YOUR_PROGRAM_ID'), 
        data: Buffer.from([0, mintAmount]),
      })
    );

    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [fromWallet],
      { commitment: 'singleGossip' }
    );

    console.log(`NFT Minted with signature: ${signature}`);
  };

  return (
    <div>
      <h1>Mint NFT</h1>
      <label>Amount to Mint:</label>
      <input type="number" value={mintAmount} onChange={(e) => setMintAmount(e.target.value)} />
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
}

export default MintNFT;
