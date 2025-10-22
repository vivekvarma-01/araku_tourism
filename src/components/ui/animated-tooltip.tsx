"use client";

import React, { useState, useRef } from "react";
import { motion, useTransform, useSpring, AnimatePresence, useMotionValue } from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
    link?: string; // LinkedIn link
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-20, 20]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-3 cursor-pointer"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => item.link && window.open(item.link, "_blank")}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 12 } }}
                exit={{ opacity: 0, y: 10, scale: 0.6 }}
                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                className="absolute -top-8 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-md bg-black px-3 py-1 text-xs font-bold text-white shadow-lg"
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="relative h-10 w-10 rounded-full border-2 border-white object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
