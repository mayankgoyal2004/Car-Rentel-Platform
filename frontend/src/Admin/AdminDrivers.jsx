import React from 'react'
import { Link } from 'react-router-dom'

const AdminDrivers = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Drivers</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dash-board" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Drivers</li>
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
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_driver"><i className="ti ti-plus me-2" />Add New Driver</a>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />DRIVERS</span>
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
                    <span><i className="ti ti-grip-vertical me-1" />LICENSE NO</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />EXPIRY DATE</span>
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
              <th>DRIVERS</th>
              <th>EMAIL</th>
              <th>LICENSE NO</th>
              <th>EXPIRY DATE</th>
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
                    <img src="/admin-assets/img/customer/customer-01.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Reuben Keen</a></h6>
                    <p>+1 14782 14578</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="83f1e6f6e1e6edc3e6fbe2eef3efe6ade0ecee">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL123456789</p>
              </td>
              <td>
                <p className="text-gray-9">24 Jan 2025</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-02.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">William Jones</a></h6>
                    <p>+1 32569 15458</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="37405e5b5b5e565a77524f565a475b521954585a">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL1697453622</p>
              </td>
              <td>
                <p className="text-gray-9">19 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-03.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Leonard Jandreau</a></h6>
                    <p>+1 25669 88985</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="573b32383936253317322f363a273b327934383a">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL5694863152</p>
              </td>
              <td>
                <p className="text-gray-9">11 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-04.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Adam Bolden</a></h6>
                    <p>+1 54698 55468</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="600104010d200518010d100c054e030f0d">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL234567890</p>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-05.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Harvey Jimenez</a></h6>
                    <p>+1 12488 14457</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3c545d4e4a59457c59445d514c5059125f5351">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL678901234</p>
              </td>
              <td>
                <p className="text-gray-9">03 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-06.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">William Ward</a></h6>
                    <p>+1 65895 47878</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cabda3a6a6a3aba78aafb2aba7baa6afe4a9a5a7">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL012345678</p>
              </td>
              <td>
                <p className="text-gray-9">31 Oct 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-07.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Norman Coleman</a></h6>
                    <p>+1 32569 15458</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="82ecedf0efe3ecc2e7fae3eff2eee7ace1edef">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL987654321</p>
              </td>
              <td>
                <p className="text-gray-9">15 Oct 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-danger me-1" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-08.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Jay Beckman</a></h6>
                    <p>+1 56598 98956</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="385259415a5d5b53555956785d40595548545d165b5755">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL345678901</p>
              </td>
              <td>
                <p className="text-gray-9">26 Sep 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-09.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Francis Harris</a></h6>
                    <p>+1 12781 02567</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="284e5a49464b415b684d50494558444d064b4745">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL456789012</p>
              </td>
              <td>
                <p className="text-gray-9">01 Sep 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
                    <img src="/admin-assets/img/customer/customer-10.jpg" className="rounded-circle" alt="img" />
                  </a>
                  <div>
                    <h6 className="fs-14 fw-semibold"><a href="javascript:void(0);">Renaldo Labarre</a></h6>
                    <p>+1 12124 14255</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4a6b1bab5b8b0bb94b1acb5b9a4b8b1fab7bbb9">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">DL567890123</p>
              </td>
              <td>
                <p className="text-gray-9">15 Aug 2024</p>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-flex align-items-center"><i className="ti ti-point-filled text-success me-1" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_driver"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_driver"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Add Driver */}
  <div className="modal fade" id="add_driver">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Driver</h5>
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
                <label className="form-label">Driver Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Gender <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone" name="phone" className="form-control" />
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
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <h6 className="fs-16 fw-medium mb-2">License Details</h6>   
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Card Number <span className="text-danger">*</span></label>
                <input className="form-control" type="text" />
              </div>
            </div>   
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Date of Issue <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>    
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Valid Date <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
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
            <button type="submit" className="btn btn-primary">Create New</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Driver */}
  {/* Edit Driver */}
  <div className="modal fade" id="edit_driver">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Driver</h5>
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
                  <img src="/admin-assets/img/customer/customer-01.jpg" className="img-fluid rounded" alt="img" />
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
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Driver Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Reuben Keen" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Gender <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <input type="text" id="phone2" name="phone2" className="form-control" defaultValue="+1 56598 98956" />
              </div>
            </div>            
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="reuben@example.com" />
              </div>
            </div>  
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="2881 Jarvis Street" />
              </div>
            </div>   
            <h6 className="fs-16 fw-medium mb-2">License Details</h6>   
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Card Number <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="DL123456789" />
              </div>
            </div>   
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Date of Issue <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="03 Feb 2014" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>    
            <div className="col-md-4">            
              <div className="mb-3">
                <label className="form-label">Valid Date <span className="text-danger">*</span></label>
                <div className="input-icon-end position-relative">
                  <input type="text" className="form-control datetimepicker" placeholder="02 Feb 2034" />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
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
  <div className="modal fade" id="delete_driver">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Driver</h4>
          <p className="mb-3">Are you sure you want to delete Driver?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="all-drivers"  className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>


  )
}

export default AdminDrivers