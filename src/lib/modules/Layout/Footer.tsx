import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    src: "/images/linkedin.svg",
    name: "Linkedin",
    href: "https://pt.linkedin.com/company/finiam",
  },
  {
    src: "/images/github.svg",
    name: "Github",
    href: "https://github.com/finiam/",
  },
  {
    src: "/images/twitter.svg",
    name: "Twitter",
    href: "https://twitter.com/wearefiniam",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brown py-16">
      <div className="flex flex-col justify-between md:flex-row mx-auto max-w-6xl">
        <div>
          <p className="text-beige-white font-large">
            Created for FVM <br />
            Space Warp hackathon
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <p className="text-beige-white font-large mr-2">Made by</p>
            <Image
              src="/images/finiam-logo.svg"
              alt="Finiam"
              width={100}
              height={28}
            />
          </div>
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.name}
              >
                <Image src={item.src} alt={item.name} width={48} height={48} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
