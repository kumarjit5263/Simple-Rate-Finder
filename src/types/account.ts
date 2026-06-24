export interface Account {
  id: number;
  bank: string;
  name: string;
  rate: number;
  minimumBalance: number;
  monthlyFee: number;
  accountType: string;
  description: string;
}