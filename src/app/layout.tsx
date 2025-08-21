import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ascendarabia.com'),
  title: {
    default: "Ascend Arabia - Leading Construction & Industrial Services in Saudi Arabia",
    template: "%s | Ascend Arabia"
  },
  description: "Leading provider of equipment rental, material trading, construction, and manpower solutions in Saudi Arabia. Professional construction services with 10+ years experience.",
  keywords: "construction Saudi Arabia, equipment rental KSA, material trading, manpower services, industrial construction, crane rental, earth moving equipment",
  authors: [{ name: "Ascend Arabia" }],
  creator: "Ascend Arabia",
  publisher: "Ascend Arabia",
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
    url: 'https://ascendarabia.com',
    siteName: 'Ascend Arabia',
    title: 'Ascend Arabia - Leading Construction & Industrial Services in Saudi Arabia',
    description: 'Leading provider of equipment rental, material trading, construction, and manpower solutions in Saudi Arabia. Professional construction services with 10+ years experience.',
    images: [
      {
        url: '/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ascend Arabia Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ascendarabia',
    creator: '@ascendarabia',
    title: 'Ascend Arabia - Leading Construction & Industrial Services in Saudi Arabia',
    description: 'Leading provider of equipment rental, material trading, construction, and manpower solutions in Saudi Arabia.',
    images: ['/hero/hero.jpg'],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ascend Arabia",
              "url": "https://ascendarabia.com",
              "logo": "https://ascendarabia.com/logo/AscendArabialogonobg.png",
              "description": "Leading provider of equipment rental, material trading, construction, and manpower solutions in Saudi Arabia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prince Thamer St, Al Khobar Al Shamalia",
                "addressLocality": "Al Khobar",
                "postalCode": "34426",
                "addressCountry": "SA"
              },
              "telephone": "+966573653238",
              "email": "info@ascendarabia.com",
              "sameAs": [
                "https://facebook.com/ascendarabia",
                "https://twitter.com/ascendarabia",
                "https://linkedin.com/company/ascendarabia",
                "https://instagram.com/ascendarabia"
              ],
              "foundingDate": "2014",
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              },
              "serviceType": [
                "Construction Services",
                "Equipment Rental",
                "Material Trading",
                "Manpower Services"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Equipment Rental",
                    "description": "Construction equipment and machinery rental services"
                  },
                  {
                    "@type": "OfferCatalog", 
                    "name": "Material Trading",
                    "description": "Industrial materials, pipes, valves, and construction supplies"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Construction Services",
                    "description": "Industrial and commercial construction projects"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Manpower Services", 
                    "description": "Skilled construction workers and technicians"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
