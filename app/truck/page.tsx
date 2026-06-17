"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ActionLinks,
  GoogleMapFrame,
  LocationCards,
  MobileActionBar,
  SiteFooter,
  SiteHeader,
  SideRail,
  TruckIllustration,
} from "../components/home/HomeShell";
import { dishes, journeyStops, links } from "../components/home/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TruckHomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-cream text-ink">
      <SiteHeader site="truck" active="home" tone="light" />
      <section className="journey-hero relative grid min-h-screen items-center overflow-hidden bg-cream px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <SideRail label="Truck / Today" tone="light" />
        <div className="section-shell journey-hero-grid relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.68, ease: EASE }}
          >
            <p className="label-hero text-tamarind">Sunnyvale to San Jose</p>
            <h1 className="display-hero mt-5 max-w-4xl font-display font-black">Your chaat stop is closer than you think.</h1>
            <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-muted">
              Find today&apos;s truck, order ahead, grab directions, or bring the same vegetarian favorites to your next event.
            </p>
            <div className="mt-8">
              <ActionLinks tone="light" menuLabel="Truck menu" menuHref="/truck/menu" />
            </div>
          </motion.div>
          <motion.div
            className="journey-map"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 54, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.72, delay: shouldReduceMotion ? 0 : 0.1, ease: EASE }}
          >
            <div className="route-curve" />
            <div className="route-pin route-pin-one" />
            <div className="route-pin route-pin-two" />
            <TruckIllustration />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night py-24 text-white">
        <SideRail label="Stops / 01-04" />
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="label-wide text-saffron">Today&apos;s rhythm</p>
            <h2 className="display-section mt-4 font-display font-black">From lunch rush to party trays.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/70">
              Start with pav, reset with chai, load up on chaat, and call in catering when the whole group wants in.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {journeyStops.map((stop, index) => (
              <motion.article
                key={stop.title}
                className="journey-stop-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.06, ease: EASE }}
              >
                <Image src={stop.image} alt={stop.title} width={900} height={650} quality={85} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="label-tight text-saffron">{stop.label}</p>
                    <span className="font-mono text-sm font-black text-white/42">{stop.number}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-black">{stop.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/66">{stop.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-saffron py-20 text-ink">
        <div className="section-shell journey-dish-grid">
          <div>
            <p className="label-wide text-tamarind">Top cravings</p>
            <h2 className="display-section mt-4 font-display font-black">The quick hits people come back for.</h2>
            <Link className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 text-sm font-black text-white" href="/truck/menu">
              View truck menu
            </Link>
          </div>
          <div className="grid gap-4">
            {dishes.map((dish) => (
              <article key={dish.name} className="journey-dish-card">
                <Image src={dish.image} alt={dish.name} width={700} height={500} quality={85} className="h-36 w-full rounded-md object-cover sm:h-full" />
                <div className="p-5">
                  <h3 className="font-display text-3xl font-black">{dish.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink/70">{dish.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="section-shell truck-map-grid">
          <div>
            <p className="label-wide text-tamarind">Find us</p>
            <h2 className="display-section mt-4 font-display font-black">Get there fast. Eat even faster.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Start with the live Google map, then call, order, or open directions when you are ready to roll.
            </p>
            <div className="mt-6">
              <LocationCards />
            </div>
          </div>
          <GoogleMapFrame />
        </div>
      </section>

      <section className="bg-chutney py-20 text-white">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="label-wide text-saffron">Catering</p>
            <h2 className="mt-3 font-display text-5xl font-black leading-none">Bring Chaat On Wheels to the party.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-saffron px-6 py-4 text-sm font-black text-ink" href="tel:+16696498039">
              Call catering
            </a>
            <a className="rounded-full border border-white/22 px-6 py-4 text-sm font-black" href={links.order} target="_blank" rel="noreferrer">
              Order online
            </a>
          </div>
        </div>
      </section>
      <SiteFooter site="truck" />
      <MobileActionBar />
    </main>
  );
}
