import QRCode from "qrcode";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { appDownloadPath, hasDownload, mobileApps, projects, siteConfig } from "@/lib/site-data";

// QR codes are rendered at build time. They point at the stable /download/<app>
// link, so they keep working when the APK link in app-downloads.json changes.
async function buildQrCodes() {
  const entries = await Promise.all(
    mobileApps.map(async (app) => {
      if (!hasDownload(app)) return [app.slug, null] as const;
      const svg = await QRCode.toString(`${siteConfig.url}${appDownloadPath(app)}`, {
        type: "svg",
        margin: 0,
        errorCorrectionLevel: "M",
        color: { dark: "#0F1D2A", light: "#FFFFFF" }
      });
      return [app.slug, svg] as const;
    })
  );
  return Object.fromEntries(entries) as Record<string, string | null>;
}

export async function ProjectsSection() {
  const qrCodes = await buildQrCodes();
  return <ProjectsExplorer apps={mobileApps} projects={projects} qrCodes={qrCodes} />;
}
