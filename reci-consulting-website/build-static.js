// This is a script to build the static website
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const staticDir = path.join(__dirname, 'static-build');

console.log('🚀 Building the static website...');

try {
  // If static-build directory exists, clean it
  if (fs.existsSync(staticDir)) {
    console.log('🧹 Cleaning previous build directory...');
    fs.rmSync(staticDir, { recursive: true, force: true });
  }
  
  // Build the client application using Vite with static config
  console.log('📦 Building React application...');
  execSync('npx vite build --config static.vite.config.ts', { stdio: 'inherit' });
  
  // Install serve for preview if not already installed
  console.log('📦 Installing serve for static preview...');
  execSync('npm install -g serve || true', { stdio: 'inherit' });
  
  console.log('✅ Static build completed successfully!');
  console.log(`
📂 Your static website is ready in the '${path.relative(__dirname, staticDir)}' directory.
   You can upload these files to any static hosting service:
   
   1. For GitHub Pages:
      - Create a repository
      - Upload these files
      - Enable GitHub Pages in repository settings
   
   2. For Netlify/Vercel:
      - Create an account
      - Create a new site from these files
      - Deploy
   
   3. For Canva:
      - Create a website in Canva
      - For interactive elements, use embed code blocks to add external forms
      - Upload your static assets to Canva's media library
   
   To preview the site locally, run:
   npx serve ${path.relative(__dirname, staticDir)}
  `);
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}