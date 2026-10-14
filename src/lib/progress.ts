const STORAGE_KEY = "b3-studio-progress-v1";

export type ProgressState = {
  quizAnswered: number;
  quizCorrect: number;
  sinteticheDone: number;
  simulationsCompleted: number;
  bestSimulationScore: number | null;
  lastVisited: string | null;
  seenQuestionIds: string[];
};

const defaultState = (): ProgressState => ({
  quizAnswered: 0,
  quizCorrect: 0,
  sinteticheDone: 0,
  simulationsCompleted: 0,
  bestSimulationScore: null,
  lastVisited: null,
  seenQuestionIds: [],
});

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

export function saveProgress(next: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function recordQuizResult(questionId: string, correct: boolean) {
  const p = loadProgress();
  p.quizAnswered += 1;
  if (correct) p.quizCorrect += 1;
  if (!p.seenQuestionIds.includes(questionId)) {
    p.seenQuestionIds.push(questionId);
  }
  p.lastVisited = new Date().toISOString();
  saveProgress(p);
  return p;
}

export function recordSinteticaDone() {
  const p = loadProgress();
  p.sinteticheDone += 1;
  p.lastVisited = new Date().toISOString();
  saveProgress(p);
  return p;
}

export function recordSimulation(score: number) {
  const p = loadProgress();
  p.simulationsCompleted += 1;
  p.bestSimulationScore =
    p.bestSimulationScore == null
      ? score
      : Math.max(p.bestSimulationScore, score);
  p.lastVisited = new Date().toISOString();
  saveProgress(p);
  return p;
}

export function resetProgress() {
  const p = defaultState();
  saveProgress(p);
  return p;
}
