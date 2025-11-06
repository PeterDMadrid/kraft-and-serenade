import Heading from "@/components/Heading";

import { customerCreationsData } from "@/data/customer-creation-data";
import CustomerCreationsCard from "./card/CustomerCreationsCard";
import ProductsList from "@/components/ProductList";

export default function CustomerCreation() {

    return (
        <div className="mt-28">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="Customer Creations"
                    description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
                />
                <ProductsList products={customerCreationsData} />
            </div>
        </div>
    )
}
