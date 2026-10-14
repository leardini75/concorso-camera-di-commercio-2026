import { EXAM } from "@/lib/exam";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-[color-mix(in_srgb,var(--card)_80%,transparent)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Materiale di studio non ufficiale per la prova unica · {EXAM.title}
        </p>
        <p className="text-xs">
          Fonte criteri: {EXAM.ente} · verifica sempre il{" "}
          <a
            href={EXAM.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            sito ufficiale
          </a>
        </p>
      </div>
    </footer>
  );
}
