# GTA VI Landing Page

🚀 **Live Demo:** [https://gta6-landing-two.vercel.app/](https://gta6-landing-two.vercel.app/)

A stunning, interactive landing page for Grand Theft Auto VI built with React, Vite, and GSAP animations. This project showcases advanced scroll-triggered animations, video integration, and modern web development techniques.

## 🎮 Features

- **Scroll-Triggered Animations**: Smooth GSAP animations that respond to user scroll
- **Video Integration**: Multiple video sections with custom playback controls
- **Character Showcases**: Dedicated sections for Jason and Lucia characters
- **Interactive Navigation**: Smooth scrolling navigation with animated transitions
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Built with Vite for fast loading and development

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS3 with custom properties
- **Deployment**: Vercel
- **Code Quality**: ESLint for code linting

## 📁 Project Structure

```
gta6-landing/
├── public/
│   ├── fonts/                 # Custom fonts (long.woff, round.woff, round-bold.woff)
│   ├── images/               # All image assets
│   │   ├── hero-bg.webp      # Hero section background
│   │   ├── hero-text.svg     # Hero text graphics
│   │   ├── jason-*.webp      # Jason character images
│   │   ├── lucia-*.webp      # Lucia character images
│   │   ├── logo.webp         # GTA VI logo
│   │   └── ...               # Other UI elements
│   └── videos/               # Video assets
│       ├── output1.mp4       # First video section
│       ├── output2.mp4       # Second video section
│       ├── output3.mp4       # Third video section
│       └── postcard-vd.mp4   # Postcard video
├── src/
│   ├── sections/             # React components for each section
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── NavBar.jsx        # Navigation component
│   │   ├── FristVideo.jsx    # First video section with scroll animation
│   │   ├── SecondVideo.jsx   # Second video section
│   │   ├── Jason.jsx         # Jason character showcase
│   │   ├── Lucia.jsx         # Lucia character showcase
│   │   ├── PostCard.jsx      # Postcard section
│   │   ├── ComingSoon.jsx    # Coming soon section
│   │   ├── Final.jsx         # Final section
│   │   └── Outro.jsx         # Outro section
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── constants/
│   └── index.js              # Application constants
├── eslint.config.js          # ESLint configuration
├── vite.config.js            # Vite build configuration
├── package.json              # Dependencies and scripts
└── index.html                # HTML entry point
```

## 🎬 Animation Details

### First Video Section (`FristVideo.jsx`)

- **Scroll Trigger**: Activates when section comes into view
- **Timeline**:
  1. Fades out hero section
  2. Fades in video wrapper
  3. Scrubs video playback based on scroll position
- **Pin Effect**: Section stays fixed during scroll animation
- **Video Control**: Custom currentTime manipulation for scroll-synced playback

### Key GSAP Features Used

- **ScrollTrigger**: For scroll-based animations
- **Timeline**: For sequenced animations
- **Pin**: To fix elements during scroll
- **Scrub**: For smooth scroll-synced animations
- **Ease**: Custom easing functions (power1.inOut)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rifate-nur-shawn/gta6-landing.git
   cd gta6-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📦 Dependencies

### Core Dependencies

- **react**: ^18.x - UI library
- **react-dom**: ^18.x - DOM rendering for React
- **gsap**: Latest - Animation library
- **@gsap/react**: Latest - React hooks for GSAP

### Development Dependencies

- **@vitejs/plugin-react**: Vite React plugin
- **vite**: Build tool and dev server
- **eslint**: Code linting
- **@eslint/js**: ESLint JavaScript rules
- **eslint-plugin-react**: React-specific linting rules
- **eslint-plugin-react-hooks**: React hooks linting
- **eslint-plugin-react-refresh**: React Fast Refresh linting
- **globals**: Global variables for ESLint

## 🎨 Design Features

### Typography

- Custom fonts: Long, Round, and Round Bold variants
- Optimized font loading with .woff format

### Media Assets

- **Images**: WebP format for optimal performance
- **Videos**: MP4 format with proper compression
- **Graphics**: SVG for scalable vector graphics

### Performance Optimizations

- Lazy loading for videos with `preload="auto"`
- WebP image format for smaller file sizes
- Vite's built-in code splitting and optimization

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)

- React plugin setup
- Build optimizations
- Asset handling

### ESLint Configuration (`eslint.config.js`)

- Code quality rules
- React-specific linting
- Modern JavaScript standards

## 🚀 Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

### Deployment Steps

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

## 🎮 Sections Overview

1. **Hero**: Landing section with main title and background
2. **Navigation**: Sticky navigation with smooth scroll links
3. **First Video**: Scroll-triggered video with timeline animation
4. **Second Video**: Additional video content
5. **Jason Character**: Character showcase with interactive elements
6. **Lucia Character**: Character showcase with interactive elements
7. **PostCard**: Special postcard section
8. **Coming Soon**: Release information section
9. **Final**: Pre-outro content
10. **Outro**: Closing section

## 🐛 Common Issues & Solutions

### Video Not Appearing

- Ensure video files exist in `/public/videos/`
- Check GSAP ScrollTrigger is properly registered
- Verify video has `autoplay` attribute for mobile compatibility
- Check initial opacity settings in GSAP animations

### Animation Issues

- Ensure GSAP plugins are imported and registered
- Check scroll trigger start/end points
- Verify element selectors match DOM structure

### Performance Issues

- Optimize video file sizes
- Use WebP images instead of JPG/PNG
- Implement lazy loading for off-screen content

## 📄 License

This project is created for educational and portfolio purposes.

## 👨‍💻 Author

**Rifate Nur Shawn**

- GitHub: [@Rifate-nur-shawn](https://github.com/Rifate-nur-shawn)
- Project: [GTA VI Landing Page](https://gta6-landing-two.vercel.app/)

---

_Built with ❤️ using React, GSAP, and modern web technologies_
