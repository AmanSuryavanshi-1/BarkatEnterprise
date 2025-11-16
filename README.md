# 🏢 Barkat Enterprise - Premium Tiles & Marbles Showcase

<div align="center">

![Barkat Enterprise](https://img.shields.io/badge/Barkat-Enterprise-F7CE3E?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, responsive web application for showcasing premium tiles and marbles**

[🌐 Live Demo](https://barkat-enterprise.vercel.app) • [📝 Blog Post](https://amansuryavanshi-dev.vercel.app/blogs/a-freelance-project-for-an-enterprise) • [👨‍💻 Developer](https://amansuryavanshi-dev.vercel.app)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Implementations](#-key-implementations)
- [Performance Optimizations](#-performance-optimizations)
- [Deployment](#-deployment)
- [Challenges & Solutions](#-challenges--solutions)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

Barkat Enterprise is a comprehensive web application designed for a tiles and marbles business. This freelance project showcases modern web development practices, delivering a seamless user experience for browsing product catalogs, viewing detailed product information, and contacting the business.

### 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on product imagery
- **User-Centric**: Intuitive navigation and smooth interactions
- **Performance-First**: Optimized loading times and responsive design
- **Accessibility**: WCAG compliant with semantic HTML

---

## ✨ Features

### 🏠 Core Features

- **Dynamic Hero Carousel**: Auto-rotating showcase of premium tile collections with smooth transitions
- **Product Categories**: 10+ categorized product sections with subcategories
- **Advanced Filtering**: Search and filter products by category, subcategory, and keywords
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **PDF Catalog Viewer**: In-browser PDF viewing and downloadable catalogs
- **Contact Integration**: Email.js powered contact form for customer inquiries
- **Lazy Loading**: Optimized image loading for better performance

### 🎨 UI/UX Features

- **Smooth Animations**: Hardware-accelerated transitions and transforms
- **Interactive Elements**: Hover effects, button animations, and micro-interactions
- **Fixed Navigation**: Sticky header with scroll-based styling
- **Scroll to Top**: Quick navigation button for better UX
- **Mobile Menu**: Responsive hamburger menu for mobile devices

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library for building component-based interfaces |
| **React Router DOM** | 6.27.0 | Client-side routing and navigation |
| **Tailwind CSS** | 3.4.10 | Utility-first CSS framework for rapid styling |
| **Vite** | 5.4.1 | Next-generation frontend build tool |

### Libraries & Tools

| Library | Purpose |
|---------|---------|
| **React Icons** | Scalable icon components (5.3.0) |
| **React LazyLoad** | Lazy loading for images and components (3.2.1) |
| **EmailJS Browser** | Client-side email integration (4.4.1) |
| **PDFJS-Dist** | PDF rendering in browser |
| **Vercel Analytics** | Performance monitoring and analytics (1.3.1) |

### Development Tools

- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing with Autoprefixer
- **Autoprefixer**: Automatic vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/barkat-enterprise.git
   cd barkat-enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
barkat-enterprise/
├── public/
│   └── assets/
│       ├── Logo/
│       ├── Products/
│       │   └── Carousel WEBP/
│       ├── Catalogue/
│       └── Barkat Enterprise Business Card PNG/
├── src/
│   ├── Components/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Hero.jsx             # Hero carousel section
│   │   ├── ProductCategories.jsx # Product category grid
│   │   ├── About.jsx            # About section
│   │   └── Footer.jsx           # Footer component
│   ├── Pages/
│   │   ├── ProductPage.jsx      # Product listing with filters
│   │   ├── CataloguePage.jsx    # PDF catalog viewer
│   │   ├── Contact.jsx          # Contact form
│   │   └── WhereToBuy.jsx       # Store locations
│   ├── Utils/
│   │   └── ProductData.js       # Product data and categories
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json                  # Vercel deployment config
└── vite.config.js
```

---

## 🔑 Key Implementations

### 1. Hero Carousel with Stable Heading

**Challenge**: Heading was shaking during carousel transitions

**Solution**: Removed unnecessary text re-animation and added GPU acceleration

```jsx
// Hero.jsx - Optimized implementation
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[92vh] overflow-hidden">
      {/* Stable heading with GPU acceleration */}
      <h1 className="transform-gpu will-change-transform leading-tight">
        BARKAT ENTERPRISES
      </h1>
    </section>
  );
};
```

### 2. Dynamic Product Filtering

```jsx
// ProductPage.jsx - Advanced filtering
const [filteredTiles, setFilteredTiles] = useState(sampleTiles);

useEffect(() => {
  const newFilteredTiles = sampleTiles.filter(tile => 
    (tile.category === selectedCategory || selectedCategory === 'All') && 
    (selectedSubcategory === 'All Types' || tile.subcategory === selectedSubcategory) &&
    tile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredTiles(newFilteredTiles);
}, [selectedCategory, selectedSubcategory, searchQuery]);
```

### 3. Responsive Navigation

```jsx
// Header.jsx - Mobile-first navigation
const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## ⚡ Performance Optimizations

### Image Optimization

1. **WebP Format**: All images converted to WebP for 30-50% size reduction
2. **Lazy Loading**: Images load only when entering viewport
3. **Public Directory**: Assets served directly from `/public` for faster access

```jsx
import LazyLoad from 'react-lazyload';

<LazyLoad height={200} offset={100}>
  <img src="/assets/Products/tile.webp" alt="Tile" />
</LazyLoad>
```

### Code Splitting

- React Router implements automatic code splitting
- Components loaded on-demand per route

### Build Optimizations

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});
```

---

## 🌐 Deployment

### Vercel Deployment

1. **Connect Repository**: Link GitHub repo to Vercel
2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**: Add EmailJS credentials in Vercel dashboard

4. **Deploy**: Automatic deployment on every push to main branch

### SPA Routing Fix

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This configuration ensures all routes serve `index.html`, fixing the 404 error on page refresh.

---

## 🐛 Challenges & Solutions

### 1. Image Path Issues on Vercel

**Problem**: Images not loading after deployment

**Solution**: 
- Moved assets to `/public` directory
- Updated all image paths to absolute paths starting with `/assets/`

```jsx
// Before
<img src="../assets/logo.png" />

// After
<img src="/assets/Logo/logo.png" />
```

### 2. Page Refresh 404 Error

**Problem**: Direct URL access or refresh resulted in 404

**Solution**: Added rewrite rule in `vercel.json` to serve `index.html` for all routes

### 3. Carousel Heading Shake

**Problem**: Text shaking during carousel transitions

**Solution**: 
- Removed unnecessary re-animation
- Added GPU acceleration with `transform-gpu` and `will-change-transform`
- Fixed line-height for consistent rendering

### 4. Dynamic Catalog Generation

**Problem**: Managing multiple product catalogs efficiently

**Solution**: Used template literals for dynamic path generation

```js
const catalogues = {
  catalogue1: {
    name: '1×1.5 BARKAT ENTERPRISE',
    images: Array.from({ length: 29 }, (_, i) => 
      `/assets/Catalogue/1X1.5 BARKAT ENTERPRISE/${i + 1}.webp`
    ),
    pdfPath: '/assets/Catalogue/1X1.5 BARKAT ENTERPRISE (ALL)_compressed.pdf'
  }
};
```

---

## 🔮 Future Enhancements

### Planned Features

- [ ] **AI-Powered Search**: Implement visual search for similar tiles
- [ ] **3D Room Visualizer**: AR/VR integration for tile preview in real spaces
- [ ] **Multi-Language Support**: Hindi, English, and regional languages
- [ ] **Admin Dashboard**: CMS for product management
- [ ] **User Accounts**: Save favorites and order history
- [ ] **Live Chat**: Real-time customer support
- [ ] **Price Calculator**: Estimate costs based on room dimensions
- [ ] **Comparison Tool**: Side-by-side product comparison

### Technical Improvements

- [ ] Implement Progressive Web App (PWA)
- [ ] Add unit and integration tests
- [ ] Set up CI/CD pipeline with automated testing
- [ ] Implement advanced caching strategies
- [ ] Add SEO optimizations with meta tags and structured data

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint configuration
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

### Developer

**Aman Suryavanshi**
- Portfolio: [amansuryavanshi-dev.vercel.app](https://amansuryavanshi-dev.vercel.app)
- Email: amansurya.work@gmail.com
- GitHub: [@amansuryavanshi](https://github.com/amansuryavanshi)
- LinkedIn: [Aman Suryavanshi](https://linkedin.com/in/amansuryavanshi)

### Project Links

- **Live Website**: [barkat-enterprise.vercel.app](https://barkat-enterprise.vercel.app)
- **Repository**: [GitHub](https://github.com/yourusername/barkat-enterprise)
- **Blog Post**: [Project Case Study](https://amansuryavanshi-dev.vercel.app/blogs/a-freelance-project-for-an-enterprise)

---

## 🙏 Acknowledgments

- **Barkat Enterprise** for the opportunity to build this project
- **React Community** for excellent documentation and support
- **Tailwind CSS** for the amazing utility-first framework
- **Vercel** for seamless deployment and hosting

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ by [Aman Suryavanshi](https://amansuryavanshi-dev.vercel.app)**

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)
![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=flat-square&logo=tailwind-css)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)

</div>
