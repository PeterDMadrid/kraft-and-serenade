'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Signature Bouquet', href: '/signature-bouquet' },
    { label: 'Mini Bouquet', href: '/mini-bouquet' },
    { label: 'Customer Creations', href: '/creations' },
    { label: 'Terms and Condition', href: '/terms' },
    { label: 'How to Order', href: '/how-to-order' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQs', href: '/faqs' },
  ];

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`transition-all underline-offset-4 ${isActive ? 'underline decoration-2' : 'hover:underline'
                }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-gray-700 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close button inside menu */}
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col p-4">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-gray-700 transition-all underline-offset-4 ${isActive ? 'underline decoration-2 font-semibold' : 'hover:underline'
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}