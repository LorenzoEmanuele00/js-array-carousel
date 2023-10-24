// CREATE IMAGES VIA JS
const images = [`<div class="item "><img src=img/01.jpg></div>`, `<div class="item "><img src=img/02.jpg></div>`, `<div class="item "><img src=img/03.jpg></div>`, `<div class="item "><img src=img/04.jpg></div>`];
let imageList = ``;

for (let i = 0; i < images.length; i++) {

    imageList += `${images [i]}`;
    
}

document.querySelector(".items").innerHTML += imageList;


// APPLY ACTIVE TO 1ST ELEMENT
let activeIndex = 1;
const slides = document.querySelectorAll(".item");
console.log (slides);

slides[activeIndex].classList.add("active");


// APPLY SWITCH IMG WHEN CLICK ARROW
document.querySelector(".prev").addEventListener("click", function() {
    if (activeIndex != 0) {
        slides[activeIndex].classList.remove("active");
        --activeIndex;
        slides[activeIndex].classList.add("active");
    } else {
        slides[activeIndex].classList.remove("active");
        activeIndex = slides.length - 1;
        slides[activeIndex].classList.add("active");
    }

});

document.querySelector(".next").addEventListener("click", function() {
    if (activeIndex != slides.length - 1) {
        slides[activeIndex].classList.remove("active");
        ++activeIndex;
        slides[activeIndex].classList.add("active");
    } else {
        slides[activeIndex].classList.remove("active");
        activeIndex = 0;
        slides[activeIndex].classList.add("active");
    }

});

