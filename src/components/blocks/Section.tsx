import { cn } from "@/lib/utils";

interface SectionProps{
    children : React.ReactNode,
    className?: string,
    id: string,
}
export default function Section({id ,children, className}:SectionProps){
    return (
        <section id={id} className={cn("w-full md:w-5/6 rounded-2xl p-5 min-h-fit", className)}>
            {children}
        </section>
    )
}