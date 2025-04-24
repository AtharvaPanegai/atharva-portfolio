/** @format */

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix rain effect
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    // Characters to display
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    function draw() {
      // Semi-transparent black background to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = "#8b5cf6";
      ctx.font = `${fontSize}px monospace`;

      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];

        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it crosses the screen
        // Adding randomness to the reset to make the drops scattered
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id='home' className='relative min-h-screen flex items-center'>
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full opacity-20'
      />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20'>
        <div className='max-w-3xl mx-auto md:mx-0'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-2 font-mono text-primary'>
            <span className='text-muted-foreground'>$</span> Hello, World!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-4xl md:text-6xl font-bold mb-4 glitch'
            title='Atharva Panegai'>
            Atharva Panegai
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='overflow-hidden'>
            <h2 className='text-xl md:text-2xl font-mono text-muted-foreground'>
              Software Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='mt-6 text-lg text-muted-foreground max-w-2xl'>
            Crafting scalable architectures and distributed systems that power real-time, high-performance applications.
            <span className='block mt-2 font-mono text-primary'>
              <span className='text-muted-foreground'>const</span> skills = [
              <span className='text-foreground'>"React"</span>,{" "}
              <span className='text-foreground'>"Node.js"</span>,{" "}
              <span className='text-foreground'>"TypeScript"</span> ]
              {/* <span className='text-foreground'>"Cloud"</span>]; */}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='mt-8 flex flex-wrap gap-4'>
            <Button asChild size='lg' className='glow'>
              <a href='#projects'>
                View Projects <ArrowRight className='ml-2 h-4 w-4' />
              </a>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <a
                href='https://drive.google.com/file/d/1vKxsb0wL2z9DR8eggLlwQA01xmOvyHXu/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'>
                Resume <Code2 className='ml-2 h-4 w-4' />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='mt-8 flex gap-4'>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='GitHub'>
              <Github className='h-6 w-6' />
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='LinkedIn'>
              <Linkedin className='h-6 w-6' />
            </a>
            <a
              href='https://leetcode.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='LeetCode'>
              <BookOpen className='h-6 w-6' />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
