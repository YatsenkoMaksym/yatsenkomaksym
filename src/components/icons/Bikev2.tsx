"use client"
import { cn } from "@/lib/utils";
import { Bike, Minus } from "lucide-react";
import {motion, useAnimate} from "framer-motion"
import { useEffect } from "react";
interface Bikev2Props{
    className?:string
}
export default function Bikev2({className}:Bikev2Props){
      return (
    <div className={cn("relative", className)}>
      <Bike className="h-full w-full"></Bike>
     {[1,2,3,4].map(id=>(
        <MinusItem key={id} id={id}/>
     ))}
    </div>
  );
}
interface MinusItemProps{
    id:number,
    size?:number,
}
const MinusItem = ({id,size}:MinusItemProps)=>{
    if (!size){
        size = 2
    }
    const [scope, animate] = useAnimate()
    useEffect(()=>{
        const windEffect=async()=>{
            if(Math.random()>0.4){
                //! LOWER LINES
            await animate(scope.current,{opacity:0, top:size*(Math.random()*50+70)/5,left:0 ,scale:size},{duration:1,delay:Math.random()})
            await animate(scope.current,{opacity:1,left:-(Math.random()*10+10)},{duration:0.4})
            await animate(scope.current,{opacity:0},{duration:0.1})
            }
            else{
                //! UPPER LINES
                await animate(scope.current,{opacity:0, top:size*(Math.random()*50+30)/5,left:40 ,scale:size},{duration:1,delay:Math.random()})
                await animate(scope.current,{opacity:1,left:-Math.random()*10},{duration:0.4})
                await animate(scope.current,{opacity:0},{duration:0.1})
            }
            windEffect()
        }
        windEffect()
    },[scope, animate, id,size])
    return(
        <motion.div
        key={id}
        ref={scope}
        className="absolute opacity-0"
        >
<Minus/>
        </motion.div>
    )
}