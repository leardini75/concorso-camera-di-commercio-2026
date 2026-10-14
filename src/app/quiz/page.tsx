import { QuizRunner } from "@/components/quiz-runner";
import { QUIZ_BANK } from "@/lib/quiz-bank";

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Quiz</h1>
        <p className="mt-2 text-muted-foreground">
          {QUIZ_BANK.length} quesiti a 4 opzioni su amministrativo e commerciale. Nessuna
          penalità: come in prova, errata o omessa vale 0.
        </p>
      </header>
      <QuizRunner />
    </div>
  );
}
