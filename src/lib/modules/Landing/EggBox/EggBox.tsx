import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./EggBox.module.css";

const EGG_TEXT = [
  "leverage FVM to establish a undercollateralized lending protocol",
  "using the novel bonding mechanism introduced by Liquity team",
  "diminish the capital cost of collateral for Storage Providers",
];

export default function EggBox() {
  const [activeEgg, setActiveEgg] = useState<number>();

  return (
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
            onClick={() => setActiveEgg(ind === activeEgg ? undefined : ind)}
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
          "absolute top-1/2 text-orange text-center font-hand text-3xl leading-tight -rotate-6 transition-opacity",
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
  );
}
