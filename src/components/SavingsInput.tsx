import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SavingsInputProps = {
  balance: string;
  setBalance: (value: string) => void;
  onSubmit: () => void;
};

export default function SavingsInput({
  balance,
  setBalance,
  onSubmit,
}: SavingsInputProps) {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <Input
        type="number"
        placeholder="Enter savings amount"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />

      <Button
        className="w-full"
        onClick={onSubmit}
      >
        Find My Best Rate
      </Button>
    </div>
  );
}