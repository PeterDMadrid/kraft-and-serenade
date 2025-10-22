import Nav from "./Nav";
import ScrollHeader from "./ScrollHeader";
import Image from "next/image";

export default function Header() {
    return (
        <ScrollHeader>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2">
                <div className="relative h-20 w-55">
                    <Image
                        src="/logo-ks.png"
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <Nav />
            </div>
        </ScrollHeader>
    );
}
