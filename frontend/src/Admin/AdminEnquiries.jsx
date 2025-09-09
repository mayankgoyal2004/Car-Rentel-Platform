import React from 'react'
import { Link } from 'react-router-dom'

const AdminEnquiries = () => {
  return (
   <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Enquiries</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Enquiries</li>
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
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            <i className="ti ti-badge fs-16 me-1" />
            Status
          </a>
          <ul className="dropdown-menu dropdown-menu-md p-2">
            <li className="dropdown-item">
              Active
            </li>
            <li className="dropdown-item">
              Inactive
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
                  <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />CAR</span>
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
                  <span><i className="ti ti-grip-vertical me-1" />EMAIL</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />PHONE</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />DATE</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />ENQUIRY</span>
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
            Pick Up Location
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Los Angles
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />New York City
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Houston
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Munich
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Montreal
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Drop Off Location
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Los Angles
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />New York City
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Houston
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Munich
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Montreal
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-3">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            <i className="ti ti-badge me-1" />Status
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Completed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Confirmed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />In Rental
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Rejected
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />In Progress
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
            <th>CAR</th>
            <th>CUSTOMER</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>DATE</th>
            <th>ENQUIRY</th>
            <th>STATUS</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="fw-semibold d-block">Ford Endeavour</Link>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Reuben Keen</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="4537203027202b2e20202b05203d24283529206b262a28">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 56598 98956
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Ferrari 458 MM</Link>
                  <span className="fs-13">Convertible</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >William Jones</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="2b5c424747424a464144454e586b4e534a465b474e05484446">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 24558 56599
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-violet  d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Replied
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Ford Mustang </Link>
                  <span className="fs-13">Coupe</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Leonard Jandreau</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="95f9f0fafbf4e7f1fff4fbf1e7f0f4e0d5f0edf4f8e5f9f0bbf6faf8">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 25669 88985
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Toyota Tacoma 4</Link>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Adam Bolden</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="c0a1a4a1ada2afaca4a5ae80a5b8a1adb0aca5eea3afad">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 54698 55468
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Chevrolet Truck	</Link>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Harvey Jimenez</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="4921283b3f2c302320242c272c33092c31282439252c672a2624">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 32569 15458
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Not Opended	
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Etios Carmen	</Link>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >William Ward</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="04736d68686d65697365766044617c65697468612a676b69">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 65895 47878
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Acura Sport </Link>
                  <span className="fs-13">Crossover</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Norman Coleman</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="abc5c4d9c6cac5c8c4c7cec6cac5ebced3cac6dbc7ce85c8c4c6">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 14782 14578
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Kia Soul 2016</Link>
                  <span className="fs-13">Delivery</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Jay Beckman</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="94fef5edf6f1f7fff9f5fad4f1ecf5f9e4f8f1baf7fbf9">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 12488 14457
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Not Opended
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Camaro</Link>
                  <span className="fs-13">Station Wagon</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Francis Harris</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="355347545b565c465d5447475c4675504d54584559501b565a58">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 12781 02567
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Not Opended
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>                                                         
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" alt /></Link>
                <div>
                  <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Toyota Camry</Link>
                  <span className="fs-13">Mini Van</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to="/admin-dashboard/customer-details" className="d-block fw-semibold" >Renaldo Labarre</Link>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="me-2"><span className="__cf_email__" data-cfemail="6a180f040b060e05060b080b18180f2a0f120b071a060f44090507">[email&nbsp;protected]</span></a>
              </div>
            </td>
            <td>
              +1 12124 1425556
            </td>
            <td>
              <div>
                <p className="text-gray-9 mb-0">25 May 2025</p>
                <span className="text-gray-5 fs-13">01:00 PM</span>
              </div>
            </td>
            <td><a href="javascript:void(0);" className="p-1 d-inline-flex align-items-center justify-content-center border rounded-circle"><i className="ti ti-file-invoice" /></a></td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Opened
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_enquiries"><i className="ti ti-trash me-1" />Delete</a>
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

  )
}

export default AdminEnquiries