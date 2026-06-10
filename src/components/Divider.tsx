"use client";

import { useEffect, useState } from "react";

type Quote = { quote: string; author: string };

export default function Divider() {
    const [quote, setQuote] = useState<Quote>({ quote: "Loading...", author: "Unknown" });

    useEffect(() => {
        fetch("/api/advice")
            .then((r) => r.json())
            .then((d: Quote) => setQuote(d))
            .catch(() => setQuote({ quote: "True beauty never fades — it blossoms.", author: "Unknown" }));
    }, []);

    return (
        <div className="flex flex-col text-xs sm:text-sm justify-center items-center w-full h-[8vh] sm:h-[9vh] md:h-[14vh] bg-neutral-900">
            <p className="text-neutral-300 font-semibold">
                {'"'}{quote.quote}{'"'}
            </p>
            <p className="text-neutral-400">— {quote.author || "Unknown"}</p>
        </div>
    );
}
