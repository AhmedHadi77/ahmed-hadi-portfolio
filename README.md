# Ahmed Hadi Portfolio

Personal portfolio for an IoT Engineer and Full Stack Developer, with downloadable Android apps (KerjaFlex and Sohba).

Live: https://ahmed-hadi-portfolio.vercel.app

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3
- Framer Motion (all motion respects the visitor's "reduce motion" setting)
- Self-hosted fonts: Bricolage Grotesque (headings) and IBM Plex Sans (body) via Fontsource
- `qrcode` for build-time QR codes on the app download panels

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Name, email, links, CV path, photo, projects, skills, services | `src/lib/site-data.ts` |
| Android app details (text, features, screenshots) | `mobileApps` in `src/lib/site-data.ts` |
| **App download links, versions, sizes** | `src/lib/app-downloads.json` |
| Colours and fonts | `tailwind.config.ts`, `src/app/globals.css` |

## Android app downloads

Each app has a stable link on the portfolio: `/download/kerjaflex` and `/download/sohba`.
These redirect to whatever `apkUrl` is set in `src/lib/app-downloads.json`, and the QR codes
point at these stable links, so you only change the JSON file after each new build.

`apkUrl` can be:

- A full link, for example a GitHub Release asset (recommended, permanent, up to 2 GB):
  `https://github.com/AhmedHadi77/<repo>/releases/download/v1.1.0/KerjaFlex.apk`
- An EAS build link (`https://expo.dev/artifacts/eas/....apk`). These expire after a while,
  so check the link still downloads.
- A file in `public/downloads/`, for example `/downloads/app.apk`. Vercel rejects files over
  100 MB, so this only works for small APKs. `vercel.json` already sends the right headers for it.
- Empty (`""`): the card shows a "Request the APK" button instead of a download.

Publishing an APK to a GitHub Release with the GitHub CLI:

```bash
gh release create kerjaflex-v1.1.0 "C:/kerjaflex/website/downloads/kerjaflex.apk#KerjaFlex.apk" --repo AhmedHadi77/<repo> --title "KerjaFlex 1.1.0"
```

### Adding app screenshots

1. Put phone screenshots in `public/images/` (portrait, roughly 9:19, e.g. `sohba-home.webp`).
2. Add them to the app entry's `screens` array in `src/lib/site-data.ts`.

## Deploy to Vercel

```bash
npx vercel@latest --prod --yes
```

## One-click helpers (Windows)

- `start-dev.bat`: installs packages if needed and runs the dev server at http://localhost:3000
- `deploy.bat`: pushes to GitHub and deploys to Vercel production, writing the output to `deploy.log`
