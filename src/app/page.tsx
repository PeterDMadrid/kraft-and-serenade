import Carousel from "./carousel/page";
import Offer from "./offer/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Carousel />
      <Offer />
      <div className="h-screen"></div>
    </div>
  );
}
