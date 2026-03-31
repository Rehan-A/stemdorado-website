// ================================================================
// MAGAZINE PAGE — SCRIPTS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. YEAR FILTER TABS =====
  const yearTabs = document.querySelectorAll('.year-tab');
  const shelfItems = document.querySelectorAll('.shelf-item');

  yearTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      yearTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedYear = tab.getAttribute('data-year');

      shelfItems.forEach((item, index) => {
        const itemYear = item.getAttribute('data-year');

        if (selectedYear === 'all' || itemYear === selectedYear) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, index * 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  // ===== 2. SCROLL REVEAL =====
  const revealElements = document.querySelectorAll(
    '.shelf-item, .educator-card, .subscription-card, .about-feature, .floating-stat, .latest-issue-card'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 30);
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // ===== 3. SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== 4. READ MORE FOR TESTIMONIALS =====
  const readMoreBtns = document.querySelectorAll('.educator-card .read-more-btn');
  
  readMoreBtns.forEach(btn => {
    const card = btn.closest('.educator-card');
    const quote = card.querySelector('.educator-quote');
    const originalText = quote.textContent;
    const truncatedText = originalText.substring(0, 200) + '...';
    
    if (originalText.length > 200) {
      quote.textContent = truncatedText;
      let isExpanded = false;

      btn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        quote.textContent = isExpanded ? originalText : truncatedText;
        btn.textContent = isExpanded ? 'Read less' : 'Read more';
      });
    } else {
      btn.style.display = 'none';
    }
  });

});