/** Coordina un'unica lettura alla volta tra i player della pagina */

type Listener = (activeId: string | null) => void;

const listeners = new Set<Listener>();
let activeId: string | null = null;

export function getActiveSpeechId() {
  return activeId;
}

export function subscribeSpeech(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notify() {
  for (const listener of listeners) listener(activeId);
}

/** Interrompe eventuali letture e marca questo player come attivo */
export function claimSpeech(id: string) {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  activeId = id;
  notify();
}

export function releaseSpeech(id: string) {
  if (activeId === id) {
    activeId = null;
    notify();
  }
}

export function stopAllSpeech() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  activeId = null;
  notify();
}
