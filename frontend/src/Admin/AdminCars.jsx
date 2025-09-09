import React from 'react'
import { Link } from 'react-router-dom'

const AdminCars = () => {
  return (
   <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">All Cars</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard" >Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">All Cars</li>
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
          <Link  to="/admin-dashboard/add-car" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Car</Link>
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
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
            <i className="ti ti-edit-circle me-1" /> Bulk Actions
          </a>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">Delete</a>
            </li>
          </ul>
        </div>
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
                  <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />	CAR</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />BASE LOCATION</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />PRICE (PER DAY)</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />DAMAGES</span>
                  <div className="form-check form-check-sm form-switch mb-0">
                    <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                  <span><i className="ti ti-grip-vertical me-1" />IS FEATURED</span>
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
            Select Cars
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Ford Endeavour
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Ferrari 458 MM
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Ford Mustang 
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Toyota Tacoma 4
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chevrolet Pick Truck
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Etios Carmen
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Acura Sport Version
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Kia Soul 2016
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chevrolet Camaro
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Toyota Camry SE 350
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Type
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Sedan
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Hatchback
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />SUV
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Coupes
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Convertible
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Pickup Truck
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Sport
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Minivan
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />EV
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-3">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Location
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
                <input className="form-check-input m-0 me-2" type="checkbox" />Newyork City
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Los Angeles
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chicago
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Houston
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Phoenix
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Philadelphia
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Austin
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />San Antonio
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-3">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
            <th>CAR</th>
            <th>BASE LOCATION</th>
            <th>PRICE (PER DAY)</th>
            <th>DAMAGES</th>
            <th>IS FEATURED</th>
            <th>CREATED DATE</th>
            <th>STATUS</th>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-01.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Ford Endeavour</Link></h6>
                  <p>Sedan</p>
                </div>
              </div>
            </td>
            <td>
              Newyork City
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$3500</p>
            </td>
            <td>
              <p className="text-gray-9">01</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-02.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Ferrari 458 MM</Link></h6>
                  <p>Convertible</p>
                </div>
              </div>
            </td>
            <td>
              Los Angeles
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$2800</p>
            </td>
            <td>
              <p className="text-gray-9">05</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-03.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Ford Mustang </Link></h6>
                  <p>Coupe</p>
                </div>
              </div>
            </td>
            <td>
              Chicago
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$1425</p>
            </td>
            <td>
              <p className="text-gray-9">05</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-gray-2" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-04.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Toyota Tacoma 4</Link></h6>
                  <p>Hatchback</p>
                </div>
              </div>
            </td>
            <td>
              Houston
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$745</p>
            </td>
            <td>
              <p className="text-gray-9">04</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1"><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-05.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Chevrolet Pick Truck</Link></h6>
                  <p>Sedan</p>
                </div>
              </div>
            </td>
            <td>
              Phoenix
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$659</p>
            </td>
            <td>
              <p className="text-gray-9">02</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-06.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Etios Carmen</Link></h6>
                  <p>Hatchback</p>
                </div>
              </div>
            </td>
            <td>
              Philadelphia
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$254</p>
            </td>
            <td>
              <p className="text-gray-9">01</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-gray-2" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-07.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Acura Sport Version</Link></h6>
                  <p>Crossover</p>
                </div>
              </div>
            </td>
            <td>
              Austin
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$1240</p>
            </td>
            <td>
              <p className="text-gray-9">05</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1"><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-08.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Kia Soul 2016</Link></h6>
                  <p>Station Wagon</p>
                </div>
              </div>
            </td>
            <td>
              San Antonio
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$1425</p>
            </td>
            <td>
              <p className="text-gray-9">02</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-11.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Chevrolet Camaro</Link></h6>
                  <p>Station Wagon</p>
                </div>
              </div>
            </td>
            <td>
              Los Angeles
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$4124</p>
            </td>
            <td>
              <p className="text-gray-9">03</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-gray-2" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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
                <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0">
                  <img src="/admin-assets/img/car/car-10.jpg" className="rounded-3" alt />
                </Link>
                <div>
                  <h6><Link to="/admin-dashboard/car-details" className="fs-14 fw-semibold">Toyota Camry SE 350</Link></h6>
                  <p>Mini Van</p>
                </div>
              </div>
            </td>
            <td>
              Chicago
            </td>
            <td>
              <p className="fs-14 fw-semibold text-gray-9">$4741</p>
            </td>
            <td>
              <p className="text-gray-9">02</p>
            </td>
            <td>
              <i className="ti ti-star-filled text-warning" />
            </td>
            <td>
              <h6 className="fs-14 fw-normal">25 May 2025</h6>
              <p className="fs-13">01:00 PM</p>
            </td>
            <td>
              <span className="badge badge-dark-transparent"><i className="ti ti-point-filled text-success me-1" />Active</span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="/admin-dashboard/car-details" className="dropdown-item rounded-1" ><i className="ti ti-eye me-1" />View Details</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/add-reservation" className="dropdown-item rounded-1" ><i className="ti ti-plus me-1" />Add Reservation</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard/edit-car" className="dropdown-item rounded-1" ><i className="ti ti-edit me-1" />Edit</Link>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_extra_services"><i className="ti ti-trash me-1" />Delete</a>
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

export default AdminCars