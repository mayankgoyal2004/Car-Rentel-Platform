import React from 'react'

const AdminCompaniesDetails = () => {
  return (
  <div>
  <div className="page-wrapper">
    <div className="content me-0">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mb-3">
            <a href="customers-companies.html" className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-left me-1" />Company</a>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Basic Details</h5>
              </div>
              <div className="d-flex align-items-center">
                <span className="avatar avatar-lg me-3">
                  <img src="/admin-assets/img/companies/company-11.png" className="rounded-2" alt="img" />
                </span>
                <div>
                  <h6 className="mb-1">Company Solutions</h6>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-2">Added On : 15 May 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 mb-xl-0">
            <div className="card-header py-0">
              <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                <li className="nav-item">
                  <a className="nav-link active" href="#car-info" data-bs-toggle="tab">Overview</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-price" data-bs-toggle="tab">Recent Rents</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#car-service" data-bs-toggle="tab">History</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                {/* Overview */}
                <div className="tab-pane fade active show" id="car-info">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Contact Person</h6>
                          <p className="fs-13">Andrew Simons</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Website</h6>
                          <p className="fs-13">www.example.com</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Language</h6>
                          <p className="fs-13">English, French</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Phone Number</h6>
                          <p className="fs-13">+1 45565 21212</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Email</h6>
                          <p className="fs-13"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="364044424f0e020f76534e575b465a531855595b">[email&nbsp;protected]</a></p>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Address</h6>
                          <p className="fs-13">25, West side Street, Las Vegas, California, USA, 56545</p>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Notes</h6>
                          <p className="fs-13">Please inspect the vehicle before returning to avoid any additional charges for damages.</p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <a href="#" className="link-violet text-decoration-underline fw-medium" data-bs-toggle="modal" data-bs-target="#edit_company">Edit</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Documents</h6>
                      <a href="#" className="link-default"><i className="ti ti-edit" /></a>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-4">
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium">company_registration.pdf</h6>
                          <p className="fs-13">24.45 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Overview */}
                {/* Recent Rents */}
                <div className="tab-pane fade" id="car-price">
                  <div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row gy-3 align-items-center">
                          <div className="col-lg-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img src="/admin-assets/img/car/car-06.jpg" alt />
                                  </span>
                                  <div>
                                    <a href="car-details.html" className="text-info">#BR3466</a>
                                    <h6 className="fs-14">Etios Carmen</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Booked on</h6>
                                  <p>15 Jan 2025, 05:30 PM</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Amount</h6>
                                  <p>$145</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex align-items-center icon-list justify-content-end">
                              <a href="invoice-details.html" className="edit-icon me-2"><i className="ti ti-eye" /></a>
                              <a href="#" className="edit-icon"><i className="ti ti-download" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row gy-3 align-items-center">
                          <div className="col-lg-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img src="/admin-assets/img/car/car-02.jpg" alt />
                                  </span>
                                  <div>
                                    <a href="car-details.html" className="text-info">#BR3467</a>
                                    <h6 className="fs-14">Ferrari 458 MM</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Booked on</h6>
                                  <p>25 Jan 2025, 02:00 PM</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Amount</h6>
                                  <p>$800</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex align-items-center icon-list justify-content-end">
                              <a href="invoice-details.html" className="edit-icon me-2"><i className="ti ti-eye" /></a>
                              <a href="#" className="edit-icon"><i className="ti ti-download" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row gy-3 align-items-center">
                          <div className="col-lg-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img src="/admin-assets/img/car/car-04.jpg" alt />
                                  </span>
                                  <div>
                                    <a href="car-details.html" className="text-info">#BR3468</a>
                                    <h6 className="fs-14">Toyota Tacoma 4</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Booked on</h6>
                                  <p>31 Jan 2025, 04:00 PM</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Amount</h6>
                                  <p>$145</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex align-items-center icon-list justify-content-end">
                              <a href="invoice-details.html" className="edit-icon me-2"><i className="ti ti-eye" /></a>
                              <a href="#" className="edit-icon"><i className="ti ti-download" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row gy-3 align-items-center">
                          <div className="col-lg-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img src="/admin-assets/img/car/car-05.jpg" alt />
                                  </span>
                                  <div>
                                    <a href="car-details.html" className="text-info">#BR3469</a>
                                    <h6 className="fs-14">Chevrolet Truck</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Booked on</h6>
                                  <p>25 Dec 2024, 06:00 PM</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Amount</h6>
                                  <p>$145</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex align-items-center icon-list justify-content-end">
                              <a href="invoice-details.html" className="edit-icon me-2"><i className="ti ti-eye" /></a>
                              <a href="#" className="edit-icon"><i className="ti ti-download" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="row gy-3 align-items-center">
                          <div className="col-lg-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img src="/admin-assets/img/car/car-10.jpg" alt />
                                  </span>
                                  <div>
                                    <a href="car-details.html" className="text-info">#BR3470</a>
                                    <h6 className="fs-14">Toyota Camry</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Booked on</h6>
                                  <p>15 Jan 2025, 05:30 PM</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <h6 className="fs-14 mb-1">Amount</h6>
                                  <p>$145</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex align-items-center icon-list justify-content-end">
                              <a href="invoice-details.html" className="edit-icon me-2"><i className="ti ti-eye" /></a>
                              <a href="#" className="edit-icon"><i className="ti ti-download" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Recent Rents */}
                {/* History */}
                <div className="tab-pane fade" id="car-service">
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">24</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Return Day</h6>
                        <span className="fs-13">12:45 PM</span>
                      </div>
                      <span className="fs-13">Return of keys and completion of the return process.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">24</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Return Day</h6>
                        <span className="fs-13">12:30 PM</span>
                      </div>
                      <span className="fs-13">Fuel check and final inspection.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">24</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Return Day</h6>
                        <span className="fs-13">12:15 PM</span>
                      </div>
                      <span className="fs-13">Vehicle inspection for any damages or missing items.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">24</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Return Day</h6>
                        <span className="fs-13">12:00 PM</span>
                      </div>
                      <span className="fs-13">Customer arrives at Cityville Airport, 567 Airport Rd, Cityville for car return.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">23</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                        <span className="fs-13">9:45 AM</span>
                      </div>
                      <span className="fs-13">Departure from rental location.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">23</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                        <span className="fs-13">9:30 AM</span>
                      </div>
                      <span className="fs-13">Customer receives the keys for a Toyota Corolla, completes payment for the rental.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-2 pb-2 border-bottom">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">23</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                        <span className="fs-13">9:15 AM</span>
                      </div>
                      <span className="fs-13">Vehicle inspection and contract signing.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                      <h5 className="mb-2">23</h5>
                      <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">Feb, 2025</span>
                    </div>
                    <div className="flex-fill">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-semibold">Pick-Up Day</h6>
                        <span className="fs-13">9:00 AM</span>
                      </div>
                      <span className="fs-13">Customer arrives at Downtown Rental Center, 123 Main St, Cityville.</span>
                    </div>
                  </div>
                </div>
                {/* /History */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Edit Company */}
  <div className="modal fade addmodal" id="edit_company">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Company</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">Image <span className="text-danger">*</span></label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <img src="/admin-assets/img/companies/Toyota.jpg" className="img-fluid rounded" alt="img" />
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
                <label className="form-label">Company Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="TechNova Solutions" />
              </div>
            </div>  
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Contact Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Andrew Simons" />
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
                <input className="form-control" type="text" defaultValue="andr72@example.com" />
              </div>
            </div>   
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Language <span className="text-danger">*</span></label>
                <select className="select">
                  <option>Select</option>
                  <option selected>English</option>
                  <option>German</option>
                  <option>Frence</option>
                </select>
              </div>
            </div>          
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Website <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="https://www.example.com" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input className="form-control" type="text" defaultValue="2881 Jarvis Street" />
              </div>
            </div>   
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" defaultValue={""} />
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
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>

  )
}

export default AdminCompaniesDetails