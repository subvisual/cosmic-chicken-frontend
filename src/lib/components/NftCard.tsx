import Image from "next/image";
import useModal from "../hooks/useModal";
import { truncateAmount } from "../utils/truncate";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { BOND_MANAGER_CONTRACT } from "../constants";
import abi from "../abi/bondManager.json";
import { BigNumber } from "ethers";

export default function NftCard({ nft }: { nft: NftData }) {
  const { renderModal } = useModal();
  const apy = useMemo(() => (Math.random() + 0.2) / 10, [nft.projection_id]);
  const accruedValue = apy + Number(nft.projection_fields.amount) * 10 ** -18;
  const deposit = Number(nft.projection_fields.amount) * 10 ** -18;

  const { config: chickenInConfig } = usePrepareContractWrite({
    address: BOND_MANAGER_CONTRACT,
    abi,
    functionName: "chickenIn",
    args: [nft.projection_id],
    overrides: {
      gasLimit: BigNumber.from(1e10),
    },
  });
  const { write: chickenInWrite } = useContractWrite(chickenInConfig);

  const { config: chickenOutConfig } = usePrepareContractWrite({
    address: BOND_MANAGER_CONTRACT,
    abi,
    functionName: "chickenOut",
    args: [nft.projection_id, 0],
    overrides: {
      gasLimit: BigNumber.from(1e10),
    },
  });
  const { write: chickenOutWrite } = useContractWrite(chickenOutConfig);

  function handleChickenIn() {
    renderModal({
      message: "By chickening in, you lose your initial deposit and get the accrued boosted token",
      onContinue: () => chickenInWrite?.(),
    });
  }

  function handleChickenOut() {
    renderModal({
      message:
        "By chickening out, you lose your accrued boosted token and get your initial deposit back",
      onContinue: () => chickenOutWrite?.(),
    });
  }

  return (
    <div className="flex gap-12 rounded-3xl bg-beige drop-shadow-light p-12 pt-14">
      <div className="flex flex-col gap-4">
        <Image
          src={`/images/bonds/bond-${nft.projection_fields.status}.svg`}
          alt=""
          width={142.26}
          height={208.64}
        />
        <div className="text-center">
          <p className="leading-none">APY</p>
          <p className="font-bold">{truncateAmount(apy * 100, 2)}%</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-around flex-wrap gap-8 py-12 w-full text-center">
          <div>
            <p>Created at</p>
            <p className="font-bold text-xl">
              {new Date(nft.inserted_at).toLocaleDateString("en-UK")}
            </p>
          </div>
          <div>
            <p>Deposit</p>
            <p className="font-bold text-xl">
              {deposit > 1000 || deposit < 0.001 ? deposit.toExponential(1) : deposit} TFIL
            </p>
          </div>
          <div>
            <p>Accrued value</p>
            <p className="font-bold text-xl">{truncateAmount(accruedValue)} bTFIL</p>
          </div>
        </div>
        {nft.projection_fields.status === "active" && (
          <>
            <hr className="w-full" />
            <div className="px-12 mt-6 flex gap-24 justify-around">
              <button className="btn btn-orange" onClick={handleChickenIn}>
                Chicken in
              </button>
              <button className="btn btn-brown" onClick={handleChickenOut}>
                Chicken out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
