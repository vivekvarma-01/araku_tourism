// data/tourPlans.ts

export interface SunriseOption {
  name: string;
  price: string;
}

export interface TourPlan {
  id: number;
  title: string;
  duration: string;
  price: { [vehicleType: string]: string }; // e.g., { "4-Seater": "₹3500", "8-Seater": "₹4500" }
  image?: string;
  highlights: string[];
  inclusions: string[];
  sunriseOptions?: SunriseOption[];
  hasSunrise?: boolean;
  itinerary: string[];
  notes?: string[];
  popular?: boolean;
}

export const tourPlans: TourPlan[] = [
  {
    id: 1,
    title: "1-Day Araku Quick Tour",
    duration: "1 Day",
    price: { "4-Seater": "₹3500", "8-Seater": "₹4500" },
    image: "https://i.pinimg.com/1200x/df/b0/e6/dfb0e669d0ae8f8d437387d6e98f66e3.jpg",
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
    ]
  },
  {
    id: 2,
    title: "2-Day Araku Explorer Tour (Optional Sunrise Add-on)",
    duration: "2 Days / 1 Night",
    price: { "4-Seater": "₹6000", "8-Seater": "₹7000" },
    image: "https://i.pinimg.com/736x/d9/41/ab/d941abb5519fbbec5bc2502387f9de56.jpg",
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
      "Day 1: Padmapuram Botanical Garden, Chocolate Factory 🍫, Tribal Museum, Coffee Museum & Coffee Plantation, Chaprai Waterfalls, Araku Pine Forest 🌲",
      "Day 2: Galikonda View Point, Thatiguda Waterfalls, Borra Caves, Katiki Waterfalls (Jeeps – ₹300/person)"
    ],
    notes: [
      "Sunrise Add-on available (Day 2 early morning)",
      "Add sunrise cost separately"
    ]
  },
  {
    id: 3,
    title: "3-Day Araku + Sunrise Combo Tour",
    duration: "3 Days / 2 Nights",
    price: { "4-Seater": "₹9000", "8-Seater": "₹11000" },
    image: "https://i.pinimg.com/1200x/48/39/d3/4839d3fea4f77f32fc3771bd1c6bf948.jpg",
    highlights: [
      "Includes full sunrise experience",
      "Cultural & Adventure Hotspots"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    hasSunrise: true,
    sunriseOptions: [
      { name: "Madagada", price: "₹2500" },
      { name: "Vanajangi", price: "₹6000" },
      { name: "Lambasingi", price: "₹8000" }
    ],
    itinerary: [
      "Day 1: Padmapuram Botanical Garden, Chocolate Factory, Tribal Museum, Coffee Museum & Coffee Plantation, Chaprai Waterfalls, Araku Pine Forest",
      "Day 2: Galikonda View Point, Thatiguda Waterfalls, Borra Caves, Katiki Waterfalls (Jeeps – ₹300/person)",
      "Day 3: Early Morning Sunrise (Pick: Madagada / Vanajangi / Lambasingi)"
    ],
    notes: ["Add sunrise cost separately"]
  },
  {
    id: 4,
    title: "4-Day Araku Full Tour + Sunrise Experience",
    duration: "4 Days / 3 Nights",
    price: { "4-Seater": "₹12000", "8-Seater": "₹14000" },
    image: "https://i.pinimg.com/736x/5d/8e/0f/5d8e0f643e5714d12d2c03698f1aa20f.jpg",
    highlights: [
      "Ultimate nature, adventure & culture",
      "Multiple sunrise & waterfall experiences"
    ],
    inclusions: ["Parking, tolls & driver charges"],
    hasSunrise: true,
    sunriseOptions: [
      { name: "Madagada (Day 2)", price: "₹2500" },
      { name: "Vanajangi (Day 3)", price: "₹6000" }
    ],
    itinerary: [
      "Day 1: Borra Caves, Coffee Plantation, Galikonda View Point, Katiki Waterfalls, Thatiguda Waterfalls (Night Stay in Araku Valley)",
      "Day 2: Early Morning Madagada Sunrise (add-on), Chaprai Waterfalls, Ranajilda Waterfalls, Padmapuram Botanical Garden, Chocolate Factory, Tribal Museum, Coffee Museum (Night Stay in Araku Valley)",
      "Day 3: Early Morning Vanajangi Sunrise (add-on), Kothapalli Waterfalls (Night Stay in Lambasingi)",
      "Day 4: Explore Lambasingi"
    ],
    notes: ["Add sunrise cost as desired"]
  }
]
