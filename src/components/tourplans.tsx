"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TourCard } from "../components/TourCard";
import { tourPlans } from "./data/tourPlans";
import { WhatsAppFloatButton } from "../components/WhatsAppFloatButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"; // adjust path as needed

export default function TourPlans() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
              Choose Your Perfect Araku Tour
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl pt-2 text-base text-muted-foreground"
            >
              Flexible pricing for 4-seater & 8-seater cabs. Add optional sunrise experiences for the best of Araku!
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
          {/* INFO BOX BELOW THE PACKAGES */}
          <div className="flex justify-center mt-8">
            <Card className="relative max-w-[330px] w-full bg-secondary/20 text-left shadow-md bg-gradient-to-b from-green-500/[0.03] to-transparent border-0 rounded-xl">
              <CardHeader className="pb-2 p-4">
                <CardTitle className="text-base font-bold leading-tight text-green-700">
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pb-3 px-4">
                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  <li>
                    <strong>Stays can be booked on request</strong>
                  </li>
                  <li>
                    <strong>Meals are not included</strong>
                  </li>
                  <li>
                    <strong>Custom tour plans can be done on request</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* WhatsApp Floating Button */}
      <WhatsAppFloatButton />
    </div>
  );
}



