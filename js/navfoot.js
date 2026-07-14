/* ── Inject Navbar ── */
document.getElementsByTagName('nav')[0].innerHTML = `
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">

    <a class="navbar-brand" href="home.html">
      <span class="brand-dot"></span> HairPort
    </a>

    <button class="navbar-toggler ms-auto me-2" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainNav">
      <i class="bi bi-list"></i>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav mx-auto gap-1">

        <li class="nav-item">
          <a class="nav-link" href="home.html">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Problems</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="home.html#problems"><i class="bi bi-droplet-half"></i>Hair Loss</a></li>
            <li><a class="dropdown-item" href="home.html#problems"><i class="bi bi-stars"></i>Graying Hair</a></li>
            <li><a class="dropdown-item" href="home.html#problems"><i class="bi bi-arrow-up-circle"></i>Growth Issues</a></li>
            <li><a class="dropdown-item" href="home.html#problems"><i class="bi bi-person-dash"></i>Premature Baldness</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Treatments</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="treatments.html#remedies"><i class="bi bi-flower1"></i>Home Remedies</a></li>
            <li><a class="dropdown-item" href="treatments.html#products"><i class="bi bi-bag-heart"></i>Hair Products</a></li>
            <li><a class="dropdown-item" href="treatments.html#equipment"><i class="bi bi-tools"></i>Equipment</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li>
              <a class="dropdown-item" href="treatments.html#updates">
                <i class="bi bi-lightning-charge"></i>Latest Research
                <span class="badge-new">New</span>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Brands</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="brands.html#companies"><i class="bi bi-building"></i>All Companies</a></li>
            <li><a class="dropdown-item" href="brands.html#compare"><i class="bi bi-layout-split"></i>Compare Equipment</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="gallery.html">Gallery</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>

      </ul>

      <div class="d-flex align-items-center gap-2 mt-2 mt-lg-0">
        <div class="nav-search-wrap d-none d-lg-block">
          <input type="search" class="nav-search-input" placeholder="Search…" id="siteSearch"/>
          <i class="bi bi-search"></i>
        </div>
        <div class="nav-icon-btn">
          <i class="bi bi-bell"></i>
          <span class="dot"></span>
        </div>
        <div class="nav-icon-btn">
          <i class="bi bi-person"></i>
        </div>
      </div>
    </div>
  </div>
</nav>`;

/* ── Mark active nav link based on current page ── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href !== '#' && page === href.split('#')[0]) {
      link.classList.add('active');
    }
  });
})();

/* ── Inject Footer + Back-to-top ── */
document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <div class="footer-brand"><span class="dot"></span> HairPort</div>
        <p class="tagline">Your trusted source for complete, expert hair care information — from home remedies to professional tools.</p>
        <div class="footer-socials">
          <a href="#" class="social-btn"><i class="bi bi-instagram"></i></a>
          <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-btn"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="social-btn"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <div class="col-sm-6 col-lg-2 footer-col">
        <h6>Problems</h6>
        <a href="home.html#problems">Hair Loss</a>
        <a href="home.html#problems">Graying Hair</a>
        <a href="home.html#problems">Growth Issues</a>
        <a href="home.html#problems">Premature Baldness</a>
      </div>
      <div class="col-sm-6 col-lg-2 footer-col">
        <h6>Treatments</h6>
        <a href="treatments.html#remedies">Home Remedies</a>
        <a href="treatments.html#products">Products</a>
        <a href="treatments.html#equipment">Equipment</a>
        <a href="treatments.html#updates">Latest Research</a>
      </div>
      <div class="col-sm-6 col-lg-2 footer-col">
        <h6>Brands</h6>
        <a href="brands.html#companies">Philips</a>
        <a href="brands.html#companies">Dyson</a>
        <a href="brands.html#companies">Panasonic</a>
        <a href="brands.html#companies">Vega &amp; Havells</a>
      </div>
      <div class="col-sm-6 col-lg-2 footer-col">
        <h6>Company</h6>
        <a href="gallery.html">Gallery</a>
        <a href="brands.html#compare">Compare</a>
        <a href="contact.html">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; HairPort Inc. All rights reserved.</span>
      <span>Educational purposes only.</span>
    </div>
  </div>
</footer>
<button id="backToTop" title="Back to top"><i class="bi bi-arrow-up"></i></button>
`);

/* ── Back to top ── */
var _btt = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  _btt.classList.toggle('show', window.scrollY > 400);
});
_btt.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Cmd+K / Ctrl+K focus search ── */
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    var s = document.getElementById('siteSearch');
    if (s) s.focus();
  }
});

/* ── Site Search ── */
document.addEventListener('input', function(e) {
  if (e.target.id !== 'siteSearch') return;
});

document.addEventListener('keydown', function(e) {
  if (e.target.id !== 'siteSearch') return;
  if (e.key !== 'Enter') return;

  var query = e.target.value.trim().toLowerCase();
  if (!query) return;

  // Map keywords to pages
  var routes = [
    { keywords: ['remedy', 'remedies', 'onion', 'aloe', 'egg', 'lemon', 'natural'], page: 'treatments.html#remedies' },
    { keywords: ['product', 'shampoo', 'conditioner', 'serum', 'oil', 'mask', 'spray', 'cream'], page: 'treatments.html#products' },
    { keywords: ['equipment', 'dryer', 'straightener', 'steamer', 'massager', 'spa'], page: 'treatments.html#equipment' },
    { keywords: ['research', 'update', 'latest', 'news', 'dyson', 'lllt'], page: 'treatments.html#updates' },
    { keywords: ['brand', 'philips', 'panasonic', 'vega', 'havells'], page: 'brands.html#companies' },
    { keywords: ['compare', 'comparison', 'price', 'watt', 'power'], page: 'brands.html#compare' },
    { keywords: ['gallery', 'photo', 'image', 'visual'], page: 'gallery.html' },
    { keywords: ['contact', 'email', 'phone', 'address', 'message'], page: 'contact.html' },
    { keywords: ['loss', 'graying', 'growth', 'baldness', 'alopecia', 'problem'], page: 'home.html#problems' },
  ];

  for (var i = 0; i < routes.length; i++) {
    for (var j = 0; j < routes[i].keywords.length; j++) {
      if (query.includes(routes[i].keywords[j])) {
        window.location.href = routes[i].page;
        return;
      }
    }
  }

  // No match found
  alert('No results found for "' + e.target.value + '". Try: shampoo, dryer, onion, Philips…');
});