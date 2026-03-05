# Website Maintenance Guide

## Quick Reference for Site Updates

### File Organization

**Core Files:**
- `main.css` - Global styles and variables
- `page2.css` - Trade page specific styles
- `style.css` - Projects page specific styles
- `gaseke.css` - Legacy (can be archived)

**Page Files:**
- `gseke.html` - Homepage
- `page2.html` - Trades page
- `about2.html` - About page
- `PROJECTS.html` - Projects page
- `admissions.html` - Admissions & enrollment
- `gallery.html` - Photo gallery
- `contact.html` - Contact information

---

## 🎨 Customizing the Website

### Changing Colors

Edit the CSS variables in `main.css` (lines 1-15):

```css
:root {
    --primary-color: #00bfff;      /* Main button/accent color */
    --primary-dark: #0099cc;       /* Darker version for hover */
    --bg-dark: #001f3f;            /* Main background */
    --accent: #00e6ff;             /* Highlight color */
}
```

### Changing Fonts

Edit line 24 in `main.css`:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Adjusting Spacing

Cards and sections use these padding values:
- Small padding: 15px-20px
- Medium padding: 30px-40px
- Large padding: 50px-70px

---

## 📄 Adding New Pages

1. Copy structure from existing page
2. Link `main.css` in the `<head>`
3. Include the navigation bar:
```html
<nav class="main-nav">
    <a href="gseke.html">Home</a>
    <a href="about2.html">About</a>
    <!-- ... other links ... -->
</nav>
```
4. Use section classes for consistent styling
5. Include footer at end

---

## 🖼️ Adding Images

### To Gallery Page

Add new gallery items in the grid:
```html
<div class="gallery-item facilities" onclick="openModal(this)">
    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #2a6f8a, #1a4960); display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 60px;">🏢</span> <!-- or <img src="image.jpg"> -->
    </div>
    <div class="gallery-overlay">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

### To Hero Sections

Home and Trades pages use:
```html
<img src="saint laurent enhanced.png" alt="logo">
```

---

## 📝 Updating Content

### Homepage Hero
Edit `gseke.html` lines 32-34:
```html
<h2>Welcome to Saint Laurent de Gaseke</h2>
<p>We prepare students with practical skills and knowledge...</p>
```

### Programs/Trades
Edit `page2.html` section with trade cards

### About Page
Edit `about2.html` content sections

### Contact Info
Edit contact details in `contact.html`:
- Phone numbers (line ~120)
- Email addresses (line ~130)
- Address (line ~140)
- Hours (line ~150)

### Admissions Dates
Edit dates in `admissions.html` Important Dates section

---

## 🔧 Common Tasks

### Change Button Colors
In `main.css`, update `.home-btn, .back-btn`:
```css
background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
```

### Add Hover Animation to Cards
Cards already have hover effects. To modify:
```css
.card:hover {
    transform: translateY(-15px) scale(1.02);  /* Adjust values */
}
```

### Adjust Responsive Breakpoints
In `main.css`, change media queries:
```css
@media (max-width: 768px) {  /* Tablet breakpoint */
}
@media (max-width: 480px) {  /* Mobile breakpoint */
}
```

### Update Navigation Links
Edit the `.main-nav` section in all HTML files:
```html
<nav class="main-nav">
    <a href="new-page.html">New Page</a>
</nav>
```

---

## 📱 Mobile Testing

Test on these screen sizes:
- **Desktop**: 1200px+
- **Tablet**: 481-768px
- **Mobile**: 320-480px

Use browser DevTools to test responsiveness.

---

## 🔐 Security Notes

### Contact Form
- Currently uses client-side validation only
- **TODO**: Connect to email service backend
- **TODO**: Add CSRF protection
- **TODO**: Add rate limiting

### Links
- External links use `target="_blank"` for new tab
- Internal links are relative paths

---

## ⚡ Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress JPEG/PNG files
   - Use appropriate sizes

2. **CSS Optimization**
   - main.css is currently human-readable
   - For production, minify with tools like:
     - CSS Minifier
     - PostCSS
     - Webpack

3. **JavaScript Optimization**
   - Gallery filter code is inline
   - Contact form handler is inline
   - No external JS libraries (lightweight)

---

## 📊 SEO Tips

### Meta Tags to Add
Each page should have:
```html
<meta name="description" content="Page description...">
<meta name="keywords" content="keyword1, keyword2">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
```

### Heading Hierarchy
- Only ONE `<h1>` per page (site name in header)
- Use `<h2>` for section headers
- Use `<h3>` for subsections

### URL Structure
- Homepage: `/gseke.html` ✓
- Use hyphens for multi-word files: `contact-form.html` (optional)
- Keep URLs short and descriptive

---

## 🐛 Troubleshooting

### Links Not Working
- Check file paths are correct
- Use relative paths: `about2.html` not `/about2.html`
- Verify file exists and name matches

### Styling Looks Wrong
- Clear browser cache (Ctrl+Shift+Del)
- Check main.css is linked in `<head>`
- Verify CSS variables in `:root`
- Check media queries for mobile

### Images Not Showing
- Verify image file exists in folder
- Check file path in `src` attribute
- Use correct file extension (.png, .jpg, etc.)
- Test with absolute path first

### Layout Broken
- Check closing tags are correct
- Use browser DevTools (F12) inspect element
- Look for CSS conflicts
- Check responsive breakpoints

---

## ✅ Deployment Checklist

Before publishing (_if hosting online_):

- [ ] Test all links work
- [ ] Test on mobile/tablet/desktop
- [ ] Check all images load
- [ ] Verify contact form works
- [ ] Update footer year if needed
- [ ] Check all page titles
- [ ] Verify meta descriptions exist
- [ ] Test forms with various inputs
- [ ] Check color contrast (WCAG AA minimum)
- [ ] Validate HTML (W3C Validator)
- [ ] Minify CSS for production
- [ ] Set up analytics
- [ ] Configure email for contact form
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up SSL certificate

---

## 📞 Contact Form Setup

### Email Integration Options

1. **Formspree** (Easy, free tier available)
   - Change form action: `action="https://formspree.io/f/YOUR_ID"`

2. **EmailJS** (JavaScript library)
   - Add script + configuration

3. **Backend Server** (Full control)
   - Node.js + Express
   - PHP
   - Python Flask/Django

### Current Status
- Form has client-side validation
- Confirmation message appears
- **Todo**: Connect to actual email service

---

## 🔄 Regular Maintenance

### Monthly
- Check all links still work
- Update project descriptions
- Review contact inquiries

### Quarterly
- Update gallery with new photos
- Review page performance
- Check for broken images
- Update testimonials if applicable

### Annually
- Review and update all program information
- Update year in footer
- Review color scheme
- Consider new features

---

## 📚 Resources for Further Customization

- **Color Palette Generator**: coolors.co
- **Font Pairing**: fonts.google.com
- **Icon Library**: fontawesome.com or Unicode symbols
- **Gradient Generator**: cssgradient.io
- **CSS Editor**: codepen.io
- **Image Optimization**: tinypng.com
- **Responsive Testing**: responsivedesignchecker.com

---

## 🆘 Getting Help

For common issues:
1. Check browser console (F12) for errors
2. Inspect element to see applied styles
3. Test in different browser
4. Clear cache and reload
5. Validate HTML code

For advanced customization:
- Consult CSS documentation
- Review existing similar code
- Test changes in sandbox first
- Keep backups before major changes

---

**Last Updated**: March 3, 2026
**Version**: 2.0
