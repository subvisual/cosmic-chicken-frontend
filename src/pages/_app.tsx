import Layout from "@/lib/modules/Layout/Layout";
import "@/styles/globals.css";
import client from "@/wagmi/client";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ModalProvider } from "@/lib/hooks/useModal";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ModalProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
