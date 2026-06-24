import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Account } from "../types/account";
import { calculateAnnualInterest } from "../utils/calculateInterest";

type SavingsChartProps = {
  accounts: Account[];
  balance: number;
};

export default function SavingsChart({
  accounts,
  balance,
}: SavingsChartProps) {
  const chartData = accounts.map((account) => ({
    bank: account.bank,
    earnings: calculateAnnualInterest(
      balance,
      account.rate
    ),
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Annual Earnings Comparison
      </h2>

      <div className="h-96">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="bank" />

            <YAxis />

            <Tooltip />

            <Bar 
              dataKey="earnings"
              fill="#16a34a"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}