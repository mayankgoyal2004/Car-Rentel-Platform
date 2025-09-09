import React from 'react'
import { Link } from 'react-router-dom'

const Testiminorial = () => {
  return (
   
  <section className="testimonial-section">
    <div className="container">	
      <div className="section-heading heading-four" >
        <h2>Our Clients Feedback</h2>
        <p>Provided by customers about&nbsp;their&nbsp;experience with a product or service.</p>
      </div>
      <div className="row row-gap-4 justify-content-center">
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <img src="/user-assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="img" />
            </div>
            <p>Renting a car from Dreams rent made my vacation so much smoother! The process was quick</p>							
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Kyle Roberts DVM</h6>
              <p>Newyork, USA</p>												
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <img src="/user-assets/img/profiles/avatar-18.jpg" className="img-fluid" alt="img" />
            </div>
            <p>Their wide selection of vehicles, convenient locations, and competitive prices</p>							
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Hardley Vanessa</h6>
              <p>Newyork, USA</p>												
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <img src="/user-assets/img/profiles/avatar-15.jpg" className="img-fluid" alt="img" />
            </div>
            <p>The spacious SUV we rented comfortably fit our family and all our luggage</p>							
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Wilson</h6>
              <p>Nevada, USA</p>												
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
      </div>
      <div className="view-all-btn text-center aos">
        <Link to="/testimonials" className="btn btn-secondary">View All<i className="bx bx-right-arrow-alt ms-1" /></Link>
      </div>
      <div className="client-slider owl-carousel">
        <div>
          <img src="/user-assets/img/clients/client-01.svg" alt="img" />
        </div>
        <div>
          <img src="/user-assets/img/clients/client-02.svg" alt="img" />
        </div>
        <div>
          <img src="/user-assets/img/clients/client-03.svg" alt="img" />
        </div>
        <div>
          <img src="/user-assets/img/clients/client-04.svg" alt="img" />
        </div>
        <div>
          <img src="/user-assets/img/clients/client-05.svg" alt="img" />
        </div>
        <div>
          <img src="/user-assets/img/clients/client-06.svg" alt="img" />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Testiminorial