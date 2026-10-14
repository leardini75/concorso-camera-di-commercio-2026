import { ExamSimulation } from "@/components/exam-simulation";

export default function SimulazionePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Simulazione</h1>
        <p className="mt-2 text-muted-foreground">
          Riproduce il formato ufficiale della prova unica del 21 ottobre 2026: timer 180
          minuti, 14 quiz e 4 sintetiche.
        </p>
      </header>
      <ExamSimulation />
    </div>
  );
}
