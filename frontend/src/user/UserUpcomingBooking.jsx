import React from 'react'
import { Link } from 'react-router-dom'

const UserUpcomingBooking = () => {
  return (
<div className="content">
  <div className="container">
   
    <div className="row">
      {/* Upcooming Booking */}
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">	
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>Upcoming <span>40</span></h4>	
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
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#upcoming_booking">#1001</a></td>
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
                      <span className="badge badge-light-secondary">Upcoming</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#upcoming_booking">
                            <i className="feather-eye" /> View
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_booking">
                            <i className="feather-edit-3" /> Edit
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
                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#upcoming_booking">#1007</a></td>
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
                      <span className="badge badge-light-secondary">Upcoming</span>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#upcoming_booking">
                            <i className="feather-eye" /> View
                          </a>
                          <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit_booking">
                            <i className="feather-edit-3" /> Edit
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
      {/* /Upcooming Booking */}
    </div>	
  </div>			
</div>

  )
}

export default UserUpcomingBooking