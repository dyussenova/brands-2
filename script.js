const slider = document.querySelector(".swiper");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

let elem = document.querySelector("#elem");
let show = document.querySelector("#show");

show.addEventListener("click", function (event) {
  event.preventDefault();
  elem.classList.toggle("hidden");
  if (this.textContent === "Показать все") {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Показать все";
  }
  show.classList.toggle("btn__show");
});
