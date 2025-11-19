
import AddonCard from "./Card/AddonCard";
import { addonsData } from "./data/addons";

export default function Addons() {
    return (
        <div className="mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-4xl text-neutral-800">Addons</p>
                <p className="text-neutral-600 mt-2">
                    Thoughtfully crafted finishing touches<br />
                    our add-ons bring a refined charm that elevates every bouquet.
                </p>
                <div className="mt-8 -mx-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex justify-between min-w-full space-x-4 px-4">
                        {addonsData.map((card, index) => (
                            <AddonCard
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