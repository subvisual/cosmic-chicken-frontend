import type { NextApiRequest, NextApiResponse } from "next";
import { nftDataMock } from "@/lib/data/nftDataMock";

export default async function handler(req: NextApiRequest, res: NextApiResponse<nftData>) {
  const { address } = req.query;

  const userNfts = nftDataMock.filter(
    nft => nft.projection_fields.owner.toLowerCase() === (address as string).toLowerCase()
  );

  res.status(200).json(userNfts);
}
