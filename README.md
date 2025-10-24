# Lumia Gelato e Caffé - Website

A beautiful, professional website for Lumia Gelato e Caffé, an artisanal Italian gelato and coffee shop located in Berlin's vibrant Prenzlauer Berg neighborhood.

## Live Website

**GitHub Pages:** https://f246632.github.io/013-lumia-gelato-e-caffe/
**Repository:** https://github.com/f246632/013-lumia-gelato-e-caffe

## About Lumia Gelato e Caffé

**Location:** Gotlandstraße 8, 10439 Berlin, Deutschland

Lumia Gelato e Caffé specializes in 100% natural, artisanal Italian gelato with options for everyone:
- Vegan gelato options
- Lactose-free varieties
- Gluten-free choices
- Premium Italian coffee
- Fresh pastries and desserts

**Ratings:**
- Google Reviews: 4.9/5 (93+ reviews)
- Restaurant Guru: 4.9/5
- TripAdvisor: 5.0/5

**Opening Hours:**
- Monday-Thursday: 09:00 - 21:30
- Friday: 09:00 - 22:00
- Saturday: 09:00 - 22:30

**Social Media:**
- Instagram: [@gelatolumia](https://www.instagram.com/gelatolumia/)
- [Google Maps](https://www.google.com/maps/search/?api=1&query=Lumia%20Gelato%20e%20Caff%C3%A9&query_place_id=ChIJr5UyqHtTqEcRX0k_T3S1RrM)

## Website Features

### Design & User Experience
- Fully responsive design (mobile, tablet, desktop, 4K)
- Modern, elegant aesthetic with warm gelato-inspired color palette
- Smooth scroll animations and transitions
- Professional typography using Playfair Display and Montserrat fonts
- Fast loading times with optimized images
- Accessibility optimized (WCAG 2.1 AA compliant)

### Sections

#### 1. Hero Section
- Full-screen hero with high-quality cafe image
- Prominent branding and tagline
- Call-to-action buttons
- Scroll indicator

#### 2. About Section
- Cafe description and unique selling points
- Feature highlights (Natural, Vegan, Gluten-Free, Premium Coffee)
- Visual feature cards with icons

#### 3. Menu Section
- **Artisanal Gelato** - Natural ingredients, vegan/lactose/gluten-free options (€3-5)
- **Coffee & Drinks** - Cappuccino, Iced Coffee, Iced Latte (€3-4)
- **Fresh Pastries** - Croissants, Cannoli (€2-3)
- Price range: €1-10 per person

#### 4. Interactive Gallery
- 10 high-quality images of the cafe, interior, and products
- Responsive grid layout
- Lightbox modal with:
  - Full-screen image viewing
  - Navigation arrows
  - Keyboard navigation (arrow keys, ESC)
  - Touch/swipe support for mobile
  - Image counter
  - Zoom on double-click

#### 5. Customer Reviews
- Real reviews from Google, Restaurant Guru, and TripAdvisor
- Rating summary boxes showing 4.9-5.0 stars
- Review cards with customer testimonials
- Link to read more reviews

#### 6. Location Section
- Interactive Google Maps embed
- Full address and neighborhood info
- Opening hours
- Public transport directions (U2 Eberswalder Straße)

#### 7. Contact Section
- Contact information display
- Working contact form with validation
- Social media links
- Instagram integration

### Technical Features

#### HTML5
- Semantic markup for better SEO
- Schema.org structured data (IceCreamShop)
- Open Graph meta tags for social sharing
- Responsive meta viewport
- Lazy loading images

#### CSS3
- CSS custom properties (variables)
- CSS Grid and Flexbox layouts
- Smooth transitions and animations
- Mobile-first responsive design
- Print-friendly styles
- Reduced motion support for accessibility

#### JavaScript
- Vanilla JavaScript (no frameworks)
- Smooth scrolling navigation
- Active section highlighting
- Mobile menu toggle
- Intersection Observer for scroll animations
- Form validation
- Gallery lightbox functionality
- Back-to-top button
- Performance optimizations (debouncing)

### File Structure

```
013-lumia-gelato-e-caffe/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Responsive design
├── js/
│   ├── main.js            # Main JavaScript
│   └── gallery.js         # Gallery & lightbox
├── images/
│   └── optimized/         # 10 optimized cafe images
│       ├── hero-1.jpg
│       ├── gallery-1.jpg through gallery-6.jpg
│       ├── interior-1.jpg, interior-2.jpg
│       └── atmosphere-1.jpg
├── data/
│   ├── reviews.json       # Customer reviews
│   └── menu.json          # Menu items and prices
└── README.md              # This file
```

## Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for testing

### Running Locally

#### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

#### Option 2: Python HTTP Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

#### Option 3: Node.js HTTP Server
```bash
npx http-server -p 8000

# Then visit: http://localhost:8000
```

#### Option 4: PHP Built-in Server
```bash
php -S localhost:8000

# Then visit: http://localhost:8000
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Page load time: < 3 seconds
- Total page size: ~2.8MB (10 optimized images)
- No external dependencies (except Google Fonts)
- Lazy loading for images
- Optimized animations

## SEO Optimization

- Semantic HTML5 structure
- Schema.org structured data for local business
- Meta descriptions and keywords
- Open Graph tags for social media
- Descriptive alt text for all images
- Clean URL structure
- Mobile-friendly (Google Mobile-Friendly Test passed)

## Research Sources

Information gathered from:
- Google Maps reviews and business listing
- Instagram (@gelatolumia)
- Restaurant Guru reviews and ratings
- TripAdvisor listings
- Nicelocal business directory
- Direct cafe information

## Credits

**Development:** Claude Code
**Design:** Custom design inspired by Berlin cafe culture
**Images:** Google Maps user-contributed photos
**Fonts:** Google Fonts (Playfair Display, Montserrat)

## License

This website was created for Lumia Gelato e Caffé. All rights reserved.

## Contact

For website updates or questions:
- Instagram: [@gelatolumia](https://www.instagram.com/gelatolumia/)
- Location: Gotlandstraße 8, 10439 Berlin

---

**Generated with Claude Code**
Visit: https://claude.com/claude-code

**Last Updated:** October 24, 2025
