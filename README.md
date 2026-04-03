# 🚀 Waqas Fazal — AI Engineer & Data Scientist Portfolio

A modern, responsive single-page portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**. Featuring smooth Framer Motion animations, dark theme with emerald/teal accents, and a glassmorphism design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- **Fixed Navigation** — Glassmorphism sticky navbar with active section highlighting and mobile hamburger menu
- **Hero Section** — Full-viewport hero with typing animation for roles, gradient background, and CTA buttons
- **About Section** — Professional bio, key stats (experience, projects, clients), and skill badges
- **Skills Section** — 8 animated skill cards with proficiency bars (Python, ML, Deep Learning, NLP, etc.)
- **Projects Section** — 3 project showcase cards with thumbnails, tech stack badges, and live demo links
- **Contact Section** — Contact form + info panel with email, phone, location, and social media links
- **Footer** — Multi-column footer with quick links, services, social icons, and back-to-top button
- **Animations** — Scroll-triggered Framer Motion animations throughout
- **Responsive** — Fully responsive mobile-first design
- **Dark Theme** — Elegant dark theme with emerald/teal accent colors

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript 5** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first CSS styling |
| **shadcn/ui** | Pre-built UI component library |
| **Framer Motion** | Animations and transitions |
| **Lucide React** | Icon library |
| **Bun** | Fast JavaScript runtime & package manager |

---

## 📂 Project Structure

```
waqas-fazal-portfolio/
├── public/                          # Static assets
│   ├── avatar.png                   # Profile photo
│   ├── project1.png                 # Smart PDF Platform screenshot
│   ├── project2.png                 # House Price Predictor screenshot
│   ├── project3.png                 # EchoCare Chatbot screenshot
│   └── logo.svg                     # Favicon
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main page (assembles all sections)
│   │   ├── layout.tsx               # Root layout with metadata
│   │   └── globals.css              # Global styles & dark theme
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── Navbar.tsx           # Fixed navigation bar
│   │   │   ├── Hero.tsx             # Hero section with typing effect
│   │   │   ├── About.tsx            # About me section
│   │   │   ├── Skills.tsx           # Skills grid with progress bars
│   │   │   ├── Projects.tsx         # Projects showcase
│   │   │   ├── Contact.tsx          # Contact form & info
│   │   │   └── Footer.tsx           # Footer with back-to-top
│   │   └── ui/                      # shadcn/ui components
│   ├── hooks/                       # Custom React hooks
│   └── lib/                         # Utility functions
├── prisma/                          # Database schema (not used in portfolio)
├── next.config.ts                   # Next.js configuration
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.mjs               # PostCSS configuration
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

1. **Node.js** (v18 or higher) — [Download here](https://nodejs.org)
2. **Bun** (latest) — [Download here](https://bun.sh)
   ```bash
   # Install Bun on macOS / Linux
   curl -fsSL https://bun.sh/install | bash

   # Install Bun on Windows
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

### Installation

```bash
# 1. Extract the ZIP file (if not already extracted)
unzip waqas-fazal-portfolio.zip

# 2. Navigate into the project directory
cd waqas-fazal-portfolio

# 3. Install all dependencies
bun install

# 4. Start the development server
bun run dev
```

### View the Portfolio

Open your browser and navigate to:

```
http://localhost:3000
```

The site will automatically reload when you make changes to the source files.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

[Vercel](https://vercel.com) is the recommended platform for deploying Next.js projects. It's free and requires zero configuration.

**Steps:**

1. Create a [GitHub](https://github.com) account if you don't have one
2. Push your portfolio code to a new GitHub repository:
   ```bash
   # Initialize git
   git init
   git add .
   git commit -m "Initial commit: Waqas Fazal Portfolio"

   # Create a repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and sign up with GitHub
4. Click **"New Project"** → Select your repository → Click **"Deploy"**
5. Your portfolio will be live at: `your-project-name.vercel.app`

### Deploy to Netlify

1. Run the build command:
   ```bash
   bun run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` output folder
4. Your site will be live instantly

---

## 🎨 Customization Guide

### Change Profile Photo

Replace the file at `public/avatar.png` with your own photo (recommended: 1024x1024px, PNG/JPG).

### Change Project Screenshots

Replace the files in the `public/` folder:
- `public/project1.png` — First project screenshot (1344x768px recommended)
- `public/project2.png` — Second project screenshot
- `public/project3.png` — Third project screenshot

### Edit Personal Information

All personal data is in `src/components/portfolio/`:

| File | What to Edit |
|------|-------------|
| `Navbar.tsx` | Logo initials (search for `WF`) |
| `Hero.tsx` | Name, roles (typing animation), tagline |
| `About.tsx` | Bio paragraphs, stats, skill badges |
| `Skills.tsx` | Skill names, proficiency %, descriptions |
| `Projects.tsx` | Project titles, descriptions, URLs, tech stack |
| `Contact.tsx` | Email, phone, location, social media links |
| `Footer.tsx` | Name, services list, email, social links |
| `layout.tsx` | Page title and SEO description |

### Change Theme Colors

Edit the CSS variables in `src/app/globals.css` under the `:root` and `.dark` sections to change the color scheme.

---

## 📞 Contact

- **Email:** waqasfazal0344@gmail.com
- **Phone:** +92 344 5093404
- **Location:** Rawalpindi, Pakistan
- **GitHub:** [github.com/waqaskhan333421](https://github.com/waqaskhan333421)
- **LinkedIn:** [linkedin.com/in/waqasfazal](https://www.linkedin.com/in/waqasfazal)
- **Twitter:** [@waqas_ai](https://twitter.com/waqas_ai)

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">
  Built with ❤️ by <strong>Waqas Fazal</strong> using Next.js, TypeScript & Tailwind CSS
</p>
