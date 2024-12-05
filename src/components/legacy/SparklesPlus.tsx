"use client";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import {motion} from "framer-motion"
interface SparklesPlusProps {
  className: string;
}

export default function SparklesPlus({ className }: SparklesPlusProps) {
  const uVariance = {
    initial: () => ({
      opacity: 0,
      top: ``,
      left: ``,
    }),
    animate: (index: number) => ({
      opacity: 1,
      rotate: `${30 * index}deg`,
      transition: {
        duration: `${index}`,
        delay: -0.1,
        ease: "easeIn",
        fill: "forwards",
      },
    }),
  };
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      className={cn("relative", className)}
    >
      <motion.div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <motion.div
            key={index}
            custom={index}
            variants={uVariance}
            className="absolute h-full w-full fill-mode-forwards"
          >
            <Sparkle />
          </motion.div>
        ))}
      </motion.div>
      <Sparkle className="h-full w-full animate-slowSpin" />

    </motion.div>
  );
}
