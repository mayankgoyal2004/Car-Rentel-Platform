import React from 'react'
import { Link } from 'react-router-dom'

const AdminReview = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Reviews</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Reviews</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2 me-2">
            <a href="javascript:void(0);" className="btn btn-white d-flex align-items-center"><i className="ti ti-printer me-2" />Print</a>
          </div>
          <div className="mb-2 me-2">
            <div className="dropdown">
              <a href="javascript:void(0);" className="btn btn-dark d-inline-flex align-items-center">
                <i className="ti ti-upload me-1" />Export
              </a>
            </div>
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
          <div className="me-2">
            <div className="input-icon-start position-relative topdatepicker">
              <span className="input-icon-addon">
                <i className="ti ti-calendar" />
              </span>
              <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
            </div>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />AUTHOR</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />REVIEW DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />RATINGS</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />REVIEW</span>
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
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Select Ratings
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
        <table className="table datatable quotations-table">
          <thead className="thead-light">
            <tr>
              <th className="no-sort">
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" id="select-all" />
                </div>
              </th>
              <th>AUTHOR</th>
              <th>REVIEW DATE</th>
              <th>RATINGS</th>
              <th>REVIEW</th>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-01.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Shaun Farley</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">24 Jan 2025 </p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Super easy booking process and great car selection!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-12.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Jenny Ellis</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">19 Dec 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Transparent pricing with no hidden fees - highly recommend!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-15.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Leon Baxter</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">11 Dec 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Wide range of cars, from budget to luxury - perfect for any trip!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-17.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Karen Flores</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">29 Nov 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Pick-up and drop-off were seamless - best rental experience ever!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-06.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Michael Dawson</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">03 Nov 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Clean, well-maintained cars and excellent customer support</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-18.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Karen Galvan</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">31 Oct 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Great deals and discounts - saved money on my rental!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-03.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Thomas Ward</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">15 Oct 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Fast check-in and check-out process, super convenient</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-17.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Aliza Duncan</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">26 Sep 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Quick responses from customer support - very helpful</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-05.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">James Higham</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">01 Sep 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Best rental experience - I'll definitely use them again</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/customer-details" className="avatar me-2 flex-shrink-0"><img className="rounded-circle" src="/admin-assets/img/profiles/avatar-08.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/customer-details" className="fw-semibold d-block">Jade Robinson</Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">15 Aug 2024</p>
              </td>
              <td>
                <div>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span><i className="ti ti-star-filled text-warning" /></span>
                  <span className="fs-14">(5.0)</span>
                </div>
              </td>
              <td><p className="text-gray-9 mb-0">Booking was fast, and the car was ready on time!</p></td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Delete Maintenance */}
  <div className="modal fade" id="delete_review">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Review</h4>
          <p className="mb-3">Are you sure you want to delete Review?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Maintenance */}
</div>

  )
}

export default AdminReview