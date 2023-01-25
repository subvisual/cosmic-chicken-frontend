import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";
import classNames from "classnames";

const EGG_TEXT = [
  "leverage FVM to establish a undercollateralized lending protocol",
  "using the novel bonding mechanism introduced by Liquity team",
  "diminish the capital cost of collateral for Storage Providers",
];

export default function Hero() {
  const [activeEgg, setActiveEgg] = useState<number>();

  return (
    <section className={styles["root"]}>
      <div className="relative flex-1 flex items-end justify-center 2xl:mb-4">
        <Image
          src="/images/asteroid-2.png"
          alt="An asteroid"
          width={117}
          height={126}
          className={styles["asteroid-2"]}
        />
        <div className={styles["asteroid-1"]}>
          <Image
            src="/images/asteroid-1.png"
            alt="Another asteroid"
            width={254}
            height={236}
          />
        </div>
        <div className={styles["astronaut"]}>
          <Image src="/images/astronaut.png" alt="An astronaut" fill />
        </div>
        <div className={styles["egg-holder"]}>
          {Array(3)
            .fill(0)
            .map((_, ind) => (
              <button
                type="button"
                className={classNames(
                  styles["egg-btn"],
                  activeEgg === ind && styles["egg-active"]
                )}
                onClick={() =>
                  setActiveEgg(ind === activeEgg ? undefined : ind)
                }
                key={ind}
              >
                <Image
                  src="/images/egg.png"
                  alt="Filecoin "
                  width={84}
                  height={102}
                  style={{
                    animationDelay: `${[2, 5, 7][ind]}s`,
                  }}
                  className={styles["egg"]}
                />
              </button>
            ))}
          <p
            className={classNames(
              styles["egg-text"],
              "absolute top-1/2 text-orange text-center font-hand text-large -rotate-6 transition-opacity",
              activeEgg !== undefined ? "delay-500" : "",
              activeEgg !== undefined ? "opacity-100" : "opacity-0"
            )}
          >
            {activeEgg !== undefined && EGG_TEXT[activeEgg]}
          </p>
          <Image
            src="/images/egg-holder-back.png"
            alt="Filecoin "
            width={301}
            height={164}
            className={styles["egg-holder-back"]}
          />
          <Image
            src="/images/egg-holder.png"
            alt="A box of Filecoin eggs"
            width={303}
            height={72}
            className={styles["egg-holder-base"]}
          />
        </div>
      </div>
      <p className="text-center text-large  max-w-2xl 2xl:max-w-lg mx-auto text-brown">
        Borrow collateral from reputable lenders and lock the future income
        until the storage providers have repaid their loan.
      </p>

      <div className="absolute top-0 h-screen"></div>
    </section>
  );
}
