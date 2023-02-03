import AppHeader from "@/lib/components/AppHeader";
import Router from "next/router";
import { ChangeEvent, useState } from "react";

export default function Deposit() {
  const [amount, setAmount] = useState<number>();

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(ev.target.value));
  };

  const handleFormSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("deposit " + amount);
    Router.push("/storage-provider");
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
            className="text-4xl border border-light-brown rounded-xl py-1 px-3 block max-w-full"
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
