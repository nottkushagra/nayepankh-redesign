# NayePankh Foundation Redesign

A premium, modern web application redesign for the **NayePankh Foundation** NGO website. Built using Next.js 15, React 19, TypeScript, and TailwindCSS.

This website aims to look closer to a premium tech startup or award-winning landing page than a typical NGO template, keeping the design accessible, extremely fast, and appropriate for a nonprofit organization.

---

## 🚀 Key Features

* **Modern Layout**: Premium glassmorphism navbar, card hover dynamics, dark mode support.
* **NGO Operations**: Sections for Volunteers, Internships, Programs, and FAQ.
* **AI Chat Assistant**: Built-in floating chat widget that provides streaming replies to questions about the foundation.
* **High Performance**: 60 FPS animations, lazy loaded images, and responsive layout.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **UI & Components**: [React 19](https://react.dev/), [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
* **Styling**: [TailwindCSS](https://tailwindcss.com/)
* **Languages**: [TypeScript](https://www.typescriptlang.org/)
* **State Management / AI**: Vercel AI SDK

---

## 🌟 Premium Interactions & Animation Requirements

This website should feel **alive** and modern. Every interaction should feel smooth, intentional, and polished while maintaining excellent performance.

### 📐 Animation Libraries
* **Framer Motion** for state transitions and entrance animation.
* **GSAP** (only where it provides clear value).
* **Lenis** (or similar smooth-scrolling library) for buttery-smooth scrolling.
* **React Intersection Observer** for scroll-triggered viewport animations.

### 🎨 Key Interactive Design Details
* **Hero Section**: Animated gradient/particle backgrounds, staggered text entrance, and mouse-parallax.
* **Scroll Animations**: Viewport entrance animations (fade, scale, slide, stagger, blur-to-clear).
* **Cards & Buttons**: Soft glow, animated borders, subtle tilt, click ripple effects, magnetic cursor hover transitions.
* **Statistics**: Auto count-up numbers when visible.
* **Premium AI Assistant**: Smooth floating chat widget, collapse/expand transitions, typing indicators, streaming responses, and message auto-scroll.
* **Testimonials**: Auto-rotating carousel with touch/swipe support.
* **Form UX**: Floating labels, real-time validations, shake animations for errors.

---

## 💻 Getting Started

### 📋 Prerequisites
Make sure you have Node.js (version 18+) installed.

### ⚙️ Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```text
├── app/                  # Next.js routes and pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── internship/       # Internship application page
│   ├── programs/         # Programs listing
│   └── volunteer/        # Volunteer sign-up page
├── components/           # Reusable UI components
│   ├── ui/               # Core atomic elements
│   ├── navbar.tsx        # Responsive navigation
│   ├── footer.tsx        # Footer layout
│   └── chat-widget.tsx   # AI Chat Widget
├── lib/                  # Site data and helper utilities
└── public/               # Static assets (images, logos)
```
