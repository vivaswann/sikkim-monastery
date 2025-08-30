import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sanctuary", label: "Sanctuary" },
  { href: "#meditation", label: "Meditation" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-block size-8 rounded-full bg-gradient-to-tr from-saffron/90 to-gold/70 shadow-glow" />
          <span className="font-semibold tracking-wide">Virtual Sikkim Monastery Sanctuary</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#meditation">
            <Button className="bg-saffron text-neutral-900 hover:bg-saffron/90">Begin</Button>
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent/20"
          aria-label="Open Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto py-3 grid gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 px-1 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#meditation" onClick={() => setOpen(false)}>
              <Button className="w-full bg-saffron text-neutral-900 hover:bg-saffron/90">Begin Meditation</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
