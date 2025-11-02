import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiService, { BASE_URL_IMG } from '../../Apiservice/apiService';
import { CheckSquare } from 'react-feather';

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

    const getRentalPeriod = () => {
    if (!reservation?.pickupDate || !reservation?.dropDate) return 0;

    const start = new Date(reservation.pickupDate);
    const end = new Date(reservation.dropDate);

    // Calculate difference in milliseconds
    const diffTime = end - start;

    // Convert to days (round up to include partial days)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTotalPrice = () => {
    if (!reservation?.car?.pricing) return 0;

    const rentalDays = getRentalPeriod();
    const prices = reservation.car.pricing.prices;

    let carPrice = 0;

    switch (reservation.bookingType) {
      case "daily": {
        carPrice = prices.daily * rentalDays;
        break;
      }
      case "weekly": {
        const weeks = Math.ceil(rentalDays / 7);
        carPrice = prices.weekly * weeks;
        break;
      }
      case "monthly": {
        const months = Math.ceil(rentalDays / 30);
        carPrice = prices.monthly * months;
        break;
      }
      case "yearly": {
        const years = Math.ceil(rentalDays / 365);
        carPrice = prices.yearly * years;
        break;
      }
      default: {
        carPrice = 0;
      }
    }

    // Add extra charges
    const extraServices = reservation.extraServices || [];
    const extraServicesPrice = extraServices.reduce(
      (total, service) => total + service.price * (service.quantity || 1),
      0
    );
    const securityDeposit = reservation.securityDeposit || 0;
    const driverPrice = reservation.driverPrice || 0;

    const total = carPrice + extraServicesPrice + securityDeposit + driverPrice;
    return total;
  };

  const getTotalCarPricing = () => {
    if (!reservation?.car?.pricing) return 0;

    const rentalDays = getRentalPeriod();
    const prices = reservation.car.pricing.prices;

    let carPrice = 0;

    switch (reservation.bookingType) {
      case "daily": {
        carPrice = prices.daily * rentalDays;
        break;
      }
      case "weekly": {
        const weeks = Math.ceil(rentalDays / 7);
        carPrice = prices.weekly * weeks;
        break;
      }
      case "monthly": {
        const months = Math.ceil(rentalDays / 30);
        carPrice = prices.monthly * months;
        break;
      }
      case "yearly": {
        const years = Math.ceil(rentalDays / 365);
        carPrice = prices.yearly * years;
        break;
      }
      default: {
        carPrice = 0;
      }
    }

    const total = carPrice;
    return total;
  };

  const getCarPrice = () => {
    if (!reservation?.car?.pricing) return 0;
    const prices = reservation.car.pricing.prices;

    switch (reservation.bookingType) {
      case "daily":
        return prices.daily;
      case "weekly":
        return prices.weekly;
      case "monthly":
        return prices.monthly;
      case "yearly":
        return prices.yearly;
      default:
        return 0;
    }
  };

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
<CheckSquare size={18} />
                </span>
                <h5>Thank you! Your Order has been Received</h5>
                <h5 className="order-no">Order Number : <span>{reservation.bookingId }</span></h5>
              </div>
              
              <div className="booking-header">
                <div className="booking-img-wrap">
                  <div className="book-img">
                    <img 
                      src={ BASE_URL_IMG+ reservation.car.image } 
                      alt={ "Car"} 
                    />
                  </div>
                  <div className="book-info">
                    <h6>{reservation.carName }</h6>
                    <p><i className="feather-map-pin" /> Location : {reservation.pickupAddress }</p>
                  </div>
                </div>
                <div className="book-amount">
                  <p>Total Amount</p>
                  <h6>${getTotalPrice()}</h6>
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
                            <p>Rental Charges Rate <span>({getRentalPeriod()}/ day)</span></p>
                            <p className="text-danger">(This does not include fuel)</p>
                          </div>
                          <span> + ${getCarPrice()}</span>
                        </li>
                        <li>
                          <p>Doorstep delivery</p>
                          <span> + ${reservation.deliveryFee || "0"}</span>
                        </li>
                        <li>
                          <p>Trip Protection Fees</p>
                          <span> + ${reservation.protectionFee || "0"}</span>
                        </li>
                        <li>
                          <p>Convenience Fees</p>
                          <span> + ${reservation.convenienceFee || "0"}</span>
                        </li>
                        <li>
                          <p>Tax</p>
                          <span> + ${reservation.tax || "0"}</span>
                        </li>
                        <li>
                          <p>Refundable Deposit</p>
                          <span> +${reservation.deposit || "0"}</span>
                        </li>
                        <li>
                          <p>Full Premium Insurance</p>
                          <span>+${reservation.insurance || "0"}</span>
                        </li>
                        <li className="total">
                          <p>Subtotal</p>
                          <span>+${getTotalCarPricing()}</span>
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
                          <p>{reservation.bookingType}</p>
                        </li>
                        <li>
                          <h6>Rental Type</h6>
                          <p>{reservation.rentalType }</p>
                        </li>
                        <li>
                          <h6>Pickup</h6>
                          <p>{reservation.pickupAddress }</p>
                          <p>{new Date(reservation.pickupDate).toDateString()} - {reservation.pickupTime }</p>
                        </li>
                        <li>
                          <h6>Return</h6>
                          <p>{reservation.dropAddress }</p>
                          <p>{new Date(reservation.dropDate ).toDateString()} - {reservation.dropTime}</p>
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
                          <span>$  {reservation?.extraServices?.reduce(
                              (total, service) =>
                                total + service.price * (service.quantity || 1),
                              0
                            )}</span>
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
                          <p>{reservation.driverType }</p>
                        </li>
                      </ul>
                      {/* {reservation.driver && (
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
                      )} */}
                    </div>
                  </div>
                </div>
                {/* /Driver Details */}
                
                {/* Billing Information */}
                {/* <div className="col-lg-6 col-md-6 d-flex">
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
                </div> */}
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
                          <p>{ "Rental companies typically require customers to return the vehicle with a full tank of fuel. If the vehicle is returned with less than a full tank, customers may be charged for refueling the vehicle at a premium rate, often higher than local fuel prices."}</p>
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