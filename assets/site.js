// Small, optional enhancements. Every page works without this file.
document.documentElement.classList.remove("no-js");

// Old links into the original single-page 59 Seconds case study (jarfis-ai.github.io/#case and so on)
// now land on the matching part of /59-seconds/.
(function forwardOldAnchors() {
  const map = { "#about": "#story", "#case": "#story", "#action": "#screens", "#results": "#results", "#docs": "#report" };
  const isHome = location.pathname === "/" || location.pathname === "/index.html";
  if (isHome && map[location.hash]) location.replace("/59-seconds/" + map[location.hash]);
})();

// Fade sections in as they scroll into view (skipped when reduced motion is preferred).
(function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e) => io.observe(e));
})();
