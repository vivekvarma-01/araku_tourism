"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils"; // Ensure this utility exists

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type Props = {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<Props> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplicate the content to enable seamless infinite scroll
    const children = Array.from(scrollerRef.current.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollerRef.current?.appendChild(clone);
    });

    // Set direction and speed
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    let duration = "40s";
    if (speed === "fast") duration = "20s";
    else if (speed === "slow") duration = "80s";

    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "mask-gradient", // mask class for gradient fade effect
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-100 to-zinc-50 px-8 py-6 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900"
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-relaxed font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6">
                <span className="block text-sm font-medium text-neutral-500 dark:text-gray-400">
                  {item.name}
                </span>
                <span className="block text-sm text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
