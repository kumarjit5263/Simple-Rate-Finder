import type { Account } from "../types/account";

type Props = {
  account: Account;
  annualInterest: number;
};

export default function RecommendationReason({
  account,
  annualInterest,
}: Props) {
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        Why We Recommend This
      </h2>

      <div className="space-y-3">
        <p>
          Highest available interest rate:
          <strong>
            {" "}
            {account.rate}%
          </strong>
        </p>

        <p>
          Estimated annual earnings:
          <strong>
            {" "}
            ${annualInterest.toFixed(2)}
          </strong>
        </p>

        <p>
          Monthly fee:
          <strong>
            {" "}
            ${account.monthlyFee}
          </strong>
        </p>

        <p>
          Account type:
          <strong>
            {" "}
            {account.accountType}
          </strong>
        </p>
      </div>
    </div>
  );
}