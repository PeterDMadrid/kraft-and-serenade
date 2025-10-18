'use client';

import Image from 'next/image';

export default function Carousel() {
    return (
        <div className="relative mt-20 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[664px] overflow-hidden">
            <div className="absolute inset-0 flex animate-scroll will-change-transform">
                <div className="flex-shrink-0 relative h-full w-[200vw] sm:w-[150vw]">
                    <Image
                        src="/landing-page/landingPage.png"
                        alt="Hero Image"
                        fill
                        sizes="200vw"
                        className="object-cover"
                        quality={85}
                        priority
                    />
                </div>
                <div className="flex-shrink-0 relative h-full w-[200vw] sm:w-[150vw]">
                    <Image
                        src="/landing-page/landingPage.png"
                        alt="Hero Image"
                        fill
                        sizes="200vw"
                        className="object-cover"
                        quality={85}
                        priority
                    />
                </div>
            </div>

            {/* Black opacity overlay */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            {/* Centered text */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <p className="font-sans italic font-light tracking-tight leading-tight text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                    We make it more than just special!
                </p>
            </div>


            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes scroll {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-100vw, 0, 0); }
                    }
                    
                    .animate-scroll {
                        animation: scroll 120s linear infinite;
                    }
                    
                    .will-change-transform {
                        will-change: transform;
                    }
                `}} />
        </div>
    )
}
