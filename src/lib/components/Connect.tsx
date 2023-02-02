import { useConnect } from "wagmi";

export default function Connect() {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  return (
    <>
      {connectors.map(connector => (
        <button
          className="btn-orange"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading && pendingConnector?.id === connector.id && " (connecting)"}
        </button>
      ))}
    </>
  );
}
