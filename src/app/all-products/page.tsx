import Heading from "@/components/Heading";
import { customerCreationsData } from "@/data/customer-creation-data";
import { signatureBouquetData } from "@/data/signature-bouquet-data";
import { beyondBouquetData } from "@/data/beyond-bouquet-data";
import ProductsList from "@/components/ProductList";

export default function AllProducts() {
  const allProducts = [
    ...signatureBouquetData,
    ...customerCreationsData,
    ...beyondBouquetData,
  ];

  return (
    <div className="mt-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          title="All Products"
          description={`Designed with simplicity and grace in mind. 
            A perfect blend of color, texture, and timeless beauty.`}
        />
        <ProductsList products={allProducts} />
      </div>
    </div>
  );
}
