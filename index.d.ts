type nftData = {
  contract_address: string;
  projection_fields: { owner: string };
  projection_id: string;
}[];

type transferData = {
  contract_address: string;
  event_args: {
    from: string;
    id: string;
    to: string;
  };
}[];
