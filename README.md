# Creating and minting SPL tokens using Candy UI machine
## Project Overview
In this final project, we will create a user interface (UI) for a Candy Machine, which allows users to mint NFTs by paying with a custom SPL token. The key steps include creating an SPL token, configuring the Candy Machine UI, and testing the integration.
## commands used
solana-keygen new --outfile ./wallet.json
solana airdrop 1

 solana config set --keypair ./wallet.json

 solana config set --url https://api.devnet.solana.com
#### Verify and Upload with the CLI
sugar validate
sugar validate

#### Deploy Your Candy Machine
sugar deploy
sugar verify

#### Minting a Token
sugar mint

## Creating an SPL Token
Create an SPL Token using solana inbuilt SPL library

Update config.json: Modify the config.json file in your project to include the splTokenAddress of the token you created in step 1. This is essential for linking the SPL token to your Candy Machine.

## Configuring the Candy Machine UI
set up the Candy Machine UI using Quick Node tutorial. by following steps we know process of creating a user-friendly interface for minting NFTs.

## Testing Your Setup

Run the Candy Machine UI: Start the Candy Machine UI and make sure it's accessible to users.

Test Minting: As users mint NFTs through your UI, ensure that they are prompted to pay in the SPL token you created. You can test this by transferring or minting your SPL token to any of your Phantom wallet accounts and then attempting to mint an NFT on your website.
