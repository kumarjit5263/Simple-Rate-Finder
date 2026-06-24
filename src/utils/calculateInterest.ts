export function calculateAnnualInterest(
  balance: number,
  rate: number
): number {
  return (balance * rate) / 100;
}