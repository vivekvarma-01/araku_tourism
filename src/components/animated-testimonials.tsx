"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const isActive = (index: number) => index === active;

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 2000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full bg-white dark:bg-zinc-950 transition-colors">
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 bg-white dark:bg-zinc-950 transition-colors">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image block */}
        <div>
          <div className="relative h-60 sm:h-[24rem] md:h-[32rem] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-3xl overflow-hidden border-4 border-green-200 dark:border-zinc-700 shadow-xl dark:shadow-zinc-950 transition-all duration-300 bg-white dark:bg-zinc-900">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Text & Controls */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-400 leading-tight drop-shadow">
              {testimonials[active].name}
            </h3>
            <motion.p className="mt-8 text-lg md:text-2xl text-black dark:text-zinc-100">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
