// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// MAGNETIC BUTTON
document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", ()=>{
    btn.style.transform = "translate(0,0)";
  });
});

// PARTICLE BACKGROUND
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size:2,
    speed:Math.random()*1
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.y += p.speed;
    if(p.y > canvas.height) p.y = 0;

    ctx.fillStyle="#4f7cff";
    ctx.fillRect(p.x,p.y,p.size,p.size);
  });

  requestAnimationFrame(animate);
}

animate();
