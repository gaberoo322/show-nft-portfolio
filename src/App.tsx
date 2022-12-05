import { useEffect, useState } from "react";

import { getNFTs, NftData } from "./webservice";

function App() {
  const address = "greenfield.eth";
  const [nftData, setNftData] = useState<NftData>();

  useEffect(() => {
    const getNftData = async () => await getNFTs(address);
    getNftData().then((response) => {
      console.log("🚀 ~ file: App.tsx:15 ~ useEffect ~ response", response);
      return setNftData(response);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Show those NiFTys</h1>
      {nftData?.ownedNfts?.map((nft) => (
        <div>
          <div>{nft?.title}</div>
          <img src={nft?.metadata?.image} alt={nft?.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
