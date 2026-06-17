import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ActionLinks,
  ImageFrame,
  LocationCards,
  MobileActionBar,
  SiteFooter,
  SiteHeader,
  SideRail,
} from "../components/home/HomeShell";
import { cateringMoments, dishes, links } from "../components/home/content";

export const metadata: Metadata = {
  title: "Chaat On Wheels | Indian Street Food",
  description: "Fresh vegetarian chaat, pav, chai, lassi, catering, and pickup from Chaat On Wheels.",
};

export default function FoodHomePage() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader site="food" active="home" tone="dark" />
      <section className="relative grid min-h-screen items-center overflow-hidden bg-night px-4 pb-28 pt-28 text-white sm:px-6 lg:px-8">
        <SideRail label="Food / Fresh" />
        <Image src="/hero-chaat.jpg" alt="Chaat spread" fill priority quality={92} sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#11100e_0%,rgba(17,16,14,.96)_38%,rgba(17,16,14,.32)_100%)]" />
        <div className="section-shell relative z-10">
          <p className="label-hero text-saffron">Sunnyvale Indian street food</p>
          <h1 className="display-hero mt-5 max-w-3xl font-display font-black">Chaat, pav, chai, lassi.</h1>
          <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/76">
            Vegetarian Indian street food for pickup, catering, and South Bay lunch plans.
          </p>
          <div className="mt-8">
            <ActionLinks tone="dark" menuLabel="Full menu" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {[
            ["01", "Choose", "Chaat, pav, sandwiches, sweets, chai, and lassi."],
            ["02", "Order", "Place pickup online or call the Sunnyvale truck."],
            ["03", "Cater", "Vegetarian trays for office lunches, parties, and family meals."],
          ].map(([number, title, body]) => (
            <article key={title} className="border-t border-ink/12 pt-5">
              <p className="label-wide text-tamarind">{number}</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none">{title}</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="section-shell premium-feature-grid">
          <div>
            <p className="label-wide text-tamarind">Signatures</p>
            <h2 className="display-section mt-4 font-display font-black">A short menu of street-food staples.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Dahi puri, vada pav, samosa chaat, chai, and lassi anchor the order.
            </p>
            <div className="mt-8">
              <Link className="rounded-full bg-ink px-6 py-4 text-sm font-black text-white" href="/food/menu">
                View full menu
              </Link>
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
            <h2 className="display-section mt-4 font-display font-black">Chaat trays for groups.</h2>
            <div className="mt-6 grid gap-4">
              {cateringMoments.map(([title, body]) => (
                <div key={title} className="border-t border-white/12 pt-4">
                  <h3 className="font-display text-2xl font-black">{title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/66">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-saffron px-6 py-4 text-sm font-black text-ink" href="/food/catering">
                Plan catering
              </Link>
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
            <h2 className="display-section mt-4 font-display font-black">Two South Bay stops.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
              Call ahead, get directions, or order online before heading over.
            </p>
          </div>
          <LocationCards />
        </div>
      </section>
      <SiteFooter site="food" />
      <MobileActionBar />
    </main>
  );
}
