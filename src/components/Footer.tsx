'use client';

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const getIsActive = (href: string) => {
        return mounted && pathname === href;
    };

    const navigationLinks = [
        { label: 'Home', href: '/' },
        { label: 'All products', href: '/all' },
        { label: 'Signature Bouquets', href: '/signature-bouquet' },
        { label: 'Customer Creations', href: '/creations' },
        { label: 'Beyond Bouquet', href: '/beyond-bouquet' },
    ];

    const infoLinks = [
        { label: 'How to order', href: '/how-to-order' },
        { label: 'About us', href: '/about' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Terms & Condition', href: '/terms' },
    ];

    return (
        <footer className="w-full mt-20 border-t border-neutral-300 py-8 px-4 text-sm sm:text-xs font-thin text-neutral-500 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-0">
                {/* Logo */}
                <div className="flex items-center justify-center sm:justify-start">
                    <div className="relative h-20 w-55">
                        <Image
                            src="/logo-ks.png"
                            alt="logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="text-center sm:text-left">
                    <ul className="flex flex-col items-center sm:items-start gap-3 sm:gap-4">
                        {navigationLinks.map((link) => {
                            const isActive = getIsActive(link.href);
                            return (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className={`transition-all underline-offset-4 ${
                                            isActive 
                                                ? 'underline decoration-2 font-semibold' 
                                                : 'hover:underline'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Info Links */}
                <div className="text-center sm:text-left">
                    <ul className="flex flex-col items-center sm:items-start gap-3 sm:gap-4">
                        {infoLinks.map((link) => {
                            const isActive = getIsActive(link.href);
                            return (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className={`transition-all underline-offset-4 ${
                                            isActive 
                                                ? 'underline decoration-2 font-semibold' 
                                                : 'hover:underline'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 justify-center sm:justify-start">
                    <a href="#" aria-label="Facebook">
                        <Facebook className="w-5 h-5 hover:text-neutral-800 transition-colors" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Instagram className="w-5 h-5 hover:text-neutral-800 transition-colors" />
                    </a>
                    <a href="#" aria-label="Location">
                        <MapPin className="w-5 h-5 hover:text-neutral-800 transition-colors" />
                    </a>
                    <a href="#" aria-label="Email">
                        <Mail className="w-5 h-5 hover:text-neutral-800 transition-colors" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-300 mt-8 pt-6 text-center">
                &copy; 2025, Kraft and Serenade
            </div>
        </footer>
    );
}
