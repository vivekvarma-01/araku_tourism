"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import clsx from "clsx"; // Using clsx as fallback for cn utility

type ImagesSliderProps = {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
};

export const  ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: ImagesSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = images.map(
        (src) =>
          new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
          })
      );

      try {
        const loaded = await Promise.all(loadPromises);
        setLoadedImages(loaded);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, images.length]);

  const slideVariants: Variants = {
    initial: {
      scale: 0.95,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.6 },
    },
    downExit: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.6 },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={clsx(
        "relative w-full h-full overflow-hidden flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && (
        <>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </AnimatePresence>

          {overlay && (
            <div
              className={clsx(
                "absolute inset-0 bg-black/50 z-20 pointer-events-none",
                overlayClassName
              )}
            />
          )}

          <div className="z-30 absolute inset-0 flex items-center justify-center p-4">
            {children}
          </div>
        </>
      )}
    </div>
  );
};


