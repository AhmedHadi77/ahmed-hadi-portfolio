# Image Replacement Notes

The portfolio currently uses remote Unsplash image URLs in `src/lib/site-data.ts` so the site looks complete immediately.

To use local images later:

1. Add your files to this folder, for example:
   - `profile.jpg`
   - `digital-twin-platform.jpg`
   - `virflow-social-app.jpg`
   - `ai-smart-app.jpg`
2. Open `src/lib/site-data.ts`.
3. Replace the remote image URLs with local paths:
   - `profileImage: "/images/profile.jpg"`
   - `image: "/images/digital-twin-platform.jpg"`

Keep images around 1200px wide for project cards and at least 900px tall for the profile image.

