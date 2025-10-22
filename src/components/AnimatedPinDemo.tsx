"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedPinDemo() {
  return (
    <div className="relative h-[40rem] w-full flex items-center justify-center bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Animated green aura background */}
      <motion.div
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{ opacity: [0.5, 0.7, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-0 w-[23rem] h-[23rem] rounded-3xl 
          bg-green-300 dark:bg-green-900 
          blur-3xl opacity-60"
      />

      {/* Main content with PinContainer */}
      <div className="relative z-10">
        <PinContainer
          title="Location Pin"
          href="https://maps.app.goo.gl/SpkkgZYyoTvHAw8DA"
        >
          <div className="flex flex-col p-5 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-green-200 dark:border-zinc-800 w-[20rem] h-[25rem]">
            <h3 className="font-bold text-lg text-green-800 dark:text-green-300 mb-1">
              Araku
            </h3>
            <div className="text-base font-normal text-zinc-700 dark:text-zinc-200 mb-2">
              Scenic Valleys, Coffee Estates, Tribal Culture, Waterfalls, Bamboo Groves, Organic Farms, Dense Forests, Local Handicrafts, Caves.
            </div>
            <div className="mt-3 rounded-lg w-full h-48 relative overflow-hidden">
              <Image
                src="/location.png"
                alt="Map of Araku Valley"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 400px) 100vw, 320px"
                priority
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default AnimatedPinDemo;
