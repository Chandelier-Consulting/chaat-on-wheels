export const links = {
  order: "https://postmates.com/store/chaat-on-wheels/9A13qNV2W5-yHyir6Yy4jw",
  menu: "/menu",
  premium: "/premium",
  journey: "/journey",
  yelp: "https://www.yelp.com/biz/chaat-on-wheels-sunnyvale",
  sunnyvaleMaps:
    "https://www.google.com/maps/search/?api=1&query=1101+Lawrence+Expressway+Sunnyvale+CA+94089",
  sanJoseMaps:
    "https://www.google.com/maps/search/?api=1&query=315+Crescent+Village+Cir+San+Jose+CA+95134",
};

export const locations = [
  {
    city: "Sunnyvale",
    address: "1101 Lawrence Expressway, Sunnyvale, CA 94089",
    hours: "Every day, 11:30 AM-8:40 PM",
    phone: "(669) 649-8039",
    tel: "tel:+16696498039",
    maps: links.sunnyvaleMaps,
  },
  {
    city: "San Jose",
    address: "315 Crescent Village Cir., San Jose, CA 95134",
    hours: "Call for current hours",
    phone: "(669) 215-9274",
    tel: "tel:+16692159274",
    maps: links.sanJoseMaps,
  },
];

export const dishes = [
  {
    name: "Dahi Puri",
    note: "Crisp shells, cold yogurt, chutneys, sev.",
    image: "/dahi-puri.jpg",
  },
  {
    name: "Vada Pav",
    note: "Mumbai-style potato fritter slider with chutney.",
    image: "/vada-pav.jpg",
  },
  {
    name: "Samosa Chaat",
    note: "Warm samosa, chickpeas, yogurt, tamarind, crunch.",
    image: "/samosa-chaat.jpg",
  },
];

export const journeyStops = [
  {
    number: "01",
    label: "Lunch rush",
    title: "Pav moves fast.",
    body: "Vada pav, pav bhaji, dabeli, and sandwiches built for quick pickup between meetings.",
    image: "/vada-pav.jpg",
  },
  {
    number: "02",
    label: "Chaat window",
    title: "Crunch, chutney, cold yogurt.",
    body: "Dahi puri and papdi chaat bring the clean, bright street-food hit.",
    image: "/dahi-puri.jpg",
  },
  {
    number: "03",
    label: "Chai break",
    title: "Reset with spice.",
    body: "Samosa chaat, masala chai, mango lassi, and rose milk for the afternoon crowd.",
    image: "/samosa-chaat.jpg",
  },
  {
    number: "04",
    label: "Catering lane",
    title: "Party trays without friction.",
    body: "Office lunch, family pickup, and event trays with direct call and order actions.",
    image: "/catering-chaat.jpg",
  },
];
