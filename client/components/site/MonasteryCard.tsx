import { motion } from "framer-motion";

export function MonasteryCard({ name, query, href }: { name: string; query: string; href?: string }) {
  const url = `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(query)}`;
  return (
    <a href={href || "#"} className="group relative block overflow-hidden rounded-xl border">
      <img
        src={url}
        alt={`${name} Monastery`}
        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
      <div className="absolute bottom-3 left-3 text-white">
        <div className="text-lg font-semibold drop-shadow">{name}</div>
        <div className="mt-1 inline-flex items-center text-xs bg-black/40 px-2 py-1 rounded-full">360° Placeholder</div>
      </div>
      <div className="absolute inset-0 ring-1 ring-gold/30 rounded-xl shadow-glow opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
