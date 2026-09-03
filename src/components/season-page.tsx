export default function SeasonPage({
    href,
    awards,
    image,
    video,
}: {
    href: string;
    awards: string[];
    image?: string;
    video?: string;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <h2 className="font-semibold text-xl mb-3">Awards</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    {awards.map((award) => (
                        <li key={award}>{award}</li>
                    ))}
                </ul>
                {/* <Link href={href}>
                    <Button className="mt-4">
                        Learn More <ArrowUpRight />
                    </Button>
                </Link> */}
            </div>
            <a href={href}>
                {image && (
                    <img
                        src={image}
                        alt="Season Image"
                        className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                    />
                )}
                {video && (
                    <video
                        width="320"
                        height="240"
                        autoPlay
                        muted
                        loop
                        className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </a>
        </div>
    );
}
