import type { Metadata } from "next";
import { GoogleMapFrame, LocationCards, MobileActionBar, SiteFooter, SiteHeader } from "../../components/home/HomeShell";

export const metadata: Metadata = {
  title: "Food Locations | Chaat On Wheels",
  description: "Find Chaat On Wheels in Sunnyvale and San Jose.",
};

export default function FoodLocationsPage() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader site="food" active="locations" tone="light" />
      <section className="section-shell grid gap-10 pb-24 pt-32 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="label-hero text-tamarind">Locations</p>
          <h1 className="display-section mt-5 font-display font-black">Call ahead, order, then pull up.</h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-muted">
            Sunnyvale is the main stop. San Jose is available for call-ahead pickup and current hours.
          </p>
          <div className="mt-8">
            <LocationCards />
          </div>
        </div>
        <GoogleMapFrame />
      </section>
      <SiteFooter site="food" />
      <MobileActionBar />
    </main>
  );
}
