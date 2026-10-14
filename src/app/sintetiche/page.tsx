import { SinteticaTrainer } from "@/components/sintetica-trainer";
import { EXAM } from "@/lib/exam";

export default function SintetichePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Risposte sintetiche
        </h1>
        <p className="mt-2 text-muted-foreground">
          In prova: {EXAM.provaUnica.shortCount} domande (2+2), max{" "}
          {EXAM.provaUnica.shortMaxChars} battute, fino a{" "}
          {EXAM.provaUnica.shortMaxPointsEach} punti ciascuna. Criteri: completezza,
          aderenza, chiarezza.
        </p>
      </header>
      <SinteticaTrainer />
    </div>
  );
}
