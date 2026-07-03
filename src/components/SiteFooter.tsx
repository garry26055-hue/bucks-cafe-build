import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

// [PLACEHOLDER — INSTAGRAM LINK] Replace with real Instagram URL when available.
export const INSTAGRAM_URL = "#instagram-placeholder";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bucks+Cafe+%26+Bar+Leela+Bhawan+Patiala";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-glow text-espresso font-display text-lg">B</span>
            <span className="font-display text-2xl">Bucks Cafe & Bar</span>
          </div>
          <p className="mt-4 text-cream/70 max-w-md leading-relaxed">
            Coffee, comfort food, and good company in the heart of Patiala.
            Elevated casual dining, seven days a week.
          </p>
          <a
            href={INSTAGRAM_URL}
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-amber-glow transition-colors"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Bucks Cafe & Bar on Instagram"
          >
            <Instagram className="h-4 w-4" /> Follow us on Instagram
          </a>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-amber-glow font-sans font-semibold">Visit</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-amber-glow">
                SCO 125–126, First Floor New,<br />Leela Bhawan, Patiala, Punjab 147001
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 mt-0.5" />
              <a href="tel:08146579770" className="hover:text-amber-glow">081465 79770</a>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Open daily · 11:00 AM – 11:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-amber-glow font-sans font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="text-cream/80 hover:text-amber-glow">Menu</Link></li>
            <li><Link to="/about" className="text-cream/80 hover:text-amber-glow">About Us</Link></li>
            <li><Link to="/visit" className="text-cream/80 hover:text-amber-glow">Visit Us</Link></li>
          </ul>
          <p className="mt-6 text-xs text-cream/50">
            Dine-in · Takeaway · No-contact delivery
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Bucks Cafe & Bar. All rights reserved.
      </div>
    </footer>
  );
}
