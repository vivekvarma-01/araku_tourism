"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope}>
        {words.split("\n").map((line, lineIndex) => (
          <div key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}-${lineIndex}`}
                className="text-white opacity-0 inline-block"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
