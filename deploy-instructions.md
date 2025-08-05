# Deployment Instructions

## GitHub Setup (Run these commands after creating the repository)

```bash
git remote add origin https://github.com/YOUR_USERNAME/keegan-personal-brand.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `keegan-personal-brand` repository
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## Environment Variables (if needed)
None required for this static site.

## Custom Domain (optional)
- Add your domain in Vercel dashboard
- Update DNS records as instructed

## Repository Details
- **Name:** keegan-personal-brand
- **Description:** Personal brand website for Keegan Hansen-Davis - Business Builder & Entrepreneur
- **Public:** Yes
- **Branch:** main