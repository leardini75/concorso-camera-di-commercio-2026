"use client";

import { useEffect, useState } from "react";
import { loadProgress, resetProgress, type ProgressState } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { QUIZ_BANK } from "@/lib/quiz-bank";

export function ProgressPanel({ compact = false }: { compact?: boolean }) {
  const [p, setP] = useState<ProgressState | null>(null);

  useEffect(() => {
    setP(loadProgress());
  }, []);

  if (!p) return null;

  const accuracy =
    p.quizAnswered > 0 ? Math.round((p.quizCorrect / p.quizAnswered) * 100) : null;

  return (
    <div
      className={
        compact
          ? "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground"
          : "rounded-xl border border-border/80 bg-card/70 p-4 shadow-sm"
      }
    >
      {!compact ? (
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="font-heading text-lg font-semibold text-ink">I tuoi progressi</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setP(resetProgress())}
          >
            Azzera
          </Button>
        </div>
      ) : null}
      <div className={compact ? "contents" : "grid gap-2 sm:grid-cols-2"}>
        <Stat
          label="Quiz risposte"
          value={`${p.quizCorrect}/${p.quizAnswered}${accuracy != null ? ` (${accuracy}%)` : ""}`}
        />
        <Stat label="Quesiti visti" value={`${p.seenQuestionIds.length}/${QUIZ_BANK.length}`} />
        <Stat label="Sintetiche esercitate" value={String(p.sinteticheDone)} />
        <Stat
          label="Simulazioni"
          value={
            p.simulationsCompleted
              ? `${p.simulationsCompleted} (best ${p.bestSimulationScore ?? "—"}/30)`
              : "0"
          }
        />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="font-medium text-foreground">{value}</div>
    </div>
  );
}
