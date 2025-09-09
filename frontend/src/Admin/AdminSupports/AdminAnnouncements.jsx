import React from 'react'
import { Link } from 'react-router-dom'

const AdminAnnouncements = () => {
  return (
 <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Announcement</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Announcement</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2">
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_announcement"><i className="ti ti-plus me-2" />Add Announcement</a>
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
              <i className="ti ti-filter me-1" /> Filter<span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
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
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <span className="badge badge-xs rounded-pill bg-success me-2">4</span>Type
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
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />New Rental Service
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Special Offer
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />New Vehicle Addition
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />Seasonal Promotion
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Policy Update
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Branch Opening
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />Customer Safety
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Loyalty Program
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Emergency Closure
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Online Booking Update
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Status
            </a>
            <ul className="dropdown-menu dropdown-menu-md p-2">
              <li className="dropdown-item">
                Published
              </li>
              <li className="dropdown-item">
                Unpublish
              </li>
            </ul>
          </div>
          <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
          <a href="javascript:void(0);" className="text-danger links">Clear All</a>
        </div>
      </div>
      {/* Custom Data Table */}
      <div className="custom-datatable-filter table-responsive">
        <table className="table datatable">
          <thead className="thead-light">
            <tr>
              <th>DATE</th>
              <th>ANNOUNCEMENT</th>
              <th>TYPE</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="text-gray-9 mb-0">29 Nov 2024</p>
                <p className="fs-13 text-gray-5">01:00 PM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Exciting News!</p>
                <p className="fs-13 text-gray-5">We are now offering premium car rentals in your city!</p>
              </td>
              <td>
                <p className="text-gray-9">New Rental Service</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 mb-0">03 Nov 2024</p>
                <p className="fs-13 text-gray-5">10:00 AM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Limited-Time Offer!</p>
                <p className="fs-13 text-gray-5">Get 20% off on all weekend rentals. Book now and hit the road for less!</p>
              </td>
              <td>
                <p className="text-gray-9">Special Offer</p>
              </td>
              <td>
                <span className="badge bg-danger-transparent badge-sm"><i className="ti ti-point-filled text-danger me-1" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                             
            <tr>
              <td>
                <p className="text-gray-9 mb-0">31 Oct 2024</p>
                <p className="fs-13 text-gray-5">08:30 AM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">New Arrivals!</p>
                <p className="fs-13 text-gray-5">We’ve added luxury SUVs and electric vehicles to our fleet.</p>
              </td>
              <td>
                <p className="text-gray-9">New Vehicle Addition</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 mb-0">15 Oct 2024</p>
                <p className="fs-13 text-gray-5">03:15 PM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Holiday Special!</p>
                <p className="fs-13 text-gray-5">Rent a car for 3 days and get the 4th day free this festive season.</p>
              </td>
              <td>
                <p className="text-gray-9">Seasonal Promotion</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                             
            <tr>
              <td>
                <p className="text-gray-9 mb-0">26 Sep 2024</p>
                <p className="fs-13 text-gray-5">04:10 PM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Important Update!</p>
                <p className="fs-13 text-gray-5"> Our rental deposit policy has changed.</p>
              </td>
              <td>
                <p className="text-gray-9">Policy Update</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 mb-0">01 Sep 2024</p>
                <p className="fs-13 text-gray-5">11:00 AM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">We’ve Expanded!</p>
                <p className="fs-13 text-gray-5">Now serving customers at our brand-new Downtown Rental Center.</p>
              </td>
              <td>
                <p className="text-gray-9">Branch Opening</p>
              </td>
              <td>
                <span className="badge bg-danger-transparent badge-sm"><i className="ti ti-point-filled text-danger me-1" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                             
            <tr>
              <td>
                <p className="text-gray-9 mb-0">15 Aug 2024</p>
                <p className="fs-13 text-gray-5">09:40 AM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Your Safety Matters!</p>
                <p className="fs-13 text-gray-5">We ensure all rental cars are maintained for a worry-free journey.</p>
              </td>
              <td>
                <p className="text-gray-9">Customer Safety</p>
              </td>
              <td>
                <span className="badge bg-danger-transparent badge-sm"><i className="ti ti-point-filled text-danger me-1" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 mb-0">24 Jan 2025</p>
                <p className="fs-13 text-gray-5">02:30 PM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Introducing Our Rewards Program!</p>
                <p className="fs-13 text-gray-5">Earn points every time you rent and redeem them for discounts.</p>
              </td>
              <td>
                <p className="text-gray-9">Loyalty Program</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                             
            <tr>
              <td>
                <p className="text-gray-9 mb-0">19 Dec 2024</p>
                <p className="fs-13 text-gray-5">05:20 PM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Temporary Closure Alert!</p>
                <p className="fs-13 text-gray-5">Due to weather conditions, our rental office will be closed on 20Jan 2025.</p>
              </td>
              <td>
                <p className="text-gray-9">Emergency Closure</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 mb-0">11 Dec 2024</p>
                <p className="fs-13 text-gray-5">09:30 AM</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">Easier Than Ever!</p>
                <p className="fs-13 text-gray-5">Our new website now lets you book your rentals in just a few clicks!</p>
              </td>
              <td>
                <p className="text-gray-9">Online Booking Update</p>
              </td>
              <td>
                <span className="badge bg-success-transparent badge-sm"><i className="ti ti-point-filled text-success me-1" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#announcement_detail"><i className="ti ti-eye me-1" />Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_announcement"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                             
          </tbody>
        </table>
      </div>
      {/* Custom Data Table */}
      <div className="table-footer" />			
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Add Announcement */}
  <div className="modal fade" id="add_announcement">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Announcement</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Announcement Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Announcement Type <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>New Rental Service</option>
                  <option>Special Offer</option>
                  <option>Seasonal Promotion</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Users <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Customer</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Description <span className="text-danger">*</span></label>
                <div className="editor" />
                <p className="mt-2">Maximum 60 Words</p>
              </div>
            </div>  
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" className="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Announcement */}
  {/* Edit Announcement */}
  <div className="modal fade" id="edit_announcement">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Announcement</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Announcement Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Limited-Time Offer!" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Announcement Type <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>New Rental Service</option>
                  <option>Special Offer</option>
                  <option>Seasonal Promotion</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Users <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>Customer</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Description <span className="text-danger">*</span></label>
                <div className="editor">
                  We are now offering premium car rentals in your city! Book your ride today and enjoy unbeatable rates.
                </div>
                <p className="mt-2">Maximum 60 Words</p>
              </div>
            </div>  
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="form-check form-check-md form-switch me-2">
              <label className="form-check-label form-label mt-0 mb-0">
                <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                Status
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-primary">Save Changes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Announcement */}
  {/* Announcement Details */}
  <div className="modal fade" id="announcement_detail">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Announcement Details</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <p className="text-gray-9 fw-medium mb-0">Announcement Type</p>
            <p>New Rental Servicepe</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-9 fw-medium mb-0">Description</p>
            <p>Limited-Time Offer!</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-9 fw-medium mb-0">Announcement Type</p>
            <p> We are now offering premium car rentals in your city! Book your ride today and enjoy unbeatable rates.</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-9 fw-medium mb-0">Date</p>
            <p>10 Jan 2025</p>
          </div>
          <h6 className="mb-3">Announcement Views</h6>
          <div className="custom-datatable-filter table-responsive brandstable mb-3">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>USER</th>
                  <th>ROLE</th>
                  <th>VIEWED DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="car-details" className="avatar me-2 flex-shrink-0">
                        <img src="/admin-assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt />
                      </a>
                      <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Andrew Simons</a></h6>
                    </div>
                  </td>
                  <td>
                    <p className="text-gray-9">Admin</p>
                  </td>
                  <td>
                    <p className="text-gray-9 mb-0">29 Nov 2024</p>
                    <p className="fs-13 text-gray-5">01:00 PM</p>
                  </td>
                </tr>                                                            
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="car-details" className="avatar me-2 flex-shrink-0">
                        <img src="/admin-assets/img/profiles/avatar-21.jpg" className="rounded-circle" alt />
                      </a>
                      <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">David Steiger</a></h6>
                    </div>
                  </td>
                  <td>
                    <p className="text-gray-9">Manager</p>
                  </td>
                  <td>
                    <p className="text-gray-9 mb-0">19 Dec 2024</p>
                    <p className="fs-13 text-gray-5">10:00 AM</p>
                  </td>
                </tr>                                                            
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="car-details" className="avatar me-2 flex-shrink-0">
                        <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                      </a>
                      <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Virginia Phu</a></h6>
                    </div>
                  </td>
                  <td>
                    <p className="text-gray-9">Customer</p>
                  </td>
                  <td>
                    <p className="text-gray-9 mb-0">24 Dec 2024</p>
                    <p className="fs-13 text-gray-5">12:32 PM</p>
                  </td>
                </tr>                                                            
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="car-details" className="avatar me-2 flex-shrink-0">
                        <img src="/admin-assets/img/profiles/avatar-22.jpg" className="rounded-circle" alt />
                      </a>
                      <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Walter Hartmann</a></h6>
                    </div>
                  </td>
                  <td>
                    <p className="text-gray-9">Accountant</p>
                  </td>
                  <td>
                    <p className="text-gray-9 mb-0">29 Nov 2024</p>
                    <p className="fs-13 text-gray-5">03:15 PM</p>
                  </td>
                </tr>                                                            
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="car-details" className="avatar me-2 flex-shrink-0">
                        <img src="/admin-assets/img/profiles/avatar-27.jpg" className="rounded-circle" alt />
                      </a>
                      <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Andrea Jermaine</a></h6>
                    </div>
                  </td>
                  <td>
                    <p className="text-gray-9">Inspector</p>
                  </td>
                  <td>
                    <p className="text-gray-9 mb-0">03 Nov 2024</p>
                    <p className="fs-13 text-gray-5">04:10 PM</p>
                  </td>
                </tr>                                                            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Announcement Details */}
  {/* Delete  */}
  <div className="modal fade" id="delete_announcement">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Announcement</h4>
          <p className="mb-3">Are you sure you want to delete announcement?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="all-announcements"  className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>

  )
}

export default AdminAnnouncements