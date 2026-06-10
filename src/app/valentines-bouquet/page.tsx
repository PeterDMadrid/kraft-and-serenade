import Heading from "@/components/Heading";
import { valentinesBouquetSpecialData } from "@/data/valentines-special-bouquet-data";
import ProductsList from "@/components/ProductList";

export default function ValentinesBouquet() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Valentines Bouquet"
                    description={`Thoughtfully crafted to express love, admiration, and heartfelt affection.
      Featuring romantic blooms and charming details, each bouquet is designed to make every Valentine's moment unforgettable.`}
                />
                <ProductsList products={valentinesBouquetSpecialData} />
            </div>
        </div>
    )
}
