import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const PopularSection = () => {
  const [cars, setCars] = useState([]);

  const fetchPopularCars = async () => {
    try {
      const res = await apiService.getFeaturedCar();
      setCars(res.data.data || []); // ensure it's always an array
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPopularCars();
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
    <section className="popular-section-four pt-4 ">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading heading-four" data-aos="fade-down">
          <h2>Popular Cars On Recommendations</h2>
          <p>Here are some versatile options that cater to different needs</p>
        </div>
        {/* /Section Header */}

        <Slider {...sliderSettings} className="car-slider">
          {cars.map((car, idx) => (
            <div className="car-item" key={car._id || idx}>
              <h6>{car?.carBrand?.brandName}</h6>
              <h2 className="display-1">{car?.carModel?.carModel}</h2>

              <div className="car-img">
                <img
                  src={`${BASE_URL_IMG}${car?.image}`}
                  alt={car?.carModel?.carModel}
                  className="img-fluid"
                />
                <div className="amount-icon">
                  <span className="day-amt">
                    <p>Starts From</p>
                    <h6>
                      ${car?.pricing?.prices?.daily || 0} <span>/day</span>
                    </h6>
                  </span>
                </div>
              </div>

              <div className="spec-list">
                <span>
                  <img src="/user-assets/img/icons/spec-01.svg" alt="trans" />
                  {car?.carTransmission?.carTransmission}
                </span>
                <span>
                  <img src="/user-assets/img/icons/spec-05.svg" alt="fuel" />
                  {car?.carFuel?.carFuel}
                </span>
                <span>
                  <img src="/user-assets/img/icons/spec-05.svg" alt="seats" />
                  {car?.carSeats?.carSeats} Seats
                </span>
              </div>

              <Link to={`/listing-details/${car._id}`} className="btn btn-primary">
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
