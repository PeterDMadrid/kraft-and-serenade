'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpendown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Shop',
      href: '/shop',
      submenu: [
        { label: 'All Products', href: '/all-products' },
        { label: 'Signature Bouquets', href: '/signature-bouquet' },
        { label: 'Customer Creations', href: '/customer-creations' },
        { label: 'Beyond Bouquets', href: '/beyond-bouquet' },
      ],
    },
    { label: 'How to Order', href: '/how-to-order' },
    { label: 'About Us', href: '/about-us' },
    {
      label: 'More',
      href: '#',
      submenu: [
        { label: 'FAQs', href: '/faqs' },
        { label: 'Terms & Conditions', href: '/terms-and-condition' },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpendown(mobileOpenDropdown === label ? null : label);
  };

  // Prevent hydration mismatch by not showing active states until mounted
  const getIsActive = (href: string) => {
    return mounted && pathname === href;
  };

  const getIsSubmenuActive = (submenu: { href: string }[]) => {
    return mounted && submenu.some((subItem) => pathname === subItem.href);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
        {navItems.map((item) => {
          const isActive = getIsActive(item.href);
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          if (hasSubmenu) {
            const isSubmenuActive = getIsSubmenuActive(item.submenu);

            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-1 transition-all underline-offset-4 ${
                    isSubmenuActive
                      ? 'underline decoration-2'
                      : 'hover:underline'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {openDropdown === item.label && (
                  <>
                    {/* Invisible backdrop to close dropdown */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setOpenDropdown(null)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                      {item.submenu.map((subItem) => {
                        const isSubActive = getIsActive(subItem.href);
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isSubActive
                                ? 'bg-gray-100 font-semibold text-gray-900'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-all underline-offset-4 ${
                isActive ? 'underline decoration-2' : 'hover:underline'
              }`}
            >
              {item.label}
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
        className={`fixed top-0 right-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
          {navItems.map((item) => {
            const isActive = getIsActive(item.href);
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            if (hasSubmenu) {
              const isSubmenuActive = getIsSubmenuActive(item.submenu);
              const isExpanded = mobileOpenDropdown === item.label;

              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className={`w-full flex items-center justify-between py-3 text-left text-gray-700 transition-all underline-offset-4 ${
                      isSubmenuActive
                        ? 'underline decoration-2 font-semibold'
                        : 'hover:underline'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu items */}
                  {isExpanded && (
                    <div className="pl-4 border-l-2 border-gray-200 ml-2">
                      {item.submenu.map((subItem) => {
                        const isSubActive = getIsActive(subItem.href);
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileOpendown(null);
                            }}
                            className={`block py-2 text-sm text-gray-700 transition-all underline-offset-4 ${
                              isSubActive
                                ? 'underline decoration-2 font-semibold'
                                : 'hover:underline'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-gray-700 transition-all underline-offset-4 ${
                  isActive
                    ? 'underline decoration-2 font-semibold'
                    : 'hover:underline'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
