"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function SwapButton() {
  const [balance, setBalance] = useState<number>(1234.56);
  const [isSwapping, setIsSwapping] = useState(false);
  const [done, setDone] = useState(false);

  const handleSwap = async () => {
    setIsSwapping(true);
    setDone(false);
    // Simulate a network call
    await new Promise((r) => setTimeout(r, 2000));
    // Update balance (mock logic)
    setBalance((prev) => prev + 10);
    setIsSwapping(false);
    setDone(true);
    // Reset done state after animation
    setTimeout(() => setDone(false), 1500);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">Balance:</span>
        <span className="text-xl font-bold">{balance.toFixed(2)} ETH</span>
      </div>
      <Button
        variant="outline"
        size="lg"
        onClick={handleSwap}
        disabled={isSwapping}
        className={cn(
          "relative overflow-hidden",
          isSwapping && "animate-pulse",
          done && "animate-bounce"
        )}
      >
        {isSwapping ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : done ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          "Swap"
        )}
      </Button>
      {done && (
        <span className="text-sm text-green-600 animate-pulse">
          All done!
        </span>
      )}
    </div>
  );
}
