# 📦 GitHub Repository Setup - Quick Guide

## 🚀 5-Minute Setup

### Step 1: Download Project Files
Download all your project files to a folder on your computer.

### Step 2: Open Terminal/Command Prompt
```bash
# Navigate to your project folder
cd path/to/home-landscape
```

### Step 3: Initialize Git
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: HomeLandscape dark theme prototype"
```

### Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New"** button (or **+** → **New repository**)
3. Fill in:
   - **Repository name**: `home-landscape`
   - **Description**: `Home Design & Service Coordination Platform`
   - **Visibility**: Public ✅
   - **DO NOT check** "Add a README file"
4. Click **"Create repository"**

### Step 5: Connect and Push

GitHub will show you commands. Copy them, or use these:

```bash
# Add your GitHub repository as remote
# REPLACE 'YOUR_USERNAME' with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/home-landscape.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

#### Automatic Method (Recommended)

1. **Create folder structure**:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create file** `.github/workflows/deploy.yml` and paste:
   ```yaml
   name: Deploy

   on:
     push:
       branches: ['main']

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
       steps:
         - uses: actions/deploy-pages@v4
   ```

3. **Create** `vite.config.ts` file:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/home-landscape/',
   });
   ```

4. **Push the changes**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

5. **Enable Pages in GitHub**:
   - Go to your repository on GitHub
   - Click **Settings**
   - Click **Pages** (left sidebar)
   - Under **Source**, select: **GitHub Actions**
   - Save!

### Step 7: Wait and Access

- Go to **Actions** tab to watch deployment
- Wait 2-3 minutes
- Your site will be live at:
  ```
  https://YOUR_USERNAME.github.io/home-landscape/
  ```

---

## 📋 Complete File Checklist

Make sure you have these files:

### Essential Files ✅
- [ ] `App.tsx` - Main app component
- [ ] `README.md` - Project documentation
- [ ] `package.json` - Dependencies
- [ ] `.gitignore` - Git ignore rules
- [ ] `vite.config.ts` - Vite configuration

### Pages (21 files) ✅
- [ ] `pages/LandingPage.tsx`
- [ ] `pages/SignUpPage.tsx`
- [ ] `pages/LoginPage.tsx`
- [ ] `pages/HomeDashboard.tsx`
- [ ] `pages/ServicesMarketplace.tsx`
- [ ] `pages/ServiceDetail.tsx`
- [ ] `pages/BookServiceForm.tsx`
- [ ] `pages/BookingConfirmation.tsx`
- [ ] `pages/MyProjectsPage.tsx`
- [ ] `pages/ProjectDetail.tsx`
- [ ] `pages/RequirementsStep1.tsx`
- [ ] `pages/RequirementsStep2.tsx`
- [ ] `pages/RequirementsStep3.tsx`
- [ ] `pages/PlansLibrary.tsx`
- [ ] `pages/PlanViewer.tsx`
- [ ] `pages/LoanContactRequest.tsx`
- [ ] `pages/LoanSubmittedSuccess.tsx`
- [ ] `pages/LandInspectionRequest.tsx`
- [ ] `pages/InspectionStatus.tsx`
- [ ] `pages/NotificationsPage.tsx`
- [ ] `pages/ProfileSettings.tsx`

### Components ✅
- [ ] `components/Header.tsx`
- [ ] `components/Button.tsx`

### Styles ✅
- [ ] `styles/globals.css`

### GitHub Deployment ✅
- [ ] `.github/workflows/deploy.yml`

---

## 🎨 Color Codes - Dark Theme

```
Primary Orange:    #ff6b35
Secondary Black:   #000000
Background Dark:   #1a1a1a
Card Background:   #2a2a2a
Muted Background:  #3a3a3a
Text White:        #ffffff
Text Gray:         #a0a0a0
```

---

## 🔧 Common Issues & Solutions

### ❌ "Permission denied"
**Solution**: Make sure you're authenticated with GitHub
```bash
# Use HTTPS with token or SSH keys
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/home-landscape.git
```

### ❌ "Repository not found"
**Solution**: Check the remote URL
```bash
# View current remote
git remote -v

# Update if wrong
git remote set-url origin https://github.com/YOUR_USERNAME/home-landscape.git
```

### ❌ "Blank page after deployment"
**Solution**: Check `vite.config.ts` base path
```typescript
base: '/home-landscape/',  // Must match repo name
```

### ❌ "GitHub Actions failing"
**Solution**: Check these:
1. `package.json` has `"build": "vite build"` script
2. Node version is 18 or 20 in workflow
3. All dependencies are listed in `package.json`

---

## 📱 Test Your Deployment

### Before Deploying:
```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build and test
npm run build
npm run preview
```

### After Deploying:
1. Open live URL: `https://YOUR_USERNAME.github.io/home-landscape/`
2. Test navigation between pages
3. Check that all 21 screens load
4. Verify dark theme colors
5. Test responsive design

---

## 🔄 Making Updates

After deployment, whenever you make changes:

```bash
# 1. Save your changes
git add .

# 2. Commit with message
git commit -m "Update: describe what you changed"

# 3. Push to GitHub
git push origin main

# 4. Wait 2 minutes - GitHub Actions will auto-deploy!
```

---

## 📞 Need Help?

### GitHub Resources:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Guide](https://docs.github.com/en/actions)

### Check Deployment Status:
- **Actions Tab**: See build progress
- **Pages Settings**: View deployment URL
- **Console**: Press F12 to check for errors

### Common Commands:
```bash
# Check git status
git status

# View commit history
git log --oneline

# See remote URL
git remote -v

# Pull latest changes
git pull origin main

# Force push (use carefully!)
git push origin main --force
```

---

## ✅ Success Checklist

Before submitting your project:

- [ ] All 21 pages are working
- [ ] Dark theme (#1a1a1a) applied everywhere
- [ ] Orange accent (#ff6b35) used consistently
- [ ] Navigation works between all pages
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Live URL accessible
- [ ] Screenshots taken
- [ ] README.md updated with live URL
- [ ] No console errors on live site

---

## 📝 Your Project Info

Fill this out for your records:

```
GitHub Username:    _________________
Repository Name:    home-landscape
Repository URL:     https://github.com/_______/home-landscape
Live Website:       https://_______.github.io/home-landscape/
Date Deployed:      _________________
```

---

**Quick Commands Summary:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/home-landscape.git
git push -u origin main
```

**That's it! Your project is now live on GitHub Pages! 🎉**
