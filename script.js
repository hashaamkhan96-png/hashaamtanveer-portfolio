// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});

// scroll animation
const elements = document.querySelectorAll(".card, .hero-text, .hero-img");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform="translateY(0)";
    }
  });
});

elements.forEach(el=>{
  el.style.opacity=0;
  el.style.transform="translateY(60px)";
  observer.observe(el);
});
