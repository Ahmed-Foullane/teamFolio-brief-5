let humbergerBar = document.querySelector(".humberger");

let navMenu = document.querySelector("nav");

let navItems = document.querySelectorAll(".navItem");




humbergerBar.addEventListener("click", () => {
  humbergerBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    navItems.forEach((i) => {
      i.classList.remove("activeColor");
    });
    e.classList.add("activeColor");
  });
});

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    humbergerBar.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


// slider img 

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.testimonials__wrapper');
    const slides = document.querySelectorAll('.testimonials__slide');
    const prevBtn = document.querySelector('.testimonials__nav--prev');
    const nextBtn = document.querySelector('.testimonials__nav--next');
    
    let currentIndex = 0;
    const slidesPerView = 3;
    const totalSlides = slides.length;

    function updateSlidePositions() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    function goToNext() {
        if (currentIndex < totalSlides - slidesPerView) {
            currentIndex++;
            updateSlidePositions();
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePositions();
        }
    }

    // Initialize positions
    updateSlidePositions();

    // Event listeners
    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);
});