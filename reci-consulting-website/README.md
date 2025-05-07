# ReCi Hospitality Consulting Website

A professional static website for ReCi Hospitality Consulting featuring service showcasing and contact functionality.

## Overview

This site is built with React and features:

- Modern, responsive design optimized for all devices
- Dark green and gold color scheme with clean, modern layout
- Clear presentation of consulting services
- Contact form that opens the visitor's email client
- Fast loading speed and good SEO fundamentals

## How to Use

### Building the Static Website

1. Run the build script to generate a static version of the website:

```bash
node build-static.js
```

2. The built website will be available in the `static-build` directory

### Deployment Options

#### Option 1: GitHub Pages

1. Create a new GitHub repository
2. Upload the files from the `static-build` directory
3. Enable GitHub Pages in the repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

#### Option 2: Netlify/Vercel

1. Create an account on Netlify or Vercel
2. Create a new site and upload the files from the `static-build` directory
3. Deploy your site with their automatic configuration

#### Option 3: Traditional Web Hosting

1. Upload the files from the `static-build` directory to your web host via FTP
2. Point your domain to the directory containing these files

#### Option 4: Canva Integration

While Canva is primarily a design tool rather than a hosting platform, you can:

1. Create a website in Canva
2. For interactive elements, use embed code blocks to add external forms
3. Upload your static assets to Canva's media library
4. Consider embedding the static site in an iframe if needed

## Local Development

To run the site locally:

```bash
npm run dev
```

## Contact Information

For any questions about this website, please contact info@reciconsulting.com