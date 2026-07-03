import { Link } from "@tanstack/react-router";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_82%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0 group">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-espresso text-cream font-display text-lg">B</span>
          <span className="font-display text-lg sm:text-xl truncate tracking-tight">
            Bucks <span className="text-muted-foreground">Cafe & Bar</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:08146579770" className="btn-accent hidden sm:inline-flex text-sm py-2.5 px-4">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-border"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-cream">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium hover:bg-secondary"
                activeProps={{ className: "px-4 py-3 rounded-lg text-base font-medium bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:08146579770" className="btn-accent mt-3">
              <Phone className="h-4 w-4" /> Call 081465 79770
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
