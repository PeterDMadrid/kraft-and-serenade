"use client";

import { useState } from "react";
import Filter, { FilterState } from "@/components/Filter";
import AllProductCard from "@/app/all-products/card/AllProductCard";

interface Product {
  image: string;
  hoverImage: string;
  title: string;
  price: string;
  prevPrice: string;
  href: string;
  alt: string;
  size: string;
  category: string;
}

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    size: "",
    priceRange: "",
  });

  // Filter function
  const filteredProducts = products.filter((product) => {
    // Search filter (checks title and alt)
    const searchLower = filters.search.toLowerCase();
    const matchesSearch =
      !filters.search ||
      product.title.toLowerCase().includes(searchLower) ||
      product.alt.toLowerCase().includes(searchLower);

    // Size filter
    const matchesSize = !filters.size || product.size === filters.size;

    // Price filter
    let matchesPrice = true;
    if (filters.priceRange) {
      const priceValue = parseInt(product.price.replace(/[₱,]/g, ""));
      const [min, max] = filters.priceRange.split("-").map(Number);
      matchesPrice = priceValue >= min && priceValue <= max;
    }

    return matchesSearch && matchesSize && matchesPrice;
  });

  return (
    <>
      <Filter onFilterChange={setFilters} />

      {/* Results count */}
      <div className="mt-6 mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      <div className="mt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {filteredProducts.map((card, index) => (
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
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your filters.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
