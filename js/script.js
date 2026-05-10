const carousel = document.querySelector(".carousel");
const previousButton = document.querySelector("#prev-card");
const nextButton = document.querySelector("#next-card");
const podcastPlayButton = document.querySelector(".podcast-trigger");
const podcastPlayer = document.querySelector("#podcast-player");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const podcastShareLinks = document.querySelectorAll("[data-share-platform]");

function scrollCards(direction) {
  if (!carousel) return;

  const firstCard = carousel.querySelector(".topic-card");
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;

  carousel.scrollBy({
    left: direction * (cardWidth + 20),
    behavior: "smooth"
  });
}

function setupMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks?.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") return;

    navLinks.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !navLinks?.classList.contains("is-open")) return;

    navLinks.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });
}

function setupPodcastShare() {
  if (!podcastShareLinks.length) return;

  const podcastTitle = "Everyday Energy: Smart Choices. Stronger Future.";
  const podcastText = "Listen to the Powering Tomorrow podcast: Everyday Energy: Smart Choices. Stronger Future.";
  const podcastUrl = window.location.href.split("#")[0];
  const encodedTitle = encodeURIComponent(podcastTitle);
  const encodedText = encodeURIComponent(podcastText);
  const encodedUrl = encodeURIComponent(podcastUrl);

  podcastShareLinks.forEach((link) => {
    const platform = link.dataset.sharePlatform;

    if (platform === "linkedin") {
      link.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
    }

    if (platform === "twitter") {
      link.href = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    }

    if (platform === "tiktok" || platform === "instagram") {
      link.addEventListener("click", () => {
        navigator.clipboard?.writeText(`${podcastText} ${podcastUrl}`).catch(() => {});
      });
    }
  });
}

function setupAboutPage() {
  const revealItems = document.querySelectorAll(".about-reveal");
  const valueButtons = document.querySelectorAll(".value-letter");
  const valueTitle = document.querySelector("#active-value-title");
  const valueCopy = document.querySelector("#active-value-copy");
  const approachCarousel = document.querySelector("#approach-carousel");
  const approachPrevious = document.querySelector("#approach-prev");
  const approachNext = document.querySelector("#approach-next");
  const flashcards = document.querySelectorAll(".team-flashcard");

  if (revealItems.length) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.18 });

      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }

  function activateValue(button) {
    valueButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    if (valueTitle) valueTitle.textContent = button.dataset.valueTitle || "";
    if (valueCopy) valueCopy.textContent = button.dataset.valueCopy || "";
  }

  valueButtons.forEach((button) => {
    button.addEventListener("focus", () => activateValue(button));
    button.addEventListener("click", () => activateValue(button));
  });

  function scrollApproachCards(direction) {
    if (!approachCarousel) return;

    const firstCard = approachCarousel.querySelector(".approach-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;

    approachCarousel.scrollBy({
      left: direction * (cardWidth + 18),
      behavior: "smooth"
    });
  }

  approachPrevious?.addEventListener("click", () => scrollApproachCards(-1));
  approachNext?.addEventListener("click", () => scrollApproachCards(1));

  flashcards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      card.classList.toggle("is-flipped");
    });
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

setupMenu();
setupPodcastShare();
setupAboutPage();

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fields = [
    {
      input: contactForm.elements.name,
      message: "Please enter your name.",
      minMessage: "Name must be at least 2 characters."
    },
    {
      input: contactForm.elements.email,
      message: "Please enter your email address.",
      typeMessage: "Please enter a valid email address."
    },
    {
      input: contactForm.elements.subject,
      message: "Please enter a subject.",
      minMessage: "Subject must be at least 3 characters."
    },
    {
      input: contactForm.elements.message,
      message: "Please enter a message.",
      minMessage: "Message must be at least 10 characters."
    }
  ];

  let firstInvalidField = null;

  fields.forEach(({ input, message, minMessage, typeMessage }) => {
    const error = document.querySelector(`#${input.id}-error`);
    input.setCustomValidity("");

    if (input.validity.valueMissing) {
      input.setCustomValidity(message);
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity(typeMessage);
    } else if (input.validity.tooShort) {
      input.setCustomValidity(minMessage);
    }

    error.textContent = input.validationMessage;
    input.toggleAttribute("aria-invalid", !input.validity.valid);

    if (!input.validity.valid && !firstInvalidField) {
      firstInvalidField = input;
    }
  });

  if (firstInvalidField) {
    formStatus.textContent = "Please fix the highlighted fields before sending.";
    firstInvalidField.focus();
    return;
  }

  if (!contactForm.action || contactForm.action.includes("YOUR_FORM_ID")) {
    formStatus.textContent = "The contact form is not connected yet. Please try again later.";
    return;
  }

  formStatus.textContent = "";
  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton?.setAttribute("disabled", "");

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Formspree request failed with status ${response.status}`);
    }

    window.location.href = new URL("thank-you.html", window.location.href).href;
  } catch (error) {
    formStatus.textContent = "Sorry, your message could not be sent. Please try again.";
    console.error("Formspree send failed:", error);
  } finally {
    submitButton?.removeAttribute("disabled");
  }
});
