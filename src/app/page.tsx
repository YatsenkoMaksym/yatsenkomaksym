import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cardsitems } from "@/lib/utils";
import Hero from "@/components/blocks/Hero";
import Tech from "@/components/blocks/Tech";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-items-evenly overflow-x-hidden p-8 py-16 font-[family-name:var(--font-geist-sans)]">
      <Hero /> {/*The problem is in the Hero section*/}
      <InfiniteMovingCards
        className="my-10"
        items={cardsitems}
        direction="right"
        speed="slow"
      />
      <Tech />
    </main>
  );
}
