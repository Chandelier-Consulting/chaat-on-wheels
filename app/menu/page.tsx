import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const orderLink = "https://postmates.com/store/chaat-on-wheels/9A13qNV2W5-yHyir6Yy4jw";
const sunnyvaleMaps =
  "https://www.google.com/maps/search/?api=1&query=1101+Lawrence+Expressway+Sunnyvale+CA+94089";

const categories = [
  {
    name: "Chaat",
    image: "/dahi-puri.jpg",
    items: [
      ["Dahi Batata Sev Puri", "$13.79", "Crisp puri with potato, yogurt, chutneys, and sev."],
      ["Dahi Papdi Chaat", "$11.99", "Papdi, yogurt, chutneys, sev, and spices."],
      ["Samosa Chaat", "$11.29", "Samosa with chickpeas, yogurt, chutneys, and crunch."],
      ["Aloo Tikki Chaat", "$11.29", "Potato patties with tangy chaat toppings."],
      ["Bhel Puri", "$11.29", "Puffed rice, chutneys, onion, herbs, and sev."],
      ["Pani Puri", "Market", "Crisp puri shells with spiced water and filling."],
    ],
  },
  {
    name: "Pav & Plates",
    image: "/vada-pav.jpg",
    items: [
      ["Vada Pav", "$7.79", "Mumbai-style potato fritter slider with chutney."],
      ["Pav Bhaji", "Market", "Buttery pav with mashed vegetable bhaji."],
      ["Dabeli", "$8.79", "Sweet-spicy street snack with potato filling."],
      ["Cheese Dabeli", "$10.79", "Dabeli with a richer cheese finish."],
      ["Kulche Chole", "$12.79", "Soft kulcha with North Indian-style chole."],
      ["Vegetarian Sandwich", "$11.29", "Indian-style vegetarian sandwich."],
      ["Paneer Sandwich", "$12.29", "Paneer sandwich with Indian street-food seasoning."],
    ],
  },
  {
    name: "Drinks & Sweets",
    image: "/catering-chaat.jpg",
    items: [
      ["Mango Lassi", "$6.29", "Creamy mango yogurt drink."],
      ["Masala Chai", "$4.99", "Spiced tea for the snack window."],
      ["Rose Milk", "$6.29", "Cold rose-flavored milk."],
      ["Sweet Lassi", "$4.99", "Sweet yogurt drink."],
      ["Salted Lassi", "$4.99", "Savory salted yogurt drink."],
      ["Gulab Jamun", "$6.49", "Two-piece syrup-soaked dessert."],
    ],
  },
];

export const metadata: Metadata = {
  title: "Menu | Chaat On Wheels",
  description: "Chaat On Wheels menu with chaat, pav, plates, lassi, chai, and sweets.",
};

function slug(value: string) {
  return value.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <header className="border-b border-white/10 bg-night text-white">
        <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-sm font-black text-ink">
              CW
            </span>
            <span className="font-display text-xl">Chaat On Wheels</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-saffron hover:text-saffron sm:inline-flex"
            >
              Day route
            </Link>
            <a
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink transition hover:bg-paper"
            >
              Order
            </a>
          </div>
        </nav>
      </header>

      <section className="hero-grid bg-night py-16 text-white">
        <div className="section-shell menu-hero-grid">
          <div>
            <h1 className="font-display text-balance max-w-3xl text-6xl leading-none text-white sm:text-7xl">
              Full menu
            </h1>
            <p className="mt-5 max-w-3xl text-3xl font-black leading-tight text-saffron sm:text-5xl">
              Chaat, pav, lassi, chai.
            </p>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/70">
              Browse the core Chaat On Wheels menu before you order pickup, call ahead, or
              head to the truck.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={orderLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink transition hover:bg-paper"
              >
                Order pickup
              </a>
              <a
                href={sunnyvaleMaps}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-saffron hover:text-saffron"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-paper p-3 shadow-2xl">
            <Image
              src="/samosa-chaat.jpg"
              alt="Samosa chaat"
              width={900}
              height={675}
              priority
              quality={92}
              className="photo-grade h-72 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell menu-content-grid">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav aria-label="Menu categories" className="menu-category-nav">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`#${slug(category.name)}`}
                  className="shrink-0 rounded-xl px-4 py-3 text-sm font-black text-muted transition hover:bg-paper hover:text-ink"
                >
                  {category.name}
                </a>
              ))}
            </nav>
            <div className="mt-5 rounded-2xl border border-white/10 bg-night p-5 text-sm font-semibold leading-6 text-white/70">
              <p className="label text-saffron">Sunnyvale</p>
              <p className="mt-2">1101 Lawrence Expressway</p>
              <p>Every day, 11:30 AM-8:40 PM</p>
              <a
                className="mt-4 inline-flex rounded-full bg-saffron px-4 py-3 font-black text-ink transition hover:bg-paper"
                href="tel:+16696498039"
              >
                (669) 649-8039
              </a>
            </div>
          </aside>

          <div className="grid gap-8">
            {categories.map((category) => (
              <section
                key={category.name}
                id={slug(category.name)}
                className="menu-card scroll-mt-8"
              >
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
                    <p className="label text-tamarind">
                      {category.items.length} items
                    </p>
                    <h2 className="font-display text-balance mt-2 text-4xl">{category.name}</h2>
                    <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-muted">
                      Current availability and prices can change. Call ahead for today&apos;s specials or larger orders.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-border px-5 py-2 sm:px-8">
                  {category.items.map(([name, price, description]) => (
                    <article key={name} className="menu-item-row py-5">
                      <div>
                        <h3 className="text-lg font-black">{name}</h3>
                        <p className="mt-1 max-w-3xl text-sm font-semibold leading-6 text-muted">{description}</p>
                      </div>
                      <p className="font-mono text-base font-bold text-tamarind sm:text-right">{price}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chutney py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-balance text-4xl">Ready to order?</h2>
            <p className="mt-2 text-sm font-semibold text-white/70">Order online, call Sunnyvale, or get directions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink transition hover:bg-paper"
              href={orderLink}
              target="_blank"
              rel="noreferrer"
            >
              Order online
            </a>
            <a
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-black transition hover:border-saffron hover:text-saffron"
              href={sunnyvaleMaps}
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
