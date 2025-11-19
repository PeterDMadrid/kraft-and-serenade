import Heading from "@/components/Heading";
import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Choose Your Bouquet",
        descriptionWithLink: (
            <>
                Signature, custom, or your inspo — and add extras if you like.{" "}
                <Link href="/all-products" className="text-slate-800 hover:text-slate-900 font-medium underline underline-offset-4 transition-colors">
                    Browse Products →
                </Link>
            </>
        )
    },
    {
        number: "02",
        title: "Payment",
        description: "We ask for at least a 50% downpayment to start your order, or you may settle in full if you prefer.",
        image: "/how-to-order/message.avif"
    },
    {
        number: "03",
        title: "Create your letter",
        description: "Send us your message to be put in a notecard. You may send it at least until 30 minutes before pick up",

        image: "/how-to-order/gcash.avif"
    },
    {
        number: "04",
        title: "Wait For Our Update",
        description: "We'll send you a photo of your order on or before the pickup date."
    },
    {
        number: "05",
        title: "Book A Courier",
        description: "Book your own courier (e.g., Lalamove) so you can track the delivery, ensure a rider accepts quickly, and optionally add a tip for faster confirmation."
    }
];

export default function HowToOrder() {
    return (
        <div className="mt-28 mb-16">
            <div className="mx-auto max-w-6xl px-4">
                <Heading
                    title="How to Order"
                    description={``}
                />
                <div className="h-12"></div>

                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400 via-slate-800 to-slate-900 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index}>
                                {/* Mobile layout */}
                                <div className="flex flex-col items-center gap-4 md:hidden">
                                    {/* Step number circle - FIRST on mobile */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl font-bold">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Content - SECOND on mobile */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-600 leading-relaxed max-w-md mx-auto">
                                            {step.descriptionWithLink || step.description}
                                        </p>

                                        {/* Optional image */}
                                        {step.image && (
                                            <div className="mt-4">
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="rounded-lg shadow-md max-w-sm mx-auto w-full"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Desktop layout */}
                                <div className={`hidden md:flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                            {step.descriptionWithLink || step.description}
                                        </p>

                                        {/* Optional image */}
                                        {step.image && (
                                            <div className={`mt-4 ${index % 2 === 0 ? 'md:flex md:justify-end' : ''}`}>
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="rounded-lg shadow-md max-w-sm w-full"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Step number circle */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl font-bold">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Spacer for alignment */}
                                    <div className="flex-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <a href="https://m.me/kraftandserenade?text=Hi%20I’d%20like%20to%20inquire%20about%20your%20bouquets!"
                        target="_blank"
                        rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md cursor-pointer">
                        Inquire Now
                    </a>
                </div>
            </div>
        </div>
    );
}
