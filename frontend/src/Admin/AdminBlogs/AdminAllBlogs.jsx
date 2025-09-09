import React from 'react'
import { Link } from 'react-router-dom'

const AdminAllBlogs = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-0 me-md-0 me-lg-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Blogs</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashBoard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Blogs</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="p-1 border rounded bg-white me-3 mb-2">
            <a href="javascript:void(0);" className="p-1 rounded d-inline-flex align-items-center justify-content-center me-1"><i className="ti ti-list-tree" /></a>
            <a href="javascript:void(0);" className="p-1 rounded text-white bg-primary d-inline-flex align-items-center justify-content-center"><i className="ti ti-layout-grid fs-14" /></a>
          </div>
          <div className="mb-2">
            <Link to="/admin-dashboard/add-blog" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add Blogs</Link>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Table Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-filter me-1" /> Sort By : Latest
            </a>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Latest</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Ascending</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Desending</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Month</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Last 7 Days</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <a href="#filtercollapse" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse">
              <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
            </a>
          </div>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
          <div className="top-search me-2">
            <div className="top-search-group">
              <span className="input-icon">
                <i className="ti ti-search" />
              </span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      {/* /Table Header */}
      <div className="collapse" id="filtercollapse">
        <div className="filterbox mb-3 d-flex align-items-center">
          <h6 className="me-3">Filters</h6>
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Category
            </a>
            <ul className="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <div className="top-search m-2">
                  <div className="top-search-group">
                    <span className="input-icon">
                      <i className="ti ti-search" />
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Travel Tips
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Car Reviews
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Rental Policies
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Insurance &amp; Coverage
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Budget Rentals
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Luxury Car Rentals
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Road Trip Guides
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Eco-Friendly Rentals
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Seasonal Deals
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Customer Stories
                </label>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
          <a href="javascript:void(0);" className="text-danger links">Clear All</a>
        </div>
      </div>
      {/* Blogs */}
      <div className="row blogs-cover">
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-1.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Sustainability
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-01.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Bryan Bradfield</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">Why Electric Cars Are the Future of Car Rentals</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-2.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Money-Saving
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-01.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">James Carter</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">How to Save Money on Your Next Car Rental</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-3.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Ride-Sharing Insights
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-03.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Ethan Reynolds</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">Car Rental vs. Ride-Sharing: Which One is Right for You?</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-4.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Travel Inspiration
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-04.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Liam Bennett</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">The Best Road Trip Routes to Take in a Rental Car</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-5.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Booking Tips
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-05.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Daniel Foster</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">Step-by-Step Guide to Booking a Rental Car Online</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-6.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Insurance &amp; Protection
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-06.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Noah Harrison</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">What You Need to Know About Rental Car Insurance</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-7.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Customer Experience
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-07.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">David Rodriguez</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">Returning a Rental Car: Common Mistakes to Avoid</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-8.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    Product Design
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-08.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">Lily Johnson</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">10 Tips for Creating Engaging User Interfaces</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card blog-item-1">
            <div className="card-body p-0">
              <div className="blog-img">
                <Link to= "/admin-dashboard/admin-blog-details"><img src="/admin-assets/img/blog/blog-9.jpg" alt="img" /></Link>
                <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link   to="/admin-dashboard/edit-blog" className="blog-edit me-2"><i className="ti ti-edit" /></Link>
                    <a href="javascript:void(0);" className="blog-delete" data-bs-toggle="modal" data-bs-target="#delete_blogs"><i className="ti ti-trash" /></a>
                  </div>
                  <span className="badge badge-info badge-md">
                    User Research
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a href="javascript:void(0);"><img src="/admin-assets/img/customer/customer-09.jpg" alt="img" className="avatar avatar-sm rounded-circle me-1" /></a>
                    <a href="javascript:void(0);" className="fs-16">David Rodriguez</a>
                  </div>
                  <span className="d-flex align-items-center fs-16">
                    <i className="ti ti-calendar me-1" />
                    14 Mar 2025
                  </span>
                </div>
                <h5><Link to= "/admin-dashboard/admin-blog-details">Understanding Customer Behavior in E-commerce</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <a href="javascript:void(0);" className="load-btn"><i className="ti ti-loader me-1" /> Load More</a>
        </div>
      </div>
      {/* Blogs */}		
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Delete Blogs */}
  <div className="modal fade" id="delete_blogs">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash fs-26" />
          </span>
          <h4 className="mb-1">Delete Blog</h4>
          <p className="mb-3">Are you sure you want to delete Blog?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Blogs */}
</div>

  )
}

export default AdminAllBlogs