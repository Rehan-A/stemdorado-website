// ================================================================
// ABOUT US PAGE — SCRIPTS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. BIO READ MORE TOGGLE =====
  const bioToggle = document.getElementById('bioToggle');
  const bioExpandable = document.getElementById('bioExpandable');

  if (bioToggle && bioExpandable) {
    bioToggle.addEventListener('click', () => {
      const isOpen = bioExpandable.classList.contains('open');
      
      if (isOpen) {
        bioExpandable.classList.remove('open');
        bioToggle.classList.remove('open');
        bioToggle.querySelector('.read-more-text').textContent = 'Read more';
      } else {
        bioExpandable.classList.add('open');
        bioToggle.classList.add('open');
        bioToggle.querySelector('.read-more-text').textContent = 'Read less';
      }
    });
  }

  // ===== 2. SCROLL REVEAL FOR ABOUT PAGE ELEMENTS =====
  const revealElements = document.querySelectorAll(
    '.mission-card, .timeline-item, .policy-item, .policy-download, .founder-highlight, .cta-card'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 80;

      if (elementTop < windowHeight - revealPoint) {
        // Staggered delay for grid items
        setTimeout(() => {
          el.classList.add('active');
        }, index * 50);
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // ===== 3. TIMELINE ANIMATION ON SCROLL =====
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const animateTimeline = () => {
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < windowHeight - 100) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
        item.style.transitionDelay = `${index * 0.15}s`;
      }
    });
  };

  // Initial styles for timeline items
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateTimeline);
  animateTimeline();

  // ===== 4. COUNTER ANIMATION (for stats if needed) =====
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  };

  // ===== 5. PARALLAX EFFECT ON HERO =====
  const aboutHero = document.querySelector('.about-hero');
  
  if (aboutHero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < 600) {
        aboutHero.style.backgroundPositionY = `${scrolled * 0.3}px`;
      }
    });
  }

  // ===== 6. SMOOTH SCROLL HANDLING FOR CROSS-PAGE LINKS =====
  // When coming from another page with a hash, scroll to that section
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }

});

// ================================================================
// ABOUT US PAGE — SCRIPTS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. BIO READ MORE TOGGLE (Founder) =====
  const bioToggle = document.getElementById('bioToggle');
  const bioExpandable = document.getElementById('bioExpandable');

  if (bioToggle && bioExpandable) {
    bioToggle.addEventListener('click', () => {
      const isOpen = bioExpandable.classList.contains('open');
      
      if (isOpen) {
        bioExpandable.classList.remove('open');
        bioToggle.classList.remove('open');
        bioToggle.querySelector('.read-more-text').textContent = 'Read more';
      } else {
        bioExpandable.classList.add('open');
        bioToggle.classList.add('open');
        bioToggle.querySelector('.read-more-text').textContent = 'Read less';
      }
    });
  }

  // ===== 2. TEAM CARD READ MORE TOGGLE =====
  const teamReadMoreBtns = document.querySelectorAll('.team-read-more');

  teamReadMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.team-card');
      const bioFull = card.querySelector('.team-bio-full');
      const isExpanded = btn.getAttribute('data-expanded') === 'true';

      if (isExpanded) {
        bioFull.classList.remove('show');
        btn.setAttribute('data-expanded', 'false');
        btn.querySelector('span').textContent = 'Read more';
      } else {
        bioFull.classList.add('show');
        btn.setAttribute('data-expanded', 'true');
        btn.querySelector('span').textContent = 'Read less';
      }
    });
  });

  // ===== 3. SCROLL REVEAL FOR ABOUT PAGE ELEMENTS =====
  const revealElements = document.querySelectorAll(
    '.mission-card, .timeline-item, .policy-item, .policy-download, .founder-highlight, .cta-card, .team-card'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 80;

      if (elementTop < windowHeight - revealPoint) {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 50);
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // ===== 4. TIMELINE ANIMATION ON SCROLL =====
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const animateTimeline = () => {
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < windowHeight - 100) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
        item.style.transitionDelay = `${index * 0.15}s`;
      }
    });
  };

  // Initial styles for timeline items
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateTimeline);
  animateTimeline();

  // ===== 5. TEAM CARDS STAGGER ANIMATION =====
  const teamCards = document.querySelectorAll('.team-card');
  
  teamCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // ===== 6. PARALLAX EFFECT ON HERO =====
  const aboutHero = document.querySelector('.about-hero');
  
  if (aboutHero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < 600) {
        aboutHero.style.backgroundPositionY = `${scrolled * 0.3}px`;
      }
    });
  }

  // ===== 7. SMOOTH SCROLL HANDLING FOR CROSS-PAGE LINKS =====
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }

});