"use client";
import { TourPlan, tourPlans } from "./data/tourPlans";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
import { Check, Clock, Star } from "lucide-react";
import React from "react";

// Utility function for conditional class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Component to render individual tour card
function TourCard({ plan, index }: { plan: TourPlan; index: number }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] min-w-[240px]"
    >
      <Card
        className={cn(
          "relative h-full w-full bg-secondary/20 text-left transition-all duration-300 hover:shadow-lg overflow-hidden border-0",
          "shadow-md bg-gradient-to-b from-green-500/[0.03] to-transparent",
          !plan.popular && "hover:border-primary/30"
        )}
      >
        {plan.popular && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-green-600 hover:bg-green-700 shadow-md text-xs px-2 py-1">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}

        {/* Smaller image for 4-card layout */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2 space-y-2 p-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs bg-secondary/50 px-2 py-0.5">
              <Clock className="w-3 h-3 mr-1" />
              {plan.duration}
            </Badge>
          </div>

          <CardTitle className="text-base font-bold leading-tight text-green-700 line-clamp-2">
            {plan.title}
          </CardTitle>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              {plan.price}
            </span>
            <span className="text-xs text-muted-foreground line-through">
              {plan.originalPrice}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-2 pb-3 px-3">
          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-foreground">Highlights:</h4>
            <ul className="space-y-1">
              {Array.isArray(plan.highlights) &&
                plan.highlights.slice(0, 2).map((highlight: string, highlightIndex: number) => (
                  <motion.li
                    key={highlightIndex}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + highlightIndex * 0.05 }}
                    className="text-xs flex items-start"
                  >
                    <div className="flex h-3 w-3 items-center justify-center rounded-full mt-0.5 mr-1.5 flex-shrink-0 bg-green-500/10 text-green-600">
                      <Check className="h-1.5 w-1.5" />
                    </div>
                    <span className="text-foreground leading-tight">{highlight}</span>
                  </motion.li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-foreground">Includes:</h4>
            <ul className="space-y-1">
              {Array.isArray(plan.inclusions) &&
                plan.inclusions.slice(0, 2).map((inclusion: string, inclusionIndex: number) => (
                  <motion.li
                    key={inclusionIndex}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + inclusionIndex * 0.05 }}
                    className="text-xs flex items-start"
                  >
                    <div className="flex h-3 w-3 items-center justify-center rounded-full mt-0.5 mr-1.5 flex-shrink-0 bg-green-500/10 text-green-600">
                      <Check className="h-1.5 w-1.5" />
                    </div>
                    <span className="text-foreground leading-tight">{inclusion}</span>
                  </motion.li>
                ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="pt-0 mt-auto p-3">
          <Button className="w-full bg-green-600 hover:bg-green-700 hover:shadow-md hover:shadow-green-600/20 transition-all duration-300 group text-xs py-1.5">
            Book Package
          </Button>
        </CardFooter>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-green-500/[0.05] to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-green-500/30" />
      </Card>
    </motion.div>
  );
}

export default function TourPlans() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <section id="packages" className="relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-2 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
            >
              Choose the Perfect Plan for Your Araku Adventure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl pt-2 text-base text-muted-foreground"
            >
              Flexible and transparent pricing options — whether you&rsquo;re
              planning a quick getaway or a luxury experience.
            </motion.p>
          </div>

          {/* Updated responsive card layout - 4 cards per row on large screens */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {tourPlans.map((plan, index) => (
              <TourCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
