import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cars = [
  {
    brand: "FORD",
    model: "MUSTANG",
    img: "/user-assets/img/cars/car-15.png",
    price: 650,
    specs: [
      { icon: "/user-assets/img/icons/spec-01.svg", label: "Auto" },
      { icon: "/user-assets/img/icons/spec-02.svg", label: "Power" },
      { icon: "/user-assets/img/icons/spec-03.svg", label: "30 K" },
      { icon: "/user-assets/img/icons/spec-04.svg", label: "AC" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "Diesel" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "5 Persons" },
    ],
    link: "/listing-details",
  },
  {
    brand: "AUDI",
    model: "A3 2024 New",
    img: "/user-assets/img/cars/car-16.png",
    price: 650,
    specs: [
      { icon: "/user-assets/img/icons/spec-01.svg", label: "Auto" },
      { icon: "/user-assets/img/icons/spec-02.svg", label: "Power" },
      { icon: "/user-assets/img/icons/spec-03.svg", label: "60 K" },
      { icon: "/user-assets/img/icons/spec-04.svg", label: "AC" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "Gas" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "4 Persons" },
    ],
    link: "/listing-details",
  },
  {
    brand: "TOYOTA",
    model: "CAMRY SE 350",
    img: "/user-assets/img/cars/car-17.png",
    price: 799,
    specs: [
      { icon: "/user-assets/img/icons/spec-01.svg", label: "Auto" },
      { icon: "/user-assets/img/icons/spec-02.svg", label: "Power" },
      { icon: "/user-assets/img/icons/spec-03.svg", label: "80 K" },
      { icon: "/user-assets/img/icons/spec-04.svg", label: "AC" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "Petrol" },
      { icon: "/user-assets/img/icons/spec-05.svg", label: "6 Persons" },
    ],
    link: "/listing-details",
  },
];

const PopularSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
  };

  return (
    <section className="popular-section-four">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading heading-four" data-aos="fade-down">
          <h2>Popular Cars On Recommendations</h2>
          <p>Here are some versatile options that cater to different needs</p>
        </div>
        {/* /Section Header */}
        <Slider {...sliderSettings} className="car-slider">
          {cars.map((car, idx) => (
            <div className="car-item" key={idx}>
              <h6>{car.brand}</h6>
              <h2 className="display-1">{car.model}</h2>
              <div className="car-img">
                <img src={car.img} alt={car.model} className="img-fluid" />
                <div className="amount-icon">
                  <span className="day-amt">
                    <p>Starts From</p>
                    <h6>
                      ${car.price} <span>/day</span>
                    </h6>
                  </span>
                </div>
              </div>
              <div className="spec-list">
                {car.specs.map((spec, i) => (
                  <span key={i}>
                    <img src={spec.icon} alt="img" />
                    {spec.label}
                  </span>
                ))}
              </div>
              <Link to={car.link} className="btn btn-primary">
                Rent Now
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularSection;
