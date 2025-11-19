import Image from 'next/image'
import Heading from "@/components/Heading";

export default function TermsAndCondition() {
    return (
        <section className="mx-auto max-w-4xl px-4 mt-30">
            <Heading
                title="Terms And Condition"
                description={`Find answers to common questions about our products, delivery, and services.`}
            />
            <div className="relative">
                <Image
                    src="/terms/terms-and-condition.avif"
                    alt="Terms and Condition"
                    width={1200}  // any natural width
                    height={800}  // any natural height
                    className="w-full h-auto object-cover"
                />

            </div>

        </section>
    )
}