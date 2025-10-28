import SignatureCard from "./Card/Signature-card";
import SignatureCardsNavigation from "./Card/SignatureCardsNavigation";
import { signatureBouquets } from "./data/signature-bouquets";

export default function SignatureCards() {

    return (
        <div className="mt-12">
            <div className="mx-auto max-w-6xl px-4">
                <div className="px-4 pb-4">
                    <p className="text-4xl text-neutral-800">Signature Bouquets</p>
                    <p className="text-neutral-600 mt-2">
                        Designed with simplicity and grace in mind.<br />
                        A perfect blend of color, texture, and timeless beauty.
                    </p>
                </div>

                {/* Mobile: Scroll behavior (below sm) */}
                <div className="mt-8 sm:hidden -mx-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex space-x-4 px-4">
                        {signatureBouquets.map((card, index) => (
                            <SignatureCard
                                key={index}
                                image={card.image}
                                hoverImage={card.hoverImage}
                                title={card.title}
                                price={card.price}
                                href={card.href}
                                animationDelay={index * 50}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: Navigation with Client Component (sm and above) */}
                <div className="hidden sm:block mt-8">
                    <SignatureCardsNavigation cards={signatureBouquets} />
                </div>
                <div className="text-center mt-8">
                    <button className="border py-4 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}