import { motion } from "framer-motion";

const PETALS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 18 + Math.random() * 18,
  scale: 0.6 + Math.random() * 0.8,
}));

export function PetalField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10%", x: 0, rotate: 0 }}
          animate={{ y: "110%", x: "30vw", rotate: 45 }}
          transition={{ repeat: Infinity, duration: p.duration, ease: "linear", delay: p.delay }}
          className="absolute"
          style={{ left: `${p.left}%` }}
        >
          <svg
            width={28 * p.scale}
            height={28 * p.scale}
            viewBox="0 0 32 32"
            fill="none"
            className="drop-shadow-sm"
          >
            <path
              d="M16 2C13 6 11 8 8 10c-3 2-5 4-5 7 0 3 2 5 5 5 3 0 5-2 8-6 3 4 5 6 8 6 3 0 5-2 5-5 0-3-2-5-5-7-3-2-5-4-8-8Z"
              fill="hsl(var(--gold) / 0.85)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
