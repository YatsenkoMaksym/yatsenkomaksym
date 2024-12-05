"use client";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
export default function ContactMe() {
  const variantes = {
    initial: {
      rotate:"0deg"
    },
    hover: {
      rotate:["0deg","30deg","-30deg","30deg","0deg"],
      scale:[1,1.1,1,1.1,1]
    },
  };
  return (
    <motion.button
    initial="initial"
    whileHover="hover"
      className={cn(
        "rounded-2xl border-2 border-foreground", //! borders
        "mt-5 p-5", // ! positioning
        "flex gap-2", // !display
        "whitespace-nowrap bg-background text-foreground", // ! colors/text
      )}
    >
        Contact me 
      <motion.div variants={variantes}>
        <Phone  />
      </motion.div>
    </motion.button>
  );
}
