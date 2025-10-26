import Image from "next/image";

interface BannerProps {
    image: string;
    heading: string;
    text: string;
}

export default function Bannner({ image, heading, text}: BannerProps) {
    return (
        <div className={`relative mt-12 w-full h-140 bg-black overflow-hidden`}>
            <Image
                src={image}
                alt={heading}
                fill
                className="object-cover ambient"
            />
            <div className="absolute w-full h-full bg-black opacity-50">
            </div>
            <div className="absolute bottom-30 left-1/2 -translate-x-1/2 text-center">
                <h2 className="text-xl font-light italic mb-4 text-white">
                    {heading}
                </h2>
                <p className="text-sm leading-relaxed text-neutral-300">
                    {text}
                </p>
            </div>
        </div>
    )
}