'use client';

import Heading from '@/components/Heading';
import { useState } from 'react'

interface FAQ {
    question: string
    answer: string
}

interface FAQCategory {
    category: string
    items: FAQ[]
}

const faqData: FAQCategory[] = [
    {
        category: "Delivery",
        items: [
            {
                question: "How do you deliver orders?",
                answer: "We deliver through third-party courier apps like Lalamove or Grab. Customers are responsible for booking the rider. Delivery is only available if Lalamove can service your location."
            },
            {
                question: "How do I get your pickup details?",
                answer: "Our pickup name, contact number, and pinned location are provided after placing your order or upon request."
            },
            {
                question: "Can I pick up my order?",
                answer: "Yes. You may pick up your order at One Convio Corp. Bldg., 932 Aurora Blvd. cor. 20th Avenue, Brgy. San Roque, Quezon City."
            },
            {
                question: "Can I schedule my pickup or delivery time?",
                answer: "Yes. You may choose your preferred pickup time. Delivery timing depends on rider availability once you book through a courier app."
            }
        ]
    },
    {
        category: "Packaging",
        items: [
            {
                question: "What packaging options do you offer?",
                answer: "All bouquets come with free plastic packaging. Paper bags are available for an additional ₱50."
            },
            {
                question: "Do you provide proof of the bouquet’s condition?",
                answer: "Yes. We send a video of the bouquet during handoff to the rider to confirm its condition at pickup."
            },
            {
                question: "What happens if the bouquet is damaged during delivery?",
                answer: "Once handed to the rider, any issues during transit must be coordinated directly with the courier."
            }
        ]
    },
    {
        category: "Orders & Payment",
        items: [
            {
                question: "How much is the downpayment?",
                answer: "A 50% downpayment is required to start your order. The remaining 50% must be settled before the rider leaves our store. Proof of completion is provided."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept GCash for all orders. Cash is accepted for personal pickups only."
            },
            {
                question: "Do you offer refunds?",
                answer: "No. Refunds are not available once we have already started making your order."
            },
            {
                question: "Is there a rush fee?",
                answer: "Yes. A ₱50 rush fee applies if the pickup date is within 24 hours of placing the order."
            },
            {
                question: "Do I need to send proof of payment?",
                answer: "Yes. Please send your proof of payment so we can confirm your order and begin the process."
            }
        ]
    },
    {
        category: "Products",
        items: [
            {
                question: "What are your bouquets made of?",
                answer: "All bouquets are handcrafted using fuzzy wire. They are designed to last indefinitely."
            },
            {
                question: "How do I take care of a fuzzy wire bouquet?",
                answer: "Fuzzy wire bouquets require minimal care. For light colors, gently remove dust occasionally."
            },
            {
                question: "Can I request a custom design?",
                answer: "Yes. We accept custom designs, and you may send inspiration photos or references."
            },
            {
                question: "Can I see samples of your previous work?",
                answer: "Yes. You may message us or check the sample designs posted on our page."
            }
        ]
    }
];


export default function FAQAccordion() {
    const [openItems, setOpenItems] = useState<Record<string, number | null>>({})

    const toggleItem = (category: string, index: number) => {
        setOpenItems(prev => ({
            ...prev,
            [category]: prev[category] === index ? null : index
        }))
    }

    return (
        <section className="mx-auto max-w-4xl px-4 mt-30">
            <Heading
                title="Frequently Asked Questions"
                description={`Find answers to common questions about our products, delivery, and services.`}
            />
            <div className="space-y-12">
                {faqData.map((category) => (
                    <article key={category.category}>
                        <h3 className="text-xl mb-6 text-neutral-800 text-center mt-8">{category.category}</h3>
                        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                            {category.items.map((faq, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleItem(category.category, index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                        aria-expanded={openItems[category.category] === index}
                                    >
                                        <span className="font-normal text-gray-700">{faq.question}</span>
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openItems[category.category] === index ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openItems[category.category] === index && (
                                        <div className="px-6 pb-4 bg-gray-50">
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
