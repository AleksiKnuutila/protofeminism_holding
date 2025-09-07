# GitHub Pages Deployment for v0.app Project

## Project Setup
This is a Next.js project exported from v0.app that has been configured for GitHub Pages static deployment.

## Configuration Changes Made

### 1. Next.js Configuration (`next.config.mjs`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',           // Enable static export
  trailingSlash: true,        // Required for GitHub Pages
  basePath: '/protofeminism_holding',  // Match repository name
}
```

### 2. Package.json Scripts
Added export script:
```json
"scripts": {
  "export": "next build && next export"
}
```

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Created automated deployment workflow that:
- Builds the Next.js project on push to main
- Uses pnpm for dependency management
- Deploys static files from `out/` directory to GitHub Pages

## Deployment Process

### Local Testing
```bash
npm install
npm run build
# Static files generated in ./out/ directory
```

### GitHub Pages Setup Required
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. Save settings

### Site URL
Once deployed: `https://AleksiKnuutila.github.io/protofeminism_holding/`

## Project Structure
- `/app/` - Next.js app directory with pages and layouts
- `/components/` - UI components (from v0.app)
- `/public/` - Static assets
- `/out/` - Generated static site (after build)

## Notes
- Project uses Tailwind CSS for styling
- Multiple UI component libraries included from v0.app export
- Images are unoptimized for static export compatibility
- Build ignores TypeScript errors and ESLint warnings for faster deployment