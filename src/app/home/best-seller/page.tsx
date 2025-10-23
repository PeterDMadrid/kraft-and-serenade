'use client';

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function BestSeller() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className={`${poppins.className} mt-12 p-8 text-white text-xs sm:text-sm w-full bg-neutral-900`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
                <div className="relative min-h-110 overflow-hidden">
                    <Image
                        src="/landing-page/best-seller.avif"
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
                        This Month's Best Seller
                    </h2>
                    <p
                        className={`text-lg text-neutral-300 leading-relaxed ${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'}`}
                        style={{ animationDelay: isVisible ? '150ms' : '0ms' }}
                    >
                        Our Angel's Bouquet has been stealing hearts all month! Loved for its soft tones and timeless charm — no wonder it's everyone's favorite pick.
                    </p>
                    <a
                        className={`border border-white hover:bg-white hover:text-black transition-colors cursor-pointer py-6 px-12 text-[1.1rem] w-fit ${isVisible ? 'slideInUp' : 'opacity-0 translate-y-[30px]'}`}
                        style={{ animationDelay: isVisible ? '300ms' : '0ms' }}
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}