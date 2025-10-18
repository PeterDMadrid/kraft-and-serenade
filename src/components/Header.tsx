import Nav from "./Nav";
import ScrollHeader from "./ScrollHeader";

export default function Header() {
    return (
        <ScrollHeader>
            <div className="mx-auto flex max-w-6xl items-center justify-between p-8">
                <h1 className="text-lg font-semibold tracking-tight">Kraft & Serenade</h1>
                <Nav />
            </div>
        </ScrollHeader>
    );
}
