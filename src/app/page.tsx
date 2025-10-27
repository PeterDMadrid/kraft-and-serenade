import Banner from "@/components/Banner";
import FeaturedBouquet from "./home/featured-bouquet/page";
import Offer from "./home/offer/page";
import BestSeller from "./home/BestSeller";
import Carousel from "./home/Carousel";
import SignatureCards from "./home/signature-cards/page";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Offer />
      <BestSeller />
      <FeaturedBouquet />
      <Banner image="/landing-page/banner.avif" heading="Preserved Blooms" text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."/>
      <SignatureCards />
      <Banner image="/landing-page/banner.avif" heading="Preserved Blooms" text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."/>
      <div className="h-screen"></div>
    </div>
  );
}
