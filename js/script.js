const carousel = document.querySelector(".carousel");
const previousButton = document.querySelector("#prev-card");
const nextButton = document.querySelector("#next-card");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const podcastPlayButton = document.querySelector(".podcast-trigger");
const podcastPlayer = document.querySelector("#podcast-player");

function scrollCards(direction) {
  if (!carousel) return;

  const firstCard = carousel.querySelector(".topic-card");
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;

  carousel.scrollBy({
    left: direction * (cardWidth + 20),
    behavior: "smooth"
  });
}

previousButton?.addEventListener("click", () => scrollCards(-1));
nextButton?.addEventListener("click", () => scrollCards(1));

podcastPlayButton?.addEventListener("click", () => {
  podcastPlayButton.setAttribute("hidden", "");
  podcastPlayButton.setAttribute("aria-expanded", "true");
  if (podcastPlayer) {
    podcastPlayer.removeAttribute("hidden");
    podcastPlayer.focus?.();
  }
});

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !navLinks?.classList.contains("is-open")) return;

  navLinks.classList.remove("is-open");
  menuToggle?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
});
