import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation, Utensils, ShoppingBag, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { InstagramSection } from "@/components/InstagramSection";

const MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Bucks+Cafe+%26+Bar+Leela+Bhawan+Patiala";
const MAPS_EMBED = "https://www.google.com/maps?q=Bucks+Cafe+%26+Bar+Leela+Bhawan+Patiala&output=embed";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: "Visit Us — Bucks Cafe & Bar, Leela Bhawan Patiala" },
      {
        name: "description",
        content:
          "Find Bucks Cafe & Bar at SCO 125–126, First Floor New, Leela Bhawan, Patiala. Open daily 11am–11pm. Call 081465 79770 for reservations, takeaway or delivery.",
      },
      { property: "og:title", content: "Visit Bucks Cafe & Bar" },
      { property: "og:description", content: "Leela Bhawan, Patiala. Open daily 11am–11pm." },
    ],
  }),
});

function VisitPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Visit us</p>
          <h1 className="mt-3 text-5xl sm:text-6xl max-w-3xl leading-[1.05]">
            Find your seat<span className="text-amber-glow">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            We're on the first floor at Leela Bhawan, right in the middle of
            Patiala. Walk in, call ahead, or get directions below.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-12 grid lg:grid-cols-5 gap-6">
        <Reveal className="lg:col-span-2">
          <div className="soft-card p-8 h-full flex flex-col">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-glow/20 text-espresso">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                  <p className="mt-1 text-foreground font-medium leading-snug">
                    SCO No 125–126, First Floor New,<br />
                    Leela Bhawan, Patiala,<br />
                    Punjab 147001
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Plus code: 89PM+65 Patiala</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-glow/20 text-espresso">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <a href="tel:08146579770" className="mt-1 block text-foreground font-medium hover:text-amber-glow">
                    081465 79770
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-glow/20 text-espresso">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
                  <p className="mt-1 text-foreground font-medium">Open daily · 11:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer" className="btn-primary">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a href="tel:08146579770" className="btn-ghost">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="tilt-card rounded-3xl overflow-hidden h-full min-h-[420px] border border-border">
            <iframe
              src={MAPS_EMBED}
              title="Map to Bucks Cafe & Bar"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Whichever way you like it.</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { icon: Utensils, title: "Dine-in" },
            { icon: ShoppingBag, title: "Takeaway" },
            { icon: Truck, title: "No-contact delivery" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="tilt-card soft-card p-6 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-glow/20 text-espresso">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="font-display text-xl">{s.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramSection />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-espresso text-cream p-10 sm:p-14 grain flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl text-cream">See you tonight?</h2>
              <p className="mt-2 text-cream/70">Reservations, takeaway or delivery — one call.</p>
            </div>
            <a href="tel:08146579770" className="btn-accent">
              <Phone className="h-4 w-4" /> Call 081465 79770
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
