'use client';

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

interface ProductProps {
    image: string;
    hoverImage: string;
    title: string;
    price: string;
    prevPrice: string;
    href: string;
    alt: string;
    size: string;
    animationDelay?: number;
}

export default function AllProductCard({ image, hoverImage, title, price, prevPrice, href, alt, size, animationDelay = 0 }: ProductProps) {
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
                <div className="flex-shrink-0 mb-4">
                    <div className="relative h-80 overflow-hidden">
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            className={`object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <Image
                            src={hoverImage}
                            alt={alt}
                            fill
                            className={`object-cover transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-neutral-900 mt-2">
                            {title} <span className="text-neutral-400">|</span> {size}
                        </h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-sm text-neutral-400 line-through" aria-label="Original price">
                                {prevPrice}
                            </span>
                            <span className="text-sm font-semibold text-neutral-900" aria-label="Sale price">
                                {price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}