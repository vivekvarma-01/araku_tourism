"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      {/* Animated green aura background */}
      <motion.div
        initial={{ opacity: 0.4, scale: 0.95 }}
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.95, 1, 0.95] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-0 w-[23rem] h-[23rem] rounded-3xl bg-green-400 blur-3xl opacity-50"
      />

      {/* Main content with PinContainer */}
      <div className="relative z-10">
        <PinContainer
          title="Location Pin"
          href="https://maps.app.goo.gl/SpkkgZYyoTvHAw8DA"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Araku
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Scenic Valleys, Coffee Estates, Tribal Culture.
              </span>
            </div>
            <div>
              <Image
                src="/location.png"
                alt="Map of Araku Valley"
                width={600}
                height={300}
                className="rounded-lg mt-4 w-full"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default AnimatedPinDemo;
