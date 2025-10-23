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
      <div className="h-screen"></div>
    </div>
  );
}
