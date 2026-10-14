import type { SubjectKey } from "../exam";
import type { StudyTopic } from "./types";
import { AMMINISTRATIVO_TOPICS } from "./topics-amministrativo";
import { COMMERCIALE_TOPICS } from "./topics-commerciale";

export type { StudyPoint, StudyTerm, StudyTopic } from "./types";
export { topicBullets } from "./types";
export { buildPointSpeech, buildTopicSpeech } from "./speech-text";

export const STUDY_TOPICS: StudyTopic[] = [
  ...AMMINISTRATIVO_TOPICS,
  ...COMMERCIALE_TOPICS,
];

export function getTopicsBySubject(subject: SubjectKey | "all"): StudyTopic[] {
  if (subject === "all") return STUDY_TOPICS;
  return STUDY_TOPICS.filter((t) => t.subject === subject);
}

export function getTopicById(id: string): StudyTopic | undefined {
  return STUDY_TOPICS.find((t) => t.id === id);
}
