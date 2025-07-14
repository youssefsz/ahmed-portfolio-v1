"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar, Award, GraduationCap, Briefcase, User } from "lucide-react"

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      year: "2025 - Present",
      category: "Professional",
      title: "Upwork Freelancer",
      organization: "Upwork",
      description: "Working as a freelancer on Upwork delivering high-quality solutions in web development, AI, and software engineering.",
      achievements: [
        "2+ Jobs Completed",
        "100% Client Satisfaction",
        
      ],
      link: {
        text: "View Upwork Profile",
        url: "https://upwork.com/freelancers/~01e261e981175af1ae?mp_source=share", // User can add their actual Upwork profile URL
        external: true
      },
      icon: Briefcase,
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "2025 - Present",
      category: "Education",
      title: "Undergraduate Experience",
      organization: "FSGF - Computer Science",
      description: "Currently pursuing a degree in Computer Science at FSGF, focusing on operating systems, programming languages, and problem-solving skills. Actively engaging in various projects and coursework to build technical expertise.",
      achievements: [
        "Focus: Operating Systems & Programming Languages",
        "Active in coding projects and coursework",
        "Building technical expertise in software development"
      ],
      icon: User,
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2024",
      category: "Certification",
      title: "AI Participation Certificate",
      organization: "AI Program",
      description: "Earned certification in AI technologies, demonstrating commitment to staying current with emerging technologies and artificial intelligence trends.",
      achievements: [
        "AI technologies certification",
        "Emerging tech expertise",
        "Future-focused skill development"
      ],
      icon: Award,
      color: "from-orange-500 to-red-600"
    },
    {
      year: "2024",
      category: "Achievement",
      title: "Baccalaureate in Computer Science",
      organization: "Houcine Bouzaiene High School of Gafsa (L.H.B.G)",
      description: "Completed high school with excellent academic performance, demonstrating strong foundation in computer science and mathematics.",
      achievements: [
        "Grade: 14.68/20",
        "Rank: 1205 out of 6004",
        "Strong foundation in CS fundamentals"
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-violet-600"
    },
    
  ]

  const categoryIcons = {
    Professional: Briefcase,
    Education: GraduationCap,
    Achievement: Award,
    Certification: Award
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Calendar className="w-6 h-6 text-blue-400" />
            <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
              My Journey
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            My journey in software development, education, and key milestones that shaped my expertise
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 opacity-60"></div>

            {experiences.map((experience, index) => {
              const IconComponent = experience.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start mb-8 md:mb-12 last:mb-0 group"
                >
                  {/* Enhanced Timeline dot with pulsing effect */}
                  <motion.div 
                    className="absolute left-[21px] md:left-[37px] z-20 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${experience.color} p-1 shadow-lg ring-4 ring-white/10`}>
                      <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                        <IconComponent className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    {/* Pulsing ring effect */}
                    <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${experience.color} opacity-20 animate-ping`}></div>
                  </motion.div>

                  {/* Enhanced Content Card */}
                  <motion.div 
                    className="ml-16 md:ml-24 w-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-dark-900/60 backdrop-blur-xl border border-dark-700/50 hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge 
                                variant="secondary" 
                                className={`bg-gradient-to-r ${experience.color} text-white border-none text-xs font-medium`}
                              >
                                {experience.category}
                              </Badge>
                              <Badge variant="outline" className="text-blue-400 border-blue-400/30 text-xs">
                                {experience.year}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                              {experience.title}
                            </CardTitle>
                            <CardDescription className="text-gray-400 font-medium text-base">
                              {experience.organization}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-base">
                          {experience.description}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Achievements List */}
                        <div className="space-y-2 mb-4">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="flex items-center gap-3 text-sm text-gray-300"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color}`}></div>
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Link */}
                        {experience.link && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <a
                              href={experience.link.url}
                              target={experience.link.external ? "_blank" : "_self"}
                              rel={experience.link.external ? "noopener noreferrer" : undefined}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${experience.color} text-white font-medium text-sm hover:shadow-lg transition-all duration-200 group/link`}
                            >
                              <span>{experience.link.text}</span>
                              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>


      </div>
    </section>
  )
}

export default ExperienceSection
