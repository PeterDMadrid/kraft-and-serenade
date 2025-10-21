'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

export default function Card({ image, title, description, href }: CardProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div ref={ref}>
            <Link href={href} className={`${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'} group block`}>
                <div className="flex flex-col text-white bg-neutral-900 rounded-tr-4xl rounded-bl-4xl p-4 w-[300px] sm:justify-self-end cursor-pointer transition-transform duration-300 ease-out group-hover:-translate-y-2">
                    <div className="relative bg-white w-full h-[300px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-300"
                        />
                    </div>

                    <div className="flex mt-4 justify-center font-bold text-lg">
                        {title}
                    </div>

                    <div className="flex mt-4 text-center">
                        {description}
                    </div>
                </div>
            </Link>
        </div>
    );
}
