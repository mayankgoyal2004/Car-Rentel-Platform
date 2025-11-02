import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "../assets/banner.css";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { Search } from "react-feather";

function BannerSection() {
  const [pickupCity, setPickupCity] = useState("");
  const [dropCity, setDropCity] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [locationSetting, setLocationSetting] = useState([]);
  const [dropDate, setDropDate] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const fetchLocationSetting = async () => {
    try {
      const res = await apiService.getActiveLocationsSetting();
      if (res.data.success) {
        setLocationSetting(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch locations");
    }
  };

  useEffect(() => {
    fetchLocationSetting();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pickupCity || !dropCity || !pickupDate || !dropDate) {
      toast.error("Please select pickup, drop, and dates!");
      return;
    }

    navigate(
      `/listing?pickupLocation=${encodeURIComponent(
        pickupCity
      )}&dropLocation=${encodeURIComponent(
        dropCity
      )}&pickupDate=${pickupDate.toISOString()}&dropDate=${dropDate.toISOString()}`
    );
  };

  return (
    <section className="banner-section-four">
      <div className="container pt-3">
        <div className="home-banner">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-down">
              <div className="banner-content">
                <h1 className="demoFunction">
                  Explore our <span>Verified &amp; Professional</span> Cars
                </h1>
                <p>
                  Modern design sports cruisers for those who crave adventure
                  &amp; grandeur Cars for relaxing with your loved ones.
                </p>
                <div className="view-all d-flex align-items-center gap-3 mt-3">
                  <button
                    onClick={() => navigate("/listing")}
                    className="btn btn-primary d-inline-flex align-items-center"
                  >
                    Rent a Car <i className="bx bx-right-arrow-alt ms-1" />
                  </button>
                  <button
                    onClick={() => navigate("/business-register")}
                    className="btn btn-secondary d-inline-flex align-items-center"
                  >
                    <i className="bx bxs-plus-circle me-1" />
                    Add Your Car
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="banner-image">
                <div className="banner-img" data-aos="fade-down">
                  <span className="rent-tag">
                    <i className="bx bxs-circle" /> Available for Rent
                  </span>
                  <img
                    src="/user-assets/img/banner/banner.png"
                    className="img-fluid"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Search Form */}
        <div className="banner-search">
          <form
            onSubmit={handleSearch}
            className="form-block d-flex align-items-center"
          >
            {/* Pickup City */}
            <div className="search-input">
              <div className="input-block">
                <label>Pickup Location</label>
                <select
                  className="form-select bg-transparent border-0"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                >
                  <option value="">Choose City</option>
                  {locationSetting.map((loc) => (
                    <option key={loc._id} value={loc.countryName}>
                      {loc.countryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Drop City */}
            <div className="search-input">
              <div className="input-block">
                <label>Drop Location</label>
                <select
                  className="form-select bg-transparent border-0"
                  value={dropCity}
                  onChange={(e) => setDropCity(e.target.value)}
                >
                  <option value="">Choose City</option>
                  {locationSetting.map((loc) => (
                    <option key={loc._id} value={loc.countryName}>
                      {loc.countryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Pickup Date */}
            <div className="search-input">
              <div className="input-block">
                <label>Pickup Date &amp; Time</label>
                <Flatpickr
                  key={pickupDate ? pickupDate.getTime() : "pickup"}
                  className="form-control"
                  value={pickupDate}
                  onChange={(date) => setPickupDate(date[0])}
                  options={{
                    mode: "single",

                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today", // disable past dates
                  }}
                  placeholder="Select pickup date"
                />
              </div>
            </div>

            {/* Drop Date */}
            <div className="search-input input-end">
              <div className="input-block">
                <label>Drop Date &amp; Time</label>
                <Flatpickr
                  key={dropDate ? dropDate.getTime() : "drop"}
                  className="form-control"
                  value={dropDate}
                  onChange={(date) => setDropDate(date[0])}
                  options={{
                    mode: "single",
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: pickupDate || "today",
                  }}
                  placeholder="Select drop date"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="search-btn">
              <button className="btn btn-primary" type="submit">
               <Search size={18} />

              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
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
      </div>
    </section>
  );
}

export default BannerSection;
