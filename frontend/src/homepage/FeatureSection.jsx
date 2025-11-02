import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeatureSection = () => {
  const [companySetting, setCompanySetting] = useState([]);

  const fetchCompanySetting = async () => {
    try {
      const res = await apiService.getCompanySettings();
      if (res.data.data) {
        setCompanySetting(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load company settings" + err.message);
    }
  };

  useEffect(() => {
    fetchCompanySetting();
  }, []);
  return (
    <section className="feature-section pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-img">
              <div className="section-heading heading-four text-start">
                <h2 className="demoFunction">Best Platform for Car Rental</h2>
                <p>
                  Why do we choose relax rent bikes generally if we travel in a
                  un known cities with a bike in our hand we feel which is like
                  a home town
                </p>
              </div>
              <img
                src="/user-assets/img/cars/car.png"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row row-gap-4">
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bxs-info-circle" />
                  </span>
                  <div>
                    <h6 className="mb-1">Best Deal</h6>
                    <p>
                      {companySetting?.organizationName}offers a fleet of
                      high-quality{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bx-exclude" />
                  </span>
                  <div>
                    <h6 className="mb-1">Doorstep Delivery</h6>
                    <p>
                      {companySetting?.organizationName} offers a fleet of
                      high-quality{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bx-money" />
                  </span>
                  <div>
                    <h6 className="mb-1">Low Security Deposit</h6>
                    <p>
                      {companySetting?.organizationName} offers a fleet of
                      high-quality{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bxs-car-mechanic" />
                  </span>
                  <div>
                    <h6 className="mb-1">Latest Cars</h6>
                    <p>
                      {companySetting?.organizationName} offers a fleet of
                      high-quality
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bx-support" />
                  </span>
                  <div>
                    <h6 className="mb-1">Customer Support</h6>
                    <p>
                      {companySetting?.organizationName} offers a fleet of
                      high-quality
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-6 d-flex">
                <div className="feature-item flex-fill">
                  <span className="feature-icon">
                    <i className="bx bxs-coin" />
                  </span>
                  <div>
                    <h6 className="mb-1">No Hidden Charges</h6>
                    <p>
                      {companySetting?.organizationName}offers a fleet of
                      high-quality
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default FeatureSection;
