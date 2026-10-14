import { TRACCE } from "@/lib/tracce";
import { EXAM } from "@/lib/exam";
import { Badge } from "@/components/ui/badge";

export default function TraccePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Tracce e criteri
        </h1>
        <p className="mt-2 text-muted-foreground">
          Raccolta delle tracce pubbliche del concorso B3 a Trento e criteri 2026. Verifica
          sempre gli aggiornamenti sul{" "}
          <a
            href={EXAM.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            sito camerale
          </a>
          .
        </p>
      </header>

      <div className="space-y-4">
        {TRACCE.map((t) => (
          <article
            key={t.id}
            className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{t.year}</Badge>
              <Badge variant="outline">
                {t.kind === "scritta"
                  ? "Prova scritta"
                  : t.kind === "orale"
                    ? "Orale"
                    : "Criteri"}
              </Badge>
              {t.subject ? <span className="text-xs text-muted-foreground">{t.subject}</span> : null}
            </div>
            <h2 className="mt-3 font-heading text-lg font-semibold text-ink">{t.ente}</h2>
            {t.note ? (
              <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
            ) : null}
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {t.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
