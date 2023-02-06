import Router from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { parseEther } from "ethers/lib/utils.js";
import AppHeader from "@/lib/components/AppHeader";
import abi from "@/lib/abi/bondManager.json";
import { BOND_MANAGER_CONTRACT } from "@/lib/constants";
import Image from "next/image";
import { BigNumber } from "ethers";
import { usePrepareContractWrite, useWaitForTransaction, useContractWrite } from "wagmi";

export default function Mint() {
  const [amount, setAmount] = useState<number>(0);

  const { config } = usePrepareContractWrite({
    address: BOND_MANAGER_CONTRACT,
    abi,
    functionName: "createBond",
    overrides: {
      ...(amount && { value: parseEther(amount?.toString()) }),
      gasLimit: BigNumber.from(1e10),
    },
  });
  const { data, write } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    isLoading && Router.push("/lend");
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
      <AppHeader type="Lender" />
      <main className="text-lg max-w-4xl mx-auto py-24">
        <form
          onSubmit={handleFormSubmit}
          className="bg-offwhite boder border-light-brown shadow-lg rounded-3xl py-16 px-14 flex justify-around"
        >
          <div className="flex flex-col justify-around items-start gap-12">
            <p>Amount to lend</p>
            <input
              required
              min="1"
              className="text-4xl border border-light-brown rounded-xl py-1 px-3 block max-w-full appearance-none outline-light-brown"
              placeholder="100 tFIL"
              onChange={handleInputChange}
            />
            <button className="btn btn-orange" type="submit">
              Mint
            </button>
          </div>
          <Image src="/images/astronaut.png" alt="astronaut" width={138} height={247.49} />
        </form>
      </main>
    </>
  );
}
