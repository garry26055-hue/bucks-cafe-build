import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Coffee, Utensils, Leaf, Drumstick } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Bucks Cafe & Bar, Patiala" },
      {
        name: "description",
        content:
          "Explore the Bucks Cafe & Bar menu: specialty coffees including Colombian Gold, Turkish Hazelnut and Death Wish, plus wraps, burgers, pizza, salads and shakes.",
      },
      { property: "og:title", content: "Menu — Bucks Cafe & Bar" },
      {
        property: "og:description",
        content: "Specialty coffee and elevated casual food — Leela Bhawan, Patiala.",
      },
    ],
  }),
});

const beverages = [
  "Colombian Gold Coffee",
  "English Butterscotch Coffee",
  "French Vanilla Coffee",
  "Death Wish Coffee",
  "Turkish Hazelnut Coffee",
  "Colombian Cold Iced Coffee",
  "Turkish Hazelnut Iced Coffee",
  "Death Wish Iced Coffee",
  "English Butterscotch Iced Coffee",
  "Hot Chocolate Fudge",
];

type Tab = "food" | "beverages";
type SubTab = "veg" | "nonveg";

function MenuPage() {
  const [tab, setTab] = useState<Tab>("beverages");
  const [sub, setSub] = useState<SubTab>("veg");

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-glow font-semibold">The Menu</p>
          <h1 className="mt-3 text-5xl sm:text-6xl max-w-3xl">
            Slow-brewed coffee. <span className="italic font-normal text-foreground/70">Honest plates.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Wraps, burgers, wood-fired pizza and salads, alongside a specialty
            coffee list built for hot afternoons and long evenings. Prices vary
            by item — average spend is ₹200–400 per person.
          </p>
        </Reveal>

        {/* Primary tabs */}
        <Reveal delay={100}>
          <div className="mt-10 inline-flex p-1.5 rounded-full bg-secondary border border-border">
            {(["food", "beverages"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 ${
                  tab === t
                    ? "bg-espresso text-cream shadow-[var(--shadow-soft)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t === "food" ? <Utensils className="h-4 w-4" /> : <Coffee className="h-4 w-4" />}
                {t === "food" ? "Food" : "Beverages"}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div key={tab} className="reveal">
          {tab === "beverages" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {beverages.map((b, i) => {
                const isIced = b.toLowerCase().includes("iced");
                return (
                  <div key={b} className="tilt-card soft-card p-6 flex items-start gap-4"
                       style={{ animationDelay: `${i * 40}ms` }}>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-glow/20 text-espresso">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg leading-tight">{b}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {isIced ? "Cold · Iced" : "Hot"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {/* Sub tabs */}
              <div className="inline-flex p-1 rounded-full bg-secondary border border-border">
                {(["veg", "nonveg"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSub(s)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 ${
                      sub === s
                        ? "bg-cream text-espresso shadow-[var(--shadow-soft)]"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {s === "veg" ? <Leaf className="h-4 w-4 text-green-700" /> : <Drumstick className="h-4 w-4 text-orange-700" />}
                    {s === "veg" ? "Veg" : "Non-Veg"}
                  </button>
                ))}
              </div>

              <div key={sub} className="mt-8">
                {/*
                  [PLACEHOLDER — FOOD ITEMS]
                  The restaurant serves Wraps, Burgers, Pizza, Fast Food, Salads and Shakes.
                  Specific dish names and Veg/Non-Veg split are not yet available and must be
                  supplied by the client. Replace the placeholder card below with the real
                  menu once confirmed.
                */}
                <div className="tilt-card soft-card p-10 sm:p-14 max-w-2xl">
                  <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold ${sub === "veg" ? "text-green-700" : "text-orange-700"}`}>
                    {sub === "veg" ? <Leaf className="h-4 w-4" /> : <Drumstick className="h-4 w-4" />}
                    {sub === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </div>
                  <h3 className="mt-3 text-3xl sm:text-4xl">Menu items coming soon</h3>
                  <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                    Our full {sub === "veg" ? "vegetarian" : "non-vegetarian"} menu — wraps,
                    burgers, pizza and more — is being updated shortly. In the meantime,
                    walk in or call us to hear today's specials.
                  </p>
                  <a href="tel:08146579770" className="btn-primary mt-8">
                    Call 081465 79770
                  </a>
                </div>

                <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
                  {["Wraps", "Burgers", "Pizza", "Fast Food", "Salads", "Shakes"].map((cat) => (
                    <div key={cat} className="rounded-2xl border border-border bg-card/60 px-5 py-4 text-sm font-medium text-foreground/80">
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
