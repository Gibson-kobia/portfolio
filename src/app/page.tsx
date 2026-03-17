import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <SocialLinks />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} SOLO BUILDER. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
