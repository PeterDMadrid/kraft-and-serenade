import Banner from "@/components/Banner";
import BestSeller from "./home/best-seller/page";
import Carousel from "./home/carousel/page";
import FeaturedBouquet from "./home/featured-bouquet/page";
import Offer from "./home/offer/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Carousel />
      <Offer />
      <BestSeller />
      <FeaturedBouquet />
      <Banner image="/landing-page/banner.avif" heading="Preserved Blooms" text="A harmony of nature and time — our Preserved Bloom Bouquets are real
                    flowers, expertly preserved to maintain their velvety softness and
                    vivid beauty. More than a bouquet, it’s an enduring expression of
                    elegance, designed to last for years."/>
      <div className="h-screen"></div>
    </div>
  );
}
