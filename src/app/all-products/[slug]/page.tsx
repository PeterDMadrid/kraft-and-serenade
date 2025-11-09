import { notFound } from "next/navigation";
import Link from "next/link";
import { customerCreationsData } from "@/data/customer-creation-data";
import { signatureBouquetData } from "@/data/signature-bouquet-data";
import { beyondBouquetData } from "@/data/beyond-bouquet-data";
import ProductImages from "./ProductImages";

// Combine all products
const allProducts = [
    ...signatureBouquetData,
    ...customerCreationsData,
    ...beyondBouquetData,
];

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    // Await params before using
    const { slug } = await params;

    // Find the product by slug (converted from title)
    const product = allProducts.find(
        (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    // If product not found, show 404
    if (!product) {
        notFound();
    }

    return (
        <div className="mt-28 mb-16">
            <div className="mx-auto max-w-6xl px-4">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <ol className="flex items-center gap-2 text-neutral-600">
                        <li>
                            <Link href="/" className="hover:text-neutral-900">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/all-products" className="hover:text-neutral-900">
                                All Products
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-neutral-900">{product.title}</li>
                    </ol>
                </nav>

                {/* Product Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Images */}
                    <ProductImages
                        image={product.image}
                        hoverImage={product.hoverImage}
                        alt={product.alt}
                    />

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                                {product.title}
                            </h1>
                            <p className="text-lg text-neutral-600">Size: {product.size}</p>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-baseline gap-3 py-4 border-y">
                            <span className="text-2xl font-bold text-neutral-900">
                                {product.price}
                            </span>
                            <span className="text-lg text-neutral-400 line-through">
                                {product.prevPrice}
                            </span>
                            <span className="ml-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                Sale
                            </span>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-neutral-900">
                                Description
                            </h2>
                            <p className="text-neutral-600 leading-relaxed">
                                {product.alt}
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        <Link
                            href={`https://m.me/kraftandserenade?text=${encodeURIComponent(`I want to order "${product.title}"`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors cursor-pointer text-center"
                        >
                            Inquire Now
                        </Link>

                        {/* Additional Info */}
                        <div className="space-y-3 text-sm text-neutral-600 pt-4">
                            <p>✓ Hand Crafted</p>
                            <p>✓ Comes with complementary plastic bag</p>
                            <p>✓ Includes note card</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate static params for all products (optional, for build optimization)
export async function generateStaticParams() {
    return allProducts.map((product) => ({
        slug: product.title.toLowerCase().replace(/\s+/g, "-"),
    }));
}