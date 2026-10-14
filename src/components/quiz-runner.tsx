"use client";

import { useMemo, useState } from "react";
import {
  getQuizBySubject,
  presentDeck,
  type QuizQuestion,
} from "@/lib/quiz-bank";
import type { SubjectKey } from "@/lib/exam";
import { recordQuizResult } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, RotateCcw, X } from "lucide-react";

type Mode = SubjectKey | "all";

const letters = ["A", "B", "C", "D"] as const;

export function QuizRunner({ initialMode = "all" }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [deck, setDeck] = useState<QuizQuestion[]>(() =>
    presentDeck(getQuizBySubject(initialMode))
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  const q = deck[index];
  const progressPct = deck.length ? ((index + (revealed ? 1 : 0)) / deck.length) * 100 : 0;

  const modes: { id: Mode; label: string }[] = useMemo(
    () => [
      { id: "all", label: "Tutti" },
      { id: "amministrativo", label: "Amministrativo" },
      { id: "commerciale", label: "Commerciale" },
    ],
    []
  );

  function restart(nextMode: Mode = mode) {
    setMode(nextMode);
    setDeck(presentDeck(getQuizBySubject(nextMode)));
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setSessionCorrect(0);
    setSessionTotal(0);
  }

  function confirm() {
    if (selected == null || !q || revealed) return;
    const ok = selected === q.correct;
    setRevealed(true);
    setSessionTotal((n) => n + 1);
    if (ok) setSessionCorrect((n) => n + 1);
    recordQuizResult(q.id, ok);
  }

  function next() {
    if (index >= deck.length - 1) {
      setIndex(deck.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  if (!q && sessionTotal === 0) {
    return (
      <p className="text-muted-foreground">Nessun quesito disponibile per questo filtro.</p>
    );
  }

  if (!q) {
    return (
      <div className="rounded-xl border border-border/80 bg-card/80 p-6 text-center shadow-sm">
        <h2 className="font-heading text-2xl font-semibold text-ink">Sessione completata</h2>
        <p className="mt-2 text-muted-foreground">
          {sessionCorrect}/{sessionTotal} corrette
          {sessionTotal
            ? ` (${Math.round((sessionCorrect / sessionTotal) * 100)}%)`
            : ""}
        </p>
        <Button className="mt-6" onClick={() => restart()}>
          <RotateCcw className="size-4" data-icon="inline-start" />
          Nuova sessione
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {modes.map((m) => (
            <Button
              key={m.id}
              size="sm"
              variant={mode === m.id ? "default" : "outline"}
              onClick={() => restart(m.id)}
            >
              {m.label}
            </Button>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Sessione: {sessionCorrect}/{sessionTotal} · Quesito {index + 1}/{deck.length}
        </div>
      </div>

      <Progress value={progressPct} className="h-1.5" />

      <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            {q.subject === "amministrativo" ? "Amministrativo" : "Commerciale"}
          </Badge>
          <span className="text-xs text-muted-foreground">{q.topic}</span>
        </div>
        <h2 className="font-heading text-xl font-semibold leading-snug text-ink sm:text-2xl">
          {q.stem}
        </h2>

        <ul className="mt-5 space-y-2">
          {q.options.map((opt, i) => {
            const isSel = selected === i;
            const isCorrect = revealed && i === q.correct;
            const isWrong = revealed && isSel && i !== q.correct;
            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm transition sm:text-[15px]",
                    !revealed && isSel && "border-primary bg-primary/10",
                    !revealed && !isSel && "border-border hover:border-primary/40 hover:bg-muted/50",
                    isCorrect && "border-teal bg-teal/10 text-ink",
                    isWrong && "border-destructive/50 bg-destructive/10",
                    revealed && !isCorrect && !isWrong && "opacity-60"
                  )}
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-xs font-semibold">
                    {letters[i]}
                  </span>
                  <span className="flex-1 pt-0.5">{opt}</span>
                  {isCorrect ? <Check className="mt-0.5 size-4 shrink-0 text-teal" /> : null}
                  {isWrong ? <X className="mt-0.5 size-4 shrink-0 text-destructive" /> : null}
                </button>
              </li>
            );
          })}
        </ul>

        {revealed ? (
          <div className="mt-5 rounded-lg border border-border/70 bg-muted/40 p-4 text-sm leading-relaxed">
            <p className="font-medium text-ink">
              {selected === q.correct ? "Corretto." : "Non corretto."}
            </p>
            <p className="mt-1 text-muted-foreground">{q.explanation}</p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {!revealed ? (
            <Button onClick={confirm} disabled={selected == null}>
              Conferma
            </Button>
          ) : (
            <Button onClick={next}>
              {index >= deck.length - 1 ? "Vedi risultato" : "Prossimo"}
              <ChevronRight className="size-4" data-icon="inline-end" />
            </Button>
          )}
          <Button variant="outline" onClick={() => restart()}>
            Mescola di nuovo
          </Button>
        </div>
      </article>
    </div>
  );
}
