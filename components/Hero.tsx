"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-sm md:text-base text-[#7ee787] mb-2">Hello, I&apos;m</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Bharat Rathod</h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-[#58a6ff] mb-6 h-14">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg">
            Building responsive and scalable web applications with modern technologies. Passionate about creating clean,
            efficient, and user-friendly solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(126, 231, 135, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md text-sm font-medium transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(88, 166, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] hover:border-[#58a6ff] rounded-md text-sm font-medium transition-all duration-300"
            >
              View Projects
            </motion.a>
          </div>
          <div className="flex space-x-4 mt-8">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                color: "#7ee787",
                boxShadow: "0 0 10px rgba(126, 231, 135, 0.5)",
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                color: "#58a6ff",
                boxShadow: "0 0 10px rgba(88, 166, 255, 0.5)",
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:bharat@example.com"
              whileHover={{
                y: -5,
                color: "#ff7b72",
                boxShadow: "0 0 10px rgba(255, 123, 114, 0.5)",
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                color: "#d2a8ff",
                boxShadow: "0 0 10px rgba(210, 168, 255, 0.5)",
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full"
            >
              <FileText className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#58a6ff] to-[#7ee787] opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-[#0d1117] flex items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/placeholder.svg?height=300&width=300"
                alt="Bharat Rathod"
                className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-[#30363d] hover:border-[#58a6ff] transition-colors duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-[#58a6ff] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1 hover:border-[#58a6ff]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 bg-gray-400 rounded-full hover:bg-[#58a6ff]"
            ></motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
