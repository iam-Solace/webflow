var swiper = new Swiper(".slider-tabs", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 56,
    },
  },
});
// Arrows Swiper
$(document).ready(function () {
  const arrowRight = ".swiper-arrow-next";
  const arrowLeft = ".swiper-arrow-prev";
  const tabs = ".slider-tabs";
  const wCurrent = ".w--current";
  const wTabLink = ".w-tab-link";

  $(arrowRight).click(function () {
    $(tabs).find(wCurrent).next().length != 0
      ? $(tabs).find(wCurrent).next().click()
      : $(tabs).find(wTabLink).first().click();
  });

  $(arrowLeft).click(function () {
    $(tabs).find(wCurrent).prev().length != 0
      ? $(tabs).find(wCurrent).prev().click()
      : $(tabs).find(wTabLink).last().click();
  });
});

$(".swiper-slide").click(function () {
  const index = $(this).index();
  $(".swiper-pagination-bullet").eq(index).click();
});
alert("test");
