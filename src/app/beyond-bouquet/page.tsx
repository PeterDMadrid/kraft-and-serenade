import Heading from "@/components/Heading";
import { beyondBouquetData } from "@/data/beyond-bouquet-data";
import ProductsList from "@/components/ProductList";


export default function BeyondBouquet() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Beyond Bouquet"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <ProductsList products={beyondBouquetData} />
            </div>
        </div>
    )
}
