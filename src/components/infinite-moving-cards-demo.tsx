"use client";
import { motion } from "framer-motion";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Escaping the city rush with Araku Travels felt like stepping into another world. Gentle hills, charming tunnels, and the rich aroma of Araku coffee surrounded us everywhere. From start to finish, their team made everything effortless—we could just relax and soak up every magical moment.",
    name: "Ravi Kumar",
    title: "Hyderabad",
  },
  {
    quote:
      "As newlyweds, our honeymoon with Araku Travels was truly unforgettable. Candlelit dinners under the velvet sky, wandering hand in hand through emerald gardens, and cozy nights in the valley made everything so special. Every detail was tailored for romance and comfort.",
    name: "Pooja Mehta",
    title: "Pune",
  },
  {
    quote:
      "I traveled solo but never felt alone with Araku Travels by my side. From the first hello to the final goodbye, I found new friends, learned local stories, and explored each hidden gem with confidence. The guides' care and the region’s raw beauty turned my trip into an adventure I’ll cherish.",
    name: "Sameer Ahmed",
    title: "Chennai",
  },
  {
    quote:
      "Our kids were absolutely thrilled—from garden train rides to waterfall splashes and fun learning at the tribal museum. It wasn’t just a tour; it was an adventure that blended play, education, and nature. We felt safe, the meals suited everyone, and every day brought a new story.",
    name: "Nidhi Verma",
    title: "Vizag",
  },
  {
    quote:
      "Right from boarding the tour van, we felt in expert hands. Mist rolling over the hills, fresh breezes, and breathtaking views—every highlight of Araku was covered with precision. The team was always punctual, knowledgeable, and ensured we experienced the best in comfort and beauty.",
    name: "Kiran Desai",
    title: "Bangalore",
  },
  {
    quote:
      "Traveling with seniors can be tricky, but Araku Travels went out of their way for our parents. Minimal walking, helpful assistance at every stop, peaceful viewpoints, and delicious home-style tribal meals made it a trip that warmed all our hearts.",
    name: "Ramesh Naidu",
    title: "Guntur",
  },
  {
    quote:
      "Waking up at a hilltop resort to clouds drifting over coffee estates—that’s something you never forget. Morning coffee on the balcony, watching the sun rise over the valley—Araku Travels gave us a real escape, not just a vacation, but memories for a lifetime.",
    name: "Ayesha Siddiqui",
    title: "Hyderabad",
  },
  {
    quote:
      "The trip with Araku Travels was woven with the region’s rich heritage. Tribal dances, authentic local cuisine, and warm hospitality made us feel part of the culture, not just visitors. If you want to truly experience Araku, this is the way to go.",
    name: "Vikram Singh",
    title: "Delhi",
  },
  {
    quote:
      "From planning to the last day, Araku Travels was the perfect companion. Easy bookings, constant updates, and a thoughtfully chosen itinerary featuring hidden spots we would’ve missed otherwise. A truly delightful, inspiring travel team.",
    name: "Sneha Reddy",
    title: "Vijayawada",
  },
  {
    quote:
      "This was our second Araku adventure, and it just keeps getting better! Misty plantations, lively trek routes, and so many new things to discover. The team’s dedication and creativity shine through every unique experience.",
    name: "Manoj Pillai",
    title: "Kochi",
  },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-zinc-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-zinc-800 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl m-4 dark:from-zinc-200 dark:to-zinc-500"
      >
        What Our Travelers Say About Araku
      </motion.h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}
