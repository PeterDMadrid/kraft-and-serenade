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
      {/* <Offer /> */}
      <FeaturedBouquet />

      <BestSeller
        image="/all-products/valentines-bouquets/Claire/claire-1.avif"
        title="This Month's Best Seller"
        description="Our most-loved bouquet this month. Featuring a charming arrangement that customers keep coming back for, making it a perfect gift for any celebration."
        href="/all-products/claire"
      />
      <SignatureCards
        title="Signature Bouquets"
        signatureCode={1}
        description={`Our Signature Bouquets are crafted with elegance and care, combining timeless colors and textures to create arrangements that make any occasion special.`}
        showViewAll={false}
      />
      <Banner image="/all-products/signature-bouquets/Madrea/madrea-7.avif"
        heading="Preserved Blooms"
        text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."
      />

      <SignatureCards
        title="Madrea Bouquets"
        signatureCode={2}
        description={`A handcrafted fuzzy wire bouquet featuring a gerbera daisy, lily blooms, poppy flower, and daisy accents, designed to bring warmth, charm, and lasting beauty.`}
        showViewAll={false}
      />
      <SignatureCards
        title="Lily Bouquets"
        signatureCode={3}
        description={`The Lily Bouquet blends delicate blooms with graceful design, vibrant arrangement perfect for gifting or personal enjoyment.`}
        showViewAll={false}
      />
      <SignatureCards
        title="Gerbera"
        signatureCode={4}
        description={`Gerbera bouquets showcase cheerful and colorful flowers, arranged to brighten up any space and bring joy to the recipient.`}
        showViewAll={true}
      />
      <Banner image="/all-products/valentines-bouquets/Ivy/ivy-1.avif"
        heading="Preserved Blooms"
        text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."
      />
      <SignatureCards
        title="Valentines Bouquet"
        signatureCode={5}
        description={`Gerbera bouquets showcase cheerful and colorful flowers, arranged to brighten up any space and bring joy to the recipient.`}
        showViewAll={true}
      />
      <SignatureCards
        title="Graduation Bouquet"
        signatureCode={6}
        description={`Gerbera bouquets showcase cheerful and colorful flowers, arranged to brighten up any space and bring joy to the recipient.`}
        showViewAll={true}
      />
      <BestSeller
        image="/all-products/beyond-bouquet/rapunzel-3.avif"
        title="Rapunzel's Sundrop"
        description="Custom Rapunzel's Sundrop bouquet presented in a box with personalized floral arrangement inside."
        href="/all-products/rapunzel's-sundrop"
      />
      <Addons />
      <Banner image="/all-products/signature-bouquets/Madrea/madrea-1.avif"
        heading="Preserved Blooms"
        text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."
      />
    </div>
  );
}
