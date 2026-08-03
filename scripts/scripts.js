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


// Gallery JS

// GALLERY ARRAY


const galleryData = [

{
 image:"images/gallery/beach/beach1.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach2.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach3.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},


{
 image:"images/gallery/beach/beach4.JPG",
 category:"beach",
 alt:"Beach sunset"
},

{
 image:"images/gallery/beach/beach4.JPG",
 category:"beach",
 alt:"Beach sunset"
},

{
 image:"images/gallery/beach/beach5.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach6.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beachview.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach-bar.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach-bar2.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/beach-chairs.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},

{
 image:"images/gallery/beach/drone-beach-view.JPG",
 category:"beach",
 alt:"Beautiful beach view"
},


{
 image:"images/rooms/deluxe/executive2.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/deluxe/executive4.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/deluxe/executive5.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/deluxe/executive2.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/executive/executive1.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/executive/executive6.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/executive/standard2.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/executive/standard4.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/standard/standard1.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/standard/standard5.JPG",
 category:"rooms",
 alt:"Luxury room"
},

{
 image:"images/rooms/standard/standard6.JPG",
 category:"rooms",
 alt:"Luxury room"
},


{
 image:"images/gallery/restaurant/restaurant5.JPG",
 category:"dining",
 alt:"Restaurant"
},


{
 image:"images/gallery/restaurant/restaurant6.JPG",
 category:"dining",
 alt:"Restaurant"
},


{
 image:"images/gallery/restaurant/restuarant.JPG",
 category:"dining",
 alt:"Restaurant"
},


{
 image:"images/gallery/restaurant/restuarant7.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/restaurant/restuarant7.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/foods/restaurant3.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/foods/restaurant4.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/foods/rstaurant2.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/drinks/drink1.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/drinks/drink2.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/drinks/drink3.JPG",
 category:"dining",
 alt:"Restaurant"
},

{
 image:"images/gallery/drinks/drink4.JPG",
 category:"dining",
 alt:"Restaurant"
},


{
 image:"images/gallery/resort/hammock.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/resort/resort-aerial-view.JPG",
 category:"resort",
 alt:"Resort experience"
},


{
 image:"images/gallery/activities/bonfire.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/bonfire2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/jetski.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/jetski2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/kayak.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/kayak2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/live-music.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/live-music-2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool1.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool3.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool4.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool5.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool6.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool7.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/pool8.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/pool/poolview.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/people/couple.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/people/family.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/people/couple2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/people/family2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/people/family3.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/volleyball.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/activities/volleyball2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/boat-cruise/boat1.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/boat-cruise/boat2.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/boat-cruise/boat3.JPG",
 category:"resort",
 alt:"Resort experience"
},

{
 image:"images/gallery/beach/sunrisebeach1.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunrisebeach2.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunrisebeach3.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunset-beach1.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunsetbeach3.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunsetbeach7.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/sunsetbeah8.JPG",
 category:"sunset",
 alt:"Sunset view"
},

{
 image:"images/gallery/beach/susetbeach2.JPG",
 category:"sunset",
 alt:"Sunset view"
}


];

const galleryContainer =
document.querySelector(".gallery-container");




galleryData.forEach(item=>{


const galleryItem =
document.createElement("div");


galleryItem.classList.add("gallery-item");


galleryItem.dataset.category =
item.category;



galleryItem.innerHTML = `

<img 
src="${item.image}"
alt="${item.alt}"
loading="lazy">

`;



galleryContainer.appendChild(galleryItem);


});

// GALLERY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;


    // remove active from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });


    // add active to clicked button
    button.classList.add("active");


    // filter images
    galleryItems.forEach(item => {

      const category = item.dataset.category;


      if (filter === "all" || category === filter) {

        item.classList.remove("hide");

      } else {

        item.classList.add("hide");

      }

    });

  });

});


// GALLERY LIGHTBOX

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

const closeLightbox =
document.querySelector(".close-lightbox");

const nextBtn =
document.querySelector(".lightbox-next");

const prevBtn =
document.querySelector(".lightbox-prev");

let galleryIndex = 0;

const imageArray =
Array.from(galleryImages);

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

galleryIndex = index;

lightboxImage.src =
imageArray[galleryIndex].src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

nextBtn.addEventListener("click",()=>{

galleryIndex++;

if(galleryIndex >= imageArray.length){

galleryIndex = 0;

}

lightboxImage.src =
imageArray[galleryIndex].src;

});

prevBtn.addEventListener("click",()=>{

galleryIndex--;

if(galleryIndex < 0){

galleryIndex =
imageArray.length - 1;
}

lightboxImage.src =
imageArray[galleryIndex].src;
});