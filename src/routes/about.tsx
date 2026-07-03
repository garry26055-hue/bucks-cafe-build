import { createFileRoute, Link } from "@tanstack/react-router";
import { Utensils, ShoppingBag, Truck, ArrowRight } from "lucide-react";
import interior from "@/assets/interior.jpg";
import coffee from "@/assets/hero-coffee.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Bucks Cafe & Bar, Patiala" },
      {
        name: "description",
        content:
          "Bucks Cafe & Bar is an elevated casual cafe and bar in Leela Bhawan, Patiala — warm rooms, honest food, and coffee taken seriously.",
      },
      { property: "og:title", content: "About — Bucks Cafe & Bar" },
      {
        property: "og:description",
        content: "An elevated casual cafe & bar in Patiala. Dine-in, takeaway & no-contact delivery.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">About us</p>
            <h1 className="mt-3 text-5xl sm:text-6xl leading-[1.05]">
              A neighborhood cafe, <span className="italic font-normal text-foreground/70">with a bar edge.</span>
            </h1>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bucks Cafe & Bar sits above Leela Bhawan in Patiala — a warmly lit
              room built for slow coffees, quick lunches and long dinners with
              the people you like most.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16">
        <Reveal>
          <div className="tilt-card rounded-3xl overflow-hidden">
            <img src={interior} alt="Interior of Bucks Cafe & Bar" loading="lazy" className="w-full h-[380px] sm:h-[560px] object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div>
            <h2 className="text-3xl sm:text-4xl">Elevated casual, on purpose.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We're not fine dining and we're not fast food — we're the middle
              ground Patiala keeps asking for. A menu that runs from wraps and
              burgers to wood-fired pizza and fresh salads, plus a coffee
              program that goes well beyond the usual cappuccino.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our room leans warm and unhurried: soft lighting, wooden tables,
              and enough space to actually settle in.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="tilt-card rounded-3xl overflow-hidden">
            <img src={coffee} alt="Specialty coffee at Bucks" loading="lazy" className="w-full h-full max-h-[420px] object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">What we offer</p>
          <h2 className="mt-3 text-3xl sm:text-4xl max-w-lg">Three ways to eat with us.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: Utensils, title: "Dine-in", body: "Book a table or walk in. Open 11am to 11pm, every day of the week." },
            { icon: ShoppingBag, title: "Takeaway", body: "Call ahead and grab it hot on your way through Leela Bhawan." },
            { icon: Truck, title: "No-contact delivery", body: "Prefer to stay in? We deliver, contact-free, across the neighbourhood." },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="tilt-card soft-card p-7 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-glow/20 text-espresso">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-espresso text-cream p-10 sm:p-14 grain flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl text-cream">Hungry yet?</h2>
              <p className="mt-2 text-cream/70">Take a look at what's brewing.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/menu" className="btn-accent">See Our Menu <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/visit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-colors">Visit Us</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
