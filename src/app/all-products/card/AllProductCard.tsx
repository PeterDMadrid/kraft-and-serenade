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
    category: string;
    animationDelay?: number;
}

export default function AllProductCard({ 
    image, 
    hoverImage, 
    title, 
    price, 
    prevPrice, 
    href, 
    alt, 
    size, 
    category,
    animationDelay = 0 
}: ProductProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div ref={ref}>
            <Link
                href={href}
                className={`group block transition-all ${
                    isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'
                }`}
                style={{
                    animationDelay: isVisible ? `${animationDelay}ms` : '0ms'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <article className="flex-shrink-0">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden rounded-lg mb-3">
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`object-cover transition-opacity duration-300 ${
                                isHovered ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <Image
                            src={hoverImage}
                            alt={`${alt} - alternate view`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`object-cover transition-all duration-300 ${
                                isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                            }`}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-1">
                        {/* Category */}
                        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                            {category}
                        </p>

                        {/* Title & Size */}
                        <h3 className="text-sm font-medium text-neutral-900 leading-tight">
                            {title} <span className="text-neutral-400 font-normal">|</span> {size}
                        </h3>

                        {/* Pricing */}
                        <div className="flex items-baseline gap-2 pt-0.5">
                            <span className="text-sm text-neutral-400 line-through" aria-label="Original price">
                                {prevPrice}
                            </span>
                            <span className="text-sm font-semibold" aria-label="Sale price">
                                {price}
                            </span>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}
