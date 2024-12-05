import { cn } from "@/lib/utils";
import { Bike, Minus } from "lucide-react";
import { motion } from "framer-motion";
interface BikePlusProps {
  className: string;
}
export default function BikePlus({ className }: BikePlusProps) {
  return (
    <div className={cn("relative", className)}>
      <Bike className="h-full w-full bg-red-500"></Bike>
      {[].map(item=>(
        <motion.div key={item}
          animate={{

          }}
          transition={{repeat:Infinity, delay:1.1, duration:[1,2]}}
        >
          <Minus/>
        </motion.div>
      ))}  
    
      <motion.div
        animate={{
          opacity: [0, 1, 0, 0],
          left: [0, -15, -15, 0],
        }}
        transition={{ repeat: Infinity, delay: 1, duration: 1 }}
        className="absolute top-[1.9rem]"
      >
        <Minus />
      </motion.div>
      <motion.div
      animate={{
        opacity:[0,0.5,1,0],
        left:[20,10,10,10],
      }}
        transition={{ repeat: Infinity, delay: 0.9, duration: 1 }}
        className="absolute top-[1.1rem]"
      >
        <Minus />
      </motion.div>
      <motion.div
      animate={{
          opacity: [0, 1, 0, 0],
          left: [0, -15, -15, 0],
        }}

        transition={{ repeat: Infinity, delay: 1.3, duration: 1 }}
        className="absolute top-[2.2rem]"
      >
        <Minus />
      </motion.div>
    </div>
  );
}
