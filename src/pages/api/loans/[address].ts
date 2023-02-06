import { INDEXER_URL } from "@/lib/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<LoanData>>) {
  const { address } = req.query;
  const response = await fetch(
    INDEXER_URL + "/projections/loan?owner=" + address?.toLocaleString()
  );

  if (!response.ok) {
    throw new Error("error");
  }
  const { data } = await response.json();

  res.status(200).json(data);
}
