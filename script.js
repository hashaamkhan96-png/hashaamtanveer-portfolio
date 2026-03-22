// LENIS SMOOTH SCROLL
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP HERO ANIMATION
gsap.from(".reveal", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2
});

// PAGE TRANSITION
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");

    gsap.to(".transition", {
      y: 0,
      duration: 0.6,
      onComplete: () => window.location.href = href
    });
  });
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// MAGNETIC BUTTON
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// THREE JS PARTICLES
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setSize(innerWidth, innerHeight);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000
  );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x4f7cff });
const points = new THREE.Points(geometry, material);

scene.add(points);
camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();
