import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const FactNumberSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section facts-number">
      <div className="facts-left">
        <img
          src="/user-assets/img/bg/facts-left.png"
          className="img-fluid"
          alt="facts left"
        />
      </div>
      <div className="facts-right">
        <img
          src="/user-assets/img/bg/facts-right.png"
          className="img-fluid"
          alt="facts right"
        />
      </div>
      <div className="container">
        {/* Heading title*/}
        <div className="section-heading" data-aos="fade-down">
          <h2 className="title text-white">Facts By The Numbers</h2>
          <p className="description">
            Here are some dreamsrent interesting facts presented by the numbers
          </p>
        </div>
        {/* /Heading title */}
        <div className="counter-group">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 d-flex"
              data-aos="fade-down"
            >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-heart.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4>
                      <CountUp end={16} duration={2} enableScrollSpy/>
                      K+
                    </h4>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 d-flex"
              data-aos="fade-down"
            >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-car.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4>
                      <CountUp end={2547} duration={2}enableScrollSpy />+
                    </h4>
                    <p>Count of Cars</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 d-flex"
              data-aos="fade-down"
            >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-headphone.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4>
                      <CountUp end={625} duration={2} enableScrollSpy/>+
                    </h4>
                    <p>Car Center Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 d-flex"
              data-aos="fade-down"
            >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-history.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4>
                      <CountUp end={15000} duration={2} enableScrollSpy/>+
                    </h4>
                    <p>Total Kilometer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactNumberSection;
