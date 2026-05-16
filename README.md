# Christine Wanja - My Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

🌐 **Live Site:** https://wanjachristine201-ux.github.io/portfolio-website

## 🚀 Features

- **Modern Dark Theme** - Professional dark UI with gradient backgrounds and glow effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-triggered fade-in animations and hover effects
- **Multiple Sections**:
  - Hero section with typing animation
  - About Me with highlight cards
  - Skills section with skill categories
  - Projects showcase
  - Contact form with validation
  - Professional footer
- **Navigation** - Smooth scrolling and active section highlighting
- **Contact Form** - Client-side validation

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── profile.jpg         # Your profile photo (add this)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, CSS Grid, animations, responsive design
- **JavaScript (ES6+)** - Interactivity, form validation, animations

## 📦 Installation & Setup

1. **Clone or download the project**
   ```bash
   git clone https://github.com/wanjachristine201-ux/portfolio-website.git
   cd portfolio-website
   ```

2. **Add your profile photo**
   - Place your photo in the project folder
   - Name it `profile.jpg` (or update the filename in `index.html`)
   - Recommended: Square format, 400x400px or larger

3. **Customize content**
   - Edit `index.html` to update your information
   - Edit `style.css` to customize colors and styling
   - Edit `script.js` to modify animations and functionality

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. Go to [netlify.com](https://www.netlify.com) and sign up for free
2. Drag and drop your `portfolio-website` folder onto the Netlify dashboard
3. Your site will be live instantly with a random URL
4. Click "Site settings" → "Change site name" to customize your URL

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up for free
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel` in your project folder
4. Follow the prompts to deploy

### Option 3: GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → `master` branch
4. Your site will be at: `username.github.io/repository-name`

### Option 4: Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `firebase deploy`

## 📝 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #64ffda;
    --bg-dark: #0a0a0a;
    /* Add more variables */
}
```

### Adding Projects
Edit the Projects section in `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <!-- Your project icon/image -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project</h3>
        <p class="project-description">Description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

### Updating Contact Info
Edit the Contact section in `index.html`:
- Update email address
- Update location
- Update social media links

## 🎨 Adding Your Profile Photo

1. Prepare your photo:
   - Square or circular format works best
   - Recommended size: 400x400 pixels or larger
   - Format: JPG or PNG
   - File size: Under 500KB for faster loading

2. Add to project:
   - Copy your photo to the project folder
   - Name it `profile.jpg`
   - Or update the filename in `index.html` line 73:
     ```html
     <img src="your-filename.jpg" alt="Christine Wanja" class="profile-image">
     ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Christine Wanja**
- LinkedIn: https:/www.linkedin.com/in/christine-wanja-598711385
- GitHub: https://github.com/wanjachristine201-ux

## 🙏 Acknowledgments

- Icons from Feather Icons
- Built with modern web technologies
- Inspired by professional developer portfolios

---

**Note**: This portfolio is designed to be easily customizable. Feel free to modify it to suit your needs!
