'use client';

import { useEffect, useState } from 'react';

export default function ScrollHeader({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            
            timeoutId = setTimeout(() => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY < 10) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                
                setLastScrollY(currentScrollY);
            }, 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [lastScrollY]);

    return (
        <header 
            className="fixed left-0 right-0 z-30 font-sans w-full border-b border-gray-200 bg-white transition-all duration-300"
            style={{ top: isVisible ? '0' : '-100px' }}
        >
            {children}
        </header>
    );
}
