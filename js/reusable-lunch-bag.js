const lunchRevealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
const lunchPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (lunchPrefersReducedMotion) {
  lunchRevealItems.forEach((item) => item.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const lunchRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.16
  });

  lunchRevealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    lunchRevealObserver.observe(item);
  });
} else {
  lunchRevealItems.forEach((item) => item.classList.add("visible"));
}
