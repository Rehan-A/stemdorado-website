// ================================================================
// COMPONENT LOADER — Load Header & Footer into Pages
// ================================================================

/**
 * Load an HTML component into a placeholder element
 * @param {string} componentPath - Path to the component HTML file
 * @param {string} placeholderId - ID of the placeholder element
 */
async function loadComponent(componentPath, placeholderId) {
  try {
    const response = await fetch(componentPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load ${componentPath}: ${response.status}`);
    }
    
    const html = await response.text();
    const placeholder = document.getElementById(placeholderId);
    
    if (placeholder) {
      placeholder.innerHTML = html;
      
      // After loading, run any initialization needed
      if (placeholderId === 'header-placeholder') {
        initHeader();
      }
    }
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

/**
 * Initialize header functionality after it's loaded
 */
function initHeader() {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Set active nav link based on current page
  setActiveNavLink();
  
  // Header scroll effect
  initHeaderScroll();
}

/**
 * Set active class on current page's nav link
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on load
  }
}

/**
 * Load all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    loadComponent('components/header.html', 'header-placeholder');
  }
  
  // Load footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    loadComponent('components/footer.html', 'footer-placeholder');
  }
});