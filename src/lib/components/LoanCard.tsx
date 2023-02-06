import Image from "next/image";
import { truncateAmount } from "../utils/truncate";

export default function LoanCard({ loan }: { loan: LoanData }) {
  const repaidAmount = Number(loan.projection_fields.repaid_amount) * 10 ** -18;
  const totalAmount = Number(loan.projection_fields.total_amount) * 10 ** -18;
  const loanActive = totalAmount > repaidAmount;

  return (
    <div className="rounded-3xl bg-beige drop-shadow-light p-12 pt-8">
      <div className="flex justify-between py-4 border-b border-light-brown w-full mb-12">
        <p>Loan started</p>
        <p>{new Date(loan.inserted_at).toLocaleDateString("en-UK")}</p>
      </div>
      <div
        className={`w-full flex gap-12 ${loanActive ? "flex-col" : "justify-between items-center"}`}
      >
        <div className="flex flex-col gap-4">
          <p className="text-xl">Amount paid</p>
          <p className="text-5xl">{truncateAmount(repaidAmount)} TFIL</p>
        </div>
        <div className="flex justify-between w-auto items-end">
          <div className="flex flex-col gap-4 border border-brown rounded-3xl p-6">
            <p className="text-xl">Total loan</p>
            <p className="text-4xl">{truncateAmount(totalAmount)} TFIL</p>
          </div>
          {loanActive && (
            <Image src="/images/storage.png" alt="storage facility" width={242} height={69.5} />
          )}
        </div>
      </div>
    </div>
  );
}
