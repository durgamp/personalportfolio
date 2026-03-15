import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { DecisionLog } from "@/components/sections/DecisionLog";
import { Writing } from "@/components/sections/Writing";
import { Photography } from "@/components/sections/Photography";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <DecisionLog />
      <Writing />
      <Photography />
      <Contact />
    </main>
  );
}
