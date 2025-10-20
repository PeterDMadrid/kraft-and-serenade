import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '700'], // Add the weights you need
    subsets: ['latin'],
});

export default function Carousel() {
    return (
        <div className="relative mt-20 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
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
            <div className="flex flex-col absolute p-8 md:p-12 lg:p-16 xl:p-32 text-white inset-0 flex justify-center items-start pointer-events-none">
                <p className={`${poppins.className} font-bold tracking-wider leading-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}>
                    WE MAKE <br></br> IT MORE <br></br> THAN JUST <br></br> SPECIAL
                </p>
                <div className={`${poppins.className} flex gap-2 mt-4 p-4 lg:text-xl lg:p-6 tracking-widest border`}>
                    <p>MESSAGE US</p>
                </div>
            </div>
        </div>
    )
}
