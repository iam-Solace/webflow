


var swiper = new Swiper(".swiper-container.is-pro", {
  // Autoplay configuration
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 3000,
  },

  // Loop configuration
  loop: true, // Enable infinite loop
  spaceBetween: 23,
  slidesPerView: 1,
  speed: 1500, // Set the speed to 1000 milliseconds (1 second)
  effect: "slide", // You can adjust the effect based on your preference
  easing: "easeInOutQuart", // Set the easing function

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px (tablet)
    991: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

var swiper = new Swiper(".swiper-container.is-news", {
  // Autoplay configuration
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 2500,
  },

  // Loop configuration
  loop: true, // Enable infinite loop
  spaceBetween: 16,
  slidesPerView: 1,
  speed: 1000, // Set the speed to 1000 milliseconds (1 second)
  effect: "slide", // You can adjust the effect based on your preference
  easing: "easeInOutQuart", // Set the easing function

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px (tablet)
    991: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 480px (phone)
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
