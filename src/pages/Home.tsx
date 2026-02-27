import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/features/CustomCursor";

export function Home() {
    return (
        <main className="relative selection:bg-[#D4AF37] selection:text-black">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <CTA />
            <Contact />
            <CustomCursor />
        </main>
    );
}