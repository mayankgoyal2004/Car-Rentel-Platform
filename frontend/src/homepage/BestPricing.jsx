import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "react-feather";
const BestPricing = () => {
  useEffect(() => {
          AOS.init();
        }, []);
  return (
   <section className="pricing-section pricing-page pricing-section-bottom">
  <div className="container">
    {/* Heading title*/}
    <div className="section-heading" data-aos="fade-down">
      <h2 className="demoFunction">Transparent Pricing For you</h2>
      <p>Choose a package that suits you</p>
    </div>
    {/* /Heading title */}
    {/* Plan Selected */}
    <div className="plan-selected" data-aos="fade-down">
      <h4>Monthly</h4>
      <div className="status-toggle me-2 ms-2">
        <input id="list-rating_1" className="px-4 check" type="checkbox" defaultChecked />
        <label htmlFor="list-rating_1" className="px-4 checktoggle checkbox-bg">checkbox</label>
      </div>
      <h4>Annually</h4>
    </div>
    {/* /Plan Selected */}
    <div className="row">
      <div className="col-lg-3 d-flex col-md-6 col-12" data-aos="fade-down">
        <div className="price-card price-selected flex-fill">
          <div className="price-head">
            <h2>Save more with Good Plans</h2>	
            <p>Choose a plan and get onboard in Minutes, then get $100 with next payment</p>
            {/* <a href="javascript:void(0);"><CheckCircle className="ms-2" />		 */}
          </div>	
          <div className="price-body">
            <img className="img-fluid" src="/user-assets/img/price-plan.png" alt="Price Plan" />		
          </div>							
        </div>
      </div>
      <div className="col-lg-3 d-flex col-md-6 col-12" data-aos="fade-down">
        <div className="price-card flex-fill">
          <div className="price-head">
            <div className="price-level">
              <h6>Basic Rental </h6>
              <p>For the basics</p>
            </div>
            <h4>$49</h4>	
            <span>Per user per month</span>							
          </div>	
          <div className="price-details">
            <ul>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>50% Downpayment</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Insurance not Included</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Doorstep delivery</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>Safe &amp; Sanitized</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>No Long term Commitment</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>Refundable deposit has to pay</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>No Flexible timing &amp; extension</li>
            </ul>
            <Link to="/"  className="btn viewdetails-btn">Buy Package</Link>							
          </div>							
        </div>
      </div>
      <div className="col-lg-3 d-flex col-md-6 col-12" data-aos="fade-down">
        <div className="price-card flex-fill active">
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
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>50% Downpayment</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Insurance not Included</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Doorstep delivery</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Safe &amp; Sanitized</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Long term Commitment 1 month</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>Refundable deposit has to pay</li>
              <li className="price-uncheck"><span><CheckCircle className="ms-2" /></span>No Flexible timing &amp; extension</li>
            </ul>
            <Link to="/"  className="btn viewdetails-btn btn-popular">Buy Package</Link>							
          </div>							
        </div>
      </div>
      <div className="col-lg-3 d-flex col-md-6 col-12" data-aos="fade-down">
        <div className="price-card flex-fill">
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
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>50% Downpayment</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Insurance not Included</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Doorstep delivery</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Safe &amp; Sanitized</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>Long term Commitment 1 month</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>No Refundable deposit</li>
              <li className="price-check"><span><CheckCircle className="ms-2" /></span>No Flexible timing &amp; extension</li>
            </ul>
            <Link to="/" className="btn viewdetails-btn">Buy Package</Link>						
          </div>							
        </div>
      </div>
    </div>
    
  </div>
</section>

  )
}

export default BestPricing