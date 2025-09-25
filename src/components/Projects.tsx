import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "A social networking platform with real-time messaging, post sharing, and user interaction features.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80",
    technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Learning Management System",
    description: "An educational platform with course management, video streaming, progress tracking, and interactive assignments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 text-foreground hover:bg-primary/10 flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 text-foreground hover:bg-primary/10 flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;