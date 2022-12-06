import axios from "axios";

import { NftData } from "./globalTypes";

export const getNFTs = async (address: string): Promise<NftData> => {
  // TODO: make this a backend endpoint to not expose API key.
  const baseURL = `https://eth-mainnet.g.alchemy.com/v2/P7o46JSEmNZY6GcxfmyZP3urMmOmi3Nl`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  return await axios
    .get(url)
    .then((response) => response["data"])
    .catch((error) => console.error("error", error));
};
