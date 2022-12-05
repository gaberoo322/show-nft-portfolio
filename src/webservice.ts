import axios from "axios";

export const getNFTs = async (address: string): Promise<NftData> => {
  // TODO: make this a backend endpoint to not expose API key.
  const baseURL = `https://eth-mainnet.g.alchemy.com/v2/P7o46JSEmNZY6GcxfmyZP3urMmOmi3Nl`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  return await axios
    .get(url)
    .then((response) => response["data"])
    .catch((error) => console.error("error", error));
};

//types are generated with https://app.quicktype.io/ based on payload I received from Alchemy based on the request getNFTs('greenfield.eth') all types are optional at the moment.
export interface NftData {
  ownedNfts?: OwnedNft[];
  pageKey?: string;
  totalCount?: number;
  blockHash?: string;
}

export interface OwnedNft {
  contract?: Contract;
  id?: ID;
  balance?: string;
  title?: string;
  description?: string;
  tokenUri?: TokenURI;
  media?: Media[];
  metadata?: Metadata;
  timeLastUpdated?: Date;
  contractMetadata?: ContractMetadata;
  error?: Error;
  spamInfo?: SpamInfo;
}

export interface Contract {
  address?: string;
}

export interface ContractMetadata {
  name?: string;
  symbol?: string;
  tokenType?: TokenType;
  openSea?: OpenSea;
  totalSupply?: string;
  contractDeployer?: string;
  deployedBlockNumber?: number;
}

export interface OpenSea {
  collectionName?: string;
  safelistRequestStatus?: SafelistRequestStatus;
  imageUrl?: string;
  description?: string;
  externalUrl?: string;
  lastIngestedAt?: Date;
  discordUrl?: string;
  floorPrice?: number;
  twitterUsername?: string;
}

export enum SafelistRequestStatus {
  Approved = "approved",
  NotRequested = "not_requested",
  Verified = "verified",
}

export enum TokenType {
  Erc1155 = "ERC1155",
  Erc721 = "ERC721",
  Unknown = "UNKNOWN",
}

export enum Error {
  FailedToGetTokenURI = "Failed to get token uri",
  MalformedTokenURIDoNotRetry = "Malformed token uri, do not retry",
}

export interface ID {
  tokenId?: string;
  tokenMetadata?: TokenMetadata;
}

export interface TokenMetadata {
  tokenType?: TokenType;
}

export interface Media {
  raw?: string;
  gateway?: string;
  thumbnail?: string;
  format?: string;
  bytes?: number;
}

export interface Metadata {
  image?: string;
  home_url?: string;
  image_url?: string;
  description?: string;
  tags?: string[];
  external_url?: string;
  background_color?: string;
  meta?: Meta;
  name?: string;
  attributes?: Attribute[] | AttributesClass;
  _id?: string;
  id?: string;
  properties?: Property[] | PropertiesClass;
  compiler?: string;
  metadata?: any[];
  edition?: number;
  x_debug?: string[];
  symbol?: string;
  animation_url?: string;
  tokenId?: number;
  background_image?: string;
  is_normalized?: boolean;
  segment_length?: number;
  name_length?: number;
  version?: number;
  url?: string;
  file_link?: string;
  cannon_assetId?: string;
  image_details?: ImageDetails;
  created_by?: string;
}

export interface Attribute {
  value?: number | string;
  max_value?: number;
  trait_type?: string;
  display_type?: string;
  artist?: string;
  key?: string;
}

export interface AttributesClass {}

export interface ImageDetails {
  width?: number;
  format?: string;
  sha256?: string;
  bytes?: number;
  height?: number;
}

export interface Meta {
  rateOfFire?: number;
  barrel?: string;
  kitType?: string;
  gunRarityIndex?: number;
  rotation?: number;
  skin?: string;
  maxRange?: number;
  damageLevel?: number;
  effectiveRange?: number;
  gunModel?: string;
  skinRarity?: string;
  weaponSlot?: string;
  ammoType?: string;
  stabilityLevel?: number;
  weaponType?: string;
  muzzleVelocity?: number;
}

export interface Property {
  type?: Type;
  value?: number | string;
  key?: string;
}

export enum Type {
  Integer = "integer",
  String = "string",
}

export interface PropertiesClass {
  category?: string;
  files?: File[];
  generation?: string;
  levelRequirement?: string;
}

export interface File {
  type?: string;
  uri?: string;
}

export interface SpamInfo {
  isSpam?: string;
  classifications?: Classification[];
}

export enum Classification {
  OwnedByMostHoneyPots = "OwnedByMostHoneyPots",
}

export interface TokenURI {
  raw?: string;
  gateway?: string;
}
