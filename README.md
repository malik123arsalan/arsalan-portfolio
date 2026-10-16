# Arsalan Mustafa Malik — Personal Portfolio Website

A modern, high-performance, multi-page personal portfolio website for **Arsalan Mustafa Malik**, Agentic AI Developer and AI Automation Developer for D2C Brands.

- 🌐 **Live Website:** [https://arsalan-ai-developer.vercel.app](https://arsalan-ai-developer.vercel.app)
- 🤖 **Core AI & Backend Engine:** Python 3.11, FastAPI, LangGraph, ChromaDB, TensorFlow
- 💻 **Frontend Architecture:** Modern React SPA with responsive Tailwind CSS & client-side routing
- ⚡ **Hosting & Edge Deployment:** **Vercel** (Automated Git CI/CD, Free Lifetime Hosting & Domain)
- 🔒 **Security & Privacy:** `.env` files protected by `.gitignore`

---

## 📁 Complete Folder Structure

```text
├── backend/                            # Native Python FastAPI backend
│   ├── main.py                         # FastAPI endpoints: /api/contact, /api/hire, /api/agent/run
│   └── requirements.txt                # Python dependencies (FastAPI, LangGraph, ChromaDB)
├── run.py                              # One-click Python launcher script
├── vercel.json                         # Vercel SPA client-side routing configuration
├── public/
│   └── _redirects                      # SPA client-side routing fallback
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
│   ├── data/                           # Structured datasets
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
├── .gitignore                          # Git ignore rules for node_modules and .env files
├── index.html                          # Semantic HTML entry with SEO, OpenGraph & meta tags
├── metadata.json                       # Applet capability metadata
├── package.json                        # Project dependencies and build scripts
├── tsconfig.json                       # TypeScript compiler options
└── vite.config.ts                      # Vite build configuration with Tailwind plugin
```

---

## 🚀 Git & Vercel Continuous Deployment Guide

Because your repository is linked with Vercel, every time you push code to GitHub, Vercel automatically builds and deploys your website within 30 seconds!

### Step 1: Push Code from Terminal
Whenever you make changes, run these 3 simple commands in your project terminal:

```bash
# 1. Stage all changes (protected files like .env remain safe via .gitignore)
git add .

# 2. Commit your changes
git commit -m "Update portfolio features and documentation"

# 3. Push to your GitHub main branch
git push origin main
```

### Step 2: Vercel Auto-Deployment
- Vercel listens to the `main` branch.
- As soon as the push is received, Vercel triggers a new build.
- The build uses `npm run build` and places the output into `dist`.
- `vercel.json` rewrites guarantee that visiting `/about`, `/projects`, or `/services` directly will never throw 404 errors.

---

## ❓ Frequently Asked Questions

### 1. Vercel free hosting aur free domain kyu deta hai?
Vercel ka business model **"Freemium"** hota hai. 
- Individual developers, students aur open-source creators ke liye Vercel ka **Hobby Plan** 100% Free hota hai taaki developers unka platform use karein.
- Jab yahi developers badi startups ya enterprises banate hain jahan millions of hits aur private enterprise team collaboration chahiye hoti hai, tab wo paid Pro / Enterprise plans lete hain.
- Isliye personal portfolios, showcase apps aur side projects ke liye Vercel lifetime free rehta hai.

### 2. Hum kitne projects Vercel par free host kar sakte hain?
- Vercel Hobby plan par aap **Unlimited personal repositories / projects** free host kar sakte hain (Fair use policy ke mutabiq).
- Har project ko apna alag free `*.vercel.app` domain milta hai.

### 3. Kya mera portfolio hamesha live rahega ya delete ho jayega?
- **Yeh 100% Lifetime Permanent hai!**
- Yeh kabhi apne aap expire ya delete nahi hoga jab tak aap khud Vercel dashboard se isse delete na karein ya apna GitHub repo delete na karein.
- Iska SSL certificate (HTTPS 🔒) bhi Vercel automatically renew karta rehta hai.

---

## 🛠️ Local Development & Running

### Frontend Dev Server:
```bash
# Install dependencies
npm install

# Start local development server (Port 3000)
npm run dev
```

### Native Python Backend:
```bash
# Run one-click Python backend launcher
python run.py
```

---

## ✅ Pre-Deployment Testing Checklist

- [x] **Client-Side Routing**: Click through all pages (Home, About, Projects, Case Studies, Skills, D2C Services, Contact).
- [x] **Deep Linking & Refresh**: Refresh deep URLs (`/projects/resolvex-ai`, `/services`) to verify `vercel.json` serves `index.html` without 404s.
- [x] **Mobile Responsiveness**: Verify hamburger menu toggle, mobile drawer links, and responsive grid folding.
- [x] **Interactive Simulators**:
  - Test the **LangGraph State Machine Simulator** on `/projects/resolvex-ai`.
  - Test the **MobileNetV2 Leaf Pathology Simulator** on `/projects/crop-health-detection`.
- [x] **Universal CV Modal**: Open CV modal from any page, test "Print / Save PDF".
- [x] **Direct Dispatch & Contact**: Forms and email triggers routed directly to `arsalanmustafamalik@gmail.com`.
- [x] **Secrets Protection**: `.env` and sensitive files excluded via `.gitignore`.

---

© 2026 Arsalan Mustafa Malik. Built for high-impact production AI systems.
