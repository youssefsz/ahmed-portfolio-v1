"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      year: "2025 – Present",
      title: "Full Stack Developer at TechWave",
      description: "Building scalable web and mobile applications using Next.js, Flutter, Supabase.",
    },
    {
      year: "2024",
      title: '"Advanced Kotlin for Android" – Udemy',
      description: "Completed advanced Android development course focusing on modern Kotlin practices.",
    },
    {
      year: "2023",
      title: "Bachelor's in Computer Science – University of Gafsa",
      description: "Graduated with honors, specializing in software engineering and mobile development.",
    },
    {
      year: "2022",
      title: "Internship at DevSolutions – React & Supabase Project Development",
      description: "Developed full-stack applications using React and Supabase for client projects.",
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in software development and key milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-800"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">{experience.title}</h3>
                    <span className="text-blue-400 font-medium text-sm bg-blue-500/10 px-3 py-1 rounded-full">
                      {experience.year}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
