import { Code2, Database, Globe, Smartphone, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "JavaScript", "HTML5", "CSS3"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Node.js, Express, MongoDB, PostgreSQL",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python", "REST APIs"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Technologies",
    description: "Full-stack web applications & APIs",
    technologies: ["GraphQL", "WebSockets", "PWA", "SEO", "Web Performance"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "React Native, responsive design",
    technologies: ["React Native", "Expo", "Mobile UI/UX", "Cross-platform"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design & prototyping",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "DevOps & Tools",
    description: "Git, Docker, CI/CD, Cloud platforms",
    technologies: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Testing"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and beautiful applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl card-shadow hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;