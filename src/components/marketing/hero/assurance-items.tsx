import { Check } from "lucide-react";

interface AssuranceItemProps {
  text: string;
}

export function AssuranceItem({ text }: AssuranceItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-green-500/50 p-0.5">
        <Check className="h-3 w-3 text-green-800" />
      </div>
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}