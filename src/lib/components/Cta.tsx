import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Cta({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center justify-between border-4 border-orange rounded-50 px-8 md:px-16 md:py-16">
      <h3 className="text-orange font-sans text-huge uppercase">{text}</h3>
      <Image src="/images/egg.png" width={84} height={102} alt="An egg" />
      <Button href="/app/lend">Try it now</Button>
    </div>
  );
}
