import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import { ProjectPerformanceStage } from "@/components/stage/ProjectPerformanceStage";
import Contact from "@/components/sections/Contact";
import GitHubStats from "@/components/ui/GitHubStats";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      
      {/* Performance Stage Prototype */}
      <ProjectPerformanceStage />
      
      <Contact />
      
      <footer className="py-32 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* GitHub Metrics Bar */}
          <div className="mb-24 pb-24 border-b border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="text-center md:text-left">
                <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold">Open Source Status</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">TECHNICAL <br /> <span className="text-transparent border-text stroke-white/20">FOOTPRINT</span></h3>
              </div>
              <GitHubStats />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
                GIBSON<span className="text-accent">KOBIA</span>
              </h3>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest max-w-xs leading-loose">
                Architecting the next generation of digital products with precision and purpose.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
                <a href="#about" className="hover:text-accent transition-colors">About</a>
                <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
                <a href="#projects" className="hover:text-accent transition-colors">Stage</a>
                <a href="#contact" className="hover:text-accent transition-colors">Connect</a>
              </div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-4">
                &copy; {new Date().getFullYear()} GIBSON KOBIA. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
