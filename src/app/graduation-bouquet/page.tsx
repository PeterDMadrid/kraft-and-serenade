import Heading from "@/components/Heading";
import { graduationBouquetData } from "@/data/graduation-bouquet-data";
import ProductsList from "@/components/ProductList";

export default function GraduationBouquet() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Graduation Bouquet"
                    description={`Celebrate achievements and new beginnings with thoughtfully crafted graduation bouquets.
      Featuring vibrant blooms, graduation bears, and memorable details to honor every milestone.`}
                />
                <ProductsList products={graduationBouquetData} />
            </div>
        </div>
    )
}
