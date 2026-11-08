import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Stable download links: /download/<app> always points at the newest APK
// configured in src/lib/app-downloads.json, so QR codes and shared links
// keep working after every new build.
const appDownloads = JSON.parse(
  fs.readFileSync(path.join(projectRoot, "src/lib/app-downloads.json"), "utf8")
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return Object.entries(appDownloads)
      .filter(([slug]) => !slug.startsWith("_"))
      .map(([slug, app]) => ({
        source: `/download/${slug}`,
        destination: app.apkUrl ? app.apkUrl : `/#app-${slug}`,
        permanent: false
      }));
  }
};

export default nextConfig;
