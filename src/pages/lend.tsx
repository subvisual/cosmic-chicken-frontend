import AppHeader from "@/lib/components/AppHeader";
import ClientOnly from "@/lib/components/ClientOnly";
import Connect from "@/lib/components/Connect";
import NftCard from "@/lib/components/NftCard";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useAccount } from "wagmi";

export default function Lend() {
  const { address, isConnected } = useAccount();
  const [bondFilter, setBondFilter] = useState<"none" | "current" | "expired">("none");

  const { data }: { data?: nftData } = useQuery(
    ["nfts", address],
    async () => await (await fetch("/api/nfts/" + address?.toLowerCase())).json(),
    {
      enabled: !!address,
      refetchInterval: 10000,
    }
  );

  const displayBonds = useMemo(() => {
    switch (bondFilter) {
      case "current":
        return nfts?.filter(nft => nft.status === "bonding");

      case "expired":
        return nfts?.filter(nft => nft.status !== "bonding");

      default:
        return nfts;
    }
  }, [bondFilter, nfts]);

  return (
    <ClientOnly>
      <div>
        {!isConnected ? (
          <div className="mx-auto mt-96 w-fit">
            <Connect />
          </div>
        ) : (
          <>
            <AppHeader type="Lender" />
            <main className="text-lg max-w-5xl w-4/5 mx-auto py-24">
              <div className="flex justify-between mb-8">
                <div className="flex gap-6">
                  <button
                    className={`btn-beige ${bondFilter === "none" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("none")}
                  >
                    All
                  </button>
                  <button
                    className={`btn-beige ${bondFilter === "current" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("current")}
                  >
                    Current
                  </button>
                  <button
                    className={`btn-beige ${bondFilter === "expired" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("expired")}
                  >
                    Expired
                  </button>
                </div>
                <button className="btn-orange" onClick={() => console.log("mint")}>
                  Mint new bond
                </button>
              </div>
              {displayBonds?.length && (
                <div className="flex flex-col gap-12">
                  {displayBonds
                    .sort((a, b) => Number(b.projection_id) - Number(a.projection_id))
                    .map(nft => (
                      <NftCard nft={nft} key={nft.projection_id} />
                    ))}
                </div>
              )}
            </main>
          </>
        )}
      </div>
    </ClientOnly>
  );
}
