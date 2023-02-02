export type NftMockType = {
  contract_address: string;
  projection_fields: { owner: string };
  projection_id: string;
  deposit: {
    value: string;
    token: string;
  };
  accruedValue: {
    value: string;
    token: string;
  };
  createdAt: string;
  status: "chicken-in" | "chicken-out" | "bonding";
};

export const nftDataMock: Array<NftMockType> = [
  {
    contract_address: "0xF6E24c5E9abcaCA61c9478c9b7117dB86FF2011F",
    projection_fields: { owner: "0xd75004941dd01b737f04d2c5c94ae16ac32032ef" },
    projection_id: "0",
    deposit: {
      value: "100",
      token: "TFIL",
    },
    accruedValue: {
      value: "115.3",
      token: "bTFIL",
    },
    createdAt: "1654005776000",
    status: "chicken-in",
  },
  {
    contract_address: "0xF6E24c5E9abcaCA61c9478c9b7117dB86FF2011F",
    projection_fields: { owner: "0x7c4f0ae91449b6224629b232970e49a82a90c8a2" },
    projection_id: "1",
    deposit: {
      value: "100",
      token: "TFIL",
    },
    accruedValue: {
      value: "127.8",
      token: "bTFIL",
    },
    createdAt: "1656770576000",
    status: "chicken-in",
  },
  {
    contract_address: "0xF6E24c5E9abcaCA61c9478c9b7117dB86FF2011F",
    projection_fields: { owner: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f" },
    projection_id: "2",
    deposit: {
      value: "100",
      token: "TFIL",
    },
    accruedValue: {
      value: "122",
      token: "bTFIL",
    },
    createdAt: "1657202576000",
    status: "chicken-in",
  },
  {
    contract_address: "0xF6E24c5E9abcaCA61c9478c9b7117dB86FF2011F",
    projection_fields: { owner: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f" },
    projection_id: "3",
    deposit: {
      value: "100",
      token: "TFIL",
    },
    accruedValue: {
      value: "60.7",
      token: "bTFIL",
    },
    createdAt: "1669903376000",
    status: "chicken-out",
  },
  {
    contract_address: "0xF6E24c5E9abcaCA61c9478c9b7117dB86FF2011F",
    projection_fields: { owner: "0xaf4f3bde74e49ddf63dee2a5df05687e67553d3f" },
    projection_id: "4",
    deposit: {
      value: "100",
      token: "TFIL",
    },
    accruedValue: {
      value: "0.1",
      token: "bTFIL",
    },
    createdAt: "1675270793000",
    status: "bonding",
  },
];
