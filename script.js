let slideIndex = 0; // 初期値を0に設定
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.createElement('div');
indicatorsContainer.classList.add('indicators');

// ページが読み込まれたときにフェードインを適用
window.addEventListener('load', () => {
    initSlides(); // スライドの初期化を呼び出す
});

// 自動でスライドを切り替える関数
function showSlides() {
    slides[slideIndex].style.opacity = '0'; // 現在のスライドをフェードアウト
    slideIndex = (slideIndex + 1) % slides.length; // 次のスライドへ
    slides[slideIndex].style.opacity = '1'; // 次のスライドを即座に表示
    updateIndicators(); // インジケーターを更新
    setTimeout(showSlides, 5000); // 5秒ごとに切り替え
}

// 特定のインデックスにスライドを切り替える関数
function showSlide(index) {
    slides[slideIndex].style.opacity = '0'; // 現在のスライドをフェードアウト
    slideIndex = index; // 新しいスライドのインデックスを設定
    slides[slideIndex].style.opacity = '1'; // 新しいスライドを即座に表示
    updateIndicators(); // インジケーターを更新
}

// インジケーターの更新
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

// 初回実行
function initSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? '1' : '0'; // 初期状態を設定
        if (index === slideIndex) {
            slide.classList.add('active'); // 初期スライドをアクティブに
        }
    });
    updateIndicators(); // インジケーターの初期状態を更新
    setTimeout(showSlides, 5000); // 自動スライドの実行を遅延させる

    // インジケーターにクリックイベントリスナーを追加
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index)); // クリックされたときの処理
    });
}


