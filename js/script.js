const imgPaths = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];
const slideContainer = document.querySelector(".slideContainer");

// Genera le img del carousel
for (let i=0; i<imgPaths.length; i++) {
    slideContainer.innerHTML += `<img src="${imgPaths[i]}" class="hidden carouselImg"></img>`;
    console.log ("slideContainer");
}

const allImgs = document.querySelectorAll(".carouselImg");
allImgs[0].classList.toggle("hidden");

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
let carouselIndex = 0;

prevBtn.addEventListener("click", function(){

    // Va al'img precedente solo se esiste
    if (carouselIndex >0) {
        allImgs[carouselIndex].classList.toggle("hidden");

        carouselIndex--;
        allImgs[carouselIndex].classList.toggle("hidden");
    }

    console.log("prev", carouselIndex)

});

nextBtn.addEventListener("click", function(){

    // Passa alla prossima img solo se esiste
    if (carouselIndex < imgPaths.length -1) {
        allImgs[carouselIndex].classList.toggle("hidden");

        carouselIndex++;
        allImgs[carouselIndex].classList.toggle("hidden");
    }

    console.log("next", carouselIndex)
});