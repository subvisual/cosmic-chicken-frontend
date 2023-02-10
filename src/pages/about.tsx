import Footer from "@/lib/components/Footer";
import MetaHead from "@/lib/components/Head";
import LandingHeader from "@/lib/modules/Layout/LandingHeader";

export default function Home() {
  return (
    <>
      <MetaHead />
      <div className="flex-auto mx-auto w-full max-w-6xl mb-24">
        <LandingHeader />
      </div>
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
            <br />
            <br />
            The project reated for FVM Space Warp hackathon.
          </p>
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
          <h2 className="font-sans text-4xl mb-7">Attributions</h2>
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
