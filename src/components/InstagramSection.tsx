import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "./SiteFooter";
import interior from "@/assets/interior.jpg";
import burger from "@/assets/food-burger.jpg";
import iced from "@/assets/iced-coffee.jpg";
import pizza from "@/assets/pizza.jpg";
import wrap from "@/assets/wrap.jpg";
import coffee from "@/assets/hero-coffee.jpg";

// [IMAGE PLACEHOLDER] Replace with real Instagram photos when handle is confirmed.
const tiles = [interior, burger, iced, pizza, wrap, coffee];

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Instagram</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Straight from the counter</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost self-start sm:self-auto"
        >
          <Instagram className="h-4 w-4" /> Follow us
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {tiles.map((src, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={src}
              alt="Bucks Cafe & Bar moment"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors grid place-items-center">
              <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
