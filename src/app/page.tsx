import Carousel from "./home/carousel/page";
import Offer from "./home/offer/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Carousel />
      <Offer />
      <div className="h-screen"></div>
    </div>
  );
}
