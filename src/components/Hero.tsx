import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(220 25% 5% / 0.8), hsl(220 25% 5% / 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="hero-title">
              <span className="gradient-text">Jaswanth</span>
              <br />
              <span className="text-foreground">Nammi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-shadow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://www.linkedin.com/in/jaswanth-nammi-94a447318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-shadow"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="http://github.com/Nammi-Jaswanth53"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-shadow"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('skills')}
          className="p-2 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;