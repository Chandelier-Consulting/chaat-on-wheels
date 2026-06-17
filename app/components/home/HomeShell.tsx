import Image from "next/image";
import Link from "next/link";
import { links, locations, menuCategories, siteNav } from "./content";
import { MenuAccordion } from "./MenuAccordion";
import { MotionAnchor, MotionLink, RevealItem } from "./MotionPrimitives";

type Tone = "dark" | "light";
type SiteId = "food" | "truck";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function BrandMark() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron font-mono text-sm font-black text-ink shadow-sm">
      CW
    </span>
  );
}

export function BrandHeader({ tone = "dark", activeVariant }: { tone?: Tone; activeVariant?: SiteId }) {
  const isDark = tone === "dark";
  const navLinkClass = (variant: SiteId) =>
    `transition hover:text-saffron ${activeVariant === variant ? "text-saffron" : ""}`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${
        isDark ? "border-white/10 bg-night/82 text-white" : "border-ink/10 bg-cream/88 text-ink"
      }`}
    >
      <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Chaat On Wheels home">
          <BrandMark />
          <span className="whitespace-nowrap font-display text-base font-black sm:text-lg">Chaat On Wheels</span>
        </Link>
        <div className={`hidden items-center gap-7 label-tight md:flex ${isDark ? "text-white/62" : "text-ink/62"}`}>
          <Link className={navLinkClass("food")} href="/premium" aria-current={activeVariant === "food" ? "page" : undefined}>
            Food
          </Link>
          <Link className={navLinkClass("truck")} href="/journey" aria-current={activeVariant === "truck" ? "page" : undefined}>
            Truck
          </Link>
          <Link className="transition hover:text-saffron" href="/menu">
            Menu
          </Link>
        </div>
        <MotionAnchor
          href={links.order}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron px-4 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105 sm:px-5"
        >
          Order now <ArrowIcon />
        </MotionAnchor>
      </nav>
    </header>
  );
}

export function SiteHeader({
  site,
  active,
  tone = "light",
}: {
  site: SiteId;
  active: "home" | "menu" | "catering" | "locations";
  tone?: Tone;
}) {
  const isDark = tone === "dark";
  const otherSite = site === "food" ? "truck" : "food";
  const otherHref = site === "food" ? "/truck" : "/food";
  const nav = siteNav[site];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${
        isDark ? "border-white/10 bg-night/86 text-white" : "border-ink/10 bg-cream/90 text-ink"
      }`}
    >
      <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
        <Link href={`/${site}`} className="flex items-center gap-3" aria-label="Chaat On Wheels home">
          <BrandMark />
          <span className="whitespace-nowrap font-display text-base font-black sm:text-lg">Chaat On Wheels</span>
        </Link>
        <div className={`hidden items-center gap-7 label-tight lg:flex ${isDark ? "text-white/62" : "text-ink/62"}`}>
          {nav.map(([label, href]) => {
            const key = label.toLowerCase() as typeof active;
            return (
              <Link
                key={href}
                className={`transition hover:text-saffron ${active === key ? "text-saffron" : ""}`}
                href={href}
                aria-current={active === key ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <MotionLink
            href={otherHref}
            className={`hidden rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.12em] transition sm:inline-flex ${
              isDark ? "border-white/16 text-white/70 hover:text-white" : "border-ink/12 text-ink/62 hover:text-ink"
            }`}
          >
            {otherSite === "truck" ? "Truck site" : "Food site"}
          </MotionLink>
          <MotionAnchor
            href={links.order}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron px-4 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105 sm:px-5"
          >
            Order now <ArrowIcon />
          </MotionAnchor>
        </div>
      </nav>
    </header>
  );
}

export function PreviewSwitcher({ active, tone = "light" }: { active: SiteId; tone?: Tone }) {
  const isDark = tone === "dark";
  const base = isDark
    ? "border-white/12 bg-night/78 text-white shadow-2xl"
    : "border-ink/10 bg-cream/88 text-ink shadow-xl";
  const inactive = isDark
    ? "text-white/62 hover:bg-white/10 hover:text-white"
    : "text-ink/62 hover:bg-ink/5 hover:text-ink";

  return (
    <div
      className={`fixed left-1/2 top-16 z-40 flex w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 items-center justify-center gap-1 rounded-full border p-1 backdrop-blur-xl md:top-20 md:w-auto ${base}`}
    >
      <Link
        href="/food"
        className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
          active === "food" ? "bg-saffron text-ink" : inactive
        }`}
      >
        Food site
      </Link>
      <Link
        href="/truck"
        className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
          active === "truck" ? "bg-saffron text-ink" : inactive
        }`}
      >
        Truck site
      </Link>
    </div>
  );
}

export function ActionLinks({
  tone = "dark",
  menuLabel = "View menu",
  menuHref = links.menu,
}: {
  tone?: Tone;
  menuLabel?: string;
  menuHref?: string;
}) {
  const secondaryClass =
    tone === "dark"
      ? "border-white/24 text-white hover:bg-white/10"
      : "border-ink/14 text-ink hover:bg-ink/5";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <MotionAnchor
        href={links.order}
        target="_blank"
        rel="noreferrer"
        className="cta-shadow inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-6 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105"
      >
        Order pickup <ArrowIcon />
      </MotionAnchor>
      <MotionLink
        href={menuHref}
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
      >
        {menuLabel}
      </MotionLink>
      <MotionAnchor
        href={links.sunnyvaleMaps}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
      >
        Directions
      </MotionAnchor>
    </div>
  );
}

export function SiteFooter({ site, tone = "light" }: { site: SiteId; tone?: Tone }) {
  const isDark = tone === "dark";
  const nav = siteNav[site];

  return (
    <footer className={`${isDark ? "bg-night text-white" : "bg-white text-ink"} px-4 py-12 sm:px-6 lg:px-8`}>
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-current/10 pt-8 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark />
            <p className="font-display text-2xl font-black">Chaat On Wheels</p>
          </div>
          <p className={`mt-4 max-w-sm text-sm font-semibold leading-6 ${isDark ? "text-white/62" : "text-muted"}`}>
            Vegetarian Indian street food for pickup, parties, and the South Bay.
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-black" aria-label={`${site} footer navigation`}>
          {nav.map(([label, href]) => (
            <Link key={href} className="transition hover:text-saffron" href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-3 text-sm font-semibold">
          <a className="font-black text-saffron" href={links.order} target="_blank" rel="noreferrer">
            Order online
          </a>
          <a href="tel:+16696498039">(669) 649-8039</a>
          <a href={links.sunnyvaleMaps} target="_blank" rel="noreferrer">
            1101 Lawrence Expressway, Sunnyvale
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SideRail({ label, tone = "dark" }: { label: string; tone?: Tone }) {
  return (
    <div className={`side-rail ${tone === "dark" ? "text-white/62" : "text-ink/62"}`} aria-hidden="true">
      <span className={tone === "dark" ? "bg-white/18" : "bg-ink/14"}>
        <i className="bg-saffron" />
      </span>
      <p>{label}</p>
    </div>
  );
}

export function ImageFrame({
  src,
  alt,
  priority = false,
  className = "h-full min-h-80",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className="photo-grade overflow-hidden rounded-lg bg-cream p-3 shadow-2xl ring-1 ring-white/14">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1100}
        priority={priority}
        quality={priority ? 92 : 85}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className={`${className} w-full rounded-md object-cover`}
      />
    </div>
  );
}

export function TruckIllustration() {
  return (
    <div className="truck-illustration" aria-label="Illustrated Chaat On Wheels truck">
      <div className="truck-body">
        <div className="truck-window-panel" />
        <span>CHAAT</span>
      </div>
    </div>
  );
}

export function LocationCards({ tone = "light" }: { tone?: Tone }) {
  return (
    <div className="grid gap-4">
      {locations.map((location) => (
        <RevealItem key={location.city} variant="softScale" amount={0.36}>
          <section
            className={`rounded-lg p-5 shadow-xl ring-1 ${
              tone === "dark" ? "bg-cream text-ink ring-white/10" : "bg-white text-ink ring-ink/10"
            }`}
          >
            <p className="label-tight text-tamarind">{location.city}</p>
            <h3 className="mt-2 font-display text-3xl font-black">{location.address.split(",")[0]}</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-muted">{location.address}</p>
            <p className="mt-4 label-wide text-chutney">{location.hours}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MotionAnchor className="grid min-h-11 place-items-center rounded-full bg-saffron px-4 text-sm font-black text-ink" href={location.tel}>
                {location.phone}
              </MotionAnchor>
              <MotionAnchor
                className="grid min-h-11 place-items-center rounded-full border border-ink/12 px-4 text-sm font-black"
                href={location.maps}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </MotionAnchor>
            </div>
          </section>
        </RevealItem>
      ))}
    </div>
  );
}

export function MenuShowcase({ mode = "food" }: { mode?: SiteId }) {
  const isTruck = mode === "truck";
  return (
    <div className="grid gap-6">
      {menuCategories.map((category) => (
        <RevealItem key={category.name} variant="softScale" amount={0.26}>
          <section className={isTruck ? "truck-menu-section" : "food-menu-section"}>
            <div className="menu-card-media">
              <Image
                src={category.image}
                alt={category.name}
                width={900}
                height={675}
                quality={85}
                className="photo-grade h-56 w-full object-cover md:h-full"
              />
              <div className="p-6 sm:p-8">
                <p className={`label-wide ${isTruck ? "text-saffron" : "text-tamarind"}`}>{category.items.length} items</p>
                <h2 className="mt-2 font-display text-4xl font-black">{category.name}</h2>
                <p className={`mt-3 max-w-xl text-sm font-semibold leading-6 ${isTruck ? "text-white/62" : "text-muted"}`}>
                  Current availability can change. Call ahead for specials or larger orders.
                </p>
              </div>
            </div>
            <MenuAccordion items={category.items} isTruck={isTruck} />
          </section>
        </RevealItem>
      ))}
    </div>
  );
}

export function GoogleMapFrame() {
  return (
    <section className="google-map-frame">
      <iframe
        title="Google Map for Chaat On Wheels in Sunnyvale"
        src="https://www.google.com/maps?q=Chaat%20On%20Wheels%201101%20Lawrence%20Expressway%20Sunnyvale%20CA%2094089&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="google-map-card">
        <p className="label-tight text-tamarind">Main stop</p>
        <h3 className="mt-2 font-display text-3xl font-black">Sunnyvale</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-muted">
          1101 Lawrence Expressway, Sunnyvale, CA 94089
        </p>
        <MotionAnchor
          className="mt-4 inline-flex rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink"
          href={links.sunnyvaleMaps}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </MotionAnchor>
      </div>
    </section>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-full border border-white/12 bg-night/92 p-2 shadow-2xl backdrop-blur sm:hidden">
      <MotionAnchor className="grid min-h-12 place-items-center rounded-full bg-saffron text-sm font-black text-ink" href={links.order} target="_blank" rel="noreferrer">
        Order
      </MotionAnchor>
      <MotionAnchor className="grid min-h-12 place-items-center rounded-full bg-tamarind text-sm font-black text-white" href="tel:+16696498039">
        Call
      </MotionAnchor>
    </div>
  );
}
