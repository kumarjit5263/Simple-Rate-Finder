import type { Account } from "../types/account";
import { calculateAnnualInterest } from "./calculateInterest";

export function getSavingsInsights(
  balance: number,
  recommendedAccount: Account,
  accounts: Account[]
) {
  const recommendedEarnings = calculateAnnualInterest(
    balance,
    recommendedAccount.rate
  );

  return accounts
    .filter(
      (account) => account.id !== recommendedAccount.id
    )
    .map((account) => {
      const earnings = calculateAnnualInterest(
        balance,
        account.rate
      );

      return {
        bank: account.bank,
        difference:
          recommendedEarnings - earnings,
      };
    })
    .sort(
      (a, b) =>
        b.difference - a.difference
    );
}