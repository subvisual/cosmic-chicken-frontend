import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles["root"]}>
      <div className="relative flex-1 flex items-end justify-center mb-9">
        <Image
          src="/images/asteroid-2.png"
          alt="An asteroid"
          width={117}
          height={126}
          className={styles["asteroid-2"]}
        />
        <Image
          src="/images/asteroid-1.png"
          alt="Another asteroid"
          width={254}
          height={236}
          className={styles["asteroid-1"]}
        />
        <Image
          src="/images/astronaut.png"
          alt="An astronaut"
          width={254}
          height={457}
          className={styles["astronaut"]}          
        />
        <Image
          src="/images/egg-box.png"
          alt="A box of Filecoin eggs"
          width={304}
          height={227}
          className={styles["eggs"]}
        />
      </div>
      <p className="text-center text-large max-w-lg mx-auto text-brown">
        Borrow collateral from reputable lenders and lock the future income
        until the storage providers have repaid their loan.
      </p>
    </section>
  );
}
