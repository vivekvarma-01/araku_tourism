"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";


export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
  return (
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
  );
};

  return (
  <div className={cn("font-bold", className)}>
    <div className="mt-4">
      <div className={cn("text-white leading-snug tracking-wide", className)}>
        {renderWords()}
      </div>
    </div>
  </div>
 );
};
