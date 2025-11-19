import Banner from "@/components/Banner";
import Heading from "@/components/Heading";
import Image from 'next/image'

export default function AboutUs() {
    return (
        <main>
            <div className="h-12"></div>
            <Banner image="/landing-page/banner.avif"
                heading="Kraft And Serenade"
                text="Crafting since 2024"
            />
            <div className="h-12"></div>
            <Heading
                title="About Us"
                description={``}
            />
            <section className="mx-auto max-w-6xl px-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <figure className="relative min-h-120">
                        <Image
                            src="/about-us/us.avif"
                            alt="Picture of the founders"
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <article className="flex flex-col gap-8 text-xl md:mt-0 mt-4">
                        <p className="text-center">
                            <strong>Kraft and Serenade</strong> was founded by Kirsch (Peter Kirsch Madrid)
                            and Shierla (Shierla Claire Catan), two hearts united by creativity
                            and a shared vision of turning simple blooms into meaningful
                            stories.
                        </p>
                        <p className="text-center">
                            What began in September 2024 as a passion for handcrafted floral
                            pieces soon grew into something more — a brand that celebrates
                            artistry, sincerity, and the beauty of lasting impressions. By
                            November 2024, Kraft and Serenade became officially DTI-
                            registered, and by December 2024, we proudly received our BIR
                            registration, marking the beginning of our journey as a fully
                            recognized business.
                        </p>
                        <p className="text-center">
                            Every bouquet we create is more than just flowers. It is a serenade
                            in itself — a thoughtful blend of textures, colors, and emotions,
                            carefully arranged to capture timeless moments. Our handcrafted
                            designs reflect both elegance and warmth, carrying with them the
                            essence of love, gratitude, and celebration.
                        </p>
                        <p className="text-center">
                            At Kraft and Serenade, we believe flowers don't just mark
                            occasions; they become part of the stories people cherish forever.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}