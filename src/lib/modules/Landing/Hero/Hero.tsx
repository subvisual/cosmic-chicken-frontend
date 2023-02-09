import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";
import classNames from "classnames";
import EggBox from "../EggBox";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles["root"]}>
      <div className={styles["hero-img"]}>
        <Image
          src="/images/asteroid-2.png"
          alt="An asteroid"
          width={117}
          height={126}
          className={styles["asteroid-2"]}
        />
        <div className={styles["asteroid-1"]}>
          <Image src="/images/asteroid-1.png" alt="Another asteroid" width={254} height={236} />
        </div>
        <div className={styles["astronaut"]}>
          <Image src="/images/astronaut.png" alt="An astronaut" fill />
        </div>
        <EggBox />
      </div>
      <div className="text-center">
        <p className="text-center text-large  max-w-2xl 2xl:max-w-lg mx-auto text-brown mb-8">
          Borrow collateral from reputable lenders and lock the future income until the storage
          providers have repaid their loan.
        </p>
        <Link href="/about" className="cta-primary">
          Learn more
        </Link>
      </div>
      <div className="absolute top-0 h-screen"></div>
    </section>
  );
}
