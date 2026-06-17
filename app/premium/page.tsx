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
  title: "Chaat On Wheels | Fresh Indian Street Food",
  description: "Order fresh vegetarian chaat, pav, chai, lassi, and catering from Chaat On Wheels in Sunnyvale and San Jose.",
};

export default function PremiumHomePage() {
  return (
    <main className="bg-cream text-ink">
      <BrandHeader tone="dark" />

      <section className="premium-hero relative grid min-h-screen items-center overflow-hidden bg-night px-4 pb-28 pt-28 text-white sm:px-6 lg:px-8">
        <SideRail label="Order / Chaat" />
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
          <h1 className="display-hero mt-5 max-w-3xl font-display font-black">
            Fresh chaat. Fast pickup. Big flavor.
          </h1>
          <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/76">
            Crisp puri, warm pav, bright chutneys, masala chai, lassi, and vegetarian trays made for the South Bay rush.
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
              ["01", "Order pickup", "Start your order online, then swing through for hot pav and crisp chaat."],
              ["02", "View the menu", "Browse dahi puri, samosa chaat, vada pav, lassi, chai, sweets, and plates."],
              ["03", "Cater an event", "Feed the office, party, or family table with vegetarian street-food trays."],
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
            <h2 className="display-section mt-4 font-display font-black">The favorites are ready when the craving hits.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Start with cool dahi puri, go warm with vada pav, add samosa chaat, and finish with chai or lassi.
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
            <h2 className="display-section mt-4 font-display font-black">Bring the chaat window to the party.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/72">
              Build a vegetarian spread for meetings, birthdays, family nights, and weekend gatherings.
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
            <h2 className="display-section mt-4 font-display font-black">Two South Bay stops. One easy order.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Call ahead, get directions, or order online before heading to Sunnyvale or San Jose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-ink px-6 py-4 text-sm font-black text-white" href="/journey">
                Find the truck
              </Link>
              <Link className="rounded-full border border-ink/14 px-6 py-4 text-sm font-black" href="/">
                More options
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
