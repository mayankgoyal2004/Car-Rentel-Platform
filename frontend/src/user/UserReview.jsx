import React from 'react'

const UserReview = () => {
  return (
  <div className="content">
  <div className="container">			
    {/* Sort By */}
    <div className="row">
      <div className="col-lg-12">
        <div className="sorting-info">
          <div className="row">
            <div className="col-md-12">
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
                      <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#custom_date">
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
    <div className="row">
      {/* Reviews */}
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">	
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>All Reviews <span>40</span></h4>	
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
                    <th>Car Name</th>
                    <th>Rental Type</th>
                    <th>Review</th>
                    <th>Ratings</th>
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-04.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Ferrari 458 MM Speciale</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Hourly</p>
                    </td>
                    <td>
                      <p>The car arrived early &amp; the rep was courteous and polite.</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star-half-stroke filled" />
                        <span>(4.5)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-01.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Toyota Camry SE 350</a>
                          <p>Self Pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Day</p>
                    </td>
                    <td>
                      <p>The car was a lovely car to drive no problem with it all.</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span>(4.0)</span>
                      </div>
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-05.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Kia Soul 2016</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Weekly</p>
                    </td>
                    <td>
                      <p>Experience was great travelling wih Dreams Rental</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(5.0)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-03.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Audi A3 2019 new</a>
                          <p>Self Pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Monthly</p>
                    </td>
                    <td>
                      <p>Best service with good price, nice vehicle overall very good</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(5.0)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-05.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">2018 Chevrolet Camaro</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Day</p>
                    </td>
                    <td>
                      <p>Smooth process, modern vehicle &amp; fair price - great rental experience</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(5.0)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-06.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Acura Sport Version</a>
                          <p>Sel pickup</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Hourly</p>
                    </td>
                    <td>
                      <p>Excellent service, clean car &amp; smooth pickup &amp; drop-off process</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(5.0)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
                    <td>
                      <div className="table-avatar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_review" className="avatar avatar-lg flex-shrink-0">
                          <img className="avatar-img" src="/user-assets/img/cars/car-08.jpg" alt="Booking" />
                        </a>
                        <div className="table-head-name flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#add_review">Toyota Tacoma 4WD</a>
                          <p>Delivery</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Monthly</p>
                    </td>
                    <td>
                      <p>Quick &amp; easy rental and also fair price for what you get</p>
                    </td>
                    <td>
                      <div className="review-rating">							
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span>(4.0)</span>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-ellipsis-vertical" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">
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
      {/* /Reviews */}
    </div>				
  </div>			
</div>

  )
}

export default UserReview