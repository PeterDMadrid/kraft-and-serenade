'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SignatureCard from "./Signature-card";

interface Card {
    image: string;
    hoverImage: string;
    title: string;
    price: string;
    href: string;
}

interface SignatureCardsNavigationProps {
    cards: Card[];
}

export default function SignatureCardsNavigation({ cards }: SignatureCardsNavigationProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Show 4 cards at a time, move one at a time
    const maxIndex = Math.max(0, cards.length - 4);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out space-x-4"
                    style={{ 
                        transform: `translateX(calc(-${currentIndex * (100 / 4)}% - ${currentIndex * 1}rem))` 
                    }}
                >
                    {cards.map((card, index) => (
                        <div key={index} className="flex-shrink-0 w-[calc(25%-0.75rem)]">
                            <SignatureCard
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                href={card.href}
                                animationDelay={index * 50}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls - centered below cards */}
            {cards.length > 4 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-800" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex items-center space-x-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                    currentIndex === index 
                                        ? 'bg-neutral-800 w-8' 
                                        : 'bg-neutral-300 hover:bg-neutral-400 w-2'
                                }`}
                                aria-label={`Go to position ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5 text-neutral-800" />
                    </button>
                </div>
            )}
        </>
    );
}
