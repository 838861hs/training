import "@scss/basic_layout.scss";
import "swiper/css";
import Swiper from "swiper/bundle";

/* eslint-disable */
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
