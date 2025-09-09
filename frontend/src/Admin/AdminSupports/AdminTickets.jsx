import React from 'react'
import { Link } from 'react-router-dom'

const AdminTickets = () => {
  return (
   <div>
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Tickets</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Tickets</li>
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
          <div className="mb-2">
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_ticket"><i className="ti ti-plus me-2" />Add New Ticket</a>
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
          <div className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-layout-board me-1" /> Columns
            </a>
            <div className="dropdown-menu dropdown-menu-lg p-2">
              <ul>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />TICKET CODE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CREATED BY</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />SUBJECT</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CREATED DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />PRIORITY</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />ASSIGNEE</span>
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
              Priority
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
                  <input className="form-check-input m-0 me-2" type="checkbox" />Low
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Medium
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />High
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Status
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
                  <input className="form-check-input m-0 me-2" type="checkbox" />Resolved
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Open
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Closed
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
              <th>TICKET CODE</th>
              <th>CREATED BY</th>
              <th>SUBJECT</th>
              <th>CREATED DATE</th>
              <th>PRIORITY</th>
              <th>ASSIGNEE</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT001</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Andrew Simons</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Payment Issue</p>
              </td>
              <td>
                <p className="text-gray-9">24 Jan 2025</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-success" />Low</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-38.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Shaun Farley</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT002</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-21.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">David Steiger</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Car Not Available</p>
              </td>
              <td>
                <p className="text-gray-9">19 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-warning" />Medium</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Jenny Ellis</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-info-transparent"><i className="ti ti-point-filled text-info me-1" />Inprogress</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT003</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Virginia Phu</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Late Pickup Issue</p>
              </td>
              <td>
                <p className="text-gray-9">11 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-danger" />High</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-30.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Leon Baxter</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT004</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-22.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Walter Hartmann</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Wrong Car Delivered</p>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-success" />Low</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-31.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Karen Flores</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-violet-transparent text-purple"><i className="ti ti-point-filled text-purple me-1" />Open</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT005</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-27.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Andrea Jermaine</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Accidental Damage Report</p>
              </td>
              <td>
                <p className="text-gray-9">03 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-warning" />Medium</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-32.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Michael Dawson</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT006</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-05.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Dennis Eckhardt</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Refund Request</p>
              </td>
              <td>
                <p className="text-gray-9">31 Oct 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-danger" />High</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-33.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Karen Galvan</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-info-transparent"><i className="ti ti-point-filled text-info me-1" />Inprogress</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT007</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-25.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Lan Adams</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Extension Request</p>
              </td>
              <td>
                <p className="text-gray-9">15 Oct 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-success" />Low</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-34.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Thomas Ward</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT008</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-28.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Ann Crump</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Unable to Apply Coupon</p>
              </td>
              <td>
                <p className="text-gray-9">26 Sep 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-warning" />Medium</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-35.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Aliza Duncan</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-danger-transparent"><i className="ti ti-point-filled text-danger me-1" />Closed</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT009</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-07.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Julie Black</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">Overcharge on Invoice</p>
              </td>
              <td>
                <p className="text-gray-9">01 Sep 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-danger" />High</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-36.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">James Higham</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <a href="ticket-details.html">#TCKT0010</a>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Jean Walker</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">GPS Not Working</p>
              </td>
              <td>
                <p className="text-gray-9">15 Aug 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent rounded-pill"><i className="ti ti-point-filled text-success" />Low</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-37.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="javascript:void(0);" className="fs-14 fw-semibold">Jade Robinson</a></h6>
                </div>
              </td>
              <td>
                <span className="badge bg-success-transparent"><i className="ti ti-point-filled text-success me-1" />Resolved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* /Main Wrapper */}
  {/* Add Driver */}
  <div className="modal fade" id="add_ticket">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Ticket</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3">                                                
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
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Customer Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone" name="phone" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Ticket Code <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div> 
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Category <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Payment Issue</option>
                  <option>Car Not Available</option>
                  <option>Refund Request</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Priority <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">            
              <div className="mb-3">
                <label className="form-label">Created Date <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Description <span className="text-danger">*</span></label>
                <div className="editor" />
                <p className="mt-2">Maximum 60 Words</p>
              </div>
            </div> 
            <div className="col-md-12">
              <label className="form-label"> Document</label>
              <div className="document-upload text-center br-3 mb-3">
                <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
                <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
                <p className="fs-12 mb-0">Maximum size 50mb</p>
                <input type="file" className="form-control image-sign" multiple accept=".pdf, .txt, .doc, .docx" />
              </div>  
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Driver */}
  {/* Delete  */}
  <div className="modal fade" id="delete_contact">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Tickets</h4>
          <p className="mb-3">Are you sure you want to delete Tickets?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="" href="tickets.html" className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>

  )
}

export default AdminTickets