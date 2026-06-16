"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const sunnyvaleMaps =
  "https://www.google.com/maps/search/?api=1&query=1101+Lawrence+Expressway+Sunnyvale+CA+94089";
const sanJoseMaps =
  "https://www.google.com/maps/search/?api=1&query=315+Crescent+Village+Cir+San+Jose+CA+95134";
const orderLink = "https://postmates.com/store/chaat-on-wheels/9A13qNV2W5-yHyir6Yy4jw";
const yelpLink = "https://www.yelp.com/biz/chaat-on-wheels-sunnyvale";

const roadPathD =
  "M18 8 C72 26 82 48 45 70 C12 90 18 118 68 132 C105 143 82 174 38 190 C8 204 22 236 72 250 C108 262 76 300 30 314";

const dailyStops = [
  {
    time: "11:30 AM",
    title: "Roll up and start crisp",
    body: "Dahi puri, papdi chaat, sev, yogurt, and chutney-heavy first orders.",
    image: "/dahi-puri.jpg",
  },
  {
    time: "12:45 PM",
    title: "Lunch rush pav window",
    body: "Vada pav, pav bhaji, dabeli, sandwiches, and fast pickup orders.",
    image: "/vada-pav.jpg",
  },
  {
    time: "3:30 PM",
    title: "Chai and chaat reset",
    body: "Samosa chaat, aloo tikki, masala chai, mango lassi, and rose milk.",
    image: "/samosa-chaat.jpg",
  },
  {
    time: "6:30 PM",
    title: "Family order lane",
    body: "Kulche chole, bigger plates, extra chutneys, and food built to share.",
    image: "/catering-chaat.jpg",
  },
];

const cardVariants = {
  left: { hidden: { opacity: 0, x: -88, y: 22 }, visible: { opacity: 1, x: 0, y: 0 } },
  right: { hidden: { opacity: 0, x: 88, y: 22 }, visible: { opacity: 1, x: 0, y: 0 } },
  up: { hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0 } },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ScrollArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 animate-bounce">
      <path d="M12 5v14m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function MiniTruck() {
  return (
    <svg className="h-full w-full drop-shadow-2xl" viewBox="0 0 74 126" aria-hidden="true">
      <ellipse cx="37" cy="116" rx="22" ry="7" fill="rgba(0,0,0,.35)" />
      <rect x="16" y="13" width="42" height="94" rx="13" fill="#ffb000" stroke="#fffaf0" strokeWidth="3" />
      <path d="M20 37h34v45H20z" fill="#fffaf0" />
      <path d="M23 19h28l5 16H18z" fill="#126c43" />
      <path d="M25 23h24l2 8H22z" fill="#e7f6ff" opacity=".9" />
      <rect x="23" y="44" width="28" height="18" rx="4" fill="#14110f" opacity=".88" />
      <text x="37" y="57" textAnchor="middle" fontSize="10" fontWeight="900" fill="#ffb000">
        CHAAT
      </text>
      <rect x="24" y="68" width="26" height="9" rx="4.5" fill="#e8473f" />
      <rect x="25" y="88" width="24" height="8" rx="4" fill="#126c43" />
      <rect x="8" y="32" width="7" height="18" rx="3" fill="#1b1714" />
      <rect x="59" y="32" width="7" height="18" rx="3" fill="#1b1714" />
      <rect x="8" y="78" width="7" height="18" rx="3" fill="#1b1714" />
      <rect x="59" y="78" width="7" height="18" rx="3" fill="#1b1714" />
      <path d="M23 105h28" stroke="#fffaf0" strokeWidth="4" strokeLinecap="round" />
      <circle cx="25" cy="9" r="3" fill="#fffaf0" opacity=".82" />
      <circle cx="49" cy="9" r="3" fill="#fffaf0" opacity=".82" />
    </svg>
  );
}

function ActionLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={orderLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffb000] px-6 text-sm font-black text-[#14110f] shadow-[0_18px_50px_rgba(255,176,0,.2)] transition hover:-translate-y-0.5 hover:bg-[#ffc53d]"
      >
        Order now <ArrowIcon />
      </a>
      <a
        href={sunnyvaleMaps}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-black text-white transition hover:bg-white/10"
      >
        Get directions
      </a>
      <a
        href="/menu"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-black text-white transition hover:bg-white/10"
      >
        Full menu
      </a>
    </div>
  );
}

function StoryCard({
  align = "left",
  eyebrow,
  title,
  body,
  children,
}: {
  align?: "left" | "right" | "up";
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className="max-w-xl rounded-2xl border border-white/12 bg-[#fffaf0]/92 p-5 text-[#14110f] shadow-[0_28px_80px_rgba(0,0,0,.26)] backdrop-blur md:p-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      variants={cardVariants[align]}
      transition={{ duration: 0.58, ease: "easeOut" }}
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7a1f13]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal md:text-4xl">{title}</h2>
      <p className="mt-4 text-base font-semibold leading-7 text-[#685f58]">{body}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </motion.div>
  );
}

export default function HomeTruckJourney() {
  const ref = useRef<HTMLElement>(null);
  const stickyLayerRef = useRef<HTMLDivElement>(null);
  const roadSvgRef = useRef<SVGSVGElement>(null);
  const roadPathRef = useRef<SVGPathElement>(null);
  const truckLeft = useMotionValue("50%");
  const truckTop = useMotionValue("50%");
  const truckRotation = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const truckScale = useTransform(scrollYProgress, [0, 0.12, 0.22, 0.42, 0.62, 0.82, 1], [0.92, 1.13, 0.96, 1.16, 0.98, 1.1, 0.94]);
  const truckShadow = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.58, 0.78, 1], [
    "0 12px 32px rgba(0,0,0,.34)",
    "20px 20px 46px rgba(0,0,0,.48)",
    "-16px 20px 44px rgba(0,0,0,.42)",
    "18px 18px 46px rgba(0,0,0,.46)",
    "-18px 20px 46px rgba(0,0,0,.44)",
    "0 12px 32px rgba(0,0,0,.34)",
  ]);
  const roadOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const roadDraw = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  useEffect(() => {
    const updateTruckFromPath = (latest: number) => {
      const stickyLayer = stickyLayerRef.current;
      const roadSvg = roadSvgRef.current;
      const path = roadPathRef.current;
      if (!stickyLayer || !roadSvg || !path) return;

      const totalLength = path.getTotalLength();
      const drivenProgress = Math.min(0.98, Math.max(0.02, latest + Math.sin(latest * Math.PI * 8) * 0.035));
      const distance = totalLength * drivenProgress;
      const point = path.getPointAtLength(distance);
      const ahead = path.getPointAtLength(Math.min(totalLength, distance + 1.4));
      const roadRect = roadSvg.getBoundingClientRect();
      const layerRect = stickyLayer.getBoundingClientRect();
      const x = roadRect.left - layerRect.left + (point.x / 100) * roadRect.width;
      const y = roadRect.top - layerRect.top + (point.y / 320) * roadRect.height;
      const dx = ((ahead.x - point.x) / 100) * roadRect.width;
      const dy = ((ahead.y - point.y) / 320) * roadRect.height;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

      truckLeft.set(`${x}px`);
      truckTop.set(`${y}px`);
      truckRotation.set(angle);
    };

    let frame: number | null = null;
    const scheduleTruckUpdate = (latest: number) => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        updateTruckFromPath(latest);
        frame = null;
      });
    };

    updateTruckFromPath(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", scheduleTruckUpdate);
    const updateOnResize = () => scheduleTruckUpdate(scrollYProgress.get());
    window.addEventListener("resize", updateOnResize);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      unsubscribe();
      window.removeEventListener("resize", updateOnResize);
    };
  }, [scrollYProgress, truckLeft, truckRotation, truckTop]);

  return (
    <main className="bg-[#11100f] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#11100f]/76 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="Chaat On Wheels home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffb000] text-sm font-black text-[#14110f]">CW</span>
            <span className="text-base font-black tracking-tight text-white sm:text-lg">Chaat On Wheels</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-black text-white/62 md:flex">
            <a className="hover:text-[#ffb000]" href="#route">Day route</a>
            <a className="hover:text-[#ffb000]" href="/menu">Menu</a>
            <a className="hover:text-[#ffb000]" href="#locations">Locations</a>
          </div>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#ffb000] px-5 text-sm font-black text-[#14110f] transition hover:-translate-y-0.5 hover:bg-[#ffc53d]"
          >
            Order now <ArrowIcon />
          </a>
        </nav>
      </header>

      <section ref={ref} id="route" className="truck-window min-h-[690vh] bg-[#11100f]">
        <div className="relative z-20 grid min-h-screen items-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb000]">Sunnyvale Indian street food</p>
              <h1 className="mt-5 text-[clamp(4rem,13vw,10rem)] font-black leading-[0.82] tracking-normal">
                Chaat
                <span className="block text-[#ffb000]">On Wheels</span>
              </h1>
              <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/72">
                Follow the truck through a full chaat day: first puri shells, lunch pav, chai reset,
                family orders, and call-ahead pickup.
              </p>
              <div className="mt-8">
                <ActionLinks />
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#fffaf0] p-3 shadow-[0_34px_90px_rgba(0,0,0,.36)]"
              initial={{ opacity: 0, x: 72 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                src="/hero-chaat.jpg"
                alt="Dahi puri and pani puri with chutneys"
                width={1456}
                height={2592}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-[330px] w-full rounded-[1.35rem] object-cover sm:h-[460px]"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/58">
            <span>Scroll the route</span>
            <ScrollArrow />
          </div>
        </div>

        <div ref={stickyLayerRef} className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#11100f_0%,#161c14_45%,#10100f_100%)]" />
          <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(255,250,240,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,250,240,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute left-1/2 top-1/2 h-[62vh] w-[62vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffb000]/10 bg-[#ffb000]/5 blur-3xl" />

          <motion.svg
            ref={roadSvgRef}
            className="road-lane absolute left-1/2 top-0 h-[320%] w-[42vw] min-w-[300px] max-w-[500px] -translate-x-1/2"
            style={{ y: roadOffset }}
            viewBox="0 0 100 320"
            preserveAspectRatio="none"
            role="img"
            aria-label="Squiggly South Bay route"
          >
            <path ref={roadPathRef} d={roadPathD} fill="none" stroke="rgba(255,250,240,.14)" strokeLinecap="round" strokeWidth="22" />
            <motion.path
              d={roadPathD}
              fill="none"
              pathLength={roadDraw}
              stroke="rgba(255,176,0,.72)"
              strokeDasharray="1.2 2.4"
              strokeLinecap="round"
              strokeWidth="1"
            />
          </motion.svg>

          <motion.div
            className="top-down-truck pointer-events-none absolute z-30 h-24 w-14 -translate-x-1/2 -translate-y-1/2"
            style={{ left: truckLeft, top: truckTop }}
            aria-label="Top-down Chaat On Wheels truck staying in its road lane"
          >
            <motion.div style={{ rotate: truckRotation, scale: truckScale, boxShadow: truckShadow }}>
              <MiniTruck />
            </motion.div>
          </motion.div>

          <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.16em] text-white/38">
            <span>Chaat route</span>
            <span>Sunnyvale · San Jose</span>
          </div>
        </div>

        <div className="relative z-20 -mt-[100vh]">
          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.46fr)_minmax(0,1fr)] lg:items-center">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="First stop"
                  title="Start at the chaat window."
                  body="This page is the day route. The full menu is separate, so the homepage can behave like Tomy's: a scrolling truck story with useful stops."
                >
                  <ActionLinks />
                </StoryCard>
              </div>
              <motion.div
                className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#fffaf0] p-3 shadow-[0_28px_80px_rgba(0,0,0,.3)] lg:col-start-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.35 }}
                variants={cardVariants.right}
                transition={{ duration: 0.58, ease: "easeOut" }}
              >
                <Image src="/dahi-puri.jpg" alt="Dahi puri" width={900} height={675} className="h-[300px] w-full rounded-[1rem] object-cover sm:h-[390px]" />
              </motion.div>
            </div>
          </article>

          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.46fr)_minmax(0,1fr)] lg:items-center">
              <div className="grid gap-4 lg:col-start-1">
                {dailyStops.slice(0, 2).map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#fffaf0] text-[#14110f] shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:grid sm:grid-cols-[190px_1fr]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants.up}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  >
                    <Image src={item.image} alt={item.title} width={900} height={675} className="aspect-[4/3] w-full object-cover sm:h-full sm:aspect-auto" />
                    <div className="p-4">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-[#7a1f13]">{item.time}</p>
                      <h3 className="mt-2 text-xl font-black leading-tight">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold leading-5 text-[#685f58]">{item.body}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="lg:col-start-3">
                <StoryCard
                  align="right"
                  eyebrow="Midday"
                  title="Lunch is the practical core."
                  body="The daily route shows the rhythm instead of cramming the whole menu onto the homepage. Menu browsing now lives on its own page."
                />
              </div>
            </div>
          </article>

          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.46fr)_minmax(0,1fr)] lg:items-center">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="Afternoon"
                  title="Chai, lassi, and second cravings."
                  body="The schedule keeps moving after lunch: samosa chaat, aloo tikki, masala chai, mango lassi, and easy snack orders."
                >
                  <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#126c43] px-6 text-sm font-black text-white" href="/menu">
                    Open full menu
                  </a>
                </StoryCard>
              </div>
              <motion.div
                className="grid gap-4 lg:col-start-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants.right}
                transition={{ duration: 0.58, ease: "easeOut" }}
              >
                {dailyStops.slice(2).map((item, index) => (
                  <section key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#fffaf0] text-[#14110f] shadow-[0_20px_60px_rgba(0,0,0,.18)] sm:grid sm:grid-cols-[190px_1fr]">
                    <Image src={item.image} alt={item.title} width={900} height={675} className="aspect-[4/3] w-full object-cover sm:h-full sm:aspect-auto" />
                    <div className="p-5">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-[#7a1f13]">{item.time}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight">{item.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-[#685f58]">{item.body}</p>
                      <span className="mt-5 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-[#7a1f13] shadow-sm">
                        Stop 0{index + 3}
                      </span>
                    </div>
                  </section>
                ))}
              </motion.div>
            </div>
          </article>

          <article id="locations" className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.46fr)_minmax(0,1fr)] lg:items-center">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="Last stop"
                  title="Pull up or call ahead."
                  body="Sunnyvale is the main Yelp listing. San Jose details are included from the public Chaat On Wheels social profile."
                >
                  <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#126c43] px-6 text-sm font-black text-white" href={yelpLink} target="_blank" rel="noreferrer">
                    Open Yelp
                  </a>
                </StoryCard>
              </div>

              <motion.div
                className="grid gap-4 lg:col-start-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants.right}
                transition={{ duration: 0.58, ease: "easeOut" }}
              >
                {[
                  ["Sunnyvale", "1101 Lawrence Expressway, Sunnyvale, CA 94089", "(669) 649-8039", "tel:+16696498039", "Every day, 11:30 AM-8:40 PM", sunnyvaleMaps],
                  ["San Jose", "315 Crescent Village Cir., San Jose, CA 95134", "(669) 215-9274", "tel:+16692159274", "Call for current hours", sanJoseMaps],
                ].map(([city, address, phone, tel, hours, map]) => (
                  <section key={city} className="rounded-2xl border border-white/10 bg-[#fffaf0] p-5 text-[#14110f] shadow-[0_20px_60px_rgba(0,0,0,.18)]">
                    <h3 className="text-3xl font-black">{city}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[#685f58]">{address}</p>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#7a1f13]">{hours}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ffb000] px-4 text-sm font-black text-[#14110f]" href={tel}>
                        {phone}
                      </a>
                      <a className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/12 px-4 text-sm font-black" href={map} target="_blank" rel="noreferrer">
                        Directions
                      </a>
                    </div>
                  </section>
                ))}
              </motion.div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#126c43] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl">Office lunch, party tray, family feast.</h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/76">
              The route ends with the practical stuff: group pickup, event trays, and food-truck timing handled by phone.
            </p>
            <div className="mt-8">
              <ActionLinks />
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#fffaf0] p-3 shadow-[0_28px_80px_rgba(0,0,0,.22)]">
            <Image
              src="/catering-chaat.jpg"
              alt="Samosa chaat with chutneys"
              width={1920}
              height={869}
              loading="eager"
              className="h-80 w-full rounded-[1.35rem] object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#11100f] px-4 pb-24 pt-10 text-white sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-black">Chaat On Wheels</p>
            <p className="mt-2 text-sm font-semibold text-white/56">Vegetarian Indian street food in the South Bay.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-[#ffb000] px-5 py-3 text-sm font-black text-[#14110f]" href={orderLink} target="_blank" rel="noreferrer">Order</a>
            <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white" href={yelpLink} target="_blank" rel="noreferrer">Yelp</a>
            <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white" href="tel:+16696498039">Call</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-full border border-white/12 bg-[#11100f]/92 p-2 shadow-2xl backdrop-blur sm:hidden">
        <a className="grid min-h-12 place-items-center rounded-full bg-[#ffb000] text-sm font-black text-[#14110f]" href={orderLink} target="_blank" rel="noreferrer">Order</a>
        <a className="grid min-h-12 place-items-center rounded-full bg-[#e8473f] text-sm font-black text-white" href="tel:+16696498039">Call</a>
      </div>
    </main>
  );
}
