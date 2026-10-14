"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  claimSpeech,
  releaseSpeech,
  stopAllSpeech,
  subscribeSpeech,
} from "@/lib/studio/speech-controller";
import { Pause, Play, Square, Volume2 } from "lucide-react";

type Rate = 0.85 | 1 | 1.15;

type Props = {
  text: string;
  label: string;
  compact?: boolean;
  className?: string;
};

function pickItalianVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang.toLowerCase() === "it-it") ||
    voices.find((v) => v.lang.toLowerCase().startsWith("it")) ||
    null
  );
}

export function StudioAudioPlayer({
  text,
  label,
  compact = false,
  className,
}: Props) {
  const reactId = useId();
  const playerId = `audio-${reactId}`;
  const [supported, setSupported] = useState(true);
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  const [rate, setRate] = useState<Rate>(1);
  const [activeElsewhere, setActiveElsewhere] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const statusRef = useRef(status);
  statusRef.current = status;

  useEffect(() => {
    const ok =
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      typeof SpeechSynthesisUtterance !== "undefined";
    setSupported(ok);

    if (!ok) return;

    // Alcuni browser caricano le voci in async
    const warm = () => {
      window.speechSynthesis.getVoices();
    };
    warm();
    window.speechSynthesis.addEventListener("voiceschanged", warm);

    const unsub = subscribeSpeech((activeId) => {
      if (activeId && activeId !== playerId) {
        setActiveElsewhere(true);
        setStatus("idle");
        utteranceRef.current = null;
      } else {
        setActiveElsewhere(false);
      }
    });

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", warm);
      unsub();
      if (statusRef.current !== "idle") {
        window.speechSynthesis.cancel();
        releaseSpeech(playerId);
      }
    };
  }, [playerId]);

  function speak() {
    if (!supported) return;
    claimSpeech(playerId);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = rate;
    const voice = pickItalianVoice();
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      setStatus("idle");
      utteranceRef.current = null;
      releaseSpeech(playerId);
    };
    utterance.onerror = () => {
      setStatus("idle");
      utteranceRef.current = null;
      releaseSpeech(playerId);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setStatus("playing");
  }

  function onPlay() {
    if (!supported) return;
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
      return;
    }
    speak();
  }

  function onPause() {
    if (!supported || status !== "playing") return;
    window.speechSynthesis.pause();
    setStatus("paused");
  }

  function onStop() {
    if (!supported) return;
    stopAllSpeech();
    setStatus("idle");
    utteranceRef.current = null;
  }

  if (!supported) {
    return (
      <p
        className={cn("text-xs text-muted-foreground", className)}
        role="status"
      >
        Lettura audio non disponibile in questo browser. Prova Chrome, Edge o
        Safari aggiornati.
      </p>
    );
  }

  const isActive = status === "playing" || status === "paused";

  return (
    <div
      className={cn(
        "rounded-lg border border-border/70 bg-muted/30",
        compact ? "px-2.5 py-2" : "px-3 py-3",
        className
      )}
      role="group"
      aria-label={`Lettura audio: ${label}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Volume2
          className="size-4 shrink-0 text-primary"
          aria-hidden="true"
        />
        <span className="text-xs font-medium text-ink sm:text-sm">
          {compact ? "Ascolta" : `Ascolta: ${label}`}
        </span>

        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          {status === "playing" ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={onPause}
              aria-label={`Metti in pausa: ${label}`}
            >
              <Pause className="size-3.5" data-icon="inline-start" />
              Pausa
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              variant={isActive ? "outline" : "default"}
              onClick={onPlay}
              aria-label={
                status === "paused"
                  ? `Riprendi lettura: ${label}`
                  : `Avvia lettura: ${label}`
              }
            >
              <Play className="size-3.5" data-icon="inline-start" />
              {status === "paused" ? "Riprendi" : "Ascolta"}
            </Button>
          )}

          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onStop}
            disabled={status === "idle" && !activeElsewhere}
            aria-label={`Interrompi lettura: ${label}`}
          >
            <Square className="size-3.5" data-icon="inline-start" />
            Stop
          </Button>
        </div>
      </div>

      {!compact ? (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground" id={`${playerId}-rate`}>
            Velocità
          </span>
          <div
            className="flex gap-1"
            role="radiogroup"
            aria-labelledby={`${playerId}-rate`}
          >
            {(
              [
                [0.85, "Lenta"],
                [1, "Normale"],
                [1.15, "Veloce"],
              ] as const
            ).map(([value, name]) => (
              <Button
                key={value}
                type="button"
                size="xs"
                variant={rate === value ? "secondary" : "ghost"}
                role="radio"
                aria-checked={rate === value}
                onClick={() => setRate(value)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        {status === "playing"
          ? `Lettura in corso: ${label}`
          : status === "paused"
            ? `Lettura in pausa: ${label}`
            : `Lettura ferma: ${label}`}
      </p>
    </div>
  );
}
