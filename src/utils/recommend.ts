import type { Account } from "../types/account";

export function getBestAccount(
  accounts: Account[]
): Account {
  return accounts.reduce((best, current) =>
    current.rate > best.rate ? current : best
  );
}