import React from 'react'
import { Link } from 'react-router-dom'

const BookingPayment = () => {
  return (
  <div>
  
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar mt-5">
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
                  <span><img src="/user-assets/img/icons/payment-method-01.svg" alt="Booking Icon" /></span>
                  <h6>Location &amp; Time</h6>
                </li>
                <li className="active activated">
                  <span><img src="/user-assets/img/icons/payment-method-01.svg" alt="Booking Icon" /></span>
                  <h6>Extra Services</h6>
                </li>
                <li className="active activated">
                  <span><img src="/user-assets/img/icons/booking-head-icon-03.svg" alt="Booking Icon" /></span>
                  <h6>Detail</h6>
                </li>
                <li className="active">
                  <span><img src="/user-assets/img/icons/booking-head-icon-04.svg" alt="Booking Icon" /></span>
                  <h6>Checkout</h6>
                </li>
                <li>
                  <span><img src="/user-assets/img/icons/booking-head-icon-05.svg" alt="Booking Icon" /></span>
                  <h6>Booking Confirmed</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="booking-detail-info">
        <div className="row">
          <div className="col-lg-12">
            <div className="booking-information-main">
              <form action="/booking-success">
                <div className="booking-information-card payment-info-card">
                  <div className="booking-info-head">
                    <div className="d-flex align-items-center">
                      <span><i className="bx bx-money" /></span>
                      <h5>Payment</h5>
                    </div>										
                  </div>
                  <div className="booking-info-body">
                    <div className="payment-method-types">
                      <h5>Choose your Payment Method</h5>
                      <ul>
                        <li>
                          <label className="payment_custom_check">
                            <input type="radio" name="payment_type" defaultChecked />
                            <span className="payment_checkmark">
                              <span className="checked-title"><img src="/user-assets/img/icons/payment-method-01.svg" alt="Img" /></span>
                            </span>							
                          </label>
                        </li>
                        <li>
                          <label className="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span className="payment_checkmark">
                              <span className="checked-title"><img src="/user-assets/img/icons/payment-method-02.svg" alt="Img" /></span>
                            </span>							
                          </label>
                        </li>
                        <li>
                          <label className="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span className="payment_checkmark">
                              <span className="checked-title"><img src="/user-assets/img/icons/payment-method-03.svg" alt="Img" /></span>
                            </span>							
                          </label>
                        </li>
                        <li>
                          <label className="payment_custom_check">
                            <input type="radio" name="payment_type" />
                            <span className="payment_checkmark">
                              <span className="checked-title"><img src="/user-assets/img/icons/payment-method-04.svg" alt="Img" /></span>
                            </span>							
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-method-types payments-cards-types">
                      <div className="row">
                        <div className="col-lg-7">
                          <ul>
                            <li>
                              <label className="payment_custom_check">
                                <input type="radio" name="payment_card" id="debit_card" defaultChecked />
                                <span className="payment_checkmark">
                                  <span className="checked-title"><img src="/user-assets/img/icons/payment-card-01.svg" alt="Img" /></span>
                                  <small>Debit card <span>523************14</span></small>
                                </span>							
                              </label>
                            </li>
                            <li>
                              <label className="payment_custom_check">
                                <input type="radio" name="payment_card" id="credit_card" />
                                <span className="payment_checkmark">
                                  <span className="checked-title"><img src="/user-assets/img/icons/payment-card-02.svg" alt="Img" /></span>
                                  <small>Credit card <span>654************12</span></small>
                                </span>							
                              </label>
                            </li>
                            <li>
                              <label className="payment_custom_check">
                                <input type="radio" name="payment_card" id="add_new_card" />
                                <span className="payment_checkmark">
                                  <span className="checked-title">Add New Card</span>
                                </span>							
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-new-cards" id="card-hide">
                        <h5 className="title-head">Add new Card</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">	
                              <label className="form-label">Card Number <span className="text-danger"> *</span></label>											
                              <input type="text" className="form-control" placeholder="Enter Card Number" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">	
                              <label className="form-label">Name on Card <span className="text-danger"> *</span></label>											
                              <input type="text" className="form-control" placeholder="Enter name on card" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">	
                              <label className="form-label">CVV <span className="text-danger"> *</span></label>											
                              <div className="group-img">
                                <input type="text" className="form-control" placeholder="Enter CVV Number" />
                                <span className="input-cal-icon"><i className="bx bx-lock" /></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block date-widget">	
                              <label className="form-label">Expiry Date <span className="text-danger"> *</span></label>											
                              <div className="group-img">
                                <input type="text" className="form-control datetimepicker" placeholder="Choose Date" />
                                <span className="input-cal-icon"><i className="bx bx-calendar" /></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0"><span>Save this account for future transaction</span>
                                <input type="checkbox" name="remeber" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>										
                  </div>
                </div>
                <div className="booking-info-btns d-flex justify-content-end">
                  <Link to="/BookingDetails" className="btn btn-secondary">Back to billing info</Link>
                  <button className="btn btn-primary continue-book-btn" type="submit">Pay $4700 &amp; Place Reservation</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
</div>

  )
}

export default BookingPayment