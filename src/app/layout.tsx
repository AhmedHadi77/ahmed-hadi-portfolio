import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import { MotionProvider } from "@/components/animations/motion-provider";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { mobileApps, siteConfig } from "@/lib/site-data";
import "./globals.css";

const description =
  "Ahmed Hadi, IoT Engineer and Full Stack Developer in Malaysia. IoT monitoring platforms, realtime dashboards, digital twins, APIs, and Android apps you can download, including KerjaFlex.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    template: `%s | ${siteConfig.name}`
  },
  description,
  keywords: [
    "Ahmed Hadi",
    "IoT Engineer",
    "Full Stack Developer",
    "React Native",
    "Android app developer Malaysia",
    "KerjaFlex",
    "Sohba",
    "Digital Twin",
    "Realtime Dashboard",
    "Next.js",
    "MQTT"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.profileImage,
        alt: `${siteConfig.name}, IoT Engineer and Full Stack Developer`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    description,
    images: [siteConfig.profileImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#0F1D2A",
  colorScheme: "light"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      address: { "@type": "PostalAddress", addressLocality: "Kuala Perlis", addressCountry: "MY" },
      sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.facebook]
    },
    ...mobileApps.map((app) => ({
      "@type": "MobileApplication",
      name: app.name,
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      description: app.description,
      author: { "@type": "Person", name: siteConfig.name },
      ...(app.download.version ? { softwareVersion: app.download.version } : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" }
    }))
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mist text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
