import { Chain } from "wagmi";

export const hyperpace: Chain = {
  id: 3141,
  name: "Filecoin Hyperspace",
  network: "filecoin",
  nativeCurrency: {
    decimals: 18,
    name: "Test FIL",
    symbol: "tFIL",
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
  },
  blockExplorers: {
    default: {
      name: "Glif Explorer",
      url: "https://explorer.glif.io/?network=hyperspace",
    },
  },
};
