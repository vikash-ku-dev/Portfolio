
/* 1. Update the scroll progress bar */
const progress = document.getElementById("progress");

function updateProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage = maxScroll > 0
    ? (window.scrollY / maxScroll) * 100
    : 0;

  progress.style.width = percentage + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* 2. Update the copyright year */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* 3. Animate content when it enters the viewport */
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    /* Stagger cards for a cascading animation */
    if (
      element.classList.contains("skill") ||
      element.classList.contains("project-card")
    ) {
      element.style.transitionDelay = `${(index % 3) * 110}ms`;
    }

    revealObserver.observe(element);
  });

  /* 4. Highlight the navigation link for the active section */
  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".navlinks a").forEach((link) => {
            const active =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("current-section", active);
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px"
    }
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  /* Keep everything visible when reduced motion is requested */
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}

/* 5. Slight parallax movement on the AI orb */
if (!reduceMotion) {
  const orb = document.querySelector(".orbital");
  let queued = false;

  window.addEventListener("scroll", () => {
    if (queued) return;

    queued = true;

    requestAnimationFrame(() => {
      const y = Math.min(window.scrollY, 600);
      orb.style.transform = `translateY(${y * 0.075}px)`;
      queued = false;
    });
  }, { passive: true });
}