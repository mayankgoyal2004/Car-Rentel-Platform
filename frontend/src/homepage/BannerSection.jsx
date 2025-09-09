import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/banner.css"


function BannerSection() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
    <section className="banner-section-four">
      <div className="container">
        <div className="home-banner">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-down">
              <div className="banner-content">
                <h1>
                  Explore our <span>Verified &amp; Professional</span> Cars
                </h1>
                <p>
                  Modern design sports cruisers for those who crave adventure
                  &amp; grandeur Cars for relaxing with your loved ones.
                </p>
                <div className="customer-list">
                  <div className="users-wrap">
                    <ul className="users-list">
                      <li>
                        <img
                          src="/user-assets/img/profiles/avatar-11.jpg"
                          className="img-fluid aos"
                          alt="bannerimage"
                        />
                      </li>
                      <li>
                        <img
                          src="/user-assets/img/profiles/avatar-15.jpg"
                          className="img-fluid aos"
                          alt="bannerimage"
                        />
                      </li>
                      <li>
                        <img
                          src="/user-assets/img/profiles/avatar-03.jpg"
                          className="img-fluid aos"
                          alt="bannerimage"
                        />
                      </li>
                    </ul>
                    <div className="customer-info">
                      <h4>6K + Customers</h4>
                      <p>has used our renting services </p>
                    </div>
                  </div>
                  <div className="view-all d-flex align-items-center gap-3">
                    <Link to="/listing"
                      
                      className="btn btn-primary d-inline-flex align-items-center"
                    >
                      Rent a Car
                      <i className="bx bx-right-arrow-alt ms-1" />
                    </Link>
                     <Link to="/listing"
                      className="btn btn-secondary d-inline-flex align-items-center"
                    >
                      <i className="bx bxs-plus-circle me-1" />
                      Add Your Car
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-image">
                <div className="banner-img" data-aos="fade-down">
                  <div className="amount-icon">
                    <span className="day-amt">
                      <p>Starts From</p>
                      <h6>
                        $650 <span> /day</span>
                      </h6>
                    </span>
                  </div>
                  <span className="rent-tag">
                    <i className="bx bxs-circle" /> Available for Rent
                  </span>
                  <img
                    src="/user-assets/img/banner/banner.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-search">
          <form
            action="/listing"
            className="form-block d-flex align-items-center"
          >
            <div className="search-input">
              <div className="input-block">
                <label>Pickup Location</label>
                <select className="select">
                  <option>Choose Location</option>
                  <option>New York</option>
                  <option>Dallas</option>
                  <option>Chicago</option>
                  <option>San Diego</option>
                </select>
              </div>
            </div>
            <div className="search-input">
              <div className="input-block">
                <label>Drop Location</label>
                <select className="select">
                  <option>Choose Location</option>
                  <option>San Francisco</option>
                  <option>Austin</option>
                  <option>Boston</option>
                  <option>Chicago</option>
                </select>
              </div>
            </div>
            <div className="search-input">
              <div className="input-block">
                <label>Pickup Date &amp; time</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="form-control flatpickr-datetime"
                    defaultValue="2025-03-14 12:00"
                  />
                  <span className="input-icon">
                    <i className="bx bx-chevron-down" />
                  </span>
                </div>
              </div>
            </div>
            <div className="search-input input-end">
              <div className="input-block">
                <label>Drop Date &amp; time</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="form-control flatpickr-datetime"
                    defaultValue="2025-03-15 12:00"
                  />
                  <span className="input-icon">
                    <i className="bx bx-chevron-down" />
                  </span>
                </div>
              </div>
            </div>
            <div className="search-btn">
              <button className="btn btn-primary" type="submit">
                <i className="bx bx-search-alt" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="banner-bgs">
        <img
          src="/user-assets/img/bg/banner-bg-01.png"
          className="bg-01 img-fluid"
          alt="img"
        />
      </div>
    </section>
<section className="section services">
  <div className="service-right">
    <img src="/user-assets/img/bg/service-right.svg" className="img-fluid" alt="services right" />
  </div>		
  <div className="container">	
    {/* Heading title*/}
    <div className="section-heading" data-aos="fade-down">
      <h2>How It Works</h2>
      <p>Booking a car rental is a straightforward process that typically involves the following steps</p>
    </div>
    {/* /Heading title */}
    <div className="services-work">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 d-flex" data-aos="fade-down">
          <div className="services-group service-date flex-fill">
            <div className="services-icon border-secondary">
              <img className="icon-img bg-secondary" src="/user-assets/img/icons/services-icon-01.svg" alt="Choose Locations" />
            </div>
            <div className="services-content">
              <h3>1. Choose Date &amp;  Locations</h3>
              <p>Determine the date &amp; location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center), and duration of rental.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 d-flex" data-aos="fade-down">
          <div className="services-group service-loc flex-fill">
            <div className="services-icon border-warning">
              <img className="icon-img bg-warning" src="/user-assets/img/icons/services-icon-02.svg" alt="Choose Locations" />
            </div>
            <div className="services-content">
              <h3>2. Pick-Up Locations</h3>
              <p>Check the availability of your desired vehicle type for your chosen dates and location. Ensure that the rental rates, taxes, fees, and any additional charges.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 d-flex" data-aos="fade-down">
          <div className="services-group service-book flex-fill">
            <div className="services-icon border-dark">
              <img className="icon-img bg-dark" src="/user-assets/img/icons/services-icon-03.svg" alt="Choose Locations" />
            </div>
            <div className="services-content">
              <h3>3. Book your Car</h3>
              <p>Once you've found car rental option, proceed to make a reservation. Provide the required information, including your details, driver's license, contact info, and payment details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>

  );
}

export default BannerSection;
