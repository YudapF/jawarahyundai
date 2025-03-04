document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".carousel img");
    let dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    let intervalTime = 3000; // 3 seconds
    let interval;
    let touchStartX = 0;

    // Create dots dynamically
    images.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dots span");

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showImage(currentIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        interval = setInterval(nextImage, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Event Listeners for buttons
    document.querySelector(".next").addEventListener("click", () => {
        nextImage();
        resetAutoSlide();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        prevImage();
        resetAutoSlide();
    });

    // Touch gestures for mobile
    document.querySelector(".carousel").addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector(".carousel").addEventListener("touchend", (e) => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            nextImage(); // Swipe left
        } else if (touchEndX - touchStartX > 50) {
            prevImage(); // Swipe right
        }
        resetAutoSlide();
    });

    // Initialize first image and start auto-slide
    showImage(currentIndex);
    startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".contact-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.location.href = "https://wa.me/6289627039134?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda!"; // Replace with actual number
            } else {
                // window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdKv46fvIGzjWFbOzKBP8Y9JZ6dhOtRvP_3kiifrSTOBImF6g/viewform?usp=header";
                window.location.href = "https://wa.me/6289627039134?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda!"; // Replace with actual number
            }
        });
    });
});