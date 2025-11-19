interface HeadingProps {
    title: string,
    description: string;
}

export default function Heading({ title, description }: HeadingProps) {
    return (
        <div className="px-4 pb-4 flex flex-col items-center">
            <p className="text-4xl text-neutral-800 text-center uppercase">{title}</p>
            <p className="text-neutral-400 mt-2 text-center text-xs">
                {description.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    )
}
