import Mint from "@/lib/components/Mint";
import { useQuery } from "react-query";
import { useAccount } from "wagmi";

export default function Lend() {
  const { address } = useAccount();

  const { data }: { data?: nftData } = useQuery(
    ["nfts", address],
    async () => await (await fetch("/api/nfts/" + address?.toLowerCase())).json(),
    {
      enabled: !!address,
      refetchInterval: 10000,
    }
  );

  return (
    <>
      <h1>Lend</h1>
      <Mint />
      {data?.length && (
        <ul>
          {data
            .sort((a, b) => Number(a.projection_id) - Number(b.projection_id))
            .map(item => (
              <li key={item.projection_id}>Chicken Bond #{item.projection_id}</li>
            ))}
        </ul>
      )}
    </>
  );
}
