import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    duration: 500, // Duration of animations
    once: true, // Whether animation should happen only once
  });
};

export default initAOS;
