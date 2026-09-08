# Manas Muddam — Portfolio Website

A premium personal portfolio website built for placements, internships, and Mahindra Day 2026.

**Live preview:** Open `index.html` in a browser or run `python -m http.server 8080` and visit `http://localhost:8080`

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript — zero dependencies
- Deploys instantly to GitHub Pages with no build step
- Google Fonts (Inter, Playfair Display, JetBrains Mono)

## File Structure

```
├── index.html                 # Main single-page portfolio
├── css/
│   ├── base.css               # Variables, reset, typography
│   ├── layout.css             # Grid, containers, responsive
│   ├── components.css         # Nav, buttons, timeline, marquee
│   ├── sections.css           # All section styles
│   ├── projects.css           # Project detail page styles
│   └── animations.css         # Scroll reveals, reduced motion
├── js/
│   ├── data.js                # ★ ALL CONTENT CONFIG — edit this first
│   ├── animations.js          # Scroll reveal system
│   ├── app.js                 # Navigation, scroll, mobile menu
│   └── projects.js            # Project card interactions
├── projects/
│   ├── dholavira.html         # Project detail pages
│   ├── baigan-ka-dil.html
│   ├── coxist.html
│   ├── aether.html
│   ├── bark-to-home.html
│   └── fallen-grace.html
└── assets/
    ├── images/projects/       # Project images (see below)
    ├── videos/projects/       # Project videos
    ├── experience/            # Experience section visuals
    ├── resume/                # Resume PDF
    └── favicon/               # Favicon files
```

## Adding Assets

### Resume
Place your resume PDF at:
```
assets/resume/Manas_Muddam_Resume.pdf
```

### Favicon
Place favicon files at:
```
assets/favicon/favicon.ico
assets/favicon/og-image.png    (1200x630 for social sharing)
```

### Project Images
Each project has its own directory:
```
assets/images/projects/dholavira/
  ├── thumbnail.webp
  ├── hero.webp
  ├── 01.webp
  └── ...
```

### Replacing Placeholders with Real Images

On the main page, replace placeholder divs with img tags:
```html
<!-- BEFORE -->
<div class="work__project-placeholder work__project-placeholder--01"></div>

<!-- AFTER -->
<img src="assets/images/projects/dholavira/thumbnail.webp"
     alt="Dholavira 3D" loading="lazy">
```

On project detail pages, replace hero and gallery placeholders similarly.

## Updating Content

Edit `js/data.js` — all portfolio data is centralized there.

## Deployment to GitHub Pages

1. Push to a GitHub repository
2. Settings > Pages > Deploy from branch > main / root
3. Site goes live at `https://username.github.io/repo-name`

## Accessibility

- Keyboard focus styles on all interactive elements
- Semantic HTML with proper heading hierarchy
- `prefers-reduced-motion` disables all animations
- ARIA labels on navigation toggle
- Sufficient color contrast ratios
