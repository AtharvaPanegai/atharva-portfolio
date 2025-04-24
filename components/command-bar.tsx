"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommandBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const commandLower = command.toLowerCase().trim()

    if (commandLower === "help") {
      setOutput(`Available commands:
- help: Show this help message
- about: Navigate to about section
- skills: Navigate to skills section
- projects: Navigate to projects section
- contact: Navigate to contact section
- clear: Clear the terminal
- exit: Close the command bar`)
    } else if (commandLower === "about") {
      window.location.href = "#about"
      setIsOpen(false)
    } else if (commandLower === "skills") {
      window.location.href = "#skills"
      setIsOpen(false)
    } else if (commandLower === "projects") {
      window.location.href = "#projects"
      setIsOpen(false)
    } else if (commandLower === "experience") {
      window.location.href = "#experience"
      setIsOpen(false)
    } else if (commandLower === "contact") {
      window.location.href = "#contact"
      setIsOpen(false)
    } else if (commandLower === "clear") {
      setOutput(null)
    } else if (commandLower === "exit") {
      setIsOpen(false)
    } else if (commandLower) {
      setOutput(`Command not found: ${command}. Type 'help' for available commands.`)
    }

    setCommand("")
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-card border-border shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Command className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="terminal-window w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red" onClick={() => setIsOpen(false)}></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="ml-2 text-xs text-muted-foreground">command-bar (Ctrl+K)</div>
              </div>
              <div className="terminal-body">
                <p className="text-muted-foreground mb-4">
                  Type <span className="text-primary font-bold">help</span> for available commands
                </p>

                {output && <div className="mb-4 whitespace-pre-wrap text-muted-foreground">{output}</div>}

                <form onSubmit={handleCommandSubmit} className="flex items-center">
                  <span className="terminal-prompt mr-2">$</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="command-input"
                    placeholder="Type a command..."
                    autoFocus
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
