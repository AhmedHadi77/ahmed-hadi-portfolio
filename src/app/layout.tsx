import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-hadi.dev"),
  title: {
    default: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "IoT Engineer and Full Stack Developer portfolio focused on device monitoring, realtime dashboards, API architecture, digital twins, and scalable full stack systems.",
  keywords: [
    "Ahmed Hadi",
    "IoT Engineer",
    "Full Stack Developer",
    "Digital Twin",
    "Realtime Dashboard",
    "Next.js",
    "TypeScript",
    "MQTT",
    "Device Monitoring"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    description:
      "Portfolio for IoT platforms, device monitoring, realtime dashboards, API engineering, digital twins, and scalable web applications.",
    url: "https://ahmed-hadi.dev",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.profileImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} professional portfolio`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | IoT Engineer & Full Stack Developer`,
    description:
      "Device monitoring, realtime dashboards, digital twin platforms, backend APIs, and full stack product engineering.",
    images: [siteConfig.profileImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mist text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
