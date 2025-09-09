import React from 'react'
import { Link } from 'react-router-dom'

const AdminCarPricing = () => {
  return (
   <div>
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Seasonal Pricing</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Seasonal Pricing</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_pricing" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Pricing</a>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Table Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <div className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-badge me-1" /> Status
            </a>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Active</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="dropdown-item rounded-1">Inactive</a>
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
              <th>SEASON NAME</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>DAILY RATE</th>
              <th>WEEKLY RATE</th>
              <th>MONTHLY RATE</th>
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
                <a className="fw-semibold" href="#">Halloween</a>
              </td>
              <td><p className="text-gray-9 mb-0">20 Sep 2025</p></td>
              <td><p className="text-gray-9 mb-0">25 Nov 2025</p></td>
              <td><p className="text-gray-9 mb-0">$200</p></td>
              <td><p className="text-gray-9 mb-0">$1400</p></td>
              <td><p className="text-gray-9 mb-0">$4800</p></td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_pricing"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_pricing"><i className="ti ti-trash me-1" />Delete</a>
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
                <a className="fw-semibold" href="#">Easter</a>
              </td>
              <td><p className="text-gray-9 mb-0">01 Jun 2025</p></td>
              <td><p className="text-gray-9 mb-0">15 Aug 2025</p></td>
              <td><p className="text-gray-9 mb-0">$220</p></td>
              <td><p className="text-gray-9 mb-0">$1540</p></td>
              <td><p className="text-gray-9 mb-0">$6160</p></td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_pricing"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_pricing"><i className="ti ti-trash me-1" />Delete</a>
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
                <a className="fw-semibold" href="#">New Year</a>
              </td>
              <td><p className="text-gray-9 mb-0">15 Mar 2025</p></td>
              <td><p className="text-gray-9 mb-0">20 May 2025</p></td>
              <td><p className="text-gray-9 mb-0">$240</p></td>
              <td><p className="text-gray-9 mb-0">$1680</p></td>
              <td><p className="text-gray-9 mb-0">$6720</p></td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_pricing"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_pricing"><i className="ti ti-trash me-1" />Delete</a>
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
                <a className="fw-semibold" href="#">Christmas</a>
              </td>
              <td><p className="text-gray-9 mb-0">01 Dec 2024</p></td>
              <td><p className="text-gray-9 mb-0">10 Jan 2025</p></td>
              <td><p className="text-gray-9 mb-0">$250</p></td>
              <td><p className="text-gray-9 mb-0">$1750</p></td>
              <td><p className="text-gray-9 mb-0">$7000</p></td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_pricing"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_pricing"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>	  
          </tbody>
        </table>
      </div>
      {/* Custom Data Table */}		
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Create Seasonal Pricing */}
  <div className="modal fade" id="add_pricing">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Create Seasonal Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="Car-Pricing">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Season Name <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control" />
                </div>   
              </div>
              <div className="col-md-12">            
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
              <div className="col-md-12">            
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
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " />
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
  {/* /Create Seasonal Pricing */}
  {/* Edit Seasonal Pricing */}
  <div className="modal fade" id="edit_pricing">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form action="Car-Pricing">
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Season Name <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control" defaultValue="Halloween" />
                </div>   
              </div>
              <div className="col-md-12">            
                <div className="mb-3">
                  <label className="form-label">Start Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="28-01-2025" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">            
                <div className="mb-3">
                  <label className="form-label">End Date <span className="text-danger">*</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="02-02-2025" />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={50} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={100} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={150} />
                </div>
              </div>
              <div className="col-md-6">            
                <div className="mb-3">
                  <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
                  <input type="text" className="form-control " defaultValue={200} />
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
  {/* /Edit Seasonal Pricing */}
  {/* Delete Pricing */}
  <div className="modal fade" id="delete_pricing">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Seasonal Pricing</h4>
          <p className="mb-3">Are you sure you want to delete Seasonal Pricing?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Pricing */}
</div>

  )
}

export default AdminCarPricing