"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const developers = [
  {
    id: 1,
    name: "Vivek Varma",
    image: "vivekvarma.jpeg",
    link: "https://www.linkedin.com/in/vivek-varma-/",
  },
  {
    id: 2,
    name: "Shashi Varun",
    image: "shashivarun.jpg",
    link: "https://www.linkedin.com/in/shashi-varun-28874124a/",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center mt-4 sm:flex-row sm:items-center sm:gap-3">
      <span className="text-sm font-bold text-green-700 dark:text-green-400 mb-2 sm:mb-0">
        Our Developers
      </span>
      <div className="flex gap-2">
        <AnimatedTooltip items={developers} />
      </div>
    </div>
  );
}
