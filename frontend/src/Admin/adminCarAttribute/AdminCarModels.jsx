import React from 'react'
import { Link } from 'react-router-dom'

const AdminCarModels = () => {
  return (
  <div>
     <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Models</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard" >Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Models</li>
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
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_model" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Model</a>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Table Header */}
    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
      <div className="top-search me-2">
        <div className="top-search-group">
          <span className="input-icon">
            <i className="ti ti-search" />
          </span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>  
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
            <th>MODEL</th>
            <th>BRAND</th>
            <th>TOTAL CARS</th>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Urban Cruiser</a></h6>
            </td>
            <td>Toyota</td>
            <td>10</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Fortuner</a></h6>
            </td>
            <td>Toyota</td>
            <td>10</td>
            <td>
              <span className="badge badge-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Inactive
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">V8</a></h6>
            </td>
            <td>Audi</td>
            <td>25</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Q3</a></h6>
            </td>
            <td>Audi</td>
            <td>15</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Huracan</a></h6>
            </td>
            <td>Lamborghini</td>
            <td>05</td>
            <td>
              <span className="badge badge-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Inactive
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Sian</a></h6>
            </td>
            <td>Lamborghini</td>
            <td>35</td>
            <td>
              <span className="badge badge-danger-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />Inactive
              </span>
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">X5</a></h6>
            </td>
            <td>BMW</td>
            <td>20</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">XM</a></h6>
            </td>
            <td>BMW</td>
            <td>32</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Sonet</a></h6>
            </td>
            <td>KIA</td>
            <td>20</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
              <h6 className="fw-medium"><a href="javascript:void(0);">Seltos</a></h6>
            </td>
            <td>KIA</td>
            <td>20</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_model"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_model"><i className="ti ti-trash me-1" />Delete</a>
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
 <div>
  {/* Add Brand */}
  <div className="modal fade" id="add_model">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Model</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Model <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>                     
          <div className="mb-3">
            <label className="form-label">Brand <span className="text-danger">*</span></label>
            <select className="select">
              <option>Select</option>
              <option>Toyota</option>
              <option>Audi</option>
              <option>Lamborghini</option>
              <option>BMW</option>
              <option>KIA</option>
              <option>Ferrari</option>
              <option>Honda</option>
              <option>Ford</option>
              <option>Hyundai</option>
              <option>Mercedes-Benz</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Brand */}
  {/* Edit Brand */}
  <div className="modal fade" id="edit_model">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Model</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Model <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="Urban Cruiser" />
          </div>                     
          <div className="mb-3">
            <label className="form-label">Brand <span className="text-danger">*</span></label>
            <select className="select">
              <option>Select</option>
              <option>Toyota</option>
              <option>Audi</option>
              <option selected>Lamborghini</option>
              <option>BMW</option>
              <option>KIA</option>
              <option>Ferrari</option>
              <option>Honda</option>
              <option>Ford</option>
              <option>Hyundai</option>
              <option>Mercedes-Benz</option>
            </select>
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
  {/* /Edit Brand */}
  {/* Delete Brand */}
  <div className="modal fade" id="delete_model">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Model</h4>
          <p className="mb-3">Are you sure you want to delete model?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Brand */}
</div>

  </div>

  )
}

export default AdminCarModels