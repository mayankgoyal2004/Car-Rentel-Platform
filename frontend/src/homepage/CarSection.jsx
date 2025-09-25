import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { Heart } from "react-feather";

export const CarSection = () => {
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const fetchCars = async () => {
    try {
      const res = await apiService.getFeaturedCar();
      setCars(res.data.data);
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  const getWishList = async () => {
    try {
      const res = await apiService.getWishlist();
      setWishlist(res.data.wishlist);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  const handleWishlist = async (carId) => {
    try {
      const res = await apiService.addWishlist({ carId });
      setWishlist(res.data.wishlist || []);
    } catch (err) {
      console.error("Error toggling wishlist:", err);
    }
  };

  useEffect(() => {
    getWishList();
  }, []);

  // helper to check if car is in wishlist
  const isInWishlist = (carId) =>
    Array.isArray(wishlist) && wishlist.some((w) => w._id === carId);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="car-section">
      <div className="container">
        <div className="section-heading heading-four">
          <h2>Explore Most Popular Cars</h2>
          <p>Here's a list of some of the most popular cars globally</p>
        </div>
        <div className="row">
          {cars.slice(0, 6).map((car) => (
            <div className="col-lg-4 col-md-6" key={car._id}>
              <div className="listing-item listing-item-two">
                <div className="listing-img">
                  <Slider {...sliderSettings}>
                    <div className="slide-images">
                      <Link to={`/listing-details/${car._id}`}>
                        <img
                          src={BASE_URL_IMG + car.image}
                          className="img-fluid"
                          alt={car.carModel?.carModel || "Car"}
                        />
                      </Link>
                    </div>
                  </Slider>
                  <div className="fav-item">
                    <div className="d-flex align-items-center gap-2">
                      <span className="featured-text">
                        {car.carBrand?.brandName}
                      </span>
                      <span className="availability">
                        {car.isAvailable ? "Available" : "Not Available"}
                      </span>
                    </div>
                    <button
                      onClick={() => handleWishlist(car._id)}
                      className="btn btn-link p-0 border-0"
                    >
                      <Heart
                        size={20}
                        color={isInWishlist(car._id) ? "red" : "gray"}
                        fill={isInWishlist(car._id) ? "red" : "none"}
                      />
                    </button>
                  </div>
                  <span className="location">
                    <i className="bx bx-map me-1" />
                    {car.mainLocation?.title}
                  </span>
                </div>

                <div className="listing-content">
                  <div className="listing-features d-flex align-items-center justify-content-between">
                    <div className="list-rating">
                      <h3 className="listing-title">
                        <Link to={`/listing-details/${car._id}`}>
                          {car.carModel?.carModel}
                        </Link>
                      </h3>
                      <div className="list-rating">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <i
                              className={`fas fa-star ${
                                i < car.rating ? "filled" : ""
                              }`}
                              key={i}
                            />
                          ))}
                        <span>
                          ({car.rating || 0}) {car.reviews || 0} Reviews
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="price">
                        ${car.pricing?.prices?.daily || 0} <span>/ Day</span>
                      </h4>
                    </div>
                  </div>

                  <div className="listing-details-group">
                    <ul>
                      <li>
                        <img
                          src="/user-assets/img/icons/car-parts-01.svg"
                          alt="Transmission"
                        />
                        <p>{car.carTransmission?.carTransmission}</p>
                      </li>

                      <li>
                        <img
                          src="/user-assets/img/icons/car-parts-03.svg"
                          alt="Fuel"
                        />
                        <p>{car.carFuel?.carFuel}</p>
                      </li>
                      <li>
                        <img
                          src="/user-assets/img/icons/car-parts-05.svg"
                          alt={car.year}
                        />
                        <p>{new Date(car.year).getFullYear()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn text-center">
          <Link
            to="/listing"
            className="btn btn-secondary d-inline-flex align-items-center"
          >
            View More Cars
            <i className="bx bx-right-arrow-alt ms-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
