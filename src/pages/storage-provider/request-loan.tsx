import AppHeader from "@/lib/components/AppHeader";
import Router from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { POOL_CONTRACT } from "../../lib/constants";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from "ethers/lib/utils.js";
import abi from "../../lib/abi/pool.json";

export default function RequestLoan() {
  const [minerAddress, setMinerAddress] = useState<string>("");
  const [ownerAddress, setOwnerAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { config } = usePrepareContractWrite({
    address: POOL_CONTRACT,
    abi,
    functionName: "requestLoan",
    args: [ownerAddress, minerAddress, parseEther((amount || 0).toString())],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    isLoading && Router.push("/storage-provider");
  }, [isLoading]);

  const handleMinerChange = (ev: ChangeEvent<HTMLInputElement>) => setMinerAddress(ev.target.value);
  const handleOwnerChange = (ev: ChangeEvent<HTMLInputElement>) => setOwnerAddress(ev.target.value);
  const handleAmountChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setAmount(parseFloat(ev.target.value));

  const handleFormSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    write?.();
  };

  return (
    <>
      <AppHeader type="Storage Provider" />
      <main className="text-lg max-w-3xl mx-auto py-24">
        <form
          onSubmit={handleFormSubmit}
          className="bg-beige boder border-light-brown shadow-lg rounded-3xl p-12 flex flex-col items-start gap-8"
        >
          <h2 className="text-4xl font-sans">Request a loan</h2>
          <label className="bg-offwhite px-3 py-2 flex justify-between gap-6 w-full items-center">
            Address of the miner/worker
            <input
              required
              onChange={handleMinerChange}
              name="miner address"
              type="text"
              placeholder="type here"
              className="bg-transparent outline-light-brown w-1/2 px-2 py-1"
            />
          </label>
          <label className="bg-offwhite px-3 py-2 flex justify-between gap-6 w-full items-center">
            Address of the owner
            <input
              required
              onChange={handleOwnerChange}
              name="owner address"
              type="text"
              placeholder="type here"
              className="bg-transparent outline-light-brown w-1/2 px-2 py-1"
            />
          </label>
          <label className="bg-offwhite px-3 py-2 flex justify-between gap-6 w-full items-center">
            Amount requested
            <input
              onChange={handleAmountChange}
              name="amount requested"
              type="text"
              required
              min="1"
              placeholder="type here"
              className="bg-transparent outline-light-brown w-1/2 px-2 py-1"
            />
          </label>
          <label>
            <input type="checkbox" className="mr-2" required />I consent to keep my eggs in the
            frigde
          </label>
          <div className="flex justify-between items-center w-full pt-4">
            <button className="btn btn-brown hover:bg-orange hover:border-orange" type="submit">
              submit
            </button>
            <Image src="/images/egg-box.png" alt="egg box" width={216} height={161.41} />
          </div>
        </form>
      </main>
    </>
  );
}
