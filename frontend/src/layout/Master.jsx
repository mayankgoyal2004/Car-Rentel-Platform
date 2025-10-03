import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../assets/plugins/flatpickr/flatpickr.min.css";
import "../assets/plugins/fancybox/fancybox.css";
import "../assets/plugins/slick/slick.css";

import "../assets/css/bootstrap.min.css";

import "../assets/plugins/select2/css/select2.min.css";

import "../assets/css/bootstrap-datetimepicker.min.css";

import "../assets/plugins/aos/aos.css";

import "../assets/css/feather.css";

import "../assets/css/owl.carousel.min.css";

import "../assets/plugins/boxicons/css/boxicons.min.css";
import "../assets/css/user-style.css";
import { useEffect } from "react";

const Master = () => {
  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const offset = 150;
    const progressWrap = document.querySelector(".progress-wrap");

    const toggleVisibility = () => {
      if (window.scrollY > offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // click scroll top
    progressWrap.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </div>
  );
};

export default Master;
