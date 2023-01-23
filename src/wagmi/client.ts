import { createClient, configureChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { hyperpace } from "./hyperspaceChain";

const { chains, provider } = configureChains([hyperpace], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [new InjectedConnector({ chains })],
});

export default client;
