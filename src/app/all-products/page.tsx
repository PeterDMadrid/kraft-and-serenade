import Heading from "@/components/Heading";
import AllProductCard from "./card/AllProductCard";
import { customerCreationsData } from "@/data/customer-creation-data";
import { signatureBouquetData } from "@/data/signature-bouquet-data";
import { beyondBouquetData } from "@/data/beyond-bouquet-data";

export default function AllProducts() {

    const allProducts = [
        ...signatureBouquetData,
        ...customerCreationsData,
        ...beyondBouquetData
    ]

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="All Products"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <div className="mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {allProducts.map((card, index) => (
                            <AllProductCard
                                key={index}
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                prevPrice={card.prevPrice}
                                href={card.href}
                                alt={card.alt}
                                size={card.size}
                                category={card.category}
                                animationDelay={(index % 4) * 50}
                            />
                        ))}
                        {/* {signatureBouquetData.map((card, index) => (
                            <SignatureBouquetCard
                                key={index}
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                href={card.href}
                                animationDelay={index * 50}
                            />
                        ))} */}
                        {/* {beyondBOuquet.map((card, index) => (
                            <BeyondBouquetCard
                                key={index}
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                href={card.href}
                                animationDelay={index * 50}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
