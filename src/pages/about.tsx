import Footer from "@/lib/components/Footer";
import Header from "@/lib/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosmic Chicken - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="py-12 text-xl">
        <section className="mb-20 mx-auto w-2/4 max-w-3xl">
          <h2 className="font-sans text-4xl mb-7">About the project</h2>
          <p>
            We leverage FVM to establish a undercollateralized lending protocol using the novel
            bonding mechanism introduced by Liquity team.
            <br />
            <br />
            The main purpose of this project is to diminish the capital cost of collateral for
            Storage Providers while providing an attractive yield opportunity for FIL token holders.
            <br />
            <br />
            Using Chicken Bonds as a reference would allows the protocol to bootstrap liquidity at
            minimal cost, while opening up new earning and trading strategies for the expected
            future yield of Storage Providers.
          </p>
        </section>
        <section className="mb-20 mx-auto w-2/4 max-w-3xl">
          <h2 className="font-sans text-4xl mb-7">Q&A</h2>
          {/* ADD Q&A */}
        </section>
        <section className="mb-20 mx-auto w-2/4 max-w-3xl">
          <h2 className="font-sans text-4xl mb-7">About Finiam</h2>
          <p>
            Finiam is a fintech company that offers services in development, research, and product
            development. It was founded in 2019 and is based in Braga, Portugal.
            <br />
            <br />
            We work in Web Development, DevOps, Smart Contract Development, Product Development,
            Research, using Ruby on Rails, Node, React, Elixir & Phoenix, Solidity and learning Rust
            & Svelte.
          </p>
        </section>
        <section className="mb-20 mx-auto w-2/4 max-w-3xl">
          <h2 className="font-sans text-4xl mb-7">Illustrations</h2>
          <p>
            www.freepik.com - designed by macrovector/freepik <br />
            www.vecteezy.com
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}