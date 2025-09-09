import React from 'react'

const UserPayment = () => {
  return (
   		<div className="content">
  <div className="container">
    {/* Content Header */}
    <div className="content-header">
      <h4>Payments</h4>
    </div>
    {/* /Content Header */}
    {/* Sort By */}
    <div className="row">
      <div className="col-lg-12">
        <div className="sorting-info">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <div className="filter-group">
                <div className="sort-week sort">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      This Week <i className="fas fa-chevron-down" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Week
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        This Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 30 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Custom
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sort-relevance sort">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By Relevance <i className="fas fa-chevron-down" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);">
                        Sort By Relevance
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Sort By Ascending
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Sort By Descending
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Sort By Alphabet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sort By */}
    {/* Payments Table */}
    <div className="row">
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">	
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>All Payments <span>40</span></h4>	
              </div>
              <div className="col-md-7 text-md-end">
                <div className="table-search">
                  <div id="tablefilter" className="me-0" />										
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">	
            <div className="table-responsive dashboard-table">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" />
                      </label>
                    </th>
                    <th>Booking ID</th>
                    <th>Car Name</th>
                    <th>Paid on</th>
                    <th>Total</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1001</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-04.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Ferrari 458 MM Speciale</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>15 Sep 2023, 09:30 AM</td>
                    <td><p className="text-darker">$300</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Wallet</span>
                    </td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1002</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-01.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Toyota Camry SE 350</a>
                          <p>Self Pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>23 Oct 2023, 12:00 PM</td>
                    <td><p className="text-darker">$500</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Paypal</span>
                    </td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1003</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-02.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Kia Soul 2016</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>02 Nov 2023, 10:30 AM</td>
                    <td><p className="text-darker">$600</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Stripe</span>
                    </td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1004</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-03.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Audi A3 2019 new</a>
                          <p>Self Pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>18 Dec 2023, 02:30 PM</td>
                    <td><p className="text-darker">$1500</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Stripe</span>
                    </td>
                    <td>
                      <span className="badge badge-light-warning">Pending</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1005</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-05.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">2018 Chevrolet Camaro</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>05 Jan 2024, 08:00 AM</td>
                    <td><p className="text-darker">$450</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Wallet</span>
                    </td>
                    <td>
                      <span className="badge badge-light-danger">Failed</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1006</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-06.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Acura Sport Version</a>
                          <p>Self Pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>20 Feb 2024, 11:30 PM</td>
                    <td><p className="text-darker">$250</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Stripe</span>
                    </td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="reference" />
                        <span className="checkmark" /> 
                      </label>
                    </td>
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_invoice">#1007</a></td>
                    <td>
                      <div className="table-avatar">
                        <a href="javascript:void(0);" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-08.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);">Toyota Tacoma 4WD</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>12 Mar 2024, 10:00 PM</td>
                    <td><p className="text-darker">$1000</p></td>
                    <td>
                      <span className="badge badge-light-secondary">Paypal</span>
                    </td>
                    <td>
                      <span className="badge badge-light-warning">Pending</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">
                            <i className="feather-file-plus" /> View Invoice
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <i className="feather-trash-2" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>	
            <div className="table-footer">
              <div className="row">
                <div className="col-md-6">
                  <div id="tablelength" />
                </div>
                <div className="col-md-6 text-md-end">
                  <div id="tablepage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Payments Table */}
  </div>
</div>

  )
}

export default UserPayment