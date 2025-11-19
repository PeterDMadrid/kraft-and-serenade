import Banner from "@/components/Banner";
import FeaturedBouquet from "./home/featured-bouquet/FeaturedBouquet";
import Offer from "./home/offer/Offer";
import BestSeller from "./home/BestSeller";
import Carousel from "./home/Carousel";
import SignatureCards from "./home/signature-cards/SignatureCards";
import Addons from "./home/add-ons/Addons";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Offer />
      <BestSeller
        image="/all-products/customer-creations/angels/angels-2.avif"
        title="This Month's Best Seller"
        description="Our Angel&apos;s Bouquet has been stealing hearts all month! Loved for its soft tones and timeless charm — no wonder it's everyone's favorite pick."
        href="/all-products/angel's"
      />
      <FeaturedBouquet />
      <Banner image="/landing-page/banner.avif"
        heading="Preserved Blooms"
        text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."
      />
      <SignatureCards
        title="Signature Bouquets"
        signatureCode={1}
        description={`Our Signature Bouquets are crafted with elegance and care, combining timeless colors and textures to create arrangements that make any occasion special.`}
        showViewAll={false}
      />
      <SignatureCards
        title="Lily Bouquet"
        signatureCode={2}
        description={`The Lily Bouquet blends delicate blooms with graceful design, vibrant arrangement perfect for gifting or personal enjoyment.`}
        showViewAll={false}
      />
      <SignatureCards
        title="Gerbera"
        signatureCode={3}
        description={`Gerbera bouquets showcase cheerful and colorful flowers, arranged to brighten up any space and bring joy to the recipient.`}
        showViewAll={true}
      />
      <BestSeller
        image="/all-products/beyond-bouquet/rapunzel-1.avif"
        title="Rapunzel's Sundrop"
        description="Custom Rapunzel's Sundrop bouquet presented in a box with personalized floral arrangement inside."
        href="/all-products/rapunzel's-sundrop"
      />
      <Addons />
    </div>
  );
}
