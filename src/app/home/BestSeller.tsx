'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

interface props {
    image: string;
    title: string;
    description: string;
    href: string;
}

export default function BestSeller({ image, title, description, href}: props) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className={`mt-12 p-8 text-white text-xs sm:text-sm w-full bg-neutral-900`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
                <div className="relative min-h-110 overflow-hidden">
                    <Image
                        src={image}
                        fill
                        alt="Best seller"
                        className="object-cover ambient"
                    />
                </div>
                <div ref={ref} className="flex flex-col justify-between sm:justify-normal gap-6 p-6 min-h-80">
                    <h2
                        className={`text-4xl font-bold ${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'}`}
                        style={{ animationDelay: isVisible ? '0ms' : '0ms' }}
                    >
                        {title}
                    </h2>
                    <p
                        className={`text-lg text-neutral-300 leading-relaxed ${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'}`}
                        style={{ animationDelay: isVisible ? '150ms' : '0ms' }}
                    >
                        {description}
                    </p>
                    <Link
                        href={href}
                        className={`border border-white hover:bg-white hover:text-black transition-colors cursor-pointer py-6 px-12 text-[1.1rem] w-fit ${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'}`}
                        style={{ animationDelay: isVisible ? '300ms' : '0ms' }}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
