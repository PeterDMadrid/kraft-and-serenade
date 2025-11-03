import Heading from "@/components/Heading";

import { customerCreationsData } from "@/data/customer-creation-data";
import CustomerCreationsCard from "./card/CustomerCreationsCard";

export default function CustomerCreation() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Customer Creations"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <div className="mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {customerCreationsData.map((card, index) => (
                            <CustomerCreationsCard
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
