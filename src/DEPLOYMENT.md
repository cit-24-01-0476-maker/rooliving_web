# 🚀 GitHub Deployment Guide

## Complete Step-by-Step Instructions

### Step 1: Prepare Your Local Project

```bash
# Navigate to your project directory
cd path/to/your/project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: HomeLandscape UI/UX Prototype with dark theme"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `home-landscape` (or your choice)
4. Description: "Home Design & Service Coordination Platform - Academic Project"
5. Set to **Public** (for GitHub Pages)
6. **DO NOT** initialize with README (we already have one)
7. Click **Create repository**

### Step 3: Connect Local to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/home-landscape.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Set Up GitHub Pages

#### Option A: Using GitHub Actions (Automatic Deployment)

1. **Create workflow directory**:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create deployment file** `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings**
   - Click **Pages** in left sidebar
   - Under **Source**, select: **GitHub Actions**

4. **Update vite.config.ts** (create if doesn't exist):
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/home-landscape/', // IMPORTANT: Use your repo name
     build: {
       outDir: 'dist',
     },
   });
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

6. **Monitor deployment**:
   - Go to **Actions** tab in your repository
   - Watch the workflow run
   - Once complete (green checkmark), your site is live!

#### Option B: Manual Deployment with gh-pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (already included):
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / (root)
   - Click **Save**

### Step 5: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/home-landscape/
```

**Initial deployment may take 2-5 minutes.**

## 🎨 Color Codes Reference

Use these exact color codes for your design:

### Primary Colors
- **Orange (Primary)**: `#ff6b35`
- **Black (Secondary)**: `#000000`

### Dark Theme Backgrounds
- **Main Background**: `#1a1a1a`
- **Card Background**: `#2a2a2a`
- **Hover/Muted**: `#3a3a3a`

### Text Colors
- **Primary Text (White)**: `#ffffff`
- **Secondary Text (Gray)**: `#a0a0a0`
- **Muted Text**: `#666666`

### Borders & Accents
- **Border Color**: `rgba(255, 255, 255, 0.1)`
- **Orange Hover**: `#ff8c42`
- **Success Green**: `#10b981`
- **Error Red**: `#d4183d`

## 🔧 Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check `vite.config.ts` base path matches your repository name

### Issue: 404 errors on routes
**Solution**: Add this to `dist/` folder after build:
Create `_redirects` file:
```
/*    /index.html   200
```

### Issue: Styles not loading
**Solution**: Verify CSS files are imported in main entry point

### Issue: GitHub Actions failing
**Solution**: 
- Check Node version (use 18 or 20)
- Verify `package.json` scripts exist
- Check workflow YAML syntax

## 📝 Quick Commands Reference

```bash
# Clone from GitHub
git clone https://github.com/YOUR_USERNAME/home-landscape.git
cd home-landscape

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Test production build
npm run preview

# Deploy (if using gh-pages)
npm run deploy

# Git operations
git add .
git commit -m "Your message"
git push origin main
```

## 🌟 Making Updates

After making changes:

```bash
# Save changes
git add .
git commit -m "Description of changes"
git push origin main

# If using GitHub Actions - automatic deployment
# If using gh-pages:
npm run deploy
```

## 📊 Project Stats

- **Total Screens**: 21
- **Components**: 2 (Header, Button)
- **Pages**: 21
- **Routes**: 21
- **Color Theme**: Dark with Orange accents

## ✅ Pre-Deployment Checklist

- [ ] All 21 pages created and working
- [ ] Dark theme colors applied (#1a1a1a, #2a2a2a)
- [ ] Orange primary color (#ff6b35) used consistently
- [ ] Navigation tested between all pages
- [ ] README.md updated with project details
- [ ] package.json configured correctly
- [ ] vite.config.ts base path set
- [ ] .gitignore includes node_modules and dist
- [ ] GitHub repository created
- [ ] First commit pushed to main branch
- [ ] GitHub Pages enabled
- [ ] Deployment workflow added (if using Actions)
- [ ] Site tested after deployment

## 🎓 For Academic Submission

### Files to Include:
1. **README.md** - Project documentation
2. **DEPLOYMENT.md** - This file
3. **Source Code** - All .tsx files
4. **package.json** - Dependencies
5. **Live URL** - Deployed GitHub Pages link

### Screenshots to Capture:
1. Landing Page
2. Login/Signup
3. Dashboard
4. Services Marketplace
5. Project Timeline
6. Requirements Form
7. Plans Library
8. Notifications

---

**Need Help?** Check GitHub's official documentation:
- [GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions](https://docs.github.com/en/actions)
