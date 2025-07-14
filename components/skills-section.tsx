"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Building beautiful user interfaces",
      skills: [
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          proficiency: 95,
          experience: "3+ years",
          description: "Advanced React development with hooks, context, and modern patterns"
        },
        { 
          name: "Next.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          proficiency: 90,
          experience: "2+ years",
          description: "Full-stack React framework with SSR/SSG capabilities"
        },
        { 
          name: "TypeScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          proficiency: 88,
          experience: "2+ years",
          description: "Type-safe JavaScript development"
        },
        { 
          name: "Tailwind CSS", 
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          proficiency: 92,
          experience: "3+ years",
          description: "Utility-first CSS framework for rapid UI development"
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          proficiency: 93,
          experience: "4+ years",
          description: "Modern ES6+ JavaScript and DOM manipulation"
        },
        { 
          name: "HTML5", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          proficiency: 95,
          experience: "5+ years",
          description: "Semantic HTML and accessibility best practices"
        },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Server-side logic and APIs",
      skills: [
        { 
          name: "Node.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          proficiency: 85,
          experience: "2+ years",
          description: "Server-side JavaScript runtime"
        },
        { 
          name: "Express.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          proficiency: 80,
          experience: "2+ years",
          description: "Fast, unopinionated web framework"
        },
        { 
          name: "PostgreSQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          proficiency: 75,
          experience: "1+ years",
          description: "Advanced SQL database management"
        },
        { 
          name: "MongoDB", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          proficiency: 78,
          experience: "1+ years",
          description: "NoSQL database for flexible data storage"
        },
        { 
          name: "GraphQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          proficiency: 70,
          experience: "1+ years",
          description: "Query language for APIs"
        },
      ],
    },
          {
        title: "Mobile Development",
        icon: "📱",
        description: "Cross-platform mobile apps",
        skills: [
          { 
            name: "Flutter", 
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            proficiency: 82,
            experience: "2+ years",
            description: "Google's UI toolkit for mobile apps"
          },
          { 
            name: "React Native", 
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            proficiency: 82,
            experience: "2+ years",
            description: "Cross-platform mobile development"
          },
          { 
            name: "Kotlin", 
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            proficiency: 70,
            experience: "1+ years",
            description: "Modern Android development"
          },
        ],
      },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      description: "Development workflow and deployment",
      skills: [
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          proficiency: 90,
          experience: "4+ years",
          description: "Version control and collaboration"
        },
        { 
          name: "Docker", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          proficiency: 75,
          experience: "1+ years",
          description: "Containerization and deployment"
        },
        { 
          name: "AWS", 
          logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
          proficiency: 72,
          experience: "1+ years",
          description: "Cloud computing and deployment"
        },
        { 
          name: "Firebase", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          proficiency: 80,
          experience: "2+ years",
          description: "Backend-as-a-Service platform"
        },
      ],
    },
  ]

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-green-400 to-green-600"
    if (proficiency >= 80) return "from-blue-400 to-blue-600"
    if (proficiency >= 70) return "from-yellow-400 to-yellow-600"
    return "from-orange-400 to-orange-600"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Technical Skills and Expertise"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent"
            itemProp="name"
          >
            Skills & Expertise
          </h2>
          <p 
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Passionate about creating digital experiences with modern technologies. 
            Here's my technical toolkit and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
                             {/* Glassmorphism card */}
               <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                                 {/* Category header */}
                 <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                   <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                     {category.icon}
                   </div>
                   <div>
                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{category.title}</h3>
                     <p className="text-gray-400 text-xs sm:text-sm">{category.description}</p>
                   </div>
                 </div>

                                 {/* Skills grid */}
                 <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="relative group/skill"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                                             {/* Skill item */}
                       <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                         <div className="relative flex-shrink-0">
                           <img
                             src={skill.logo || "/placeholder.svg"}
                             alt={skill.name}
                             className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                             onError={(e) => {
                               e.currentTarget.style.display = "none"
                             }}
                           />
                         </div>
                         
                         <div className="flex-1 min-w-0">
                           <div className="flex items-center justify-between mb-2">
                             <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg truncate">{skill.name}</h4>
                             <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
                               <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">{skill.experience}</span>
                               <span className="text-xs sm:text-sm font-medium text-blue-400">{skill.proficiency}%</span>
                             </div>
                           </div>
                          
                          {/* Proficiency bar */}
                          <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                              transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                              className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)}`}
                            />
                          </div>
                          
                          {/* Skill description - shows on hover */}
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={
                              hoveredSkill === skill.name 
                                ? { opacity: 1, height: "auto" } 
                                : { opacity: 0, height: 0 }
                            }
                            transition={{ duration: 0.3 }}
                            className="text-gray-400 text-sm overflow-hidden"
                          >
                            {skill.description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-full px-4 sm:px-8 py-4 max-w-fit mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">20+</div>
              <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700/50" />
            <div className="block sm:hidden w-12 h-px bg-gray-700/50" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700/50" />
            <div className="block sm:hidden w-12 h-px bg-gray-700/50" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">15+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
