"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Close mobile menu after navigation
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section
      const sections = navItems.map((item) => document.getElementById(item.id))
      const currentScrollPosition = scrollPosition + 100

      // Check if scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setActiveSection("contact")
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= currentScrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobile, isMobileMenuOpen])

  if (isMobile) {
    return (
      <>
        {/* Mobile Navigation */}
        <div 
          className="fixed top-4 right-4 z-[9999]"
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 9999,
            isolation: 'isolate',
            transform: 'translateZ(0)',
            willChange: 'auto'
          }}
        >
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            className={`p-3 rounded-full backdrop-blur-md border border-dark-700/50 shadow-lg transition-all duration-300 ${
              isScrolled ? "bg-black/30" : "bg-black/20"
            }`}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-white block transition-all duration-300 origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-white block mt-1 transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-white block mt-1 transition-all duration-300 origin-center"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9998
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-md border border-dark-700/50 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="p-6">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl ${
                            activeSection === item.id 
                              ? "text-blue-400 bg-blue-600/20 border border-blue-400/30" 
                              : "text-gray-300 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop Navigation
  return (
    <div 
      className="fixed top-6 left-0 right-0 z-[9999] flex justify-center px-4"
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: 0,
        right: 0,
        zIndex: 9999,
        isolation: 'isolate',
        transform: 'translateZ(0)',
        willChange: 'auto',
        pointerEvents: 'none'
      }}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ pointerEvents: 'auto' }}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? "50px" : "26px",
            padding: isScrolled ? "12px 24px" : "16px 24px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="backdrop-blur-md border border-dark-700/50 shadow-2xl bg-black/20"
        >
          <ul className="flex justify-center items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600/20 rounded-full border border-blue-400/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  )
}

export default Navigation
