"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface ProductImagesProps {
  image: string;
  hoverImage: string;
  alt: string;
}

export default function ProductImages({ image, hoverImage, alt }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update active dot
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          <div className="relative aspect-square w-full flex-shrink-0 snap-center overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-square w-full flex-shrink-0 snap-center overflow-hidden rounded-lg">
            <Image
              src={hoverImage}
              alt={`${alt} - alternate view`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === 0
                ? "w-6 bg-neutral-900"
                : "w-2 bg-neutral-300"
            }`}
          />
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === 1
                ? "w-6 bg-neutral-900"
                : "w-2 bg-neutral-300"
            }`}
          />
        </div>
      </div>

      {/* Desktop: Stacked */}
      <div className="hidden md:block space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={hoverImage}
            alt={`${alt} - alternate view`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
