"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono"
        >
          <span className="text-primary">#</span> <span className="text-foreground">about_me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="ml-2 text-xs text-muted-foreground">about.js</div>
              </div>
              <div className="terminal-body">
                <div className="text-muted-foreground">
                  <span className="text-[#f92672]">const</span> <span className="text-[#a6e22e]">atharva</span>{" "}
                  <span className="text-[#f92672]">=</span> {"{"}
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">name</span>:{" "}
                  <span className="text-[#e6db74]">'Atharva Panegai'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">title</span>:{" "}
                  <span className="text-[#e6db74]">'Software Development Engineer'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">location</span>:{" "}
                  <span className="text-[#e6db74]">'Bengaluru, India'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">education</span>:{" "}
                  <span className="text-[#e6db74]">'B.Tech, Vishwakarma Institute of Information Technology'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">interests</span>: [
                  <span className="text-[#e6db74]">'System Design'</span>,{" "}
                  <span className="text-[#e6db74]">'API Development'</span>,{" "}
                  <span className="text-[#e6db74]">'Open Source'</span>],
                </div>
                <div className="pl-6">
                  <span className="text-[#a6e22e]">bio</span>:{" "}
                  <span className="text-[#e6db74]">'Building scalable systems and optimizing performance.'</span>,
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Who am I?</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">Software Development Engineer</span> with a passion
                for building scalable and efficient applications.
              </p>

              <p>
                Currently at <span className="text-primary font-medium">Signzy Technologies</span>, I've improved system
                performance by 10x and reduced processing time from 35 minutes to under 1 second.
              </p>

              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and performance optimization. My
                approach focuses on creating maintainable solutions that solve real problems.
              </p>

              <div className="flex items-center mt-6 p-4 rounded-lg border border-border bg-card">
                <Terminal className="h-10 w-10 text-primary mr-4" />
                <div>
                  <p className="text-foreground font-medium">Fun fact:</p>
                  <p className="text-sm">
                  I once built a UI library that 2,000+ devs downloaded. Now I’m building API Garuda, monitoring millions of API calls per day — in real time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
