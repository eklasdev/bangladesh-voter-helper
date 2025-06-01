#!/bin/bash

# Pre-deployment verification script

echo "=== Voter Helper App - Build Verification ==="
echo ""

# Check Node.js and npm versions
echo "Checking Node.js and npm versions..."
node -v
npm -v
echo ""

# Verify package installation
echo "Verifying package installation..."
npm install
echo ""

# Run a production build
echo "Running production build test..."
npm run build
echo ""

# Check if build succeeded
if [ -d "./dist" ]; then
  echo "✅ Build successful! The dist directory was created."
  echo "Files in dist directory:"
  ls -la ./dist
else
  echo "❌ Build failed. Please check the error messages above."
  exit 1
fi

echo ""
echo "=== Deployment Instructions ==="
echo ""
echo "1. Create a GitHub repository at: https://github.com/new"
echo "2. Push your code with:"
echo "   git remote add origin https://github.com/eklasdev/bangladesh-voter-helper.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Set up Cloudflare Pages:"
echo "   - Log in to Cloudflare Dashboard"
echo "   - Go to Pages"
echo "   - Click 'Create a project' and 'Connect to Git'"
echo "   - Select your GitHub repository"
echo "   - Configure build settings:"
echo "     * Build command: npm run build"
echo "     * Build output directory: dist"
echo "     * Add environment variable: NODE_VERSION=18"
echo "   - Click 'Save and Deploy'"
echo ""
echo "Your site will be available at: https://voter-helper-xxxx.pages.dev"
echo "You can set up a custom domain in the Cloudflare Pages settings."
echo ""
