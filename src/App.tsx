import { useEffect, useState } from "react";

import { getNFTs, NftData } from "./webservice";

import "./App.css";

function App() {
  const address = "greenfield.eth";
  const [nftData, setNftData] = useState<NftData>();

  useEffect(() => {
    const getNftData = async () => await getNFTs(address);
    getNftData().then((response) => setNftData(response));
  }, []);

  return (
    <div className="App">
      <h1>Show those NiFTys</h1>
      {nftData?.ownedNfts?.map((nft) => (
        <div>{nft?.title}</div>
      ))}
    </div>
  );
}

export default App;
