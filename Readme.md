# Santosh Bhandari - Backend Developer Portfolio 🚀

A modern, responsive, and highly interactive portfolio website showcasing backend development expertise with stunning animations and cutting-edge web technologies.

## ✨ Features

### 🎨 Modern Design & Animations
- **Matrix Background Effect**: Dynamic animated background with falling code
- **Glassmorphism UI**: Modern glass-like interface elements
- **Smooth Scroll Animations**: AOS (Animate On Scroll) integration
- **Interactive Cursor Trail**: Custom cursor effects with smooth tracking
- **Floating Tech Icons**: Animated background icons representing technologies
- **Terminal-Style Interface**: Code-inspired design elements

### 💻 Backend Developer Focus
- **Code Syntax Highlighting**: Realistic code blocks with proper syntax colors
- **Terminal Window**: Interactive terminal-style sections
- **Skills Progress Bars**: Animated skill level indicators
- **3D Service Cards**: Flip cards with detailed service information
- **Professional Color Scheme**: Dark theme optimized for developers

### 📱 Enhanced User Experience
- **Fully Responsive**: Optimized for all devices and screen sizes
- **PWA Ready**: Progressive Web App with offline capabilities
- **Fast Loading**: Optimized assets and lazy loading
- **Accessibility**: WCAG compliant with keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 🚀 Performance Features
- **Service Worker**: Offline functionality and caching
- **Smooth Scrolling**: Hardware-accelerated animations
- **Optimized Images**: WebP format support and compression
- **Minimal Dependencies**: Lightweight and fast loading
- **Mobile First**: Designed for mobile devices first

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Advanced animations, Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Modern JavaScript with modules and async/await
- **AOS Library**: Scroll-triggered animations
- **Typed.js**: Typewriter effect animations

### Design
- **Inter Font**: Modern, readable typography
- **JetBrains Mono**: Monospace font for code elements
- **Bootstrap Icons**: Comprehensive icon library
- **Custom Animations**: Hand-crafted CSS animations

### Performance
- **Service Worker**: Background sync and caching
- **PWA Manifest**: App-like installation
- **Lazy Loading**: On-demand resource loading
- **CSS Optimization**: Efficient selectors and minimal reflow

## 🎯 Sections

1. **Hero Section**
   - Animated terminal window
   - Profile image with rotating rings
   - Dynamic typing animation
   - Call-to-action buttons

2. **About Section**
   - Interactive code block
   - Animated statistics counters
   - Personal introduction
   - Skills showcase

3. **Skills Section**
   - Categorized skill sets
   - Animated progress bars
   - Technology icons
   - Proficiency levels

4. **Services Section**
   - 3D flip cards
   - Detailed service descriptions
   - Hover animations
   - Interactive elements

5. **Contact Section**
   - Modern contact form
   - Social media links
   - Contact information
   - Form validation

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional for development)

### Installation
1. Clone or download the repository
2. Open `index.html` in a web browser
3. For local development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Customization
1. **Personal Information**: Update content in `index.html`
2. **Styling**: Modify CSS variables in `css/style.css`
3. **Colors**: Change the color scheme in CSS root variables
4. **Content**: Replace images and update text content
5. **Services**: Modify service cards and descriptions

## 📂 File Structure

```
PersonalWebsite/
├── index.html              # Main homepage
├── success.html            # Form success page
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Responsive design
│   └── success.css        # Success page styles
├── js/
│   └── script.js          # Main JavaScript
├── img/
│   ├── img.png           # Profile image
│   ├── favicon.ico       # Site icon
│   └── bg.jpg            # Background image
├── files/
│   └── cv.pdf            # Resume/CV file
└── README.md             # Documentation
```

## 🎨 Customization Guide

### Color Scheme
The website uses CSS custom properties for easy theming:
```css
:root {
    --primary-bg: #0a0e27;      /* Main background */
    --secondary-bg: #16213e;    /* Secondary background */
    --accent-color: #64ffda;    /* Accent color */
    --text-primary: #e6f1ff;   /* Primary text */
    --text-secondary: #8892b0;  /* Secondary text */
}
```

### Typography
Two main font families are used:
- **Inter**: For body text and headings
- **JetBrains Mono**: For code and technical elements

### Animations
Animations can be disabled for users who prefer reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimizations

- **Critical CSS**: Inlined critical styles
- **Font Display Swap**: Optimized font loading
- **Image Optimization**: Compressed and properly sized images
- **Minification**: Minified CSS and JavaScript
- **Caching**: Service worker with intelligent caching
- **Preloading**: Key resources preloaded

## 🛡️ Security Features

- **Content Security Policy**: Implemented CSP headers
- **HTTPS Ready**: Prepared for secure deployment
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Proper escaping and validation

## 📈 SEO Features

- **Semantic HTML**: Proper HTML5 semantic elements
- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for search engines
- **Sitemap**: XML sitemap for search engines

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `# No build needed`
3. Set publish directory: `.`
4. Deploy!

### GitHub Pages
1. Go to repository settings
2. Enable GitHub Pages
3. Select source branch
4. Access via `username.github.io/repository-name`

### Traditional Hosting
1. Upload all files to web server
2. Ensure server supports HTTPS
3. Configure proper MIME types
4. Set up redirects if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AOS Library**: For scroll animations
- **Typed.js**: For typewriter effects
- **Bootstrap Icons**: For the icon set
- **Google Fonts**: For typography
- **Netlify**: For hosting platform

## 📞 Contact

**Santosh Bhandari**
- Website: [bhandari-santosh.com.np](https://bhandari-santosh.com.np)
- Email: info@bhandari-santosh.com.np
- GitHub: [@santoshvandari](https://github.com/santoshvandari)
- LinkedIn: [santoshvandari](https://linkedin.com/in/santoshvandari)

---

**Made with ❤️ and lots of ☕ by Santosh Bhandari**