// theme.js: handle dark/light mode toggle and persistence
(function(){
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('siteTheme', theme);
        var btn = document.getElementById('themeToggle');
        if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    function toggleTheme() {
        var current = localStorage.getItem('siteTheme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleScroll() {
        var backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }

    // Search functionality
    function searchSite(query) {
        var resultsDiv = document.getElementById('searchResults');
        if (!resultsDiv) return;

        if (query.length < 2) {
            resultsDiv.style.display = 'none';
            return;
        }

        // Simple search data - in production this could be from a JSON file or API
        var searchData = [
            { title: 'Home', url: 'gseke.html', desc: 'Welcome to Saint Laurent de Gaseke' },
            { title: 'About Us', url: 'about2.html', desc: 'Learn about our school and mission' },
            { title: 'Technical Programs', url: 'page2.html', desc: 'SOD, ETE, BDC, ELT courses' },
            { title: 'News & Announcements', url: 'announcements.html', desc: 'Latest school news and updates' },
            { title: 'Gallery & Projects', url: 'PROJECTS.html', desc: 'Student projects and school gallery' },
            { title: 'Contact Us', url: 'contact.html', desc: 'Get in touch with the school' },
            { title: 'Admissions', url: 'admissions.html', desc: 'Join our technical programs' },
            { title: 'Student Profiles', url: 'student-profiles.html', desc: 'Meet our students' },
            { title: 'Student Classes', url: 'student-classes.html', desc: 'Class schedules and information' },
            { title: 'Student Marks', url: 'student-marks.html', desc: 'Academic performance records' },
            { title: 'Admin Panel', url: 'admin.html', desc: 'Administrative management system' }
        ];

        var results = searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            resultsDiv.innerHTML = results.map(item =>
                `<div class="search-result-item" onclick="window.location.href='${item.url}'">
                    <strong>${item.title}</strong><br>
                    <small>${item.desc}</small>
                </div>`
            ).join('');
            resultsDiv.style.display = 'block';
        } else {
            resultsDiv.innerHTML = '<div class="search-result-item">No results found</div>';
            resultsDiv.style.display = 'block';
        }
    }

    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        var searchContainer = document.querySelector('.search-container');
        if (searchContainer && !searchContainer.contains(e.target)) {
            var resultsDiv = document.getElementById('searchResults');
            if (resultsDiv) resultsDiv.style.display = 'none';
        }
    });

    document.addEventListener('DOMContentLoaded', function(){
        var saved = localStorage.getItem('siteTheme');
        if(!saved){
            saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light';
        }
        applyTheme(saved);
        var toggle = document.getElementById('themeToggle');
        if(toggle) toggle.addEventListener('click', toggleTheme);

        // Back to top functionality
        window.addEventListener('scroll', handleScroll);
    });

    // Make functions global
    window.toggleTheme = toggleTheme;
    window.scrollToTop = scrollToTop;
    window.searchSite = searchSite;
})();