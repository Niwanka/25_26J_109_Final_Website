# Final Year Project Website — Build Spec

## Overview

Build a **React + Vite** single-page application with client-side routing. Host on **Vercel**. The site is for a university final year project group and must look professional, modern, and consistent across all pages.

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Hosting**: Vercel (connect GitHub repo, auto-deploy)

---

## Project Setup Commands

```bash
npm create vite@latest my-project-site -- --template react
cd my-project-site
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
```

Configure `tailwind.config.js` content paths:
```js
content: ["./index.html", "./src/**/*.{js,jsx}"]
```

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Domain.jsx
│   ├── Milestones.jsx
│   ├── Documents.jsx
│   ├── Presentations.jsx
│   ├── AboutUs.jsx
│   └── ContactUs.jsx
├── App.jsx
└── main.jsx
```

---

## App.jsx — Routing Setup

Use React Router v6. Wrap all routes inside `<BrowserRouter>`. Every page shares the same `<Navbar />` and `<Footer />`.

Routes:
- `/` → Home
- `/domain` → Domain
- `/milestones` → Milestones
- `/documents` → Documents
- `/presentations` → Presentations
- `/about` → About Us
- `/contact` → Contact Us

---

## Design System

- **Primary color**: Indigo / deep blue (e.g. `indigo-700`, `indigo-600`)
- **Accent**: Sky blue or teal
- **Background**: White with light gray sections (`gray-50`)
- **Font**: System default sans-serif (Tailwind default)
- **Card style**: White background, rounded-xl, subtle shadow (`shadow-md`)
- **Consistent section padding**: `py-16 px-6` or `py-20 px-8`
- All pages must have a **page hero** at the top — a full-width banner with the page title and a short subtitle, using an indigo gradient background and white text.

---

## Component: Navbar

- Fixed to top, full width, white background with subtle bottom border and shadow
- Left side: **Project name/logo** (e.g. "ProjectName | FYP 2025") — clicking goes to `/`
- Right side: horizontal nav links for all 7 pages
- Active link should be highlighted (e.g. `text-indigo-600 font-semibold`)
- On mobile: hamburger menu that shows a dropdown of all links
- Nav links: Home, Domain, Milestones, Documents, Presentations, About Us, Contact Us

---

## Component: Footer

- Dark background (`gray-900`), white text
- Three columns: Project Info, Quick Links, Contact
- Bottom bar: copyright line — "© 2025 [Project Name]. All rights reserved."
- Keep it clean and minimal

---

## Page: Home (`/`)

### Sections (in order):

**1. Hero**
- Full-width, tall section with indigo-to-blue gradient background
- Large project title (H1), a one-paragraph abstract/description of the project
- Two CTA buttons: "View Documents" and "Meet the Team"
- Optional: a relevant illustration or graphic on the right side

**2. Project Highlights**
- 3 or 4 cards in a grid
- Each card has an icon (Lucide), a bold title, and 1–2 sentences
- Example cards: Research Problem, Objectives, Methodology, Technologies

**3. Team Preview**
- A horizontal strip showing team member avatars (or initials in colored circles), names, and roles
- A "Meet the Full Team →" link to `/about`

**4. Quick Links**
- Row of icon-buttons linking to Documents, Presentations, Milestones

---

## Page: Domain (`/domain`)

### Sections (in order, each as its own card or section):

- **Literature Survey** — A few paragraphs summarizing prior work and references
- **Research Gap** — What problem exists that current work doesn't solve
- **Research Problem** — Clear statement of the problem being addressed
- **Research Objectives** — Numbered list of 3–5 objectives
- **Methodology** — Step-by-step or diagram-style explanation of the approach
- **Technologies Used** — Badge/chip grid of all tools and frameworks used (e.g. React, Python, TensorFlow, etc.)

Use a left-side sticky navigation (table of contents) on desktop so users can jump between sections. On mobile, show sections stacked vertically.

---

## Page: Milestones (`/milestones`)

- Top: a **dropdown menu** to select which milestone to view
- Milestones list:
  1. Project Proposal
  2. Progress Presentation 1
  3. Progress Presentation 2
  4. Final Assessment
  5. Viva

- Each milestone card/panel shows:
  - Milestone name (bold, large)
  - Description of what was assessed
  - Date of assessment
  - Marks allocated (e.g. "20% of total grade")
  - Status badge: `Completed` (green) / `Upcoming` (gray) / `In Progress` (amber)

- Also show a **visual timeline** — a vertical stepper with connecting lines, each step being a milestone. Completed steps are filled in green, upcoming are outlined gray.

---

## Page: Documents (`/documents`)

- Group documents into categories shown as labeled sections:
  - Project Charter
  - Proposal Document
  - Checklist Documents
  - Final Documents

- Each document is a row/card with:
  - Document icon (Lucide `FileText`)
  - Document name
  - Status badge: `Available` (green) or `Pending` (gray)
  - If available: a "View" link button that opens the Google Drive / external link in a new tab
  - If pending: a disabled/grayed-out button labeled "Coming Soon"

- At the top, add a note: "Click 'View' to open the document in Google Drive. Documents marked Pending will be uploaded after submission."

---

## Page: Presentations (`/presentations`)

- Show a grid of presentation cards
- Presentations:
  1. Proposal Presentation
  2. Progress Presentation 1
  3. Progress Presentation 2
  4. Final Presentation

- Each card shows:
  - Presentation title
  - Date presented
  - A thumbnail (placeholder image or slide icon)
  - Status: `Available` or `Upcoming`
  - "View Slides" button — links to Google Slides or PDF in new tab

- Leave placeholder slots (grayed out) for future presentations not yet uploaded

---

## Page: About Us (`/about`)

- Page hero with title "Meet the Team"
- Team member grid — 2 or 3 columns on desktop, 1 on mobile
- Each team member card:
  - Photo (or avatar with initials in a colored circle if no photo)
  - Full name (bold)
  - Role / Designation (e.g. "Team Lead", "Frontend Developer")
  - University ID or index number
  - Email address (with mailto: link)
  - Optional: LinkedIn icon link

- Below the team section:
  - Brief "About Our Project" section — 2–3 sentences on the project context, university, and department

---

## Page: Contact Us (`/contact`)

- Two columns on desktop, stacked on mobile

**Left column — Contact Info:**
- General email address
- Phone number (optional)
- University / Department name
- Social or project links (GitHub repo link, etc.)

**Right column — Contact Form:**
- Fields: Name, Email, Subject, Message
- Submit button (styled in indigo)
- Note: Wire the form to **Formspree** (free, no backend needed) — sign up at formspree.io, get a form endpoint URL, and POST to it
- Show a success message after submission: "Thanks! We'll get back to you soon."

---

## Hosting on Vercel

1. Push the project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" → import the GitHub repo
4. Vercel auto-detects Vite — no config needed
5. Click Deploy
6. You get a live URL like `https://your-project.vercel.app`
7. Every push to `main` auto-redeploys

**Important:** Add a `vercel.json` file in the project root for React Router to work correctly:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Content Placeholders

Replace all placeholder text marked with `[ ]` with real content:

| Placeholder | Replace with |
|---|---|
| `[Project Name]` | Your actual project title |
| `[Project Abstract]` | Your project abstract (from proposal) |
| `[Team Member 1]` | Real names and roles |
| `[Document Link]` | Google Drive shareable links |
| `[Presentation Link]` | Google Slides / PDF links |
| `[Formspree URL]` | Your Formspree form endpoint |
| `[GitHub Repo]` | Your GitHub repo URL |
| `[University]` | Your university and department name |

---

## Notes & Constraints

- Keep all images optimized and small (no large files — max 20MB total site assets)
- Do not use heavy animation libraries — keep it fast
- Make the site fully **mobile responsive**
- All external links (documents, slides) must open in a **new tab** (`target="_blank"`)
- Navigation must be **consistent** on every page — same Navbar and Footer everywhere
- Use **React Router `<Link>`** for internal navigation, not `<a>` tags
