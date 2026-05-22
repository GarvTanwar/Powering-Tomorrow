const carousel = document.querySelector(".carousel");
const previousButton = document.querySelector("#prev-card");
const nextButton = document.querySelector("#next-card");
const podcastPlayButton = document.querySelector(".podcast-trigger");
const podcastPlayer = document.querySelector("#podcast-player");
const podcastAudio = document.querySelector("#podcast-audio");
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
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

  function closeDropdown() {
    dropdown?.classList.remove("is-open");
    dropdownToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", isOpen);

    if (!isOpen) closeDropdown();
  });

  dropdownToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("is-open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") return;

    navLinks.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    closeDropdown();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    closeDropdown();

    if (navLinks?.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      menuToggle?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("menu-open");
    }
  });

  document.addEventListener("click", (event) => {
    if (!dropdown?.classList.contains("is-open")) return;
    if (dropdown.contains(event.target)) return;

    closeDropdown();
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

function setupPodcastPlayer() {
  if (!podcastPlayer || !podcastAudio) return;

  const toggleButton = podcastPlayer.querySelector(".player-toggle");
  const backButton = podcastPlayer.querySelector(".player-back");
  const forwardButton = podcastPlayer.querySelector(".player-forward");
  const volumeButton = podcastPlayer.querySelector(".player-volume");
  const volumeSlider = podcastPlayer.querySelector(".player-volume-slider");
  const speedToggle = podcastPlayer.querySelector(".player-speed-toggle");
  const speedMenu = podcastPlayer.querySelector(".player-speed-menu");
  const speedOptions = podcastPlayer.querySelectorAll(".player-speed-option");
  const progress = podcastPlayer.querySelector(".player-progress");
  const currentTimeOutput = podcastPlayer.querySelector(".player-current-time");
  const durationOutput = podcastPlayer.querySelector(".player-duration");
  const fallbackDuration = 330;

  function duration() {
    return Number.isFinite(podcastAudio.duration) ? podcastAudio.duration : fallbackDuration;
  }

  function formatTime(value) {
    const seconds = Math.max(0, Math.floor(Number.isFinite(value) ? value : 0));
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function syncTime() {
    const audioDuration = duration();
    const currentTime = Math.min(podcastAudio.currentTime || 0, audioDuration);
    const displayedTime = Math.min(currentTime, fallbackDuration);

    if (progress) {
      progress.max = String(audioDuration);
      progress.value = String(currentTime);
      progress.style.setProperty("--player-position", `${audioDuration ? currentTime / audioDuration * 100 : 0}%`);
    }

    if (currentTimeOutput) currentTimeOutput.textContent = formatTime(displayedTime);
    if (durationOutput) durationOutput.textContent = formatTime(fallbackDuration);
  }

  function syncPlayState() {
    const isPlaying = !podcastAudio.paused;
    toggleButton?.classList.toggle("is-playing", isPlaying);
    toggleButton?.setAttribute("aria-label", isPlaying ? "Pause podcast" : "Play podcast");
  }

  function syncVolumeState() {
    const isMuted = podcastAudio.muted || podcastAudio.volume === 0;
    volumeButton?.classList.toggle("is-muted", isMuted);
    volumeButton?.setAttribute("aria-label", isMuted ? "Unmute podcast" : "Mute podcast");

    if (volumeSlider) {
      volumeSlider.value = String(isMuted ? 0 : podcastAudio.volume);
      volumeSlider.style.setProperty("--volume-position", `${Number(volumeSlider.value) * 100}%`);
    }
  }

  function setSpeedMenuState(isOpen) {
    speedMenu?.toggleAttribute("hidden", !isOpen);
    speedToggle?.setAttribute("aria-expanded", String(isOpen));
  }

  function setPlaybackSpeed(speed) {
    podcastAudio.playbackRate = speed;
    speedToggle?.setAttribute("aria-label", `Playback speed. Current speed ${speed}x`);

    speedOptions.forEach((option) => {
      option.setAttribute("aria-checked", String(Number(option.dataset.speed) === speed));
    });
  }

  function moveBy(seconds) {
    podcastAudio.currentTime = Math.min(Math.max(0, podcastAudio.currentTime + seconds), duration());
    syncTime();
  }

  toggleButton?.addEventListener("click", () => {
    if (podcastAudio.paused) {
      podcastAudio.play().catch(() => {});
      return;
    }

    podcastAudio.pause();
  });

  backButton?.addEventListener("click", () => moveBy(-10));
  forwardButton?.addEventListener("click", () => moveBy(10));

  volumeButton?.addEventListener("click", () => {
    podcastAudio.muted = !podcastAudio.muted;
    syncVolumeState();
  });

  volumeSlider?.addEventListener("input", () => {
    const nextVolume = Number(volumeSlider.value);

    podcastAudio.volume = nextVolume;
    podcastAudio.muted = nextVolume === 0;
    syncVolumeState();
  });

  progress?.addEventListener("input", () => {
    podcastAudio.currentTime = Number(progress.value);
    syncTime();
  });

  speedToggle?.addEventListener("click", () => {
    const isOpen = speedToggle.getAttribute("aria-expanded") === "true";
    setSpeedMenuState(!isOpen);
  });

  speedOptions.forEach((option) => {
    option.addEventListener("click", () => {
      setPlaybackSpeed(Number(option.dataset.speed));
      setSpeedMenuState(false);
      speedToggle?.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!speedToggle || speedMenu?.hasAttribute("hidden")) return;
    if (speedToggle.contains(event.target) || speedMenu?.contains(event.target)) return;

    setSpeedMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || speedMenu?.hasAttribute("hidden")) return;

    setSpeedMenuState(false);
    speedToggle?.focus();
  });

  podcastAudio.addEventListener("loadedmetadata", syncTime);
  podcastAudio.addEventListener("durationchange", syncTime);
  podcastAudio.addEventListener("timeupdate", syncTime);
  podcastAudio.addEventListener("play", syncPlayState);
  podcastAudio.addEventListener("pause", syncPlayState);
  podcastAudio.addEventListener("ended", syncPlayState);
  podcastAudio.addEventListener("volumechange", syncVolumeState);

  syncTime();
  syncPlayState();
  syncVolumeState();
  setPlaybackSpeed(1);
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

function setupNekoEasterEgg() {
  let nekoInstance = null;
  let nekoScriptPromise = null;
  let typedBuffer = "";
  let nekoEnabled = false;

  function loadNekoScript() {
    if (window.createNeko) return Promise.resolve();
    if (nekoScriptPromise) return nekoScriptPromise;

    nekoScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://louisabraham.github.io/nekojs/neko.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.append(script);
    });

    return nekoScriptPromise;
  }

  async function startNeko() {
    if (nekoInstance) return;

    nekoEnabled = true;

    try {
      await loadNekoScript();
      if (!nekoEnabled) return;
      if (!window.createNeko) throw new Error("Neko.js did not expose createNeko.");

      nekoInstance = window.createNeko({
        speed: 28,
        fps: 120,
        behaviorMode: 0,
        allowBehaviorChange: true,
        startX: window.innerWidth - 120,
        startY: window.innerHeight - 120
      });

      nekoInstance.start();
      document.body.classList.add("neko-is-active");
    } catch (error) {
      console.error("Neko.js failed to load:", error);
    }
  }

  function stopNeko() {
    nekoEnabled = false;

    if (!nekoInstance) return;

    nekoInstance.destroy();
    nekoInstance = null;
    document.body.classList.remove("neko-is-active");
  }

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTypingField = target instanceof HTMLElement && (
      target.matches("input, textarea, select") || target.isContentEditable
    );

    if (isTypingField || event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;

    typedBuffer = `${typedBuffer}${event.key.toLowerCase()}`.slice(-3);

    if (typedBuffer === "cat") {
      startNeko();
      typedBuffer = "";
    }

    if (typedBuffer === "dog") {
      stopNeko();
      typedBuffer = "";
    }
  });
}

previousButton?.addEventListener("click", () => scrollCards(-1));
nextButton?.addEventListener("click", () => scrollCards(1));

podcastPlayButton?.addEventListener("click", () => {
  podcastPlayButton.setAttribute("hidden", "");
  podcastPlayButton.setAttribute("aria-expanded", "true");
  if (podcastPlayer && podcastAudio) {
    podcastPlayButton.closest(".podcast-play-area")?.classList.add("is-active");
    podcastPlayer.removeAttribute("hidden");
    podcastPlayer.querySelector(".player-toggle")?.focus();
    podcastAudio.play().catch(() => {});
  }
});

setupMenu();
setupPodcastShare();
setupPodcastPlayer();
setupAboutPage();
setupNekoEasterEgg();

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
