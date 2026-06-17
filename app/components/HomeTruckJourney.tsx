"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

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
    label: "First shells",
    title: "Puri, yogurt, chutney, crunch.",
    body: "Dahi puri and papdi chaat start the day with cold yogurt, tamarind, mint, sev, and crisp shells.",
    image: "/dahi-puri.jpg",
  },
  {
    time: "12:45 PM",
    label: "Lunch window",
    title: "Pav moves fast.",
    body: "Vada pav, pav bhaji, dabeli, and sandwiches are built for quick pickup between meetings.",
    image: "/vada-pav.jpg",
  },
  {
    time: "3:30 PM",
    label: "Afternoon reset",
    title: "Chai and chaat come back around.",
    body: "Samosa chaat, aloo tikki, masala chai, mango lassi, and rose milk keep the second wave simple.",
    image: "/samosa-chaat.jpg",
  },
  {
    time: "6:30 PM",
    label: "Family lane",
    title: "Bigger plates, extra chutney.",
    body: "Kulche chole, group pickup, catering trays, and shareable orders close the route.",
    image: "/catering-chaat.jpg",
  },
];

const cardVariants = {
  left: { hidden: { opacity: 0, x: -72, y: 22 }, visible: { opacity: 1, x: 0, y: 0 } },
  right: { hidden: { opacity: 0, x: 72, y: 22 }, visible: { opacity: 1, x: 0, y: 0 } },
  up: { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
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

function DownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M12 5v14m-6-6 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function PremiumImage({
  src,
  alt,
  className,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      priority={priority}
      quality={priority ? 92 : 85}
      sizes={sizes}
      className={className}
    />
  );
}

function MiniTruck() {
  return (
    <svg className="h-full w-full drop-shadow-2xl" viewBox="0 0 74 126" aria-hidden="true">
      <ellipse cx="37" cy="116" rx="22" ry="7" fill="rgba(0,0,0,.32)" />
      <rect x="16" y="13" width="42" height="94" rx="13" fill="#c2883a" stroke="#fbf6ea" strokeWidth="3" />
      <path d="M20 37h34v45H20z" fill="#fbf6ea" />
      <path d="M23 19h28l5 16H18z" fill="#1f513a" />
      <path d="M25 23h24l2 8H22z" fill="#e7f6ff" opacity=".9" />
      <rect x="23" y="44" width="28" height="18" rx="4" fill="#1b1611" opacity=".88" />
      <text x="37" y="57" textAnchor="middle" fontSize="10" fontWeight="900" fill="#c2883a">
        CHAAT
      </text>
      <rect x="24" y="68" width="26" height="9" rx="4.5" fill="#6f3220" />
      <rect x="25" y="88" width="24" height="8" rx="4" fill="#1f513a" />
      <rect x="8" y="32" width="7" height="18" rx="3" fill="#1b1611" />
      <rect x="59" y="32" width="7" height="18" rx="3" fill="#1b1611" />
      <rect x="8" y="78" width="7" height="18" rx="3" fill="#1b1611" />
      <rect x="59" y="78" width="7" height="18" rx="3" fill="#1b1611" />
      <path d="M23 105h28" stroke="#fbf6ea" strokeWidth="4" strokeLinecap="round" />
      <circle cx="25" cy="9" r="3" fill="#fbf6ea" opacity=".82" />
      <circle cx="49" cy="9" r="3" fill="#fbf6ea" opacity=".82" />
    </svg>
  );
}

function TruckAsset() {
  return <MiniTruck />;
}

function ActionLinks({ dark = false }: { dark?: boolean }) {
  const secondaryClass = dark
    ? "border-ink/15 text-ink hover:bg-ink/5"
    : "border-white/20 text-white hover:bg-white/10";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={orderLink}
        target="_blank"
        rel="noreferrer"
        className="cta-shadow inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-6 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105"
      >
        Order now <ArrowIcon />
      </a>
      <a
        href={sunnyvaleMaps}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
      >
        Directions
      </a>
      <a
        href="/menu"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition ${secondaryClass}`}
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="premium-shadow max-w-xl rounded-lg border border-ink/10 bg-cream/95 p-5 text-ink backdrop-blur md:p-7"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      variants={cardVariants[align]}
      transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
    >
      <p className="label-wide text-tamarind">{eyebrow}</p>
      <h2 className="display-section mt-4 font-display text-3xl font-black leading-tight text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base font-semibold leading-7 text-muted">{body}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </motion.div>
  );
}

export default function HomeTruckJourney() {
  const ref = useRef<HTMLElement>(null);
  const stickyLayerRef = useRef<HTMLDivElement>(null);
  const roadSvgRef = useRef<SVGSVGElement>(null);
  const roadPathRef = useRef<SVGPathElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const truckLeft = useMotionValue("50%");
  const truckTop = useMotionValue("50%");
  const truckRotation = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const truckScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22, 0.42, 0.62, 0.82, 1],
    shouldReduceMotion ? [1, 1, 1, 1, 1, 1, 1] : [0.92, 1.08, 0.98, 1.1, 1, 1.06, 0.96],
  );
  const truckShadow = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.58, 0.78, 1], [
    "0 12px 32px rgba(0,0,0,.30)",
    "20px 20px 46px rgba(0,0,0,.42)",
    "-16px 20px 44px rgba(0,0,0,.38)",
    "18px 18px 46px rgba(0,0,0,.40)",
    "-18px 20px 46px rgba(0,0,0,.40)",
    "0 12px 32px rgba(0,0,0,.30)",
  ]);
  const roadOffset = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "-72%"]);
  const roadDraw = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [0.08, 1]);

  useEffect(() => {
    const updateTruckFromPath = (latest: number) => {
      const stickyLayer = stickyLayerRef.current;
      const roadSvg = roadSvgRef.current;
      const path = roadPathRef.current;
      if (!stickyLayer || !roadSvg || !path) return;

      const totalLength = path.getTotalLength();
      const wobble = shouldReduceMotion ? 0 : Math.sin(latest * Math.PI * 8) * 0.035;
      const drivenProgress = Math.min(0.98, Math.max(0.02, latest + wobble));
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
  }, [scrollYProgress, shouldReduceMotion, truckLeft, truckRotation, truckTop]);

  return (
    <main className="bg-night text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-night/80 backdrop-blur-xl">
        <nav className="section-shell flex min-h-16 items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="Chaat On Wheels home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron font-mono text-sm font-black text-ink">CW</span>
            <span className="font-display text-base font-black tracking-normal text-white sm:text-lg">Chaat On Wheels</span>
          </a>
          <div className="hidden items-center gap-7 label-tight text-white/62 md:flex">
            <a className="hover:text-saffron" href="#route">Day route</a>
            <a className="hover:text-saffron" href="/menu">Menu</a>
            <a className="hover:text-saffron" href="#locations">Locations</a>
          </div>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-saffron px-5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Order now <ArrowIcon />
          </a>
        </nav>
      </header>

      <section ref={ref} id="route" className="truck-window journey-section bg-night">
        <div className="relative z-20 grid min-h-screen items-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="hero-glow absolute inset-0" />
          <div className="hero-grid hero-copy-grid relative mx-auto w-full max-w-6xl">
            <motion.div
              className="max-w-2xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: EASE_OUT_EXPO }}
            >
              <p className="label-hero text-saffron">
                Sunnyvale vegetarian street food
              </p>
              <h1 className="display-hero mt-5 font-display font-black tracking-normal">
                Chaat
                <span className="block text-saffron">On Wheels</span>
              </h1>
              <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/72">
                A South Bay truck day told like an editorial route: crisp chaat shells, lunch pav,
                chai breaks, family pickup, and fast ordering.
              </p>
              <div className="mt-8">
                <ActionLinks />
              </div>
            </motion.div>

            <motion.div
              className="photo-grade premium-shadow overflow-hidden rounded-lg border border-white/12 bg-cream p-3"
              initial={shouldReduceMotion ? false : { opacity: 0, x: 72 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.72, delay: shouldReduceMotion ? 0 : 0.1, ease: EASE_OUT_EXPO }}
            >
              <PremiumImage
                src="/dahi-puri.jpg"
                alt="Premium chaat composition with yogurt, chutneys, and crisp puri"
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="hero-frame w-full rounded-md object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 label-wide text-white/58"
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0], opacity: [0.58, 1, 0.58] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: EASE_OUT_EXPO }}
          >
            <span>Scroll the route</span>
            <DownIcon />
          </motion.div>
        </div>

        <div ref={stickyLayerRef} className="sticky top-0 h-screen overflow-hidden">
          <div className="route-backdrop absolute inset-0" />
          <div className="route-grid-overlay absolute inset-0 opacity-20" />
          <div className="route-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-saffron/10 bg-saffron/5 blur-3xl" />

          <motion.svg
            ref={roadSvgRef}
            className="road-lane absolute left-1/2 top-0 -translate-x-1/2"
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
              stroke="rgba(246,178,26,.76)"
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
            <motion.div
              style={{ rotate: truckRotation, scale: truckScale, boxShadow: truckShadow }}
              transition={{ ease: EASE_SPRING }}
            >
              <TruckAsset />
            </motion.div>
          </motion.div>

          <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-center justify-between gap-3 label-route text-white/38">
            <span>Chaat route</span>
            <span>Sunnyvale / San Jose</span>
          </div>
        </div>

        <div className="route-overlap relative z-20">
          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="route-grid route-copy-grid mx-auto w-full max-w-6xl">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="First stop"
                  title="Start at the chaat window."
                  body="The truck route keeps the homepage focused: what to order now, where to find us, and how to get the full menu fast."
                >
                  <ActionLinks dark />
                </StoryCard>
              </div>
              <motion.div
                className="photo-grade premium-shadow overflow-hidden rounded-lg border border-white/12 bg-cream p-3 lg:col-start-3"
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.35 }}
                variants={cardVariants.right}
                transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
              >
                <Image src="/dahi-puri.jpg" alt="Dahi puri" width={900} height={675} quality={85} className="food-frame w-full rounded-md object-cover" />
              </motion.div>
            </div>
          </article>

          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="route-grid route-copy-grid mx-auto w-full max-w-6xl">
              <div className="grid gap-4 lg:col-start-1">
                {dailyStops.slice(0, 2).map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="photo-grade premium-shadow stop-card-grid overflow-hidden rounded-lg border border-white/10 bg-cream text-ink"
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants.up}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08, ease: EASE_OUT_EXPO }}
                  >
                    <Image src={item.image} alt={item.title} width={900} height={675} quality={85} className="aspect-video w-full object-cover sm:h-full sm:aspect-auto" />
                    <div className="p-4">
                      <p className="label-tight text-sm text-tamarind">{item.time}</p>
                      <p className="mt-2 label-route text-muted">{item.label}</p>
                      <h3 className="mt-2 font-display text-xl font-black leading-tight">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold leading-5 text-muted">{item.body}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="lg:col-start-3">
                <StoryCard
                  align="right"
                  eyebrow="Midday"
                  title="Lunch is the practical core."
                  body="Order online, swing through Sunnyvale, or use the menu page when you need the whole spread without losing the route."
                />
              </div>
            </div>
          </article>

          <article className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="route-grid route-copy-grid mx-auto w-full max-w-6xl">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="Afternoon"
                  title="Chai, lassi, second cravings."
                  body="The schedule keeps moving after lunch with warm snacks, cold drinks, and call-ahead pickup."
                >
                  <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-chutney px-6 text-sm font-black text-white" href="/menu">
                    Open full menu
                  </a>
                </StoryCard>
              </div>
              <motion.div
                className="grid gap-4 lg:col-start-3"
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants.right}
                transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
              >
                {dailyStops.slice(2).map((item, index) => (
                  <section key={item.title} className="photo-grade premium-shadow stop-card-grid overflow-hidden rounded-lg border border-white/10 bg-cream text-ink">
                    <Image src={item.image} alt={item.title} width={900} height={675} quality={85} className="aspect-video w-full object-cover sm:h-full sm:aspect-auto" />
                    <div className="p-5">
                      <p className="label-tight text-sm text-tamarind">{item.time}</p>
                      <p className="mt-2 label-route text-muted">{item.label}</p>
                      <h3 className="mt-2 font-display text-2xl font-black leading-tight">{item.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-muted">{item.body}</p>
                      <span className="mt-5 inline-flex rounded-full bg-white px-3 py-1 font-mono text-xs font-black text-tamarind shadow-sm">
                        Stop 0{index + 3}
                      </span>
                    </div>
                  </section>
                ))}
              </motion.div>
            </div>
          </article>

          <article id="locations" className="grid min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="route-grid route-copy-grid mx-auto w-full max-w-6xl">
              <div className="lg:col-start-1">
                <StoryCard
                  eyebrow="Last stop"
                  title="Pull up or call ahead."
                  body="Sunnyvale is the main listing. San Jose is included from the public Chaat On Wheels profile, with direct phone and map actions."
                >
                  <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-chutney px-6 text-sm font-black text-white" href={yelpLink} target="_blank" rel="noreferrer">
                    Open Yelp
                  </a>
                </StoryCard>
              </div>

              <motion.div
                className="grid gap-4 lg:col-start-3"
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants.right}
                transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
              >
                {[
                  ["Sunnyvale", "1101 Lawrence Expressway, Sunnyvale, CA 94089", "(669) 649-8039", "tel:+16696498039", "Every day, 11:30 AM-8:40 PM", sunnyvaleMaps],
                  ["San Jose", "315 Crescent Village Cir., San Jose, CA 95134", "(669) 215-9274", "tel:+16692159274", "Call for current hours", sanJoseMaps],
                ].map(([city, address, phone, tel, hours, map]) => (
                  <section key={city} className="premium-shadow rounded-lg border border-white/10 bg-cream p-5 text-ink">
                    <h3 className="font-display text-3xl font-black">{city}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-muted">{address}</p>
                    <p className="mt-4 label-wide text-tamarind">{hours}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-saffron px-4 text-sm font-black text-ink" href={tel}>
                        {phone}
                      </a>
                      <a className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/12 px-4 text-sm font-black" href={map} target="_blank" rel="noreferrer">
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

      <section className="bg-chutney px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="catering-grid mx-auto max-w-6xl">
          <div>
            <p className="label-wide text-saffron">Catering</p>
            <h2 className="display-section mt-3 font-display text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              Office lunch, party tray, family feast.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/76">
              The route ends with group pickup, event trays, and food-truck timing handled by phone.
            </p>
            <div className="mt-8">
              <ActionLinks />
            </div>
          </div>
          <div className="photo-grade premium-shadow rounded-lg bg-cream p-3">
            <Image
              src="/catering-chaat.jpg"
              alt="Samosa chaat with chutneys"
              width={1920}
              height={869}
              quality={85}
              loading="eager"
              className="h-80 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="bg-night px-4 pb-24 pt-10 text-white sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-black">Chaat On Wheels</p>
            <p className="mt-2 text-sm font-semibold text-white/56">Vegetarian Indian street food in the South Bay.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-saffron px-5 py-3 text-sm font-black text-ink" href={orderLink} target="_blank" rel="noreferrer">Order</a>
            <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white" href={yelpLink} target="_blank" rel="noreferrer">Yelp</a>
            <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white" href="tel:+16696498039">Call</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-full border border-white/12 bg-night/92 p-2 shadow-2xl backdrop-blur sm:hidden">
        <a className="grid min-h-12 place-items-center rounded-full bg-saffron text-sm font-black text-ink" href={orderLink} target="_blank" rel="noreferrer">Order</a>
        <a className="grid min-h-12 place-items-center rounded-full bg-tamarind text-sm font-black text-white" href="tel:+16696498039">Call</a>
      </div>
    </main>
  );
}
