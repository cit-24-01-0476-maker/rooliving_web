# HomeLandscape - Home Design & Service Coordination Platform

A comprehensive UI/UX prototype for an academic mini project that helps homeowners plan their house and landscape, view 2D/3D house plans, request services, and connect with banks for loan guidance.

## 🎨 Design Theme

- **Primary Color**: Orange (#ff6b35)
- **Secondary Color**: Black (#000000)
- **Background**: Dark theme (#1a1a1a, #2a2a2a)
- **Typography**: Clean, modern sans-serif
- **Style**: Minimal, professional, easy-to-navigate

## 🚀 Features

### 21 Complete Screens:
1. Landing / Welcome Page
2. Sign Up Page
3. Login Page
4. Home Dashboard
5. Services Marketplace
6. Service Detail Page
7. Book Service Form
8. Booking Confirmation
9. My Projects Page
10. Project Detail Timeline
11-13. Requirements Forms (3 Steps)
14. Plans Library
15. 2D/3D Plan Viewer
16. Loan Contact Request
17. Loan Submitted Success
18. Land Inspection Request
19. Inspection Status
20. Notifications Page
21. Profile & Settings Page

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HomeLandscape UI/UX Prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/home-landscape.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select Source: GitHub Actions

3. **Create GitHub Actions Workflow**
   
   Create `.github/workflows/deploy.yml`:

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
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
           env:
             NODE_ENV: production
         
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

4. **Update `vite.config.ts`** (if it exists, otherwise create it):
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/home-landscape/', // Replace with your repo name
   });
   ```

5. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

### Method 2: Manual Deployment

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add scripts to package.json
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📂 Project Structure

```
/
├── pages/              # All 21 screen components
│   ├── LandingPage.tsx
│   ├── SignUpPage.tsx
│   ├── LoginPage.tsx
│   ├── HomeDashboard.tsx
│   ├── ServicesMarketplace.tsx
│   └── ... (16 more pages)
├── components/         # Reusable components
│   ├── Header.tsx
│   └── Button.tsx
├── styles/            # Global styles
│   └── globals.css
├── App.tsx            # Main app component with routing
└── README.md          # This file
```

## 🎯 User Flow

1. **Landing Page** → Sign Up/Login
2. **Dashboard** → Access all features
3. **Requirements** → 3-step form to define needs
4. **Plans Library** → Browse 2D/3D designs
5. **Services** → Book professionals
6. **Projects** → Track progress
7. **Loan Request** → Connect with banks
8. **Land Inspection** → Schedule surveys

## 🎓 Academic Purpose

This is a UI/UX prototype created for academic purposes (CS2311 level). It demonstrates:
- Complete user flow design
- Professional wireframing
- Responsive layout principles
- Modern UI/UX patterns
- Dark theme implementation

**Note**: This is a frontend prototype only. No backend, real payments, or actual loan processing is implemented.

## 📱 Screenshots

*Add screenshots of your key pages here after deployment*

## 🔗 Live Demo

Once deployed: `https://YOUR_USERNAME.github.io/home-landscape/`

## 👥 Target Users

- Homeowners (primary users)
- Service providers (painters, gardeners, contractors, electricians)
- Company admin/staff
- Partner bank officers

## 📄 License

This is an academic project created for educational purposes.

## 🤝 Contributing

This is an academic prototype. For suggestions or improvements, please open an issue.

## 📧 Contact

For questions about this project, please contact your course instructor or project supervisor.

---

**Academic Project** - CS2311 Software Engineering  
**Year**: 2026  
**Institution**: [Your Institution Name]
