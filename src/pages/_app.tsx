import "@/styles/globals.css";
import client from "@/wagmi/client";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>      
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
