import React from 'react'
import { Link } from 'react-router-dom'

const BookingSuccess = () => {
  return (
    	<div>
  <div className="main-wrapper">
   
    {/* Breadscrumb Section */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">Checkout</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>							
          </div>
        </div>
      </div>
    </div>
    {/* /Breadscrumb Section */}
    {/* Booking Success */}
    <div className="booking-new-module">
      <div className="container">
        <div className="booking-wizard-head">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-3">
              <div className="booking-head-title">
                <h4>Reserve Your Car</h4>
                <p>Complete the following steps</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9">
              <div className="booking-wizard-lists">
                <ul>
                  <li className="active activated">
                    <span><img src="/user-assets/img/icons/booking-head-icon-01-1.svg" alt="Booking Icon" /></span>
                    <h6>Location &amp; Time</h6>
                  </li>
                  <li className="active activated">
                    <span><img src="/user-assets/img/icons/booking-head-icon-02-1.svg" alt="Booking Icon" /></span>
                    <h6>Add-Ons</h6>
                  </li>
                  <li className="active activated">
                    <span><img src="/user-assets/img/icons/booking-head-icon-03-1.svg" alt="Booking Icon" /></span>
                    <h6>Detail</h6>
                  </li>
                  <li className="active activated">
                    <span><img src="/user-assets/img/icons/booking-head-icon-04-1.svg" alt="Booking Icon" /></span>
                    <h6>Checkout</h6>
                  </li>
                  <li className="active">
                    <span><img src="/user-assets/img/icons/booking-head-icon-05-1.svg" alt="Booking Icon" /></span>
                    <h6>Booking Confirmed</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-card">
          <div className="success-book">
            <span className="success-icon">
              <i className="fa-solid fa-check-double" />
            </span>
            <h5>Thank you! Your Order has been Recieved</h5>
            <h5 className="order-no">Order Number : <span>#123456</span></h5>
          </div>
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
            <div className="book-amount">
              <p>Total Amount</p>
              <h6>$4700</h6>
            </div>
          </div>
          <div className="row">
            {/* Car Pricing */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Car Pricing</h6>
                </div>
                <div className="book-body">
                  <ul className="pricing-lists">
                    <li>
                      <div>
                        <p>Rental Charges Rate <span>(1 day )</span></p>
                        <p className="text-danger">(This does not include fuel)</p>
                      </div>
                      <span> + $60</span>
                    </li>
                    <li>
                      <p>Doorstep delivery</p>
                      <span> + $60</span>
                    </li>
                    <li>
                      <p>Trip Protection Fees</p>
                      <span> + $25</span>
                    </li>
                    <li>
                      <p>Convenience Fees</p>
                      <span> + $2</span>
                    </li>
                    <li>
                      <p>Tax</p>
                      <span> + $2</span>
                    </li>
                    <li>
                      <p>Refundable Deposit</p>
                      <span> +$1200</span>
                    </li>
                    <li>
                      <p>Full Premium Insurance</p>
                      <span>+$200</span>
                    </li>
                    <li className="total">
                      <p>Subtotal</p>
                      <span>+$1604</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Car Pricing */}
            {/* Location & Time */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Location &amp; Time</h6>
                </div>
                <div className="book-body">
                  <ul className="location-lists">
                    <li>
                      <h6>Booking Type</h6>
                      <p>Delivery</p>
                    </li>
                    <li>
                      <h6>Rental Type</h6>
                      <p>Daily</p>
                    </li>
                    <li>
                      <h6>Pickup</h6>
                      <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
                      <p>04/18/2024 - 14:00</p>
                    </li>
                    <li>
                      <h6>Return</h6>
                      <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
                      <p>04/18/2024 - 14:00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Location & Time */}
            {/* Add-ons Pricing */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Extra Services Pricing</h6>
                </div>
                <div className="book-body">
                  <ul className="pricing-lists">
                    <li>
                      <p>GPS Navigation Systems</p>
                      <span>  $25</span>
                    </li>
                    <li>
                      <p>Wi-Fi Hotspot</p>
                      <span> $25</span>
                    </li>
                    <li>
                      <p>Child Safety Seats</p>
                      <span>$50</span>
                    </li>
                    <li className="total">
                      <p>Extra Services Charges Rate</p>
                      <span>$100</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Add-ons Pricing */}
            {/* Driver Details */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Driver Details</h6>
                </div>
                <div className="book-body">
                  <ul className="location-lists">
                    <li>
                      <h6>Driver Type</h6>
                      <p>Acting Driver</p>
                    </li>
                  </ul>
                  <div className="driver-info">
                    <span>
                      <img src="/user-assets/img/user.jpg" alt="img" />
                    </span>
                    <div className="driver-name">
                      <h6>Ruban</h6>
                      <ul>
                        <li>No of Rides Completed : 32</li>
                        <li>Price : $100</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Driver Details */}
            {/* Billing Information */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Billing Information</h6>
                </div>
                <div className="book-body">
                  <ul className="billing-lists">
                    <li>Darren Jurel</li>
                    <li>Mak Infotech</li>
                    <li>1230 E Springs Rd, Los Angeles, CA, USA</li>
                    <li>+1 124554 45445</li>
                    <li><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ffbf5dffae7fef2eff3fab1fcf0f2">[email&nbsp;protected]</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Billing Information */}
            {/* Payment  Details */}
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="book-card flex-fill">
                <div className="book-head">
                  <h6>Payment  Details</h6>
                </div>
                <div className="book-body">
                  <ul className="location-lists">
                    <li>
                      <h6>Payment Mode</h6>
                      <p>Debit Card</p>
                    </li>
                    <li>
                      <h6>Transaction ID</h6>
                      <p><span>#13245454455454</span></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Payment  Details */}
            {/* Additional Information */}
            <div className="col-lg-12">
              <div className="book-card mb-0">
                <div className="book-head">
                  <h6>Additional Information</h6>
                </div>
                <div className="book-body">
                  <ul className="location-lists">
                    <li>
                      <p>Rental companies typically require customers to return the vehicle with a full tank of fuel. If the vehicle is returned with less than a full tank, customers may be charged for refueling the vehicle at a premium rate, often higher than local fuel prices.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Additional Information */}
          </div>
        </div>
        <div className="print-btn text-center">
          <a href="javascript:void(0);" className="btn btn-secondary">Print Order</a>
        </div>
      </div>
    </div>
    {/* /Booking Success */}
  
  </div>

</div>

  )
}

export default BookingSuccess