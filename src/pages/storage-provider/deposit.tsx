import Router from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
import AppHeader from "@/lib/components/AppHeader";
import abi from "../../lib/abi/pool.json";
import { POOL_CONTRACT } from "../../lib/constants";

export default function Deposit() {
  const [amount, setAmount] = useState<number>(0);

  const { config } = usePrepareContractWrite({
    address: POOL_CONTRACT,
    abi,
    functionName: "depositStorageProvider",
    overrides: {
      ...(amount && { value: parseEther(amount?.toString()) }),
    },
  });

  const { data, write } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    isLoading && Router.push("/storage-provider");
  }, [isLoading]);

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(ev.target.value));
  };

  const handleFormSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    write?.();
  };

  return (
    <>
      <AppHeader type="Storage Provider" />
      <main className="text-lg max-w-4xl mx-auto py-24">
        <form
          onSubmit={handleFormSubmit}
          className="bg-beige boder border-light-brown shadow-lg rounded-3xl py-16 px-14 flex flex-col items-start gap-12"
        >
          <p>Deposit amount</p>
          <input
            required
            min="1"
            className="text-4xl border border-light-brown rounded-xl py-1 px-3 block max-w-full appearance-none"
            placeholder="100 tFIL"
            onChange={handleInputChange}
          />
          <button className="btn btn-orange" type="submit">
            Deposit
          </button>
        </form>
      </main>
    </>
  );
}
