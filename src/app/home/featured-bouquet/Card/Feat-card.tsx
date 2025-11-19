'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FeatCardProps {
    image: string;
    hoverImage: string;
    title: string;
    price: string;
    href: string;
    animationDelay?: number;
}

export default function FeatCard({ image, hoverImage, title, price, href, animationDelay = 0 }: FeatCardProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div ref={ref}>
            <Link
                href={href}
                className={`${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'} group block`}
                style={{
                    animationDelay: isVisible ? `${animationDelay}ms` : '0ms'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex-shrink-0 w-66">
                    <div className="relative rounded-[46%_46%_0%_0%_/_60%_60%_10%_10%] w-full h-80 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className={`object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <Image
                            src={hoverImage}
                            alt={`${title} hover`}
                            fill
                            className={`object-cover transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
                        <p className="text-xl text-neutral-600 mt-1">{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
