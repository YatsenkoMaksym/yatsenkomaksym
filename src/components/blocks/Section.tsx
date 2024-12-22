import { cn } from "@/lib/utils";


interface SectionProps {
    children: React.ReactNode,
    className?: string,
    id: string,
}
export default function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id} className={` grid place-content-center w-full rounded-2xl p-5 min-h-fit `}>
            <article className={cn(``, className)}>
                {children}
            </article>
        </section>
    )
}