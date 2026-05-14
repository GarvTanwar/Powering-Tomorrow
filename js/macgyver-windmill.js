const windmillRevealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
const windmillPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (windmillPrefersReducedMotion) {
  windmillRevealItems.forEach((item) => item.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const windmillRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  windmillRevealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    windmillRevealObserver.observe(item);
  });
} else {
  windmillRevealItems.forEach((item) => item.classList.add("visible"));
}
