import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto -mt-28 mb-32 max-w-[640px]">
      <div className="flex items-end justify-center">
        <Image
          src="/images/egg-box.png"
          alt="egg box with three egg-shaped asteroids"
          width={300.45}
          height={163.07}
        />
        <Image
          src="/images/astronaut.png"
          alt="astronaut wearing a space suit"
          width={254.9}
          height={457.14}
        />
        <div className="flex flex-col-reverse">
          <Image src="/images/asteroid-1.png" alt="big asteroid" width={254.1} height={236.48} />
          <Image src="/images/asteroid-1.png" alt="small asteroid" width={117.38} height={126.19} />
        </div>
      </div>
      <p className="mx-auto mt-16 text-2xl text-center">
        Borrow collateral from reputable lenders and lock the future income until the storage
        providers have repaid their loan.
      </p>
    </section>
  );
}
