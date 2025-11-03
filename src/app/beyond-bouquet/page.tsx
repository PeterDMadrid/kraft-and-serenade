import Heading from "@/components/Heading";
import { beyondBouquetData } from "@/data/beyond-bouquet-data";
import BeyondCard from "./card/BeyondCard";


export default function BeyondBouquet() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Beyond Bouquet"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <div className="mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {beyondBouquetData.map((card, index) => (
                            <BeyondCard
                                key={index}
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                prevPrice={card.prevPrice}
                                href={card.href}
                                alt={card.alt}
                                size={card.size}
                                animationDelay={(index % 4) * 50}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
