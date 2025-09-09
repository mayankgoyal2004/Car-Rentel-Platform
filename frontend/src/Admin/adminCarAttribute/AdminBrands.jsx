import React from 'react'
import { Link } from 'react-router-dom'

const AdminBrands = () => {
  return (
    <div>
<div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Brands</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard" >Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Brands</li>
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
          <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_brand" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Brand</a>
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
            <th>NAME</th>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/toyota.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Toyota</a></h6>
                </div>
              </div>
            </td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/audi.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Audi</a></h6>
                </div>
              </div>
            </td>
            <td>15</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/lamborghini.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Lamborghini</a></h6>
                </div>
              </div>
            </td>
            <td>45</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/bmw.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">BMW</a></h6>
                </div>
              </div>
            </td>
            <td>30</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/ferrari.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Ferrari</a></h6>
                </div>
              </div>
            </td>
            <td>45</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/honda.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Honda</a></h6>
                </div>
              </div>
            </td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/ford.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Ford</a></h6>
                </div>
              </div>
            </td>
            <td>22</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/kia-new.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">KIA</a></h6>
                </div>
              </div>
            </td>
            <td>22</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/hyundai.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Hyundai</a></h6>
                </div>
              </div>
            </td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
              <div className="d-flex align-items-center file-name-icon">
                <a href="javascript:void(0);" className="avatar avatar-lg border">
                  <img src="/admin-assets/img/brands/benz.svg" className="img-fluid" alt="brands" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-medium"><a href="javascript:void(0);">Mercedes-Benz</a></h6>
                </div>
              </div>
            </td>
            <td>40</td>
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
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_brand"><i className="ti ti-edit me-1" />Edit</a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_brand"><i className="ti ti-trash me-1" />Delete</a>
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
  <div className="modal fade" id="add_brand">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Brand</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Brand Image <span className="text-danger">*</span></label>							
            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">                                                
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
          <div className="mb-3">
            <label className="form-label">Brand Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
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
  <div className="modal fade" id="edit_brand">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Brand</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Brand Image <span className="text-danger">*</span></label>							
            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">                                                
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                <img src="/admin-assets/img/brands/toyota.svg" className="upload-img img-fluid" alt="brands" />
                <a href="javascript:void(0);" className="upload-img-trash btn btn-sm btn-danger-light rounded-circle">
                  <i className="ti ti-trash fs-12" />
                </a>
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
          <div className="mb-3">
            <label className="form-label">Brand Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="Toyota" />
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
  <div className="modal fade" id="delete_brand">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Brand</h4>
          <p className="mb-3">Are you sure you want to delete brand?</p>
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

export default AdminBrands