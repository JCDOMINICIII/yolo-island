const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const hiddenElements = document.querySelectorAll('feature-card');
hiddenElements.forEach((card) => {
  card.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach((card) => observer.observe(card))

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else {

navbar.classList.remove("scrolled");

}

});

// Rooms JS
const roomCards = document.querySelectorAll(".room-card");


const roomObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

let index = [...roomCards].indexOf(entry.target);


setTimeout(()=>{

entry.target.classList.add("show");

}, index * 200);


}

});

});


roomCards.forEach(card=>{

roomObserver.observe(card);

});