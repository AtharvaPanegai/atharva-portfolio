"use client"

import { useState, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CommandBar } from "@/components/command-bar"

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Hide terminal after 5 seconds
    const timer = setTimeout(() => {
      setShowTerminal(false)
    }, 5000)

    // Cleanup
    return () => clearTimeout(timer)
  }, [])

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <div className="noise"></div>

      {showTerminal ? (
        <Terminal onComplete={() => setShowTerminal(false)} />
      ) : (
        <>
          <Navbar activeSection={activeSection} />
          <CommandBar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
