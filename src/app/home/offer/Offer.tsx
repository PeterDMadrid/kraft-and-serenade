import Divider from "@/components/Divider";
import Cards from "./cards/page";

export default function Offer() {
    return (
        <div className="flex flex-col">
            <Divider />
            <div className="flex flex-col justify-center text-center mt-4">
                <p className={`text-3xl font-semibold tracking-widest`}>WHAT WE OFFER</p>
                <Cards />
            </div>
        </div>
    );
}
