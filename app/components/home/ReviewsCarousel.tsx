"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { reviews } from "./content";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function ReviewsCarousel({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  const review = reviews[active];

  return (
    <section className={`${isDark ? "bg-night text-white" : "bg-white text-ink"} pb-32 pt-24 sm:py-24`}>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.68, ease: EASE_OUT_EXPO }}
        >
          <p className={isDark ? "label-wide text-saffron" : "label-wide text-tamarind"}>Reviews</p>
          <h2 className="display-section mt-4 font-display font-black">What people come back for.</h2>
        </motion.div>

        <div className={isDark ? "border-t border-white/14 pt-6" : "border-t border-ink/12 pt-6"}>
          <div className="min-h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.figure
                key={review.quote}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: EASE_OUT_EXPO }}
              >
                <blockquote className="font-display text-3xl font-black leading-tight sm:text-5xl">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className={isDark ? "mt-8 text-sm font-black text-white/64" : "mt-8 text-sm font-black text-muted"}>
                  {review.name} / {review.context}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {reviews.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show review from ${item.name}`}
                aria-current={active === index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all ${
                  active === index
                    ? "w-10 bg-saffron"
                    : isDark
                      ? "w-3 bg-white/28 hover:bg-white/48"
                      : "w-3 bg-ink/18 hover:bg-ink/34"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
