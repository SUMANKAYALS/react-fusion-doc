# Deployment Guide

The React Fusion documentation site is a static Next.js App Router application optimized for edge delivery.

## Deploying to Vercel (Recommended)

Vercel is the creator of Next.js and provides zero-configuration deployments.

1. Push your code to a GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import your project.
4. Set the Root Directory to `website` (if deploying from the monorepo root).
5. Vercel will automatically detect Next.js and configure the build settings (`npm run build`).
6. Click **Deploy**.

## Deploying to Netlify

1. Push your code to GitHub.
2. Go to the [Netlify Dashboard](https://app.netlify.com/start).
3. Connect your repository.
4. Set the base directory to `website`.
5. Netlify will automatically detect the Next.js framework using the `@netlify/plugin-nextjs` plugin.
6. Click **Deploy Site**.

## CI/CD Verification

Before pushing to `main`, you should ensure the site builds correctly locally to achieve 95+ Lighthouse scores:

```bash
npm run lint
npm run build
```
