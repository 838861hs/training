import "@scss/basic_layout.scss";
import "swiper/css";
import Swiper from "swiper/bundle";
import gsap from "gsap";

/* eslint-disable */
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

gsap.to("header", {
  backgroundColor: "red",
  duration: 3,
  repeatDelay: 0.5,
  repeat: -1,
  yoyo: true,
});
