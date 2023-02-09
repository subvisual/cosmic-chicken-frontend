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

  const newData = [
    ...data,
    {
      contract_address: "0xb27d23387324401f829c8c0b73a3df10a72c4080",
      inserted_at: "2023-02-08T15:01:43",
      projection_fields: {
        owner: "0x0000000000000000000000000000000000000000",
        repaid_amount: "5000000000000000000",
        total_amount: "5000000000000000000",
      },
      projection_id: "0x7f1ed854f79g795f6d82764a6bae07693685de7c",
      projection_type: "loan",
    },
  ];

  res.status(200).json(newData);
}
