import Divider from "@/components/Divider";
import { Poppins } from "next/font/google";
import Cards from "./cards/page";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function Offer() {
    return (
        <div className="flex flex-col">
            <Divider />
            <div className="flex flex-col justify-center text-center mt-4">
                <p className={`${poppins.className} text-3xl font-semibold tracking-widest`}>WHAT WE OFFER</p>
                <Cards />
            </div>
        </div>
    );
}