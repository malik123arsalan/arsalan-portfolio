# Arsalan Mustafa Malik — Personal Portfolio Website

A modern, high-performance, multi-page personal portfolio website for **Arsalan Mustafa Malik**, Agentic AI Developer and AI Automation Developer for D2C Brands.

- **Core AI & Backend Engine:** Python 3.11, FastAPI, LangGraph, ChromaDB, TensorFlow
- **Client Frontend:** Modern React SPA with responsive Tailwind CSS & edge-ready routing
- **Deployment:** Instant deployment to **GitHub** and **Cloudflare Pages** with automated secret protection (`.gitignore`)

---

## 📁 Complete Folder Structure

```text
├── backend/                            # Native Python FastAPI backend
│   ├── main.py                         # FastAPI endpoints: /api/contact, /api/hire, /api/agent/run
│   └── requirements.txt                # Python dependencies (FastAPI, LangGraph, ChromaDB)
├── run.py                              # One-click Python launcher script
├── public/
│   └── _redirects                      # Cloudflare Pages SPA client-side routing fallback
├── server.ts                           # Full-stack Express server with Vite middleware & REST endpoints
├── src/
│   ├── assets/                         # SVG icons, graphic assets & illustrations
│   ├── components/                     # Reusable UI components
│   │   ├── AboutMotionGraphic.tsx      # Interactive reasoning model motion graphic
│   │   ├── AgentGraphVisualizer.tsx    # Interactive LangGraph multi-agent simulation
│   │   ├── AgentWorkflowGraphic.tsx    # Live animated multi-agent motion graphic
│   │   ├── AiNeuralMesh.tsx            # Interactive HTML5 Canvas neural mesh
│   │   ├── CropDiagnosisVisualizer.tsx # Interactive MobileNetV2 leaf pathology simulator
│   │   ├── CVModal.tsx                 # Printable & downloadable Curriculum Vitae modal
│   │   ├── D2CCommerceFlowGraphic.tsx  # Interactive D2C commerce intelligence flow graphic
│   │   ├── Footer.tsx                  # Recruiter-friendly footer with social links & copyright
│   │   ├── HireMeModal.tsx             # Interactive Hire Me modal with direct background dispatch
│   │   ├── Navbar.tsx                  # Sticky responsive navbar with mobile drawer
│   │   ├── ProjectCard.tsx             # Interactive project card with case study routes
│   │   ├── ScrollToTop.tsx             # Route change viewport reset handler
│   │   ├── ServiceCard.tsx             # D2C AI service card with practical use cases
│   │   ├── SkillsMotionGraphic.tsx     # Interactive AI tech constellation motion graphic
│   │   └── TechBadge.tsx               # Standardized technology badge chips
│   ├── data/                           # Structured datasets (strict content rules)
│   │   ├── projectsData.ts             # Deep case studies for ResolveX AI and Crop Health AI
│   │   ├── resumeData.ts               # Professional profile, highlights, and engineering principles
│   │   ├── servicesData.ts             # 5 core D2C AI services with business problems & use cases
│   │   └── skillsData.ts               # Grouped competencies & technical specializations
│   ├── pages/                          # Multi-page React Router route components
│   │   ├── AboutPage.tsx               # Engineering summary, philosophies & "What I Work With"
│   │   ├── ContactPage.tsx             # Contact form, direct email, LinkedIn, and dual CTAs
│   │   ├── HomePage.tsx                # Hero section, quick highlights, featured previews & CTAs
│   │   ├── NotFoundPage.tsx            # Branded 404 error page with navigation fallbacks
│   │   ├── ProjectCropHealth.tsx       # Detailed case study for Deep Learning Crop Health AI
│   │   ├── ProjectResolveX.tsx         # Detailed case study for ResolveX Autonomous Agentic AI
│   │   ├── ProjectsPage.tsx            # Project showcase with category filter pills
│   │   └── ServicesPage.tsx            # Detailed D2C AI services with implementation roadmap
│   ├── styles/                         # Style helpers and theme configurations
│   ├── App.tsx                         # Client-side router configuration & global providers
│   ├── index.css                       # Global Tailwind CSS imports, fonts & custom scrollbars
│   └── main.tsx                        # React application DOM entry point
├── .env.example                        # Environment variables template
├── .gitignore                          # Git ignore rules for node_modules and builds
├── index.html                          # Semantic HTML entry with SEO, OpenGraph & meta tags
├── metadata.json                       # Applet capability metadata
├── package.json                        # Project dependencies and build scripts
├── tsconfig.json                       # TypeScript compiler options
└── vite.config.ts                      # Vite build configuration with Tailwind plugin
```

---

## 🚀 Step-by-Step GitHub & Cloudflare Pages Deployment Guide

Follow these instructions to publish your portfolio online with a free `*.pages.dev` domain and automated CI/CD:

### Step 1: Create a GitHub Repository
1. Log into your GitHub account: [https://github.com](https://github.com/login).
2. Click the **+** (New) icon in the top right and select **New repository**.
3. Name your repository: `arsalan-portfolio` (or `portfolio`).
4. Set visibility to **Public**.
5. Do **not** initialize with a README, .gitignore, or license (these are already configured in this project).
6. Click **Create repository**.

### Step 2: Push the Project to GitHub
Open your local terminal in the project root directory and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "feat: complete modern portfolio website for Arsalan Mustafa Malik"

# 4. Set main branch
git branch -M main

# 5. Add your remote GitHub URL (replace with your actual GitHub username)
git remote add origin https://github.com/malik123arsalan/arsalan-portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 3: Connect the Repository to Cloudflare Pages
1. Log into your Cloudflare dashboard: [https://dash.cloudflare.com](https://dash.cloudflare.com).
2. On the left sidebar, navigate to **Compute (Workers & Pages)** -> **Workers & Pages**.
3. Click the **Create application** button.
4. Select the **Pages** tab and click **Connect to Git**.
5. Authenticate with your GitHub account and select your repository: `malik123arsalan/arsalan-portfolio`.
6. Click **Begin setup**.

---

### Step 4: Configure Build & Output Settings
Configure the build settings as follows:

| Field | Configuration Value |
|---|---|
| **Project Name** | `arsalan-mustafamalik` (or your preferred subdomain) |
| **Production Branch** | `main` |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `dist` |
| **Root Directory** | `/` (leave empty or default) |

*(Optional)* Under **Environment Variables**, set:
- `NODE_VERSION`: `20` or higher.

---

### Step 5: Deploy the Website with Free Cloudflare Pages URL
1. Click **Save and Deploy**.
2. Cloudflare Pages will run `npm install`, compile the Vite build into `/dist`, and distribute your site across Cloudflare's global edge network.
3. Once completed (typically < 45 seconds), Cloudflare will issue your live production URL:
   ```
   https://arsalan-mustafamalik.pages.dev
   ```
4. **Custom Domain (Optional)**: In the Cloudflare Pages project tab, click **Custom domains** to link your personal domain (e.g., `arsalanmustafamalik.com`) with automated free SSL.

> **Note on Client-Side Routing:** The `public/_redirects` file included in this project (`/* /index.html 200`) automatically prevents 404 errors when users refresh deep URLs like `/projects/resolvex-ai` or `/services`.

---

## 🖼️ Free Stock Image Recommendations (License-Free)

The website utilizes curated, license-free technology and domain imagery from Unsplash. If you wish to swap or augment them, here are free, high-resolution options:

| Page / Section | Recommended Subject | Free Unsplash / Pexels Photo URLs |
|---|---|---|
| **ResolveX AI Project** | Observability, Server Racks, Blue Network Lights | `https://images.unsplash.com/photo-1558494949-ef010cbdcc31` |
| **Crop Health AI Project** | Botany, Plant Leaf Pathology, Agricultural Tech | `https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8` |
| **D2C Automation Service** | Modern Robotics, Automated Workflows | `https://images.unsplash.com/photo-1485827404703-89b55fcc595e` |
| **Pricing Intelligence** | Real-time Market Analytics, Telemetry Graphs | `https://images.unsplash.com/photo-1551288049-bebda4e38f71` |
| **Content Automation** | Code Streams, AI Generative Pipelines | `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5` |
| **RAG Chatbots** | Digital Customer Experience & Retail Tech | `https://images.unsplash.com/photo-1556742049-0a67c5574f73` |
| **Reporting Dashboards** | Minimalist Neural Data Mesh, Data Visualization | `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe` |

---

## ✅ Pre-Deployment Testing Checklist

Run through this checklist before pushing live:

- [x] **Client-Side Routing**: Click through all pages (Home, About, Projects, ResolveX Case Study, Crop Health Case Study, Skills, D2C Services, Contact).
- [x] **Deep Linking & Refresh**: Refresh deep URLs (`/projects/resolvex-ai`, `/services`) to verify `_redirects` serves `index.html` without edge 404s.
- [x] **Mobile Responsiveness**: Verify hamburger menu toggle, mobile drawer links, and responsive grid folding on viewports $\le 375\text{px}$.
- [x] **Interactive Simulators**:
  - Test the **LangGraph State Machine Simulator** on `/projects/resolvex-ai` (click nodes or hit "Simulate Incident Walkthrough").
  - Test the **MobileNetV2 Leaf Pathology Simulator** on `/projects/crop-health-detection` (click through sample plants).
- [x] **CV Modal & Print PDF**: Click "Download CV" in the navbar or hero, verify modal rendering, and test "Save / Print PDF".
- [x] **Social & Contact Links**:
  - Email: `mailto:arsalanmustafamalik@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/arsalan-mustafa-malik`
  - GitHub: `https://github.com/malik123arsalan`
- [x] **Content Verification**: Confirm zero college/university names are mentioned, and zero fake awards/metrics exist.
- [x] **Compilation**: Verify build completes with zero errors (`npm run build`).

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run type check and lint
npm run lint

# Compile production build
npm run build
```

---

© 2026 Arsalan Mustafa Malik. Built for high-impact production AI systems.
