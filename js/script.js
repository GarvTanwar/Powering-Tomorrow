const carousel = document.querySelector(".carousel");
const previousButton = document.querySelector("#prev-card");
const nextButton = document.querySelector("#next-card");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const podcastPlayButton = document.querySelector(".podcast-trigger");
const podcastPlayer = document.querySelector("#podcast-player");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

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
