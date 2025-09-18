"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { tourPlans, TourPlan } from "./data/tourPlans";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function TourCard({
  plan,
  index,
  isActive,
  isInactive,
  onHover,
  onLeave,
}: {
  plan: TourPlan;
  index: number;
  isActive: boolean;
  isInactive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1.05 : 1,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{
        duration: 0.4,
        delay: 0.07 + index * 0.07,
        type: "spring",
      }}
      className={cn(
        "relative w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-[330px] min-w-[240px] transition-all duration-300",
        isActive && "shadow-xl scale-105",
        isInactive && "blur-[2.5px] brightness-90 pointer-events-none"
      )}
      style={{
        filter: isInactive ? "blur(2.5px) brightness(90%)" : "none",
        transition: "filter 0.35s, transform 0.35s, box-shadow 0.25s",
      }}
    >
      <Card
        className={cn(
          "relative h-full w-full bg-white dark:bg-zinc-900 border border-green-300 dark:border-zinc-700 text-left hover:shadow-lg overflow-hidden shadow-md"
        )}
      >
        <div className="relative h-32 overflow-hidden">
          <Image
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2 space-y-2 p-3">
          <CardTitle className="text-base font-bold leading-tight text-green-700 dark:text-green-400 line-clamp-2">
            {plan.title}
          </CardTitle>
          <div className="flex space-x-2">
            <Badge className="text-xs bg-white border border-green-300 text-green-700 px-2 py-0.5 dark:bg-zinc-900 dark:border-zinc-700 dark:text-green-400">
              {plan.duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 pb-3 px-3">
          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-black dark:text-zinc-200">
              Prices:
            </h4>
            <ul className="space-y-1 text-xs text-black dark:text-zinc-200">
              <li>🚙 4-Seater: {plan.price["4-Seater"]}</li>
              <li>🚐 8-Seater: {plan.price["8-Seater"]}</li>
            </ul>
          </div>

          {plan.hasSunrise && plan.sunriseOptions && (
            <div>
              <h4 className="font-semibold mb-1.5 text-xs text-black dark:text-zinc-200">
                Sunrise Options (add-on):
              </h4>
              <ul className="space-y-1 text-xs text-black dark:text-zinc-200">
                {plan.sunriseOptions.map((opt, idx) => (
                  <li key={idx}>
                    ☀ {opt.name} – {opt.price}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-black dark:text-zinc-200">
              Itinerary:
            </h4>
            <ul className="space-y-1 text-xs text-black dark:text-zinc-200">
              {plan.itinerary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ---- Must Try Section BELOW Itinerary ---- */}
          {plan.mustTry && (
            <div>
              <h4 className="font-semibold mb-1.5 text-xs text-black dark:text-zinc-200">
                Must Try:
              </h4>
              <ul className="space-y-1 text-xs text-black dark:text-zinc-200">
                {plan.mustTry.map((item, idx) => (
                  <li key={idx}>⭐ {item}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-black dark:text-zinc-200">
              Includes:
            </h4>
            <ul className="space-y-1 text-xs text-black dark:text-zinc-200">
              {plan.inclusions.map((inc, idx) => (
                <li key={idx}>✅ {inc}</li>
              ))}
            </ul>
          </div>
          {plan.notes && plan.notes.length > 0 && (
            <div>
              {plan.notes.map((note, idx) => (
                <p key={idx} className="text-xs text-black dark:text-zinc-200">
                  {note}
                </p>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0 mt-auto p-3">
          <a
            href={`https://wa.me/919550993844?text=${encodeURIComponent(
              `Hi, I’m interested in booking the ${plan.title} package.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white dark:text-zinc-100">
              Book Package
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


export default function TourPlans() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8 bg-white text-black dark:bg-zinc-950 dark:text-zinc-100">
      {/* Background circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full bg-green-100 blur-3xl dark:bg-green-900/10" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-green-50 blur-3xl dark:bg-green-900/5" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-green-50 blur-3xl dark:bg-green-900/5" />
      </div>
      <section id="packages" className="relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-2 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-green-700 to-green-400/60 dark:from-green-300 dark:to-green-400/40 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
            >
              Choose Your Perfect Araku Tour
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl pt-2 text-base text-black dark:text-zinc-300"
            >
              Flexible pricing for 4-seater & 8-seater cabs. Add optional
              sunrise experiences for the best of Araku!
            </motion.p>
          </div>
          {/* Tour Cards */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-10">
            {tourPlans.map((plan, index) => (
              <TourCard
                key={plan.id}
                plan={plan}
                index={index}
                isActive={hoveredIdx === index}
                isInactive={hoveredIdx !== null && hoveredIdx !== index}
                onHover={() => setHoveredIdx(index)}
                onLeave={() => setHoveredIdx(null)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
