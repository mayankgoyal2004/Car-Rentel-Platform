import React from 'react'
import { Link } from 'react-router-dom'

const AdminCarExtraFeatures = () => {
  return (
 <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Extra Services</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard" >Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Extra Services</li>
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
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_extra_service" className="btn btn-primary d-flex align-items-center"><i className="ti ti-plus me-2" />Add New Extra Service</a>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Table Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
        <div className="d-flex align-items-center flex-wrap row-gap-3">
       
          <div className="me-2">
            <div className="input-icon-start position-relative topdatepicker">
              <span className="input-icon-addon">
                <i className="ti ti-calendar" />
              </span>
              <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
            </div>
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
           
            <div className="dropdown-menu dropdown-menu-lg p-2">
              <ul>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />NAME</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />PRICE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />TYPE</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />NO OF CARS</span>
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
              <th>NAME</th>
              <th>PRICE</th>
              <th>TYPE</th>
              <th>NO OF CARS</th>
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
                <h6 className="fw-medium"><a href="javascript:void(0);">Child Seats</a></h6>
              </td>
              <td>$120</td>
              <td>One Time</td>
              <td>
                <div className="d-inline-flex gap-2 align-items-center">
                  12
                  <a href="javascript:void(0);" className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1" data-bs-toggle="modal" data-bs-target="#cars_list"><i className="ti ti-external-link" /></a>
                </div>
              </td>
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
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_extra_services"><i className="ti ti-edit me-1" />Edit</a>
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
  {/* /Page Wrapper */}
  {/* Add Extra Service */}
  <div className="modal fade" id="add_extra_service">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Extra Service</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 row">
            <div className="col-lg-6">
              <label className="form-label">Quantity <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-6">
              <label className="form-label">Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Type <span className="text-danger">*</span></label>
            <select className="select">
              <option value>Select</option>
              <option value>One Time</option>
              <option value>Per Day</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Description <span className="text-danger">*</span></label>							
            <textarea className="form-control" defaultValue={""} />
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
  {/* /Add Extra Service */}
  {/* Edit Extra Service */}
  <div className="modal fade" id="edit_extra_services">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Service</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" defaultValue="Camping Equipment" />
          </div>
          <div className="mb-3 row">
            <div className="col-lg-6">
              <label className="form-label">Quantity <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={12} />
            </div>
            <div className="col-lg-6">
              <label className="form-label">Price <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="$120" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Type <span className="text-danger">*</span></label>
            <select className="select">
              <option value>One Time</option>
              <option value>Per Day</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Description <span className="text-danger">*</span></label>							
            <textarea className="form-control" defaultValue={""} />
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
  {/* /Edit Extra Service */}
  {/* Delete Extra Service */}
  <div className="modal fade" id="delete_extra_services">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Extra Service</h4>
          <p className="mb-3">Are you sure you want to delete extra service?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Extra Service */}
  {/* Cars List */}
  <div className="modal fade" id="cars_list">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Cars</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex gap-3">
            <div className="w-100">
              <div className="top-search">
                <div className="top-search-group">
                  <span className="input-icon">
                    <i className="ti ti-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <a href="#filtercollapsepopup" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapsepopup">
                  <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
                </a>
              </div>
            </div>
          </div>
          <div className="collapse mt-3" id="filtercollapsepopup">
            <div className="filterbox mb-3 d-flex align-items-center">
              <h6 className="me-3">Filters</h6>
              <div className="dropdown me-2">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Select Brand
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Ferrari</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Toyota</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">KIA</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Chevrolet</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Select Type
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Sedan</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Coupe</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Mini Van</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Crossover</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Sports</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Select Model
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Mustang</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Ford Endeavour</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-3">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Select Color
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Black</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Red</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">White</a>
                  </li>
                </ul>
              </div>
              <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
              <a href="javascript:void(0);" className="text-danger links">Clear All</a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt="img" /></div>
                    <div>
                      <h6>Ford Endeavour</h6>
                      <p className="mb-0 fs-13">Sedan</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" alt="img" /></div>
                    <div>
                      <h6>Ferrari 458 MM</h6>
                      <p className="mb-0 fs-13">Convertible</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" alt="img" /></div>
                    <div>
                      <h6>Ford Mustang </h6>
                      <p className="mb-0 fs-13">Coupe</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt="img" /></div>
                    <div>
                      <h6>Toyota Tacoma 4</h6>
                      <p className="mb-0 fs-13">Hatchback</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" alt="img" /></div>
                    <div>
                      <h6>Chevrolet Pick Truck</h6>
                      <p className="mb-0 fs-13">Mini Van</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt="img" /></div>
                    <div>
                      <h6>Etios Carmen</h6>
                      <p className="mb-0 fs-13">Hatchback</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt="img" /></div>
                    <div>
                      <h6>Acura Sport Version</h6>
                      <p className="mb-0 fs-13">Crossover</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" alt="img" /></div>
                    <div>
                      <h6>Kia Soul 2016</h6>
                      <p className="mb-0 fs-13">SUV</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" alt="img" /></div>
                    <div>
                      <h6>Chevrolet Camaro</h6>
                      <p className="mb-0 fs-13">Sport</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center w-100 rounded-2 border p-3">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" alt="img" /></div>
                    <div>
                      <h6>Toyota Camry SE 350</h6>
                      <p className="mb-0 fs-13">Sedan</p>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-check-md mb-0 ms-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Cars List */}
</div>

  )
}

export default AdminCarExtraFeatures