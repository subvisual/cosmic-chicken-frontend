import { NftMockType } from "../data/nftDataMock";
import Image from "next/image";

export default function NftCard({ nft }: { nft: NftMockType }) {
  return (
    <div
      key={nft.projection_id}
      className="flex gap-12 rounded-3xl bg-beige drop-shadow-light p-12 pt-14"
    >
      <Image src={`/images/bonds/bond-${nft.status}.svg`} alt="" width={142.26} height={208.64} />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-around flex-wrap gap-8 py-12 w-full">
          <div>
            <p>Created at</p>
            <p>{new Date(parseInt(nft.createdAt)).toLocaleDateString("en-UK")}</p>
          </div>
          <div>
            <p>Deposit</p>
            <p>{nft.deposit.value + " " + nft.deposit.token}</p>
          </div>
          <div>
            <p>Accrued value</p>
            <p>{nft.accruedValue.value + " " + nft.accruedValue.token}</p>
          </div>
        </div>
        {nft.status === "bonding" && (
          <>
            <hr className="w-full" />
            <div className="px-12 mt-6 flex gap-24 justify-around">
              <button className="btn-orange" onClick={() => console.log("chicken in")}>
                Chicken in
              </button>
              <button className="btn-brown" onClick={() => console.log("chicken out")}>
                Chicken out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
