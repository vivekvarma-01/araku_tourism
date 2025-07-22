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
function TourCard({ plan, index }: { plan: TourPlan ; index: number }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="flex w-full sm:w-[48%] lg:w-[32%] 2xl:w-[30%] min-w-[300px] max-w-[400px]"
    >
      <Card
        className={cn(
          "relative h-full w-full bg-secondary/20 text-left transition-all duration-300 hover:shadow-lg overflow-hidden border-0",
          "shadow-md bg-gradient-to-b from-green-500/[0.03] to-transparent",
          !plan.popular && "hover:border-primary/30"
        )}
      >
        {plan.popular && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-green-600 hover:bg-green-700 shadow-md">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>
        )}

        <div className="relative h-48 overflow-hidden">
          <Image
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-4 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs bg-secondary/50">
              <Clock className="w-3 h-3 mr-1" />
              {plan.duration}
            </Badge>
          </div>

          <CardTitle className="text-xl font-bold leading-tight text-green-700">
            {plan.title}
          </CardTitle>

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              {plan.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {plan.originalPrice}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pb-6">
          <div>
            <h4 className="font-semibold mb-3 text-sm text-foreground">Highlights:</h4>
            <ul className="space-y-2">
              {Array.isArray(plan.highlights) &&
                plan.highlights.slice(0, 3).map((highlight: string, highlightIndex: number) => (
                  <motion.li
                    key={highlightIndex}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + highlightIndex * 0.05 }}
                    className="text-sm flex items-start"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-full mt-0.5 mr-2 flex-shrink-0 bg-green-500/10 text-green-600">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </motion.li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-foreground">Includes:</h4>
            <ul className="space-y-2">
              {Array.isArray(plan.inclusions) &&
                plan.inclusions.slice(0, 3).map((inclusion: string, inclusionIndex: number) => (
                  <motion.li
                    key={inclusionIndex}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + inclusionIndex * 0.05 }}
                    className="text-sm flex items-start"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-full mt-0.5 mr-2 flex-shrink-0 bg-green-500/10 text-green-600">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-foreground">{inclusion}</span>
                  </motion.li>
                ))}
            </ul>
          </div>
        </CardContent>


        <CardFooter className="pt-0 mt-auto">
          <Button className="w-full bg-green-600 hover:bg-green-700 hover:shadow-md hover:shadow-green-600/20 transition-all duration-300 group">
            Book This Package
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
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center space-y-2 mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
            >
              Choose the Perfect Plan for Your Araku Adventure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-md pt-2 text-lg text-muted-foreground"
            >
              Flexible and transparent pricing options — whether you're
              planning a quick getaway or a luxury experience.
            </motion.p>
          </div>

          {/* Responsive card layout */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 px-2 sm:px-4">
            {tourPlans.map((plan, index) => (
              <TourCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
