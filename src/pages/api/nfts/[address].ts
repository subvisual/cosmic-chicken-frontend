import type { NextApiRequest, NextApiResponse } from "next";
import { INDEXER_URL } from "@/lib/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse<NftData>) {
  const { address } = req.query;
  const response = await fetch(
    INDEXER_URL + "/projections/bond_nft?owner=" + address?.toLocaleString()
  );

  if (!response.ok) {
    throw new Error("error");
  }
  const { data } = await response.json();

  res.status(200).json(data);
}
