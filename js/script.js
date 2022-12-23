const imgPaths = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];
const slideContainer = document.querySelector(".slideContainer");

// Genera le img del carousel
for (let i=0; i<imgPaths.length; i++) {
    slideContainer.innerHTML += `<img src="${imgPaths[i]}" class="hidden carouselImg"></img>`;
    console.log ("slideContainer");
}

const allImgs = document.querySelectorAll(".carouselImg");
allImgs[0].classList.add("show");
allImgs[0].classList.remove("hidden");
