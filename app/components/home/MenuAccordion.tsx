"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function MenuAccordion({ items, isTruck }: { items: MenuItem[]; isTruck: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`divide-y ${isTruck ? "divide-white/10" : "divide-border"} px-4 py-2 sm:px-8`}>
      {items.map((item, index) => {
        const isActive = active === index;

        return (
          <motion.article
            key={item.name}
            onHoverStart={() => setActive(index)}
            onHoverEnd={() => setActive(null)}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: EASE_OUT_EXPO }}
            className="py-4"
          >
            <button
              type="button"
              aria-expanded={isActive}
              onClick={() => setActive(isActive ? null : index)}
              onFocus={() => setActive(index)}
              className={`grid w-full gap-4 text-left transition-[grid-template-columns] sm:items-center ${
                isActive ? "sm:grid-cols-[6.5rem_1fr_auto]" : "sm:grid-cols-[5rem_1fr_auto]"
              }`}
            >
              <motion.div
                className={`relative overflow-hidden rounded-md transition-[height] duration-300 ${
                  isActive ? "h-24 sm:h-20" : "h-20 sm:h-16"
                }`}
                transition={{ duration: shouldReduceMotion ? 0 : 0.48, ease: EASE_OUT_EXPO }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  quality={85}
                  sizes="(min-width: 640px) 5rem, 100vw"
                  className="photo-grade object-cover"
                />
              </motion.div>
              <div>
                <div className="flex items-start justify-between gap-4 sm:block">
                  <h3 className="text-lg font-black">{item.name}</h3>
                  <p className={`font-mono text-sm font-bold sm:hidden ${isTruck ? "text-saffron" : "text-tamarind"}`}>
                    {item.price}
                  </p>
                </div>
                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.p
                      key="description"
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: EASE_OUT_EXPO }}
                      className={`mt-3 max-w-3xl text-sm font-semibold leading-6 ${isTruck ? "text-white/66" : "text-muted"}`}
                    >
                      {item.description}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
              <div className="hidden items-center gap-4 sm:flex">
                <p className={`font-mono text-base font-bold ${isTruck ? "text-saffron" : "text-tamarind"}`}>
                  {item.price}
                </p>
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 place-items-center rounded-full border text-lg leading-none ${
                    isTruck ? "border-white/14 text-white/70" : "border-ink/12 text-ink/70"
                  }`}
                >
                  {isActive ? "-" : "+"}
                </span>
              </div>
            </button>
          </motion.article>
        );
      })}
    </div>
  );
}
