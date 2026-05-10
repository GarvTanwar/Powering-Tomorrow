const rootPath = document.body.dataset.root || "";

function page(path) {
  return `${rootPath}${path}`;
}

function navIcon(name) {
  const icons = {
    home: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M9.5 20v-5h5v5" /></svg>`,
    podcast: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4Z" /><path d="M5 11v1a7 7 0 0 0 14 0v-1" /><path d="M12 19v3" /><path d="M8.5 22h7" /></svg>`,
    psa: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 14v-4l10-4v12L4 14Z" /><path d="M4 14l2 5h3l-1.5-4.2" /><path d="M17 9.5c1 .6 1.5 1.4 1.5 2.5s-.5 1.9-1.5 2.5" /><path d="M19.5 7.5A5.8 5.8 0 0 1 22 12a5.8 5.8 0 0 1-2.5 4.5" /></svg>`,
    info: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 20V6" /><path d="M5 20h14" /><path d="M9 17v-6" /><path d="M13 17V8" /><path d="M17 17v-4" /></svg>`,
    artefact: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 4.5 7.2 12 11.4l7.5-4.2L12 3Z" /><path d="M4.5 7.2v8.6L12 20l7.5-4.2V7.2" /><path d="M12 11.4V20" /></svg>`,
    about: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 11a4 4 0 1 0-8 0" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /><path d="M18.5 7.5a2.5 2.5 0 0 1 0 5" /><path d="M21 20a5.8 5.8 0 0 0-3-5" /></svg>`,
    contact: `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>`
  };

  return icons[name] || "";
}

function renderHeader() {
  return `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-header">
      <nav class="navbar" aria-label="Main navigation">
        <a class="logo" href="${page("index.html")}" aria-label="Powering Tomorrow home">
          <img src="${page("assets/images/new_logo.png")}" alt="Powering Tomorrow logo">
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" id="nav-links">
          <li class="mobile-only-link"><a class="nav-home-link" href="${page("index.html")}">${navIcon("home")}<span>Home</span></a></li>
          <li><a href="${page("pages/podcast.html")}">${navIcon("podcast")}<span>Podcast</span></a></li>
          <li><a href="${page("pages/image.html")}">${navIcon("psa")}<span>PSA Campaign</span></a></li>
          <li><a href="${page("pages/infographic.html")}">${navIcon("info")}<span>Infographic</span></a></li>
          <li><a href="${page("pages/artefact.html")}">${navIcon("artefact")}<span>Physical Artefact</span></a></li>
          <li><a href="${page("pages/about.html")}">${navIcon("about")}<span>About Us</span></a></li>
          <li class="mobile-contact-item"><a href="${page("pages/contact.html")}">${navIcon("contact")}<span>Contact Us</span></a></li>
        </ul>

        <a class="nav-contact-button" href="${page("pages/contact.html")}">Contact Us</a>
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-brand">
        <p class="footer-name">Powering Tomorrow</p>
        <p class="footer-description">Helping families build simple energy-saving habits at home, one everyday routine at a time.</p>
        <p class="footer-copy">&copy; 2026 Powering Tomorrow. All rights reserved.</p>
      </div>
      <nav class="footer-column" aria-label="Footer navigation">
        <p class="footer-heading">Campaign</p>
        <a href="${page("pages/podcast.html")}">Podcast</a>
        <a href="${page("pages/image.html")}">PSA Campaign</a>
        <a href="${page("pages/infographic.html")}">Infographic</a>
        <a href="${page("pages/artefact.html")}">Physical Artefact</a>
      </nav>
      <nav class="footer-column" aria-label="Learning links">
        <p class="footer-heading">Learn</p>
        <a href="${page("pages/climate-change.html")}">Climate Change</a>
        <a href="${page("pages/sustainable-living.html")}">Sustainable Living</a>
        <a href="${page("pages/understanding-energy-bill.html")}">Understanding Your Energy Bill</a>
        <a href="${page("pages/future-technology.html")}">Future Technology</a>
      </nav>
      <nav class="footer-column" aria-label="Support links">
        <p class="footer-heading">Support</p>
        <a href="${page("pages/about.html")}">About Us</a>
        <a href="${page("pages/faq.html")}">FAQ</a>
        <a href="${page("pages/contact.html")}">Contact Us</a>
        <a href="${page("pages/references.html")}">References</a>
      </nav>
      <nav class="footer-column" aria-label="Policies">
        <p class="footer-heading">Policies</p>
        <a href="${page("pages/terms-of-use.html")}">Terms of Use</a>
        <a href="${page("pages/privacy-policy.html")}">Privacy Policy</a>
        <a href="${page("pages/accessibility.html")}">Accessibility</a>
        <a href="${page("pages/copyright-usage.html")}">Copyright &amp; Usage</a>
      </nav>
      <svg class="footer-energy-art" viewBox="0 0 1200 360" aria-hidden="true" focusable="false">
        <g class="energy-icons">
          <g class="solar-icon" transform="translate(92 224)">
            <path d="M0 74h190l-38-86H38L0 74Z" />
            <path d="M38-12 0 74M76-12 48 74M114-12 96 74M152-12 144 74" />
            <path d="M20 30h150M9 52h171M30 8h132" />
            <path d="M28 74h130" />
          </g>

          <g class="house-icon" transform="translate(512 178)">
            <path d="M0 64 76 0l76 64" />
            <path d="M24 56v98h104V56" />
            <path d="M64 154v-42h30v42" />
            <path d="M42 82h26v24H42zM86 82h26v24H86z" />
            <path d="M104 24v-28h22v48" />
            <path d="M18 154h122" />
          </g>

          <g class="city-icon" transform="translate(864 164)">
            <path d="M0 168h260" />
            <path d="M18 168V86h48v82" />
            <path d="M82 168V46h54v122" />
            <path d="M154 168V70h42v98" />
            <path d="M214 168V22h44v146" />
            <path d="M32 108h20M32 130h20M96 70h24M96 94h24M96 118h24M166 94h18M166 118h18M226 48h18M226 74h18M226 100h18M226 126h18" />
          </g>

          <path class="energy-line" pathLength="1" d="M245 252 C370 214 410 236 512 242 S710 274 806 226 950 184 1112 210" />
          <circle class="energy-pulse" r="7">
            <animateMotion dur="9s" repeatCount="indefinite" path="M245 252 C370 214 410 236 512 242 S710 274 806 226 950 184 1112 210" />
          </circle>
        </g>
      </svg>
    </footer>
  `;
}

document.querySelector("[data-layout='header']")?.replaceWith(
  document.createRange().createContextualFragment(renderHeader())
);

document.querySelector("[data-layout='footer']")?.replaceWith(
  document.createRange().createContextualFragment(renderFooter())
);
