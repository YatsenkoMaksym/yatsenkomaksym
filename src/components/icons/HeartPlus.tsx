"use client";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useRef } from "react";
interface HeartPlusProps {
  className?: string;
}
export default function HeartPlus({ className }: HeartPlusProps) {
  const [scope, animate] = useAnimate();
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
    }

    const beaping = async () => {
      // ! 1 - heart opacity - 1, scale - 1.1
      // ! 2 - Pulse opacity - 1 stroke dashoffset - full length 
      // ! 3 - pulse dashoffset 0 0
      // ! lambda - I need to somehow animate it to disappear
      // ! 4 - pulse opacity - 0
      // ! 5 - heart opacity - 0, scale - 1
    // ! 5.1 pulse dashoffset - full length
      await animate(
        // ! 1
        "#heart",
        { opacity: 1, scale: [1.1,1,1.1] },
        { duration: 1,delay:0 },
      );
      await animate(
        // ! 2
        "#pulse",
        {
            opacity:1,
            strokeDashoffset: pathRef.current?.getTotalLength(),
        },
        {duration:1, delay:0},
      );
      await animate(
        // ! 3
        "#pulse",
        {
            strokeDashoffset:0,
        },
        {duration:1, delay:0}
      )
      await animate(
        // ! 4
        "#pulse",
        {
            opacity:0,
        },
        {
            duration:0.4, delay:0
        }
      )
      await animate(
        // ! 5
        "#heart",
        {opacity:0, scale:1},
        {duration:1, delay:0}
      )
      animate(
        // ! 5.1
        "#pulse",
        {
            strokeDashoffset: pathRef.current?.getTotalLength()
        }
      )
      beaping();
    };
    beaping();
  }, [animate]);
  return (
    <div
      ref={scope}
      className={cn("relative flex items-center justify-center", className)}
    >
      <Heart id="heart" className="h-full w-full" />
      <svg
        id="pulse"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        <path
          ref={pathRef}
          id="pulse"
          stroke="currentColor"
          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
        />
      </svg>
    </div>
  );
}
