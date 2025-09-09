import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListingDetails = () => {
   const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  
  const mainImages = [
    "/user-assets/img/cars/slider-01.jpg",
    "/user-assets/img/cars/slider-02.jpg",
    "/user-assets/img/cars/slider-03.jpg",
    "/user-assets/img/cars/slider-04.jpg",
    "/user-assets/img/cars/slider-05.jpg"
  ];
  
  const thumbnails = [
    "/user-assets/img/cars/slider-thum-01.jpg",
    "/user-assets/img/cars/slider-thum-02.jpg",
    "/user-assets/img/cars/slider-thum-03.jpg",
    "/user-assets/img/cars/slider-thum-04.jpg",
    "/user-assets/img/cars/slider-thum-05.jpg"
  ];

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const thumbnailSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  return (
<div className="main-wrapper">
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">Chevrolet Camaro</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Listings</a></li>
              <li className="breadcrumb-item active" aria-current="page">Chevrolet Camaro</li>
            </ol>
          </nav>							
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}
  {/* Detail Page Head*/}
  <section className="product-detail-head">
    <div className="container">
      <div className="detail-page-head">
        <div className="detail-headings">
          <div className="star-rated">
            <ul className="list-rating">
              <li>
                <div className="car-brand">
                  <span>
                    <img src="/user-assets/img/icons/car-icon.svg" alt="img" />
                  </span>
                  Sedan
                </div>
              </li>
              <li>
                <span className="year">2023</span>
              </li>
              <li className="ratings">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <span className="d-inline-block average-list-rating">(5.0)</span>
              </li>
            </ul>
            <div className="camaro-info">
              <h3>Chevrolet Camaro</h3>
              <div className="camaro-location">
                <div className="camaro-location-inner">
                  <i className="bx bx-map" />                                        
                  <span>Location : Miami St, Destin, FL 32550, USA </span> 
                </div>
                <div className="camaro-location-inner">    
                  <i className="bx bx-show" />                                     
                  <span>Views : 250 </span>
                </div>
                <div className="camaro-location-inner">    
                  <i className="bx bx-car" />                                
                  <span>Views : Listed on: 01 Jan, 2024 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details-btn">
          <span className="total-badge"><i className="bx bx-calendar-edit" />Total Booking : 300</span>
          <a href="#"> <i className="bx bx-git-compare" />Compare</a>
        </div>				  
      </div>
    </div>
  </section>
  {/* /Detail Page Head*/}
  <section className="section product-details">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="car-detail-container">
      <div className="detail-product">
        <div className="pro-info">
          <div className="pro-badge">
            <span className="badge-km">
              <i className="fa-solid fa-person-walking" />4.2 Km Away
            </span>
            <a href="#!" className="fav-icon">
              <i className="fa-regular fa-heart" />
            </a>
          </div>
          <ul className="delivery-options">
            <li className="del-airport">
              <i className="fa-solid fa-check" />Airport delivery
            </li>
            <li className="del-home">
              <i className="fa-solid fa-check" />Home delivery
            </li>
          </ul>
        </div>
        
        <div className="slider detail-bigimg">
          <Slider {...mainSettings}>
            {mainImages.map((img, index) => (
              <div key={index} className="product-img">
                <img src={img} alt={`Car view ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="slider slider-nav-thumbnails">
          <Slider {...thumbnailSettings}>
            {thumbnails.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

          <div className="review-sec pb-0">
            <div className="review-header">
              <h4>Extra Service</h4>
            </div>
            <div className="lisiting-service">
              <div className="row">
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-01.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>GPS Navigation Systems</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-02.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Wi-Fi Hotspot</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-03.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Child Safety Seats</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-04.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Fuel Options</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-05.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Roadside Assistance</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-06.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Satellite Radio</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-07.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Additional Accessories</p>
                  </div>
                </div>
                <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                  <div className="service-img">
                    <img src="/user-assets/img/icons/service-08.svg" alt="Icon" />
                  </div>
                  <div className="service-info">
                    <p>Express Check-in/out</p>
                  </div>
                </div>
              </div>	
            </div>	
          </div>
          {/* Listing Section */}
          <div className="review-sec mb-0">
            <div className="review-header">
              <h4>Description of Listing</h4>
            </div>
            <div className="description-list">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>                                    
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                PageMaker including versions of Lorem Ipsum.
              </p>                                    
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="read-more">
                <div className="more-text">
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <a href="javascript:void(0);" className="more-link">Show More</a>
              </div>
            </div>
          </div>
          {/* /Listing Section */}
          {/* Specifications */}
          <div className="review-sec specification-card ">
            <div className="review-header">
              <h4>Specifications</h4>
            </div>
            <div className="card-body">
              <div className="lisiting-featues">
                <div className="row">
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-1.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Body </span>
                      <h6> Sedan</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-2.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Make </span>
                      <h6> Nisssan</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-3.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Transmission </span>
                      <h6> Automatic</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-4.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Fuel Type </span>
                      <h6> Diesel</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-5.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Mileage </span>
                      <h6>16 Km</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-6.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Drivetrian </span>
                      <h6>Front Wheel</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-7.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Year</span>
                      <h6> 2018</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-8.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>AC </span>
                      <h6> Air Condition</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-9.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>VIN </span>
                      <h6> 45456444</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-10.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Door </span>
                      <h6> 4 Doors</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-11.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Brake </span>
                      <h6> ABS</h6>
                    </div>
                  </div>
                  <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                    <div className="feature-img">
                      <img src="/user-assets/img/specification/specification-icon-12.svg" alt="Icon" />
                    </div>
                    <div className="featues-info">
                      <span>Engine (Hp) </span>
                      <h6> 3,000</h6>
                    </div>
                  </div>
                </div>
              </div>	
            </div>	
          </div>	
          {/* Specifications */}
          {/* Car Features */}	
          <div className="review-sec listing-feature">
            <div className="review-header">
              <h4>Car Features</h4>
            </div>
            <div className="listing-description">
              <div className="row">
                <div className="col-md-4">
                  <ul>
                    <li><span><i className="bx bx-check-double" /></span>Multi-zone A/C</li>
                    <li><span><i className="bx bx-check-double" /></span>Heated front seats</li>
                    <li><span><i className="bx bx-check-double" /></span>Andriod Auto</li>
                    <li><span><i className="bx bx-check-double" /></span>Navigation system</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li><span><i className="bx bx-check-double" /></span>Premium sound system</li>
                    <li><span><i className="bx bx-check-double" /></span>Bluetooth</li>
                    <li><span><i className="bx bx-check-double" /></span>Keyles Start</li>
                    <li><span><i className="bx bx-check-double" /></span>Memory seat</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li><span><i className="bx bx-check-double" /></span>6 Cylinders</li>
                    <li><span><i className="bx bx-check-double" /></span>Adaptive Cruise Control</li>
                    <li><span><i className="bx bx-check-double" /></span>Intermittent wipers</li>
                    <li><span><i className="bx bx-check-double" /></span>4 power windows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Car Features */}	
          {/* Tariff */}	
          <div className="review-sec listing-feature">
            <div className="review-header">
              <h4>Tariff</h4>
            </div>
            <div className="table-responsive">
              <table className="table border mb-3">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Daily Price</th>
                    <th>Base Kilometers</th>
                    <th>Kilometers Extra Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4 to 5 Days</td>
                    <td>$150</td>
                    <td>25</td>
                    <td>$28</td>
                  </tr>
                  <tr>
                    <td>5 to 8 Days</td>
                    <td>$250</td>
                    <td>90</td>
                    <td>$45</td>
                  </tr>
                  <tr>
                    <td>8 to 15 Days</td>
                    <td>$380</td>
                    <td>120</td>
                    <td>$60</td>
                  </tr>
                  <tr>
                    <td>16 to 25 Days</td>
                    <td>$500</td>
                    <td>500</td>
                    <td>$80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* /Tariff */}	
          {/* Gallery */}	
          <div className="review-sec mb-0 pb-0">
            <div className="review-header">
              <h4>Gallery</h4>
            </div>
            <div className="gallery-list">
              <ul>
                <li>
                  <div className="gallery-widget">
                    <a href="/user-assets/img/gallery/gallery-big-01.jpg" data-fancybox="gallery1">
                      <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thumb-01.jpg" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="gallery-widget">
                    <a href="/user-assets/img/gallery/gallery-big-02.jpg" data-fancybox="gallery1">
                      <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thumb-02.jpg" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="gallery-widget">
                    <a href="/user-assets/img/gallery/gallery-big-03.jpg" data-fancybox="gallery1">
                      <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thumb-03.jpg" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="gallery-widget">
                    <a href="/user-assets/img/gallery/gallery-big-04.jpg" data-fancybox="gallery1">
                      <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thumb-04.jpg" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /Gallery */}	
          {/* Video */}	
          <div className="review-sec mb-0">
            <div className="review-header">
              <h4>Video</h4>
            </div>
            <div className="short-video">
              <img className="img-fluid" alt="Image" src="/user-assets/img/video-img.jpg" />
              <a href="https://www.youtube.com/embed/ExJZAegsOis" data-fancybox="video" className="video-icon">
                <i className="bx bx-play" />
              </a>
            </div>
          </div>
          {/* /Video */}	
          {/* FAQ */}	
          <div className="review-sec faq-feature">
            <div className="review-header">
              <h4>FAQ’s</h4>
            </div>
            <div className="faq-info">
              <div className="faq-card">
                <h4 className="faq-title">
                  <a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">How old do I need to be to rent a car?</a>
                </h4>
                <div id="faqOne" className="card-collapse collapse">
                  <p>We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                </div>
              </div>	
              <div className="faq-card">
                <h4 className="faq-title">
                  <a className="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">What documents do I need to rent a car?</a>
                </h4>
                <div id="faqTwo" className="card-collapse collapse">
                  <p>We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                </div>
              </div>
              <div className="faq-card">
                <h4 className="faq-title">
                  <a className="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">What types of vehicles are available for rent?</a>
                </h4>
                <div id="faqThree" className="card-collapse collapse">
                  <p>We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                </div>
              </div>	
              <div className="faq-card">
                <h4 className="faq-title">
                  <a className="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">Can I rent a car with a debit card?</a>
                </h4>
                <div id="faqFour" className="card-collapse collapse">
                  <p>We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                </div>
              </div>													
            </div>	
          </div>
          {/* /FAQ */}	
          {/* Policies */}	
          <div className="review-sec">
            <div className="review-header">
              <h4>Policies</h4>
            </div>
            <div className="policy-list">
              <div className="policy-item">
                <div className="policy-info">
                  <h6>Cancellation Charges</h6>
                  <p>Cancellation charges will be applied as per the policy</p>
                </div>
                <Link  to="/privacy-policy">Know More</Link>
              </div>
              <div className="policy-item">
                <div className="policy-info">
                  <h6>Policy</h6>
                  <p>I hereby agree to the terms and conditions of the Lease Agreement with Host</p>
                </div>
                <Link to="/privacy-policy">View Details</Link>
              </div>
            </div>
          </div>
          {/* /Policies */}
          {/* Reviews */}
          <div className="review-sec listing-review">
            <div className="review-header">
              <h4>Reviews</h4>
            </div>
            <div className="rating-wrapper">
              <div className="rating-wraps">
                <h2>4.5<span>/5</span></h2>
                <p>Excellent</p>
                <h6>Based on 256 Reviews</h6>
              </div>
              <div className="rating-progress">
                <div className="progress-info">
                  <h6>Service</h6>
                  <div className="progress" role="progressbar">
                    <div className="progress-bar bg-primary" style={{width: '70%'}} />
                  </div>
                  <div className="progress-percent">4.6</div>
                </div>
                <div className="progress-info">
                  <h6>Location</h6>
                  <div className="progress" role="progressbar">
                    <div className="progress-bar bg-primary" style={{width: '85%'}} />
                  </div>
                  <div className="progress-percent">4.8</div>
                </div>
                <div className="progress-info">
                  <h6>Value for Money</h6>
                  <div className="progress" role="progressbar">
                    <div className="progress-bar bg-primary" style={{width: '60%'}} />
                  </div>
                  <div className="progress-percent">3.0</div>
                </div>
                <div className="progress-info">
                  <h6>Facilities</h6>
                  <div className="progress" role="progressbar">
                    <div className="progress-bar bg-primary" style={{width: '65%'}} />
                  </div>
                  <div className="progress-percent">4.5</div>
                </div>
                <div className="progress-info">
                  <h6>Cleanliness</h6>
                  <div className="progress" role="progressbar">
                    <div className="progress-bar bg-primary" style={{width: '90%'}} />
                  </div>
                  <div className="progress-percent">4.8</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-head">
                <h6>Showing 3 guest reviews</h6>
              </div>
              <ul>
                <li>
                  <div className="review-wraps">
                    <div className="review-header-group">
                      <div className="review-widget-header">
                        <span className="review-widget-img">
                          <img src="/user-assets/img/profiles/avatar-01.jpg" className="img-fluid" alt="User" />
                        </span>
                        <div className="review-design">
                          <h6>Johnson</h6>
                          <p>02 Jan 2023</p>
                        </div>
                      </div>
                      <div className="reviewbox-list-rating">
                        <p>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />	
                          <span> (5.0)</span> 
                        </p>
                      </div>
                    </div>						
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s </p>
                    <div className="review-reply">
                      <a className="btn" href="#">
                        <i className="fa-solid fa-reply" />Reply
                      </a>
                      <div className="review-action">
                        <a href="#"><i className="fa-regular fa-thumbs-up" />10</a>
                        <a href="#"><i className="fa-regular fa-thumbs-down" />12</a>
                        <a href="#"><i className="fa-regular fa-heart" />15</a>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="review-wraps">
                        <div className="review-header-group">
                          <div className="review-widget-header">
                            <span className="review-widget-img">
                              <img src="/user-assets/img/profiles/avatar-01.jpg" className="img-fluid" alt="User" />
                            </span>
                            <div className="review-design">
                              <h6>Johnson</h6>
                              <p>02 Jan 2023</p>
                            </div>
                          </div>
                          <div className="reviewbox-list-rating">
                            <p>
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />	
                              <span> (5.0)</span> 
                            </p>
                          </div>
                        </div>						
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s </p>
                        <div className="review-reply">
                          <a className="btn" href="#">
                            <i className="fa-solid fa-reply" />Reply
                          </a>
                          <div className="review-action">
                            <a href="#"><i className="fa-regular fa-thumbs-up" />10</a>
                            <a href="#"><i className="fa-regular fa-thumbs-down" />12</a>
                            <a href="#"><i className="fa-regular fa-heart" />15</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="review-wraps wrap-card">
                    <div className="review-header-group">
                      <div className="review-widget-header">
                        <span className="review-widget-img">
                          <img src="/user-assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="User" />
                        </span>
                        <div className="review-design">
                          <h6>Casandra</h6>
                          <p>Reviewed 25 March 2024</p>
                        </div>
                      </div>
                      <div className="reviewbox-list-rating">
                        <p>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />	
                          <span> (5.0)</span> 
                        </p>
                      </div>
                    </div>						
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                    <div className="review-reply">
                      <a className="btn" href="#">
                        <i className="fa-solid fa-reply" />Reply
                      </a>
                      <div className="review-action">
                        <a href="#"><i className="fa-regular fa-thumbs-up" />10</a>
                        <a href="#"><i className="fa-regular fa-thumbs-down" />12</a>
                        <a href="#"><i className="fa-regular fa-heart" />15</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /Reviews */}
          {/* Leave a Reply */}
          <div className="review-sec leave-reply-form mb-0">
            <div className="review-header">
              <h4>Leave a Reply</h4>
            </div>
            <div className="review-list-rating">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="set-rating">
                    <p>Service</p>
                    <div className="rating-selection">
                      <input type="checkbox" id="service1" defaultValue={1} />
                      <label htmlFor="service1" />
                      <input type="checkbox" id="service2" defaultValue={2} />
                      <label htmlFor="service2" />
                      <input type="checkbox" id="service3" defaultValue={3} />
                      <label htmlFor="service3" />
                      <input type="checkbox" id="service4" defaultValue={4} />
                      <label htmlFor="service4" />
                      <input type="checkbox" id="service5" defaultValue={5} />
                      <label htmlFor="service5" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="set-rating">
                    <p>Location</p>
                    <div className="rating-selection">
                      <input type="checkbox" id="loc1" defaultValue={1} />
                      <label htmlFor="loc1" />
                      <input type="checkbox" id="loc2" defaultValue={2} />
                      <label htmlFor="loc2" />
                      <input type="checkbox" id="loc3" defaultValue={3} />
                      <label htmlFor="loc3" />
                      <input type="checkbox" id="loc4" defaultValue={4} />
                      <label htmlFor="loc4" />
                      <input type="checkbox" id="loc5" defaultValue={5} />
                      <label htmlFor="loc5" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="set-rating">
                    <p>Facilities</p>
                    <div className="rating-selection">
                      <input type="checkbox" id="fac1" defaultValue={1} />
                      <label htmlFor="fac1" />
                      <input type="checkbox" id="fac2" defaultValue={2} />
                      <label htmlFor="fac2" />
                      <input type="checkbox" id="fac3" defaultValue={3} />
                      <label htmlFor="fac3" />
                      <input type="checkbox" id="fac4" defaultValue={4} />
                      <label htmlFor="fac4" />
                      <input type="checkbox" id="fac5" defaultValue={5} />
                      <label htmlFor="fac5" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="set-rating">
                    <p>Value for Money</p>
                    <div className="rating-selection">
                      <input type="checkbox" id="val1" defaultValue={1} />
                      <label htmlFor="val1" />
                      <input type="checkbox" id="val2" defaultValue={2} />
                      <label htmlFor="val2" />
                      <input type="checkbox" id="val3" defaultValue={3} />
                      <label htmlFor="val3" />
                      <input type="checkbox" id="val4" defaultValue={4} />
                      <label htmlFor="val4" />
                      <input type="checkbox" id="val5" defaultValue={5} />
                      <label htmlFor="val5" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="set-rating">
                    <p>Cleanliness</p>
                    <div className="rating-selection">
                      <input type="checkbox" id="clean1" defaultValue={1} />
                      <label htmlFor="clean1" />
                      <input type="checkbox" id="clean2" defaultValue={2} />
                      <label htmlFor="clean2" />
                      <input type="checkbox" id="clean3" defaultValue={3} />
                      <label htmlFor="clean3" />
                      <input type="checkbox" id="clean4" defaultValue={4} />
                      <label htmlFor="clean4" />
                      <input type="checkbox" id="clean5" defaultValue={5} />
                      <label htmlFor="clean5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="review-list">
                <ul>
                  <li className="review-box feedbackbox mb-0">
                    <div className="review-details">
                      <form className="#">
                        <div className="row">
                          <div className="col-lg-6">												
                            <div className="input-block">														
                              <label>Full Name <span className="text-danger">*</span></label>	
                              <input type="text" className="form-control" placeholder="Your name" />
                            </div>
                          </div>
                          <div className="col-lg-6">													
                            <div className="input-block">
                              <label>Email Address <span className="text-danger">*</span></label>	
                              <input type="email" className="form-control" placeholder="Your email Address" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-block">
                              <label>Comments </label>	
                              <textarea rows={4} className="form-control" placeholder="Comments" defaultValue={""} />
                            </div>
                          </div>
                        </div>
                        <div className="submit-btn text-end">
                          <button className="btn btn-primary submit-review" type="submit"> Submit Review</button>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Leave a Reply */}
        </div>
        <div className="col-lg-4 theiaStickySidebar">
          <div className="review-sec mt-0">
            <div className="review-header">
              <h4>Pricing</h4>
            </div>
            <div className="mb-3">
              <label className="booking_custom_check bookin-check-2">
                <input type="radio" name="price_rate" defaultChecked />
                <span className="booking_checkmark">
                  <span className="checked-title">Daily</span>
                  <span className="price-rate">$300</span>		
                </span>			
              </label>
              <label className="booking_custom_check bookin-check-2">
                <input type="radio" name="price_rate" />
                <span className="booking_checkmark">
                  <span className="checked-title">Weekly</span>
                  <span className="price-rate">$820</span>		
                </span>			
              </label>
              <label className="booking_custom_check bookin-check-2">
                <input type="radio" name="price_rate" />
                <span className="booking_checkmark">
                  <span className="checked-title">Monthly</span>
                  <span className="price-rate">$2400</span>		
                </span>			
              </label>
              <label className="booking_custom_check bookin-check-2">
                <input type="radio" name="price_rate" />
                <span className="booking_checkmark">
                  <span className="checked-title">Yearly</span>
                  <span className="price-rate">$9400</span>		
                </span>			
              </label>
            </div>
            <div className="location-content">
              <div className="delivery-tab">	
                <ul className="nav">
                  <li>
                    <label className="booking_custom_check">
                      <input type="radio" name="rent_type" defaultChecked />
                      <span className="booking_checkmark">
                        <span className="checked-title">Delivery</span>
                      </span>							
                    </label>
                  </li>
                  <li>
                    <label className="booking_custom_check">
                      <input type="radio" name="rent_type" />
                      <span className="booking_checkmark">
                        <span className="checked-title">Self Pickup</span>
                      </span>							
                    </label>
                  </li>
                </ul>	
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="delivery">
                  <form className>
                    <ul>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label>Delivery Location</label>
                          <div className="group-img">
                            <div className="form-wrap">
                              <input type="text" className="form-control" placeholder="45, 4th Avanue  Mark Street USA" />
                              <span className="form-icon">
                                <i className="fa-solid fa-location-crosshairs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label className="custom_check d-inline-flex location-check m-0"><span>Return to same location</span>
                            <input type="checkbox" name="remeber" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </li>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label>Return Location</label>										
                          <div className="group-img">
                            <div className="form-wrap">
                              <input type="text" className="form-control" placeholder="78, 10th street Laplace USA" />
                              <span className="form-icon">
                                <i className="fa-solid fa-location-crosshairs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="column-group-main">						
                        <div className="input-block m-0">	
                          <label>Pickup Date</label>
                        </div>
                        <div className="input-block-wrapp sidebar-form">
                          <div className="input-block  me-lg-2">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-calendar-days" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="input-block">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control timepicker" placeholder="11:00 AM" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-clock" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>	
                      </li>
                      <li className="column-group-main">						
                        <div className="input-block m-0">		                                       		<label>Return Date</label>
                        </div>
                        <div className="input-block-wrapp sidebar-form">
                          <div className="input-block me-lg-2">												
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-calendar-days" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="input-block">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control timepicker" placeholder="11:00 AM" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-clock" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>	
                      </li>
                      <li className="column-group-last">
                        <div className="input-block mb-0">
                          <div className="search-btn">
                            <Link  to="/booking-checkout" className="btn btn-primary check-available w-100">Book</Link>
                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#enquiry" className="btn btn-theme">Enquire Us</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>	
                </div>
                <div className="tab-pane fade" id="pickup">
                  <form className>
                    <ul>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label>Delivery Location</label>
                          <div className="group-img">
                            <select className="select">
                              <option>Newyork Office - 78, 10th street Laplace USA</option>
                              <option>Newyork Office - 12, 5th street USA</option>
                            </select>
                          </div>
                        </div>
                      </li>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label className="custom_check d-inline-flex location-check m-0"><span>Return to same location</span>
                            <input type="checkbox" name="remeber" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </li>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label>Delivery Location</label>
                          <div className="group-img">
                            <select className="select">
                              <option>Newyork Office - 78, 10th street Laplace USA</option>
                              <option>Newyork Office - 12, 5th street USA</option>
                            </select>
                          </div>
                        </div>
                      </li>
                      <li className="column-group-main">
                        <div className="input-block">
                          <label>Return Location</label>										
                          <div className="group-img">
                            <div className="form-wrap">
                              <input type="text" className="form-control" placeholder="78, 10th street Laplace USA" />
                              <span className="form-icon">
                                <i className="fa-solid fa-location-crosshairs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="column-group-main">						
                        <div className="input-block m-0">	
                          <label>Pickup Date</label>
                        </div>
                        <div className="input-block-wrapp sidebar-form">
                          <div className="input-block  me-lg-2">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-calendar-days" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="input-block">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control timepicker" placeholder="11:00 AM" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-clock" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>	
                      </li>
                      <li className="column-group-main">						
                        <div className="input-block m-0">		                                       		<label>Return Date</label>
                        </div>
                        <div className="input-block-wrapp sidebar-form">
                          <div className="input-block me-2">												
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-calendar-days" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="input-block">											
                            <div className="group-img">
                              <div className="form-wrap">
                                <input type="text" className="form-control timepicker" placeholder="11:00 AM" />
                                <span className="form-icon">
                                  <i className="fa-regular fa-clock" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>	
                      </li>
                      <li className="column-group-last">
                        <div className="input-block mb-0">
                          <div className="search-btn">
                            <a href="/booking-checkout" className="btn btn-primary check-available w-100">Book</a>
                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#enquiry" className="btn btn-theme">Enquire Us</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>	
                </div>
              </div>
            </div>	
          </div>
          <div className="review-sec extra-service mt-0">
            <div className="review-header">
              <h4>Listing Owner Details</h4>
            </div>
            <div className="owner-detail">
              <div className="owner-img">
                <a href="#"><img src="/user-assets/img/profiles/avatar-07.jpg" alt="User" /></a>
                <span className="badge-check"><img src="/user-assets/img/icons/badge-check.svg" alt="User" /></span>
              </div>
              <div className="reviewbox-list-rating">
                <h5><a>Brooklyn Cars</a></h5>
                <p>
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />	
                  <span> (5.0)</span> 
                </p>
              </div>
            </div>
            <ul className="booking-list">
              <li>
                Email
                <span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3e575058517e5b465f534e525b105d5153">[email&nbsp;protected]</a></span>
              </li>
              <li>
                Phone Number
                <span>+1 14XXX XXX78</span>
              </li>
              <li>
                Location
                <span>4635 Pheasant Ridge Road, City Hollywood, USA</span>
              </li>
            </ul>
            <div className="message-btn">
              <a href="#" className="btn btn-order">Message to owner</a>
              <a href="#" className="chat-link"><i className="fa-brands fa-whatsapp" />Chat Via Whatsapp</a>
            </div>	
          </div>
          <div className="review-sec share-car mt-0">
            <div className="review-header">
              <h4>View Car Location</h4>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin" className="iframe-video" />
          </div>
          <div className="review-sec share-car mt-0 mb-0">
            <div className="review-header">
              <h4>Share</h4>
            </div>
            <ul className="nav-social">
              <li>
                <a href="javascript:void(0)"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fab fa-instagram fi-icon" /></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fab fa-behance fi-icon" /></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fa-brands fa-pinterest-p fi-icon" /></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fab fa-twitter fi-icon" /> </a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fab fa-linkedin fi-icon" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">               
        <div className="col-md-12">
          <div className="details-car-grid">
            <div className="details-slider-heading">
              <h3>You May be Interested in</h3>
            </div>
            <div className="owl-carousel rental-deal-slider details-car owl-theme">
              {/* owl carousel item */}
              <div className="rental-car-item">
                <div className="listing-item pb-0">											
                  <div className="listing-img">
                    <Link to="/listing-details">
                      <img src="/user-assets/img/cars/car-03.jpg" className="img-fluid" alt="Audi" />
                    </Link>
                    <div className="fav-item justify-content-end">
                      <a href="javascript:void(0)" className="fav-icon">
                        <i className="feather-heart" />
                      </a>										
                    </div>	
                    <span className="featured-text">Audi</span>
                  </div>										
                  <div className="listing-content">
                    <div className="listing-features d-flex align-items-end justify-content-between">
                      <div className="list-rating">
                        <a href="javascript:void(0)" className="author-img">
                          <img src="/user-assets/img/profiles/avatar-03.jpg" alt="author" />
                        </a>
                        <h3 className="listing-title">
                          <Link to="/listing-details">Audi A3 2019 new</Link>
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
                      <div className="list-km">
                        <span className="km-count"><img src="/user-assets/img/icons/map-pin.svg" alt="author" />3.5m</span>
                      </div>
                    </div> 
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Manual" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>10 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                      </ul>	
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2019} /></span>
                          <p>2019</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>4 Persons</p>
                        </li>
                      </ul>
                    </div>																 
                    <div className="listing-location-details">
                      <div className="listing-price">
                        <span><i className="feather-map-pin" /></span>Newyork, USA
                      </div>
                      <div className="listing-price">
                        <h6>$45 <span>/ Day</span></h6>
                      </div>
                    </div>
                    <div className="listing-button">
                      <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                    </div>	
                  </div>
                </div>	
              </div>
              {/* /owl carousel item */}
              {/* owl carousel item */}
              <div className="rental-car-item">
                <div className="listing-item pb-0">										
                  <Link to="/listing-details">
                    <img src="/user-assets/img/cars/car-01.jpg" className="img-fluid" alt="Toyota" />
                  </Link>							
                  <div className="listing-content">
                    <div className="listing-features d-flex align-items-end justify-content-between">
                      <div className="list-rating">
                        <a href="javascript:void(0)" className="author-img">
                          <img src="/user-assets/img/profiles/avatar-04.jpg" alt="author" />
                        </a>
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
                      <div className="list-km">
                        <span className="km-count"><img src="/user-assets/img/icons/map-pin.svg" alt="author" />3.2m</span>
                      </div>
                    </div> 
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" /></span>
                          <p>Auto</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>10 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                      </ul>	
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2018</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>5 Persons</p>
                        </li>
                      </ul>
                    </div>																 
                    <div className="listing-location-details">
                      <div className="listing-price">
                        <span><i className="feather-map-pin" /></span>Washington
                      </div>
                      <div className="listing-price">
                        <h6>$160 <span>/ Day</span></h6>
                      </div>
                    </div>
                    <div className="listing-button">
                      <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                    </div>	
                  </div>
                  <div className="feature-text">
                    <span className="bg-danger">Featured</span>
                  </div>
                </div>		
              </div>
              {/* /owl carousel item */}
              {/* owl carousel item */}
              <div className="rental-car-item">
                <div className="listing-item pb-0">											
                  <div className="listing-img">
                    <Link to="/listing-details">
                      <img src="/user-assets/img/cars/car-04.jpg" className="img-fluid" alt="Audi" />
                    </Link>
                    <div className="fav-item justify-content-end">
                      <a href="javascript:void(0)" className="fav-icon">
                        <i className="feather-heart" />
                      </a>										
                    </div>	
                    <span className="featured-text">Ferrai</span>
                  </div>										
                  <div className="listing-content">
                    <div className="listing-features d-flex align-items-end justify-content-between">
                      <div className="list-rating">
                        <a href="javascript:void(0)" className="author-img">
                          <img src="/user-assets/img/profiles/avatar-04.jpg" alt="author" />
                        </a>
                        <h3 className="listing-title">
                          <Link to="/listing-details">Ferrari 458 MM Speciale</Link>
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
                      <div className="list-km">
                        <span className="km-count"><img src="/user-assets/img/icons/map-pin.svg" alt="author" />3.5m</span>
                      </div>
                    </div> 
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Manual" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="14 KM" /></span>
                          <p>14 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Diesel" /></span>
                          <p>Diesel</p>
                        </li>
                      </ul>	
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Basic" /></span>
                          <p>Basic</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2022} /></span>
                          <p>2022</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>5 Persons</p>
                        </li>
                      </ul>
                    </div>																 
                    <div className="listing-location-details">
                      <div className="listing-price">
                        <span><i className="feather-map-pin" /></span>Newyork, USA
                      </div>
                      <div className="listing-price">
                        <h6>$160 <span>/ Day</span></h6>
                      </div>
                    </div>
                    <div className="listing-button">
                      <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                    </div>	
                  </div>	
                  <div className="feature-text">
                    <span className="bg-danger">Featured</span>
                  </div>	 
                </div>	
              </div>
              {/* /owl carousel item */}
              {/* owl carousel item */}
              <div className="rental-car-item">
                <div className="listing-item pb-0">											
                  <div className="listing-img">
                    <Link to="/listing-details">
                      <img src="/user-assets/img/cars/car-05.jpg" className="img-fluid" alt="Audi" />
                    </Link>
                    <div className="fav-item justify-content-end">
                      <a href="javascript:void(0)" className="fav-icon">
                        <i className="feather-heart" />
                      </a>										
                    </div>
                    <span className="featured-text">Chevrolet</span>	
                  </div>										
                  <div className="listing-content">
                    <div className="listing-features d-flex align-items-end justify-content-between">
                      <div className="list-rating">
                        <a href="javascript:void(0)" className="author-img">
                          <img src="/user-assets/img/profiles/avatar-05.jpg" alt="author" />
                        </a>
                        <h3 className="listing-title">
                          <Link to="/listing-details">2018 Chevrolet Camaro</Link>
                        </h3>																	  
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0) 200 Reviews</span>
                        </div>
                      </div>
                      <div className="list-km">
                        <span className="km-count"><img src="/user-assets/img/icons/map-pin.svg" alt="author" />4.5m</span>
                      </div>
                    </div> 
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Manual" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="18 KM" /></span>
                          <p>18 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Diesel" /></span>
                          <p>Diesel</p>
                        </li>
                      </ul>	
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2018</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>4 Persons</p>
                        </li>
                      </ul>
                    </div>																 
                    <div className="listing-location-details">
                      <div className="listing-price">
                        <span><i className="feather-map-pin" /></span>Germany
                      </div>
                      <div className="listing-price">
                        <h6>$36 <span>/ Day</span></h6>
                      </div>
                    </div>
                    <div className="listing-button">
                      <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                    </div>	
                  </div>
                  <div className="feature-text">
                    <span className="bg-warning">Top Rated</span>
                  </div>	
                </div>	
              </div>
              {/* /owl carousel item */}
              {/* owl carousel item */}
              <div className="rental-car-item">
                <div className="listing-item">											
                  <div className="listing-img">
                    <Link to="/listing-details">
                      <img src="/user-assets/img/cars/car-06.jpg" className="img-fluid" alt="Audi" />
                    </Link>
                    <div className="fav-item justify-content-end">
                      <a href="javascript:void(0)" className="fav-icon">
                        <i className="feather-heart" />
                      </a>										
                    </div>	
                    <span className="featured-text">Acura</span>
                  </div>										
                  <div className="listing-content">
                    <div className="listing-features d-flex align-items-end justify-content-between">
                      <div className="list-rating">
                        <a href="javascript:void(0)" className="author-img">
                          <img src="/user-assets/img/profiles/avatar-06.jpg" alt="author" />
                        </a>
                        <h3 className="listing-title">
                          <Link to="/listing-details" >Acura Sport Version</Link>
                        </h3>																	  
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span>(4.0) 125 Reviews</span>
                        </div>
                      </div>
                      <div className="list-km">
                        <span className="km-count"><img src="/user-assets/img/icons/map-pin.svg" alt="author" />3.2m</span>
                      </div>
                    </div> 
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-01.svg" alt="Auto" /></span>
                          <p>Auto</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="12 KM" /></span>
                          <p>12 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Diesel" /></span>
                          <p>Diesel</p>
                        </li>
                      </ul>	
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2013} /></span>
                          <p>2013</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>5 Persons</p>
                        </li>
                      </ul>
                    </div>																 
                    <div className="listing-location-details">
                      <div className="listing-price">
                        <span><i className="feather-map-pin" /></span>Newyork, USA
                      </div>
                      <div className="listing-price">
                        <h6>$30 <span>/ Day</span></h6>
                      </div>
                    </div>
                    <div className="listing-button">
                      <Link to="/listing-details"  className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                    </div>	
                  </div>
                </div>	
              </div>
              {/* /owl carousel item */}
            </div>	
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Modal */}
  <div className="modal custom-modal fade check-availability-modal" id="pages_edit" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <div className="form-header text-start mb-0">
            <h4 className="mb-0 text-dark fw-bold">Availability Details</h4>
          </div>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="align-center" aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="available-for-ride">
                <p><i className="fa-regular fa-circle-check" />Chevrolet Camaro is available for a ride</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="row booking-info">
                <div className="col-md-4 pickup-address">
                  <h5>Pickup</h5>
                  <p>45, 4th Avanue  Mark Street USA</p>
                  <span>Date &amp; time : 11 Jan 2023</span>
                </div>
                <div className="col-md-4 drop-address">
                  <h5>Drop Off</h5>
                  <p>78, 10th street Laplace USA</p>
                  <span>Date &amp; time : 11 Jan 2023</span>
                </div>
                <div className="col-md-4 booking-amount">
                  <h5>Booking Amount</h5>
                  <h6><span>$300 </span> /day</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="booking-info seat-select">
                <h6>Extra Service</h6>
                <label className="custom_check">
                  <input type="checkbox" name="rememberme" className="rememberme" />
                  <span className="checkmark" />
                  Baby Seat - <span className="ms-2">$10</span>
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="booking-info pay-amount">
                <h6>Deposit Option</h6>
                <div className="radio radio-btn">
                  <label>
                    <input type="radio" name="radio" /> Pay Deposit
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="radio" /> Full Amount
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6" />
            <div className="col-md-6">
              <div className="booking-info service-tax">
                <ul>
                  <li>Booking Price <span>$300</span></li>
                  <li>Extra Service <span>$10</span></li>
                  <li>Tax <span>$5</span></li>
                </ul>
              </div>
              <div className="grand-total">
                <h5>Grand Total</h5>
                <span>$315</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Link to="/booking"  className="btn btn-back">Go to Details<i className="fa-solid fa-arrow-right" /></Link>
        </div>
      </div>
    </div>
  </div>
  {/* /Modal */}
  {/* Custom Date Modal */}
  <div className="modal new-modal fade enquire-mdl" id="enquiry" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Enquiry</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal"><span>×</span></button>
        </div>
        <div className="modal-body">
          <form action="/listing-details" className="enquire-modal">							
            <div className="booking-header">
              <div className="booking-img-wrap">
                <div className="book-img">
                  <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                </div>
                <div className="book-info">
                  <h6>Chevrolet Camaro</h6>
                  <p><i className="feather-map-pin" /> Location : Miami St, Destin, FL 32550, USA</p>
                </div>
              </div>
            </div>
            <div className="modal-form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter Name" />
            </div>
            <div className="modal-form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email Address" />
            </div>
            <div className="modal-form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" placeholder="Enter Email Address" />
            </div>
            <div className="modal-form-group">
              <label>Message</label>
              <textarea className="form-control" rows={4} defaultValue={""} />
            </div>
            <label className="custom_check w-100">
              <input type="checkbox" name="username" />
              <span className="checkmark" /> I Agree with <a href="javascript:void(0);">Terms of Service</a> &amp; <a href="javascript:void(0);">Privacy Policy</a>
            </label>
            <div className="modal-btn modal-btn-sm">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Custom Date Modal */}
  {/* Custom Date Modal */}
  <div className="modal new-modal fade enquire-mdl" id="fare_details" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Fare Details</h4>
          <button type="button" className="close-btn" data-bs-dismiss="modal"><span>×</span></button>
        </div>
        <div className="modal-body">
          <form action="#" className="enquire-modal">							
            <div className="booking-header fare-book">
              <div className="booking-img-wrap">
                <div className="book-img">
                  <img src="/user-assets/img/cars/car-05.jpg" alt="img" />
                </div>
                <div className="book-info">
                  <h6>Chevrolet Camaro</h6>
                  <p><i className="feather-map-pin" /> Location : Miami St, Destin, FL 32550, USA</p>
                </div>
              </div>
            </div>
            <div className="fare-table">
              <div className="table-responsive">
                <table className="table table-center">
                  <tbody>
                    <tr>
                      <td>
                        Doorstep delivery <span>(1 day )</span>
                        <p className="text-danger">(This does not include fuel)</p>
                      </td>
                      <td>
                        <select className="select">
                          <option>Per Day</option>
                          <option>Per Hr</option>
                        </select>
                      </td>
                      <td className="amt text-end">+ $300</td>
                    </tr>
                    <tr>
                      <td>Door delivery &amp; Pickup</td>
                      <td colSpan={2} className="amt text-end"> + $60</td>
                    </tr>
                    <tr>
                      <td>Trip Protection Fees</td>
                      <td colSpan={2} className="amt text-end"> + $25</td>
                    </tr>
                    <tr>
                      <td>Convenience Fees</td>
                      <td colSpan={2} className="amt text-end"> + $2</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td colSpan={2} className="amt text-end"> + $2</td>
                    </tr>
                    <tr>
                      <td>Refundable Deposit</td>
                      <td colSpan={2} className="amt text-end">+$1200</td>
                    </tr>
                    <tr>
                      <th>Subtotal</th>
                      <th colSpan={2} className="amt text-end">+$1604</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-btn modal-btn-sm">
              <Link to="booking-checkout" className="btn btn-primary w-100">
                Continue to Booking
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Custom Date Modal */}
</div>


  );
};

export default ListingDetails;
