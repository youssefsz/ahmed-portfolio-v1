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
      title: "ChartAI",
      description:
        "AI-powered financial chart analysis application with advanced pattern recognition, multi-language support, and haptic feedback. Upload charts and get detailed insights instantly.",
      tags: ["HTML5", "CSS3", "JavaScript", "AI", "Finance", "Mobile"],
      image: "/projects/ChartAI/splash.png",
      liveUrl: "/projects/ChartAI/",
      githubUrl: "#",
    },
    {
      title: "Easy Reader",
      description:
        "Universal document reader supporting PDF, Word, Excel, PowerPoint, and more. Features premium tools, unlimited bookmarks, offline reading, and modern dark mode interface.",
      tags: ["HTML5", "CSS3", "JavaScript", "Document Reader", "Mobile", "PWA"],
      image: "/projects/Easy-Reader/splash.png",
      liveUrl: "/projects/Easy-Reader/",
      githubUrl: "#",
    },
    {
      title: "CTF Compass",
      description:
        "A comprehensive cybersecurity companion app for Capture The Flag competitions. Features event tracking, team management, performance monitoring, and integrated cybersecurity tools for enthusiasts.",
      tags: ["HTML5", "CSS3", "JavaScript", "PWA", "Cybersecurity"],
      image: "/projects/ctf_compass/splash.jpg",
      liveUrl: "/projects/ctf_compass/",
      githubUrl: "#",
    },
    {
      title: "CurrEx",
      description:
        "Modern currency exchange application with real-time conversion rates, interactive charts, and beautiful visualizations. Features both light and dark modes with smooth theme transitions.",
      tags: ["HTML5", "CSS3", "JavaScript", "Material Design", "Responsive"],
      image: "/projects/Currex/splash.jpg",
      liveUrl: "/projects/Currex/",
      githubUrl: "",
    },
    {
      title: "TNchat",
      description:
        "Next-generation messaging platform with AI-powered chat, real-time communication, games, and social features. Modern design with advanced animations and user experience.",
      tags: ["HTML5", "CSS3", "JavaScript", "AOS", "Messaging", "AI"],
      image: "/projects/TNchat/splash.jpg",
      liveUrl: "/projects/TNchat/",
      githubUrl: "#",
    },
   
  ]

  return (
    <section 
      id="projects" 
      className="py-20 relative"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Development Projects Portfolio"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
            itemProp="name"
          >
            Projects
          </h2>
          <p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            itemProp="description"
          >
            A showcase of my recent work and personal projects featuring web applications, mobile apps, and AI-powered solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 w-full max-w-sm md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="w-full bg-gradient-to-br from-dark-800/50 to-dark-900/50 flex items-center justify-center min-h-[200px]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    style={{ maxHeight: '250px' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors hover:scale-105 transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  {project.githubUrl && project.githubUrl !== "" && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:scale-105 transform"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
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
