# ReCi Hospitality Consulting - Static Build Guide

This guide will help you build a completely static version of the ReCi Hospitality Consulting website that can be hosted on any platform, including free services like GitHub Pages, Netlify, or integrated with Canva.

## What We've Done

We've already converted the website to be compatible with static hosting by:

1. Replacing the backend API calls with simple mailto links for the contact form
2. Removing backend dependencies from the React application
3. Setting up the configuration files for static building

## How to Build the Static Site

You have two options to build the static site:

### Option 1: Use the static.vite.config.ts file (Recommended)

Run the following command in your terminal:

```bash
npx vite build --config static.vite.config.ts
```

This will:
- Build your React application
- Output the files to the `static-build` directory
- Use relative paths that work on any hosting service

### Option 2: Manual Conversion

If you prefer to build the site using the standard Vite build:

1. Run the standard build command:
   ```bash
   npm run build
   ```

2. Copy the files from `dist/public` to your hosting platform

## Hosting Options

### GitHub Pages
1. Create a new GitHub repository
2. Upload the files from the `static-build` directory
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify/Vercel
1. Create an account
2. Create a new site and upload the files from the `static-build` directory
3. Deploy with their automatic configuration

### Traditional Web Hosting
1. Upload the files via FTP to your web host
2. Point your domain to the directory containing these files

### Canva Integration
While Canva is primarily a design tool rather than a hosting platform, you can:

1. Create a website in Canva
2. For interactive elements like the contact form:
   - Use Canva's built-in form elements
   - Link to a separate contact page or use a mailto link
3. Upload the static site's images to Canva's media library

## Testing the Static Site Locally

To preview the site locally before uploading:

```bash
npx serve static-build
```

This will start a local server and show you a URL where you can view your site.

## Need Help?

For any questions about this website, please contact info@reciconsulting.com