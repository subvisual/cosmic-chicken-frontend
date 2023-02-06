type NftData = {
  contract_address: string;
  inserted_at: string;
  projection_fields: {
    amount: string;
    owner: string;
    status: "active" | "chickened_out" | "chickened_in";
  };
  projection_id: string;
};

type LoanData = {
  contract_address: string;
  inserted_at: string;
  projection_fields: {
    owner: string;
    repaid_amount: string;
    total_amount: string;
  };
  projection_id: string;
};
