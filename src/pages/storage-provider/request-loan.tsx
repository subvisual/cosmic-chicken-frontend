import AppHeader from "@/lib/components/AppHeader";
import Router from "next/router";
import { ChangeEvent } from "react";
import Image from "next/image";

export default function RequestLoan() {
  const handleFormSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("loan requested");
    Router.push("/storage-provider");
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
          <label className="bg-offwhite p-3 flex justify-between gap-6 w-full">
            Address of the miner/worker
            <input
              name="miner address"
              type="text"
              placeholder="type here"
              className="bg-transparent outline-brown w-1/2"
            />
          </label>
          <label className="bg-offwhite p-3 flex justify-between gap-6 w-full">
            Address of the owner
            <input
              name="owner address"
              type="text"
              placeholder="type here"
              className="bg-transparent outline-brown w-1/2"
            />
          </label>
          <label className="bg-offwhite p-3 flex justify-between gap-6 w-full">
            Amount that want to request
            <input
              name="amount requested"
              type="text"
              placeholder="type here"
              className="bg-transparent outline-brown w-1/2"
            />
          </label>
          <label>
            <input type="checkbox" className="mr-2" />I consent to keep my eggs in the frigde
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
