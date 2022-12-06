import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { getNFTs, NftData } from "./webservice";

function App() {
  const provider = new ethers.providers.Web3Provider(window?.ethereum);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>(
    provider.getSigner()
  );
  const [nftData, setNftData] = useState<NftData>();
  const [userAddress, setUserAddress] = useState<string>();

  const initialize = async () => {
    const signer = provider.getSigner();
    await setSigner(signer);
    const address = await signer.getAddress();
    setNftData(await getNFTs(address));
    setUserAddress(address);
  };

  useEffect(() => {
    if (window?.ethereum._state.accounts.length > 0) {
      initialize();
    }
  }, []);

  const walletConnect = async () => {
    await provider.send("eth_requestAccounts", []);
    initialize();
  };

  return (
    <div className="flex-auto h-screen flex-col items-center px-10 py-8">
      <header className="flex justify-between">
        <div className="text-3xl text-white">Your NFT Portfolio</div>
        <button
          className="rounded-full bg-sky-500 hover:bg-sky-700 text-white p-2"
          onClick={walletConnect}
        >
          {!userAddress
            ? "Connect MetaMask Wallet"
            : `Connected: ${userAddress}`}
        </button>
      </header>
      {nftData ? (
        <div className="grid gap-5 grid-cols-4 grid-rows-none pt-10">
          {nftData?.ownedNfts?.map((nft) => (
            <div>
              <div className="text-slate-400">{nft?.title}</div>
              <img
                className={"w-15"}
                src={`${nft?.media?.[0]?.gateway}`}
                alt={nft?.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10 mx-auto text-center text-white">
          Connect your wallet to see your NFTs
        </div>
      )}
    </div>
  );
}

export default App;
