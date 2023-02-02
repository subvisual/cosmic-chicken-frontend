import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function InfoCard({
  title,
  steps,
  link: { text, href },
}: {
  title: string;
  steps: [string, string, string];
  link: { text: string; href: string };
}) {
  return (
    <div className="w-full flex flex-col bg-offwhite py-16 px-9 rounded-3xl gap-9 items-center">
      <h3 className="text-black font-sans text-4xl tracking-wider">{title}</h3>
      <div className="grid grid-rows-3 grid-cols-[max-content,_1fr] gap-x-9 gap-y-10 text-lg">
        <Image src="/images/shape-egg-normal.png" alt="egg" width={33.1} height={44.5} />
        <p>{steps[0]}</p>
        <Image src="/images/shape-egg-cracked.png" alt="cracked egg" width={33.1} height={44.5} />
        <p>{steps[1]}</p>
        <Image src="/images/shape-egg-fried.png" alt="fried egg" width={33.1} height={44.5} />
        <p>{steps[2]}</p>
      </div>
      <Link href={href} className="cta-primary">
        {text}
      </Link>
    </div>
  );
}
