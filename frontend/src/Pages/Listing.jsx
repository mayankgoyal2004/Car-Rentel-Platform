import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { Heart, Filter, Calendar, MapPin } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
const Listing = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  // Get query parameters from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [filters, setFilters] = useState({
    search: "",
    carType: queryParams.get("carType") || "",

    carTransmission: "",
    carColor: "",
    carBrand: "",
    carModel: "",
    pickupLocation: queryParams.get("pickupLocation") || "",
    dropLocation: queryParams.get("dropLocation") || "",
    pickupDate: queryParams.get("pickupDate") || "",
    dropDate: queryParams.get("dropDate") || "",
    city: queryParams.get("pickupLocation") || "",
    page: 1,
    limit: 10,
    brand: [],
    fuelType: "",
    transmission: "",
    rating: [],
  });

  const fetchCars = async () => {
    setLoading(true);
    try {
      const apiFilters = {
        search: searchQuery || filters.search,
        page: currentPage,
        limit: filters.limit,
        pickupLocation: filters.pickupLocation,
        dropLocation: filters.dropLocation,
        pickupDate: filters.pickupDate,
        dropDate: filters.dropDate,
        // map frontend keys to backend
        carBrand: filters.brand,
        carModel: filters.model,
        carTransmission: filters.transmission,
        carFuel: filters.fuelType,
        carColor: filters.color,
        carType: filters.carType,
      };

      // Remove empty filters
      Object.keys(apiFilters).forEach((key) => {
        if (
          apiFilters[key] === "" ||
          (Array.isArray(apiFilters[key]) && apiFilters[key].length === 0) ||
          apiFilters[key] === null ||
          apiFilters[key] === undefined
        ) {
          delete apiFilters[key];
        }
      });

      const res = await apiService.getAllcarHomePage(apiFilters);
      setCars(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
      if (res.data.currentPage && res.data.currentPage !== currentPage) {
        setCurrentPage(res.data.currentPage);
      }
    } catch (err) {
      console.error("Error fetching cars:", err);
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  const getWishList = async () => {
    try {
      const res = await apiService.getWishlist();
      setWishlist(res.data.wishlist);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    fetchCars();
    getWishList();
  }, [currentPage, filters.limit, searchQuery]);

  const handleWishlist = async (carId) => {
    try {
      const res = await apiService.addWishlist({ carId });

      if (res.data.success) {
        setWishlist(res.data.wishlist || []);
        toast.success("Wishlist updated!");
      } else {
        toast.error(res.data.message || "Failed to update wishlist");
      }
    } catch (err) {
      if (err.response?.status === 403) {
        toast.error("Please login to add to wishlist");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error("Error toggling wishlist");
        console.error("Error toggling wishlist:", err);
      }
    }
  };
  // Update search query when URL params change
  useEffect(() => {
    if (queryParams.get("pickupLocation") || queryParams.get("dropLocation")) {
      setFilters((prev) => ({
        ...prev,

        pickupLocation: queryParams.get("pickupLocation") || "",
        dropLocation: queryParams.get("dropLocation") || "",
        pickupDate: queryParams.get("pickupDate") || "",
        dropDate: queryParams.get("dropDate") || "",
        city: queryParams.get("pickupLocation") || "",
      }));

      // Automatically fetch cars when quick search params are present
      if (currentPage === 1) {
        fetchCars();
      } else {
        setCurrentPage(1);
      }
    }
  }, [location.search]);

  useEffect(() => {
    const carTypeParam = queryParams.get("carType");
    if (carTypeParam) {
      setFilters((prev) => ({
        ...prev,
        carType: carTypeParam,
      }));

      if (currentPage === 1) {
        fetchCars();
      } else {
        setCurrentPage(1);
      }
    }
  }, [location.search]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "brand" || filterType === "rating") {
        const currentValues = prev[filterType] || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];

        return { ...prev, [filterType]: newValues };
      } else {
        const mapKeys = {
          brand: "carBrand",
          model: "carModel",
          transmission: "carTransmission",
          fuelType: "carFuel",
          color: "carColor",
          type: "carType",
        };

        const backendKey = mapKeys[filterType] || filterType;

        return {
          ...prev,
          [filterType]: value,
          [backendKey]: value,
        };
      }
    });
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      carType: "",
      carTransmission: "",
      carColor: "",
      carBrand: "",
      carModel: "",
      pickupLocation: "",
      dropLocation: "",
      pickupDate: "",
      dropDate: "",
      city: "",
      page: 1,
      limit: 10,
      brand: [],
      fuelType: "",
      transmission: "",
      rating: [],
    });
    setSearchQuery("");
    setCurrentPage(1);

    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };
  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isInWishlist = (carId) =>
    Array.isArray(wishlist) && wishlist.some((w) => w._id === carId);

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li className="page-item" key={i}>
          <button
            className={`page-link ${currentPage === i ? "active" : ""}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return (
      <div className="blog-pagination">
        <nav>
          <ul className="pagination page-item justify-content-center">
            <li className="previtem">
              <button
                className="page-link"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="fas fa-regular fa-arrow-left me-2" /> Prev
              </button>
            </li>
            {startPage > 1 && (
              <>
                <li className="page-item">
                  <button
                    className="page-link "
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </li>
                {startPage > 2 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
              </>
            )}
            {pages}
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}
            <li className="nextlink">
              <button
                className="page-link"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next <i className="fas fa-regular fa-arrow-right ms-2" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#javascript">Listings</a>
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
              <form onSubmit={handleSearch}>
                <ul className="align-items-center">
                  {/* <li className="column-group-main">
                    <div className="input-block">
                      <label>Search Cars</label>
                      <div className="group-img">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by car name, brand, or model"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </li> */}
                  {/* Show quick search details if they exist */}

                  <>
                    <li className="column-group">
                      <div className="input-block">
                        <label>Pickup Location</label>
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter pickup location"
                            value={filters.pickupLocation}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                pickupLocation: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </li>

                    <li className="column-group">
                      <div className="input-block">
                        <label>Dropoff Location</label>
                        <div className="group-img">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter dropoff location"
                            value={filters.dropLocation}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                dropLocation: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </li>

                    <li className="column-group">
                      <div className="input-block">
                        <label>Pickup Date</label>
                        <div className="group-img">
                          <input
                            type="date"
                            className="form-control"
                            value={
                              filters.pickupDate
                                ? new Date(filters.pickupDate)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                pickupDate: e.target.value,
                              }))
                            }
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                      </div>
                    </li>

                    <li className="column-group">
                      <div className="input-block">
                        <label>Dropoff Date</label>
                        <div className="group-img">
                          <input
                            type="date"
                            className="form-control"
                            value={
                              filters.dropDate
                                ? new Date(filters.dropDate)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                dropDate: e.target.value,
                              }))
                            }
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                      </div>
                    </li>
                  </>

                  <li className="column-group-last">
                    <div className="input-block">
                      <div className="search-btn">
                        <button className="btn search-button" type="submit">
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
                      <p>
                        Showing {(currentPage - 1) * filters.limit + 1}-
                        {Math.min(currentPage * filters.limit, cars.length)} of{" "}
                        {cars.length} Cars
                      </p>
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
              {/* Filters Sidebar */}
              <div className="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
                <form className="sidebar-form">
                  <div className="sidebar-heading">
                    <h3>What Are You Looking For</h3>
                  </div>
                  <div className="product-search">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Car"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="accord-list">
                    {/* Car Brand Filter */}
                    <div className="accordion" id="accordionMain1">
                      <div className="card-header-new" id="headingOne">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={(e) => e.preventDefault()}
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
                                  {[
                                    "Tesla",

                                    "Ford",
                                    "Mercedes Benz",
                                    "Audi",
                                    "Kia",
                                    "Honda",
                                    "Toyota",
                                  ].map((brand) => (
                                    <label
                                      className="custom_check w-100"
                                      key={brand}
                                    >
                                      <input
                                        type="checkbox"
                                        name="brand"
                                        checked={filters.brand?.includes(brand)}
                                        onChange={() =>
                                          handleFilterChange("brand", brand)
                                        }
                                      />
                                      <span className="checkmark" /> {brand}
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fuel Type Filter */}
                    <div className="accordion" id="accordionMain04">
                      <div className="card-header-new" id="headingfuel">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefuel"
                            aria-expanded="true"
                            aria-controls="collapsefuel"
                            onClick={(e) => e.preventDefault()}
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
                              {["Petrol", "Diesel", "Electric", "CNG"].map(
                                (fuel) => (
                                  <li key={fuel}>
                                    <div className="input-selection">
                                      <input
                                        type="radio"
                                        name="fuelType" // 👈 keep this as frontend key
                                        id={fuel.toLowerCase()}
                                        checked={filters.fuelType === fuel} // 👈 match frontend state
                                        onChange={() =>
                                          handleFilterChange("fuelType", fuel)
                                        } // 👈 let handler map it
                                      />
                                      <label htmlFor={fuel.toLowerCase()}>
                                        {fuel}
                                      </label>
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transmission Filter */}
                    <div className="accordion" id="accordionMain4">
                      <div className="card-header-new" id="headingtransmiss">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetransmission"
                            aria-expanded="true"
                            aria-controls="collapsetransmission"
                            onClick={(e) => e.preventDefault()}
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
                              {["Manual", "Semi Automatic", "Automatic"].map(
                                (trans) => (
                                  <li key={trans}>
                                    <div className="input-selection">
                                      <input
                                        type="radio"
                                        name="transmission"
                                        id={trans
                                          .toLowerCase()
                                          .replace(" ", "-")}
                                        checked={filters.transmission === trans}
                                        onChange={() =>
                                          handleFilterChange(
                                            "transmission",
                                            trans
                                          )
                                        }
                                      />
                                      <label
                                        htmlFor={trans
                                          .toLowerCase()
                                          .replace(" ", "-")}
                                      >
                                        {trans}
                                      </label>
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car Color Filter */}
                    <div className="accordion" id="accordionMainColor">
                      <div className="card-header-new" id="headingColor">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseColor"
                            aria-expanded="true"
                            aria-controls="collapseColor"
                            onClick={(e) => e.preventDefault()}
                          >
                            Car Color
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
                          <div className="fuel-list">
                            <ul>
                              {[
                                "Black",
                                "White",
                                "Red",
                                "Blue",
                                "Silver",
                                "Gray",
                                "Green",
                                "Yellow",
                              ].map((color) => (
                                <li key={color}>
                                  <div className="input-selection">
                                    <input
                                      type="radio"
                                      name="color"
                                      id={color.toLowerCase()}
                                      checked={filters.color === color}
                                      onChange={() =>
                                        handleFilterChange("color", color)
                                      }
                                    />
                                    <label htmlFor={color.toLowerCase()}>
                                      {color}
                                    </label>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car type*/}
                    <div className="accordion" id="accordionMainType">
                      <div className="card-header-new" id="headingType">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseType"
                            aria-expanded="true"
                            aria-controls="collapseType"
                            onClick={(e) => e.preventDefault()}
                          >
                            Car Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                      </div>

                      <div
                        id="collapseType"
                        className="collapse"
                        aria-labelledby="headingType"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              {[
                                "SUV",
                                "Sedan",
                                "Hatchback",
                                "Convertible",
                                "Coupe",
                                "Pickup Truck",
                                "Van",
                                "Luxury",
                              ].map((type) => (
                                <li key={type}>
                                  <div className="input-selection">
                                    <input
                                      type="radio"
                                      name="carType"
                                      id={type.toLowerCase()}
                                      checked={filters.carType === type}
                                      onChange={() =>
                                        handleFilterChange("type", type)
                                      }
                                    />
                                    <label htmlFor={type.toLowerCase()}>
                                      {type}
                                    </label>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rating Filter */}
                    {/* <div className="accordion" id="accordionMain10">
                      <div className="card-header-new" id="headingFive">
                        <h6 className="filter-title">
                          <a
                            href="#javascript"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                            onClick={(e) => e.preventDefault()}
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
                              {[5, 4, 3, 2, 1].map((rating) => (
                                <label
                                  className="custom_check w-100"
                                  key={rating}
                                >
                                  <input
                                    type="checkbox"
                                    name="rating"
                                    checked={filters.rating?.includes(
                                      rating.toString()
                                    )}
                                    onChange={() =>
                                      handleFilterChange(
                                        "rating",
                                        rating.toString()
                                      )
                                    }
                                  />
                                  <span className="checkmark" />
                                  {[...Array(5)].map((_, i) => (
                                    <i
                                      key={i}
                                      className={`fas fa-star ${
                                        i < rating ? "filled" : ""
                                      }`}
                                    />
                                  ))}
                                  <span className="rating-count">
                                    {rating}.0
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* 
                  <button
                    type="button"
                    className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
                    onClick={applyFilters}
                  >
                    <span>
                      <Filter size={18} className="me-2" />
                    </span>
                    Apply Filters
                  </button> */}

                  <a
                    className="reset-filter"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilters((prev) => ({
                        ...prev,
                        search: "",
                        carType: "",
                        carTransmission: "",
                        carColor: "",
                        carBrand: "",
                        carModel: "",
                        pickupLocation: "",
                        dropLocation: "",
                        pickupDate: "",
                        dropDate: "",
                        city: "",
                        page: 1,
                        limit: 10,
                        brand: [],
                        fuelType: "",
                        transmission: "",
                        rating: [],
                      }));
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                  >
                    Reset Filter
                  </a>
                </form>
              </div>

              {/* Cars Listing */}
              <div className="col-lg-9">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading cars...</p>
                  </div>
                ) : cars.length === 0 ? (
                  <div className="text-center py-5">
                    <h4>No cars found</h4>
                    <p>Try adjusting your search criteria</p>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="row">
                      {cars.map((car) => (
                        <div
                          className="col-xxl-4 col-lg-6 col-md-6 col-12"
                          key={car?._id}
                        >
                          <div className="listing-item">
                            <div className="listing-img">
                              <Link to={`/listing-details/${car.permalink}`}>
                                <img
                                  src={BASE_URL_IMG + car?.image || "N/A"}
                                  className="img-fluid"
                                  alt={car?.carName || "N/A"}
                                />
                              </Link>
                              <div className="fav-item justify-content-end">
                                <button
                                  onClick={() => handleWishlist(car._id)}
                                  className="btn btn-link p-0 border-0"
                                >
                                  <Heart
                                    size={20}
                                    color={
                                      isInWishlist(car._id) ? "red" : "gray"
                                    }
                                    fill={
                                      isInWishlist(car._id) ? "red" : "none"
                                    }
                                  />
                                </button>
                              </div>
                              <span className="featured-text">
                                {car?.carBrand?.brandName || "N/A"}
                              </span>
                            </div>
                            <div className="listing-content">
                              <div className="listing-features d-flex align-items-end justify-content-between">
                                <div className="list-rating">
                                  <h3 className="listing-title">
                                    <Link
                                      to={`/listing-details/${car?.permalink}`}
                                    >
                                      {car?.carName || "N/A"}
                                    </Link>
                                  </h3>
                                  <div className="list-rating">
                                    {[...Array(5)].map((_, i) => (
                                      <i
                                        key={i}
                                        className={`fas fa-star ${
                                          i < Math.floor(car?.avgRating || 0)
                                            ? "filled"
                                            : ""
                                        }`}
                                      />
                                    ))}
                                    <span>
                                      ({car?.reviewCount || 0}) Reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="list-km">
                                  <span className="km-count">
                                    <img
                                      src="/user-assets/img/icons/map-pin.svg"
                                      alt="location"
                                    />
                                    {car?.distance || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <div className="listing-details-group">
                                <ul>
                                  <li>
                                    <span>
                                      <img
                                        src="/user-assets/img/icons/car-parts-01.svg"
                                        alt="Transmission"
                                      />
                                    </span>
                                    <p>
                                      {car?.carTransmission?.carTransmission ||
                                        "N/A"}
                                    </p>
                                  </li>
                                  <li>
                                    <span>
                                      <img
                                        src="/user-assets/img/icons/car-parts-02.svg"
                                        alt="Mileage"
                                      />
                                    </span>
                                    <p>{car?.mileage || "N/A"}</p>
                                  </li>
                                  <li>
                                    <span>
                                      <img
                                        src="/user-assets/img/icons/car-parts-03.svg"
                                        alt="Fuel Type"
                                      />
                                    </span>
                                    <p>{car.carFuel?.carFuel || "N/A"}</p>
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
                                    <p>{"Power"}</p>
                                  </li>
                                  <li>
                                    <span>
                                      <img
                                        src="/user-assets/img/icons/car-parts-05.svg"
                                        alt="Year"
                                      />
                                    </span>
                                    <p>
                                      {car?.year
                                        ? new Date(
                                            car?.year || "N/A"
                                          ).getFullYear()
                                        : "N/A"}
                                    </p>
                                  </li>
                                  <li>
                                    <span>
                                      <img
                                        src="/user-assets/img/icons/car-parts-06.svg"
                                        alt="Seats"
                                      />
                                    </span>
                                    <p>
                                      {car.carSeats?.carSeats || "N/A"} Persons
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="listing-location-details">
                                <div className="listing-price">
                                  <span>
                                    <MapPin size={16} className="me-2" />
                                  </span>
                                  {car.mainLocation?.title ||
                                    "Location not specified"}
                                </div>
                                <div className="listing-price">
                                  <h6>
                                    ${car.pricing?.prices?.daily || "0"}
                                    <span>/ Day</span>
                                  </h6>
                                </div>
                              </div>
                              <div className="listing-button">
                                <Link
                                  to={`/listing-details/${car?.permalink}`}
                                  className="btn btn-order"
                                >
                                  <span>
                                    <Calendar size={18} className="me-2" />
                                  </span>
                                  Rent Now
                                </Link>
                              </div>
                            </div>
                            {car?.isFeatured && (
                              <div className="feature-text">
                                <span className="bg-danger">Featured</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && renderPagination()}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* /Car Grid View */}
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
    </div>
  );
};

export default Listing;
