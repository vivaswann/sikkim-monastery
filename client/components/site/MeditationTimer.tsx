import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DURATIONS = [5, 10, 20, 30];

function useBell() {
  const ctxRef = useRef<AudioContext | null>(null);
  useEffect(() => {
    return () => ctxRef.current?.close();
  }, []);

  return () => {
    const ctx = ctxRef.current || new (window.AudioContext || (window as any).webkitAudioContext)();
    ctxRef.current = ctx;

    const t0 = ctx.currentTime;

    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const o2 = ctx.createOscillator();
    const g2 = ctx.createGain();

    o.type = "sine";
    o.frequency.setValueAtTime(660, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.4, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.2);

    o2.type = "sine";
    o2.frequency.setValueAtTime(990, t0);
    g2.gain.setValueAtTime(0.0001, t0);
    g2.gain.exponentialRampToValueAtTime(0.25, t0 + 0.015);
    g2.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.8);

    o.connect(g).connect(ctx.destination);
    o2.connect(g2).connect(ctx.destination);
    o.start();
    o2.start();
    o.stop(t0 + 2.4);
    o2.stop(t0 + 2.0);
  };
}

function DharmaWheel({ spinning }: { spinning: boolean }) {
  return (
    <div className={cn("relative mx-auto", spinning && "animate-spin-slower")}
      style={{ width: 160, height: 160 }}
      aria-label="Dharma wheel"
    >
      <svg viewBox="0 0 100 100" width="160" height="160">
        <circle cx="50" cy="50" r="36" fill="none" stroke="hsl(var(--gold))" strokeWidth="3" />
        <circle cx="50" cy="50" r="6" fill="hsl(var(--gold))" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 50 + Math.cos(angle) * 6;
          const y1 = 50 + Math.sin(angle) * 6;
          const x2 = 50 + Math.cos(angle) * 36;
          const y2 = 50 + Math.sin(angle) * 36;
          const sx = 50 + Math.cos(angle) * 46;
          const sy = 50 + Math.sin(angle) * 46;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--gold))" strokeWidth="2" />
              <circle cx={sx} cy={sy} r="4" fill="hsl(var(--gold))" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function MeditationTimer() {
  const [minutes, setMinutes] = useState<number>(10);
  const [remaining, setRemaining] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const bell = useBell();
  const intervalRef = useRef<number | null>(null);

  const total = useMemo(() => minutes * 60, [minutes]);
  const progress = total > 0 ? 1 - remaining / total : 0;

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const start = () => {
    setRemaining(minutes * 60);
    setRunning(true);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    const id = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(id);
          setRunning(false);
          bell();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    intervalRef.current = id;
  };

  const stop = () => {
    setRunning(false);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  const m = Math.floor(remaining / 60);
  const s = remaining % 60;

  return (
    <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Meditation Space</h3>
        <p className="text-muted-foreground">
          Rest the mind upon the breath. When ready, begin your session and let the Dharma
          Wheel turn gently.
        </p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d) => (
            <button
              key={d}
              onClick={() => setMinutes(d)}
              className={cn(
                "px-4 py-2 rounded-full border",
                minutes === d ? "bg-saffron text-neutral-900 border-saffron" : "hover:bg-accent/20"
              )}
              aria-pressed={minutes === d}
            >
              {d}m
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {!running ? (
            <Button onClick={start} className="bg-saffron text-neutral-900 hover:bg-saffron/90">Begin Meditation</Button>
          ) : (
            <Button onClick={stop} variant="secondary" className="bg-maroon hover:bg-maroon/90">
              End Session
            </Button>
          )}
          <div className="text-sm text-muted-foreground">{remaining > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${minutes}:00`}</div>
        </div>
        <p className="italic text-sm text-stone">“Breathe in the Himalayas, breathe out peace.”</p>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-gold/20 to-transparent blur-xl" />
        <div className="rounded-2xl border p-6 bg-card/70 backdrop-blur">
          <div className="mx-auto">
            <DharmaWheel spinning={running} />
          </div>
          <div className="mt-6 w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-saffron to-gold" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
