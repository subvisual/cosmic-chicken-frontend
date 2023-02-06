type NftData = {
  contract_address: string;
  inserted_at: "2023-02-06T11:18:12";
  projection_fields: {
    amount: string;
    owner: string;
    status: "active" | "chickened_out" | "chickened_in";
  };
  projection_id: string;
};

type transferData = {
  contract_address: string;
  event_args: {
    from: string;
    id: string;
    to: string;
  };
}[];
