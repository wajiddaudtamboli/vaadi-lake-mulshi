<p align="center">
  <img src="src/assets/Vaadi LOGO PNG (1)/Vaadi LOGO PNG.png" alt="Vaadi Logo" width="120"/>
</p>

<h1 align="center">Vaadi</h1>
<p align="center"><em>Where Luxury Meets Nature</em></p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#team">Team</a>
</p>

---

## Overview

Vaadi represents the pinnacle of luxury resort living — a meticulously crafted digital experience that mirrors the elegance and sophistication of the physical property. This landing page serves as the gateway to discovering premium villas, world-class amenities, and an unparalleled lifestyle nestled in nature.

Built with precision and attention to detail, every pixel has been carefully placed to reflect the brand's commitment to excellence. The design follows the official Figma specifications provided by Idealizeer Content Solutions, ensuring complete visual fidelity.

---

## Features

**Immersive Visual Experience**
- Full-screen hero section with embedded video
- Smooth scroll animations and transitions
- High-quality image galleries with hover effects

**Responsive Design**
- Seamless experience across desktop, tablet, and mobile
- Phone landscape mode optimization
- Touch-friendly interactions for mobile users

**Performance Optimized**
- Lazy loading for images and videos
- Code splitting for faster initial load
- Optimized asset delivery

**Modern Architecture**
- Component-based structure for maintainability
- Clean separation of concerns
- Reusable UI components

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Library |
| **Vite 7** | Build Tool & Dev Server |
| **CSS3** | Styling with CSS Variables |
| **Vercel** | Hosting & Deployment |

---

## Project Structure

```
vaadi-travel/
├── public/
├── src/
│   ├── assets/              # Images, videos, and media files
│   ├── components/          # Reusable UI components
│   │   ├── AboutSection/
│   │   ├── Amenities/
│   │   ├── Footer/
│   │   ├── Founder/
│   │   ├── Gallery/
│   │   ├── GoogleReviews/
│   │   ├── HeroSection/
│   │   ├── InteriorShowcase/
│   │   ├── Navbar/
│   │   ├── ReimagineLiving/
│   │   ├── Reviews/
│   │   ├── VideoSection/
│   │   ├── VillaShowcase/
│   │   └── WelcomeSection/
│   ├── pages/               # Page components
│   ├── styles/              # Global styles and variables
│   ├── utils/               # Helper functions and constants
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vaadi-website.git
   cd vaadi-website/vaadi-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## Deployment

This project is configured for seamless deployment on Vercel.

**Option 1: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2: GitHub Integration**
1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect the Vite configuration

**Option 3: Manual Deployment**
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

---

## Sections Implemented

| Section | Description |
|---------|-------------|
| Navbar | Fixed navigation with responsive menu |
| Hero | Full-screen video with CTA |
| About | Brand story with floating card |
| Welcome | Property overview with image labels |
| Villa Showcase | Exterior villa presentation |
| Interior Showcase | Interior design highlights |
| Video Section | Full-width video banner |
| Amenities | Grid layout of property amenities |
| Founder | Visionary message section |
| Gallery | Masonry-style image gallery |
| Reviews | Customer testimonials carousel |
| Google Reviews | Third-party review integration |
| Reimagine Living | Lifestyle imagery section |
| Footer | Contact info and site links |

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Safari | ✅ iOS 14+ |
| Chrome Android | ✅ Latest |

---

## Team

<table>
  <tr>
    <td align="center">
      <strong>Wajid Daud Tamboli</strong><br/>
      <sub>Full Stack Developer</sub>
    </td>
    <td align="center">
      <strong>Saqib Patel</strong><br/>
      <sub>Backend Developer</sub>
    </td>
  </tr>
</table>

---

## Organization

<p align="center">
  <strong>Idealizeer Content Solutions</strong><br/>
  Pune, Maharashtra
</p>

---

## License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

© 2026 Idealizeer Content Solutions, Pune. All rights reserved.

---

