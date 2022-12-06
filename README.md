# show-nft-portfolio
TLDR: A FE coding challenge to create an app with functionality to display NFTs for a given ethereum wallet address.

## case study instructions
- Write a single-page React app that allows you to connect a Metamask wallet and show the NFTs (ERC721 and ERC1155) held by the wallet in a grid. Each NFT should be represented by its picture, token address (with a link to the address on Etherscan), and token ID. The app should be written using React, Typescript, and ethers.js. The wallet handling should emulate that of common dapps. You can use any libraries you wish.
- Feel free to use this endpoint from Reservoir to get a list of NFTs held by an address: https://docs.reservoir.tools/reference/getusersusertokensv5
\
```Note: you can simulate showing NFTs for a different mainnet address if you don't own any in your Metamask wallet.```
- Optional features (if you have time) include: the ability to switch accounts, a Transfer button on each NFT to allow sending it to another address, and fetching token metadata from the token URI rather than the Reservoir API.
- When submitting the case study, please also attach a short plan on what you'd improve on the app to make it production-ready. This can be whatever you feel important: UX, architecture, deployment plan...etc.


## case study submission
screenshots:
![Screenshot 2022-12-06 101744](https://user-images.githubusercontent.com/15147054/205979738-808ecd77-927a-4f37-9f5c-53adcf3e3c13.png)
![Screenshot 2022-12-06 101826](https://user-images.githubusercontent.com/15147054/205979763-61a962c8-7013-463a-8f8f-dda0b6251998.png)
![Screenshot 2022-12-06 101846](https://user-images.githubusercontent.com/15147054/205979774-e511d118-7fb1-4dc7-9c03-fa6e3b5283cd.png)
![Screenshot 2022-12-06 102013](https://user-images.githubusercontent.com/15147054/205979664-d14ec35f-846b-46c5-aa63-33f23fdc7cdd.png)

### link to see the running application:
[https://profound-kringle-eb33b2.netlify.app/](https://profound-kringle-eb33b2.netlify.app/)

or run it locally
`npm i && npm run dev`

## short plan on what I'd improve on the app to make it production-ready
in priority order
1) build out a better infrastructure for the app. things like improving the file system, seperating out components from the App component, adding react context or maybe zustand eventually for common FE data that doesnt change often. 
1) build some actual functionality that the user would want, like transfer functionality for starters and maybe more dashboard like information
1) would like to organize the tailwind css and build out a theme for the app (colors, fonts, frequently used components). make sure every component has responsive styling.  Then make sure and make it aesthetically appealing with micro-interactions animations (hover, active, focus) and I would like to build out.  
1) I would also eventually want to add React-Testing-Library to add unit tests and integration tests to keep the app maintainable over the long run. TTD has never quite worked for me. 
