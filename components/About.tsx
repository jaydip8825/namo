"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#7ee787] mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            I&apos;m a passionate MERN Stack Developer with a strong foundation in building web applications. I
            specialize in creating responsive, user-friendly interfaces and robust backend systems.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            With 1 year of professional experience, I&apos;ve worked on various complex projects and third-party
            integrations. I&apos;m constantly learning and adapting to new technologies to deliver the best solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-[#0d1117] p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-[#7ee787]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Education</h3>
                <p className="text-sm text-gray-400">Bachelor of Computer Applications (BCA)</p>
                <p className="text-xs text-gray-500">Shree Swaminarayan College of Computer Science, Bhavnagar</p>
              </div>
            </div>
          </div>

          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-[#0d1117] p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-[#58a6ff]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Experience</h3>
                <p className="text-sm text-gray-400">MERN Stack Developer - 1 Year</p>
                <p className="text-xs text-gray-500">Worked on complex projects and third-party integrations</p>
              </div>
            </div>
          </div>

          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-[#0d1117] p-3 rounded-lg">
                <Award className="h-6 w-6 text-[#d2a8ff]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Specialization</h3>
                <p className="text-sm text-gray-400">Full Stack Web Development</p>
                <p className="text-xs text-gray-500">Building responsive and scalable web applications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
