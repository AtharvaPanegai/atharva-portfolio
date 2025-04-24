import { Github, Linkedin, Mail, BookOpen } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono">
            <span className="text-primary">const</span> <span className="text-foreground">developer</span>{" "}
            <span className="text-primary">=</span> <span className="text-foreground">"Atharva Panegai"</span>;
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:atharvaapanegai@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Atharva Panegai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
