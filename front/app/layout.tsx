
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Alexis Brun | Développeur Full Stack & Web Developer | PortfolioV2",
  description:
    "Portfolio d'Alexis Brun, développeur Full Stack spécialisé dans les technologies web modernes. Découvrez mes projets, compétences et expériences professionnelles.",
  keywords: [
    "Alexis Brun",
    "Alexis-Dominique Brun",
    "Alexis-Dominque",
    "Alexis Dominique",
    "Alexis Dominique Brun",
    "Alexis",
    "Brun",
    "développeur full stack",
    "développeur",
    "developpeur",
    "developer",
    "portfolio",
    "React",
    "JavaScript",
    "Node.js",
    "Next.js",
    "web developer",
    "web développeur",
    "developpeur web",
    "développeur web",
    "fullsstack",
    "full-stack",
    "epitech",
    "web academie",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Alexis Brun", url: "https://alexs-portfolioV2.vercel.app" }],
  creator: "Alexis Brun",
  publisher: "Alexis Brun",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://https://alexs-portfolioV2.vercel.app.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://https://alexs-portfolioV2.vercel.app.com",
    title: "Alexis Brun | Développeur Full Stack",
    description:
      "Portfolio d'Alexis Brun, développeur Full Stack spécialisé en JavaScript, React, Node.js et technologies web modernes.",
    siteName: "Portfolio d'Alexis Brun",
    images: [
      {
        url: "https://alexisbn.https://alexs-portfolioV2.vercel.app/images/me.webp",
        width: 1200,
        height: 630,
        alt: "Alexis Brun - Développeur Full Stack",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Ci5l2MeTzLStUjiQFtogwr4rnDqX3K1SdZnb92d_7KY",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta property="og:image" content="https://alexisbn.com/images/image1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://alexisbn.com/images/image1.webp" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />


        <Script
          src="https://kit.fontawesome.com/60a6745d4f.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alexis Brun",
              url: "https://alexisbn.com",
              image: "https://alexisbn.com/images/image1.webp",
              jobTitle: "Développeur Full Stack",
              knowsAbout: ["JavaScript", "React", "Node.js", "TypeScript", "Next.js"],
              sameAs: [
                "https://github.com/Luxsss",
                "https://www.linkedin.com/in/alexs-brun/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
