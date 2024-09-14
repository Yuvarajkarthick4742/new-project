const slides = document.querySelectorAll('.testimonial-slide');
const lines = document.querySelectorAll('.dot');  // Updated to match the new lines
let currentIndex = 0;
let isAnimating = false;

function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];
    const direction = index > currentIndex ? 1 : -1;

    currentSlide.style.transform = translateX(0);
    nextSlide.style.transform = `translateX(${direction * 100}%)`;

    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');

    setTimeout(() => {
        currentSlide.style.transform = `translateX(${direction * -100}%)`;
        nextSlide.style.transform = translateX(0);

        lines[currentIndex].classList.remove('active');
        lines[index].classList.add('active');
        currentIndex = index;
        isAnimating = false;
    }, 10);
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

lines.forEach((line, index) => {
    line.addEventListener('click', () => {
        if (index !== currentIndex) {
            showSlide(index);
        }
    });
});

// Initial display
showSlide(currentIndex);