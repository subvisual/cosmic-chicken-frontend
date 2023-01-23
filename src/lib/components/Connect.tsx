"use client";

import { useConnect, useAccount, useBalance } from "wagmi";
import ClientOnly from "./ClientOnly";

export default function Connect() {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <ClientOnly>
      {isConnected ? (
        <>
          <strong>{address}</strong>
          <p>
            {balance?.formatted} {balance?.symbol}
          </p>
        </>
      ) : (
        connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {isLoading &&
              pendingConnector?.id === connector.id &&
              " (connecting)"}
          </button>
        ))
      )}
    </ClientOnly>
  );
}
