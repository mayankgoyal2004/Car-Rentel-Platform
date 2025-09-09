import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
   <div className="main-wrapper">
  {/* Breadscrumb */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">Pricing Plan </h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Pricing Plan</li>
            </ol>
          </nav>							
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb */}		     	
  {/* Pricing Plan */}
  <section className="section pricing-section pricing-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={200}>
          <div className="price-card">
            <div className="price-head">
              <div className="price-level">
                <h6>Essential</h6>
                <p>For the basics</p>
              </div>
              <h4>$49</h4>	
              <span>Per user per month</span>							
            </div>	
            <div className="price-details">
              <ul>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Get Starting message</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Min 1 month, extend anytime</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Rental car prices include tax</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Extend or return anytime</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Doorstep delivery in 2days</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Car system included free of charge.</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Min 1 month, extend anytime</li>
              </ul>
              <div>
                <Link to="/login" className="btn viewdetails-btn">Request a demo</Link>
              </div>							
            </div>							
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={300}>
          <div className="price-card price-card-popular">
            <div className="price-head">
              <div className="price-level price-level-popular">
                <h6>Recommended</h6>
                <p>For the Users</p>
              </div>
              <h4>$95</h4>	
              <span>Per user per month</span>							
            </div>		
            <div className="price-details">
              <ul>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Get Starting message</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Min 1 month, extend anytime</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Rental car prices include tax</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Extend or return anytime</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Doorstep delivery in 2days</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Car system included free of charge.</li>
                <li className="price-uncheck"><span><i className="fa-regular fa-circle-xmark" /></span>Min 1 month, extend anytime</li>
              </ul>
              <div>
                <Link to='/login'  className="btn viewdetails-btn-popular">Request a demo</Link>
              </div>							
            </div>							
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={400}>
          <div className="price-card">
            <div className="price-head">
              <div className="price-level">
                <h6>Pro</h6>
                <p>For the Pro</p>
              </div>
              <h4>$154</h4>	
              <span>Per user per month</span>							
            </div>	
            <div className="price-details">
              <ul>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Get Starting message</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Min 1 month, extend anytime</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Rental car prices include tax</li>										
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Extend or return anytime</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Doorstep delivery in 2days</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Car system included free of charge.</li>
                <li className="price-check"><span><i className="fa-regular fa-circle-check" /></span>Min 1 month, extend anytime</li>
              </ul>
              <div>
                <Link to="/login"  className="btn viewdetails-btn">Request a demo</Link>
              </div>							
            </div>							
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Pricing Plan */}
</div>

  )
}

export default Pricing