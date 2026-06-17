export const links = {
  order: "https://postmates.com/store/chaat-on-wheels/9A13qNV2W5-yHyir6Yy4jw",
  menu: "/food/menu",
  food: "/food",
  truck: "/truck",
  yelp: "https://www.yelp.com/biz/chaat-on-wheels-sunnyvale",
  sunnyvaleMaps:
    "https://www.google.com/maps/search/?api=1&query=1101+Lawrence+Expressway+Sunnyvale+CA+94089",
  sanJoseMaps:
    "https://www.google.com/maps/search/?api=1&query=315+Crescent+Village+Cir+San+Jose+CA+95134",
};

export const siteNav = {
  food: [
    ["Home", "/food"],
    ["Menu", "/food/menu"],
    ["Catering", "/food/catering"],
    ["Locations", "/food/locations"],
  ],
  truck: [
    ["Home", "/truck"],
    ["Menu", "/truck/menu"],
    ["Catering", "/truck/catering"],
    ["Locations", "/truck/locations"],
  ],
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

export const menuCategories = [
  {
    name: "Chaat",
    image: "/dahi-puri.jpg",
    items: [
      { name: "Dahi Batata Sev Puri", price: "$13.79", description: "Crisp puri with potato, yogurt, chutneys, and sev.", image: "/dahi-puri.jpg" },
      { name: "Dahi Papdi Chaat", price: "$11.99", description: "Papdi, yogurt, chutneys, sev, and spices.", image: "/dahi-puri.jpg" },
      { name: "Samosa Chaat", price: "$11.29", description: "Samosa with chickpeas, yogurt, chutneys, and crunch.", image: "/samosa-chaat.jpg" },
      { name: "Aloo Tikki Chaat", price: "$11.29", description: "Potato patties with tangy chaat toppings.", image: "/samosa-chaat.jpg" },
      { name: "Bhel Puri", price: "$11.29", description: "Puffed rice, chutneys, onion, herbs, and sev.", image: "/hero-chaat.jpg" },
      { name: "Pani Puri", price: "Market", description: "Crisp puri shells with spiced water and spiced filling.", image: "/dahi-puri.jpg" },
    ],
  },
  {
    name: "Pav & Plates",
    image: "/vada-pav.jpg",
    items: [
      { name: "Vada Pav", price: "$7.79", description: "Mumbai-style potato fritter slider with chutney.", image: "/vada-pav.jpg" },
      { name: "Pav Bhaji", price: "Market", description: "Buttery pav with mashed vegetable bhaji.", image: "/vada-pav.jpg" },
      { name: "Dabeli", price: "$8.79", description: "Sweet-spicy street snack with potato filling.", image: "/vada-pav.jpg" },
      { name: "Cheese Dabeli", price: "$10.79", description: "Dabeli with a richer cheese finish.", image: "/vada-pav.jpg" },
      { name: "Kulche Chole", price: "$12.79", description: "Soft kulcha with North Indian-style chole.", image: "/samosa-chaat.jpg" },
      { name: "Vegetarian Sandwich", price: "$11.29", description: "Indian-style vegetarian sandwich.", image: "/vada-pav.jpg" },
      { name: "Paneer Sandwich", price: "$12.29", description: "Paneer sandwich with Indian street-food seasoning.", image: "/vada-pav.jpg" },
    ],
  },
  {
    name: "Drinks & Sweets",
    image: "/catering-chaat.jpg",
    items: [
      { name: "Mango Lassi", price: "$6.29", description: "Creamy mango yogurt drink.", image: "/catering-chaat.jpg" },
      { name: "Masala Chai", price: "$4.99", description: "Spiced tea for the snack window.", image: "/hero-chaat.jpg" },
      { name: "Rose Milk", price: "$6.29", description: "Cold rose-flavored milk.", image: "/catering-chaat.jpg" },
      { name: "Sweet Lassi", price: "$4.99", description: "Sweet yogurt drink.", image: "/catering-chaat.jpg" },
      { name: "Salted Lassi", price: "$4.99", description: "Savory salted yogurt drink.", image: "/catering-chaat.jpg" },
      { name: "Gulab Jamun", price: "$6.49", description: "Two-piece syrup-soaked dessert.", image: "/samosa-chaat.jpg" },
    ],
  },
];

export const cateringMoments = [
  ["Office Lunch", "Vegetarian trays for teams and meetings."],
  ["Family Party", "Chaat, pav, lassi, and sweets for the table."],
  ["Event Pickup", "Call ahead for timing and tray planning."],
];

export const reviews = [
  {
    quote: "The dahi puri was crisp, cold, and balanced. Easy pickup and exactly what we wanted for lunch.",
    name: "Priya S.",
    context: "Sunnyvale pickup",
  },
  {
    quote: "Vada pav, samosa chaat, and chai all landed well for our office order. Simple, fast, no wasted food.",
    name: "Arjun M.",
    context: "Team lunch",
  },
  {
    quote: "Ordered trays for a family gathering. The chaat held up, the portions made sense, and pickup was smooth.",
    name: "Meera K.",
    context: "Catering pickup",
  },
];

export const journeyStops = [
  {
    number: "01",
    label: "Lunch",
    title: "Pav for lunch.",
    body: "Vada pav, pav bhaji, dabeli, and sandwiches for pickup.",
    image: "/vada-pav.jpg",
  },
  {
    number: "02",
    label: "Chaat window",
    title: "Crunch, chutney, cold yogurt.",
    body: "Dahi puri and papdi chaat with yogurt, tamarind, mint, and sev.",
    image: "/dahi-puri.jpg",
  },
  {
    number: "03",
    label: "Chai break",
    title: "Chai and lassi.",
    body: "Samosa chaat, masala chai, mango lassi, and rose milk.",
    image: "/samosa-chaat.jpg",
  },
  {
    number: "04",
    label: "Catering",
    title: "Trays for groups.",
    body: "Office lunch, family pickup, and event trays by call or online order.",
    image: "/catering-chaat.jpg",
  },
];
