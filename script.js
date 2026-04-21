// ================================================================
// STEM DORADO — INTERACTIVE SCRIPTS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. HEADER SCROLL EFFECT =====
  const header = document.getElementById('header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run on load

  // ===== 2. MOBILE MENU TOGGLE =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ===== 3. ACTIVE NAV LINK ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // ===== 4. SCROLL REVEAL ANIMATION =====
  const revealElements = document.querySelectorAll(
    '.program-card, .video-feature, .why-point, .review, .service-card, .section-header'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run on load

  // ===== 5. READ MORE TOGGLE FOR REVIEWS =====
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach(btn => {
    const reviewText = btn.previousElementSibling;
    const shortText = reviewText.textContent;
    const fullText = btn.getAttribute('data-full-text');
    let expanded = false;

    btn.addEventListener('click', () => {
      expanded = !expanded;

      if (expanded) {
        reviewText.textContent = `"${fullText}"`;
        reviewText.style.fontStyle = 'italic';
        btn.textContent = 'Read less';
      } else {
        reviewText.textContent = shortText;
        btn.textContent = 'Read more';
      }
    });
  });

  // ===== 6. SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== 7. VIDEO PLAY BUTTON (placeholder) =====
const VIDEO_SRC = "https://video.wixstatic.com/video/247e4e_46ddbf612b3b431d89e419ae31e2bb6d/1080p/mp4/file.mp4";

const playBtn          = document.getElementById('playBtn');
const videoPlaceholder = document.getElementById('videoPlaceholder');
const videoThumb       = document.getElementById('videoThumb');

if (playBtn && videoThumb) {

  // Click play button — start playing
  playBtn.addEventListener('click', () => {
    videoThumb.muted = false;        // unmute when user clicks
    videoThumb.play();
    videoPlaceholder.classList.add('playing');
  });

  // Click video while playing — pause/resume
  videoThumb.addEventListener('click', () => {
    if (videoThumb.paused) {
      videoThumb.play();
      videoPlaceholder.classList.add('playing');
    } else {
      videoThumb.pause();
      videoPlaceholder.classList.remove('playing');
    }
  });

  // When video ends — show play button again
  videoThumb.addEventListener('ended', () => {
    videoPlaceholder.classList.remove('playing');
    videoThumb.currentTime = 0;
  });

}

  // ===== 8. STAGGERED REVEAL FOR GRIDS =====
  const staggerContainers = [
    { selector: '.programs-grid', children: '.program-card' },
    { selector: '.reviews-grid', children: '.review' },
    { selector: '.services-grid', children: '.service-card' }
  ];

  staggerContainers.forEach(({ selector, children }) => {
    const container = document.querySelector(selector);
    if (!container) return;

    const items = container.querySelectorAll(children);
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });

});