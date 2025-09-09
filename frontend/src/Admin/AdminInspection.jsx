import React from 'react'
import { Link } from 'react-router-dom'

const AdminInspection = () => {
  return (
    
		<div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Inspection</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Inspection</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2 me-2">
            <a href="javascript:void(0);" className="btn btn-white d-flex align-items-center"><i className="ti ti-printer me-2" />Print</a>
          </div>
          <div className="me-2 mb-2">
            <div className="dropdown">
              <a href="javascript:void(0);" className="btn btn-dark d-inline-flex align-items-center">
                <i className="ti ti-upload me-1" />Export
              </a>
            </div>
          </div>
          <div className="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_inspection" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Inspection</a>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />CAR</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />INSPECTED STATUS</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />INSPECTION DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />INSPECTED BY</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />REPAIR STATUS</span>
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
              Select Inspected Status
            </a>
            <ul className="dropdown-menu dropdown-menu-lg p-3">
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Completed
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Pending
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />On Hold
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Rejected
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Select Repair Status
            </a>
            <ul className="dropdown-menu dropdown-menu-lg p-3">
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Completed
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Inprogress
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Pending
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />On Hold
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Rejected
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
              <th>CAR</th>
              <th>INSPECTED STATUS</th>
              <th>INSPECTION DATE</th>
              <th>INSPECTED BY</th>
              <th>REPAIR STATUS</th>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="fw-semibold d-block">Ford Endeavour</Link>
                    <span className="fs-13">Sedan</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">24 Jan 2025 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-01.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Shaun Farley</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" alt /></Link>
                  <div>
                    <a className="d-block fw-semibold" >Ferrari 458 MM</a>
                    <span className="fs-13">Convertible</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Inprogress
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">19 Dec 2024</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-12.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Jenny Ellis</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-info-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Pending
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Ford Mustang </Link>
                    <span className="fs-13">Coupe</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">11 Dec 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-15.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Leon Baxter</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-orange-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Need Repair
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details"  className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt /></Link>
                  <div>
                    <a className="d-block fw-semibold">Toyota Tacoma 4</a>
                    <span className="fs-13">Hatchback</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-purple d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Pending
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">29 Nov 2024</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-17.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Karen Flores</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-purple-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Inprogress
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Chevrolet Truck	</Link>
                    <span className="fs-13">Sedan</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">03 Nov 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-06.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Michael Dawson</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details"className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold">Etios Carmen	</Link>
                    <span className="fs-13">Hatchback</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-warning d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />On Hold
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">31 Oct 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-18.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Karen Galvan</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-warning-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />On Hold
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details"className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Acura Sport </Link>
                    <span className="fs-13">Crossover</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">15 Oct 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-03.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Thomas Ward</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Kia Soul 2016</Link>
                    <span className="fs-13">Delivery</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Rejected
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">26 Sep 2024 </p>
              </td>                                
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-17.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Aliza Duncan</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-orange-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Need Repair
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Camaro</Link>
                    <span className="fs-13">Station Wagon</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">01 Sep 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-05.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">James Higham</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Toyota Camry</Link>
                    <span className="fs-13">Mini Van</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <p className="text-gray-9 mb-0">15 Aug 2024 </p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/profiles/avatar-08.jpg" alt className="rounded-circle" /></a>
                  <div>
                    <a href="javascript:void(0);" className="fw-semibold d-block">Jade Robinson</a>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Completed
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_inspection"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
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
  <div className="modal fade" id="add_inspection">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create  Inspection</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="car-inspection">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Car <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Ford Endeavour</option>
                    <option>Ferrari 458 MM</option>
                    <option>Ford Mustang</option>
                    <option>Toyota Tacoma 4</option>
                    <option>Chevrolet Truck</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection By <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Shaun Farley</option>
                    <option>Jenny Ellis</option>
                    <option>Leon Baxter</option>
                    <option>Karen Flores</option>
                    <option>Michael Dawson</option>
                  </select>
                </div>
              </div>
            </div>
            <h6 className="mb-2">Incoming Details</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Odometer <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Fuel <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <h6 className="mb-2">Checklist</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-1" type="checkbox" />
                    <label htmlFor="check-1" className="form-check-label text-gray-9 fs-14 mt-0">Body Condition</label>
                    <p className="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-2" type="checkbox" />
                    <label htmlFor="check-2" className="form-check-label text-gray-9 fs-14 mt-0">Glass &amp; Mirrors</label>
                    <p className="ms-2">Ensure no cracks or chips.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-3" type="checkbox" />
                    <label htmlFor="check-3" className="form-check-label text-gray-9 fs-14 mt-0">Lights</label>
                    <p className="ms-2">Test headlights, turn signals, and fog lights.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-4" type="checkbox" />
                    <label htmlFor="check-4" className="form-check-label text-gray-9 fs-14 mt-0">Tires &amp; Wheels</label>
                    <p className="ms-2">Inspect depth, pressure and signs of damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-5" type="checkbox" />
                    <label htmlFor="check-5" className="form-check-label text-gray-9 fs-14 mt-0">Engine Oil, Coolant &amp; Brake Fluid</label>
                    <p className="ms-2">Check level, condition and any leaks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-6" type="checkbox" />
                    <label htmlFor="check-6" className="form-check-label text-gray-9 fs-14 mt-0">Battery</label>
                    <p className="ms-2">Check terminals for corrosion and test charge.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-7" type="checkbox" />
                    <label htmlFor="check-7" className="form-check-label text-gray-9 fs-14 mt-0">Seats &amp; Seatbelts</label>
                    <p className="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-8" type="checkbox" />
                    <label htmlFor="check-8" className="form-check-label text-gray-9 fs-14 mt-0">AC &amp; Heater</label>
                    <p className="ms-2">Verify proper functioning.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-19" type="checkbox" />
                    <label htmlFor="check-19" className="form-check-label text-gray-9 fs-14 mt-0">Brakes &amp; Suspension</label>
                    <p className="ms-2">Listen for grinding or squeaking noises</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-10" type="checkbox" />
                    <label htmlFor="check-10" className="form-check-label text-gray-9 fs-14 mt-0">Exhaust System </label>
                    <p className="ms-2">Look for rust, holes, or excessive smoke.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection Status <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Completed</option>
                    <option>Inprogress</option>
                    <option>Pending</option>
                    <option>On Hold</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Repair Status <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Need Repair</option>
                    <option>Inprogress</option>
                    <option>On Hold</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-primary">Create New</a>
            </div>					
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Extra Service */}
  {/* Edit Extra Service */}
  <div className="modal fade" id="edit_inspection">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Inspection</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="car-inspections">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Car <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Ford Endeavour</option>
                    <option>Ferrari 458 MM</option>
                    <option>Ford Mustang</option>
                    <option>Toyota Tacoma 4</option>
                    <option>Chevrolet Truck</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection By <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Shaun Farley</option>
                    <option>Jenny Ellis</option>
                    <option>Leon Baxter</option>
                    <option>Karen Flores</option>
                    <option>Michael Dawson</option>
                  </select>
                </div>
              </div>
            </div>
            <h6 className="mb-2">Incoming Details</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Odometer <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" defaultValue="12,000 km" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Fuel <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" defaultValue="2 litres" />
                </div>
              </div>
            </div>
            <h6 className="mb-2">Checklist</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-11" type="checkbox" defaultChecked />
                    <label htmlFor="check-11" className="form-check-label text-gray-9 fs-14 mt-0">Body Condition</label>
                    <p className="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-12" type="checkbox" defaultChecked />
                    <label htmlFor="check-12" className="form-check-label text-gray-9 fs-14 mt-0">Glass &amp; Mirrors</label>
                    <p className="ms-2">Ensure no cracks or chips.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-13" type="checkbox" defaultChecked />
                    <label htmlFor="check-13" className="form-check-label text-gray-9 fs-14 mt-0">Lights</label>
                    <p className="ms-2">Test headlights, turn signals, and fog lights.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-14" type="checkbox" defaultChecked />
                    <label htmlFor="check-14" className="form-check-label text-gray-9 fs-14 mt-0">Tires &amp; Wheels</label>
                    <p className="ms-2">Inspect depth, pressure and signs of damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-15" type="checkbox" defaultChecked />
                    <label htmlFor="check-15" className="form-check-label text-gray-9 fs-14 mt-0">Engine Oil, Coolant &amp; Brake Fluid</label>
                    <p className="ms-2">Check level, condition and any leaks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-16" type="checkbox" defaultChecked />
                    <label htmlFor="check-16" className="form-check-label text-gray-9 fs-14 mt-0">Battery</label>
                    <p className="ms-2">Check terminals for corrosion and test charge.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-17" type="checkbox" defaultChecked />
                    <label htmlFor="check-17" className="form-check-label text-gray-9 fs-14 mt-0">Seats &amp; Seatbelts</label>
                    <p className="ms-2">Look for dents, scratches, rust, or paint damage.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-18" type="checkbox" defaultChecked />
                    <label htmlFor="check-18" className="form-check-label text-gray-9 fs-14 mt-0">AC &amp; Heater</label>
                    <p className="ms-2">Verify proper functioning.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-20" type="checkbox" defaultChecked />
                    <label htmlFor="check-20" className="form-check-label text-gray-19 fs-14 mt-0">Brakes &amp; Suspension</label>
                    <p className="ms-2">Listen for grinding or squeaking noises</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="form-check form-check-md mb-0">
                    <input className="form-check-input" id="check-39" type="checkbox" defaultChecked />
                    <label htmlFor="check-39" className="form-check-label text-gray-9 fs-14 mt-0">Exhaust System </label>
                    <p className="ms-2">Look for rust, holes, or excessive smoke.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Inspection Status <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Completed</option>
                    <option>Inprogress</option>
                    <option>Pending</option>
                    <option>On Hold</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Repair Status <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Completed</option>
                    <option>Pending</option>
                    <option>Need Repair</option>
                    <option>Inprogress</option>
                    <option>On Hold</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-primary">Save Changes</a>
            </div>					
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Extra Service */}
  {/* Delete Extra Service */}
  <div className="modal fade" id="delete">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Inspection</h4>
          <p className="mb-3">Are you sure you want to delete inspection?</p>
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

export default AdminInspection