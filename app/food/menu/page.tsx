import type { Metadata } from "next";
import { ActionLinks, MenuShowcase, MobileActionBar, SiteFooter, SiteHeader } from "../../components/home/HomeShell";

export const metadata: Metadata = {
  title: "Food Menu | Chaat On Wheels",
  description: "Browse chaat, pav, plates, drinks, and sweets from Chaat On Wheels.",
};

export default function FoodMenuPage() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader site="food" active="menu" tone="light" />
      <section className="section-shell pb-12 pt-32">
        <p className="label-hero text-tamarind">Full menu</p>
        <h1 className="display-section mt-5 max-w-3xl font-display font-black">Chaat, pav, chai, lassi.</h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-muted">
          Browse the core menu before ordering pickup, calling ahead, or heading to the truck.
        </p>
        <div className="mt-8">
          <ActionLinks tone="light" />
        </div>
      </section>
      <section className="section-shell pb-24">
        <MenuShowcase mode="food" />
      </section>
      <SiteFooter site="food" />
      <MobileActionBar />
    </main>
  );
}
