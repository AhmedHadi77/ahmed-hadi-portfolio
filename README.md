# Ahmed Hadi Portfolio

A premium personal portfolio for an IoT Engineer and Full Stack Developer. The site is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Clean reusable component structure
- Responsive layouts for mobile, tablet, and desktop

## Folder Structure

```text
.
|-- public
|   |-- cv
|   |   `-- Ahmed-Hadi-CV.txt
|   `-- images
|       `-- README.md
|-- src
|   |-- app
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   `-- page.tsx
|   |-- components
|   |   |-- animations
|   |   |   |-- animated-counter.tsx
|   |   |   `-- reveal.tsx
|   |   |-- layout
|   |   |   |-- footer.tsx
|   |   |   `-- header.tsx
|   |   |-- sections
|   |   |   |-- about-section.tsx
|   |   |   |-- contact-section.tsx
|   |   |   |-- hero-section.tsx
|   |   |   |-- process-section.tsx
|   |   |   |-- projects-section.tsx
|   |   |   |-- services-section.tsx
|   |   |   |-- skills-section.tsx
|   |   |   `-- testimonials-section.tsx
|   |   `-- ui
|   |       |-- button-link.tsx
|   |       |-- chip.tsx
|   |       `-- section-heading.tsx
|   `-- lib
|       |-- site-data.ts
|       `-- utils.ts
|-- next.config.mjs
|-- package.json
|-- postcss.config.mjs
|-- tailwind.config.ts
`-- tsconfig.json
```

## Where To Replace Personal Details

Edit `src/lib/site-data.ts` for:

- Name and headline
- Email, phone, WhatsApp link, location
- LinkedIn and GitHub URLs
- CV download path
- Profile image URL
- Hero badges
- Skills and progress values
- Project titles, descriptions, images, tags, features, and links
- Services, process steps, testimonials, and contact methods

## Replace The CV

The current download points to:

```ts
cvPath: "/cv/Ahmed-Hadi-CV.txt"
```

To use a PDF:

1. Add your PDF to `public/cv`, for example `Ahmed-Hadi-CV.pdf`.
2. Update `cvPath` in `src/lib/site-data.ts`:

```ts
cvPath: "/cv/Ahmed-Hadi-CV.pdf"
```

## Replace Images

Project and profile images are currently remote URLs in `src/lib/site-data.ts`.

To use local files:

1. Put images in `public/images`.
2. Replace image values with paths like `/images/profile.jpg`.

More notes are in `public/images/README.md`.

## Contact Form

The contact form opens the visitor's email client with a prepared message. To connect it to a backend later, replace the `handleSubmit` function inside:

```text
src/components/sections/contact-section.tsx
```

## Run Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy To Vercel

```bash
npx vercel@latest login
npx vercel@latest --prod --yes
```

The project includes `vercel.json` with the install, build, and dev commands Vercel should use.
