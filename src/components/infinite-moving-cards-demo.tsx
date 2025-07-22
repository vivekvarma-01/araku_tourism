"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      {/* Heading above the testimonials */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl m-4"
              >
              What Our Travelers Say
            </motion.h1>
         <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Araku Tours and Travels gave us an amazing escape from the chaos of daily life. The scenic train ride through tunnels and hills, the aroma of fresh coffee plantations, and the calm of the valley made it a surreal experience. Everything was so well-coordinated, we just sat back and enjoyed every moment.",
    name: "Ravi Kumar",
    title: "Hyderabad",
  },
  {
    quote:
      "I booked a honeymoon package with Araku Tours, and from the moment we arrived, it felt like a dream. The cozy stay in the valley, candlelit dinner under the stars, and romantic strolls through lush gardens made it unforgettable. Their attention to detail was just perfect for couples like us.",
    name: "Pooja Mehta",
    title: "Pune",
  },
  {
    quote:
      "Being a solo traveler, I was initially nervous, but Araku Tours made me feel completely at home. From the moment I was picked up to the last drop-off, the journey was seamless. The guide shared so many fascinating stories about the local culture, and every spot we visited had its own magic.",
    name: "Sameer Ahmed",
    title: "Chennai",
  },
  {
    quote:
      "Our kids had the time of their lives at the tribal museum, garden train rides, and waterfalls. It wasn’t just a tour; it was an educational and fun-filled experience. The meals were family-friendly, the travel was comfortable, and the entire tour felt like a well-written storybook come alive.",
    name: "Nidhi Verma",
    title: "Vizag",
  },
  {
    quote:
      "From the moment we boarded the tour van to the final goodbye, everything was top-notch. The valley was covered in clouds, the breeze was refreshing, and the views were breathtaking. The team was punctual, professional, and made sure we experienced every major highlight of Araku.",
    name: "Kiran Desai",
    title: "Bangalore",
  },
  {
    quote:
      "Araku Tours was very considerate of our elderly parents, ensuring minimal walking and providing assistance wherever needed. The peaceful surroundings, the carefully selected viewpoints, and the delicious tribal cuisine made it a wholesome and heartwarming experience for all of us.",
    name: "Ramesh Naidu",
    title: "Guntur",
  },
  {
    quote:
      "The stay at the hilltop resort was nothing short of magical. Waking up to mist-covered hills, sipping coffee on the balcony, and watching the sunrise over the valley was surreal. Araku Tours gave us more than a vacation — it gave us moments we’ll remember for a lifetime.",
    name: "Ayesha Siddiqui",
    title: "Hyderabad",
  },
  {
    quote:
      "Araku Tours and Travels curated an experience filled with culture, beauty, and serenity. The tribal dance performances, authentic food, and warm people made it special. It felt less like a tour and more like being part of a beautiful journey into nature and heritage.",
    name: "Vikram Singh",
    title: "Delhi",
  },
  {
    quote:
      "Right from planning to execution, everything was flawless. The booking process was easy, the team stayed in touch throughout, and the itinerary included hidden gems that we’d have never discovered on our own. Truly a well-organized and delightful travel partner.",
    name: "Sneha Reddy",
    title: "Vijayawada",
  },
  {
    quote:
      "This was our second time traveling with Araku Tours and it only got better. From the misty coffee estates to the adventurous trek routes, the tour was filled with excitement. Their consistency in quality and their passion for creating unique experiences truly stands out.",
    name: "Manoj Pillai",
    title: "Kochi",
  },
];


