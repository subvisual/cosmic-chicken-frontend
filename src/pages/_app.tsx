import Layout from "@/lib/modules/Layout/Layout";
import "@/styles/globals.css";
import client from "@/wagmi/client";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </WagmiConfig>
  );
}
