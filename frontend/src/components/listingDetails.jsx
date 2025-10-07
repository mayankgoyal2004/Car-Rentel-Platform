import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Heart, Filter, Calendar, MapPin } from "react-feather";

const ListingDetails = () => {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [reviewStats, setReviewStats] = useState({
    average: 0,
    total: 0,
    breakdown: {
      carReview: 0,
    },
  });
  const [submitting, setSubmitting] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({
    carReview: 0,
    comment: "",
  });
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    pickupAddress: "",
    dropAddress: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    priceRate: "daily",
    rentType: "delivery",
    returnSameLocation: false,
  });
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const { id } = useParams();
  const fetchCar = async () => {
    setLoading(true);
    try {
      const res = await apiService.getCarDetails(id);
      if (res.data.success) {
        setCarData(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchReviews = async () => {
    try {
      const res = await apiService.getCarReview(carData._id);

      if (res.data && res.data.success && Array.isArray(res.data.reviews)) {
        setReviews(res.data.reviews);

        const totalReviews = res.data.reviews.length;
        const averageRating =
          totalReviews > 0
            ? res.data.reviews.reduce(
                (sum, review) => sum + review.carReview,
                0
              ) / totalReviews
            : 0;

        const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        res.data.reviews.forEach((review) => {
          const rating = Math.floor(review.carReview);
          if (breakdown[rating] !== undefined) {
            breakdown[rating] += 1;
          }
        });

        setReviewStats({
          average: averageRating,
          total: totalReviews,
          breakdown: breakdown,
        });
      } else {
        console.error("Unexpected reviews response format:", res.data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch reviews");
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
    fetchCar();
    getWishList();
  }, [id]);
  useEffect(() => {
    if (carData?._id) {
      fetchReviews();
    }
  }, [carData]);

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

  const isInWishlist = (carId) =>
    Array.isArray(wishlist) && wishlist.some((w) => w._id === carId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "carReview" ? parseInt(value) : value,
    });

    // Clear error when user starts typing
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "pickupAddress" && prev.returnSameLocation
        ? { dropAddress: value }
        : {}),
    }));
  };

  const handlePriceRateChange = (rate) => {
    setReservation((prev) => ({ ...prev, priceRate: rate }));
  };

  const handleRentTypeChange = (type) => {
    setReservation((prev) => ({ ...prev, rentType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiService.addReservationByUserStep1(
        carData._id,
        reservation
      );

      if (res.data.success) {
        navigate("/booking-checkout/" + res.data.data._id);
      } else {
        toast.error(res.data.message || "Failed to create reservation");
      }
    } catch (err) {
      console.error(err);

      if (err.response?.status === 403) {
        toast.error("Please login to make a reservation");
      } else {
        toast.error("Error saving reservation data");
      }
    }
  };

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm({
      ...enquiryForm,
      [name]: value,
    });
  };

  const validateEnquiryForm = () => {
    if (!enquiryForm.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!enquiryForm.email.trim()) {
      toast.error("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(enquiryForm.email)) {
      toast.error("Invalid email address");
      return false;
    }

    if (!enquiryForm.phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }

    if (!enquiryForm.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    return true;
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();

    if (!validateEnquiryForm()) return;

    setEnquirySubmitting(true);
    try {
      const res = await apiService.sendEnquiry(carData._id, enquiryForm);

      if (res.data.success) {
        setEnquiryForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        toast.success("Enquiry sent successfully!");
      } else {
        toast.error(res.data.message || "Failed to send enquiry");
      }
    } catch (err) {
      toast.error("Failed to send enquiry");
      console.error(err);
    } finally {
      setEnquirySubmitting(false);
    }
  };

  const validateForm = () => {
    if (
      !formData.carReview ||
      formData.carReview < 1 ||
      formData.carReview > 5
    ) {
      toast.error("Please select a rating between 1 and 5");
      return false;
    }

    if (!formData.comment.trim()) {
      toast.error("Comment is required");
      return false;
    }

    return true;
  };

  const addReview = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const reviewData = {
        carReview: formData.carReview,
        comment: formData.comment,
      };

      const res = await apiService.addCarReview(carData._id, reviewData);

      if (res.data.success || res.data.message === "Review created") {
        toast.success("Review submitted successfully!");

        await fetchReviews();
        setFormData({ carReview: 0, comment: "" });
        setShowReviewForm(false);
      } else {
        toast.error(res.data.message || "Failed to submit review");
      }
    } catch (err) {
      console.error(err);

      if (err.response?.status === 403) {
        toast.error("Please login to submit a review");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error("Failed to submit review");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const previewLength = 150;
  const description = carData?.description || "";

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const displayedText = showFullDescription
    ? description
    : description.slice(0, previewLength) +
      (description.length > previewLength ? "..." : "");

  const renderStarRating = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? "filled" : ""}`} />
    ));
  };
  if (loading) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading car details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!carData) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="alert alert-warning" role="alert">
                No car data available
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">{carData?.carName}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/listings">Listings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {carData?.carName}
                  </li>
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
                        <img
                          src="/user-assets/img/icons/car-icon.svg"
                          alt="img"
                        />
                      </span>
                      {carData?.carType?.carType}
                    </div>
                  </li>
                  <li>
                    <span className="year">
                      {" "}
                      {new Date(carData?.year).toLocaleDateString()}
                    </span>
                  </li>
                </ul>
                <div className="camaro-info">
                  <h3>{carData?.carName}</h3>
                  <div className="camaro-location">
                    <div className="camaro-location-inner">
                      <i className="bx bx-map" />
                      <span>Location: {carData?.mainLocation?.title} </span>
                    </div>
                    <div className="camaro-location-inner">
                      <i className="bx bx-show" />
                      <span>{carData?.views}</span>
                    </div>
                    <div className="camaro-location-inner">
                      <i className="bx bx-car" />
                      <span>
                        Listed on:{" "}
                        {new Date(carData?.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-btn">
              {/* <span className="total-badge">
                <i className="bx bx-calendar-edit" />
                Total Booking : 300
              </span> */}
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
                      <button
                        onClick={() => handleWishlist(carData?._id)}
                        className="btn btn-link p-0 border-0"
                      >
                        <Heart
                          size={20}
                          color={isInWishlist(carData?._id) ? "red" : "gray"}
                          fill={isInWishlist(carData?._id) ? "red" : "none"}
                        />
                      </button>
                    </div>
                    <ul className="delivery-options">
                      <li className="del-airport">
                        <i className="fa-solid fa-check" />
                        Airport delivery
                      </li>
                      <li className="del-home">
                        <i className="fa-solid fa-check" />
                        Home delivery
                      </li>
                    </ul>
                  </div>

                  <div className="slider detail-bigimg">
                    <img src={BASE_URL_IMG + carData?.image} />
                  </div>
                </div>
              </div>

              <div className="review-sec pb-0">
                <div className="review-header">
                  <h4>Extra Service</h4>
                </div>
                <div className="lisiting-service">
                  <div className="row">
                    {carData?.extraService?.map((service, index) => (
                      <div
                        key={index}
                        className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6"
                      >
                        <div className="service-info">
                          <p>{service?.name}</p>
                        </div>
                      </div>
                    ))}
                    <div className="service-img">
                      <img
                        src="/user-assets/img/icons/service-08.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-info">
                      <p>Express Check-in/out</p>
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
                  <p>{displayedText}</p>

                  {description?.length > previewLength && (
                    <div className="read-more">
                      <button className="more-link" onClick={toggleDescription}>
                        {showFullDescription ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
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
                          <img
                            src="/user-assets/img/specification/specification-icon-1.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Body </span>
                          <h6> {carData.carType?.carType}</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-2.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Make </span>
                          <h6> {carData.carBrand?.brandName}</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-3.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Transmission </span>
                          <h6> {carData.carTransmission?.carTransmission}</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-4.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Fuel Type </span>
                          <h6> {carData.carFuel?.carFuel}</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-5.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Mileage </span>
                          <h6>{carData?.mileage}Km</h6>
                        </div>
                      </div>

                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-7.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="featues-info">
                          <span>Year</span>
                          <h6>
                            {new Date(carData?.year).toLocaleDateString()}
                          </h6>
                        </div>
                      </div>

                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-9.svg"
                            alt="Icon"
                          />
                        </div>
                        {carData?.vinNumber && (
                          <div className="featues-info">
                            <span>VIN </span>
                            <h6> {carData?.vinNumber}</h6>
                          </div>
                        )}
                      </div>
                      <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                        <div className="feature-img">
                          <img
                            src="/user-assets/img/specification/specification-icon-10.svg"
                            alt="Icon"
                          />
                        </div>

                        <div className="featues-info">
                          <span>Doors</span>
                          <h6>{carData?.noOfDoors} </h6>
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
                    {[0, 1, 2].map((colIndex) => (
                      <div key={colIndex} className="col-md-4">
                        <ul>
                          {carData?.carFeatures
                            .slice(colIndex * 4, (colIndex + 1) * 4)
                            .map((featureObj, index) => (
                              <li key={index}>
                                <span>
                                  <i className="bx bx-check-double" />
                                </span>
                                {featureObj?.carFeature}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
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
                        <th>Price</th>
                        <th>Base Kilometers</th>
                        <th>Extra Kilometer Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object?.entries(carData?.pricing?.prices).map(
                        ([name, price]) => (
                          <tr key={name}>
                            <td>
                              {name.charAt(0).toUpperCase() + name.slice(1)}
                            </td>
                            <td>${price}</td>
                            <td>{carData.pricing?.baseKilometers}</td>
                            <td>${carData.pricing?.extraKilometerPrice}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /Tariff */}

              {/* Video */}
              <div className="review-sec mb-0">
                <div className="review-header">
                  <h4>Video</h4>
                </div>
                <div className="short-video">
                  <video
                    className="img-fluid"
                    src={BASE_URL_IMG + carData?.carVideo}
                    controls
                    width="100%"
                  />
                </div>
              </div>
              {/* /Video */}
              {/* FAQ */}
              <div className="review-sec faq-feature">
                <div className="review-header">
                  <h4>FAQ’s</h4>
                </div>
                <div className="faq-info">
                  {carData.faqs && carData.faqs?.length > 0 ? (
                    carData.faqs?.map((item, index) => (
                      <div className="faq-card" key={index}>
                        <h4 className="faq-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href={`#faq${index}`}
                            aria-expanded="false"
                          >
                            {item?.question}
                          </a>
                        </h4>
                        <div
                          id={`faq${index}`}
                          className="card-collapse collapse"
                        >
                          <p>{item?.answer}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No FAQs available for this car.</p>
                  )}
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
                      <p>
                        Cancellation charges will be applied as per the policy
                      </p>
                    </div>
                    <Link to="/privacy-policy">Know More</Link>
                  </div>
                  <div className="policy-item">
                    <div className="policy-info">
                      <h6>Policy</h6>
                      <p>
                        I hereby agree to the terms and conditions of the Lease
                        Agreement with Host
                      </p>
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
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowReviewForm(!showReviewForm)}
                  >
                    {showReviewForm ? "Cancel Review" : "Add Review"}
                  </button>
                </div>

                {/* Review Form */}
                {showReviewForm && (
                  <div className="review-form-card mb-4">
                    <div className="card-body">
                      <h5>Write a Review</h5>
                      <form onSubmit={addReview}>
                        <div className="mb-3">
                          <label className="form-label">Rating</label>
                          <div className="rating-selection">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                type="button"
                                className="btn btn p-0 me-1"
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    carReview: rating,
                                  });
                                }}
                              >
                                <i
                                  className={`fas fa-star ${
                                    formData.carReview >= rating ? "filled" : ""
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Comment</label>
                          <textarea
                            name="comment"
                            rows="4"
                            className={`form-control `}
                            placeholder="Share your experience with this car"
                            value={formData?.comment}
                            onChange={handleInputChange}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : "Submit Review"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* Review Statistics */}
                <div className="rating-wrapper">
                  <div className="rating-overview">
                    <div className="rating-average">
                      <h2>{reviewStats.average.toFixed(1)}</h2>
                      <div className="star-rating">
                        {renderStarRating(reviewStats.average)}
                      </div>
                      <p>{reviewStats.total} reviews</p>
                    </div>
                  </div>

                  <div className="rating-progress">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = reviewStats.breakdown[rating] || 0;
                      const percentage =
                        reviewStats.total > 0
                          ? (count / reviewStats.total) * 100
                          : 0;

                      return (
                        <div key={rating} className="progress-info">
                          <h6>{rating} star</h6>
                          <div className="progress">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <div className="progress-percent">{count}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reviews List */}
                <div className="review-card">
                  <div className="review-head">
                    <h6>Showing {reviews.length} reviews</h6>
                  </div>

                  {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to review!</p>
                  ) : (
                    <ul>
                      {reviews.map((review) => (
                        <li key={review._id}>
                          <div className="review-wraps">
                            <div className="review-header-group">
                              <div className="review-widget-header">
                                <span className="review-widget-img">
                                  <img
                                    src={BASE_URL_IMG + review.user?.image}
                                    className="img-fluid"
                                    alt="User"
                                  />
                                </span>
                                <div className="review-design">
                                  <h6>{review.user?.userName}</h6>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="reviewbox-list-rating">
                                <p>{renderStarRating(review.carReview)}</p>
                              </div>
                            </div>
                            <p>{review.comment}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
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
                  {["daily", "weekly", "monthly", "yearly"].map((rate) => (
                    <label
                      key={rate}
                      className="booking_custom_check bookin-check-2"
                    >
                      <input
                        type="radio"
                        name="price_rate"
                        checked={reservation.priceRate === rate}
                        onChange={() => handlePriceRateChange(rate)}
                      />
                      <span className="booking_checkmark">
                        <span className="checked-title">
                          {rate.charAt(0).toUpperCase() + rate.slice(1)}
                        </span>
                        <span className="price-rate">
                          ${carData.pricing.prices[rate]}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
                <div className="location-content">
                  <div className="delivery-tab">
                    <ul className="nav">
                      {["delivery", "selfPickup"].map((type) => (
                        <li key={type}>
                          <label className="booking_custom_check">
                            <input
                              type="radio"
                              name="rent_type"
                              checked={reservation.rentType === type}
                              onChange={() => handleRentTypeChange(type)}
                            />
                            <span className="booking_checkmark">
                              <span className="checked-title">
                                {type === "delivery"
                                  ? "Delivery"
                                  : "Self Pickup"}
                              </span>
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade active show" id="delivery">
                      <form onSubmit={handleSubmit}>
                        <ul>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label>Pickup Location</label>
                              <input
                                type="text"
                                name="pickupAddress"
                                value={reservation.pickupAddress}
                                onChange={handleChange}
                                placeholder="Pickup address"
                                className="form-control"
                              />
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Return to same location</span>
                                <input
                                  type="checkbox"
                                  name="returnSameLocation"
                                  checked={reservation.returnSameLocation}
                                  onChange={handleChange}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label>Return Location</label>
                              <input
                                type="text"
                                name="dropAddress"
                                value={reservation.dropAddress}
                                onChange={handleChange}
                                placeholder="Return address"
                                className="form-control"
                                disabled={reservation.returnSameLocation}
                              />
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label>Pickup Date</label>
                              <input
                                type="date"
                                name="pickupDate"
                                value={reservation.pickupDate}
                                onChange={handleChange}
                                className="form-control"
                              />
                              <input
                                type="time"
                                name="pickupTime"
                                value={reservation.pickupTime}
                                onChange={handleChange}
                                className="form-control mt-2"
                              />
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label>Return Date</label>
                              <input
                                type="date"
                                name="returnDate"
                                value={reservation.returnDate}
                                onChange={handleChange}
                                className="form-control"
                              />
                              <input
                                type="time"
                                name="returnTime"
                                value={reservation.returnTime}
                                onChange={handleChange}
                                className="form-control mt-2"
                              />
                            </div>
                          </li>
                          <li className="column-group-last">
                            <div className="input-block mb-0">
                              <div className="search-btn">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                >
                                  Book
                                </button>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#enquiry"
                                  className="btn btn-theme"
                                >
                                  Enquire Us
                                </a>
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
                                  <option>
                                    Newyork Office - 78, 10th street Laplace USA
                                  </option>
                                  <option>
                                    Newyork Office - 12, 5th street USA
                                  </option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Return to same location</span>
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
                                  <option>
                                    Newyork Office - 78, 10th street Laplace USA
                                  </option>
                                  <option>
                                    Newyork Office - 12, 5th street USA
                                  </option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block">
                              <label>Return Location</label>
                              <div className="group-img">
                                <div className="form-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="78, 10th street Laplace USA"
                                  />
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
                                  <div className="form-wr-ap">
                                    <input
                                      type="text"
                                      className="form-control datetimepicker"
                                      placeholder="04/11/2023"
                                    />
                                    <span className="form-icon">
                                      <i className="fa-regular fa-calendar-days" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="input-block">
                                <div className="group-img">
                                  <div className="form-wrap">
                                    <input
                                      type="text"
                                      className="form-control timepicker"
                                      placeholder="11:00 AM"
                                    />
                                    <span className="form-icon">
                                      <i className="fa-regular fa-clock" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="column-group-main">
                            <div className="input-block m-0">
                              {" "}
                              <label>Return Date</label>
                            </div>
                            <div className="input-block-wrapp sidebar-form">
                              <div className="input-block me-2">
                                <div className="group-img">
                                  <div className="form-wrap">
                                    <input
                                      type="text"
                                      className="form-control datetimepicker"
                                      placeholder="04/11/2023"
                                    />
                                    <span className="form-icon">
                                      <i className="fa-regular fa-calendar-days" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="input-block">
                                <div className="group-img">
                                  <div className="form-wrap">
                                    <input
                                      type="text"
                                      className="form-control timepicker"
                                      placeholder="11:00 AM"
                                    />
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
                                <a
                                  href="/booking-checkout"
                                  className="btn btn-primary check-available w-100"
                                >
                                  Book
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#enquiry"
                                  className="btn btn-theme"
                                >
                                  Enquire Us
                                </a>
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
                    <a href="#">
                      <img
                        src={BASE_URL_IMG + carData?.admin?.image}
                        alt="User"
                      />
                    </a>
                    <span className="badge-check">
                      <img
                        src="/user-assets/img/icons/badge-check.svg"
                        alt="User"
                      />
                    </span>
                  </div>
                  <div className="reviewbox-list-rating">
                    <h5>
                      <a>{carData?.admin?.userName}</a>
                    </h5>
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
                    <span>
                      <a
                        href={`mailto:${carData?.admin?.email}`}
                        className="__cf_email__"
                      >
                        {carData?.admin?.email}
                      </a>
                    </span>
                  </li>
                  <li>
                    Phone Number
                    <span>{carData.admin?.contact}</span>
                  </li>
                  <li>
                    Location
                    <span>{carData.admin?.address}</span>
                  </li>
                </ul>
                <div className="message-btn">
                  <Link
                    to="/user-dashboard/user-message"
                    className="btn btn-order"
                  >
                    Message to owner
                  </Link>
                  <a
                    href={`https://wa.me/${
                      carData.admin?.contact
                    }?text=${encodeURIComponent(
                      "Hello, I am interested in your car!"
                    )}`}
                    className="chat-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp" /> Chat Via Whatsapp
                  </a>
                </div>
              </div>

              {/* <div className="review-sec share-car mt-0 mb-0">
                <div className="review-header">
                  <h4>Share</h4>
                </div>
                <ul className="nav-social">
                  <li>
                    <a>
                      <i className="fa-brands fa-facebook-f fa-facebook fi-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-instagram fi-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-behance fi-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa-brands fa-pinterest-p fi-icon" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter fi-icon" />{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-linkedin fi-icon" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal custom-modal fade check-availability-modal"
        id="pages_edit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-header text-start mb-0">
                <h4 className="mb-0 text-dark fw-bold">Availability Details</h4>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="align-center" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Modal */}
      {/* Custom Date Modal */}
      <div
        className="modal new-modal fade enquire-mdl"
        id="enquiry"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Enquiry</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitEnquiry} className="enquire-modal">
                <div className="booking-header">
                  <div className="booking-img-wrap">
                    <div className="book-img">
                      <img src={BASE_URL_IMG + carData.image} alt="img" />
                    </div>
                    <div className="book-info">
                      <h6>{carData.carName}</h6>
                      <p>Location : {carData.mainLocation.title}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control `}
                    placeholder="Enter Name"
                    value={enquiryForm.name}
                    onChange={handleEnquiryChange}
                  />
                </div>
                <div className="modal-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control`}
                    placeholder="Enter Email Address"
                    value={enquiryForm.email}
                    onChange={handleEnquiryChange}
                  />
                </div>
                <div className="modal-form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className={`form-control `}
                    placeholder="Enter Phone Number"
                    value={enquiryForm.phone}
                    onChange={handleEnquiryChange}
                  />
                </div>
                <div className="modal-form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className={`form-control`}
                    rows={4}
                    placeholder="Enter your message"
                    value={enquiryForm.message}
                    onChange={handleEnquiryChange}
                  />
                </div>
                <label className="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span className="checkmark" /> I Agree with{" "}
                  <a>Terms of Service</a> &amp;{" "}
                  <Link to="">Privacy Policy</Link>
                </label>
                <div className="modal-btn modal-btn-sm">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={enquirySubmitting}
                  >
                    {enquirySubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Custom Date Modal */}
      {/* Custom Date Modal */}
      <div
        className="modal new-modal fade enquire-mdl"
        id="fare_details"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Fare Details</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
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
                      <p>
                        <i className="feather-map-pin" /> Location : Miami St,
                        Destin, FL 32550, USA
                      </p>
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
                            <p className="text-danger">
                              (This does not include fuel)
                            </p>
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
                          <td colSpan={2} className="amt text-end">
                            {" "}
                            + $0
                          </td>
                        </tr>
                        <tr>
                          <td>Trip Protection Fees</td>
                          <td colSpan={2} className="amt text-end">
                            {" "}
                            + $25
                          </td>
                        </tr>
                        <tr>
                          <td>Convenience Fees</td>
                          <td colSpan={2} className="amt text-end">
                            {" "}
                            + $2
                          </td>
                        </tr>
                        <tr>
                          <td>Tax</td>
                          <td colSpan={2} className="amt text-end">
                            {" "}
                            + $2
                          </td>
                        </tr>
                        <tr>
                          <td>Refundable Deposit</td>
                          <td colSpan={2} className="amt text-end">
                            +$1200
                          </td>
                        </tr>
                        <tr>
                          <th>Subtotal</th>
                          <th colSpan={2} className="amt text-end">
                            +$1604
                          </th>
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

export default ListingDetails;
