"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#30363d]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-[#58a6ff]">
              <span className="text-[#7ee787]">&lt;</span>
              Bharat Rathod
              <span className="text-[#7ee787]">/&gt;</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 flex items-center">
            <span>© {new Date().getFullYear()} - All rights reserved</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 text-[#ff7b72] mx-1" /> by Bharat Rathod
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
