export default function TimelineEntry({
    season,
    title,
    children,
}: {
    season: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-muted border border-muted-foreground p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-primary">
                        {season}
                    </h3>
                    <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                        {title}
                    </h3>
                </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="flex flex-col gap-2">
                    <h3 className="md:hidden block text-xl text-left font-bold text-primary">
                        {season}
                    </h3>
                    <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                        {title}
                    </h3>
                </div>
                {children}
            </div>
        </div>
    );
}
