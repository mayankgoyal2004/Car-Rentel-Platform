import React from "react";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <div>
      <div className="main-wrapper listing-page">
        {/* Breadscrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Car Listings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" >Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Listings</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Car Listings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadscrumb Section */}
        {/* Search */}
        <div className="section-search page-search">
          <div className="container">
            <div className="search-box-banner">
              <form action="listing-grid.html">
                <ul className="align-items-center">
                  <li className="column-group-main">
                    <div className="input-block">
                      <label>Pickup Location</label>
                      <div className="group-img">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter City, Airport, or Address"
                        />
                        <span>
                          <i className="feather-map-pin" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="column-group-main">
                    <div className="input-block">
                      <label>Pickup Date</label>
                    </div>
                    <div className="input-block-wrapp">
                      <div className="input-block date-widget">
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="04/11/2023"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="input-block time-widge">
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control timepicker"
                            placeholder="11:00 AM"
                          />
                          <span>
                            <i className="feather-clock" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="column-group-main">
                    <div className="input-block">
                      <label>Return Date</label>
                    </div>
                    <div className="input-block-wrapp">
                      <div className="input-block date-widge">
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="04/11/2023"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="input-block time-widge">
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control timepicker"
                            placeholder="11:00 AM"
                          />
                          <span>
                            <i className="feather-clock" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="column-group-last">
                    <div className="input-block">
                      <div className="search-btn">
                        <button className="btn search-button" type="submit">
                          {" "}
                          <i className="fa fa-search" aria-hidden="true" />
                          Search
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        {/* /Search */}
        {/* Sort By */}
        <div className="sort-section">
          <div className="container">
            <div className="sortby-sec">
              <div className="sorting-div">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                    <div className="count-search">
                      <p>Showing 1-9 of 154 Cars</p>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                    <div className="product-filter-group">
                      <div className="sortbyset">
                        <ul>
                          <li>
                            <span className="sortbytitle">Show : </span>
                            <div className="sorting-select select-one">
                              <select className="form-control select">
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>30</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <span className="sortbytitle">Sort By </span>
                            <div className="sorting-select select-two">
                              <select className="form-control select">
                                <option>Newest</option>
                                <option>Relevance</option>
                                <option>Low to High</option>
                                <option>High to Low</option>
                                <option>Best Rated</option>
                                <option>Distance</option>
                                <option>Popularity</option>
                              </select>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="grid-listview">
                        <ul>
                          <li>
                            <Link to="/listing" className="active">
                              <i className="feather-grid" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/listing">
                              <i className="feather-list" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/listing">
                              <i className="feather-map-pin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Sort By */}
        {/* Car Grid View */}
        <section className="section car-listing pt-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
                <form action="#" autoComplete="off" className="sidebar-form">
                  <div className="sidebar-heading">
                    <h3>What Are You Looking For</h3>
                  </div>
                  <div className="product-search">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        id="member_search1"
                        placeholder
                      />
                      <span>
                        <img src="/user-assets/img/icons/search.svg" alt="img" />
                      </span>
                    </div>
                  </div>
                  <div className="product-availability">
                    <h6>Availability</h6>
                    <div className="status-toggle">
                      <input
                        id="mobile_notifications"
                        className="check"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="mobile_notifications"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="accord-list">
                    <div className="accordion" id="accordionMain1">
                      <div className="card-header-new" id="headingOne">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Car Brand
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample1"
                      >
                        <div className="card-body-chat">
                          <div className="row">
                            <div className="col-md-12">
                              <div id="checkBoxes1">
                                <div className="selectBox-cont">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Tesla
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Ford
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Mercediz Benz
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Audi
                                  </label>
                                  {/* View All */}
                                  <div className="view-content">
                                    <div className="viewall-One">
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Kia
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Honda
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Toyota
                                      </label>
                                    </div>
                                  </div>
                                  {/* /View All */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain2">
                      <div className="card-header-new" id="headingTwo">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Car Category
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes2">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Convertible (25)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Coupe (15)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Sedan (10)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> EV (5)
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Hatchback
                                    (123)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Luxury (06)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> SUV (6)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Wagon (5)
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain3">
                      <div className="card-header-new" id="headingYear">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseYear"
                            aria-expanded="true"
                            aria-controls="collapseYear"
                          >
                            Year
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseYear"
                        className="collapse"
                        aria-labelledby="headingYear"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes02">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2024
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2022
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2021
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2020
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2019
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2018
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2019
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain04">
                      <div className="card-header-new" id="headingfuel">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefuel"
                            aria-expanded="true"
                            aria-controls="collapsefuel"
                          >
                            Fuel Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapsefuel"
                        className="collapse"
                        aria-labelledby="headingfuel"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="petrol"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="petrol">Petrol</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="diesel"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="diesel">Diesel</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="electric"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="electric">Electric</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="cng"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="cng">CNG</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain5">
                      <div className="card-header-new" id="headingmileage">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsemileage"
                            aria-expanded="true"
                            aria-controls="collapsemileage"
                          >
                            Mileage
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapsemileage"
                        className="collapse"
                        aria-labelledby="headingmileage"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="limited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="limited">Limited</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="unlimited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="unlimited">Unlimited</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain6">
                      <div className="card-header-new" id="headingrental">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapserental"
                            aria-expanded="true"
                            aria-controls="collapserental"
                          >
                            Rental Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapserental"
                        className="collapse"
                        aria-labelledby="headingrental"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input type="radio" name="any" id="any" />
                                  <label htmlFor="any">Any</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="day"
                                    id="day"
                                    defaultChecked
                                  />
                                  <label htmlFor="day">Per Day</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="hour"
                                    id="hour"
                                    defaultChecked
                                  />
                                  <label htmlFor="hour">Per Hour</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input type="radio" name="week" id="week" />
                                  <label htmlFor="week">Per Week</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain06">
                      <div className="card-header-new" id="headingspec">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsespec"
                            aria-expanded="true"
                            aria-controls="collapsespec"
                          >
                            Car Specifications
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapsespec"
                        className="collapse"
                        aria-labelledby="headingspec"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes20">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Air Conditioners
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Keyless
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Panoramic
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Bluetooth
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Aux
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Top Window
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Speakers
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Automatic
                                    Window
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain7">
                      <div className="card-header-new" id="headingColor">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseColor"
                            aria-expanded="true"
                            aria-controls="collapseColor"
                          >
                            Colors
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseColor"
                        className="collapse"
                        aria-labelledby="headingColor"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="theme-colorsset">
                            <ul>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="greenColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="greenColor"
                                    className="green-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="yellowColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="yellowColor"
                                    className="yellow-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="brownColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="brownColor"
                                    className="brown-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blackColor"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="blackColor"
                                    className="black-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="redColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="redColor"
                                    className="red-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="grayColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="grayColor"
                                    className="gray-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="gray100Color"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="gray100Color"
                                    className="gray100-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blueColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="blueColor"
                                    className="blue-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="whiteColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="whiteColor"
                                    className="white-clr"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain8">
                      <div className="card-header-new" id="headingThree">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Capacity
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes3">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 2 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 4 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 5 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 7 Seater
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain9">
                      <div className="card-header-new" id="headingFour">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Price
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="card-body-chat">
                          <div className="filter-range">
                            <input type="text" className="input-range" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain4">
                      <div className="card-header-new" id="headingtransmiss">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetransmission"
                            aria-expanded="true"
                            aria-controls="collapsetransmission"
                          >
                            Transmission
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapsetransmission"
                        className="collapse"
                        aria-labelledby="headingtransmiss"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="manual"
                                    defaultChecked
                                  />
                                  <label htmlFor="manual">Manual </label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="semi"
                                  />
                                  <label htmlFor="semi">Semi Automatic</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="automatic"
                                  />
                                  <label htmlFor="automatic">Automatic</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain10">
                      <div className="card-header-new" id="headingFive">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            Rating
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample5"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes4">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span className="rating-count">5.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="rating-count">4.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">3.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">2.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">1.0</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain11">
                      <div className="card-header-new" id="headingSix">
                        <h6 className="filter-title">
                          <a
                            href="javascript:void(0);"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            Customer Recommendation
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample6"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes5">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 70% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 60% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 50% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 40% &amp; up
                              </label>
                              <div className="viewall-Two">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" />
                                  30% &amp; up
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
                  >
                    <span>
                      <i className="feather-filter me-2" />
                    </span>
                    Filter results
                  </button>
                  <a href="#" className="reset-filter">
                    Reset Filter
                  </a>
                </form>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider owl-carousel">
                          <div className="slide-images">
                            <Link to="/listing-details" >
                              <img
                                src="/user-assets/img/cars/car-01.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details" >
                              <img
                                src="/user-assets/img/cars/car-01-slide1.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details" >
                              <img
                                src="/user-assets/img/cars/car-01-slide2.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details" >
                              <img
                                src="/user-assets/img/cars/car-01-slide3.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="fav-item justify-content-end">
                          <span className="img-count">
                            <i className="feather-image" />
                            04
                          </span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart" />
                          </a>
                        </div>
                        <span className="featured-text">Toyota</span>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex align-items-end justify-content-between">
                          <div className="list-rating">
                            <a href="javascript:void(0)" className="author-img">
                              <img
                                src="/user-assets/img/profiles/avatar-04.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                Toyota Camry SE 350
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.2m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-01.svg"
                                  alt="Auto"
                                />
                              </span>
                              <p>Auto</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                                />
                              </span>
                              <p>Petrol</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2018}
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Washington
                          </div>
                          <div className="listing-price">
                            <h6>
                              $160 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider owl-carousel">
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-02.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-02-slide1.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-02-slide2.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-02-slide3.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="fav-item justify-content-end">
                          <span className="img-count">
                            <i className="feather-image" />
                            04
                          </span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart" />
                          </a>
                        </div>
                        <span className="featured-text">KIA</span>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex align-items-end justify-content-between">
                          <div className="list-rating">
                            <a href="javascript:void(0)" className="author-img">
                              <img
                                src="/user-assets/img/profiles/avatar-02.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">Kia Soul 2016</Link>
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
                          <div className="list-km">
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              4.0m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-01.svg"
                                  alt="Auto"
                                />
                              </span>
                              <p>Auto</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="22 KM"
                                />
                              </span>
                              <p>22 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                                />
                              </span>
                              <p>Petrol</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Diesel"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2016}
                                />
                              </span>
                              <p>2016</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Belgium
                          </div>
                          <div className="listing-price">
                            <h6>
                              $80 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                           
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link  to="/listing-details" >
                          <img
                            src="/user-assets/img/cars/car-03.jpg"
                            className="img-fluid"
                            alt="Audi"
                          />
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
                              <img
                                src="/user-assets/img/profiles/avatar-03.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details" >
                                Audi A3 2019 new
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.5m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt="Manual"
                                />
                              </span>
                              <p>Manual</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                                />
                              </span>
                              <p>Petrol</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2019}
                                />
                              </span>
                              <p>2019</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>4 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Newyork, USA
                          </div>
                          <div className="listing-price">
                            <h6>
                              $45 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                           
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link to="/listing-details">
                          <img
                            src="/user-assets/img/cars/car-04.jpg"
                            className="img-fluid"
                            alt="Audi"
                          />
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
                              <img
                                src="/user-assets/img/profiles/avatar-04.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="" >
                                Ferrari 458 MM Speciale
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.5m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt="Manual"
                                />
                              </span>
                              <p>Manual</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="14 KM"
                                />
                              </span>
                              <p>14 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Diesel"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Basic"
                                />
                              </span>
                              <p>Basic</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2022}
                                />
                              </span>
                              <p>2022</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Newyork, USA
                          </div>
                          <div className="listing-price">
                            <h6>
                              $160 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link to="/listing-details">
                          <img
                            src="/user-assets/img/cars/car-05.jpg"
                            className="img-fluid"
                            alt="Audi"
                          />
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
                              <img
                                src="/user-assets/img/profiles/avatar-05.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                2018 Chevrolet Camaro
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              4.5m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt="Manual"
                                />
                              </span>
                              <p>Manual</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="18 KM"
                                />
                              </span>
                              <p>18 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Diesel"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2018}
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>4 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Germany
                          </div>
                          <div className="listing-price">
                            <h6>
                              $36 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                      <div className="feature-text">
                        <span className="bg-warning">Top Rated</span>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link to="/listing-details">
                          <img
                            src="/user-assets/img/cars/car-06.jpg"
                            className="img-fluid"
                            alt="Audi"
                          />
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
                              <img
                                src="/user-assets/img/profiles/avatar-06.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                Acura Sport Version
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.2m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-01.svg"
                                  alt="Auto"
                                />
                              </span>
                              <p>Auto</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="12 KM"
                                />
                              </span>
                              <p>12 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Diesel"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2013}
                                />
                              </span>
                              <p>2013</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Newyork, USA
                          </div>
                          <div className="listing-price">
                            <h6>
                              $30 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider owl-carousel">
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-07.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-07-slide1.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-07-slide2.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-07-slide3.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="fav-item justify-content-end">
                          <span className="img-count">
                            <i className="feather-image" />
                            04
                          </span>
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
                              <img
                                src="/user-assets/img/profiles/avatar-07.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                Chevrolet Pick Truck 3.5L
                              </Link>
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
                          <div className="list-km">
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.6m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt="Manual"
                                />
                              </span>
                              <p>Manual</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                                />
                              </span>
                              <p>Petrol</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2012}
                                />
                              </span>
                              <p>2012</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Spain
                          </div>
                          <div className="listing-price">
                            <h6>
                              $77 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider owl-carousel">
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-10.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-10-slide1.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-10-slide2.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-10-slide3.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="fav-item justify-content-end">
                          <span className="img-count">
                            <i className="feather-image" />
                            04
                          </span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart" />
                          </a>
                        </div>
                        <span className="featured-text">Ford</span>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex align-items-end justify-content-between">
                          <div className="list-rating">
                            <a href="javascript:void(0)" className="author-img">
                              <img
                                src="/user-assets/img/profiles/avatar-10.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                Ford Mustang 4.0 AT
                              </Link>
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
                          <div className="list-km">
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              4.1m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-01.svg"
                                  alt="Auto"
                                />
                              </span>
                              <p>Auto</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="22 miles"
                                />
                              </span>
                              <p>42 miles</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Petrol"
                                />
                              </span>
                              <p>Petrol</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2019}
                                />
                              </span>
                              <p>2021</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Dallas, USA
                          </div>
                          <div className="listing-price">
                            <h6>
                              $80 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider owl-carousel">
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-08.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-08-slide1.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-08-slide2.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to="/listing-details">
                              <img
                                src="/user-assets/img/cars/car-08-slide3.jpg"
                                className="img-fluid"
                                alt="Toyota"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="fav-item justify-content-end">
                          <span className="img-count">
                            <i className="feather-image" />
                            04
                          </span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart" />
                          </a>
                        </div>
                        <span className="featured-text">Toyota</span>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex align-items-end justify-content-between">
                          <div className="list-rating">
                            <a href="javascript:void(0)" className="author-img">
                              <img
                                src="/user-assets/img/profiles/avatar-08.jpg"
                                alt="author"
                              />
                            </a>
                            <h3 className="listing-title">
                              <Link to="/listing-details">
                                Toyota Tacoma 4WD
                              </Link>
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
                            <span className="km-count">
                              <img
                                src="/user-assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              4.1m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-01.svg"
                                  alt="Auto"
                                />
                              </span>
                              <p>Auto</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-02.svg"
                                  alt="22 miles"
                                />
                              </span>
                              <p>22 miles</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-03.svg"
                                  alt="Diesel"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-04.svg"
                                  alt="Power"
                                />
                              </span>
                              <p>Power</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-05.svg"
                                  alt={2019}
                                />
                              </span>
                              <p>2019</p>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/user-assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather-map-pin" />
                            </span>
                            Dallas, USA
                          </div>
                          <div className="listing-price">
                            <h6>
                              $30 <span>/ Day</span>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link to="/listing-details"
                            
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather-calendar me-2" />
                            </span>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/*Pagination*/}
                <div className="blog-pagination">
                  <nav>
                    <ul className="pagination page-item justify-content-center">
                      <li className="previtem">
                        <a className="page-link" href="#">
                          <i className="fas fa-regular fa-arrow-left me-2" />{" "}
                          Prev
                        </a>
                      </li>
                      <li className="justify-content-center pagination-center">
                        <div className="page-group">
                          <ul>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="active page-link" href="#">
                                2{" "}
                                <span className="visually-hidden">
                                  (current)
                                </span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nextlink">
                        <a className="page-link" href="#">
                          Next{" "}
                          <i className="fas fa-regular fa-arrow-right ms-2" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*/Pagination*/}
              </div>
            </div>
          </div>
        </section>
        {/* /Car Grid View */}
      </div>
      {/* scrollToTop start */}
      {/* <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919px, 307.919px",
              strokeDashoffset: "228.265px",
            }}
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Listing;
