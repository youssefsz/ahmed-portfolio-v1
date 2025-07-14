import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ahmed Abidi - Full-Stack Developer | Web & Mobile Solutions',
    template: '%s | Ahmed Abidi - Developer Portfolio'
  },
  description: 'Ahmed Abidi - Experienced full-stack developer from Tunisia specializing in Flutter, React, AI integration, and modern web technologies. 5+ projects, 5000+ users, 100% client satisfaction on Upwork.',
  keywords: [
    'Ahmed Abidi',
    'Full-Stack Developer',
    'Flutter Developer',
    'React Developer',
    'Web Developer',
    'Mobile Developer',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'AI Integration',
    'Tunisia Developer',
    'Upwork Freelancer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'App Development',
    'Web Design',
    'Portfolio',
    'abidiahmed.com'
  ],
  authors: [{ name: 'Ahmed Abidi', url: 'https://abidiahmed.com' }],
  creator: 'Ahmed Abidi',
  publisher: 'Ahmed Abidi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abidiahmed.com',
    siteName: 'Ahmed Abidi - Developer Portfolio',
    title: 'Ahmed Abidi - Full-Stack Developer | Web & Mobile Solutions',
    description: 'Experienced full-stack developer from Tunisia specializing in Flutter, React, AI integration, and modern web technologies. 5+ projects serving 5000+ users.',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Abidi - Full-Stack Developer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: '/logo512.png',
        width: 512,
        height: 512,
        alt: 'Ahmed Abidi Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Hundle_o',
    creator: '@Hundle_o',
    title: 'Ahmed Abidi - Full-Stack Developer | Web & Mobile Solutions',
    description: 'Experienced full-stack developer from Tunisia specializing in Flutter, React, AI integration, and modern web technologies.',
    images: ['/profile.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo192.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo192.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://abidiahmed.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  category: 'Technology',
  classification: 'Software Development Portfolio',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#1A365D',
    'msapplication-TileColor': '#1A365D',
    'msapplication-navbutton-color': '#1A365D',
    'apple-mobile-web-app-title': 'Ahmed Abidi',
    'application-name': 'Ahmed Abidi Portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Additional meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.country" content="Tunisia" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://abidiahmed.com/#person",
                  name: "Ahmed Abidi",
                  url: "https://abidiahmed.com",
                  image: {
                    "@type": "ImageObject",
                    url: "https://abidiahmed.com/profile.jpg",
                    width: 400,
                    height: 400
                  },
                  sameAs: [
                    "https://github.com/Psalpha1",
                    "https://x.com/Hundle_o",
                    "https://www.upwork.com/freelancers/~01e261e981175af1ae"
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
                    addressCountry: "Tunisia",
                    addressRegion: "North Africa"
                  },
                  email: "contact@abidiahmed.com",
                  telephone: "+216 20 022 670",
                  knowsAbout: [
                    "JavaScript",
                    "TypeScript", 
                    "React",
                    "Next.js",
                    "Flutter",
                    "Dart",
                    "Node.js",
                    "Python",
                    "AI Integration",
                    "Mobile Development",
                    "Web Development",
                    "Full-Stack Development"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://abidiahmed.com/#website",
                  url: "https://abidiahmed.com",
                  name: "Ahmed Abidi - Developer Portfolio",
                  description: "Full-stack developer specializing in web and mobile solutions",
                  publisher: {
                    "@id": "https://abidiahmed.com/#person"
                  },
                  inLanguage: "en-US"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://abidiahmed.com/#service",
                  name: "Ahmed Abidi Development Services",
                  url: "https://abidiahmed.com",
                  description: "Professional web and mobile development services",
                  provider: {
                    "@id": "https://abidiahmed.com/#person"
                  },
                  areaServed: "Worldwide",
                  serviceType: [
                    "Web Development",
                    "Mobile App Development", 
                    "Full-Stack Development",
                    "AI Integration",
                    "Flutter Development",
                    "React Development"
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Performance and Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://x.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
