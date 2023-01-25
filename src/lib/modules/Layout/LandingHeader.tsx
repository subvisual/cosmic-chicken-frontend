import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="mt-20 mb-8">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Cosmic Chicken"
          width={216.6}
          height={116}
        />
      </Link>
    </header>
  );
}
