export function PrayerFlags() {
  const colors = [
    "bg-sky-600",
    "bg-white",
    "bg-red-600",
    "bg-green-700",
    "bg-yellow-400",
  ];
  return (
    <div aria-hidden className="w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-end gap-2 justify-center py-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="relative h-10 w-6 origin-top animate-sway">
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[40px] ${colors[i % colors.length]} shadow-sm`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
