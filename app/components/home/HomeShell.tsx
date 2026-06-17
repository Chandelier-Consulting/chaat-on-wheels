import Image from "next/image";
import Link from "next/link";
import { links, locations } from "./content";

type Tone = "dark" | "light";

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

export function BrandHeader({ tone = "dark" }: { tone?: Tone }) {
  const isDark = tone === "dark";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${
        isDark ? "border-white/10 bg-night/82 text-white" : "border-ink/10 bg-cream/88 text-ink"
      }`}
    >
      <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Chaat On Wheels home">
          <BrandMark />
          <span className="font-display text-lg font-black">Chaat On Wheels</span>
        </Link>
        <div className={`hidden items-center gap-7 label-tight md:flex ${isDark ? "text-white/62" : "text-ink/62"}`}>
          <Link className="transition hover:text-saffron" href="/premium">
            Premium
          </Link>
          <Link className="transition hover:text-saffron" href="/journey">
            Journey
          </Link>
          <Link className="transition hover:text-saffron" href="/menu">
            Menu
          </Link>
        </div>
        <a
          href={links.order}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-saffron px-5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Order now <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

export function ActionLinks({ tone = "dark", menuLabel = "View menu" }: { tone?: Tone; menuLabel?: string }) {
  const secondaryClass =
    tone === "dark"
      ? "border-white/24 text-white hover:bg-white/10"
      : "border-ink/14 text-ink hover:bg-ink/5";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={links.order}
        target="_blank"
        rel="noreferrer"
        className="cta-shadow inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-6 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105"
      >
        Order pickup <ArrowIcon />
      </a>
      <Link
        href="/menu"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
      >
        {menuLabel}
      </Link>
      <a
        href={links.sunnyvaleMaps}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
      >
        Directions
      </a>
    </div>
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
        <section
          key={location.city}
          className={`rounded-lg p-5 shadow-xl ring-1 ${
            tone === "dark" ? "bg-cream text-ink ring-white/10" : "bg-white text-ink ring-ink/10"
          }`}
        >
          <p className="label-tight text-tamarind">{location.city}</p>
          <h3 className="mt-2 font-display text-3xl font-black">{location.address.split(",")[0]}</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-muted">{location.address}</p>
          <p className="mt-4 label-wide text-chutney">{location.hours}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a className="grid min-h-11 place-items-center rounded-full bg-saffron px-4 text-sm font-black text-ink" href={location.tel}>
              {location.phone}
            </a>
            <a
              className="grid min-h-11 place-items-center rounded-full border border-ink/12 px-4 text-sm font-black"
              href={location.maps}
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-full border border-white/12 bg-night/92 p-2 shadow-2xl backdrop-blur sm:hidden">
      <a className="grid min-h-12 place-items-center rounded-full bg-saffron text-sm font-black text-ink" href={links.order} target="_blank" rel="noreferrer">
        Order
      </a>
      <a className="grid min-h-12 place-items-center rounded-full bg-tamarind text-sm font-black text-white" href="tel:+16696498039">
        Call
      </a>
    </div>
  );
}
