# show-nft-portfolio
TLDR: A FE coding challenge to create an app with functionality to display NFTs for a given ethereum wallet address.

### link to see the running application:
[https://profound-kringle-eb33b2.netlify.app/](https://profound-kringle-eb33b2.netlify.app/)

## case study instructions
- Write a single-page React app that allows you to connect a Metamask wallet and show the NFTs (ERC721 and ERC1155) held by the wallet in a grid. Each NFT should be represented by its picture, token address (with a link to the address on Etherscan), and token ID. The app should be written using React, Typescript, and ethers.js. The wallet handling should emulate that of common dapps. You can use any libraries you wish.
- Feel free to use this endpoint from Reservoir to get a list of NFTs held by an address: https://docs.reservoir.tools/reference/getusersusertokensv5
\
```Note: you can simulate showing NFTs for a different mainnet address if you don't own any in your Metamask wallet.```
- Optional features (if you have time) include: the ability to switch accounts, a Transfer button on each NFT to allow sending it to another address, and fetching token metadata from the token URI rather than the Reservoir API.
- When submitting the case study, please also attach a short plan on what you'd improve on the app to make it production-ready. This can be whatever you feel important: UX, architecture, deployment plan...etc.
