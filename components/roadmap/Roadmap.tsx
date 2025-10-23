import { RoadmapLine } from "@/components/roadmap/RoadmapLine";

const Roadmap = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <header className="text-center py-16 px-4 animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                    Our Society Evolution
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A journey through time, celebrating our milestones and the incredible community we've built together
                </p>
            </header>

            {/* Roadmap line */}
            <RoadmapLine />

            {/* Footer Section */}
            <footer className="text-center py-12 px-4 border-t border-border">
                <p className="text-muted-foreground">
                    The journey continues... Stay tuned for more amazing milestones
                </p>
            </footer>
        </div>
    );
};

export default Roadmap;
