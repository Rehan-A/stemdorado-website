// ================================================================
// BLOG PAGE — JAVASCRIPT
// ================================================================

// ================================================================
// BLOG DATA
// Add new blog posts here weekly — newest first
// ================================================================
const blogPosts = [
  {
    id: 1,
    title: "Why Every Child Should Learn the Scientific Method Early",
    excerpt: "Learning to observe, question, hypothesise and test isn't just for scientists — it's one of the most powerful thinking frameworks a child can develop from an early age.",
    category: "tips",
    categoryLabel: "Tips for Parents",
    author: "Dr Alina Chakraborty",
    authorInitials: "AC",
    date: "2025-07-14",
    dateLabel: "14 July 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80",
    tags: ["science", "education", "parents"],
    featured: true,
    popular: true
  },
  {
    id: 2,
    title: "5 Simple Kitchen Experiments You Can Try This Weekend",
    excerpt: "You don't need a laboratory to do great science. These five experiments use everyday household items and are perfect for curious children aged 5 to 11.",
    category: "experiments",
    categoryLabel: "Experiments",
    author: "Shirin",
    authorInitials: "SH",
    date: "2025-07-07",
    dateLabel: "7 July 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&q=80",
    tags: ["experiments", "chemistry", "home"],
    featured: false,
    popular: true
  },
  {
    id: 3,
    title: "What is Healthcare Engineering and Why Does It Matter?",
    excerpt: "From prosthetic limbs to MRI scanners, healthcare engineering sits at the crossroads of medicine and technology. We explain what it is and why it's one of the most exciting STEM fields today.",
    category: "science-news",
    categoryLabel: "Science News",
    author: "Dr Alina Chakraborty",
    authorInitials: "AC",
    date: "2025-06-30",
    dateLabel: "30 June 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=700&q=80",
    tags: ["engineering", "health", "UCL"],
    featured: false,
    popular: false
  },
  {
    id: 4,
    title: "STEM Careers Spotlight: What Does a Robotics Engineer Do?",
    excerpt: "We spoke with our team member Aman about his journey into robotics engineering, what a typical day looks like, and how children can start exploring this exciting field right now.",
    category: "stem-careers",
    categoryLabel: "STEM Careers",
    author: "Aman",
    authorInitials: "AM",
    date: "2025-06-23",
    dateLabel: "23 June 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80",
    tags: ["robotics", "careers", "engineering"],
    featured: false,
    popular: true
  },
  {
    id: 5,
    title: "How to Raise a Curious Child: Practical Tips for Parents",
    excerpt: "Curiosity is one of the greatest gifts you can nurture in a child. These evidence-based strategies help parents encourage questioning, exploration and a love of discovery at home.",
    category: "tips",
    categoryLabel: "Tips for Parents",
    author: "Dr Alina Chakraborty",
    authorInitials: "AC",
    date: "2025-06-16",
    dateLabel: "16 June 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=700&q=80",
    tags: ["parenting", "curiosity", "education"],
    featured: false,
    popular: false
  },
  {
    id: 6,
    title: "The Science Behind Volcanoes: A Guide for Young Explorers",
    excerpt: "Why do volcanoes erupt? What's inside the Earth? We break down the fascinating geology behind volcanic activity in a way that children aged 7 and above can understand and enjoy.",
    category: "science-news",
    categoryLabel: "Science News",
    author: "Yashaswi",
    authorInitials: "YA",
    date: "2025-06-09",
    dateLabel: "9 June 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
    tags: ["geology", "earth science", "volcanoes"],
    featured: false,
    popular: false
  },
  {
    id: 7,
    title: "Build a Simple Circuit at Home: A Step-by-Step Guide",
    excerpt: "Electricity is everywhere — but how does it actually work? This beginner-friendly guide walks children through building a basic circuit using a battery, wire and a small bulb.",
    category: "experiments",
    categoryLabel: "Experiments",
    author: "Aman",
    authorInitials: "AM",
    date: "2025-06-02",
    dateLabel: "2 June 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=700&q=80",
    tags: ["physics", "circuits", "engineering"],
    featured: false,
    popular: false
  },
  {
    id: 8,
    title: "Pharmaceutical Sciences: A Career Path Worth Exploring",
    excerpt: "From drug discovery to patient care, pharmaceutical science is a rewarding and varied field. Yashaswi shares her journey and what inspires her about working in this industry.",
    category: "stem-careers",
    categoryLabel: "STEM Careers",
    author: "Yashaswi",
    authorInitials: "YA",
    date: "2025-05-26",
    dateLabel: "26 May 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80",
    tags: ["pharmacy", "careers", "health"],
    featured: false,
    popular: false
  },
  {
    id: 9,
    title: "Why Maths and Science Go Hand in Hand",
    excerpt: "Many children see maths and science as completely separate subjects. But they are deeply connected — and understanding that link can transform how children learn both.",
    category: "tips",
    categoryLabel: "Tips for Parents",
    author: "Dr Alina Chakraborty",
    authorInitials: "AC",
    date: "2025-05-19",
    dateLabel: "19 May 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80",
    tags: ["maths", "science", "education"],
    featured: false,
    popular: false
  },
  {
    id: 10,
    title: "What Happens When You Mix Baking Soda and Vinegar?",
    excerpt: "It fizzes, bubbles and sometimes overflows — but what's actually happening? We explore the chemistry behind this classic experiment and how to extend it into a real investigation.",
    category: "experiments",
    categoryLabel: "Experiments",
    author: "Shirin",
    authorInitials: "SH",
    date: "2025-05-12",
    dateLabel: "12 May 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80",
    tags: ["chemistry", "experiments", "reactions"],
    featured: false,
    popular: false
  },
  {
    id: 11,
    title: "Is Your Child Ready for Secondary School Science?",
    excerpt: "The jump from KS2 to KS3 science can feel like a big leap. We share practical ways parents can help their children build confidence and strong scientific foundations ahead of Year 7.",
    category: "tips",
    categoryLabel: "Tips for Parents",
    author: "Dr Alina Chakraborty",
    authorInitials: "AC",
    date: "2025-05-05",
    dateLabel: "5 May 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=700&q=80",
    tags: ["secondary school", "KS3", "parents"],
    featured: false,
    popular: false
  },
  {
    id: 12,
    title: "The James Webb Space Telescope: What Has It Discovered?",
    excerpt: "Since becoming operational, the James Webb Space Telescope has delivered breathtaking images and major scientific discoveries. We explain what it's found and why it matters for our understanding of the universe.",
    category: "science-news",
    categoryLabel: "Science News",
    author: "Yashaswi",
    authorInitials: "YA",
    date: "2025-04-28",
    dateLabel: "28 April 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=700&q=80",
    tags: ["space", "astronomy", "technology"],
    featured: false,
    popular: false
  }
];

// ================================================================
// STATE
// ================================================================
const POSTS_PER_PAGE = 6;
let currentFilter   = 'all';
let currentTag      = null;
let currentSearch   = '';
let visibleCount    = 0;

// ================================================================
// DOM REFS
// ================================================================
const blogGrid      = document.getElementById('blogGrid');
const blogLoadMore  = document.getElementById('blogLoadMore');
const loadMoreBtn   = document.getElementById('loadMoreBtn');
const blogCount     = document.getElementById('blogCount');
const blogNoResults = document.getElementById('blogNoResults');
const blogSearch    = document.getElementById('blogSearch');
const searchClear   = document.getElementById('blogSearchClear');

// ================================================================
// FILTER DATA
// ================================================================
function getFilteredPosts() {
  return blogPosts.filter(post => {
    const matchesFilter = currentFilter === 'all' || post.category === currentFilter;
    const matchesTag    = !currentTag || post.tags.includes(currentTag);
    const matchesSearch = !currentSearch ||
      post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
      post.author.toLowerCase().includes(currentSearch.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchesFilter && matchesTag && matchesSearch;
  });
}

// ================================================================
// CREATE BLOG CARD
// ================================================================
function createBlogCard(post, index) {
  const card = document.createElement('article');
  card.className = `blog-card${post.featured && visibleCount === 0 && index === 0 ? ' featured' : ''}`;
  card.style.animationDelay = `${index * 0.05}s`;

  const isFeatured = post.featured && visibleCount === 0 && index === 0;

  card.innerHTML = `
    <div class="blog-card-image">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <span class="blog-card-category ${post.category}">${post.categoryLabel}</span>
      ${isFeatured ? '<span class="blog-card-featured-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
    </div>
    <div class="blog-card-content">
      <div class="blog-card-meta">
        <span><i class="fas fa-calendar-alt"></i> ${post.dateLabel}</span>
        <span><i class="fas fa-clock"></i> ${post.readTime}</span>
      </div>
      <h2 class="blog-card-title">${post.title}</h2>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-footer">
        <div class="blog-card-author">
          <div class="blog-card-avatar">${post.authorInitials}</div>
          <div>
            <div class="blog-card-author-name">${post.author}</div>
            <div class="blog-card-read-time">Author</div>
          </div>
        </div>
        <a href="blog-post.html?id=${post.id}" class="blog-card-read-link">
          Read more <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;

  return card;
}

// ================================================================
// RENDER BLOG GRID
// ================================================================
function renderBlog(reset = false) {
  if (reset) {
    blogGrid.innerHTML = '';
    visibleCount = 0;
  }

  const filtered  = getFilteredPosts();
  const nextBatch = filtered.slice(visibleCount, visibleCount + POSTS_PER_PAGE);

  // No results
  if (filtered.length === 0) {
    blogNoResults.classList.add('show');
    blogLoadMore.classList.add('hidden');
    blogCount.textContent = '';
    return;
  }

  blogNoResults.classList.remove('show');

  nextBatch.forEach((post, i) => {
    const card = createBlogCard(post, i);
    blogGrid.appendChild(card);
  });

  visibleCount += nextBatch.length;

  // Count text
  blogCount.innerHTML = `Showing <strong>${visibleCount}</strong> of <strong>${filtered.length}</strong> articles`;

  // Show/hide load more
  if (visibleCount >= filtered.length) {
    blogLoadMore.classList.add('hidden');
  } else {
    blogLoadMore.classList.remove('hidden');
  }
}

// ================================================================
// CATEGORY FILTER — Main buttons
// ================================================================
const filterBtns = document.querySelectorAll('.blog-filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    currentTag    = null;

    // Sync sidebar
    syncSidebarCategory(currentFilter);
    clearTagBtns();
    renderBlog(true);
  });
});

// ================================================================
// CATEGORY FILTER — Sidebar buttons
// ================================================================
const sidebarCatBtns = document.querySelectorAll('.sidebar-cat-btn');

sidebarCatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sidebarCatBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    currentTag    = null;

    // Sync main filter
    syncMainFilter(currentFilter);
    clearTagBtns();
    renderBlog(true);
  });
});

function syncSidebarCategory(filter) {
  sidebarCatBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === filter);
  });
}

function syncMainFilter(filter) {
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === filter);
  });
}

// ================================================================
// TAG FILTER
// ================================================================
const tagBtns = document.querySelectorAll('.tag-btn');

tagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.getAttribute('data-tag');

    if (btn.classList.contains('active')) {
      // Deselect tag
      btn.classList.remove('active');
      currentTag = null;
    } else {
      clearTagBtns();
      btn.classList.add('active');
      currentTag = tag;
    }

    renderBlog(true);
  });
});

function clearTagBtns() {
  tagBtns.forEach(b => b.classList.remove('active'));
  currentTag = null;
}

// ================================================================
// SEARCH
// ================================================================
let searchTimeout;

blogSearch.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const val = blogSearch.value.trim();
  currentSearch = val;

  // Show/hide clear button
  searchClear.classList.toggle('visible', val.length > 0);

  searchTimeout = setTimeout(() => {
    renderBlog(true);
  }, 300);
});

searchClear.addEventListener('click', () => {
  blogSearch.value = '';
  currentSearch = '';
  searchClear.classList.remove('visible');
  renderBlog(true);
  blogSearch.focus();
});

// ================================================================
// LOAD MORE
// ================================================================
loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.classList.add('loading');
  loadMoreBtn.innerHTML = '<i class="fas fa-spinner"></i> Loading...';

  setTimeout(() => {
    renderBlog(false);
    loadMoreBtn.classList.remove('loading');
    loadMoreBtn.innerHTML = '<i class="fas fa-arrow-down"></i> Load More Articles';
  }, 500);
});

// ================================================================
// SIDEBAR — CATEGORY COUNTS
// ================================================================
function updateCategoryCounts() {
  const categories = {
    all:           blogPosts.length,
    experiments:   blogPosts.filter(p => p.category === 'experiments').length,
    'science-news': blogPosts.filter(p => p.category === 'science-news').length,
    tips:          blogPosts.filter(p => p.category === 'tips').length,
    'stem-careers': blogPosts.filter(p => p.category === 'stem-careers').length
  };

  const countAll        = document.getElementById('countAll');
  const countExperiments = document.getElementById('countExperiments');
  const countScienceNews = document.getElementById('countScienceNews');
  const countTips       = document.getElementById('countTips');
  const countCareers    = document.getElementById('countCareers');

  if (countAll)         countAll.textContent         = categories.all;
  if (countExperiments) countExperiments.textContent  = categories.experiments;
  if (countScienceNews) countScienceNews.textContent  = categories['science-news'];
  if (countTips)        countTips.textContent         = categories.tips;
  if (countCareers)     countCareers.textContent      = categories['stem-careers'];
}

// ================================================================
// SIDEBAR — POPULAR POSTS
// ================================================================
function renderPopularPosts() {
  const popular     = blogPosts.filter(p => p.popular).slice(0, 3);
  const container   = document.getElementById('sidebarPopular');
  if (!container) return;

  container.innerHTML = popular.map(post => `
    <div class="popular-post" onclick="window.location='blog-post.html?id=${post.id}'">
      <div class="popular-post-img">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="popular-post-info">
        <p class="popular-post-title">${post.title}</p>
        <span class="popular-post-date">
          <i class="fas fa-calendar-alt"></i>
          ${post.dateLabel}
        </span>
      </div>
    </div>
  `).join('');
}

// ================================================================
// NEWSLETTER FORM
// ================================================================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const btn        = newsletterForm.querySelector('button');

    btn.innerHTML    = '<i class="fas fa-check"></i> Subscribed!';
    btn.style.background = '#10b981';
    emailInput.value = '';

    setTimeout(() => {
      btn.innerHTML    = 'Subscribe <i class="fas fa-arrow-right"></i>';
      btn.style.background = '';
    }, 3000);
  });
}

// ================================================================
// INITIALISE
// ================================================================
updateCategoryCounts();
renderPopularPosts();
renderBlog(true);