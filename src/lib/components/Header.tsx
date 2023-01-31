import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-20 px-40">
      <Link href="/">
        <Image src="/images/logo.svg" alt="cosmic chicken logo" width={206.6} height={116} />
      </Link>
    </header>
  );
}
