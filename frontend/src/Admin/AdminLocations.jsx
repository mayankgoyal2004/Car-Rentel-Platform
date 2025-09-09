import React from 'react'
import { Link } from 'react-router-dom'

const AdminLocations = () => {
  return (
<div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Location</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Location</li>
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
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_location"><i className="ti ti-plus me-2" />Add New Location</a>
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
          <div className="dropdown me-2">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />LOCATION TITLE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />ADDRESS</span>
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
                    <span><i className="ti ti-grip-vertical me-1" />WORKING DAYS</span>
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
              <th>LOCATION TITLE</th>
              <th>ADDRESS</th>
              <th>PHONE</th>
              <th>WORKING DAYS</th>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-01.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Johnson Dealer Zone</a></h6>
                </div>
              </td>
              <td>
                2881 Jarvis Street
              </td>
              <td>
                +1 56598 98956
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="working">T</span>
                  <span className="working">W</span>
                  <span className="working">T</span>
                  <span className="working">F</span>
                  <span className="non-working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-02.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Miller Auto Trade Zone</a></h6>
                </div>
              </td>
              <td>
                354 Java Lane
              </td>
              <td>
                +1 24558 56599
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="non-working">T</span>
                  <span className="working">W</span>
                  <span className="working">T</span>
                  <span className="working">F</span>
                  <span className="non-working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-danger me-1" />Disabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-03.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Thompson Dealer Parking</a></h6>
                </div>
              </td>
              <td>
                849 Circle Drive
              </td>
              <td>
                +1 25669 88985
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="non-working">T</span>
                  <span className="working">W</span>
                  <span className="non-working">T</span>
                  <span className="working">F</span>
                  <span className="non-working">S</span>
                  <span className="working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-04.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Smith Auto Dealer Lot</a></h6>
                </div>
              </td>
              <td>
                239 Clousson Road
              </td>
              <td>
                +1 54698 55468
              </td>
              <td>
                <div className="working-days">
                  <span className="non-working">M</span>
                  <span className="working">T</span>
                  <span className="working">W</span>
                  <span className="working">T</span>
                  <span className="non-working">F</span>
                  <span className="working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-05.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Anderson Dealer Zone</a></h6>
                </div>
              </td>
              <td>
                728 Glenview Drive
              </td>
              <td>
                +1 32569 15458
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="non-working">T</span>
                  <span className="non-working">W</span>
                  <span className="working">T</span>
                  <span className="working">F</span>
                  <span className="non-working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-06.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Carter Dealer Holding Lot</a></h6>
                </div>
              </td>
              <td>
                39 Blackwell Street
              </td>
              <td>
                +1 65895 47878
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="working">T</span>
                  <span className="working">W</span>
                  <span className="working">T</span>
                  <span className="non-working">F</span>
                  <span className="non-working">S</span>
                  <span className="working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-07.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Walker Auto Trade Yard</a></h6>
                </div>
              </td>
              <td>
                75 Cambridge Place
              </td>
              <td>
                +1 14782 14578
              </td>
              <td>
                <div className="working-days">
                  <span className="non-working">M</span>
                  <span className="non-working">T</span>
                  <span className="working">W</span>
                  <span className="working">T</span>
                  <span className="working">F</span>
                  <span className="working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-08.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Taylor Auto Dealer Zone</a></h6>
                </div>
              </td>
              <td>
                56 Garfield Road
              </td>
              <td>
                +1 12488 14457
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="working">T</span>
                  <span className="working">W</span>
                  <span className="non-working">T</span>
                  <span className="non-working">F</span>
                  <span className="non-working">S</span>
                  <span className="working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-09.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Evans Dealer Car Zone</a></h6>
                </div>
              </td>
              <td>
                2042 Strother Street
              </td>
              <td>
                +1 12781 02567
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="working">T</span>
                  <span className="non-working">W</span>
                  <span className="working">T</span>
                  <span className="working">F</span>
                  <span className="non-working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-danger me-1" />Disabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
                  <a href="javascript:void(0);" className="avatar rounded-circle me-2 flex-shrink-0">
                    <img src="/admin-assets/img/locations/location-10.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Allen Dealer Parking Lot</a></h6>
                </div>
              </td>
              <td>
                743 Simpson Square
              </td>
              <td>
                +1 12124 1425556
              </td>
              <td>
                <div className="working-days">
                  <span className="working">M</span>
                  <span className="non-working">T</span>
                  <span className="working">W</span>
                  <span className="non-working">T</span>
                  <span className="working">F</span>
                  <span className="working">S</span>
                  <span className="non-working">S</span>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent badge-md d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Enabled</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_location"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_location"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Add Location */}
  <div className="modal fade" id="add_location">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Location</h5>
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
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Location Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>            
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone" name="phone" className="form-control" />
              </div>
            </div>    
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Location <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Country <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">State <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">City <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Los Angeles</option>
                  <option>New York City</option>
                  <option>Houston</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Pincode <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <label className="form-label mb-2">Working Days <span className="text-danger">*</span></label>   
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Monday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Tuesday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Wednesday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Thursday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Friday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Saturday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Sunday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
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
  {/* /Add Driver */}
  {/* Edit Driver */}
  <div className="modal fade" id="edit_location">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Location</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <img src="/admin-assets/img/locations/location-01.jpg" className="img-fluid rounded" alt="img" />
                  <span className="avatar-badge bg-light text-danger m-1"><i className="ti ti-trash" /></span>
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
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Location Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Johnson Dealer Zone" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="johnsondealer@example.com" />
              </div>
            </div>            
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone2" name="phone2" className="form-control" defaultValue="+1 56598 98956" />
              </div>
            </div>    
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Location <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="2881 Jarvis Street" />
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Country <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>United States</option>
                  <option>Canada</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">State <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">City <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>Los Angeles</option>
                  <option>New York City</option>
                  <option>Houston</option>
                </select>
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Pincode <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <label className="form-label mb-2">Working Days <span className="text-danger">*</span></label>   
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                  Monday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="6:30 AM" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                  Tuesday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="6:30 AM" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                  Wednesday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="6:30 AM" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                  Thursday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="6:30 AM" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                  Friday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill ">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker" defaultValue="9:30 AM" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Saturday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check form-check-md form-switch me-2">
                <label className="form-check-label mt-0 mb-0 text-gray-5">
                  <input className="form-check-input form-label me-2" type="checkbox" role="switch" />
                  Sunday
                </label>
              </div>
              <div className="d-flex align-items-center">
                <div className="input-icon-start position-relative flex-fill  me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
                <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                <div className="input-icon-start position-relative flex-fill bg-light">
                  <span className="input-icon-addon">
                    <i className="ti ti-clock" />
                  </span>
                  <input type="text" className="form-control timepicker bg-light" placeholder />
                </div>
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
  {/* /Edit Driver */}
  {/* Delete  */}
  <div className="modal fade" id="delete_location">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Location</h4>
          <p className="mb-3">Are you sure you want to delete location?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/all-locations"className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>

  )
}

export default AdminLocations