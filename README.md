# HICONS Services Limited - Official Website

![HICONS Services Limited](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

A modern, responsive website for HICONS Services Limited - a leading construction company in Kenya specializing in water infrastructure, road construction, building development, and drainage systems.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Project Portfolio** - Filterable project gallery with detailed project information
- **Interactive Navigation** - Click-based dropdown menus with smooth transitions
- **Contact System** - Comprehensive contact form with validation
- **About Section** - Detailed company information including mission, vision, and leadership team
- **Performance Optimized** - Fast loading times and smooth scrolling

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Routing:** React Router DOM v6
- **Styling:** Custom CSS with modern design patterns
- **Build Tool:** Create React App
- **Version Control:** Git & GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**
- **Git**

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Stephen2Kim/hicons-website.git
cd hicons-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm start
# or
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hicons-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/          # Project images and logos
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Navbar.css
│   │   ├── ScrollToTop.jsx  # Scroll restoration utility
│   │   └── Footer.jsx       # Footer component (if applicable)
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Home.css
│   │   ├── About.jsx        # About page with company info
│   │   ├── About.css
│   │   ├── Projects.jsx     # Project portfolio
│   │   ├── Projects.css
│   │   ├── Contact.jsx      # Contact page with form
│   │   └── Contact.css
│   ├── App.js               # Main app component with routing
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Key Features Breakdown

### Home Page
- Hero section with compelling background imagery
- Company introduction and history
- Project showcase with high-quality images
- Service overview
- Call-to-action section with quick stats
- Multiple contact methods

### About Page
- Comprehensive company profile
- Mission and vision statements
- Leadership team section
- Core values and services
- Smooth scroll navigation to sections

### Projects Page
- Filterable project gallery (All, Water, Roads, Buildings, Drainage)
- Project cards with hover effects
- Detailed project modal with specifications
- Sample project data for layout demonstration
- Call-to-action section

### Contact Page
- Multi-field contact form with validation
- Contact information cards
- Service area information
- FAQ section
- Map integration placeholder
- Social media links

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Deploy to Production**
```bash
vercel --prod
```

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy**
```bash
npm run build
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
"homepage": "https://Stephen2Kim.github.io/hicons-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy**
```bash
npm run deploy
```

## 🔄 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Real project data and images
- [ ] Google Maps integration
- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Image gallery with lightbox
- [ ] Multi-language support
- [ ] Admin dashboard for content management
- [ ] SEO optimization
- [ ] Analytics integration

## 🐛 Known Issues

- Contact form currently logs to console (backend integration pending)
- Project images are placeholders (awaiting real project photos)
- Google Maps integration is placeholder (needs actual location embed)

## 🤝 Contributing

This is a private project for HICONS Services Limited. For any suggestions or issues, please contact the development team.

## 📄 License

This project is proprietary and confidential. © 2024 HICONS Services Limited. All rights reserved.

## 👨‍💻 Developer

**Stephen Kim**
- GitHub: [@Stephen2Kim](https://github.com/Stephen2Kim)

## 📞 Support

For technical support or inquiries about HICONS Services Limited:

- **Email:** info@hiconsservices.com
- **Phone:** +254 712 345 678
- **Location:** Nairobi, Kenya

## 🙏 Acknowledgments

- React Team for the amazing framework
- Create React App for the build tooling
- The open-source community for inspiration and resources

---

**Built with ❤️ for HICONS Services Limited**

*Established 2016 | Building Kenya's Future*