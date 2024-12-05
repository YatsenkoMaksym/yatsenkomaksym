import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  className?: string;
  title?: string;
  children?: string | React.ReactNode;
  images?: React.ReactNode;
}

export default function Card({
  images,
  className,
  children,
  title,
}: CardProps) {
  return (
    <article
      className={cn(
        "bg-background outliner",
        "my-5 sm:my-2",
        "min-h-fit max-h-[20rem] w-full min-w-[16rem] md:w-1/4",
        "flex aspect-square flex-col items-center rounded-2xl p-2 md:w-1/5",
        className,
      )}
    >
      <div className="grid w-4/5 flex-shrink-0 flex-grow-[2] place-items-center">
        {images}
      </div>
      <div className="flex-grow w-4/5">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="w-[15ch]">{children}</p>
      </div>
    </article>
  );
}
