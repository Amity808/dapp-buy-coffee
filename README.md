
## BuyCoffee Project

The BuyCoffee project is a decentralized marketplace that allows users to send Celo cUSD to their favorite developers as a way to show appreciation or support for their work. This README provides an overview of the project, including its features, technologies used, and instructions for developers to get started.

## Installation

To use this project, you need to follow the installation steps outlined below:

1. Install a wallet:
   - CeloExtensionWallet: Visit the Celo Extension Wallet website (https://celowallet.app) and follow the instructions to install the wallet extension for your browser.
   - MetamaskExtensionWallet: Visit the Metamask website (https://metamask.io) and install the Metamask extension for your browser.

2. Create a wallet:
   - Once the wallet extension is installed, follow the wallet provider's instructions to create a new wallet. Make sure to securely store your wallet's seed phrase or private key.

3. Obtain testnet tokens:
   - Visit the Celo developers' faucet website (https://celo.org/developers/faucet) and follow the instructions to request testnet tokens for the Alfajores testnet. These tokens are necessary for interacting with the Celo blockchain.

4. Switch to the Alfajores testnet:
   - In the CeloExtensionWallet, switch your network to the Alfajores testnet. This ensures that you are connected to the appropriate blockchain network to interact with the certificate storage application.

Features
The BuyCoffee project offers the following features:

Developer Selection: Users can choose their favorite developer from a list of registered developers in the marketplace.
cUSD Payments: Users can send any amount of Celo cUSD to the selected developer.
Real-Time Updates: The application provides real-time updates using WebSocket to notify users about payment transactions.
Rainbow Kit: The Rainbow Kit library is used for handling Celo wallet integration and transaction signing.
React Toastify: Toast notifications are implemented using the React Toastify library to provide user feedback.
Use Debounce: The useDebounce hook is used for optimizing user input and reducing unnecessary API calls.
React Blockies: The React Blockies library is used to generate unique identicons for developers.


Technologies Used

The BuyCoffee project utilizes the following technologies:

React: The user interface is built using the React library, providing a dynamic and responsive user experience.
Solidity: Smart contracts are developed using Solidity, a programming language for the Ethereum Virtual Machine.
Web3.js: Web3.js is used to interact with the Celo blockchain, enabling cUSD transactions and contract interactions.
Rainbow Kit: The Rainbow Kit library is used for wallet integration and transaction signing on the Celo network.
React Toastify: The React Toastify library is used to display toast notifications for user feedback.
useDebounce: The useDebounce hook optimizes user input and reduces API calls by debouncing the input value.
React Blockies: The React Blockies library generates unique identicons based on user addresses.

Installation

https://github.com/Amity808/dapp-buy-coffee

npm install


