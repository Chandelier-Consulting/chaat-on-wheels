import type { Metadata } from "next";
import { ActionLinks, MenuShowcase, MobileActionBar, SiteFooter, SiteHeader } from "../../components/home/HomeShell";

export const metadata: Metadata = {
  title: "Truck Menu | Chaat On Wheels",
  description: "Truck menu for Chaat On Wheels chaat, pav, drinks, and sweets.",
};

export default function TruckMenuPage() {
  return (
    <main className="bg-night text-white">
      <SiteHeader site="truck" active="menu" tone="dark" />
      <section className="section-shell pb-12 pt-32">
        <p className="label-hero text-saffron">Truck menu</p>
        <h1 className="display-section mt-5 max-w-3xl font-display font-black">Chaat, pav, chai, lassi.</h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/68">
          Browse the truck menu before ordering pickup, calling ahead, or opening directions.
        </p>
        <div className="mt-8">
          <ActionLinks tone="dark" menuHref="/truck/menu" />
        </div>
      </section>
      <section className="section-shell pb-24">
        <MenuShowcase mode="truck" />
      </section>
      <SiteFooter site="truck" tone="dark" />
      <MobileActionBar />
    </main>
  );
}
