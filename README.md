## Personal Portfolio Website
- A stunning, animated portfolio website for a Full-Stack Engineer & Scrum Master, built with React, Tailwind CSS, and Framer Motion.

## Features

# Smooth Animations: 
- Floating bubbles, parallax scrolling, fade-ins, and scroll-triggered reveals
# Glassmorphism Design: 
- Modern fluid glass effects with iridescent backgrounds
# Interactive Components:
- Sticky navigation with scroll progress
- Animated skill progress bars
- Hover effects with glare and magnetic attraction
- Flippable business card
- Working contact form


- Fully Responsive: Mobile, tablet, and desktop optimized
- Performance Optimized: Smooth 60fps animations
- Accessible: ARIA labels and keyboard navigation

# Tech Stack

- React 18 - UI framework
- Vite - Build tool
- Tailwind CSS - Styling
- Lucide React - Icons
- Framer Motion - Animations


## Project Structure
portfolio/
├── public/
│   └── profile.jpg             # Profile picture
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # Hero section with profile
│   │   ├── Navigation.jsx      # Sticky nav with progress bar
│   │   ├── Projects.jsx        # Project showcase cards
│   │   ├── Skills.jsx          # Animated skill bars
│   │   ├── Timeline.jsx        # Experience timeline
│   │   ├── Contact.jsx         # Contact form
│   │   ├── BusinessCard.jsx    # Flippable business card
│   │   └── FloatingBubbles.jsx # Animated background bubbles
│   ├── hooks/
│   │   └── useScrollProgress.js # Scroll hooks
│   ├── data/
│   │   └── portfolioData.js    # All content data
│   ├── styles/
│   │   └── animations.css      # Custom animations
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html

# Customization
# Colors
- javascriptcolors: {
  primary: {
    dark: '#0a192f',      # Background
    light: '#112240',     # Cards
    accent: '#64ffda',    # Accent color
    text: '#8892b0',      # Text color
  }
}

# Animations

- Animation durations
- Easing functions
- Hover effects
- Custom keyframes

# License
- MIT License 

# Contributing
- Contributions welcome! Please open an issue or submit a PR.

# Contact
- Questions? Reach out via the contact form on the portfolio!