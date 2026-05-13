const mascotRevealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  mascotRevealItems.forEach((item) => item.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const mascotRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.16
  });

  mascotRevealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    mascotRevealObserver.observe(item);
  });
} else {
  mascotRevealItems.forEach((item) => item.classList.add("visible"));
}
