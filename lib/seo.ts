import { Metadata } from 'next'

// Ahmed Abidi's profile data for SEO
export const AHMED_PROFILE = {
  name: 'Ahmed Abidi',
  title: 'Full-Stack Developer | Web & Mobile Solutions',
  description: 'Experienced full-stack developer from Tunisia specializing in Flutter, React, AI integration, and modern web technologies. 5+ projects serving 5000+ users.',
  url: 'https://abidiahmed.com',
  email: 'contact@abidiahmed.com',
  phone: '+216 20 022 670',
  location: {
    country: 'Tunisia',
    region: 'North Africa',
    timezone: 'GMT+1'
  },
  social: {
    github: 'https://github.com/Psalpha1',
    twitter: 'https://x.com/Hundle_o',
    upwork: 'https://www.upwork.com/freelancers/~01e261e981175af1ae'
  },
  skills: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'Dart', 
    'Node.js', 'Python', 'AI Integration', 'Mobile Development', 
    'Web Development', 'Full-Stack Development'
  ],
  languages: ['Arabic', 'English', 'German', 'French']
}

// Generate structured data for Person schema
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${AHMED_PROFILE.url}/#person`,
    name: AHMED_PROFILE.name,
    givenName: "Ahmed",
    familyName: "Abidi",
    url: AHMED_PROFILE.url,
    image: {
      "@type": "ImageObject",
      url: `${AHMED_PROFILE.url}/profile.jpg`,
      width: 400,
      height: 400
    },
    sameAs: [
      AHMED_PROFILE.social.github,
      AHMED_PROFILE.social.twitter,
      AHMED_PROFILE.social.upwork
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Université de Gafsa (FSGF)",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Tunisia"
      }
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: AHMED_PROFILE.location.country,
      addressRegion: AHMED_PROFILE.location.region
    },
    email: AHMED_PROFILE.email,
    telephone: AHMED_PROFILE.phone,
    knowsAbout: AHMED_PROFILE.skills,
    knowsLanguage: AHMED_PROFILE.languages.map(lang => ({
      "@type": "Language",
      name: lang
    }))
  }
}

// Generate structured data for WebSite schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${AHMED_PROFILE.url}/#website`,
    url: AHMED_PROFILE.url,
    name: `${AHMED_PROFILE.name} - Developer Portfolio`,
    description: AHMED_PROFILE.description,
    publisher: {
      "@id": `${AHMED_PROFILE.url}/#person`
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${AHMED_PROFILE.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Generate structured data for ProfessionalService schema
export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${AHMED_PROFILE.url}/#service`,
    name: "Ahmed Abidi Development Services",
    url: AHMED_PROFILE.url,
    description: "Professional web and mobile development services",
    provider: {
      "@id": `${AHMED_PROFILE.url}/#person`
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development", 
      "Full-Stack Development",
      "AI Integration",
      "Flutter Development",
      "React Development"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flutter Mobile App Development",
            description: "Cross-platform mobile applications using Flutter and Dart"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Web Development",
            description: "Modern web applications using React, Next.js, and TypeScript"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration Services",
            description: "AI-powered features and machine learning integration"
          }
        }
      ]
    }
  }
}

// Generate project schema
export function generateProjectSchema(project: {
  name: string
  description: string
  url: string
  technologies: string[]
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.url,
    applicationCategory: "WebApplication",
    operatingSystem: "Cross-platform",
    author: {
      "@id": `${AHMED_PROFILE.url}/#person`
    },
    programmingLanguage: project.technologies,
    image: project.image ? `${AHMED_PROFILE.url}${project.image}` : undefined,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  }
}

// Generate page-specific metadata
export function generatePageMetadata(page: {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const title = page.title 
    ? `${page.title} | ${AHMED_PROFILE.name} - Developer Portfolio`
    : AHMED_PROFILE.title
  
  const description = page.description || AHMED_PROFILE.description
  const url = `${AHMED_PROFILE.url}${page.path || ''}`
  const image = page.image || '/profile.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: `${AHMED_PROFILE.name} - Developer Portfolio`,
      images: [
        {
          url: `${AHMED_PROFILE.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
      type: page.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@Hundle_o',
      creator: '@Hundle_o',
      images: [`${AHMED_PROFILE.url}${image}`],
    },
    alternates: {
      canonical: url,
    }
  }
}

// SEO optimization helpers
export const SEO_CONSTANTS = {
  MAX_TITLE_LENGTH: 60,
  MAX_DESCRIPTION_LENGTH: 160,
  OPTIMAL_TITLE_LENGTH: 55,
  OPTIMAL_DESCRIPTION_LENGTH: 155
}

export function validateSEOText(text: string, type: 'title' | 'description') {
  const maxLength = type === 'title' ? SEO_CONSTANTS.MAX_TITLE_LENGTH : SEO_CONSTANTS.MAX_DESCRIPTION_LENGTH
  const optimalLength = type === 'title' ? SEO_CONSTANTS.OPTIMAL_TITLE_LENGTH : SEO_CONSTANTS.OPTIMAL_DESCRIPTION_LENGTH
  
  return {
    text,
    length: text.length,
    isValid: text.length <= maxLength,
    isOptimal: text.length <= optimalLength,
    warning: text.length > optimalLength ? `${type} is longer than optimal (${text.length}/${optimalLength} chars)` : null
  }
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
} 