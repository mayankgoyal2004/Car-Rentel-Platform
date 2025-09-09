import React from 'react'
import { Link } from 'react-router-dom'

const AdminLocationCountries = () => {
  return (
    	<div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Countries</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Locations</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="mb-2 me-2">
            <a href="javascript:void(0);" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_countries"><i className="ti ti-plus me-2" />Add Country</a>
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
            <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-badge me-1" /> Status
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
      <div className="custom-datatable-filter table-responsive brandstable country-table">
        <table className="table datatable">
          <thead className="thead-light">
            <tr>
              <th>REVIEW</th>
              <th>CREATED DATE </th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/us.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">United States</p>
                </div>
              </td>
              <td>
                US
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/ca.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">Canada</p>
                </div>
              </td>
              <td>
                CA
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/uk.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">United Kingdom</p>
                </div>
              </td>
              <td>
                UK
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/de.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">Germany</p>
                </div>
              </td>
              <td>
                DE
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/fr.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">France</p>
                </div>
              </td>
              <td>
                FR
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/ar.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">Argentina</p>
                </div>
              </td>
              <td>
                AR
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/in.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">India</p>
                </div>
              </td>
              <td>
                IN
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-danger" />Inactive</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/it.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">Italy</p>
                </div>
              </td>
              <td>
                IT
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/nz.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">New Zealand</p>
                </div>
              </td>
              <td>
                IT
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
            <tr>
              <td>
                <div className="d-flex align-items-center flag-image">
                  <img src="/admin-assets/img/flags/au.png" className="img-fluid me-2" alt="image" />
                  <p className="text-gray-9">Australia</p>
                </div>
              </td>
              <td>
                AU
              </td>
              <td>
                <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1 text-success" />Active</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_country"><i className="ti ti-edit me-1" />Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_country"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                                                                  
          </tbody>
        </table>
      </div>
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* Add countries */}
  <div className="modal fade" id="add_countries">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Country</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Country Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>                     
          <div className="mb-3">
            <label className="form-label">Country Code <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>  					
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/admin-dashboard/location-countries"className="btn btn-primary">Create New</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add countries */}
  {/* Edit countries */}
  <div className="modal fade" id="edit_country">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Country</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Country Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" defaultValue="United States" />
          </div>                     
          <div className="mb-3">
            <label className="form-label">Country Code <span className="text-danger">*</span></label>
            <input type="text" className="form-control" defaultValue="US" />
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
              <Link to="/admin-dashboard/location-countries" className="btn btn-primary">Save Changes</Link>
            </div>
          </div>						
        </div>
      </div>
    </div>
  </div>
  {/* /Edit countries */}     
  {/* Delete Modal  */}
  <div className="modal fade" id="delete_country">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Country</h4>
          <p className="mb-3">Are you sure you want to delete Country?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="/admin-dashboard/location-countries" className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal*/}
</div>

  )
}

export default AdminLocationCountries