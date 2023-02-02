import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-32 pb-44 px-20 bg-brown text-beige flex flex-col gap-14 text-xl">
      <nav className="grid grid-rows-3 grid-flow-col w-fit gap-x-14 gap-y-4 text-lg hover:[&>a]:text-orange">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/overview">Overview</Link>
        <Link href="/lend">Lenders</Link>
        <Link href="/storage-provider">Storage Providers</Link>
      </nav>
      <div className="flex justify-between items-end">
        <p className="w-72">Created for FVM Space Warp hackathon</p>
        <div>
          <div className="flex gap-4 items-baseline mb-8">
            <span>Made by</span>
            <Link href="https://finiam.com/" target="_blank" rel="noopener">
              <Image
                src="/images/finiam-logo.svg"
                alt="finiam logo"
                width={102.79}
                height={28.84}
              />
            </Link>
          </div>
          <div className="flex justify-around">
            <Link href="https://www.linkedin.com/company/finiam/" target="_blank" rel="noopener">
              <Image src="/images/linkedin.svg" alt="linkedin logo" width={48} height={48} />
            </Link>
            <Link href="https://twitter.com/wearefiniam" target="_blank" rel="noopener">
              <Image src="/images/twitter.svg" alt="twitter logo" width={48} height={48} />
            </Link>
            <Link href="https://github.com/finiam" target="_blank" rel="noopener">
              <Image src="/images/github.svg" alt="github logo" width={48} height={48} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
