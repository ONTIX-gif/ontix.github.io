# Saint Laurent de Gaseke - Hosting & Deployment Guide

## Website Overview
This is a comprehensive educational institution website for Saint Laurent de Gaseke Technical School, featuring student management, project showcase, and administrative controls.

## Features Included

### 1. **Student Management System**
- Admin panel for adding/editing/deleting students (admin-students.html)
- Student profiles page with search and filtering
- Class management and scheduling
- Marks/grades tracking system
- Photo uploads for student identification

### 2. **Public Pages**
- **Home Page** (gseke.html) - Welcome and overview
- **About Us** (about2.html) - School information and mission
- **Trade Programs** (page2.html) - Details on SOD, ETE, BDC, ELT
- **Projects** (PROJECTS.html) - Student project showcase
- **Gallery** (gallery.html) - Campus photos and project images
- **Admissions** (admissions.html) - Enrollment information
- **Contact** (contact.html) - Communication form

### 3. **Administrative Dashboard**
- Master admin panel (admin.html) - Password protected
- Student management (admin-students.html)
- Marks management (admin-marks.html)
- Dashboard analytics (admin-dashboard.html)

### 4. **Security Features**
- Login authentication on admin pages
- Password-protected admin access
- localStorage for data persistence
- Secure credential validation

### 5. **SEO & Hosting Features**
- sitemap.xml for search engines
- robots.txt for crawler control
- 404.html custom error page
- .htaccess for server optimization
- Meta tags for social sharing

## Hosting Requirements

### Minimum Requirements
- **Web Server**: Apache 2.4+ or Nginx
- **PHP**: Not required (pure HTML/CSS/JavaScript)
- **Storage**: 500MB minimum
- **Bandwidth**: 10GB/month minimum
- **SSL Certificate**: Highly recommended

### Recommended Hosting Providers
- **Shared Hosting**: Hostinger, Bluehost, SiteGround
- **Cloud Hosting**: AWS, Google Cloud, DigitalOcean
- **VPS/Dedicated**: Linode, Vultr, Hetzner

## Installation & Deployment

### 1. **Local Testing**
```bash
# Windows: Using Python
cd "c:\Users\USER\Documents\saint laurent"
python -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```
Visit: http://localhost:8000

### 2. **Upload Files to Server**

#### Via FTP:
1. Connect to FTP using credentials from hosting provider
2. Upload all files to public_html/ or www/ directory:
   - All .html files
   - All .css files
   - All image files (.jpg, .png)
   - sitemap.xml
   - robots.txt
   - .htaccess (if using Apache)

#### Via cPanel:
1. Login to cPanel
2. Go to File Manager
3. Upload files to public_html directory

#### Via Git (if available):
```bash
git clone [repository-url] /path/to/website
```

### 3. **Configure Server Settings**

#### Apache Configuration:
```apache
<Directory /path/to/website>
    AllowOverride All
    Options +FollowSymLinks
    Require all granted
</Directory>
```

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/website;
    
    # Redirect to error page for 404
    error_page 404 /404.html;
    
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

### 4. **Enable SSL/HTTPS**
- Use Let's Encrypt (free) through cPanel
- Or purchase SSL from hosting provider
- Redirect HTTP to HTTPS in .htaccess

## Database Setup (Optional)
Currently, data is stored in browser localStorage. For permanent storage:

### Option 1: Use Backend Service
- Add Firebase, Supabase, or similar
- Replace localStorage calls with API calls

### Option 2: Traditional Backend
- Set up PHP/Node.js backend
- Create MySQL/PostgreSQL database
- Implement API endpoints

### Option 3: Static Site CMS
- Use Netlify CMS
- Use Forestry.io
- Use GitHub Pages

## Data Management

### Student Data
- Stored in: Browser localStorage
- Key: `schoolStudents`
- Format: JSON array
- Export: Use Admin Panel "Export Data" button

### Backing Up Data:
1. Open browser DevTools (F12)
2. Go to Application > Local Storage
3. Copy the `schoolStudents` value
4. Save to safe location as JSON file

### Restoring Data:
1. Admin Panel > Browser Console
2. Paste: `localStorage.setItem('schoolStudents', YOUR_JSON_DATA)`

## Admin Credentials

### Master Admin (admin.html)
- **Username**: ontix_67
- **Password**: 1980

### Dashboard Admin (admin-dashboard.html)
- **Username**: admin
- **Password**: password123

## Maintenance Tasks

### Regular Updates
- [ ] Check for broken links (monthly)
- [ ] Update news/announcements (weekly)
- [ ] Backup student data (weekly)
- [ ] Review analytics (monthly)
- [ ] Update SSL certificate (before expiry)

### Performance Optimization
- Enable gzip compression
- Minify CSS/JavaScript
- Optimize images
- Use CDN for assets
- Enable caching headers

### Security Checklist
- [ ] Change default admin passwords
- [ ] Enable HTTPS/SSL
- [ ] Regular backups
- [ ] Update contact forms to use server-side validation
- [ ] Implement rate limiting
- [ ] Add CSRF protection if adding server-side forms

## Troubleshooting

### Pages Not Loading
- Check file permissions (644 for files, 755 for directories)
- Verify .htaccess is uploaded
- Check browser console for errors (F12)

### Images Not Display
- Use absolute paths or check relative paths
- Verify image files are uploaded
- Check image file permissions

### Admin Login Fails
- Clear browser cache and cookies
- Check credentials are correct
- Verify localStorage is enabled

### CSS/JavaScript Not Working
- Clear browser cache (Ctrl+F5)
- Check file paths in HTML
- Verify files are uploaded to server
- Check for browser console errors

## Contact & Support

For technical issues or questions:
- Email: admin@saintlaurentdegaseke.rw
- Phone: Available in contact.html
- Visit: contact.html page

## File Structure
```
saint-laurent/
├── gseke.html (Homepage)
├── about2.html
├── page2.html (Programs)
├── PROJECTS.html
├── gallery.html
├── student-profiles.html
├── student-classes.html
├── student-marks.html
├── admissions.html
├── contact.html
├── admin.html (Main admin)
├── admin-dashboard.html
├── admin-students.html
├── admin-marks.html
├── main.css
├── page2.css
├── gaseke.css
├── style.css
├── sitemap.xml
├── robots.txt
├── 404.html
├── .htaccess
└── [all image files]
```

## Version & Updates
- **Version**: 1.0.0
- **Last Updated**: March 2026
- **Status**: Production Ready

## License
Saint Laurent de Gaseke Technical School - All Rights Reserved
