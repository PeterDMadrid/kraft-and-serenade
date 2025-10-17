import Link from "next/link";

export default function Header() {
    const navItems = [
        "Home",
        "Signature Bouquet",
        "Mini Bouquet",
        "Customer Creations",
        "Terms and Condition",
        "How to Order",
        "About Us",
        "FAQs",
    ];

    return (
        <header className="font-sans w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
                <h1 className="text-lg font-semibold tracking-tight">Kraft & Serenade</h1>
                <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="transition-colors focus:decoration-2 hover:underline underline-offset-4"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
