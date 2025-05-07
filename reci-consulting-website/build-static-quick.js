// A simpler version of the build script that only calls Vite
import { execSync } from 'child_process';

console.log('🚀 Building static website...');
execSync('npx vite build --config static.vite.config.ts', { stdio: 'inherit' });
console.log('✅ Static website built successfully in the static-build directory!');