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

const Master = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Master;
