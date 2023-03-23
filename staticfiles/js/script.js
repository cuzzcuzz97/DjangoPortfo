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

const animationBox = document.querySelectorAll('.portfolioCard')
animationBox.forEach((item) => {
  item.style.top = '2000px';
})

sections.forEach((section,index) => {
  if (index === 0 || bodyHeight < 1500) {
    section.style.opacity = '1';
  }
})

window.addEventListener("scroll", (event) => {
  const cardAnimation1 = document.querySelectorAll('.portfolioCard')
  let scroll = this.scrollY;
  sections.forEach((section) => {
    if (scroll + 500 > section.offsetTop) {
      section.style.opacity = '1';
      if (section.id === 'portfolio') {
        cardAnimation1.forEach((card,index) => {
          setTimeout(() => {
            card.style.top = '0';
          }, index * 500);
        })
      }
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
