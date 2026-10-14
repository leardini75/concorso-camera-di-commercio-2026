export type TraceItem = {
  id: string;
  ente: string;
  year: string;
  kind: "scritta" | "orale" | "criteri";
  subject?: string;
  items: string[];
  note?: string;
};

export const TRACCE: TraceItem[] = [
  {
    id: "trento-2021-adm",
    ente: "Camera di Commercio I.A.T.A. di Trento",
    year: "2021",
    kind: "scritta",
    subject: "Diritto amministrativo",
    note:
      "Concorso Assistente tecnico-amministrativo B3 (4 posti). Tracce pubbliche della prova scritta.",
    items: [
      "Casi di nullità del provvedimento amministrativo",
      "Il dovere di motivazione del provvedimento amministrativo",
      "I principi costituzionali dell'azione amministrativa nell'articolo 97 Cost.",
      "Le fasi del procedimento amministrativo",
    ],
  },
  {
    id: "trento-2021-com",
    ente: "Camera di Commercio I.A.T.A. di Trento",
    year: "2021",
    kind: "scritta",
    subject: "Diritto commerciale",
    note: "Stesso concorso B3 2021 — prova di commerciale.",
    items: [
      "Il Registro delle imprese",
      "S.r.l. unipersonale",
      "Gli elementi caratterizzanti il concetto di imprenditore ai sensi dell'art. 2082 c.c.",
      "Il socio accomandante di S.a.s.",
    ],
  },
  {
    id: "trento-2026-criteri",
    ente: "Camera di Commercio I.A.T.A. di Trento",
    year: "2026",
    kind: "criteri",
    note:
      "Struttura ufficiale della prova unica (criteri di valutazione pubblicati dalla Commissione).",
    items: [
      "14 quiz a risposta multipla (4 opzioni): 7 amministrativo + 7 commerciale — 1 punto ciascuno; errata/omessa = 0",
      "4 risposte sintetiche (max 1800 battute): 2 amministrativo + 2 commerciale — max 4 punti ciascuna",
      "Punteggio massimo 30; soglia per l'orale: 18/30",
      "Durata: 180 minuti",
      "Amministrativo: L. 241/1990, GDPR 679/2016, D.Lgs. 33/2013, D.P.R. 445/2000",
      "Commerciale: imprenditore, impresa e società",
      "Criteri sintetiche (in ordine): completezza/correttezza; aderenza; chiarezza espositiva",
    ],
  },
  {
    id: "firenze-temi-utili",
    ente: "Camera di Commercio di Firenze (temi affini)",
    year: "2020",
    kind: "scritta",
    note:
      "Tracce di concorsi camerali affini: utili per allenare lo schema di risposta, anche se il formato 2026 a Trento è quiz + sintetiche.",
    items: [
      "Elementi del provvedimento amministrativo",
      "Registro delle Imprese e REA: caratteristiche e funzioni",
      "Responsabile del procedimento (L. 241/1990)",
      "Diritto di accesso agli atti (L. 241/1990)",
      "Forme di semplificazione nel procedimento (L. 241/1990)",
      "Differenze di regime pubblicitario fra REA e Registro delle imprese",
      "SCIA",
      "Nullità e annullabilità del provvedimento",
    ],
  },
];
