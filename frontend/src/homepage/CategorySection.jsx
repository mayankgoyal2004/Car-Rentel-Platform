import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Category = () => {
   useEffect(() => {
      AOS.init();
    }, []);
    
  return (
 
<section className="category-section-four">
  <div className="container">	
    <div className="row">	
      <div className="col-md-12">	
        {/* Heading title*/}
        <div className="section-heading heading-four" data-aos="fade-down">
          <h2>Featured Categories</h2>
          <p>Know what you’re looking for? Browse our extensive selection of cars</p>
        </div>
        {/* /Heading title */}
        <div className="row row-gap-4">
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing" >Sports Coupe</Link></h6>
                  <p>14 Cars</p>
                </div>
                <Link to="/listing" className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-01.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing">Sedan</Link></h6>
                  <p>12 Cars</p>
                </div>
                <Link to="/listing"className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-02.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing">Sports Car</Link></h6>
                  <p>35 Cars</p>
                </div>
                <Link to="/listing" className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-03.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing">Pickup</Link></h6>
                  <p>35 Cars</p>
                </div>
                <Link to="/listing" className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-04.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing">Family MPV</Link></h6>
                  <p>35 Cars</p>
                </div>
                <Link to="/listing" className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-05.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
          {/* Category Item */}
          <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
            <div className="category-item flex-fill">
              <div className="category-info d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="title"><Link to="/listing">Crossover</Link></h6>
                  <p>30 Cars</p>
                </div>
                <Link to="/listing" className="link-icon"><i className="bx bx-right-arrow-alt" /></Link>
              </div>
              <div className="category-img">
                <img src="/user-assets/img/category/category-06.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* /Category Item */}
        </div>
        <div className="view-all-btn text-center aos" data-aos="fade-down">
          <Link to="/listing" className="btn btn-secondary">View All<i className="bx bx-right-arrow-alt ms-1" /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

 
  )
}

export default Category