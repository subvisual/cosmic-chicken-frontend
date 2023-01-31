import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<nftData>) {
  const { address } = req.query;

  const response = await fetch("http://localhost:3001/projections/nft?owner=" + address);

  if (!response.ok) {
    throw new Error("error");
  }

  res.status(200).json(await response.json());
}
