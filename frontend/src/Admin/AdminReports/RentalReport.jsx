import React from 'react'
import { Link } from 'react-router-dom'

const RentalReport = () => {
  return (
    <div className="page-wrapper">
  <div className="content me-4">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Rental Reports</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard" >Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Reports</li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="mb-2 me-2">
          <a href="javascript:void(0);" className="btn btn-white d-flex align-items-center"><i className="ti ti-printer me-2" />Print</a>
        </div>
        <div className="mb-2">
          <div className="dropdown">
            <a href="javascript:void(0);" className="btn btn-dark d-inline-flex align-items-center">
              <i className="ti ti-upload me-1" />Export
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Charts */}
    <div className="row">
      {/* Total Earnings */}
      <div className="col-xl-12 d-flex">
        <div className="row flex-fill earnings-report">
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative orange-highlights">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fs-14 fw-normal text-truncate d-block mb-2">Total Bookings</span>
                    <div className="d-flex align-items-center">
                      <h6 className="me-1 fw-semibold">5,450</h6>
                      <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                        Rentals
                        <span className="text-success fs-12 d-flex align-items-center ms-1">
                          <i className="ti ti-arrow-wave-right-up me-1" />+12%
                        </span> 
                      </p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-orange-transparent border border-primary">
                    <i className="text-primary ti ti-bookmarks fs-18" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative success-highlights">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fs-14 fw-normal text-truncate d-block mb-2">Most Rented Car</span>
                    <div className="d-flex align-items-center">
                      <h6 className="me-1 fw-semibold">Toyota (320)</h6>
                      <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                        <span className="text-success fs-12 d-flex align-items-center ms-1">
                          <i className="ti ti-arrow-wave-right-up me-1" />+17.02%
                        </span> 
                      </p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-success-transparent border border-success">
                    <i className="text-success ti ti-car fs-18" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative info-highlights">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fs-14 fw-normal text-truncate d-block mb-2">Revenue Generated</span>
                    <div className="d-flex align-items-center">
                      <h6 className="me-1 fw-semibold">$45,221</h6>
                      <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                        <span className="text-success fs-12 d-flex align-items-center ms-1">
                          <i className="ti ti-arrow-wave-right-up me-1" />+10.13%
                        </span> 
                      </p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-info-transparent border border-info">
                    <i className="text-info ti ti-currency-dollar fs-18" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card flex-fill position-relative danger-highlights">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fs-14 fw-normal text-truncate d-block mb-2">Customer Ratings</span>
                    <div className="d-flex align-items-center">
                      <h6 className="me-1 fw-semibold">4.7<span className="text-gray-5">/5</span></h6>
                      <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                        <span className="text-success fs-12 d-flex align-items-center ms-1">
                          <i className="ti ti-arrow-wave-right-up me-1" />+0.5%
                        </span> 
                      </p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="avatar avatar-md avatar-rounded bg-danger-transparent border border-danger">
                    <i className="text-danger ti ti-star fs-18" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
      {/* Total Earnings */}
      <div className="col-xl-8 d-flex">
        <div className="card flex-fill earnings-chart">
          <div className="card-header border-0 pb-0">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <span className="avatar avatar-md avatar-rounded bg-orange-transparent border-orange me-2"><i className="ti ti-bookmarks fs-14 text-orange" /></span>
                <h5>Total Bookings </h5>
              </div>
              <div className="earning-square d-flex align-items-center">
                <span className="me-2" />
                <p className="fs-12 text-gray-5">Bookings</p>
              </div>
            </div>
          </div>
          <div className="card-body py-0">
            <div id="total-bookings" />
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
      {/* Total Earnings */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill earnings-chart">
          <div className="card-header border-0 pb-0">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <span className="avatar avatar-md avatar-rounded bg-success-transparent border-success me-2"><i className="ti ti-car fs-14 text-success" /></span>
                <h5>Most Rented Car</h5>
              </div>
            </div>
          </div>
          <div className="card-body py-0">
            <div id="chart" />
            <div>
              <ul className="breakdown-reports">
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-danger me-1" />Ford Endeavour</p>
                  <span className="fs-10 text-gray-5">245</span>
                </li>
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-teal me-1" />Ferrari 458 MM</p>
                  <span className="fs-10 text-gray-5">286</span>
                </li>
                <li>
                  <p className="text-gray-9 fs-10 d-flex align-items-center mb-0"><i className="ti ti-point-filled text-warning me-1" />Ford Mustang</p>
                  <span className="fs-10 text-gray-5">135</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
    </div>
    {/* /Charts */}
    {/* Table Header */}
    <div>
      <h5 className="mb-3">Rentals</h5>
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
          <div className="me-2">
            <div className="input-icon-start position-relative topdatepicker">
              <span className="input-icon-addon">
                <i className="ti ti-calendar" />
              </span>
              <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
            </div>
          </div>                     
          <div className="dropdown">
            <a href="#filtercollapse" className="filtercollapse coloumn d-inline-flex align-items-center" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="filtercollapse">
              <i className="ti ti-filter me-1" /> Filter <span className="badge badge-xs rounded-pill bg-danger ms-2">0</span>
            </a>
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
                    <span className="d-inline-flex align-items-center"><i className="ti ti-grip-vertical me-1" />INVOICE NO</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CAR</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />CUSTOMER</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />AMOUNT</span>
                    <div className="form-check form-check-sm form-switch mb-0">
                      <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                    <span><i className="ti ti-grip-vertical me-1" />DATE</span>
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
    </div>
    {/* /Table Header */}
    <div className="collapse" id="filtercollapse">
      <div className="filterbox mb-3 d-flex align-items-center">
        <h6 className="me-3">Filters</h6>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Select Cars
          </a>
          <ul className="dropdown-menu dropdown-menu-lg p-2">
            <li>
              <div className="top-search m-2">
                <div className="top-search-group">
                  <span className="input-icon">
                    <i className="ti ti-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Ford Endeavour
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Ferrari 458 MM
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Ford Mustang 
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Toyota Tacoma 4
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chevrolet Pick Truck
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Etios Carmen
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Acura Sport Version
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Kia Soul 2016
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Chevrolet Camaro
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Toyota Camry SE 350
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            Status
          </a>
          <ul className="dropdown-menu dropdown-menu-lg p-2">
            <li>
              <div className="top-search m-2">
                <div className="top-search-group">
                  <span className="input-icon">
                    <i className="ti ti-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Completed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Confirmed
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />In Rental
              </label>
            </li>
            <li>
              <label className="dropdown-item d-flex align-items-center rounded-1">
                <input className="form-check-input m-0 me-2" type="checkbox" />Rejected
              </label>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0);" className="me-2 text-purple links">Apply</a>
        <a href="javascript:void(0);" className="text-danger links">Clear All</a>
      </div>
    </div>
    {/* Custom Data Table */}
    <div className="custom-datatable-filter table-responsive brandstable country-table">
      <table className="table datatable">
        <thead className="thead-light">
          <tr>
            <th>INVOICE NO</th>
            <th>CAR</th>
            <th>CUSTOMER</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="invoice-details.html">#INV12345</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Ford Endeavour</a>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="customer-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-01.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">Reuben Keen</a>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              $120
            </td>
            <td>
              24 Jan 2025
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>                                                                                                  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12346</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Ferrari 458 MM</a>
                  <span className="fs-13">Convertible</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="company-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-02.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="company-details.html">William Jones</a>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              $85
            </td>
            <td>
              19 Dec 2024
            </td>
            <td>
              <span className="badge badge-soft-warning d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-primary" />Confirmed</span>
            </td>
          </tr>                                                                                          
          <tr>
            <td>
              <a href="invoice-details.html">#INV12347</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Ford Mustang </a>
                  <span className="fs-13">Coupe</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="company-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-03.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="company-details.html">Leonard Jandreau</a>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              $250
            </td>
            <td>
              11 Dec 2024
            </td>
            <td>
              <span className="badge badge-soft-violet d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 " />In Rental</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12348</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Toyota Tacoma 4</a>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="customer-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-04.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">Adam Bolden</a>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              $175
            </td>
            <td>
              29 Nov 2024
            </td>
            <td>
              <span className="badge badge-soft-warning d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-primary" />Confirmed</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12349</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Chevrolet Truck	</a>
                  <span className="fs-13">Sedan</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="company-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-05.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="company-details.html">Harvey Jimenez</a>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              $200
            </td>
            <td>
              03 Nov 2024
            </td>
            <td>
              <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-danger" />Rejected</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12350</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Etios Carmen	</a>
                  <span className="fs-13">Hatchback</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="customer-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-06.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">William Ward</a>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              $90
            </td>
            <td>
              31 Oct 2024
            </td>
            <td>
              <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-success" />Completed</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12351</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Acura Sport </a>
                  <span className="fs-13">Crossover</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="customer-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-07.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">Norman Coleman</a>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              $160
            </td>
            <td>
              15 Oct 2024
            </td>
            <td>
              <span className="badge badge-soft-warning d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 text-primary" />Confirmed</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12352</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Kia Soul 2016</a>
                  <span className="fs-13">Delivery</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="company-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-08.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="company-details.html">Jay Beckman</a>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              $230
            </td>
            <td>
              26 Sep 2024
            </td>
            <td>
              <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1 " />Rejected</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="javascript:void(0);">#INV12353</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">Camaro</a>
                  <span className="fs-13">Station Wagon</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="customer-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-09.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="customer-details.html">Francis Harris</a>
                  <span className="badge bg-secondary-transparent rounded-pill">Client</span>
                </div>
              </div>
            </td>
            <td>
              $230
            </td>
            <td>
              01 Sep 2024
            </td>
            <td>
              <span className="badge badge-soft-danger d-inline-flex align-items-center border-danger badge-sm">
                <i className="ti ti-point-filled me-1 " />Rejected</span>
            </td>
          </tr>  
          <tr>
            <td>
              <a href="invoice-details.html">#INV12354</a>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="car-details.html" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="car-details.html">Toyota Camry</a>
                  <span className="fs-13">Mini Van</span>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <a href="company-details.html" className="avatar avatar-rounded me-2 flex-shrink-0"><img src="/admin-assets/img/customer/customer-10.jpg" alt /></a>
                <div>
                  <a className="d-block fw-semibold" href="company-details.html">Renaldo Labarre</a>
                  <span className="badge bg-violet-transparent rounded-pill">Company</span>
                </div>
              </div>
            </td>
            <td>
              $300
            </td>
            <td>
              15 Aug 2024
            </td>
            <td>
              <span className="badge badge-soft-violet d-inline-flex align-items-center border-violet badge-sm">
                <i className="ti ti-point-filled me-1" />In Rental</span>
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
  </div>			
</div>

  )
}

export default RentalReport