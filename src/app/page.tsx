import type { ReactNode } from "react";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { ProgressPanel } from "@/components/progress-panel";
import { EXAM } from "@/lib/exam";
import { QUIZ_BANK } from "@/lib/quiz-bank";
import { SHORT_PROMPTS } from "@/lib/sintetiche";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, ClipboardCheck, PenLine, Timer } from "lucide-react";

export default function HomePage() {
  return (
    <div className="grain relative overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="max-w-3xl animate-rise">
          <p className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Prova Unica{" "}
            <span className="text-primary">B3</span>
          </p>
          <div className="hero-underline mt-3 h-1 w-28 rounded-full bg-primary" />
          <h1 className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            Allenati per l&apos;esame scritto del concorso{" "}
            <span className="font-medium text-ink">{EXAM.title}</span> —{" "}
            {EXAM.ente}.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Formato ufficiale: {EXAM.provaUnica.quizCount} quiz e{" "}
            {EXAM.provaUnica.shortCount} risposte sintetiche in{" "}
            {EXAM.provaUnica.durationMinutes} minuti. Soglia orale:{" "}
            {EXAM.provaUnica.passScore}/{EXAM.provaUnica.maxScore}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 animate-rise-delay">
            <Link
              href="/simulazione"
              className={cn(buttonVariants({ size: "lg" }), "gap-1.5")}
            >
              Simula la prova
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/quiz"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Esercita i quiz
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-xl animate-rise-delay-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Alla prova · {EXAM.provaUnica.dateLabel} · {EXAM.provaUnica.timeLabel}
          </p>
          <Countdown />
          <p className="mt-3 text-xs text-muted-foreground">{EXAM.provaUnica.venue}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <ProgressPanel />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PathCard
            href="/studio"
            icon={<BookOpen className="size-5" />}
            title="Schede studio"
            body="8 argomenti e 41 punti con spiegazioni, glossario e consigli per la prova."
          />
          <PathCard
            href="/quiz"
            icon={<ClipboardCheck className="size-5" />}
            title={`${QUIZ_BANK.length} quiz`}
            body="Banca domande a 4 opzioni, con spiegazione dopo ogni risposta."
          />
          <PathCard
            href="/sintetiche"
            icon={<PenLine className="size-5" />}
            title={`${SHORT_PROMPTS.length} sintetiche`}
            body="Tracce da 1800 battute, punti chiave e schemi modello."
          />
          <PathCard
            href="/simulazione"
            icon={<Timer className="size-5" />}
            title="Simulazione 180′"
            body="Stesso mix della prova: 14 quiz + 4 sintetiche con timer."
          />
        </div>

        <div className="mt-10 rounded-xl border border-border/70 bg-card/60 p-5 sm:p-6">
          <h2 className="font-heading text-xl font-semibold text-ink">Materie della prova unica</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-primary">
                {EXAM.subjects.amministrativo.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {EXAM.subjects.amministrativo.focus}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">
                {EXAM.subjects.commerciale.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {EXAM.subjects.commerciale.focus}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{EXAM.scoringNote}</p>
        </div>
      </section>
    </div>
  );
}

function PathCard({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border/80 bg-card/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h2 className="mt-4 font-heading text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </Link>
  );
}
