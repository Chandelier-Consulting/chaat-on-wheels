import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ActionLinks,
  BrandHeader,
  ImageFrame,
  LocationCards,
  MobileActionBar,
  SideRail,
} from "../components/home/HomeShell";
import { dishes, links } from "../components/home/content";

export const metadata: Metadata = {
  title: "Premium Homepage | Chaat On Wheels",
  description: "Premium editorial homepage concept for Chaat On Wheels.",
};

export default function PremiumHomePage() {
  return (
    <main className="bg-cream text-ink">
      <BrandHeader tone="dark" />

      <section className="premium-hero relative grid min-h-screen items-center overflow-hidden bg-night px-4 pb-28 pt-28 text-white sm:px-6 lg:px-8">
        <SideRail label="Intro / Premium" />
        <div className="absolute inset-0">
          <Image
            src="/hero-chaat.jpg"
            alt="Chaat spread with chutneys and crisp toppings"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover opacity-58"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,#11100e_0%,rgba(17,16,14,.96)_37%,rgba(17,16,14,.38)_72%,rgba(17,16,14,.2)_100%)]" />
        </div>

        <div className="section-shell relative z-10">
          <p className="label-hero text-saffron">Sunnyvale Indian street food</p>
          <h1 className="display-hero mt-5 max-w-4xl font-display font-black">
            Chaat that looks as good as it hits.
          </h1>
          <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/76">
            A cleaner, more premium home for crisp chaat, pav, chai, catering trays, and fast South Bay pickup.
          </p>
          <div className="mt-8">
            <ActionLinks tone="dark" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 label-wide text-white/54 sm:block">
          Scroll for menu, catering, locations
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01", "Order pickup", "Start with the fastest path: order now, then swing through Sunnyvale."],
              ["02", "View the menu", "Chaat, pav, lassi, chai, sweets, and core vegetarian street-food plates."],
              ["03", "Cater an event", "Office lunch, parties, family orders, and trays with direct call actions."],
            ].map(([number, title, body]) => (
              <article key={title} className="border-t border-ink/12 pt-5">
                <p className="label-wide text-tamarind">{number}</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-none">{title}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-24">
        <SideRail label="Menu / Top dishes" tone="light" />
        <div className="section-shell premium-feature-grid">
          <div>
            <p className="label-wide text-tamarind">Street eats</p>
            <h2 className="display-section mt-4 font-display font-black">Built around the dishes people already crave.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              The premium direction gives the food room to breathe. Large photography, short copy, and direct actions make it feel expensive without slowing the user down.
            </p>
            <div className="mt-8">
              <ActionLinks tone="light" />
            </div>
          </div>
          <div className="grid gap-4">
            {dishes.map((dish) => (
              <article key={dish.name} className="premium-dish-row">
                <Image src={dish.image} alt={dish.name} width={700} height={500} quality={85} className="h-36 w-full rounded-md object-cover sm:h-full" />
                <div className="p-5">
                  <p className="label-tight text-chutney">Signature</p>
                  <h3 className="mt-2 font-display text-3xl font-black">{dish.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-muted">{dish.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-24 text-white">
        <div className="section-shell premium-feature-grid">
          <ImageFrame src="/catering-chaat.jpg" alt="Catering chaat tray" className="h-96" />
          <div>
            <p className="label-wide text-saffron">Catering</p>
            <h2 className="display-section mt-4 font-display font-black">Make the party taste like the street.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/72">
              Catering gets a premium treatment: one strong image, direct copy, and obvious call/order paths.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-saffron px-6 py-4 text-sm font-black text-ink" href="tel:+16696498039">
                Call catering
              </a>
              <a className="rounded-full border border-white/20 px-6 py-4 text-sm font-black text-white" href={links.order} target="_blank" rel="noreferrer">
                Order online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell premium-feature-grid">
          <div>
            <p className="label-wide text-tamarind">Locations</p>
            <h2 className="display-section mt-4 font-display font-black">Pickup should be obvious.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Two locations, simple phone and directions actions, no buried contact info.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-ink px-6 py-4 text-sm font-black text-white" href="/journey">
                Compare journey version
              </Link>
              <Link className="rounded-full border border-ink/14 px-6 py-4 text-sm font-black" href="/">
                Back to chooser
              </Link>
            </div>
          </div>
          <LocationCards />
        </div>
      </section>

      <MobileActionBar />
    </main>
  );
}
