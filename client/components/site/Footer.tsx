export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto py-8 text-center text-sm">
        <p className="mb-2">© {year} Virtual Sikkim Monastery Sanctuary — Preserving Himalayan Heritage.</p>
        <p className="text-muted-foreground">May you be well, may you be at peace.</p>
      </div>
    </footer>
  );
}
