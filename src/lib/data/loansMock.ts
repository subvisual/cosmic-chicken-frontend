export type LoanMockType = {
  address: string;
  loan_id: string;
  amount_deposited: {
    value: string;
    token: string;
  };
  total_deposit: {
    value: string;
    token: string;
  };
  created_at: string;
  status: "active" | "closed";
};

export const LoansMock: Array<LoanMockType> = [
  {
    address: "0xd75004941dd01b737f04d2c5c94ae16ac32032ef",
    loan_id: "0",
    amount_deposited: {
      value: "500",
      token: "TFIL",
    },
    total_deposit: {
      value: "500",
      token: "TFIL",
    },
    created_at: "1654005776000",
    status: "closed",
  },
  {
    address: "0x7c4f0ae91449b6224629b232970e49a82a90c8a2",
    loan_id: "1",
    amount_deposited: {
      value: "660",
      token: "TFIL",
    },
    total_deposit: {
      value: "660",
      token: "TFIL",
    },
    created_at: "1656770576000",
    status: "closed",
  },
  {
    address: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f",
    loan_id: "2",
    amount_deposited: {
      value: "282",
      token: "TFIL",
    },
    total_deposit: {
      value: "282",
      token: "TFIL",
    },
    created_at: "1657202576000",
    status: "closed",
  },
  {
    address: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f",
    loan_id: "3",
    amount_deposited: {
      value: "320",
      token: "TFIL",
    },
    total_deposit: {
      value: "320",
      token: "TFIL",
    },
    created_at: "1669903376000",
    status: "closed",
  },
  {
    address: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f",
    loan_id: "4",
    amount_deposited: {
      value: "380",
      token: "TFIL",
    },
    total_deposit: {
      value: "90",
      token: "TFIL",
    },
    created_at: "1675270793000",
    status: "active",
  },
];
