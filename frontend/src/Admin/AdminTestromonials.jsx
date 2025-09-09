import React from 'react'
import { Link } from 'react-router-dom'

const AdminTestimonials = () => {
  return (
    <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Testimonials</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_testimonial" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add Testimonial</a>
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
          <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
          <a href="javascript:void(0);" className="text-danger links">Clear All</a>
        </div>
      </div>
      {/* Custom Data Table */}
      <div className="custom-datatable-filter table-responsive">
        <table className="table datatable">
          <thead className="thead-light">
            <tr>
              <th className="no-sort">
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" id="select-all" />
                </div>
              </th>
              <th>CUSTOMER</th>
              <th>RATING</th>
              <th>REVIEW</th>
              <th>CREATED DATE </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-01.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Andrew Simons</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span>(5.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">The rental was spotless, great host!</a>
              </td>
              <td>
                24 Jan 2025
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details"  className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-02.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">David Steiger</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(4.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Good stay, but Wi-Fi was slow.</a>
              </td>
              <td>
                19 Dec 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-03.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Virginia Phu</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span>(5.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Loved everything about this place!</a>
              </td>
              <td>
                11 Dec 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-04.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Walter Hartmann</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(3.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Needs better maintenance service.</a>
              </td>
              <td>
                29 Nov 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-05.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Andrea Jermaine</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(4.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Nice apartment, but check-in was slow.</a>
              </td>
              <td>
                03 Nov 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-06.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Dennis Eckhardt</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span>(5.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Highly recommend, everything was perfect!</a>
              </td>
              <td>
                31 Oct 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-07.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Dennis Eckhardt</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span>(5.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Highly recommend, everything was perfect!</a>
              </td>
              <td>
                31 Oct 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-08.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Lan Adams</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(3.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Decent experience, but expected better service.</a>
              </td>
              <td>
                15 Oct 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-09.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Ann Crump</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span>(5.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Great place for work trips, fast Wi-Fi!</a>
              </td>
              <td>
                26 Sep 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-10.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Julie Black</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(4.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Affordable and close to university.</a>
              </td>
              <td>
                01 Sep 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/admin-dashboard/customer-details" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-02.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold">Jean Walker</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-warning" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span className="me-1"><i className="ti ti-star-filled text-gray-2" /></span>
                  <span>(3.0)</span>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);">Perfect for our family getaway!</a>
              </td>
              <td>
                15 Aug 2024
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_testimonial"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_testimonials"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Add Extra Service */}
  <div className="modal fade" id="add_testimonial">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Testimonial</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Image <span className="text-danger">*</span></label>
            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">                                                
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                <i className="ti ti-photo-up text-gray-4 fs-24" />
              </div>                                              
              <div className="profile-upload">
                <div className="profile-uploader d-flex align-items-center">
                  <div className="drag-upload-btn btn btn-md btn-dark">
                    <i className="ti ti-photo-up fs-14" />
                    Upload
                    <input type="file" className="form-control image-sign" multiple />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Customer <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ratings <span className="text-danger">*</span></label>
            <select className="select">
              <option value>Select</option>
              <option value>5 Star</option>
              <option value>4 Star</option>
              <option value>3 Star</option>
              <option value>2 Star</option>
              <option value>1 Star</option>
            </select>
          </div>
          <div className="mb-0">
            <label className="form-label">Review <span className="text-danger">*</span></label>							
            <textarea className="form-control" defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="all-testimonials"  className="btn btn-primary">Create New</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Extra Service */}
  {/* Edit Brand */}
  <div className="modal fade" id="edit_testimonial">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Testimonial</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Image <span className="text-danger">*</span></label>
            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">                                                
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames p-2">
                <img src="/admin-assets/img/customer/customer-01.jpg" className="rounded-2 img-fluid" alt="brands" />
                <a href="javascript:void(0);" className="upload-img-trash btn btn-sm btn-danger-light rounded-circle">
                  <i className="ti ti-trash fs-12" />
                </a>
              </div>                                              
              <div className="profile-upload">
                <div className="profile-uploader d-flex align-items-center">
                  <div className="drag-upload-btn btn btn-md btn-dark">
                    <i className="ti ti-photo-up fs-14" />
                    Upload
                    <input type="file" className="form-control image-sign" multiple />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Customer <span className="text-danger">*</span></label>
            <input type="text" className="form-control" defaultValue="Andrew Simmons" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ratings <span className="text-danger">*</span></label>
            <select className="select">
              <option value>Select</option>
              <option value>5 Star</option>
              <option value selected>4 Star</option>
              <option value>3 Star</option>
              <option value>2 Star</option>
              <option value>1 Star</option>
            </select>
          </div>
          <div className="mb-0">
            <label className="form-label">Review <span className="text-danger">*</span></label>							
            <textarea className="form-control" defaultValue={"The rental was spotless, great host!"} />
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
              <Link to="all-testimonials" className="btn btn-primary">Create New</Link>
            </div>
          </div>						
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Brand */}
  {/* Delete Extra Service */}
  <div className="modal fade" id="delete_testimonials">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash fs-26" />
          </span>
          <h4 className="mb-1">Delete Testimonial</h4>
          <p className="mb-3">Are you sure you want to delete testimonial?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Extra Service */}
</div>

  )
}

export default AdminTestimonials