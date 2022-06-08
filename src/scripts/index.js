/* eslint-disable */ 

import '../styles/index.scss';

console.log('webpack starterkit new');

const hamburger = document.querySelector('.hamburger');
let headers = document.querySelectorAll('.accordion-header');
const mobNav = document.querySelector('.mob-nav-overlay');
const mobNavOuter = document.querySelector('.mob-nav-list-top');
const mobSubNav = document.querySelector('.shop-by-category-subnav');
const shopBy = document.querySelector('.shop-by-category-mob');
const shopByBack = document.querySelector('.shop-by-back');
headers.forEach(header => header.addEventListener('click', openCurrAccordion));


function openCurrAccordion(e) {
    e.preventDefault();
    headers.forEach(el => {
        let parent = el.parentElement;
		let article = el.nextElementSibling;
        if (this === el && !parent.classList.contains('open')) {
			parent.classList.add('open');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			article.style.maxHeight = '0px';
		}
    });
}

hamburger.addEventListener('click', function(e){
    e.preventDefault();
    mobNav.classList.toggle('mob-nav-show');
    hamburger.classList.toggle('hamburger-active');
});

shopBy.addEventListener('click' , function(e){
    e.preventDefault();
    mobSubNav.classList.add('subnav-show');
    mobNavOuter.classList.add('mob-parent-nav-hide');
});
shopByBack.addEventListener('click' , function(e){
    e.preventDefault();
    mobSubNav.classList.remove('subnav-show');
    mobNavOuter.classList.remove('mob-parent-nav-hide');
});








var swiper = new Swiper(".mySwiper", {
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

  });
  



var clinicallySlider = new Swiper(".clinicallySwiper", {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 3,
    centeredSlides: true,

  });
