import React from 'react'
import { Link } from 'react-router-dom'

const AdminContactMessage = () => {
  return (
  <div>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Contact Messages</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contact Messages</li>
            </ol>
          </nav>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />FROM</span>
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
                    <span><i className="ti ti-grip-vertical me-1" />EMAIL</span>
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
                    <span><i className="ti ti-grip-vertical me-1" />MESSAGE</span>
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
              <th>FROM</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>CREATED DATE</th>
              <th>MESSAGE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Andrew Simons</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+1 555 123 4567</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="02636c6670677542677a636f726e672c616d6f">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">24 Jan 2025</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-21.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">David Steiger</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+44 7911 123456</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8aeeebfce3eecaeff2ebe7fae6efa4e9e5e7">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">19 Dec 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Virginia Phu</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+33 612 345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6a1a021f2a0f120b071a060f44090507">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">11 Dec 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-22.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Walter Hartmann</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+61 412 345 678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2b5c4a475f4e596b4e534a465b474e05484446">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-27.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Andrea Jermaine</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+91 98765 43210</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d8b2bdaab5b9b1b6bd98bda0b9b5a8b4bdf6bbb7b5">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">03 Nov 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-05.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Dennis Eckhardt</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+49 171 2345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f5b5a5151564c7f5a475e524f535a115c5052">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">31 Oct 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-25.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Lan Adams</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+81 90 1234 5678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6d010c032d08150c001d0108430e0200">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">15 Oct 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-28.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Ann Crump</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+34 612 345678</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="026170776f7242677a636f726e672c616d6f">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">26 Sep 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-07.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Julie Black</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+55 1987654321</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bad0cfd6d3dffadfc2dbd7cad6df94d9d5d7">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">01 Sep 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <a href="car-details" className="avatar me-2 flex-shrink-0">
                    <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt />
                  </a>
                  <h6><a href="#javascript:void(0);" className="fs-14 fw-semibold">Jean Walker</a></h6>
                </div>
              </td>
              <td>
                <p className="text-gray-9">+27 82 12364567</p>
              </td>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2c46494d426c49544d415c4049024f4341">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">15 Aug 2024</p>
              </td>
              <td>
                <span className="avatar avatar-md bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hi, I booked a car but haven't received a confirmation email. Can you check?">
                  <i className="ti ti-file-invoice text-gray-9" />
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash me-1" />Delete</a>
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
  {/* /Main Wrapper */}
  {/* Delete  */}
  <div className="modal fade" id="delete_contact">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Message</h4>
          <p className="mb-3">Are you sure you want to delete message?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="contact-message" className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>

  )
}

export default AdminContactMessage