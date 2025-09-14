const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate__animated','animate__fadeInUp'); observer.unobserve(e.target); } })
},{threshold:.15});
document.querySelectorAll('.section .container, .product-card, .step-card').forEach(el=>observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".hero-mascot .schmo");
  let current = 0;
  setInterval(() => {
    frames[current].classList.remove("active");
    current = (current + 1) % frames.length;
    frames[current].classList.add("active");
  }, 500); // ⏱️ cambia cada medio segundo
});

