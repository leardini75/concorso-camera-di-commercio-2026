import type { StudyPoint, StudyTopic } from "./types";

/** Testo lineare adatto alla sintesi vocale per un singolo punto */
export function buildPointSpeech(point: StudyPoint, index: number): string {
  const parts: string[] = [
    `Punto ${index + 1}. ${point.title}.`,
    point.lead,
    ...point.body,
  ];

  if (point.terms && point.terms.length > 0) {
    parts.push("Glossario.");
    for (const t of point.terms) {
      parts.push(`${t.term}: ${t.def}`);
    }
  }

  parts.push(`In prova: ${point.examTip}`);

  if (point.refs && point.refs.length > 0) {
    parts.push(`Riferimenti: ${point.refs.join(". ")}.`);
  }

  return parts.join("\n\n");
}

/** Testo lineare per l'intera scheda di studio */
export function buildTopicSpeech(topic: StudyTopic): string {
  const parts: string[] = [
    `Scheda di studio: ${topic.title}.`,
    topic.summary,
  ];

  topic.points.forEach((point, i) => {
    parts.push(buildPointSpeech(point, i));
  });

  parts.push(`Da ricordare: ${topic.remember}`);

  return parts.join("\n\n");
}
