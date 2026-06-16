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
    <main className="min-h-screen bg-[#fffaf0] text-[#14110f]">
      <header className="border-b border-black/10 bg-[#11100f] text-white">
        <nav className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffb000] text-sm font-black text-[#14110f]">CW</span>
            <span className="font-black">Chaat On Wheels</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden rounded-full border border-white/18 px-5 py-3 text-sm font-black text-white sm:inline-flex">
              Day route
            </Link>
            <a href={orderLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#ffb000] px-5 py-3 text-sm font-black text-[#14110f]">
              Order
            </a>
          </div>
        </nav>
      </header>

      <section className="bg-[#11100f] px-4 pb-14 pt-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb000]">Full menu</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl">
              Chaat, pav, lassi, chai.
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/68">
              A practical menu page, separated from the animated daily route so ordering stays fast.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#fffaf0] p-3 shadow-[0_34px_90px_rgba(0,0,0,.36)]">
            <Image src="/samosa-chaat.jpg" alt="Samosa chaat" width={900} height={675} priority className="h-72 w-full rounded-[1.35rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav aria-label="Menu categories" className="flex gap-2 overflow-x-auto rounded-2xl border border-black/10 bg-white p-2 shadow-sm [scrollbar-width:none] lg:flex-col">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`#${slug(category.name)}`}
                  className="shrink-0 rounded-xl px-4 py-3 text-sm font-black text-[#685f58] transition hover:bg-[#fff4d2] hover:text-[#14110f]"
                >
                  {category.name}
                </a>
              ))}
            </nav>
            <div className="mt-5 rounded-2xl border border-black/10 bg-[#11100f] p-5 text-sm font-semibold leading-6 text-white/64">
              <p className="font-black text-[#ffb000]">Sunnyvale</p>
              <p className="mt-2">1101 Lawrence Expressway</p>
              <p>Every day, 11:30 AM-8:40 PM</p>
              <a className="mt-4 inline-flex rounded-full bg-[#ffb000] px-4 py-3 font-black text-[#14110f]" href="tel:+16696498039">
                (669) 649-8039
              </a>
            </div>
          </aside>

          <div className="grid gap-8">
            {categories.map((category) => (
              <section
                key={category.name}
                id={slug(category.name)}
                className="scroll-mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_22px_70px_rgba(64,42,20,.08)]"
              >
                <div className="grid border-b border-black/10 bg-[#fff7e3] md:grid-cols-[260px_1fr]">
                  <Image src={category.image} alt={category.name} width={900} height={675} className="h-56 w-full object-cover md:h-full" />
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a1f13]">
                      {category.items.length} items
                    </p>
                    <h2 className="mt-2 text-3xl font-black">{category.name}</h2>
                    <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[#685f58]">
                      Current availability and prices can change. Call ahead for today&apos;s specials or larger orders.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-black/10 px-5 py-2 sm:px-8">
                  {category.items.map(([name, price, description]) => (
                    <article key={name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                      <div>
                        <h3 className="text-lg font-black">{name}</h3>
                        <p className="mt-1 max-w-3xl text-sm font-semibold leading-6 text-[#685f58]">{description}</p>
                      </div>
                      <p className="text-base font-black text-[#7a1f13] sm:text-right">{price}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#126c43] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Ready to order?</h2>
            <p className="mt-2 text-sm font-semibold text-white/70">Order online, call Sunnyvale, or get directions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-[#ffb000] px-5 py-3 text-sm font-black text-[#14110f]" href={orderLink} target="_blank" rel="noreferrer">
              Order online
            </a>
            <a className="rounded-full border border-white/22 px-5 py-3 text-sm font-black" href={sunnyvaleMaps} target="_blank" rel="noreferrer">
              Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
