"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    console.log('Starting animation'); // Debugging log
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    ).then(() => {
      console.log('Animation complete'); // Debugging log
    }).catch((error) => {
      console.error('Animation error', error); // Error handling
    });
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 3 ? 'text-purple': 'dark:text-white text-black '} opacity-0`}
              style={{ display: 'inline-block' }} // Ensure span is displayed inline-block for animation
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
