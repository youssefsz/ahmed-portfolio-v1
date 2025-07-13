"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.",
      tags: ["Flutter", "Firebase", "Dart", "REST API"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses, message encryption, and multimedia support.",
      tags: ["React Native", "Express.js", "OpenAI", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Interactive dashboard for portfolio management with data visualization, analytics, and reporting features.",
      tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Social Media Platform",
      description:
        "Modern social media platform with real-time messaging, content sharing, and advanced privacy controls.",
      tags: ["Next.js", "GraphQL", "Prisma", "Redis"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
