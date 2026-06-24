import type { Account } from "../types/account";

type RecommendationCardProps = {
  account: Account;
  annualInterest: number;
};

export default function RecommendationCard({
  account,
  annualInterest,
}: RecommendationCardProps) {
  const monthlyInterest = annualInterest / 12;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="mb-6">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-green-200
            bg-green-50
            text-green-700
            px-3
            py-1
            text-sm
            font-medium
          "
        >
          Best Match
        </span>
      </div>

      <h2 className="text-3xl font-bold">
        {account.bank} {account.name}
      </h2>

      <p className="mt-2 text-muted-foreground">
        {account.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-muted-foreground">
            Interest Rate
          </p>

          <p className="text-2xl font-bold text-green-600">
            {account.rate}%
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-muted-foreground">
            Annual Earnings
          </p>

          <p className="text-2xl font-bold text-green-600">
            ${annualInterest.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-muted-foreground">
            Monthly Earnings
          </p>

          <p className="text-2xl font-bold text-green-600">
            ${monthlyInterest.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}