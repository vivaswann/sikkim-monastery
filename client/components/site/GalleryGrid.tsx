export function GalleryGrid({ images }: { images: { alt: string; query: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl border">
          <img
            src={`https://source.unsplash.com/featured/900x700/?${encodeURIComponent(img.query)}`}
            alt={img.alt}
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-gold/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
}
