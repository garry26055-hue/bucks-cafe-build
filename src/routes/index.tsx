import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Clock, MapPin, Coffee, ShoppingBag, Utensils } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import interior from "@/assets/interior.jpg";
import iced from "@/assets/iced-coffee.jpg";
import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/food-burger.jpg";
import wrap from "@/assets/wrap.jpg";
import { Reveal } from "@/components/Reveal";
import { InstagramSection } from "@/components/InstagramSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const beveragePreview = [
  { name: "Colombian Gold Coffee", img: heroCoffee },
  { name: "English Butterscotch Coffee", img: iced },
  { name: "Turkish Hazelnut Iced Coffee", img: iced },
  { name: "Hot Chocolate Fudge", img: heroCoffee },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" /> Patiala · Leela Bhawan
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
                Coffee, comfort food<span className="text-amber-glow">.</span>
                <br />
                <span className="italic font-normal text-foreground/80">Good company.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                An elevated casual cafe & bar in the heart of Patiala — wraps,
                burgers, wood-fired pizza and specialty coffee, served warm and
                unhurried from 11am to 11pm, every day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/menu" className="btn-primary">
                  View Menu <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/visit" className="btn-ghost">
                  <MapPin className="h-4 w-4" /> Visit Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-glow text-amber-glow" />
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>· 27 Google reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Open · 11am–11pm daily
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative">
            <Reveal delay={200}>
              <div className="relative tilt-card rounded-3xl overflow-hidden shadow-[var(--shadow-lift)]">
                <img
                  src={heroCoffee}
                  alt="Freshly poured specialty coffee at Bucks Cafe & Bar"
                  width={1600}
                  height={1200}
                  className="w-full h-[420px] sm:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] opacity-80">Signature</p>
                    <p className="font-display text-2xl">Death Wish Coffee</p>
                  </div>
                  <div className="hidden sm:block soft-card !bg-cream/95 text-espresso px-4 py-2 text-sm font-medium">
                    ₹200–400 per person
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="absolute -bottom-8 -left-8 hidden md:block h-32 w-32 rounded-full bg-amber-glow/30 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Why Bucks</p>
              <h2 className="mt-2 text-3xl sm:text-4xl max-w-lg">Made for lingering, built for lunch breaks.</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Utensils,
              title: "Dine-in, done right",
              body: "Warm lighting, generous seating and a menu that spans wraps, burgers, pizza and salads — for a quick bite or a long evening.",
            },
            {
              icon: ShoppingBag,
              title: "Takeaway & delivery",
              body: "Prefer to eat in? Takeaway and no-contact delivery are available whenever we're open, seven days a week.",
            },
            {
              icon: Coffee,
              title: "Coffee, seriously",
              body: "From Colombian Gold to Turkish Hazelnut and our signature Death Wish — hot or iced, brewed with care.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="tilt-card soft-card p-7 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-glow/20 text-espresso mb-5">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Signature beverages strip */}
      <section className="bg-espresso text-cream grain relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Signature Pours</p>
              <h2 className="mt-2 text-3xl sm:text-4xl max-w-lg text-cream">Coffees worth the walk in.</h2>
            </div>
            <Link to="/menu" className="btn-accent">
              See Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {beveragePreview.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className="tilt-card group rounded-2xl overflow-hidden bg-cream/5 border border-cream/10">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={b.img}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-glow/90">Coffee</p>
                    <p className="mt-1 font-display text-lg">{b.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split: interior */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="tilt-card rounded-3xl overflow-hidden">
            <img
              src={interior}
              alt="Cozy interior of Bucks Cafe & Bar with warm lighting"
              loading="lazy"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">The room</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">A quiet kind of buzz.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Soft lighting, warm wood, and enough space to actually hear each other.
              Come in for a solo coffee and a book, or bring the whole group for dinner —
              Bucks is built to make either feel easy.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="soft-card p-5">
                <p className="text-3xl font-display">4.9</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Google · 27 reviews</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-3xl font-display">₹200–400</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Per person</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Food grid teaser */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: wrap, label: "Wraps" },
            { src: burger, label: "Burgers" },
            { src: pizza, label: "Pizza" },
          ].map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <Link to="/menu" className="group relative block aspect-[4/5] rounded-3xl overflow-hidden">
                <img src={f.src} alt={f.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                  <span className="font-display text-2xl">{f.label}</span>
                  <ArrowRight className="h-5 w-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramSection />

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-espresso text-cream grain p-10 sm:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-glow/30 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">Come by tonight</p>
              <h2 className="mt-3 text-4xl sm:text-5xl text-cream">Table for two, or a whole crew?</h2>
              <p className="mt-4 text-cream/70 max-w-md">
                We're open every day, 11am to 11pm. Give us a call to reserve a
                table or place an order for takeaway.
              </p>
            </div>
            <div className="relative flex flex-col sm:flex-row md:justify-end gap-3">
              <a href="tel:08146579770" className="btn-accent">
                Call 081465 79770
              </a>
              <Link to="/visit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-colors">
                Get Directions
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
