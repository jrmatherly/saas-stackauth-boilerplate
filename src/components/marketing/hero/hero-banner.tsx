import { LucideGift } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function HeroBanner() {
  return (
    <div className="text-highlight mx-auto flex flex-wrap items-center justify-center rounded-full border border-green-500/50 bg-white p-px px-4 py-1 text-sm font-normal">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span className="flex items-center gap-2 rounded-full font-black text-green-500">
          <LucideGift className="size-4 rounded-full text-green-500" />
          50$ off
        </span>
        <span className="ml-1 block font-medium text-green-500">
          with our Launch Deal!
        </span>
      </AnimatedShinyText>
    </div>
  );
}
