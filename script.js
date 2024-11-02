let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    indicators.forEach((indicator) => {
        indicator.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
    indicators[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 5000);
}

// インジケーターをクリックしたときの処理
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        slideIndex = index;
        showSlides();
    });
});

// 初回実行
showSlides();
