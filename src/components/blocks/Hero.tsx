import Section from "./Section";
import Image from "next/image";
import Yatsenko from "@/../public/YatsenkoMaksym.jpeg";
import { cn } from "@/lib/utils";
import ContactMe from "../ContactMe";
export default function Hero() {
  return (
    <Section
      id="main"
      className={cn(
        "accent duration-150", //! after
        "grid min-h-[40rem] place-items-stretch bg-background text-foreground",
      )}
    >
      <article className="flex h-full flex-col items-center justify-evenly gap-5 p-5 sm:flex-row">
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-normal">
          <h1 className="text-center text-2xl sm:text-start">
            Hello, I`m <span className="italic">Maksym</span>
          </h1>
          <p>It&apos;s my porfolio website</p>
          <p>
            And I just love some{" "}
            <span className="font-semibold italic text-center sm:text-start">Minimalistic designs</span>
          </p>
          <ContactMe />
        </div>
        <div className="w-1/2 md:w-1/4">
          <Image
            src={Yatsenko}
            className="z-10 h-full w-full rounded-xl"
            alt="Maksym's Photo"
          />
        </div>
      </article>
    </Section>
  );
}
