import { useAccount, useBalance } from "wagmi";
import { truncateAddress, truncateAmount } from "../utils/truncate";
import ClientOnly from "./ClientOnly";

export default function Header({ type }: { type: "Lender" | "Storage Provider" }) {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <header className="py-6 px-8 bg-light-brown flex justify-between">
      <h1 className="text-4xl font-sans">{type} dashboard</h1>
      <ClientOnly>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold">Connected</span>
            <span className="text-sm">{address && truncateAddress(address)}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold">{balance?.symbol}</span>
            <span className="text-sm">
              {truncateAmount(parseFloat(balance?.formatted as string))}
            </span>
          </div>
        </div>
      </ClientOnly>
    </header>
  );
}
