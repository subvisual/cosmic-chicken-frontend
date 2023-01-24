import ClientOnly from "./ClientOnly";
import {
  usePrepareContractWrite,
  useAccount,
  useContractWrite,
  useContractRead,
} from "wagmi";
import { ERC_721_CONTRACT } from "../constants";
import abi from "../abi/erc721.json";

export default function Mint() {
  const { address } = useAccount();

  const { data: symbol } = useContractRead({
    address: ERC_721_CONTRACT,
    abi: abi,
    functionName: "symbol",
  });

  const { config } = usePrepareContractWrite({
    address: ERC_721_CONTRACT,
    abi,
    functionName: "mint",
    args: [address],
  });
  const { write } = useContractWrite(config);

  return (
    <ClientOnly>
      <p>Mint {symbol as string}</p>
      <button onClick={() => write?.()}>Mint</button>
    </ClientOnly>
  );
}
