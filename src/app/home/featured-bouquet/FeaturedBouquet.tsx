import Link from "next/link";
import FeatCard from "./Card/Feat-card";
import { featuredBouquets } from "./data/featured-bouquets";

export default function FeaturedBouquet() {
    return (
        <div className="mt-12">
            {/* Container for heading */}
            <div className="mx-auto max-w-6xl px-4">
                <p className="text-4xl text-neutral-800">Featured Bouquet</p>
                <p className="text-neutral-600 mt-2">
                    Designed with simplicity and grace in mind.<br />
                    A perfect blend of color, texture, and timeless beauty.
                </p>

                {/* Scrollable section stays visually aligned */}
                <div className="mt-8 -mx-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex justify-between w-full space-x-4 px-4">
                        {featuredBouquets.map((card, index) => (
                            <FeatCard
                                key={index}
                                {...card}
                                animationDelay={index * 50}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/all-products"
                        className="inline-block border py-4 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </div>
    );
}
