import React from 'react'
import { Link } from 'react-router-dom'

const AdminFaqCategories = () => {
  return (
 <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">FAQ</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_Category" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add Category</a>
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
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-badge me-1" /> Status
            </a>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Published</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Unpublish</a>
              </li>
            </ul>
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
              <span className="badge badge-xs rounded-pill bg-success me-2">5</span>Category<i className="ti ti-x text-gray-5 ms-1" />
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
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Rental Policies
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Payments
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Insurance
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Rental Policies
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Booking
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Requirements
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Drivers
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                  Pricing
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Rental Policies
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  <input className="form-check-input m-0 me-2" type="checkbox" />
                  Roadside Assistance
                </label>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              Status
            </a>
            <ul className="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  Published
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  Unpublished
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
              <th>CATEGORY</th>
              <th>CREATED DATE</th>
              <th>NUMBER OF QUESTIONS</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Rental Policies</a>
              </td>
              <td>
                <span className="text-gray-9">24 Jan 2025</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">15</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Payments</a>
              </td>
              <td>
                <span className="text-gray-9">19 Dec 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">13</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-danger"><i className="ti ti-point-filled" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Insurance</a>
              </td>
              <td>
                <span className="text-gray-9">11 Dec 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">4</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Rental Policies</a>
              </td>
              <td>
                <span className="text-gray-9">29 Nov 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">9</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Booking</a>
              </td>
              <td>
                <span className="text-gray-9">03 Nov 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">19</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Requirements</a>
              </td>
              <td>
                <span className="text-gray-9">31 Oct 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">17</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Drivers</a>
              </td>
              <td>
                <span className="text-gray-9">15 Oct 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">6</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-danger"><i className="ti ti-point-filled" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Drivers</a>
              </td>
              <td>
                <span className="text-gray-9">26 Sep 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">25</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-danger"><i className="ti ti-point-filled" />Unpublish</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Pricing</a>
              </td>
              <td>
                <span className="text-gray-9">01 Sep 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">18</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Rental Policies</a>
              </td>
              <td>
                <span className="text-gray-9">15 Aug 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">18</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0);" className="fw-medium">Roadside Assistance</a>
              </td>
              <td>
                <span className="text-gray-9">15 Aug 2024</span>
              </td>
              <td>
                <a href="javascript:void(0);" className="fw-medium">22</a>
              </td>
              <td>
                <span className="badge badge-md badge-soft-success"><i className="ti ti-point-filled" />Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_Category"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_Category"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* Add Category */}
  <div className="modal fade" id="add_Category">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Category</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div>
            <label className="form-label">Category <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="all-faq-categories" className="btn btn-primary">Create New</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Category */}
  {/* Edit Category */}
  <div className="modal fade" id="edit_Category">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Category</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div>
            <label className="form-label">Category <span className="text-danger">*</span></label>
            <input type="text" className="form-control" defaultValue="Rental Policies" />
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
              <Link to="all-faq-categories" className="btn btn-primary">Save Changes</Link>
            </div>
          </div>						
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Category */}
  {/* Delete Category */}
  <div className="modal fade" id="delete_Category">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash fs-26" />
          </span>
          <h4 className="mb-1">Delete Category</h4>
          <p className="mb-3">Are you sure you want to delete category?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Category */}
</div>

  )
}

export default AdminFaqCategories