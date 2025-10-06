import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminCarDetails = () => {
  const [car, setCars] = useState(null);
  const [loading, setLoading] = useState(false);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const { id } = useParams();

  const fetchAllCars = async () => {
    setLoading(true);
    try {
      const res = await apiService.getCarDetailyById(id);
      if (res.data.success) {
        setCars(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (currentStatus) => {
    try {
      const res = await apiService.toogleIsAvailableByAdmin(car._id, {
        isAvailable: !currentStatus,
      });

      if (res.data.success) {
        toast.success("Car status updated successfully");

        setCars({ ...car, isAvailable: !currentStatus });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    if (id) {
      fetchAllCars();
    }
  }, [id]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : !car ? (
        <p>No car found</p>
      ) : (
        <div>
          <div className="page-wrapper">
            <div className="content me-0">
              <div className="mb-3">
                <Link
                  to="/admin-dashboard/all-cars"
                  className="d-inline-flex align-items-center fw-medium"
                >
                  <i className="ti ti-arrow-left me-1" />
                  Cars
                </Link>
              </div>
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                      <span className="badge badge-md badge-success-transparent d-inline-flex align-items-center badge-sm">
                        <i className="ti ti-point-filled me-1" />
                        {car?.status ? "Active" : "Inactive"}
                      </span>
                      <span className="badge badge-md bg-secondary-transparent">
                        {car?.inRent ? "In Rent" : "Not In Rent"}
                      </span>
                      {userType !== 1 && (
                        <button
                          className={`badge badge-md  ${
                            car?.isAvailable ? "bg-success" : "bg-danger"
                          }`}
                          onClick={() => handleToggleStatus(car?.isAvailable)}
                        >
                          {car?.isAvailable ? "Available" : "Not Available"}
                        </button>
                      )}
                    </div>
                    <p>Created {new Date(car?.createdAt).toDateString()}</p>
                  </div>
                  {userType !== 1 && (
                    <div className="d-flex align-items-center gap-3">
                      <Link
                        to={`/admin-dashboard/edit-car/${car?._id}`}
                        className="btn btn-dark btn-md d-flex align-items-center"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit Car
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                {/* Car Details */}
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-3 pb-3">
                        <h5>Car Details</h5>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-3">
                            <img
                              src="/admin-assets/img/car/car-01.jpg"
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6>{car?.carName}</h6>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-2">
                                {car?.carType?.carType}
                              </p>
                              <p className="mb-0 d-flex align-items-center">
                                <i className="ti ti-circle-filled text-secondary fs-5 me-2" />
                                ${car?.pricing?.prices?.daily}/day
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <span className="badge badge-md bg-info-transparent">
                            VIN : {car?.vinNumber}
                          </span>
                          <span className="badge badge-md bg-orange-transparent">
                            Plate Number : {car?.plateNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 mb-xl-0">
                    <div className="card-header py-0">
                      <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#car-info"
                            data-bs-toggle="tab"
                          >
                            Car Info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#car-price"
                            data-bs-toggle="tab"
                          >
                            Pricing &amp; Tarrif
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#car-service"
                            data-bs-toggle="tab"
                          >
                            Extra Services
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#car-gallery"
                            data-bs-toggle="tab"
                          >
                            Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#car-damages"
                            data-bs-toggle="tab"
                          >
                            Damages
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        {/* Car Info */}
                        <div
                          className="tab-pane fade active show"
                          id="car-info"
                        >
                          <div className="border-bottom mb-3 pb-3">
                            <div className="row">
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Color
                                  </h6>
                                  <p className="d-inline-flex align-items-center fs-13">
                                    {car?.carColor?.carColor}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Brand
                                  </h6>
                                  <p className="fs-13">
                                    {car?.carBrand?.brandName}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Model
                                  </h6>
                                  <p className="fs-13">
                                    {car?.carModel?.carModel}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Type
                                  </h6>
                                  <p className="fs-13">
                                    {car?.carType?.carType}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Year
                                  </h6>
                                  <p className="fs-13">
                                    {new Date(car?.year).getFullYear()}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Passengers
                                  </h6>
                                  <p className="fs-13">{car?.passengers}</p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    VIN Number
                                  </h6>
                                  <p className="fs-13">{car?.vinNumber}</p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Plate Number
                                  </h6>
                                  <p className="fs-13">{car?.plateNumber}</p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Mileage
                                  </h6>
                                  <p className="fs-13">{car?.mileage} km</p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Transmission
                                  </h6>
                                  <p className="fs-13">
                                    {car?.carTransmission?.carTransmission}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    No of Seats
                                  </h6>
                                  <p className="fs-13">
                                    {car?.carSeats?.carSeats}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    No of Air Bags
                                  </h6>
                                  <p className="fs-13">{car?.airbags}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Documents</h6>
                              <Link
                                to="/admin-dashboard/edit-Car"
                                className="link-default"
                              ></Link>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-4">
                              <div className="d-flex align-items-center">
                                <span className="me-2">
                                  <img
                                    src="/admin-assets/img/icons/pdf-icon.svg"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <a
                                    href={BASE_URL_IMG + car?.carPolicies}
                                    target="/"
                                    className="fs-14 fw-medium"
                                  >
                                    car Insurance{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h6 className="mb-3">Features &amp; Amenities</h6>
                            <div className="row gy-2">
                              {car?.carFeatures?.map((feature, index) => (
                                <div key={index} className="col-lg-4 col-sm-6">
                                  <div className="d-flex flex-column gap-2">
                                    <p className="d-flex align-items-center mb-0">
                                      <i className="ti ti-square-check-filled text-success me-2" />
                                      {feature?.carFeature}{" "}
                                      {/* or feature.featureName depending on your schema */}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* /Car Info */}
                        {/* Car Price */}
                        <div className="tab-pane fade" id="car-price">
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Pricing</h6>
                              <a className="link-default"></a>
                            </div>
                            <div className="row">
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Per Day
                                  </h6>
                                  <p className="fs-13">
                                    ${car?.pricing?.prices?.daily}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Weekly
                                  </h6>
                                  <p className="fs-13">
                                    ${car?.pricing?.prices?.weekly}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Monthly
                                  </h6>
                                  <p className="fs-13">
                                    ${car?.pricing?.prices?.monthly}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Yearly
                                  </h6>
                                  <p className="fs-13">
                                    ${car?.pricing?.prices?.yearly}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Base Kilometers
                                  </h6>
                                  <p className="fs-13">
                                    {car?.pricing?.baseKilometers}
                                  </p>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-md-4 col-sm-6">
                                <div className="mb-3">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    Extra Price Per KM
                                  </h6>
                                  <p className="fs-13">
                                    ${car?.pricing?.extraKilometerPrice}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Tarrif</h6>
                            </div>
                            <div className="d-flex flex-column gap-2">
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    1 to 5 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.prices?.daily}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">
                                        {car?.pricing?.baseKilometers}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.extraKilometerPrice}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    5 to 8 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Weekly Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.prices?.weekly}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">
                                        {car?.pricing?.baseKilometers}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.extraKilometerPrice}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    1 to 30 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Monthly Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.prices?.monthly}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">
                                        {car?.pricing?.baseKilometers}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.extraKilometerPrice}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    1 to 365 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      yearly Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.prices?.yearly}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">
                                        {car?.pricing?.baseKilometers}
                                      </span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">
                                        ${car?.pricing?.extraKilometerPrice}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Car Price */}
                        {/* Extra Services */}
                        <div className="tab-pane fade" id="car-service">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <h6>Extra Services</h6>
                          </div>
                          <div className="row gy-2">
                            {car?.extraService?.map((service, index) => (
                              <div key={index} className="col-lg-4 col-sm-6">
                                <div className="d-flex flex-column gap-2">
                                  <p className="d-flex align-items-center mb-0">
                                    <i className="ti ti-square-check-filled text-success me-2" />
                                    {service.name}{" "}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* /Extra Services */}
                        {/* Gallery */}
                        <div className="tab-pane fade" id="car-gallery">
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Gallery</h6>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-3">
                              <div className="gallery-wrap">
                                <a
                                  href={BASE_URL_IMG + car?.image}
                                  data-fancybox="gallery"
                                >
                                  <img
                                    src={BASE_URL_IMG + car?.image}
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                              <h6>Video</h6>
                            </div>
                            <div className="uploaded-video">
                              <div className="uploaded-video">
                                {car?.video?.length > 0 && (
                                  <video
                                    src={BASE_URL_IMG + car?.carVideo[0]}
                                    controls
                                    width="100%"
                                  />
                                )}
                                {car?.carVideo?.length > 0 && (
                                  <a
                                    href={BASE_URL_IMG + car?.carVideo[0]}
                                    data-fancybox
                                    className="play-icon"
                                  >
                                    <i className="ti ti-player-play-filled" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Gallery */}
                        {/* Damages */}
                        <div className="tab-pane fade" id="car-damages">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <h6>Damages</h6>
                          </div>
                          <div className="d-flex flex-column gap-2">
                            {car?.damages?.length > 0 ? (
                              car.damages.map((damage) => (
                                <div
                                  key={damage._id}
                                  className="bg-white p-20 br-5 border"
                                >
                                  <div className="row align-items-center row-gap-3">
                                    <div className="col-xxl-8 col-md-7">
                                      <div className="d-flex align-items-center gap-2 mb-1">
                                        <h6 className="fs-14 fw-medium">
                                          {damage?.type}
                                        </h6>
                                        <span
                                          className={`badge ${
                                            damage?.location === "Interior"
                                              ? "bg-pink-transparent"
                                              : "bg-secondary-transparent"
                                          } badge-sm`}
                                        >
                                          {damage?.location}
                                        </span>
                                      </div>
                                      <p className="fs-13">
                                        {damage?.description}
                                      </p>
                                    </div>
                                    <div className="col-xxl-4 col-md-5">
                                      <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap"></div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>No damages found for this car.</p>
                            )}
                          </div>
                        </div>
                        {/* /Damages */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Car Details */}
                {/* Rent Summary */}

                {/* /Rent Summary */}
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
          {/* Add New Tarrif */}
          <div
            className="offcanvas offcanvas-end offsetcanvas"
            data-bs-backdrop="false"
            tabIndex={-1}
            id="add-tarrif"
          >
            <div className="offcanvas-header border-bottom">
              <h5>Add New Tarrif</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form
              action="add-car"
              className="d-flex flex-column justify-content-between canvas-height"
            >
              <div className="offcanvas-body pb-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Tariff Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Daily Price <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        From Days <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        To Days <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">
                          Base Kilometers (Per Day){" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="unlimited1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="unlimited1"
                          >
                            Unlimited
                          </label>
                        </div>
                      </div>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Kilometers Extra Price{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button type="button" className="btn btn-light me-2">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create Tarrif
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* /Add New Tarrif */}
          {/* Edit Tarrif */}
          <div
            className="offcanvas offcanvas-end offsetcanvas"
            data-bs-backdrop="false"
            tabIndex={-1}
            id="edit-tarrif"
          >
            <div className="offcanvas-header border-bottom">
              <h5>Edit Tarrif</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form
              action="add-car"
              className="d-flex flex-column justify-content-between canvas-height"
            >
              <div className="offcanvas-body pb-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Tariff Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="4 to 5 days"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Daily Price <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={50}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        From Days <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={4}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        To Days <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={5}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">
                          Base Kilometers (Per Day){" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="unlimited2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="unlimited2"
                          >
                            Unlimited
                          </label>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Kilometers Extra Price{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button type="button" className="btn btn-light me-2">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* /Edit Tarrif */}
          {/* Delete Tarrif */}
          <div className="modal fade" id="delete_tarrif">
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                    <i className="ti ti-trash-x fs-26" />
                  </span>
                  <h4 className="mb-1">Delete Tarrif</h4>
                  <p className="mb-3">
                    Are you sure you want to delete Tarrif?
                  </p>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-light me-3" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <Link
                      to="/admin-dashboard/car-details"
                      className="btn btn-primary"
                    >
                      Yes, Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Damage */}
          {/* Add Brand */}
          <div className="modal fade" id="add_brand">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="mb-0">Create Brand</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <div className="modal-body pb-1">
                  <div className="mb-3">
                    <label className="form-label">
                      Brand Image <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        <i className="ti ti-photo-up text-gray-4 fs-24" />
                      </div>
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="fs-14">
                            Upload Image size 180*180, within 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Brand Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Total Cars <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-light me-3" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Create New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Brand */}

          {/* /Create Seasonal Pricing */}
          {/* Edit Seasonal Pricing */}
          <div className="modal fade" id="edit_seasonal_price">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <form action="add-car">
                  <div className="modal-body pb-1">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Season Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control input-tags"
                            data-role="tagsinput"
                            defaultValue="Winter"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Start Date <span className="text-danger">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                              defaultValue="28-01-2025"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            End Date <span className="text-danger">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                              defaultValue="02-02-2025"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Daily Rate <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            defaultValue={50}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Weekly Rate <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            defaultValue={100}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Monthly Rate <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            defaultValue={150}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Late Fees <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            defaultValue={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex justify-content-center">
                      <a className="btn btn-light me-3" data-bs-dismiss="modal">
                        Cancel
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Seasonal Pricing */}
          {/* Delete Pricing */}
          <div className="modal fade" id="delete_price">
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                    <i className="ti ti-trash-x fs-26" />
                  </span>
                  <h4 className="mb-1">Delete Pricing</h4>
                  <p className="mb-3">
                    Are you sure you want to delete Pricing?
                  </p>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-light me-3" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <Link
                      to="/admin-dashboard/car-details"
                      className="btn btn-primary"
                    >
                      Yes, Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Pricing */}
          {/* Edit Pricing */}
          <div className="modal fade" id="edit_price">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mb-0">Edit Pricing</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <form action="add-car">
                  <div className="modal-body pb-1">
                    <table className="table custom-table1">
                      <thead className="thead-white">
                        <tr>
                          <th className="py-0">Extra Features</th>
                          <th className="py-0">Pricing</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-medium text-gray-9">Navigation</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={90}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-gray-9">
                            Satellite Radio
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option selected>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={25}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-gray-9">
                            Roadside Assistance
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option selected>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={47}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-gray-9">
                            Express Check-in/out
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option selected>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={75}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-gray-9">
                            Child Safety Seats
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option selected>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={22}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-gray-9">
                            Roadside Assistance
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <select className="select">
                                <option>One Time</option>
                                <option selected>Per Day</option>
                              </select>
                              <div className="input-icon-start position-relative w-100 ms-2">
                                <span className="input-icon-addon">
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={48}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex justify-content-center">
                      <a className="btn btn-light me-3" data-bs-dismiss="modal">
                        Cancel
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Pricing */}
          {/* Add New Damage */}
          <div className="modal fade" id="add-damage">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mb-0">Add New Damage</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <form action="add-car">
                  <div className="modal-body pb-1">
                    <div className="mb-3">
                      <label className="form-label">
                        Damage Location <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option>Scratch</option>
                        <option>Dashboard Damage</option>
                        <option>Electrical Issues</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Damage Type <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option>Interior</option>
                        <option>Exterior</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex justify-content-center">
                      <a className="btn btn-light me-3" data-bs-dismiss="modal">
                        Cancel
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Create New
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add New Damage */}
          {/* Edit Damage */}
          <div className="modal fade" id="edit-damage">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mb-0">Edit Damage</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <form action="add-car">
                  <div className="modal-body pb-1">
                    <div className="mb-3">
                      <label className="form-label">
                        Damage Location <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option selected>Scratch</option>
                        <option>Dashboard Damage</option>
                        <option>Electrical Issues</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Damage Type <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option selected>Interior</option>
                        <option>Exterior</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={
                          "Cracks, scratches, or faded surfaces due to heat exposure."
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex justify-content-center">
                      <a className="btn btn-light me-3" data-bs-dismiss="modal">
                        Cancel
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Create New
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Damage */}
          {/* Delete Damage */}
          <div className="modal fade" id="delete_damage">
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                    <i className="ti ti-trash-x fs-26" />
                  </span>
                  <h4 className="mb-1">Delete Damage</h4>
                  <p className="mb-3">
                    Are you sure you want to delete Damage?
                  </p>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-light me-3" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <Link
                      to="/admin-dashboard/car-details"
                      className="btn btn-primary"
                    >
                      Yes, Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Damage */}
          {/* Create FAQ */}
          <div className="modal fade" id="add-faq">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mb-0">Create FAQ</h5>
                  <button
                    type="button"
                    className="btn-close custom-btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x fs-16" />
                  </button>
                </div>
                <form action="Add-Car">
                  <div className="modal-body pb-1">
                    <div className="mb-3">
                      <label className="form-label">
                        Question <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Answer <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex justify-content-center">
                      <a className="btn btn-light me-3" data-bs-dismiss="modal">
                        Cancel
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Create New
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Create FAQ */}
        </div>
      )}

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
  );
};

export default AdminCarDetails;
