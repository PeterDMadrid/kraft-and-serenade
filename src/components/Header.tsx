import Nav from "./Nav";
import ScrollHeader from "./ScrollHeader";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <ScrollHeader>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2">
                <Link href="/">
                    <div className="relative h-20 w-55 cursor-pointer">
                        <Image
                            src="/logo-ks.png"
                            alt="logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>
                <Nav />
            </div>
        </ScrollHeader>
    );
}
