import React from 'react'
import { Link } from 'react-router-dom'

const UserBookingInProgress = () => {
  return (
  <div className="row">
  {/* Inprogress */}
  <div className="col-lg-12 d-flex">
    <div className="card book-card flex-fill mb-0">
      <div className="card-header">	
        <div className="row align-items-center">
          <div className="col-md-5">
            <h4>Inprogress <span>40</span></h4>	
          </div>
          <div className="col-md-7 text-md-end">
            <div className="table-search">
              <div id="tablefilter" />										
              <Link to="/listing"  className="btn btn-add"><i className="feather-plus-circle" />Add Booking</Link>	
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
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#inprogress_booking">#1002</a></td>
                <td>
                  <div className="table-avatar">
                    <a href="#" className="avatar avatar-lg flex-shrink-0">
                      <img className="avatar-img" src="/user-assets/img/cars/car-01.jpg" alt="Booking" />
                    </a>
                    <div className="table-head-name flex-grow-1">
                      <a href="#">Toyota Camry SE 350</a>
                      <p>Self Pickup</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Day</p>
                </td>
                <td>
                  <p>1646 West St, Grand Rapids <span className="d-block">18 Sep 2023, 09:00 AM</span></p>
                </td>
                <td>
                  <p>26 Platinum Drive, Canonsburg<span className="d-block">15 Sep 2023, 11:30 AM</span></p>
                </td>
                <td>
                  <p>18 Sep 2023, 08:10 PM</p>
                </td>
                <td>
                  <p className="text-darker">$500</p>
                </td>
                <td>
                  <span className="badge badge-light-warning">Inprogress</span>
                </td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#inprogress_booking">
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
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#inprogress_booking">#1004</a></td>
                <td>
                  <div className="table-avatar">
                    <a href="#" className="avatar avatar-lg flex-shrink-0">
                      <img className="avatar-img" src="/user-assets/img/cars/car-03.jpg" alt="Booking" />
                    </a>
                    <div className="table-head-name flex-grow-1">
                      <a href="#">Audi A3 2019 new</a>
                      <p>Self Pickup</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Monthly</p>
                </td>
                <td>
                  <p>63 White Pine Lane, Martinsville <span className="d-block">05 Nov 2023, 02:30 PM</span></p>
                </td>
                <td>
                  <p>14 Roane Avenue, Herndon <span className="d-block">05 Dec 2023, 02:30 PM</span></p>
                </td>
                <td>
                  <p>04 Oct 2023, 08:00 AM</p>
                </td>
                <td>
                  <p className="text-darker">$1500</p>
                </td>
                <td>
                  <span className="badge badge-light-warning">Inprogress</span>
                </td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#inprogress_booking">
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
  {/* /Inprogress */}
</div>

  )
}

export default UserBookingInProgress