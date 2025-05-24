"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com/",
      demo: "https://example.com/",
      stars: 45,
      forks: 12,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      github: "https://github.com/",
      demo: "https://example.com/",
      stars: 32,
      forks: 8,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media platforms with data visualization and reporting features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      demo: "https://example.com/",
      stars: 28,
      forks: 5,
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "A weather application that provides real-time forecasts and historical weather data for any location.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Geolocation", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
      stars: 19,
      forks: 3,
    },
  ])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#7ee787] mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is built with attention to detail and focuses on delivering
          a great user experience.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px rgba(88, 166, 255, 0.2)",
            }}
            className="bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d] hover:border-[#58a6ff] transition-all duration-500 shadow-lg group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#21262d",
                        color: "#7ee787",
                      }}
                      className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-[#58a6ff] border border-[#30363d] transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#58a6ff] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      color: "#7ee787",
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    className="text-gray-400 hover:text-[#58a6ff] transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      color: "#58a6ff",
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    className="text-gray-400 hover:text-[#7ee787] transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                    <Star className="h-4 w-4 text-[#f0883e]" />
                    <span>{project.stars}</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                    <GitFork className="h-4 w-4 text-[#d2a8ff]" />
                    <span>{project.forks}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(88, 166, 255, 0.3)",
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] hover:border-[#58a6ff] rounded-md text-sm font-medium transition-all duration-300"
        >
          <Github className="h-4 w-4" />
          View More on GitHub
        </motion.a>
      </motion.div>
    </section>
  )
}
