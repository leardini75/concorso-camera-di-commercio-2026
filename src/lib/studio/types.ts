import type { SubjectKey } from "../exam";

export type StudyTerm = {
  term: string;
  def: string;
};

/** Un punto della scheda con materiale di studio completo */
export type StudyPoint = {
  id: string;
  title: string;
  /** Sintesi in 1–2 frasi */
  lead: string;
  /** Paragrafi di spiegazione */
  body: string[];
  /** Glossario essenziale */
  terms?: StudyTerm[];
  /** Cosa serve in prova (quiz / sintetica) */
  examTip: string;
  /** Riferimenti normativi */
  refs?: string[];
};

export type StudyTopic = {
  id: string;
  subject: SubjectKey;
  title: string;
  summary: string;
  remember: string;
  points: StudyPoint[];
};

/** Compatibilità con codice che legge ancora i titoli dei punti come bullets */
export function topicBullets(topic: StudyTopic): string[] {
  return topic.points.map((p) => p.title);
}
