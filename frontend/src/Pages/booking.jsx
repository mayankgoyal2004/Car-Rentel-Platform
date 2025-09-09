import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <div className="main-wrapper">
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">Order Confirmation</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Order Confirmation</li>
            </ol>
          </nav>							
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}
  <section className="order-confirmation">
    <div className="container">
      <div className="confirm-order">
        <div className="section-title">
          <h3>Order Confirmation</h3>
          <h5>Order Total : <span>$315.00</span></h5>
        </div>
        <div className="booking-details order-confirm-box">
          <div className="row">
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Car Details</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <div className="order-car">
                <span><img src="user-assets/img/detail-smallcar-img-2.jpg" alt="car" /></span>
                <h5>Chevrolet Camaro<span>$315</span></h5>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Extra Service</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <ul className="address-info">
                <li>Baby Seat : $10</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Payment details</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <div className="visa-card">
                <a href="#"><img src="user-assets/img/visa.svg" alt="Visa" /></a>
                <h6>Visa card ending in 1245</h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Pickup Location &amp; Date</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <ul className="address-info">
                <li>45, 4th Avanue  Mark Street USA</li>
                <li>11 Jan 2023 - 11:00 PM</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Your Information</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <ul className="address-info">
                <li>Casandra</li>
                <li><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2e4d4f5d4f404a5c4f6e4b564f435e424b004d4143">[email&nbsp;protected]</a></li>
                <li>+1 73940 45355</li>
                <li>45, 4th Avanue  Mark Street USA</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="confirmation-title">
                <h4>Drop Off Location</h4>
                <a href="javascript:void(0)">Edit</a>
              </div>
              <ul className="address-info mb-0">
                <li>45, 4th Avanue  Mark Street USA</li>
                <li>11 Jan 2023 - 11:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="place-order-btn">
          <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pages_edit"><i className="feather-bar-chart me-2" />Place Order</a>
        </div>
      </div>
    </div>
  </section>
  {/* Modal */}
  <div className="modal custom-modal fade check-availability-modal payment-success-modal" id="pages_edit" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-body">
          <div className="payment-success">
            <span className="check"><i className="fa-solid fa-check-double" /></span>
            <h5>Order Confirmed</h5>
            <p>You Payment has been successfully done.
              Trasaction id :<span> #5064164454</span>
            </p>
          </div>						
        </div>
      </div>
    </div>
  </div>
  {/* /Modal */}
</div>

  )
}

export default Booking