const ovenRevealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
const ovenPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (ovenPrefersReducedMotion) {
  ovenRevealItems.forEach((item) => item.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const ovenRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  ovenRevealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    ovenRevealObserver.observe(item);
  });
} else {
  ovenRevealItems.forEach((item) => item.classList.add("visible"));
}
