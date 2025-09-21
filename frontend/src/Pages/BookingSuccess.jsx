import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiService from '../../Apiservice/apiService';

const BookingSuccess = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await apiService.getReservationByIdBooking(id);
        
        if (res.data.success && res.data.data) {
          const reservationData = res.data.data;
          setReservation(reservationData);
        } else {
          setError("Failed to fetch reservation details");
        }
      } catch (error) {
        console.error("Error fetching reservation:", error);
        setError("Error fetching reservation details");
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  if (loading) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading reservation details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="text-center py-5">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (!reservation) {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="text-center py-5">
            <div className="alert alert-warning" role="alert">
              Reservation not found
            </div>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="main-wrapper">
        {/* Breadscrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Booking Confirmed</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Booking Confirmed</li>
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
                <h5>Thank you! Your Order has been Received</h5>
                <h5 className="order-no">Order Number : <span>#{reservation.bookingId || id}</span></h5>
              </div>
              
              <div className="booking-header">
                <div className="booking-img-wrap">
                  <div className="book-img">
                    <img 
                      src={reservation.carImage || "/user-assets/img/cars/car-05.jpg"} 
                      alt={reservation.carModel || "Car"} 
                    />
                  </div>
                  <div className="book-info">
                    <h6>{reservation.carModel || "Chevrolet Camaro"}</h6>
                    <p><i className="feather-map-pin" /> Location : {reservation.pickupLocation || "Miami St, Destin, FL 32550, USA"}</p>
                  </div>
                </div>
                <div className="book-amount">
                  <p>Total Amount</p>
                  <h6>${reservation.totalAmount || "4700"}</h6>
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
                            <p>Rental Charges Rate <span>({reservation.rentalDays || "1"} day)</span></p>
                            <p className="text-danger">(This does not include fuel)</p>
                          </div>
                          <span> + ${reservation.baseRate || "60"}</span>
                        </li>
                        <li>
                          <p>Doorstep delivery</p>
                          <span> + ${reservation.deliveryFee || "60"}</span>
                        </li>
                        <li>
                          <p>Trip Protection Fees</p>
                          <span> + ${reservation.protectionFee || "25"}</span>
                        </li>
                        <li>
                          <p>Convenience Fees</p>
                          <span> + ${reservation.convenienceFee || "2"}</span>
                        </li>
                        <li>
                          <p>Tax</p>
                          <span> + ${reservation.tax || "2"}</span>
                        </li>
                        <li>
                          <p>Refundable Deposit</p>
                          <span> +${reservation.deposit || "1200"}</span>
                        </li>
                        <li>
                          <p>Full Premium Insurance</p>
                          <span>+${reservation.insurance || "200"}</span>
                        </li>
                        <li className="total">
                          <p>Subtotal</p>
                          <span>+${reservation.subtotal || "1604"}</span>
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
                          <p>{reservation.bookingType || "Delivery"}</p>
                        </li>
                        <li>
                          <h6>Rental Type</h6>
                          <p>{reservation.rentalType || "Daily"}</p>
                        </li>
                        <li>
                          <h6>Pickup</h6>
                          <p>{reservation.pickupLocation || "1230 E Springs Rd, Los Angeles, CA, USA"}</p>
                          <p>{reservation.pickupDate || "04/18/2024"} - {reservation.pickupTime || "14:00"}</p>
                        </li>
                        <li>
                          <h6>Return</h6>
                          <p>{reservation.returnLocation || "1230 E Springs Rd, Los Angeles, CA, USA"}</p>
                          <p>{reservation.returnDate || "04/18/2024"} - {reservation.returnTime || "14:00"}</p>
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
                        {reservation.extraServices && reservation.extraServices.map((service, index) => (
                          <li key={index}>
                            <p>{service.name}</p>
                            <span>${service.price}</span>
                          </li>
                        ))}
                        <li className="total">
                          <p>Extra Services Charges Rate</p>
                          <span>${reservation.extraServicesTotal || "100"}</span>
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
                          <p>{reservation.driverType || "Acting Driver"}</p>
                        </li>
                      </ul>
                      {reservation.driver && (
                        <div className="driver-info">
                          <span>
                            <img src={reservation.driver.image || "/user-assets/img/user.jpg"} alt="Driver" />
                          </span>
                          <div className="driver-name">
                            <h6>{reservation.driver.name || "Ruban"}</h6>
                            <ul>
                              <li>No of Rides Completed : {reservation.driver.ridesCompleted || "32"}</li>
                              <li>Price : ${reservation.driver.price || "100"}</li>
                            </ul>
                          </div>
                        </div>
                      )}
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
                        <li>{reservation.billingInfo?.name || "Darren Jurel"}</li>
                        <li>{reservation.billingInfo?.company || "Mak Infotech"}</li>
                        <li>{reservation.billingInfo?.address || "1230 E Springs Rd, Los Angeles, CA, USA"}</li>
                        <li>{reservation.billingInfo?.phone || "+1 124554 45445"}</li>
                        <li>{reservation.billingInfo?.email || "example@email.com"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Billing Information */}
                
                {/* Payment Details */}
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="book-card flex-fill">
                    <div className="book-head">
                      <h6>Payment Details</h6>
                    </div>
                    <div className="book-body">
                      <ul className="location-lists">
                        <li>
                          <h6>Payment Mode</h6>
                          <p>{reservation.paymentMethod || "Debit Card"}</p>
                        </li>
                        <li>
                          <h6>Transaction ID</h6>
                          <p><span>#{reservation.transactionId || "13245454455454"}</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Payment Details */}
                
                {/* Additional Information */}
                <div className="col-lg-12">
                  <div className="book-card mb-0">
                    <div className="book-head">
                      <h6>Additional Information</h6>
                    </div>
                    <div className="book-body">
                      <ul className="location-lists">
                        <li>
                          <p>{reservation.additionalInfo || "Rental companies typically require customers to return the vehicle with a full tank of fuel. If the vehicle is returned with less than a full tank, customers may be charged for refueling the vehicle at a premium rate, often higher than local fuel prices."}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Additional Information */}
              </div>
            </div>
            
            <div className="print-btn text-center">
              <button className="btn btn-secondary" onClick={() => window.print()}>Print Order</button>
            </div>
          </div>
        </div>
        {/* /Booking Success */}
      </div>
    </div>
  );
};

export default BookingSuccess;