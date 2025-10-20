import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function Divider() {
    return (
        <div className={`${poppins.className} flex flex-col text-xs sm:text-sm justify-center items-center w-full h-[8vh] sm:h-[9vh] md:h-[14vh] bg-neutral-900`}>
            <p className="text-neutral-300 font-semibold">“True beauty never fades — it blossoms.”</p>
            <p className="text-neutral-400">-Unkown</p>
        </div>
    );
}