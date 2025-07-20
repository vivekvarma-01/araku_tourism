"use client";
import { tourPlans } from "./data/tourPlans";


import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Star, Heart } from "lucide-react";
import React from "react";
    

export default function TourPlans() {
  return (
    <section id="packages" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Perfect Package</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From quick day trips to extended adventures, we have the perfect Araku experience for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden hover:shadow-lg transition-shadow ${plan.popular ? "ring-2 ring-green-500" : ""}`}
              >
                {plan.popular && <Badge className="absolute top-4 right-4 z-10 bg-green-600">Most Popular</Badge>}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {plan.duration}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {plan.rating} ({plan.reviews})
                    </div>
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                    <ul className="space-y-1">
                      {plan.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {plan.inclusions.slice(0, 3).map((inclusion, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Book This Package
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}