import Heading from "@/components/Heading";

import SignatureBouquetCard from "./card/SignatureBouquetCard";
import { signatureBouquetData } from "@/data/signature-bouquet-data";
import ProductsList from "@/components/ProductList";

export default function SignatureBouquet() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Signature Bouquet"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <ProductsList products={signatureBouquetData} />
            </div>
        </div>
    )
}
