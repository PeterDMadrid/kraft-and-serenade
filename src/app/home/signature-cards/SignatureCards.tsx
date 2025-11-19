import Heading from "@/components/Heading";
import SignatureCard from "./Card/Signature-card";
import SignatureCardsNavigation from "./Card/SignatureCardsNavigation";
import { gerberaBouquets } from "./data/gerbera-bouquets";
import { lilyBouquets } from "./data/lily-bouquets";
import { signatureBouquets } from "./data/signature-bouquets";
import Link from "next/link";

interface Props {
    title: string;
    signatureCode: number;
    description: string;
    showViewAll: boolean;
}

export default function SignatureCards({ title, signatureCode, description, showViewAll }: Props) {

    const getBouquets = () => {
        switch (signatureCode) {
            case 1:
                return signatureBouquets;
            case 2:
                return lilyBouquets;
            case 3:
                return gerberaBouquets;
            default:
                return signatureBouquets;
        }
    }

    const bouquets = getBouquets();

    return (
        <div className="mt-12">
            <div className="mx-auto max-w-6xl px-8">
                <Heading title={title} description={description} />

                {/* Mobile: Scroll behavior (below sm) */}
                <div className="mt-8 sm:hidden -mx-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex space-x-4 px-4">
                        {bouquets.map((card, index) => (
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
                    <SignatureCardsNavigation cards={bouquets} />
                </div>
                {showViewAll && (
                    <div className="text-center mt-8">
                        <Link href="/signature-bouquet" passHref>
                            <button className="border py-4 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors">
                                View All
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}