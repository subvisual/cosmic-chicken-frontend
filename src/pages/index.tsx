import Link from "next/link";
import Hero from "@/lib/modules/Landing/Hero";
import Footer from "@/lib/components/Footer";
import Head from "next/head";
import Image from "next/image";
import InfoCard from "@/lib/components/InfoCard";
import LandingHeader from "@/lib/modules/Layout/LandingHeader";
import MetaHead from "@/lib/components/Head";

export default function Home() {
  return (
    <>
      <MetaHead />
      <div className="flex-auto mx-auto w-full max-w-6xl mb-24">
        <LandingHeader />
        <Hero />
      </div>
      <main>
        <section className="pb-48">
          <div className="grid grid-cols-2 gap-20 justify-between max-w-[960px] mx-auto">
            <InfoCard
              title="Lenders"
              steps={[
                "One-sided permissionless lending pools",
                "Claim function, ERC-20 token deposit and get back FIL token",
                "Choose if you want to chicken in or chicken out",
              ]}
              link={{ text: "Sign up as lender", href: "/lend" }}
            />
            <InfoCard
              title="Storage Provider"
              steps={[
                "Request a loan and make an initial deposit",
                "Our protocol provides the remaining FIL",
                "Claim interests and rewards, earn reputation and monitor your position",
              ]}
              link={{ text: "Sign up as provider", href: "/storage-provider" }}
            />
          </div>
        </section>
        <section className="w-3/5 mx-auto text-center pb-60">
          <h2 className="font-sans text-4xl mb-8">NFT.storage for the Chicken Bond NFT</h2>
          <p className="mb-16">
            Lenders get an on-chain NFT that represents the state of the their bond
          </p>
          <div className="flex gap-16 justify-center">
            <Image
              src="/images/bonds/bond-active.svg"
              alt="Bond NFT - bonding"
              width={180}
              height={264}
            />
            <Image
              src="/images/bonds/bond-chickened-in.svg"
              alt="Bond NFT - chicken-in"
              width={180}
              height={264}
            />
            <Image
              src="/images/bonds/bond-chickened-out.svg"
              alt="Bond NFT - chicken-out"
              width={180}
              height={264}
            />
          </div>
        </section>
        <section className="pb-48">
          <div className="bg-orange rounded-3xl w-3/5 mx-auto px-auto pt-16 pb-10 text-center relative max-w-[668px]">
            <Image
              src="/images/asteroid-3.png"
              alt="asteroid flying down from left"
              width={160.56}
              height={126.61}
              className="absolute -top-20 left-4"
            />
            <Image
              src="/images/asteroid-4.png"
              alt="asteroid flying down from right"
              width={182.98}
              height={61.09}
              className="absolute -top-8 right-8"
            />
            <h2 className="font-sans text-5xl mb-10 leading-snug">Need some FIL to start?</h2>
            <Link href="/storage-provider" className="cta-primary hover:bg-black">
              Sign up
            </Link>
          </div>
        </section>
        <section className="pt-32 pb-40 bg-offwhite">
          <h2 className="font-sans text-5xl mb-10 text-center">How are the chickens?</h2>
          <div className="flex items-center justify-center gap-24 w-3/5 mx-auto">
            <Image
              src="/images/chicken-ufo.svg"
              alt="chicken on a flying saucer"
              width={332.91}
              height={162.92}
            />
            <Link href="/overview" className="cta-primary">
              Check them out
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
