import AppHeader from "@/lib/components/AppHeader";
import ClientOnly from "@/lib/components/ClientOnly";
import Connect from "@/lib/components/Connect";
import NftCard from "@/lib/components/NftCard";
import { NftMockType } from "@/lib/data/nftDataMock";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { BOND_MANAGER_CONTRACT } from "@/lib/constants";
import abi from "../lib/abi/bondManager.json";
import { BigNumber } from "ethers";

export default function Lend() {
  const { address, isConnected } = useAccount();
  const [bondFilter, setBondFilter] = useState<"none" | "current" | "expired">("none");

  const { data: nfts }: { data?: Array<NftMockType> } = useQuery(
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

  const { config } = usePrepareContractWrite({
    address: BOND_MANAGER_CONTRACT,
    abi,
    functionName: "createBond",
    overrides: {
      gasLimit: BigNumber.from(1e10),
    },
  });
  const { write } = useContractWrite(config);

  const mintNFT = () => write?.();

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
            <main className="text-lg max-w-4xl mx-auto py-24">
              <div className="flex justify-between mb-8">
                <div className="flex gap-6">
                  <button
                    className={`btn btn-beige ${bondFilter === "none" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("none")}
                  >
                    All
                  </button>
                  <button
                    className={`btn btn-beige ${bondFilter === "current" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("current")}
                  >
                    Current
                  </button>
                  <button
                    className={`btn btn-beige ${bondFilter === "expired" ? "bg-offwhite" : ""}`}
                    onClick={() => setBondFilter("expired")}
                  >
                    Expired
                  </button>
                </div>
                <button className="btn btn-orange" onClick={mintNFT}>
                  Mint new bond
                </button>
              </div>
              {displayBonds && displayBonds.length > 0 ? (
                <div className="flex flex-col gap-12">
                  {displayBonds
                    .sort((a, b) => Number(b.projection_id) - Number(a.projection_id))
                    .map(nft => (
                      <NftCard nft={nft} key={nft.projection_id} />
                    ))}
                </div>
              ) : (
                <p className="mt-32 mx-auto w-fit">No bonds to show</p>
              )}
            </main>
          </>
        )}
      </div>
    </ClientOnly>
  );
}
