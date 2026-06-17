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
      ["Dahi Batata Sev Puri", "$13.79", "Crisp puri with potato, yogurt, chutneys, and sev."],
      ["Dahi Papdi Chaat", "$11.99", "Papdi, yogurt, chutneys, sev, and spices."],
      ["Samosa Chaat", "$11.29", "Samosa with chickpeas, yogurt, chutneys, and crunch."],
      ["Aloo Tikki Chaat", "$11.29", "Potato patties with tangy chaat toppings."],
      ["Bhel Puri", "$11.29", "Puffed rice, chutneys, onion, herbs, and sev."],
      ["Pani Puri", "Market", "Crisp puri shells with spiced water and spiced filling."],
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

export const cateringMoments = [
  ["Office Lunch", "Vegetarian trays for teams and meetings."],
  ["Family Party", "Chaat, pav, lassi, and sweets for the table."],
  ["Event Pickup", "Call ahead for timing and tray planning."],
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
