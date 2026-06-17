import type { Metadata } from "next";
import { GoogleMapFrame, LocationCards, MobileActionBar, SiteFooter, SiteHeader } from "../../components/home/HomeShell";

export const metadata: Metadata = {
  title: "Truck Locations | Chaat On Wheels",
  description: "Find the Chaat On Wheels truck in Sunnyvale and San Jose.",
};

export default function TruckLocationsPage() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader site="truck" active="locations" tone="light" />
      <section className="section-shell grid gap-10 pb-24 pt-32 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="label-hero text-tamarind">Truck locations</p>
          <h1 className="display-section mt-5 font-display font-black">Map first. Then order.</h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Use the live map for the main Sunnyvale stop, then call or open directions before you head out.
          </p>
          <div className="mt-8">
            <LocationCards />
          </div>
        </div>
        <GoogleMapFrame />
      </section>
      <SiteFooter site="truck" />
      <MobileActionBar />
    </main>
  );
}
