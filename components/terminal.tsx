"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalProps {
  onComplete: () => void
}

export function Terminal({ onComplete }: TerminalProps) {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "$ whoami",
    "atharva_panegai",
    "$ cat about.txt",
    "Software Development Engineer with expertise in React, Node.js, and modern web technologies.",
    "$ ls -la projects/",
    "drwxr-xr-x  api-health-monitoring",
    "drwxr-xr-x  freelance-marketplace",
    "drwxr-xr-x  react-native-ui",
    "$ npm start portfolio",
    "Starting development server...",
    "Compiled successfully!",
    "You can now view the portfolio in the browser.",
    "Opening browser... http://localhost:3000",
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(
        () => {
          setLines((prev) => [...prev, terminalLines[currentLine]])
          setCurrentLine((prev) => prev + 1)
        },
        currentLine === 0 ? 500 : Math.random() * 500 + 500,
      )

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        onComplete()
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [currentLine, onComplete, terminalLines])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center min-h-screen p-4"
    >
      <div className="terminal-window w-full max-w-3xl">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="ml-2 text-xs text-muted-foreground">atharva@portfolio ~ </div>
        </div>
        <div className="terminal-body">
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={index % 2 === 0 ? "flex" : "terminal-output"}
              >
                {index % 2 === 0 ? (
                  <>
                    <span className="terminal-prompt">atharva@portfolio:~$ </span>
                    <span className="terminal-command ml-2">{line.substring(2)}</span>
                  </>
                ) : (
                  line
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {currentLine < terminalLines.length && (
            <div className="flex">
              <span className="terminal-prompt">atharva@portfolio:~$ </span>
              <span className="terminal-command ml-2 relative">
                {showCursor && <span className="cursor-blink absolute">▋</span>}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
