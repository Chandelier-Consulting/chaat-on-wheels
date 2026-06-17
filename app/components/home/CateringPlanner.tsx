"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { links } from "./content";
import { MotionAnchor } from "./MotionPrimitives";

const occasions = [
  {
    name: "Office lunch",
    note: "Clean portions, fast pickup, easy sharing.",
    weight: { chaat: 10, pav: 14, drinks: 9, sweets: 16 },
  },
  {
    name: "Family party",
    note: "More variety for a longer table.",
    weight: { chaat: 8, pav: 13, drinks: 8, sweets: 12 },
  },
  {
    name: "Event pickup",
    note: "Built around timing and tray stability.",
    weight: { chaat: 9, pav: 12, drinks: 10, sweets: 14 },
  },
] as const;

type Variant = "food" | "truck";

export function CateringPlanner({ variant = "food" }: { variant?: Variant }) {
  const [guests, setGuests] = useState(28);
  const [occasionIndex, setOccasionIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const occasion = occasions[occasionIndex];

  const trays = useMemo(
    () => [
      {
        label: "Chaat trays",
        value: Math.max(2, Math.ceil(guests / occasion.weight.chaat)),
        detail: "Dahi puri, papdi chaat, samosa chaat.",
      },
      {
        label: "Pav trays",
        value: Math.max(1, Math.ceil(guests / occasion.weight.pav)),
        detail: "Vada pav, pav bhaji, dabeli.",
      },
      {
        label: "Drinks",
        value: Math.max(2, Math.ceil(guests / occasion.weight.drinks)),
        detail: "Mango lassi, rose milk, masala chai.",
      },
      {
        label: "Sweets",
        value: Math.max(1, Math.ceil(guests / occasion.weight.sweets)),
        detail: "Gulab jamun for the finish.",
      },
    ],
    [guests, occasion],
  );

  const lead = guests >= 50 ? "Call 24-48 hours ahead." : "Same-day may be possible.";
  const shell = variant === "truck" ? "border-white/20 bg-white/[0.07]" : "border-white/12 bg-white/[0.055]";
  const accent = variant === "truck" ? "text-saffron" : "text-saffron";

  return (
    <section className="section-shell pb-24">
      <motion.div
        className={`grid gap-8 rounded-lg border p-5 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] ${shell}`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className={`label-hero ${accent}`}>Tray planner</p>
          <h2 className="mt-4 max-w-lg font-display text-4xl font-black tracking-normal sm:text-5xl">
            Size the table before you call.
          </h2>
          <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-white/68">
            Pick the crowd. Get a practical starting mix for vegetarian chaat, pav, drinks, and sweets.
          </p>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <label className="text-xs font-black uppercase tracking-[0.22em] text-white/48" htmlFor="guest-count">
                Guests
              </label>
              <output className="font-display text-5xl font-black" htmlFor="guest-count">
                {guests}
              </output>
            </div>
            <input
              id="guest-count"
              type="range"
              min="12"
              max="80"
              step="4"
              value={guests}
              onChange={(event) => setGuests(Number(event.target.value))}
              className="mt-4 h-2 w-full cursor-pointer accent-saffron"
            />
            <div className="mt-2 flex justify-between text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/36">
              <span>12</span>
              <span>80</span>
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {occasions.map((item, index) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => setOccasionIndex(index)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={`rounded-md border px-4 py-3 text-left transition ${
                  occasionIndex === index
                    ? "border-saffron bg-saffron text-ink"
                    : "border-white/14 bg-white/[0.035] text-white hover:border-white/32"
                }`}
              >
                <span className="block text-sm font-black">{item.name}</span>
                <span className={`mt-1 block text-xs font-semibold leading-5 ${occasionIndex === index ? "text-ink/70" : "text-white/52"}`}>
                  {item.note}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-white/12 bg-black/16 p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/42">Recommended mix</p>
              <h3 className="mt-2 font-display text-3xl font-black">{occasion.name}</h3>
            </div>
            <p className="rounded-full border border-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/68">
              {lead}
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {trays.map((tray) => (
                <motion.article
                  key={tray.label}
                  layout
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                  className="rounded-md border border-white/10 bg-white/[0.045] p-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-sm font-black">{tray.label}</h4>
                    <strong className="font-display text-4xl font-black text-saffron">{tray.value}</strong>
                  </div>
                  <p className="mt-3 text-xs font-semibold leading-5 text-white/56">{tray.detail}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold leading-6 text-white/64">
              Ask for trays for {guests} guests: {trays.map((tray) => `${tray.value} ${tray.label.toLowerCase()}`).join(", ")}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <MotionAnchor className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink" href="tel:+16696498039">
                Call catering
              </MotionAnchor>
              <MotionAnchor className="rounded-full border border-white/18 px-5 py-3 text-sm font-black text-white" href={links.order} target="_blank" rel="noreferrer">
                Order online
              </MotionAnchor>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
