const prevSlideBtn = document.querySelector('.arrow-prev'),
    nextSlideBtn = document.querySelector('.arrow-next'),
    slidesContent = document.querySelectorAll('.carousel__item');

let currentSlide = 0;
let totalSlides = slidesContent.length;

/* if (totalSlides < 10) {
    counterTotalSlides.innerHTML = `0${totalSlides}`;
} else {
    counterTotalSlides.innerHTML = totalSlides;
}
 */
showSlide();

nextSlideBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide == totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

prevSlideBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
});

function hideSlides() {
    slidesContent.forEach(item => {
        item.style.display = 'none';
    });
}

function showSlide(i = 0) {
    hideSlides();
    slidesContent[i].style.display = 'block';
}

/* function syncSlideNumber() {
    if (currentSlide < 10) {
        counterCurrentSlide.innerHTML = `0${currentSlide+1}`;
    } else {
        counterCurrentSlide.innerHTML = currentSlide + 1;
    }
    showSlide(currentSlide);
}

 */