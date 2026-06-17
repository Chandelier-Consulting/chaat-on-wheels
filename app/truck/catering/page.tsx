import type { Metadata } from "next";
import Image from "next/image";
import { CateringPlanner } from "../../components/home/CateringPlanner";
import { cateringMoments, links } from "../../components/home/content";
import { MobileActionBar, SiteFooter, SiteHeader } from "../../components/home/HomeShell";
import { MotionAnchor, MotionGroup, MotionItem, MotionSection } from "../../components/home/MotionPrimitives";

export const metadata: Metadata = {
  title: "Truck Catering | Chaat On Wheels",
  description: "Book Chaat On Wheels catering for events, offices, and parties.",
};

export default function TruckCateringPage() {
  return (
    <main className="bg-chutney text-white">
      <SiteHeader site="truck" active="catering" tone="dark" />
      <MotionSection className="section-shell grid min-h-screen items-center gap-10 pb-20 pt-32 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="label-hero text-saffron">Truck catering</p>
          <h1 className="display-section mt-5 font-display font-black">Vegetarian trays for events.</h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/76">
            Chaat, pav, chai, lassi, and sweets for office lunches, parties, and pickup orders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MotionAnchor className="rounded-full bg-saffron px-6 py-4 text-sm font-black text-ink" href="tel:+16696498039">
              Call catering
            </MotionAnchor>
            <MotionAnchor className="rounded-full border border-white/24 px-6 py-4 text-sm font-black" href={links.order} target="_blank" rel="noreferrer">
              Order online
            </MotionAnchor>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-cream p-3 shadow-2xl">
          <Image src="/catering-chaat.jpg" alt="Catering tray" width={1400} height={980} priority quality={92} className="h-[34rem] w-full rounded-md object-cover" />
        </div>
      </MotionSection>
      <CateringPlanner variant="truck" />
      <MotionGroup className="section-shell grid gap-5 pb-24 md:grid-cols-3">
        {cateringMoments.map(([title, body]) => (
          <MotionItem key={title}>
            <article className="border-t border-white/20 pt-5">
              <h2 className="font-display text-3xl font-black">{title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/72">{body}</p>
            </article>
          </MotionItem>
        ))}
      </MotionGroup>
      <SiteFooter site="truck" tone="dark" />
      <MobileActionBar />
    </main>
  );
}
