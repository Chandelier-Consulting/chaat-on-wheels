import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "./components/home/HomeShell";

const options = [
  {
    href: "/premium",
    label: "Version A",
    title: "Premium Editorial",
    body: "Restrained, image-led, restaurant-brand feel. Best for making Chaat On Wheels feel premium and polished.",
    image: "/hero-chaat.jpg",
    accent: "text-saffron",
  },
  {
    href: "/journey",
    label: "Version C",
    title: "Truck Journey",
    body: "More ownable and memorable: route motion, sideways progress, Indian color, and professional street-food energy.",
    image: "/vada-pav.jpg",
    accent: "text-chutney",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-white">
      <header className="border-b border-white/10">
        <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <BrandMark />
            <span className="font-display text-lg font-black">Chaat On Wheels</span>
          </Link>
          <Link className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink" href="/menu">
            Menu
          </Link>
        </nav>
      </header>

      <section className="section-shell py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="label-hero text-saffron">Client homepage review</p>
          <h1 className="display-section mt-5 font-display font-black">
            Two directions. Same conversion spine.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/68">
            Both concepts keep order, menu, directions, call, and catering actions easy. Pick the brand feel first, then refine.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {options.map((option) => (
            <Link key={option.href} href={option.href} className="home-option-card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  priority
                  quality={92}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/18 to-transparent" />
                <p className={`absolute left-5 top-5 label-wide ${option.accent}`}>{option.label}</p>
              </div>
              <div className="p-6">
                <h2 className="font-display text-5xl font-black leading-none">{option.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/66">{option.body}</p>
                <span className="mt-6 inline-flex rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink">
                  Open concept
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
