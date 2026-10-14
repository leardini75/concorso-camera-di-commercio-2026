"use client";

import { useEffect, useState } from "react";
import { EXAM } from "@/lib/exam";

type Parts = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function calc(): Parts {
  const target = new Date(EXAM.provaUnica.iso).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(calc());
    const id = setInterval(() => setParts(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!parts) {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 animate-pulse rounded-lg bg-muted/80" />
        ))}
      </div>
    );
  }

  if (parts.done) {
    return (
      <p className="rounded-lg border border-ember/30 bg-ember/10 px-4 py-3 text-sm font-medium text-ink">
        È il giorno della prova unica — in bocca al lupo.
      </p>
    );
  }

  const cells = [
    { label: "giorni", value: parts.days },
    { label: "ore", value: parts.hours },
    { label: "min", value: parts.minutes },
    { label: "sec", value: parts.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-lg border border-border/80 bg-card/80 px-2 py-3 text-center shadow-sm"
        >
          <div className="font-mono text-2xl font-semibold tabular-nums text-ink sm:text-3xl">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
