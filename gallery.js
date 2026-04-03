// =============================================
// GALLERY DATA — Replace dummy images with real ones
// =============================================
const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    alt: "Children doing science experiments",
    title: "Hands-On Chemistry",
    category: "workshops",
    tall: true
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    alt: "STEM workshop activity",
    title: "Microscope Exploration",
    category: "workshops",
    tall: false
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    alt: "Kids learning about biology",
    title: "Biology Fun Day",
    category: "science-club",
    tall: false
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=600&q=80",
    alt: "STEM Dorado magazine spread",
    title: "Issue 5 — Space Edition",
    category: "magazine",
    tall: false
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    alt: "After-school science club",
    title: "After-School Rockets",
    category: "science-club",
    tall: true
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
    alt: "Science event for kids",
    title: "Science Fair 2024",
    category: "events",
    tall: false
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80",
    alt: "Children building models",
    title: "Engineering Models",
    category: "workshops",
    tall: false
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
    alt: "Kids reading science magazine",
    title: "Magazine Reading Session",
    category: "magazine",
    tall: false
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    alt: "Group science experiment",
    title: "Team Experiment Day",
    category: "science-club",
    tall: false
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    alt: "UCL workshop session",
    title: "UCL Healthcare Workshop",
    category: "events",
    tall: true
  },
  // ===== These load on "Load More" =====
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1564429238961-bf8fe1fe403e?w=600&q=80",
    alt: "Physics experiments",
    title: "Physics in Action",
    category: "workshops",
    tall: false
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&q=80",
    alt: "Children with lab coats",
    title: "Little Scientists",
    category: "science-club",
    tall: false
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
    alt: "Science magazine cover",
    title: "Issue 6 — Ocean Life",
    category: "magazine",
    tall: true
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80",
    alt: "STEM event audience",
    title: "Parent-Child Workshop",
    category: "events",
    tall: false
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80",
    alt: "Robot building workshop",
    title: "Build a Robot",
    category: "workshops",
    tall: false
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
    alt: "Kids coding session",
    title: "Coding & Logic Games",
    category: "science-club",
    tall: false
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?w=600&q=80",
    alt: "Nature science walk",
    title: "Nature Discovery Walk",
    category: "events",
    tall: false
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
    alt: "Magazine design process",
    title: "Behind the Scenes",
    category: "magazine",
    tall: false
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?w=600&q=80",
    alt: "Chemical reactions demo",
    title: "Colourful Chemistry",
    category: "workshops",
    tall: true
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=600&q=80",
    alt: "End of year celebration",
    title: "Year-End Celebration",
    category: "events",
    tall: false
  }
];

// =============================================
// GALLERY CONTROLLER
// =============================================
const IMAGES_PER_LOAD = 10;
let currentFilter = 'all';
let visibleCount = 0;

const galleryGrid = document.getElementById('galleryGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreWrapper = document.getElementById('loadMoreWrapper');
const galleryCount = document.getElementById('galleryCount');

// Get filtered data
function getFilteredData() {
  if (currentFilter === 'all') return galleryData;
  return galleryData.filter(item => item.category === currentFilter);
}

// Create a single gallery card
function createCard(item) {
  const card = document.createElement('div');
  card.className = `gallery-card${item.tall ? ' tall' : ''}`;
  card.setAttribute('data-category', item.category);
  card.setAttribute('data-id', item.id);

  const categoryLabels = {
    'workshops': 'Workshop',
    'science-club': 'Science Club',
    'magazine': 'Magazine',
    'events': 'Event'
  };

  card.innerHTML = `
    <span class="gallery-card-badge">${categoryLabels[item.category] || item.category}</span>
    <div class="gallery-card-image">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
    </div>
    <div class="gallery-card-overlay">
      <div class="zoom-icon"><i class="fas fa-expand"></i></div>
      <h4>${item.title}</h4>
      <span>${categoryLabels[item.category]}</span>
    </div>
  `;

  // Click to open lightbox
  card.addEventListener('click', () => openLightbox(item));

  return card;
}

// Render gallery
function renderGallery(reset = false) {
  const filtered = getFilteredData();

  if (reset) {
    galleryGrid.innerHTML = '';
    visibleCount = 0;
  }

  const nextBatch = filtered.slice(visibleCount, visibleCount + IMAGES_PER_LOAD);

  nextBatch.forEach((item, index) => {
    const card = createCard(item);
    // Stagger animation for newly loaded cards
    card.style.animationDelay = `${index * 0.05}s`;
    galleryGrid.appendChild(card);
  });

  visibleCount += nextBatch.length;

  // Update count text
  galleryCount.innerHTML = `Showing <strong>${visibleCount}</strong> of <strong>${filtered.length}</strong> photos`;

  // Show/hide load more button
  if (visibleCount >= filtered.length) {
    loadMoreWrapper.classList.add('hidden');
  } else {
    loadMoreWrapper.classList.remove('hidden');
  }
}

// =============================================
// FILTER FUNCTIONALITY
// =============================================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Set filter and re-render
    currentFilter = btn.getAttribute('data-filter');
    renderGallery(true);
  });
});

// =============================================
// LOAD MORE
// =============================================
loadMoreBtn.addEventListener('click', () => {
  // Show loading state
  loadMoreBtn.classList.add('loading');
  loadMoreBtn.innerHTML = '<i class="fas fa-spinner"></i> Loading...';

  // Simulate a small delay for UX feel
  setTimeout(() => {
    renderGallery(false);
    loadMoreBtn.classList.remove('loading');
    loadMoreBtn.innerHTML = '<i class="fas fa-images"></i> Load More Photos';
  }, 600);
});

// =============================================
// LIGHTBOX
// =============================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentLightboxIndex = 0;
let lightboxImages = [];

function openLightbox(item) {
  const filtered = getFilteredData();
  lightboxImages = filtered.slice(0, visibleCount); // Only visible images
  currentLightboxIndex = lightboxImages.findIndex(img => img.id === item.id);

  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const item = lightboxImages[currentLightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.title;
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close on backdrop click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// =============================================
// INITIAL RENDER
// =============================================
renderGallery(true);