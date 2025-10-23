import Card from "./Card";

export default function Cards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 gap-4 gap-x-12 justify-items-center sm:w-fit sm:mx-auto">
            <Card
                image="/landing-page/signature-banner.avif"
                title="SIGNATURE BOUQUETS"
                description="Experience the artistry of our uniquely designed, timeless flower arrangements"
                href="/signature-bouquet"
                animationDelay={0}
            />
            <Card
                image="/landing-page/signature-banner.avif"
                title="CUSTOMER CREATIONS"
                description="View our customer's creation and also personalize your own beautiful bouquet"
                href="/signature-bouquet"
                animationDelay={100}
            />
            <Card
                image="/landing-page/signature-banner.avif"
                title="BEYOND BOUQUET"
                description="Explore our handcrafted gifts, thoughtfully paired with your floral selections"
                href="/signature-bouquet"
                animationDelay={200}
            />
        </div>
    );
}
