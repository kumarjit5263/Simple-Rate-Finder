import type { Account } from "../types/account";
import { calculateAnnualInterest } from "../utils/calculateInterest";

type ComparisonTableProps = {
  accounts: Account[];
  balance: number;
};

export default function ComparisonTable({
  accounts,
  balance,
}: ComparisonTableProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Compare Available Options
      </h2>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Bank</th>
            <th className="p-3 text-left">Account</th>
            <th className="p-3 text-left">Rate</th>
            <th className="p-3 text-left">Annual Earnings</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.id}
              className="border-b"
            >
              <td className="p-3">
                {account.bank}
              </td>

              <td className="p-3">
                {account.name}
              </td>

              <td className="p-3">
                {account.rate}%
              </td>

              <td className="p-3">
                $
                {calculateAnnualInterest(
                  balance,
                  account.rate
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}