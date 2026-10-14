/** Metadati ufficiali della prova unica B3 – Camera di Commercio I.A.T.A. di Trento 2026 */

export const EXAM = {
  title: "Assistente tecnico-amministrativo B3",
  ente: "Camera di Commercio I.A.T.A. di Trento",
  posti: 5,
  provaUnica: {
    dateLabel: "mercoledì 21 ottobre 2026",
    timeLabel: "ore 15:00",
    venue: "Liceo Scientifico Leonardo da Vinci — via Madruzzo 24, Trento",
    /** ISO local Europe/Rome approx */
    iso: "2026-10-21T15:00:00+02:00",
    durationMinutes: 180,
    passScore: 18,
    maxScore: 30,
    quizCount: 14,
    quizAdmin: 7,
    quizCommercial: 7,
    quizPointsEach: 1,
    shortCount: 4,
    shortAdmin: 2,
    shortCommercial: 2,
    shortMaxPointsEach: 4,
    shortMaxChars: 1800,
  },
  subjects: {
    amministrativo: {
      label: "Diritto amministrativo",
      focus:
        "L. 241/1990, GDPR (Reg. UE 679/2016), D.Lgs. 33/2013, D.P.R. 445/2000",
    },
    commerciale: {
      label: "Diritto commerciale",
      focus: "Imprenditore, impresa e società",
    },
  },
  scoringNote:
    "Quiz: 1 punto per risposta corretta; errata o omessa = 0. Sintetiche: max 4 punti ciascuna (completezza, aderenza, chiarezza). Soglia ammissione all'orale: 18/30.",
  officialUrl:
    "https://www.tn.camcom.it/concorso-pubblico-tempo-indeterminato-b3-anno-2026",
} as const;

export type SubjectKey = "amministrativo" | "commerciale";

export const SUBJECT_LABEL: Record<SubjectKey, string> = {
  amministrativo: "Amministrativo",
  commerciale: "Commerciale",
};
