import Image from "next/image";
import { LoanMockType } from "../data/loansMock";
import { truncateAmount } from "../utils/truncate";

export default function LoanCard({ loan }: { loan: LoanMockType }) {
  return (
    <div className="rounded-3xl bg-beige drop-shadow-light p-12 pt-14">
      <div className="flex justify-between py-4 border-b border-light-brown w-full mb-12">
        <p>Loan started</p>
        <p>{new Date(parseInt(loan.created_at)).toLocaleDateString("en-UK")}</p>
      </div>
      <div
        className={`w-full flex gap-12 ${
          loan.status === "active" ? "flex-col" : "justify-between items-center"
        }`}
      >
        <div className="flex flex-col gap-4">
          <p className="text-xl">Amount paid</p>
          <p className="text-5xl">
            {truncateAmount(parseInt(loan.amount_deposited.value))} {loan.amount_deposited.token}
          </p>
        </div>
        <div className="flex justify-between w-auto items-end">
          <div className="flex flex-col gap-4 border border-brown rounded-3xl p-6">
            <p className="text-xl">Total loan</p>
            <p className="text-4xl">
              {truncateAmount(parseInt(loan.total_deposit.value))} {loan.total_deposit.token}
            </p>
          </div>
          {loan.status === "active" && (
            <Image src="/images/storage.png" alt="storage facility" width={242} height={69.5} />
          )}
        </div>
      </div>
    </div>
  );
}
