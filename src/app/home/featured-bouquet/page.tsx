import { Poppins } from "next/font/google"
import FeatCard from "./Card/Feat-card";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function FeaturedBouquet() {
    return (
        <div className={`mt-12`}>
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
                        <FeatCard 
                            image="/featured-bouquet/angels.avif"
                            hoverImage="/featured-bouquet/angels-hovered.avif"
                            title="Angel's"
                            price="₱1,299"
                            href="/"
                            animationDelay={0}
                        />
                        <FeatCard 
                            image="/featured-bouquet/hussins.avif"
                            hoverImage="/featured-bouquet/hussins-hovered.avif"
                            title="Hussins"
                            price="₱1,299"
                            href="/"
                            animationDelay={50}
                        />
                        <FeatCard 
                            image="/featured-bouquet/veras.avif"
                            hoverImage="/featured-bouquet/veras-hovered.avif"
                            title="Vera's"
                            price="₱1,299"
                            href="/"
                            animationDelay={100}
                        />
                        <FeatCard 
                            image="/featured-bouquet/lilys.avif"
                            hoverImage="/featured-bouquet/lilys-hovered.avif"
                            title="Lily's"
                            price="₱1,299"
                            href="/"
                            animationDelay={150}
                        />   
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="border py-4 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}