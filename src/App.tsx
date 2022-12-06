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
    <div className="flex-auto flex-col items-center bg-slate-800">
      <h1 className="text-3xl text-white underline">Show those NiFTys</h1>
      <div className="grid gap-5 grid-cols-4 grid-rows-none">
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
    </div>
  );
}

export default App;
