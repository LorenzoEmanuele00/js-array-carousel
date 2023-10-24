const images = [`<img src="./img/01.jpg" alt="">`, `<img src="./img/02.jpg" alt="">`, `<img src="./img/03.jpg" alt="">`, `<img src="./img/04.jpg" alt="">`];

for (let i = 0; i < images.length; i++) {
    document.querySelector (".items").innerHTML += `<div class="item ">${images [i]}</div>`;
}

document.querySelector (".item").classList.add ("active")

document.querySelector(".prev").addEventListener("click", function() {



});

document.querySelector(".next").addEventListener("click", function() {

    

});

