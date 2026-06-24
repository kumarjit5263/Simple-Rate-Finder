type Insight = {
  bank: string;
  difference: number;
};

type SavingsInsightCardProps = {
  insights: Insight[];
};

export default function SavingsInsightCard({
  insights,
}: SavingsInsightCardProps) {
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        Potential Additional Earnings
      </h2>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div key={insight.bank}>
            <strong>
              +$
              {insight.difference.toFixed(2)}
            </strong>
            {" "}per year compared to{" "}
            {insight.bank}
          </div>
        ))}
      </div>
    </div>
  );
}