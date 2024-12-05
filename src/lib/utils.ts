import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cardsitems: {
  quote: string;
  name: string;
  title: string;
}[] = [
  { quote: "Learning", name: "Lifetime student", title: "Learning new stuff is tough, but exciting" },
  {
    quote: "Next.js",
    name: "I love it so much",
    title: "The confortability of next.js is just on the next level",
  },
  {
    quote: "Design",
    name: "Tailwind and Motion",
    title:
      "I love creating beautiful designs, both from scratch and with the help of component libraries",
  },
];
