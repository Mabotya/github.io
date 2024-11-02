let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.createElement('div');
indicatorsContainer.classList.add('indicators');

slides.forEach((slide, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.textContent = index + 1; // インジケーターの番号を表示
    indicator.addEventListener('click', () => {
        showSlide(index); // クリックしたインジケーターに基づいてスライドを表示
    });
    indicatorsContainer.appendChild(indicator);
});

document.querySelector('.slideshow-container').appendChild(indicatorsContainer);

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add('active');
    updateIndicators();
    setTimeout(showSlides, 5000);
}

// スライドを特定のインデックスに切り替える関数
function showSlide(index) {
    slideIndex = index;
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
    updateIndicators();
}

// インジケーターの更新
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

// 初回実行
showSlides();
