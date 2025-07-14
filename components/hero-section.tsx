"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown, MapPin, Globe } from "lucide-react"

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const cvPath = "/cv/Ahmed_Abidi_CV.pdf"
    
    // Download the CV
    const link = document.createElement("a")
    link.href = cvPath
    link.download = "Ahmed_Abidi_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Open CV in new window
    window.open(cvPath, "_blank")
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
      aria-label="Ahmed Abidi - Full-Stack Developer Introduction"
    >
      {/* Breadcrumb Navigation for SEO */}
      <nav aria-label="Breadcrumb" className="absolute top-4 left-4 z-20">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li itemProp="breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
          </li>
          <li>
            <span aria-hidden="true">/</span>
          </li>
          <li className="text-blue-400" aria-current="page">Ahmed Abidi</li>
        </ol>
      </nav>

      {/* Animated Background - Responsive sizes */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-red-600/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-red-500/6 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 via-white/5 to-red-500/10 border border-red-500/20 rounded-full px-3 py-2 mb-4 sm:mb-6 text-xs sm:text-sm"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="font-medium text-gray-300">Based in Tunisia, North Africa</span>
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight"
              itemProp="name"
            >
              Hey, I'm <span itemProp="givenName">Ahmed</span> <span itemProp="familyName">Abidi</span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 leading-relaxed"
              itemProp="jobTitle"
            >
              A <strong>full-stack developer</strong> from <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressCountry">Tunisia</span></span>, crafting scalable web and mobile solutions for global clients.
            </motion.p>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              itemProp="description"
            >
              Bridging innovative technology with Mediterranean creativity, delivering excellence from the heart of North Africa.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
                aria-label="Scroll to view Ahmed's development projects and portfolio"
                type="button"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
                </span>
              </button>

              <button 
                onClick={handleDownloadCV}
                className="group border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-white hover:bg-red-600/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                aria-label="Download Ahmed Abidi's professional CV and resume in PDF format"
                type="button"
                itemProp="url"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Download CV
                </span>
              </button>
            </motion.div>

            {/* Tunisia Professional Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">GMT+1</div>
                <div className="text-xs sm:text-sm text-gray-400">Tunisia Time</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400">🇹🇳</div>
                <div className="text-xs sm:text-sm text-gray-400">Tunisia</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">AR/FR/EN/DE</div>
                <div className="text-xs sm:text-sm text-gray-400">Multilingual</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with gradient effect */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative">
              {/* Gradient background effect with Tunisia colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-red-500/15 to-blue-600/30 rounded-full blur-2xl scale-110"></div>

              {/* Profile image container - Responsive sizes */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl relative">
                  <img
                    src="/profile.jpg?height=400&width=400"
                    alt="Ahmed Abidi - Full Stack Developer from Tunisia specializing in Flutter, React, and AI integration"
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="eager"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                  {/* Overlay gradient with Tunisia-inspired colors */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-red-500/15"></div>
                </div>

                {/* Floating elements around the image with Tunisia theme - Responsive and contained */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-red-500/20 rounded-full animate-float"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/40 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 -right-3 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-red-400/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
