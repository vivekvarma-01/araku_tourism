import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { TourPlan } from "./data/tourPlans";

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
        isActive && "shadow-xl scale-105", // No green ring!
        isInactive && "blur-[2.5px] brightness-90 pointer-events-none"
      )}
      style={{
        filter: isInactive ? "blur(2.5px) brightness(90%)" : "none",
        transition: "filter 0.35s, transform 0.35s, box-shadow 0.25s"
      }}
    >
      <Card className={cn(
        "relative h-full w-full bg-secondary/20 text-left hover:shadow-lg overflow-hidden border-0",
        "shadow-md bg-gradient-to-b from-green-500/[0.03] to-transparent"
      )}>
        <div className="relative h-32 overflow-hidden">
          <Image
            src={plan.image || "/placeholder.svg"}
            alt={plan.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2 space-y-2 p-3">
          <CardTitle className="text-base font-bold leading-tight text-green-700 line-clamp-2">
            {plan.title}
          </CardTitle>
          <div className="flex space-x-2">
            <Badge variant="secondary" className="text-xs bg-secondary/50 px-2 py-0.5">
              {plan.duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 pb-3 px-3">
          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-foreground">Prices:</h4>
            <ul className="space-y-1 text-xs">
              <li>🚙 4-Seater: {plan.price["4-Seater"]}</li>
              <li>🚐 8-Seater: {plan.price["8-Seater"]}</li>
            </ul>
          </div>
          {plan.hasSunrise && plan.sunriseOptions &&
            <div>
              <h4 className="font-semibold mb-1.5 text-xs text-foreground">Sunrise Options (add-on):</h4>
              <ul className="space-y-1 text-xs">
                {plan.sunriseOptions.map((opt, idx) => (
                  <li key={idx}>☀ {opt.name} – {opt.price}</li>
                ))}
              </ul>
            </div>
          }
          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-foreground">Itinerary:</h4>
            <ul className="space-y-1 text-xs">
              {plan.itinerary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1.5 text-xs text-foreground">Includes:</h4>
            <ul className="space-y-1 text-xs">
              {plan.inclusions.map((inc, idx) => (
                <li key={idx}>✅ {inc}</li>
              ))}
            </ul>
          </div>
          {plan.notes && plan.notes.length > 0 && (
            <div>
              {plan.notes.map((note, idx) => (
                <p key={idx} className="text-xs text-muted-foreground">{note}</p>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0 mt-auto p-3">
          <Button className="w-full bg-green-600 hover:bg-green-700 hover:shadow-md hover:shadow-green-600/20 transition-all duration-300 text-xs py-1.5">
            Book Package
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
