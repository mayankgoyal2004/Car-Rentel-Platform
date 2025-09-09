import React from 'react'
import { Link } from 'react-router-dom'

const AdminMaintenance = () => {
  return (
    <div>
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Maintenance</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/AdminDashBoard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Maintenance</li>
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
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_maintenance" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Maintenance</a>
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
                    <span><i className="ti ti-grip-vertical me-1" />START DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />END DATE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />ODOMETER</span>
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
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Select Status
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
                  <input className="form-check-input m-0 me-2" type="checkbox" />In Progress
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />Planned
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
              <th>START DATE</th>
              <th>END DATE</th>
              <th>ODOMETER</th>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="fw-semibold d-block">Ford Endeavour</Link>
                    <span className="fs-13">Sedan</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">24 Jan 2025 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">26 Jan 2025 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">12,215 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Ferrari 458 MM</Link>
                    <span className="fs-13">Convertible</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">19 Dec 2024</p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">20 Dec 2024</p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">12,215 km</p></td>
              <td>
                <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                <p className="text-gray-9 mb-0">11 Dec 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">13 Dec 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">11,345 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Toyota Tacoma 4</Link>
                    <span className="fs-13">Hatchback</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">29 Nov 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">30 Nov 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">10,675 km</p></td>
              <td>
                <span className="badge badge-soft-purple d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Planned
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                <p className="text-gray-9 mb-0">03 Nov 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">05 Nov 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">19,015 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Etios Carmen	</Link>
                    <span className="fs-13">Hatchback</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">31 Oct 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">01 Oct 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">12,098 km</p></td>
              <td>
                <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                  <Link to="/admin-dashboard/car-details" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt /></Link>
                  <div>
                    <Link to="/admin-dashboard/car-details" className="d-block fw-semibold" >Acura Sport </Link>
                    <span className="fs-13">Crossover</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9 mb-0">15 Oct 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">17 Oct 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">10,315 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                <p className="text-gray-9 mb-0">26 Sep 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">27 Sep 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">14,432 km</p></td>
              <td>
                <span className="badge badge-soft-purple d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Planned
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                <p className="text-gray-9 mb-0">01 Sep 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">03 Sep 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">15,215 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
                <p className="text-gray-9 mb-0">15 Aug 2024 </p>
              </td>
              <td>
                <p className="text-gray-9 mb-0">16 Aug 2024 </p>
                <span className="fs-13">10:30 AM</span>
              </td>
              <td><p className="text-gray-9 mb-0">13,582 km</p></td>
              <td>
                <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_maintenance"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_maintenance"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Create Maintenance */}
  <div className="modal fade modal-dropdown" id="add_maintenance">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Create Maintenance</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="car-maintenance">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Car <span className="text-danger">*</span></label>	
                  <div className="dropdown w-100">
                    <a href="javascript:void(0);" className="w-100 dropdown-toggle btn btn-white d-inline-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      Select Car
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
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Endeavour</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ferrari 458 MM</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Mustang</a>
                      </li>
                    </ul>
                  </div>
                </div>   
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Odometer <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>   
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Start Date <span className="text-danger">*</span></label>
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
                  <label className="form-label">End Date <span className="text-danger">*</span></label>
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
                  <label className="form-label">Details</label>	
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">            
                <div className="mb-3">
                  <label className="form-label">Maintenance Status <span className="text-danger">*</span></label>	
                  <select className="select">
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Planned</option>
                  </select>
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
        </form>
      </div>
    </div>
  </div>
  {/* /Create Maintenance */}
  {/* Edit Maintenance */}
  <div className="modal fade modal-dropdown" id="edit_maintenance">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Maintenance</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="car-maintenance">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Car <span className="text-danger">*</span></label>	
                  <div className="dropdown w-100">
                    <a href="javascript:void(0);" className="w-100 dropdown-toggle btn btn-white d-inline-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      Ford Endeavour
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
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Endeavour</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ferrari 458 MM</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Mustang</a>
                      </li>
                    </ul>
                  </div>
                </div>   
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Odometer <span className="text-danger">*</span></label>	
                  <input type="text" defaultValue="12,215 km" className="form-control " />
                </div>   
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Start Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" defaultValue="24 Jan 2025" placeholder="dd/mm/yyyy" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">End Date <span className="text-danger">*</span></label>
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
                  <label className="form-label">Details</label>	
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">            
                <div className="mb-3">
                  <label className="form-label">Maintenance Status <span className="text-danger">*</span></label>	
                  <select className="select">
                    <option selected>Completed</option>
                    <option>In Progress</option>
                    <option>Planned</option>
                  </select>
                </div>
              </div>
            </div>  
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Maintenance */}
  {/* Delete Maintenance */}
  <div className="modal fade" id="delete_maintenance">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Maintenance</h4>
          <p className="mb-3">Are you sure you want to delete Maintenance?</p>
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

export default AdminMaintenance