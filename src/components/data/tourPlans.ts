// data/tourPlans.ts

export interface SunriseOption {
  name: string;
  price: string;
}

export interface TourPlan {
  id: number;
  title: string;
  duration: string;
  price: { [vehicleType: string]: string };
  image?: string;
  highlights: string[];
  inclusions: string[];
  sunriseOptions?: SunriseOption[];
  hasSunrise?: boolean;
  itinerary: string[];
  notes?: string[];
  popular?: boolean;
  mustTry?: string[]; // <-- Must Try column added
}

export const tourPlans: TourPlan[] = [
  {
    id: 1,
    title: "1-Day Araku Quick Tour",
    duration: "1 Day",
    price: { "4-Seater": "₹3500", "8-Seater": "₹4500" },
    image: "/pack1.jpg",
    highlights: [
      "Padmapuram Botanical Garden",
      "Tribal Museum",
      "Coffee Museum",
      "Coffee Plantation",
      "Galikonda View Point",
      "Borra Caves"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    itinerary: [
      "Padmapuram Botanical Garden",
      "Tribal Museum",
      "Coffee Museum",
      "Coffee Plantation",
      "Galikonda View Point",
      "Borra Caves"
    ],
    mustTry: ["Dhimsa Dance", "Bamboo Biryani", "Bamboo Chicken"]
  },
  {
    id: 2,
    title: "2-Day Araku Explorer Tour (Optional Sunrise Add-on)",
    duration: "2 Days / 1 Night",
    price: { "4-Seater": "₹6000", "8-Seater": "₹7000" },
    image: "/pack2.jpg",
    highlights: [
      "Chocolate Factory Visit",
      "Waterfall Adventures",
      "Pine Forest Exploration"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    hasSunrise: true,
    sunriseOptions: [
      { name: "Madagada", price: "₹2500" },
      { name: "Vanajangi", price: "₹6000" },
      { name: "Lambasingi", price: "₹8000" }
    ],
    itinerary: [
      "Day 1: Padmapuram Botanical Garden, Chocolate Factory , Tribal Museum, Coffee Museum & Coffee Plantation, Chaprai Waterfalls, Araku Pine Forest ",
      "Day 2: Galikonda View Point, Thatiguda Waterfalls, Borra Caves, Katiki Waterfalls (Jeeps – ₹300/person)"
    ],
    notes: [
      "Sunrise Add-on available (Day 2 early morning)",
      "Add sunrise cost separately"
    ],
    mustTry: ["Dhimsa Dance", "Bamboo Biryani", "Bamboo Chicken"]
  },
  {
    id: 3,
    title: "3-Day Araku + Vanajangi Sunrise Tour",
    duration: "3 Days / 2 Nights",
    price: { "4-Seater": "₹10000", "8-Seater": "₹12000" },
    image: "/pack3.jpg",
    highlights: [
      "Breathtaking Vanajangi Sunrise Included",
      "Nature, Culture & Adventure Experience"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    hasSunrise: true,
    sunriseOptions: [
      { name: "Madagada", price: "₹2500" },
      { name: "Lambasingi", price: "₹8000" }
    ],
    itinerary: [
      "Day 1: Padmapuram Botanical Garden, Chocolate Factory, Tribal Museum, Coffee Museum & Coffee Plantation, Chaprai Waterfalls, Araku Pine Forest",
      "Day 2: Galikonda View Point, Thatiguda Waterfalls, Borra Caves, Katiki Waterfalls (Jeeps – ₹300/person)",
      "Day 3: Early Morning Vanajangi Sunrise Experience (Optional switch to Madagada or Lambasingi at at their cost)"
    ],
    notes: ["Sunrise cost is additional unless Vanajangi is selected"],
    mustTry: ["Dhimsa Dance", "Bamboo Biryani", "Bamboo Chicken"]
  },
  {
    id: 4,
    title: "4-Day Araku & Lambasingi Adventure + Sunrise Tour",
    duration: "4 Days / 3 Nights",
    price: { "4-Seater": "₹15,000", "8-Seater": "₹20,000" },
    image: "/pack4.jpg",
    highlights: [
      "Complete Araku Valley Experience",
      "Vanajangi Sunrise + Multiple Waterfalls",
      "Nature, Culture & Scenic Landscapes"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    hasSunrise: true,
    itinerary: [
      "Day 1: Borra Caves, Coffee Plantation, Galikonda View Point, Katiki Waterfalls, Thatiguda Waterfalls (Night Stay in Araku Valley)",
      "Day 2: Chaprai Waterfalls, Ranajilda Waterfalls, Padmapuram Botanical Garden, Chocolate Factory, Tribal Museum, Coffee Museum (Night Stay in Araku Valley)",
      "Day 3: Early Morning Vanajangi Sunrise, Kothapalli Waterfalls (Night Stay in Lambasingi)",
      "Day 4: Morning Sunrise exploration in Lambasingi – misty valleys, forest views, and return journey"
    ],
    notes: ["Vanajangi Sunrise included. Lambasingi Sunrise included."],
    mustTry: ["Dhimsa Dance", "Bamboo Biryani", "Bamboo Chicken"]
  }
];
