"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer I",
      company: "Signzy Technologies",
      period: "September 2023 – present",
      location: "Bengaluru",
      achievements: [
        "Migrated 'investor-onboarding' product to modern tech stack, boosting performance 10x",
        "Optimized processing logic from 35 minutes to <1 second",
        "Led migration from NSQ to RabbitMQ for improved scalability",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Troopr Labs Inc",
      period: "July 2023 – September 2023",
      location: "Remote",
      achievements: [
        "Fixed 30+ bugs in Jira connectivity, improving UI performance by 20%",
        "Built custom Announcement feature for enterprise clients",
        "Developed APIs to support new product features",
      ],
    },
    {
      title: "Software Development Engineering Intern",
      company: "Troopr Labs Inc",
      period: "January 2023 – June 2023",
      location: "Remote",
      achievements: [
        "Developed key product features with Node.js and Express",
        "Enhanced frontend codebase for improved responsiveness",
      ],
    },
    {
      title: "Software Development Engineering Intern",
      company: "Rootfor Inc",
      period: "February 2022 – January 2023",
      location: "Remote",
      achievements: [
        "Built React Native mobile app architecture",
        "Implemented Redux for state management",
        "Created backend for WalletConnect and analytics features",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono"
        >
          <span className="text-primary">#</span> <span className="text-foreground">experience</span>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="experience-timeline-dot"></div>

                <div className="mb-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    {exp.period}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-muted-foreground text-sm">• {exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2">›</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
