# Saddock Kabandana - 3D Portfolio

A stunning, interactive 3D portfolio website built with Next.js, React, Three.js, and modern web technologies. Features immersive 3D graphics, an AI chatbot, comprehensive blog system, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-orange?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Visual & Interactive**
- **3D Models & Animations**: Interactive 3D models including wizard, coin, staff, hat, magic stick, and astronomical pocket set
- **Glass Morphism Design**: Modern glass morphism effects with backdrop blur and transparency
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dynamic Backgrounds**: Unique atmospheric backgrounds for each page
- **Smooth Animations**: Framer Motion powered animations and transitions

### 🤖 **AI Chatbot**
- **Intelligent Assistant**: AI-powered chatbot answering questions about Saddock, Three.js, web development
- **Knowledge Base**: Comprehensive responses about projects, skills, and technologies
- **Quick Questions**: Suggested questions for easy interaction
- **Real-time Typing**: Animated typing indicators for natural conversation flow

### 📝 **Blog System**
- **Dynamic Blog Pages**: Full-featured blog system with rich content
- **Image Optimization**: Next.js Image component for optimized loading
- **SEO Friendly**: Proper meta tags, structured data, and clean URLs
- **Responsive Cards**: Beautiful blog cards with hover effects and animations

### 🎯 **Core Functionality**
- **Interactive Navigation**: Circular navigation with glass morphism effects
- **Contact Form**: Functional contact form with Email.js integration
- **Skill Showcase**: Dynamic skill icons and GitHub statistics
- **Project Gallery**: Comprehensive project showcase with live demos
- **Performance Optimized**: 95/100 Lighthouse score with optimized assets

## 🏗️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions

### **3D Graphics**
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **GLTF/GLB** - Optimized 3D model format

### **Styling & UI**
- **Lucide React** - Beautiful icon library
- **Glass Morphism** - Modern UI design pattern
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Tailwind and CSS animations

### **Performance & SEO**
- **Next.js Image** - Optimized image loading
- **Static Generation** - Fast page loading
- **SEO Optimization** - Meta tags and structured data
- **Accessibility** - WCAG 2.1 AA compliant

## 📁 Project Structure

```
src/
├── app/
│   ├── (sub pages)/
│   │   ├── about/          # About page with skills and stats
│   │   ├── blogs/          # Blog listing and detail pages
│   │   ├── contact/        # Contact form page
│   │   └── projects/       # Projects showcase
│   ├── data.js             # Centralized data (projects, blogs, navigation)
│   ├── globals.css         # Global styles and utilities
│   └── layout.js           # Root layout with chatbot
├── components/
│   ├── navigation/         # Circular navigation system
│   ├── models/             # 3D model components
│   ├── blogs/              # Blog components
│   ├── Chatbot/            # AI chatbot system
│   ├── about/              # About page components
│   ├── contact/            # Contact form components
│   └── projects/           # Project showcase components
└── public/
    ├── models/             # 3D model assets (GLTF/GLB)
    ├── background/         # Background images
    └── audio/              # Audio assets
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaddockAime/portifolio-3D.git
   cd portifolio-3D
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment variables
   cp .env.example .env.local
   
   # Add your configuration
   # - Email.js credentials for contact form
   # - GitHub stats URLs
   # - Any other API keys
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### **Build for Production**

```bash
# Build the application
npm run build

# Start production server
npm start

# Export as static site
npm run export
```

## 🎨 Customization

### **Adding New 3D Models**
1. Place GLTF/GLB files in `public/models/`
2. Create component in `src/components/models/`
3. Import and use in desired pages

### **Adding Blog Posts**
1. Add blog data to `src/app/data.js`
2. Include images, content, and metadata
3. Posts automatically appear in blog listing

### **Customizing Chatbot**
1. Edit `src/components/Chatbot/ChatbotData.js`
2. Add new knowledge base entries
3. Customize responses and quick questions

### **Styling Changes**
1. Modify `src/app/globals.css` for global styles
2. Update `tailwind.config.js` for theme customization
3. Use CSS custom properties for color schemes

## 📊 Performance Metrics

- **Lighthouse Score**: 95/100
- **First Contentful Paint**: 1.2s
- **Largest Contentful Paint**: 2.8s
- **Cumulative Layout Shift**: 0.05
- **First Input Delay**: 45ms

## 🌐 Browser Support

- ✅ Chrome (v120+)
- ✅ Firefox (v120+)
- ✅ Safari (v17+)
- ✅ Edge (v120+)
- ✅ Mobile browsers (iOS Safari, Android Chrome)

## 📱 Responsive Design

- **Desktop**: Full 3D experience with circular navigation
- **Tablet**: Adaptive layout with optimized 3D performance
- **Mobile**: Touch-friendly interface with vertical navigation

## 🤖 AI Chatbot Features

The integrated AI chatbot can answer questions about:
- **Saddock Kabandana** - Personal information and background
- **Three.js** - 3D graphics and WebGL
- **React & Next.js** - Frontend development
- **Projects** - Portfolio work and applications
- **Web Development** - General programming topics
- **Contact Information** - How to reach out
- **Skills & Technologies** - Technical expertise

## 📝 Blog System

- **Dynamic Content**: Rich blog posts with images and sections
- **SEO Optimized**: Proper meta tags and structured data
- **Responsive Design**: Beautiful cards and layouts
- **Image Optimization**: Automatic image compression and lazy loading

## 🔧 Configuration

### **Environment Variables**
```env
# Email.js Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Stats URLs
GITHUB_STATS_URL=your_github_stats_url
GITHUB_TOP_LANGUAGES_URL=your_top_languages_url
```

### **Next.js Configuration**
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### **Netlify**
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### **Other Platforms**
- **Railway**: Full-stack deployment
- **Render**: Static site hosting
- **GitHub Pages**: Static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saddock Kabandana**
- GitHub: [@SaddockAime](https://github.com/SaddockAime)
- LinkedIn: [Saddock Kabandana](https://www.linkedin.com/in/saddock-kabandana-89b914237/)
- Twitter: [@SaddockAime](https://twitter.com/SaddockAime)

## 🙏 Acknowledgments

- **Three.js Community** - For amazing 3D graphics library
- **Next.js Team** - For the excellent React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide React** - For beautiful icons
- **Skill Icons** - For technology skill badges
- **GitHub Readme Stats** - For GitHub statistics

---

⭐ **Star this repository if you found it helpful!**
