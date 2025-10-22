"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TextGenerateEffect } from "./ui/text-generate-effect";


export function ImagesSliderDemo() {
   const words = `From Misty Hills to Hidden Caves\nAraku Awaits`;
  const images = [
    "/vana.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                  <TextGenerateEffect words={words} className="text-inherit" />
                </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
