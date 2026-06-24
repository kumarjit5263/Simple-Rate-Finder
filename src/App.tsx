import { useState } from "react";

import Hero from "./components/Hero";
import SavingsInput from "./components/SavingsInput";
import RecommendationCard from "./components/RecommendationCard";
import ComparisonTable from "./components/ComparisonTable";
import RecommendationReason from "./components/RecommendationReason";
import SavingsChart from "./components/SavingsChart";
import SavingsInsightCard from "./components/SavingsInsightCard";
import ConfidenceIndicator from "./components/ConfidenceIndicator";
import Methodology from "./components/Methodology";

import { getSavingsInsights } from "./utils/getSavingsInsights";
import { accounts } from "./data/accounts";
import { getBestAccount } from "./utils/recommend";
import { calculateAnnualInterest } from "./utils/calculateInterest";

import type { Account } from "./types/account";

function App() {
  const [balance, setBalance] = useState("");
  const [recommendedAccount, setRecommendedAccount] =
    useState<Account | null>(null);

  const handleSubmit = () => {
    if (!balance || Number(balance) <= 0) {
      alert("Please enter a valid savings amount.");
      return;
    }

    const bestAccount = getBestAccount(accounts);
    setRecommendedAccount(bestAccount);
  };

  const insights =
  recommendedAccount
    ? getSavingsInsights(
        Number(balance),
        recommendedAccount,
        accounts
      )
    : [];

  const annualInterest = recommendedAccount
  ? calculateAnnualInterest(
      Number(balance),
      recommendedAccount.rate
    )
  : 0;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto max-w-7xl px-6 py-12 space-y-10">
        <Hero />

        <SavingsInput
          balance={balance}
          setBalance={setBalance}
          onSubmit={handleSubmit}
        />

        {recommendedAccount && (
          <>
            {/* Top Recommendation Section */}

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecommendationCard
                  account={recommendedAccount}
                  annualInterest={annualInterest}
                />
              </div>

              <div>
                <SavingsInsightCard
                  insights={insights}
                />
              </div>
            </div>

            {/* Recommendation Details */}

            <RecommendationReason
              account={recommendedAccount}
              annualInterest={annualInterest}
            />

            <ConfidenceIndicator />

            {/* Chart */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SavingsChart
                accounts={accounts}
                balance={Number(balance)}
              />
            </div>

            {/* Table */}

            <div className="rounded-2xl border p-6 shadow-sm">
              <ComparisonTable
                accounts={accounts}
                balance={Number(balance)}
              />
            </div>

            {/* Methodology */}

            <Methodology />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
