interface HeadingProps {
    title: string,
    description: string;
}

export default function Heading({ title, description }: HeadingProps) {
    return (
        <div className="px-4 pb-4">
            <p className="text-4xl text-neutral-800">{title}</p>
            <p className="text-neutral-600 mt-2">
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