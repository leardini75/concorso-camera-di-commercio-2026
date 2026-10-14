"use client";

import { useMemo, useState } from "react";
import { EXAM, type SubjectKey } from "@/lib/exam";
import { getShortBySubject, type ShortPrompt } from "@/lib/sintetiche";
import { recordSinteticaDone } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Mode = SubjectKey | "all";

export function SinteticaTrainer() {
  const [mode, setMode] = useState<Mode>("all");
  const prompts = useMemo(() => getShortBySubject(mode), [mode]);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [selfScore, setSelfScore] = useState<number | null>(null);

  const prompt: ShortPrompt | undefined = prompts[idx];
  const max = EXAM.provaUnica.shortMaxChars;
  const len = text.length;
  const over = len > max;

  function changeMode(m: Mode) {
    setMode(m);
    setIdx(0);
    setText("");
    setShowModel(false);
    setSelfScore(null);
  }

  function go(delta: number) {
    const next = Math.min(prompts.length - 1, Math.max(0, idx + delta));
    setIdx(next);
    setText("");
    setShowModel(false);
    setSelfScore(null);
  }

  function markDone(score: number) {
    setSelfScore(score);
    recordSinteticaDone();
  }

  if (!prompt) {
    return <p className="text-muted-foreground">Nessuna traccia per questo filtro.</p>;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["all", "Tutte"],
              ["amministrativo", "Amministrativo"],
              ["commerciale", "Commerciale"],
            ] as const
          ).map(([id, label]) => (
            <Button
              key={id}
              size="sm"
              variant={mode === id ? "default" : "outline"}
              onClick={() => changeMode(id)}
            >
              {label}
            </Button>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {idx + 1} / {prompts.length}
        </span>
      </div>

      <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            {prompt.subject === "amministrativo" ? "Amministrativo" : "Commerciale"}
          </Badge>
          {prompt.source ? (
            <span className="text-xs text-muted-foreground">{prompt.source}</span>
          ) : null}
        </div>
        <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
          {prompt.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">{prompt.prompt}</p>

        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Punti da coprire
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {prompt.keypoints.map((k) => (
              <li
                key={k}
                className="rounded-md border border-border/80 bg-muted/50 px-2 py-1 text-xs text-foreground"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>

        <label className="mt-5 block">
          <span className="sr-only">La tua risposta sintetica</span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
            placeholder="Scrivi qui la risposta sintetica (max 1800 battute, come in prova)…"
            className={cn(
              "w-full resize-y rounded-lg border bg-background px-3 py-3 text-sm leading-relaxed outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
              over ? "border-destructive" : "border-border"
            )}
          />
        </label>
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>Limite ufficiale: {max} battute</span>
          <span className={cn(over && "font-semibold text-destructive")}>
            {len} / {max}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setShowModel((v) => !v)}>
            {showModel ? "Nascondi schema" : "Mostra schema di risposta"}
          </Button>
          <Button variant="outline" onClick={() => go(-1)} disabled={idx === 0}>
            Precedente
          </Button>
          <Button variant="outline" onClick={() => go(1)} disabled={idx >= prompts.length - 1}>
            Successiva
          </Button>
        </div>

        {showModel ? (
          <div className="mt-5 space-y-3 rounded-lg border border-border/70 bg-muted/40 p-4">
            <p className="text-sm font-medium text-ink">Schema modello (per confronto)</p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
              {prompt.modelAnswer}
            </p>
            <div className="border-t border-border/60 pt-3">
              <p className="mb-2 text-xs text-muted-foreground">
                Autovalutazione (max 4 punti, come in prova): completezza, aderenza, chiarezza
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Button
                    key={n}
                    size="sm"
                    variant={selfScore === n ? "default" : "outline"}
                    onClick={() => markDone(n)}
                  >
                    {n}
                  </Button>
                ))}
              </div>
              {selfScore != null ? (
                <p className="mt-2 text-sm text-teal">
                  Segnato {selfScore}/4 — progressi aggiornati.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </article>
    </div>
  );
}
