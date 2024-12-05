"use client";
import { cn } from "@/lib/utils";
import { useAnimate, motion } from "framer-motion";
import { Gem, Sparkle } from "lucide-react";
import React, { useEffect } from "react";
interface Sparklesv2Props {
  className: string;
  number?: number;
}
export default function Sparklesv2({ className, number }: Sparklesv2Props) {
  const items: number[] = [];

  if (number) {
    for (let i = 1; i < number; i++) {
      items.push(i);
    }
  }
  else {
    for (let i=1; i<4; i++){
      items.push(i)
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.6 }}
      className={cn("relative", className)}
    >
      {items.map((key) => (
        <SparkleElement id={key} key={key} />
      ))}
      <Gem className="stroke-1 z-10 h-full w-full" />
    </motion.div>
  );
}
interface SparkleElementProps {
  id: number;
}
const SparkleElement = ({ id }: SparkleElementProps) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const blush = async () => {
      await animate(
        scope.current,
        {
          opacity: 0,
          left: Math.random() * 100 - 12,
          top: Math.random() * 100 - 12,
        },
        { duration: 0.3, delay: Math.random() * 1.1, ease: "easeInOut" },
      );
      await animate(
        scope.current,
        { opacity: 1 },
        { duration: 0.3, delay: 0, ease: "easeInOut" },
      );
      await animate(
        scope.current,
        { opacity: 0 },
        { duration: 0.1, delay: 0.1, ease: "easeInOut" },
      );
      blush();
    };
    blush();
  }, [id, animate, scope]);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      ref={scope}
      key={id}
      className="absolute h-full w-full opacity-0"
    >
      <Sparkle className="z-10 animate-slowSpin" />
    </motion.div>
  );
};
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const randomAnimation = async () => {
//       await animate(
//         `.child-${id}`,
//         {
//           opacity: 0,
//           width: '1rem',
//           height: '2rem',
//           top: Math.random() * 55,
//           left: Math.random() * 55,
//         },
//         { duration: Math.random() * 3, delay: Math.random() }
//       );
//       await animate(
//         `.child-${id}`,
//         { opacity: 1, width: '2rem', height: '2rem' },
//         { duration: Math.random(), delay: Math.random() }
//       );
//       await animate(
//         `.child-${id}`,
//         { opacity: 0 },
//         { duration: 1, delay: 0.5 }
//       );
//       randomAnimation();
//     };

//     randomAnimation();
//   }, [id, animate]);

//   return null;
// };
