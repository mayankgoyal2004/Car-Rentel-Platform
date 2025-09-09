import React from 'react'
import { Link } from 'react-router-dom'

const AdminBlogsComments = () => {
  return (
  <div>
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Blog Comments</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Blog Comments</li>
            </ol>
          </nav>
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
          <div className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-layout-board me-1" /> Columns
            </a>
            <div className="dropdown-menu dropdown-menu-lg p-2">
              <ul>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />REVIEW</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CREATED DATE </span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />BLOG</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CUSTOMER</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />STATUS</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
              </ul>
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
              Rating
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
                  <input className="form-check-input m-0 me-2" type="checkbox" />5 Star
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />4 Star
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />3 Star
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />2 Star
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />1 Star
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Status
            </a>
            <ul className="dropdown-menu dropdown-menu-lg p-2">
              <li className="dropdown-item d-flex align-items-center rounded-1">
                Published
              </li>
              <li className="dropdown-item d-flex align-items-center rounded-1">
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
        <table className="table datatable custom-blog-table">
          <thead className="thead-light">
            <tr>
              <th>REVIEW</th>
              <th>CREATED DATE </th>
              <th>RATING</th>
              <th>BLOG</th>
              <th>CUSTOMER</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">Loved this list! I took the Pacific Coast Highway trip last summer, and it was breathtaking. Highly recommend renting a convertible!</p>
              </td>
              <td>
                <p className="text-gray-9">24 Jan 2025</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span>(5.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">Top 10 Car Rental Tips for a Hassle-Free Journey</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-20.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Andrew Simons </a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">Great article! Do you have any tips on the best time of year to drive the Ring Road in Iceland?</p>
              </td>
              <td>
                <p className="text-gray-9">19 Dec 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(4.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">How to Save Money on Your Next Car Rental</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-21.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">David Steiger</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Unpublish
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">The Scottish Highlands road trip is on my bucket list! Any recommendations for good rental car options for those narrow roads?</p>
              </td>
              <td>
                <p className="text-gray-9">11 Dec 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span>(5.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">Car Rental vs. Ride-Sharing: Which One is Right for You?</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-22.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Walter Hartmann</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">I did the Great Ocean Road drive last year, and it was stunning! The views, the beaches, and the wildlife—unforgettable!</p>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(3.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">The Best Road Trip Routes to Take in a Rental Car</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-05.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Dennis Eckhardt</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">Iceland’s Ring Road sounds amazing! Is a 4x4 necessary, or can I manage with a regular rental car?</p>
              </td>
              <td>
                <p className="text-gray-9">03 Nov 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(4.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">Step-by-Step Guide to Booking a Rental Car Online</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-24.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Virginia Phu</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">Just booked my rental car for a road trip next month! Can’t wait to explore new places. Thanks for the inspiration!</p>
              </td>
              <td>
                <p className="text-gray-9">31 Oct 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span>(5.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">What You Need to Know About Rental Car Insurance</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-25.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Lan Adams</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Unpublish
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate">Fantastic suggestions! I’d love to see a follow-up post on hidden road trip gems that aren’t as well known.</p>
              </td>
              <td>
                <p className="text-gray-9">15 Oct 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(3.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate">Returning a Rental Car: Common Mistakes to Avoid</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-10.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Ann Crump</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Unpublish
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate ">Are there any scenic road trips in Europe you’d recommend that aren’t as crowded with tourists?</p>
              </td>
              <td>
                <p className="text-gray-9">26 Sep 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span>(5.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate ">How to Find the Best Car Rental Deals &amp; Discounts</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-26.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Andrea Jermaine</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate ">I’ve always wanted to do a cross-country road trip in the U.S.! Any tips on choosing the best rental car for long-distance travel?</p>
              </td>
              <td>
                <p className="text-gray-9">01 Sep 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(4.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate ">Luxury Car Rentals: Are They Worth the Price?</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-23.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Julie Black</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
            <tr>
              <td>
                <p className="text-gray-9 text-truncate ">This article makes me want to pack my bags and go! Road trips are the best way to travel. Thanks for the great ideas!</p>
              </td>
              <td>
                <p className="text-gray-9">15 Aug 2024</p>
              </td>
              <td>
                <div>
                  <ul className="d-flex align-items-center gap-1">
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-warning" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span></li>
                    <li><span><i className="ti ti-star-filled text-gray-2" /></span>(3.0)</li>
                  </ul>
                </div>
              </td>
              <td>
                <p className="text-gray-9 text-truncate ">Short-Term vs. Long-Term Car Rentals: Which Saves More?</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-16.jpg" alt="image" /></a>
                  <div>
                    <h6 className="fw-semibold"><a href="javascript:void(0);">Jean Walker</a></h6>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Published
                </span>
              </td>
            </tr>                                                         
          </tbody>
        </table>
      </div>
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Delete Modal  */}
  <div className="modal fade" id="delete_page">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Page</h4>
          <p className="mb-3">Are you sure you want to delete page?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="admin-pages"  className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal*/}
</div>

  )
}

export default AdminBlogsComments