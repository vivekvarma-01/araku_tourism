"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils"; // Make sure you have this utility

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

    // Remove any previous clones before duplicating
    const children = Array.from(scrollerRef.current.children);
    // Remove previously cloned nodes if present
    while (scrollerRef.current.children.length > items.length) {
      scrollerRef.current.removeChild(scrollerRef.current.lastChild as Node);
    }
    // Duplicate the content only once
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
  }, [direction, speed, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Gradient fade on edges for smooth effect
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "mask-gradient",
        className,
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
            className={cn(
              "relative w-[350px] max-w-full shrink-0 rounded-2xl border",
              "border-zinc-200 bg-gradient-to-b from-zinc-100 to-zinc-50",
              "dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900",
              "shadow-lg transition-colors duration-200",
              "px-8 py-6 flex flex-col justify-between"
            )}
          >
            <blockquote>
              <span className="text-base leading-relaxed font-normal text-zinc-900 dark:text-zinc-100">
                {item.quote}
              </span>
              <footer className="mt-6">
                <span className="block text-sm font-semibold text-green-600 dark:text-green-400">
                  {item.name}
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                  {item.title}
                </span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
