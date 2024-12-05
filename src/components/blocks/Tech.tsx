import { AxeIcon, Laugh } from "lucide-react";
import Card from "../Card";
import HeartPlus from "../icons/HeartPlus";
import Sparklesv2 from "../icons/Sparklesv2";
import Section from "./Section";
import Bikev2 from "../icons/Bikev2";

export default function Tech(){
    return(
<Section
        id="technologies"
        className="max-h-[30rem] place-items-center gap-5 sm:grid sm:grid-cols-2"
      >
        <h2 className="col-span-2 text-2xl text-center">What technologies do I like?</h2>
        <Card title="Next.js" images={<Bikev2 className="h-1/2 w-1/2" />}>
          I like how fast it is
        </Card>
        <Card
          title="Tailwind"
          images={<HeartPlus className="h-1/2 w-1/2" />}
        >
         My heart is beeping
        </Card>
        <Card
          images={<Sparklesv2 className="h-1/2 w-1/2" />}
          title="Motion"
          
        >
       It&apos; pretty <Laugh className="size-4 mr-2 inline"/> 
        </Card>
        <Card title="..." images={<AxeIcon className="h-1/2 w-1/2 animate-slowSpin" />}>
          there is more...
        </Card>
      </Section>
    )
}