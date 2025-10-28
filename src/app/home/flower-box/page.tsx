import FlowerBoxCard from "./Card/Flower-box-card";
import { flowerBoxes } from "./data/flower-boxes";

export default function FlowerBox() {
    return (
        <div className="mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-4xl text-neutral-800">More than Bouquet</p>
                <p className="text-neutral-600 mt-2">
                    Designed with simplicity and grace in mind.<br />
                    A perfect blend of color, texture, and timeless beauty.
                </p>
                <div className="mt-8 -mx-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex justify-between min-w-full space-x-4 px-4">
                        {flowerBoxes.map((card, index) => (
                            <FlowerBoxCard
                                key={index}
                                {...card}
                                animationDelay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}