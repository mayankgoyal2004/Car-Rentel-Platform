import React from 'react'
import { Link } from 'react-router-dom'

const AdminCarDetails = () => {
  return (
  <div>
  <div className="page-wrapper">
    <div className="content me-0">
      <div className="mb-3">
        <Link to="all-cars" className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-left me-1" />Cars</Link>
      </div>
      <div className="mb-4 pb-4 border-bottom">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>							
            <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
              <h4 className="me-2">Car ID : #RT5658</h4>
              <span className="badge badge-md badge-success-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Active
              </span>
              <span className="badge badge-md bg-secondary-transparent">Rent in Progress</span>
            </div>
            <p>Created / Updated at : 25 Jan 2025, 06:45 AM</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link to="/admin-dashboard/edit-car"  className="btn btn-dark btn-md d-flex align-items-center"><i className="ti ti-edit me-1" />Edit Car</Link>
          </div>
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
                    <img src="/admin-assets/img/car/car-01.jpg" alt="img" />
                  </span>
                  <div>
                    <h6>Acura Sport </h6>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-2">Sedan</p>
                      <p className="mb-0 d-flex align-items-center"><i className="ti ti-circle-filled text-secondary fs-5 me-2" />$60/day</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <span className="badge badge-md bg-info-transparent">VIN : ABC123456</span>
                  <span className="badge badge-md bg-orange-transparent">Plate Number : ABC 1234</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 mb-xl-0">
            <div className="card-header py-0">
              <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                <li className="nav-item">
                  <a className="nav-link active" href="#car-info" data-bs-toggle="tab">Car Info</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-price" data-bs-toggle="tab">Pricing &amp; Tarrif</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-service" data-bs-toggle="tab">Extra Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-gallery" data-bs-toggle="tab">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-damages" data-bs-toggle="tab">Damages</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                {/* Car Info */}
                <div className="tab-pane fade active show" id="car-info">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="row">
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Color</h6>
                          <p className="d-inline-flex align-items-center fs-13"><i className="ti ti-square-filled text-warning me-1" />Yellow</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Brand</h6>
                          <p className="fs-13">Ford</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Model</h6>
                          <p className="fs-13">Endeavour</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Type</h6>
                          <p className="fs-13">Sedan</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Year</h6>
                          <p className="fs-13">2001</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Passengers</h6>
                          <p className="fs-13">04</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">VIN Number</h6>
                          <p className="fs-13">ABC123456</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Plate Number</h6>
                          <p className="fs-13">ABC 1234</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Mileage</h6>
                          <p className="fs-13">45 km</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Transmission</h6>
                          <p className="fs-13">Auto</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">No of Seats</h6>
                          <p className="fs-13">04</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">No of Air Bags</h6>
                          <p className="fs-13">06</p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <Link to="/admin-dashboard/edit-Car"  className="link-violet text-decoration-underline fw-medium">Edit</Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Documents</h6>
                      <Link to="/admin-dashboard/edit-Car"  className="link-default"><i className="ti ti-edit" /></Link>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-4">
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium">Insurance_car3546</h6>
                          <p className="fs-13">24.45 KB</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium">Reg_car3546</h6>
                          <p className="fs-13">24.45 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>								
                  <div>
                    <h6 className="mb-3">Features &amp; Amenities</h6>
                    <div className="row gy-2">
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Push-button Start</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Panoramic Sunroof</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Parking Sensors</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Bluetooth</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Forward Collision Warning</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Adaptive Cruise Control</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Rearview Camera</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />USB</p>
                          <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Push Back Seat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Car Info */}
                {/* Car Price */}
                <div className="tab-pane fade" id="car-price">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Pricing</h6>
                      <a href="javascript:void(0);" className="link-default"><i className="ti ti-edit" /></a>
                    </div>
                    <div className="row">
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Per Day</h6>
                          <p className="fs-13">$200</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Weekly</h6>
                          <p className="fs-13">$400</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Monthly</h6>
                          <p className="fs-13">$400</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Yearly</h6>
                          <p className="fs-13">$6000</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Base Kilometers</h6>
                          <p className="fs-13">45</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Extra Price Per KM</h6>
                          <p className="fs-13">$21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Tarrif</h6>
                      <Link to="/admin-dashboard/edit-car" className="link-default"><i className="ti ti-edit" /></Link>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">4 to 5 Days</h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$50</span></p>
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">25</span></p>
                            <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$200</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">5 to 8 Days</h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$80</span></p>
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">15</span></p>
                            <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$150</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">3 to 8 Days</h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$56</span></p>
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">54</span></p>
                            <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$120</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">4 to 8 Days</h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$50</span></p>
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">25</span></p>
                            <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$200</span></p>
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
                    <Link to="/admin-dashboard/edit-car" className="link-default"><i className="ti ti-edit" /></Link>
                  </div>
                  <div className="row gy-2">
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Navigation</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Fuel Pre-Purchase</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />USB Charger</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Wi-Fi Hotspot</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Roadside Assistance</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Express Check-in/out</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Child Safety Seats</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Satellite Radio</p>
                        <p className="d-flex align-items-center mb-0"><i className="ti ti-square-check-filled text-success me-2" />Toll Pass</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Extra Services */}
                {/* Gallery */}
                <div className="tab-pane fade" id="car-gallery">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Gallery</h6>
                      <Link to="/admin-dashboard/edit-car" className="link-default"><i className="ti ti-edit" /></Link>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <div className="gallery-wrap">
                        <a href="/admin-assets/img/car/car-lg-02.jpg" data-fancybox="gallery">
                          <img src="/admin-assets/img/car/car-02.jpg" alt="img" />
                        </a>
                      </div>
                      <div className="gallery-wrap">
                        <a href="/admin-assets/img/car/car-lg-03.jpg" data-fancybox="gallery">
                          <img src="/admin-assets/img/car/car-07.jpg" alt="img" />
                        </a>
                      </div>
                      <div className="gallery-wrap">
                        <a href="/admin-assets/img/car/car-lg-04.jpg" data-fancybox="gallery">
                          <img src="/admin-assets/img/car/car-04.jpg" alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Video</h6>
                      <Link  to="/admin-dashboard/edit-car" className="link-default"><i className="ti ti-edit" /></Link>
                    </div>
                    <div className="uploaded-video">
                      <img src="/admin-assets/img/car/car-lg-01.jpg" alt="img" />
                      <a href="https://www.youtube.com/embed/1trvO6dqQUI" data-fancybox className="play-icon">
                        <i className="ti ti-player-play-filled" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* /Gallery */}
                {/* Damages */}
                <div className="tab-pane fade" id="car-damages">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6>Damages</h6>
                    <Link  to="/admin-dashboard/edit-car" className="link-default"><i className="ti ti-edit" /></Link>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">Scratch</h6>
                            <span className="badge bg-pink-transparent badge-sm">Interior</span>
                          </div>
                          <p className="fs-13">Minor surface marks, often from keys, branches, or road debris.</p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>															
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">Dashboard Damage</h6>
                            <span className="badge bg-secondary-transparent badge-sm">Exterior</span>
                          </div>
                          <p className="fs-13">Cracks, scratches, or faded surfaces due to heat exposure.</p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>															
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">Torn/Dirty Upholstery</h6>
                            <span className="badge bg-pink-transparent badge-sm">Interior</span>
                          </div>
                          <p className="fs-13">Seats, door panels, or carpets with stains, rips, or burns.</p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>															
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">Electrical Issues</h6>
                            <span className="badge bg-pink-transparent badge-sm">Interior</span>
                          </div>
                          <p className="fs-13">Non-functional windows, AC, or infotainment system damage.</p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>															
                    </div>
                  </div>
                </div>
                {/* /Damages */}
              </div>
            </div>
          </div>
        </div>
        {/* /Car Details */}
        {/* Rent Summary */}
        <div className="col-xl-4 theiaStickySidebar">
          <div className="card mb-0">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Summary</h5>
              </div>
              <div className="summary-wrap">
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">23</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Active</h6>
                    <p className="fs-13">Car status Changes as <span className="text-gray-9 fw-medium">Active for Booking</span></p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">22</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Damage</h6>
                    <p className="fs-13">Damage is added on the <span className="text-gray-9 fw-medium">Exterior</span></p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">21</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Maintainance</h6>
                    <p className="fs-13">Car status Changes as <span className="text-gray-9 fw-medium">Maintainance</span></p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">20</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Car Return</h6>
                    <p className="fs-13">Car has been <span className="text-gray-9 fw-medium">Returned</span> by Customer</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">19</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Booking</h6>
                    <p className="fs-13">Car is Booked By <span className="text-gray-9 fw-medium">James Anderson</span></p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">11</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">User</h6>
                    <p className="fs-13">User logged in &amp; <span className="text-gray-9 fw-medium">Details Updated</span></p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">09</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Car Added</h6>
                    <p className="fs-13">Car has been added by <span className="text-gray-9 fw-medium">Admin</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Rent Summary */}
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Add New Tarrif */}
  <div className="offcanvas offcanvas-end offsetcanvas" data-bs-backdrop="false" tabIndex={-1} id="add-tarrif">
    <div className="offcanvas-header border-bottom">
      <h5>Add New Tarrif</h5>
      <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="ti ti-x" />
      </button>
    </div>
    <form action="add-car" className="d-flex flex-column justify-content-between canvas-height">
      <div className="offcanvas-body pb-1">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Tariff Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Daily Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">From Days <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">To Days <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Base Kilometers (Per Day) <span className="text-danger">*</span></label>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="unlimited1" />
                  <label className="form-check-label" htmlFor="unlimited1">
                    Unlimited
                  </label>
                </div>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Kilometers Extra Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer">
        <div className="d-flex align-items-center justify-content-end">
          <button type="button" className="btn btn-light me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Create Tarrif</button>
        </div>
      </div>
    </form>
  </div>
  {/* /Add New Tarrif */}
  {/* Edit Tarrif */}
  <div className="offcanvas offcanvas-end offsetcanvas" data-bs-backdrop="false" tabIndex={-1} id="edit-tarrif">
    <div className="offcanvas-header border-bottom">
      <h5>Edit Tarrif</h5>
      <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="ti ti-x" />
      </button>
    </div>
    <form action="add-car" className="d-flex flex-column justify-content-between canvas-height">
      <div className="offcanvas-body pb-1">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Tariff Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="4 to 5 days" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Daily Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={50} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">From Days <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={4} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">To Days <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={5} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Base Kilometers (Per Day) <span className="text-danger">*</span></label>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="unlimited2" />
                  <label className="form-check-label" htmlFor="unlimited2">
                    Unlimited
                  </label>
                </div>
              </div>
              <input type="text" className="form-control" defaultValue={100} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Kilometers Extra Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer">
        <div className="d-flex align-items-center justify-content-end">
          <button type="button" className="btn btn-light me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Save Changes</button>
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
          <p className="mb-3">Are you sure you want to delete Tarrif?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link  to="/admin-dashboard/car-details" className="btn btn-primary">Yes, Delete</Link>
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
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Brand Image <span className="text-danger">*</span></label>
            <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                <i className="ti ti-photo-up text-gray-4 fs-24" />
              </div>                                              
              <div className="profile-upload">
                <div className="profile-uploader d-flex align-items-center">
                  <div className="drag-upload-btn btn btn-md btn-dark">
                    <i className="ti ti-photo-up fs-14" />
                    Upload
                    <input type="file" className="form-control image-sign" multiple />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>                     
          <div className="mb-3">
            <label className="form-label">Brand Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Total Cars <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" className="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Brand */}
  {/* Create Seasonal Pricing */}
  <div className="modal fade" id="add_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Create Seasonal Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-car">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Season Name <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control input-tags" data-role="tagsinput" defaultValue="Winter" />
                </div>   
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Start Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">End Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
            </div>  
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Create New</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Create Seasonal Pricing */}
  {/* Edit Seasonal Pricing */}
  <div className="modal fade" id="edit_seasonal_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-car">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Season Name <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control input-tags" data-role="tagsinput" defaultValue="Winter" />
                </div>   
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Start Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="28-01-2025" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">End Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="02-02-2025" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={50} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={100} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={150} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={200} />
                </div>
              </div>
            </div>  
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Save Changes</button>
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
          <p className="mb-3">Are you sure you want to delete Pricing?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/admin-dashboard/car-details" className="btn btn-primary">Yes, Delete</Link>
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
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
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
                        <input type="text" className="form-control" defaultValue={90} />
                      </div>
                    </div>	
                  </td>
                </tr>	
                <tr>
                  <td className="fw-medium text-gray-9">Satellite Radio</td>
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
                        <input type="text" className="form-control" defaultValue={25} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
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
                        <input type="text" className="form-control" defaultValue={47} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Express Check-in/out</td>
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
                        <input type="text" className="form-control" defaultValue={75} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Child Safety Seats</td>
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
                        <input type="text" className="form-control" defaultValue={22} />
                      </div>
                    </div>	
                  </td>
                </tr>		
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
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
                        <input type="text" className="form-control" defaultValue={48} />
                      </div>
                    </div>	
                  </td>
                </tr>								
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Save Changes</button>
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
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-car">
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">Damage Location <span className="text-danger">*</span></label>	
              <select className="select">
                <option>Select</option>
                <option>Scratch</option>
                <option>Dashboard Damage</option>
                <option>Electrical Issues</option>
              </select>
            </div>  
            <div className="mb-3">
              <label className="form-label">Damage Type <span className="text-danger">*</span></label>
              <select className="select">
                <option>Select</option>
                <option>Interior</option>
                <option>Exterior</option>
              </select>
            </div> 
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </div> 
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Create New</button>
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
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="add-car">
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">Damage Location <span className="text-danger">*</span></label>	
              <select className="select">
                <option>Select</option>
                <option selected>Scratch</option>
                <option>Dashboard Damage</option>
                <option>Electrical Issues</option>
              </select>
            </div>  
            <div className="mb-3">
              <label className="form-label">Damage Type <span className="text-danger">*</span></label>
              <select className="select">
                <option>Select</option>
                <option selected>Interior</option>
                <option>Exterior</option>
              </select>
            </div> 
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={3} defaultValue={"Cracks, scratches, or faded surfaces due to heat exposure."} />
            </div> 
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Create New</button>
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
          <p className="mb-3">Are you sure you want to delete Damage?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/admin-dashboard/car-details" className="btn btn-primary">Yes, Delete</Link>
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
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="Add-Car" 
>
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">Question <span className="text-danger">*</span></label>	
              <input type="text" className="form-control" />
            </div>  
            <div className="mb-3">
              <label className="form-label">Answer <span className="text-danger">*</span></label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </div> 
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Create New</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Create FAQ */}
</div>

  )
}

export default AdminCarDetails