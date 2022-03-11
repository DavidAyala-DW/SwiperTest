import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const slider = new Swiper("#swiper1",{ // Default
  direction: "horizontal",
  speed: 400,

})

// const slider = new Swiper("#swiper1",{ // With autoplay and spacing between slides
//   direction: "horizontal",
//   spaceBetween: 100,
//   speed: 400,
//   autoplay: {
//     delay: 5000,
//   },
// })

// const slider = new Swiper("#swiper1",{ // With pagination and navigation
//   direction: "horizontal",
//   spaceBetween: 100,
//   speed: 400,
//   autoplay: {
//     delay: 5000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// })

// const slider = new Swiper("#swiper1",{ // With loop and freemode

//   direction: "horizontal",
//   spaceBetween: 30,
//   speed: 400,
//   autoplay: {
//     delay: 5000,
//   },
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   type: "progressbar",
//   // },
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
//   loop: true,
//   freeMode: true,

// })

// const slider = new Swiper("#swiper1",{ // effect fade

//   direction: "horizontal",
//   spaceBetween: 30,
//   speed: 200,
//   effect: "fade",
//   autoplay: {
//     delay: 5000,
//   },
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   type: "progressbar",
//   // },
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
//   loop: true

// })

// const slider = new Swiper("#swiper1",{ // effect coverflow

//   direction: "horizontal",
//   spaceBetween: 30,
//   speed: 500,
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 90,
//     stretch: 0,
//     depth: 50,
//     modifier: 1,
//     slideShadows: true,
//   },
//   loop: true

// })

// const slider = new Swiper("#swiper1",{ // pagination number
//   direction: "horizontal",
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   speed: 400,

// })
