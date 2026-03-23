gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO CINEMATIC ENTRY
========================= */

gsap.timeline()
.from(".hero-badge", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
})
.from(".hero-h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
}, "-=0.5")
.from(".hero-desc", {
  y: 40,
  opacity: 0,
  duration: 0.8
}, "-=0.6")
.from(".hero-btns a", {
  y: 20,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6
}, "-=0.5")
.from(".hero-card", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8");

/* =========================
   SCROLL REVEAL SYSTEM
========================= */

gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });
});

/* =========================
   STAGGERED CARDS (WORK)
========================= */

gsap.from(".wcard", {
  scrollTrigger: {
    trigger: ".work-grid",
    start: "top 80%"
  },
  y: 80,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power4.out"
});

/* =========================
   STACK GRID ANIMATION
========================= */

gsap.from(".stile", {
  scrollTrigger: {
    trigger: ".stack-grid",
    start: "top 80%"
  },
  scale: 0.8,
  opacity: 0,
  stagger: 0.08,
  duration: 0.6,
  ease: "back.out(1.7)"
});

/* =========================
   PARALLAX HERO DEPTH
========================= */

gsap.to("#hero-canvas", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* =========================
   NAV SCROLL EFFECT
========================= */

ScrollTrigger.create({
  start: "top -80",
  onEnter: () => document.getElementById("nav").classList.add("scrolled"),
  onLeaveBack: () => document.getElementById("nav").classList.remove("scrolled")
});

/* =========================
   MAGNETIC BUTTONS
========================= */

document.querySelectorAll(".btn-primary, .btn-ghost").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.4
    });
  });
});
