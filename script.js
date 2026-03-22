// LENIS
const lenis = new Lenis();
function raf(t){ lenis.raf(t); requestAnimationFrame(raf);}
requestAnimationFrame(raf);

// GSAP
gsap.from(".reveal", {
  y:100,
  opacity:0,
  duration:1.2,
  stagger:0.2
});

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`
});

// MAGNETIC
document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`
  });
  btn.addEventListener("mouseleave", ()=>btn.style.transform="translate(0,0)");
});

// THREE
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.querySelector("#bg")});
renderer.setSize(innerWidth,innerHeight);

const geometry=new THREE.BufferGeometry();
const vertices=[];
for(let i=0;i<4000;i++){
  vertices.push(Math.random()*2000-1000,Math.random()*2000-1000,Math.random()*2000-1000);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices,3));
const material=new THREE.PointsMaterial({color:0x4f7cff});
const points=new THREE.Points(geometry,material);
scene.add(points);
camera.position.z=500;

function animate(){
  requestAnimationFrame(animate);
  points.rotation.y+=0.0007;
  renderer.render(scene,camera);
}
animate();

// AI CHAT (simple demo)
const input = document.getElementById("chatInput");
const body = document.getElementById("chatBody");

input.addEventListener("keydown", e=>{
  if(e.key==="Enter"){
    const msg = input.value;
    body.innerHTML += `<div>You: ${msg}</div>`;
    body.innerHTML += `<div>AI: I help build AI systems 🚀</div>`;
    input.value="";
  }
});
