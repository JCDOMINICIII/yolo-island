const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const hiddenElements = document.querySelectorAll('.feature-card');
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

const heroImage = document.querySelector(".hero-image");

const heroImages = [
  "images/hero/hero1.JPG",
  "images/hero/hero2.JPG",
  "images/hero/hero3.JPG",
  "images/hero/hero4.JPG",
  "images/hero/hero5.JPG"
];


let currentImage = 0;


setInterval(()=>{

  const heroImage = document.querySelector(".hero-image");
    if(heroImage){
// your hero slider code here

}


  setTimeout(()=>{

    currentImage++;

    if(currentImage >= heroImages.length){
      currentImage = 0;
    }


    heroImage.style.backgroundImage =
    `url("${heroImages[currentImage]}")`;


  },4000);


},5000);

// ROOMS JS

const carousels = document.querySelectorAll(".room-image");


carousels.forEach((carousel)=>{


const image = carousel.querySelector(".carousel-image");

const next = carousel.querySelector(".next-btn");

const prev = carousel.querySelector(".prev-btn");

const dotsContainer = carousel.querySelector(".carousel-dots");

let autoSlide;



let images = [];



if(image.alt === "Standard Chalet"){

images = [

"images/rooms/standard/standard1.JPG",
"images/rooms/standard/standard5.JPG",
"images/rooms/standard/standard6.JPG"

];

}



else if(image.alt === "Executive Chalet"){

images = [

"images/rooms/executive/executive1.JPG",
"images/rooms/executive/executive6.JPG",
"images/rooms/executive/standard2.JPG",
"images/rooms/executive/standard4.JPG"

];

}



else {

images = [

"images/rooms/deluxe/executive5.JPG",
"images/rooms/deluxe/standard3.JPG",
"images/rooms/deluxe/executive4.JPG",
"images/rooms/deluxe/executive2.JPG"

];

}



let current = 0;



// CREATE DOTS

images.forEach((img,index)=>{


const dot = document.createElement("span");


dot.classList.add("dot");


if(index === 0){

dot.classList.add("active");

}


dot.addEventListener("click",()=>{


changeImage(index);


});


dotsContainer.appendChild(dot);


});



const dots = carousel.querySelectorAll(".dot");





function updateDots(){


dots.forEach((dot,index)=>{


dot.classList.toggle(
"active",
index === current
);


});


}





function changeImage(index){

current = index;


image.classList.add("fade");


setTimeout(()=>{


image.src = images[current];


image.onload = ()=>{

image.classList.remove("fade");

};


updateDots();


}, 150);


}





next.addEventListener("click",()=>{


current++;


if(current >= images.length){

current = 0;

}


changeImage(current);


});





prev.addEventListener("click",()=>{


current--;


if(current < 0){

current = images.length - 1;

}


changeImage(current);

});

function startAutoSlide(){

autoSlide = setInterval(()=>{


current++;


if(current >= images.length){

current = 0;

}


changeImage(current);



},3000);


}



function stopAutoSlide(){

clearInterval(autoSlide);

}



startAutoSlide();



carousel.addEventListener("mouseenter",()=>{

stopAutoSlide();

});



carousel.addEventListener("mouseleave",()=>{

startAutoSlide();

});

carousel.addEventListener("touchstart",()=>{

stopAutoSlide();

});

carousel.addEventListener("touchend",()=>{
  stopAutoSlide();
});


startAutoSlide();

});