import { Flower2 } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="container mx-auto py-10">
      <div className="relative flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute -translate-y-1/2 top-1/2 bg-background px-3">
          <Flower2 className="size-6 text-gold" />
        </div>
      </div>
    </div>
  );
}
