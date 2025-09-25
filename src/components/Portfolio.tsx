import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Jaswanth Nammi. Crafted with passion and modern technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;