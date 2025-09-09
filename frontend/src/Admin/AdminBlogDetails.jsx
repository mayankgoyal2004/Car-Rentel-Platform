import React from 'react'
import { Link } from 'react-router-dom'

const AdminBlogDetails = () => {
  return (

<div className="page-wrapper">
  <div className="content me-0 me-md-0 me-lg-4">
    {/* Blogs Details */}
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="blog-details">
          <div>
            <Link to="/admin-dashboard/all-blogs"  className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-narrow-left me-1" />Back to Blogs</Link>
          </div>
          <h3>What You Need to Know About Rental Car Insurance</h3>
          <div className="blog-details-1">
            <img src="/admin-assets/img/blog/blog-details-1.jpg" alt="img" className="w-100 rounded-3" />
          </div>
          <p>Renting a car can be a convenient way to travel, but understanding rental car insurance is essential to avoid unexpected costs and risks. Many renters are unsure if they need extra insurance or if they are already covered by their personal auto policy or credit card. In this guide, we’ll break down the different types of rental car insurance, when you need it, and how to save money.</p>
          <p>When deciding whether to purchase rental car insurance, it’s also important to consider the specific terms and exclusions of each coverage type. For example, a Collision Damage Waiver (CDW) often excludes certain damages, such as those caused by reckless driving, off-road use, or driving under the influence. Liability coverage limits may also vary by location, and in some countries, it is mandatory to purchase additional liability insurance even if you have personal auto coverage. </p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <img src="/admin-assets/img/blog/blog-details-2.jpg" className="rounded-3" alt="img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <img src="/admin-assets/img/blog/blog-details-3.jpg" className="rounded-3" alt="img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <img src="/admin-assets/img/blog/blog-details-4.jpg" className="rounded-3" alt="img" />
              </div>
            </div>
          </div>
          <p>When deciding whether to purchase rental car insurance, it’s also important to consider the specific terms and exclusions of each coverage type. For example, a Collision Damage Waiver (CDW) often excludes certain damages, such as those caused by reckless driving, off-road use, or driving under the influence. Liability coverage limits may also vary by location, and in some countries, it is mandatory to purchase additional liability insurance even if you have personal auto coverage. </p>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <h6 className="me-2">Tags: </h6>
            <span className="badge badge-blog-details badge-md me-2">Road Trip Essentials</span>
            <span className="badge badge-blog-details badge-md me-2">Affordable Rides</span>
            <span className="badge badge-blog-details badge-md">Exotic Cars</span>
          </div>
          <h5>Tips for Saving Money on Rental Car Insurance</h5>
          <p className="mb-3">Review your existing coverage, use credit cards, compare third-party options, avoid unnecessary add-ons, and book in advance for savings.</p>
          <p className="d-flex align-items-center mb-3"><i className="ti ti-point-filled text-secondary me-2" /><span className="fw-medium">Check Existing Coverage:</span> Review personal auto or travel insurance to avoid extra costs.</p>
          <p className="d-flex align-items-center mb-3"><i className="ti ti-point-filled text-secondary me-2" /><span className="fw-medium">Use a Credit Card with Coverage:</span> Many credit cards offer rental insurance, saving on added fees.</p>
          <p className="d-flex align-items-center mb-3"><i className="ti ti-point-filled text-secondary me-2" /><span className="fw-medium">Compare Third-Party Insurance:</span> Third-party providers often offer better rates than rental companies.</p>
          <p className="d-flex align-items-center mb-3"><i className="ti ti-point-filled text-secondary me-2" /><span className="fw-medium">Book with Companies Offering Insurance:</span> Rent from companies that include basic coverage in their rates.</p>
          <p className="d-flex align-items-center"><i className="ti ti-point-filled text-secondary me-2" /><span className="fw-medium">Choose a Standard Car:</span> Economy Cars typically have lower insurance costs than luxury models.</p>
        </div>
      </div>
    </div>
    {/* Blogs Details */}
  </div>			
</div>



  )
}

export default AdminBlogDetails