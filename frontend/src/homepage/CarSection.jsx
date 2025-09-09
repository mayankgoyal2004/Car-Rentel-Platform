import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const CarSection = () => {
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
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Slider {...sliderSettings}>
                  <div className="slide-images">
                    <Link to="/listing-details">
                      <img
                        src="/user-assets/img/cars/car-11.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                  <div className="slide-images">
                    <Link to="/listing-details" >
                      <img
                        src="/user-assets/img/cars/car-12.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                  <div className="slide-images">
                     <Link to="/listing-details" >
                      <img
                        src="//user-assets/img/cars/car-11.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                </Slider>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon selected">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Lasvegas
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                      <Link to="/listing-details">Toyota Camry SE 350</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 138 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $160 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Auto</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>10 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Diesel</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2018</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Link to="/listing-details" >
                  <img
                    src="/user-assets/img/cars/car-12.jpg"
                    className="img-fluid"
                    alt="Toyota"
                  />
                </Link>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon selected">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Lasvegas
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                       <Link to="/listing-details" >Audi A3 2019 new</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 150 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $45 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Auto</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>10 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Diesel</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2019</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Link to="/listing-details" >
                  <img
                    src="/user-assets/img/cars/car-13.jpg"
                    className="img-fluid"
                    alt="Toyota"
                  />
                </Link>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Lasvegas
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                      <Link to="/listing-details" >Ford Mustang 4.0 AT</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 170 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $90 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Auto</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>10 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Petrol</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2021</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Slider {...sliderSettings}>
                  <div className="slide-images">
                    <Link to="/listing-details" >
                      <img
                        src="/user-assets/img/cars/car-14.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                  <div className="slide-images">
                    <Link to="/listing-details" >
                      <img
                        src="/user-assets/img/cars/car-13.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                  <div className="slide-images">
                    <Link to="/listing-details">
                      <img
                        src="/user-assets/img/cars/car-16.jpg"
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                </Slider>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Spain
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                      <Link to="/listing-details" >Chevrolet Picker</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 165 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $48 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Manual</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>18 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Diesel</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2018</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Link to="/listing-details" >
                  <img
                    src="/user-assets/img/cars/car-15.jpg"
                    className="img-fluid"
                    alt="Toyota"
                  />
                </Link>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Lasvegas
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                      <Link to="/listing-details" >Ferrari 458 MM Special</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 160 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $95 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Auto</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>16 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Petrol</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2021</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
          {/* Car List */}
          <div className="col-lg-4 col-md-6">
            <div className="listing-item listing-item-two">
              <div className="listing-img">
                <Link to="/listing-details" >
                  <img
                    src="/user-assets/img/cars/car-16.jpg"
                    className="img-fluid"
                    alt="Toyota"
                  />
                </Link>
                <div className="fav-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="featured-text">Toyota</span>
                    <span className="availability">Available</span>
                  </div>
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="feather-heart" />
                  </a>
                </div>
                <span className="location">
                  <i className="bx bx-map me-1" />
                  Newyork, USA
                </span>
              </div>
              <div className="listing-content">
                <div className="listing-features d-flex align-items-center justify-content-between">
                  <div className="list-rating">
                    <h3 className="listing-title">
                      <Link to="/listing-details">2018 Chevrolet Camaro</Link>
                    </h3>
                    <div className="list-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span>(4.0) 150 Reviews</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="price">
                      $120 <span>/ Day</span>
                    </h4>
                  </div>
                </div>
                <div className="listing-details-group">
                  <ul>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" />
                      <p>Auto</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-02.svg"
                        alt="10 KM"
                      />
                      <p>10 KM</p>
                    </li>
                    <li>
                      <img
                        src="/user-assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                      <p>Diesel</p>
                    </li>
                    <li>
                      <img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} />
                      <p>2019</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car List */}
        </div>
        <div className="view-all-btn text-center aos">
          <Link to="/listing"
           
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
