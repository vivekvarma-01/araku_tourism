export interface TourPlan {
  id: number
  title: string
  duration: string
  price: string
  originalPrice?: string
  image?: string
  highlights: string[]
  inclusions: string[]
  popular?: boolean
}

export const tourPlans: TourPlan[] = [
  {
    id: 1,
    title: "Araku Day Trip",
    duration: "1 Day",
    price: "₹2,999",
    originalPrice: "₹3,499",
    image: "https://i.pinimg.com/1200x/df/b0/e6/dfb0e669d0ae8f8d437387d6e98f66e3.jpg",
    highlights: [
      "Borra Caves exploration",
      "Araku Valley sightseeing",
      "Coffee Museum visit",
      "Tribal Museum tour",
      "Local lunch included",
    ],
    inclusions: ["AC Transportation", "Professional Guide", "Entry Tickets", "Lunch", "Photography stops"],
    popular: false,
  },
  {
    id: 2,
    title: "Araku Weekend Getaway",
    duration: "2 Days / 1 Night",
    price: "₹5,999",
    originalPrice: "₹7,499",
    image: "https://i.pinimg.com/736x/d9/41/ab/d941abb5519fbbec5bc2502387f9de56.jpg",
    highlights: [
      "Borra Caves & Katiki Waterfalls",
      "Coffee plantation tour",
      "Tribal village experience",
      "Sunset at Galikonda viewpoint",
      "Bonfire & cultural evening",
    ],
    inclusions: [
      "Hotel accommodation",
      "All meals (3 meals)",
      "AC Transportation",
      "Guide & entry tickets",
      "Cultural activities",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Complete Araku Experience",
    duration: "3 Days / 2 Nights",
    price: "₹8,999",
    originalPrice: "₹11,499",
    image: "https://i.pinimg.com/1200x/48/39/d3/4839d3fea4f77f32fc3771bd1c6bf948.jpg",
    highlights: [
      "Extended tribal village stay",
      "Tyda Nature Camp adventure",
      "Chaparai Water Cascade",
      "Ananthagiri Hills trekking",
      "Traditional craft workshops",
    ],
    inclusions: [
      "Premium accommodation",
      "All meals (7 meals)",
      "Adventure activities",
      "Cultural workshops",
      "Professional photography",
    ],
    popular: true,
  },
  {
    id: 4,
    title: "Araku Explorer Package",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    originalPrice: "₹16,499",
    image: "https://i.pinimg.com/736x/5d/8e/0f/5d8e0f643e5714d12d2c03698f1aa20f.jpg",
    highlights: [
      "Train journey experience",
      "Multiple waterfall visits",
      "Extended nature camping",
      "Local cooking classes",
      "Handicraft shopping tour",
    ],
    inclusions: [
      "Luxury accommodation",
      "Train tickets included",
      "All meals & snacks",
      "Adventure gear",
      "Souvenir package",
    ],
    popular: false,
  },
]

// Helper function to get popular plans
export const getPopularPlans = (): TourPlan[] => {
  return tourPlans.filter((plan) => plan.popular)
}

// Helper function to get plans by duration
export const getPlansByDuration = (days: number): TourPlan[] => {
  return tourPlans.filter((plan) => plan.duration.includes(`${days} Day`))
}

// Helper function to get plans by price range
export const getPlansByPriceRange = (minPrice: number, maxPrice: number): TourPlan[] => {
  return tourPlans.filter((plan) => {
    const price = Number.parseInt(plan.price.replace("₹", "").replace(",", ""))
    return price >= minPrice && price <= maxPrice
  })
}
