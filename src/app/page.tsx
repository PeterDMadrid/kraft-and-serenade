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
        image="/landing-page/best-seller.avif"
        title="This Month's Best Seller"
        description="Our Angel's Bouquet has been stealing hearts all month! Loved for its soft tones and timeless charm — no wonder it's everyone's favorite pick."
        href="#"
      />
      <FeaturedBouquet />
      <Banner image="/landing-page/banner.avif"
        heading="Preserved Blooms"
        text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."
      />
      <SignatureCards title="Signature Bouquets"
        signatureCode={1}
        description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
        showViewAll={false}
      />
      <SignatureCards title="Lily Bouquet"
        signatureCode={2}
        description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
        showViewAll={false}
      />
      <SignatureCards title="Gerbera"
        signatureCode={3}
        description={`Designed with simplicity and grace in mind. 
                      A perfect blend of color, texture, and timeless beauty.`}
        showViewAll={true}
      />
      <BestSeller
        image="/landing-page/best-seller.avif"
        title="Rapunzel's Sundrop"
        description="Our Angel's Bouquet has been stealing hearts all month! Loved for its soft tones and timeless charm — no wonder it's everyone's favorite pick."
        href="#"
      />
      <Addons />
    </div>
  );
}
