import React from 'react'
import { Link } from 'react-router-dom'

const UserBookingCancelled = () => {
  return (
    <div className="row">
  {/* Cancelled */}
  <div className="col-lg-12 d-flex">
    <div className="card book-card flex-fill mb-0">
      <div className="card-header">	
        <div className="row align-items-center">
          <div className="col-md-5">
            <h4>Cancelled <span>40</span></h4>	
          </div>
          <div className="col-md-7 text-md-end">
            <div className="table-search">
              <div id="tablefilter" />										
              <Link to="/listing" className="btn btn-add"><i className="feather-plus-circle" />Add Booking</Link>	
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
                <th>Rental Type</th>
                <th>Pickup / Delivery Location</th>
                <th>Dropoff Location</th>
                <th>Booked On</th>
                <th>Total</th>
                <th>Cancelled By</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> 
                  </label>
                </td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#cancelled_booking">#1001</a></td>
                <td>
                  <div className="table-avatar">
                    <a href="#" className="avatar avatar-lg flex-shrink-0">
                      <img className="avatar-img" src="/user-assets/img/cars/car-04.jpg" alt="Booking" />
                    </a>
                    <div className="table-head-name flex-grow-1">
                      <a href="#">Ferrari 458 MM Speciale</a>
                      <p>Delivery</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Hourly</p>
                </td>
                <td>
                  <p>45, Avenue ,Mark Street, <span className="d-block">USA 15 Sep 2023, 09:30 AM</span></p>
                </td>
                <td>
                  <p>21, Avenue, Windham,  <span className="d-block">USA 15 Sep 2023, 11:30 AM</span></p>
                </td>
                <td>
                  <p>15 Sep 2023, 09:00 AM</p>
                </td>
                <td>
                  <p className="text-darker">$300</p>
                </td>
                <td>
                  <p className="text-darker">User</p>
                </td>
                <td>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#cancel_reason" className="reason-link"><i className="fa-regular fa-note-sticky" /></a>
                </td>
                <td>
                  <span className="badge badge-light-danger">Refund Started</span>
                </td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#cancelled_booking">
                        <i className="feather-eye" /> View
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
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> 
                  </label>
                </td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#cancelled_booking">#1006</a></td>
                <td>
                  <div className="table-avatar">
                    <a href="#" className="avatar avatar-lg flex-shrink-0">
                      <img className="avatar-img" src="/user-assets/img/cars/car-06.jpg" alt="Booking" />
                    </a>
                    <div className="table-head-name flex-grow-1">
                      <a href="#">Acura Sport Version</a>
                      <p>Sel pickup</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Hourly</p>
                </td>
                <td>
                  <p>78 Cityview Drive, Glenolden <span className="d-block">24 Nov 2023, 06:40 AM</span></p>
                </td>
                <td>
                  <p>66 Ottis Street, Shawnee <span className="d-block">24 Nov 2023, 08:40 AM</span></p>
                </td>
                <td>
                  <p>24 Oct 2023, 05:40 PM</p>
                </td>
                <td>
                  <p className="text-darker">$250</p>
                </td>
                <td>
                  <p className="text-darker">Admin</p>
                </td>
                <td>
                  <a href="#" className="reason-link"><i className="fa-regular fa-note-sticky" /></a>
                </td>
                <td>
                  <span className="badge badge-light-danger">Cancelled</span>
                </td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#cancelled_booking">
                        <i className="feather-eye" /> View
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
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> 
                  </label>
                </td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#cancelled_booking">#1007</a></td>
                <td>
                  <div className="table-avatar">
                    <a href="#" className="avatar avatar-lg flex-shrink-0">
                      <img className="avatar-img" src="/user-assets/img/cars/car-08.jpg" alt="Booking" />
                    </a>
                    <div className="table-head-name flex-grow-1">
                      <a href="#">Toyota Tacoma 4WD</a>
                      <p>Delivery</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Monthly</p>
                </td>
                <td>
                  <p>41 Duke Lane, Branchburg <span className="d-block">15 Dec 2023, 04:30 PM</span></p>
                </td>
                <td>
                  <p>80 Glory Road, Nashville <span className="d-block">15 Jan 2024, 04:30 PM</span></p>
                </td>
                <td>
                  <p>02 Nov 2023, 07:30 AM</p>
                </td>
                <td>
                  <p className="text-darker">$1000</p>
                </td>
                <td>
                  <p className="text-darker">User</p>
                </td>
                <td>
                  <a href="#" className="reason-link"><i className="fa-regular fa-note-sticky" /></a>
                </td>
                <td>
                  <span className="badge badge-light-danger">Refund Completed</span>
                </td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#cancelled_booking">
                        <i className="feather-eye" /> View
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
  {/* /Cancelled */}
</div>

  )
}

export default UserBookingCancelled