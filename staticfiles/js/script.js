$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
    $('body').addClass('fixedHeader');
  } else {
    $('body').removeClass('fixedHeader');
  }
});

const sections = document.querySelectorAll('section') 
// const sectionsOffsetTop = []
const bodyHeight = document.body.scrollHeight;
console.log(`Body height is: ${bodyHeight}px`);

sections.forEach((section,index) => {
  if (index === 0 || bodyHeight < 1500) {
    section.style.opacity = '1';
  }
})

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  sections.forEach((section) => {
    if (scroll + 500 > section.offsetTop) {
      section.style.opacity = '1';
    }
  })
});



var swiper = new Swiper(".testimonialSwiper", {
  navigation: {
    nextEl: ".test-swiper-button-next",
    prevEl: ".test-swiper-button-prev",
  },
});


var swiper = new Swiper(".certificatesSlider", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cert-swiper-button-next",
    prevEl: ".cert-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
