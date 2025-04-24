"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithubactions,
  SiRabbitmq,
  SiGo,
  SiCplusplus,
  SiGrafana,
  SiAmazonwebservices,
  SiRedux,
  SiLoopback,
  SiSocketdotio,
  SiJenkins,
  SiOpentelemetry,
  SiJavascript,
} from "react-icons/si"

export function Skills() {
  const skillCategories = [
    {
      name: "Core Languages",
      skills: [
        { name: "C++", icon: SiCplusplus },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Go", icon: SiGo },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React Native", icon: SiReact },
        { name: "Redux", icon: SiRedux }, // Optional: Add redux if you've used it prominently
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "LoopBack", icon: SiLoopback }, // optional, or use custom icon
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "RabbitMQ", icon: SiRabbitmq },
        { name: "Socket.io", icon: SiSocketdotio }, // optional
      ],
    },
    {
      name: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Git", icon: SiGit },
        { name: "CI/CD", icon: SiGithubactions },
        { name: "Jenkins", icon: SiJenkins },
      ],
    },
    {
      name: "Monitoring & Observability",
      skills: [
        { name: "Grafana", icon: SiGrafana },
        { name: "API Garuda", icon: SiOpentelemetry }, // or use a custom icon
      ],
    },
  ];
  

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono"
        >
          <span className="text-primary">#</span>{" "}
          <span className="text-foreground">skills</span>
        </motion.div>

        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-mono mb-6">
                <span className="text-primary">~/</span>
                {category.name.toLowerCase()}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05 + categoryIndex * 0.1,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div className="text-3xl mb-2 text-primary">
                        <IconComponent />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
