"use client";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const liVariants = {
    hover: {
      scale: 1.1,
      rotate: "-12deg",
    },
    tap: {
      scale: 0.9,
      rotate: "6deg",
    },
    hoverIcon: {
      rotate: "90deg",
    },
    tapIcon: {
      rotate: "30deg",
    },
  };

  return (
    <nav className="outliner sticky top-5 z-50 w-1/2 min-w-fit place-items-center place-self-center overflow-hidden rounded-2xl bg-background px-8 py-5 opacity-80 sm:w-1/3">
      <motion.ul className="flex flex-row gap-16">
        <motion.li variants={liVariants} whileHover="hover" whileTap="tap">
          <Link href="#main">Main</Link>
        </motion.li>
        <motion.li variants={liVariants} whileHover="hover" whileTap="tap">
          <Link href="#about">About</Link>
        </motion.li>
        <motion.li
          className="grid h-6 w-6 place-items-center"
          variants={liVariants}
          whileHover="hoverIcon"
          whileTap="tapIcon"
        >
          {theme === "light" && (
            <button
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Sun className="size-4 bg-foreground" />
            </button>
          )}
          {theme === "dark" && (
            <button
              onClick={() => {
                setTheme("light");
              }}
            >
              <Moon className="size-4 bg-foreground" />
            </button>
          )}
        </motion.li>
      </motion.ul>
    </nav>
  );
}
