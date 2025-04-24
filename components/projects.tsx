"use client"

import { motion } from "framer-motion"
import { Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "API Observability Platform",
      description:
        "Real-time API observability platform tracking millions of calls daily with automated incident detection.",
      image: "https://res.cloudinary.com/atharvapanegai/image/upload/v1745472438/garuda-api-project_qausid.png",
      github: "https://github.com/AtharvaPanegai/garuda-api",
      technologies: ["Node.js", "MongoDB", "Redis", "RabbitMQ","ExpressJS","Docker","Nginx","AWS", "React"],
      highlights: [
        "Reduced database writes by 80%",
        "Ensured sub-100ms response times",
        "Implemented zero-downtime updates",
      ],
      previewLink : "https://apigaruda.com"
    },
    {
      title: "Freelance Marketplace",
      description: "Full-stack mobile app for a growing freelance marketplace with secure payments and real-time chat.",
      image: "https://user-images.githubusercontent.com/63795656/212247890-3f915445-6889-43a8-b7b5-b37670f4a709.png",
      github: "https://github.com/AtharvaPanegai/skillcoup-rn",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      highlights: [
        "Integrated secure payment gateway",
        "Built real-time messaging with <60ms latency",
        "Created role-based UI experiences",
      ],
    },
    {
      title: "React Native UI",
      description:
        "Component library for React Native developers enabling rapid UI implementation with 2000+ downloads.",
      image: "https://res.cloudinary.com/atharvapanegai/image/upload/v1745473433/Unique_UI_Components_to_enhance_your_front-end_3_piwtna.png",
      github: "https://github.com/AtharvaPanegai/ReactNativeUI",
      technologies: ["React Native", "Expo", "TypeScript"],
      highlights: [
        "Built community of 500+ active users",
        "Implemented intuitive component search",
        "Optimized for performance",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono"
        >
          <span className="text-primary">#</span> <span className="text-foreground">projects</span>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-mono text-primary mb-2">// HIGHLIGHTS</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">›</span>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-muted/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                    {project.previewLink && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.previewLink} target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="h-4 w-4" /> Preview
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="aspect-video overflow-hidden rounded-lg border border-border">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
