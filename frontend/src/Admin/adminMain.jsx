import React from 'react'
import { Link } from 'react-router-dom'

const adminMain = () => {
  return (
  <div className="page-wrapper">
  <div className="content pb-0">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Dashboard</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Admin Dashboard</li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="input-icon-start position-relative topdatepicker mb-2">
          <span className="input-icon-addon">
            <i className="ti ti-calendar" />
          </span>
          <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="row">
      <div className="col-xl-8 d-flex flex-column">
        {/* Welcome Wrap */}
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row align-items-center row-gap-3">
              <div className="col-sm-7">
                <h4 className="mb-1">Welcome, Andrew </h4>
                <p>400+ Budget Friendly Cars Available for the rents </p>
                <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                  <div>
                    <p className="mb-1">Total No of Cars</p>
                    <h3>564</h3>
                  </div>
                  <div>
                    <p className="d-flex align-items-center mb-2"><span className="line-icon bg-violet me-2" /><span className="fw-semibold text-gray-9 me-1">80</span>In Rental</p>
                    <p className="d-flex align-items-center"><span className="line-icon bg-orange me-2" /><span className="fw-semibold text-gray-9 me-1">96</span> Upcoming</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link to="all-reservation" className="btn btn-primary d-flex align-items-center"><i className="ti ti-eye me-1" />Reservations</Link>
                  <Link to="add-car" className="btn btn-dark d-flex align-items-center"><i className="ti ti-plus me-1" />Add New Car</Link>
                </div>
              </div>
              <div className="col-sm-5">
                <img src="/admin-assets/img/icons/car.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
        {/* /Welcome Wrap */}
        <div className="row">
          {/* Total Reservations */}
          <div className="col-md-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body pb-1">
                <div className="border-bottom mb-0 pb-2">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                      <i className="ti ti-calendar-time fs-14" />
                    </span> 
                    <p>Total Reservations</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="py-2">
                    <h5 className="mb-1">68</h5>
                    <p><span className="text-success fw-semibold">+45%</span> Last Week</p>
                  </div>
                  <div id="reservation-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /Total Reservations */}
          {/* Total Earnings */}
          <div className="col-md-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body pb-1">
                <div className="border-bottom mb-0 pb-2">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-sm bg-orange-100 text-orange me-2">
                      <i className="ti ti-moneybag fs-14" />
                    </span> 
                    <p>Total Earnings</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="py-2">
                    <h5 className="mb-1">$565545</h5>
                    <p><span className="text-success fw-semibold">+22%</span> Last Week</p>
                  </div>
                  <div id="earning-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
          {/* Total Cars */}
          <div className="col-md-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body pb-1">
                <div className="border-bottom mb-0 pb-2">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                      <i className="ti ti-car fs-14" />
                    </span> 
                    <p>Total Cars</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="py-2">
                    <h5 className="mb-1">658</h5>
                    <p><span className="text-danger fw-semibold">-42%</span> Last Week</p>
                  </div>
                  <div id="car-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /Total Cars */}
        </div>
      </div>
      {/* Newly Added Cars */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <h5>Newly Added Cars</h5>
              <Link  to="all-cars" className="text-decoration-underline fw-medium">View All</Link>
            </div>
            <div className="mb-2">
              <img src="/admin-assets/img/car/car.jpg" alt="img" className="rounded w-100" />
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div>
                <p className="fs-13 mb-1">Sedan</p>
                <h6 className="fs-14 fw-semibold">1.5 Eco Sports ST-Line 115CV</h6>
              </div>
              <h6 className="fs-14 fw-semibold">$280 <span className="fw-normal text-gray-5">/day</span></h6>
            </div>
            <div className="row g-2 justify-content-center mb-3">
              <div className="col-sm-4 col-6 d-flex">
                <div className="bg-light border p-2 br-5 flex-fill text-center">
                  <h6 className="fs-14 fw-semibold">Fuel Type</h6>
                  <span className="fs-13">Petrol</span>
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex">
                <div className="bg-light border p-2 br-5 flex-fill text-center">
                  <h6 className="fs-14 fw-semibold">Passengers</h6>
                  <span className="fs-13">03</span>
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex">
                <div className="bg-light border p-2 br-5 flex-fill text-center">
                  <h6 className="fs-14 fw-semibold">Driving Type</h6>
                  <span className="fs-13">Self</span>
                </div>
              </div>
            </div>
            <Link to="car-details" className="btn btn-white d-flex align-items-center justify-content-center">View Details<i className="ti ti-chevron-right ms-1" /></Link>
          </div>
        </div>
      </div>
      {/* /Newly Added Cars */}
    </div>
    <div className="row">					
      {/* Live Tracking */}
      <div className="col-xl-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
              <h5 className="mb-1">Live Tracking</h5>
              <div className="dropdown mb-1">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-map-pin me-1" />Washington
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Washington</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Chicago</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Houston</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Las Vegas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="map-wrap position-relative">
              <div id="map" className="tracking-map w-100 z-1" />	
              <div className="position-absolute top-0 start-0 w-100 z-2 p-3">										
                <div className="input-icon-start position-relative">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search by Car Name" />
                </div>
              </div>	
            </div>				
          </div>
        </div>
      </div>
      {/* /Live Tracking */}
      {/* Recent Reservations */}
      <div className="col-xl-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
              <h5>Recent Reservations</h5>
              <Link to="all-reservation" className="text-decoration-underline fw-medium">View All</Link>
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody><tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-01.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <p className="d-flex align-items-center fs-13 text-default mb-1">3 Days<i className="ti ti-circle-filled text-primary fs-5 mx-1" />Self</p>
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ford Endeavour</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <h6 className="fs-14 fw-semibold">Newyork</h6>
                        <span className="connect-line" />
                        <h6 className="fs-14 fw-semibold">Las Vegas</h6>
                      </div>
                      <p className="fs-13 text-default">15 Jan 2025, 01:00 PM</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="fs-14 fw-semibold">$280 <span className="fw-normal text-default">/day</span></h6>
                        <a href="javascript:void(0);" className="avatar avatar-sm">
                          <img src="/admin-assets/img/profiles/avatar-05.jpg" alt="img" className="rounded-circle" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-02.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <p className="d-flex align-items-center fs-13 text-default mb-1">4 Days<i className="ti ti-circle-filled text-primary fs-5 mx-1" />Self</p>
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ferrari 458 MM</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <h6 className="fs-14 fw-semibold">Chicago</h6>
                        <span className="connect-line" />
                        <h6 className="fs-14 fw-semibold">Houston</h6>
                      </div>
                      <p className="fs-13 text-default">07 Feb 2025, 10:25 AM</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="fs-14 fw-semibold">$225 <span className="fw-normal text-default">/day</span></h6>
                        <a href="javascript:void(0);" className="avatar avatar-sm">
                          <img src="/admin-assets/img/profiles/avatar-22.jpg" alt="img" className="rounded-circle" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-03.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <p className="d-flex align-items-center fs-13 text-default mb-1">5 Days<i className="ti ti-circle-filled text-primary fs-5 mx-1" />Self</p>
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ford Mustang </Link></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <h6 className="fs-14 fw-semibold">Los Angeles </h6>
                        <span className="connect-line" />
                        <h6 className="fs-14 fw-semibold">New York</h6>
                      </div>
                      <p className="fs-13 text-default">14 Feb 2025, 04:40 PM</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="fs-14 fw-semibold">$259 <span className="fw-normal text-default">/day</span></h6>
                        <a href="javascript:void(0);" className="avatar avatar-sm">
                          <img src="/admin-assets/img/profiles/avatar-23.jpg" alt="img" className="rounded-circle" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-04.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <p className="d-flex align-items-center fs-13 text-default mb-1">6 Days<i className="ti ti-circle-filled text-primary fs-5 mx-1" />Self</p>
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Toyota Tacoma 4</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <h6 className="fs-14 fw-semibold">Phoenix</h6>
                        <span className="connect-line" />
                        <h6 className="fs-14 fw-semibold">San Antonio</h6>
                      </div>
                      <p className="fs-13 text-default">08 Jan 2025, 09:25 AM</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="fs-14 fw-semibold">$180 <span className="fw-normal text-default">/day</span></h6>
                        <a href="javascript:void(0);" className="avatar avatar-sm">
                          <img src="/admin-assets/img/profiles/avatar-23.jpg" alt="img" className="rounded-circle" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-05.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <p className="d-flex align-items-center fs-13 text-default mb-1">1 Week<i className="ti ti-circle-filled text-primary fs-5 mx-1" />Self</p>
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Chevrolet Truck</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <h6 className="fs-14 fw-semibold">Newyork </h6>
                        <span className="connect-line" />
                        <h6 className="fs-14 fw-semibold">Chicago</h6>
                      </div>
                      <p className="fs-13 text-default">17 Feb 2025, 11:45 AM</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="fs-14 fw-semibold">$300 <span className="fw-normal text-default">/day</span></h6>
                        <a href="javascript:void(0);" className="avatar avatar-sm">
                          <img src="/admin-assets/img/profiles/avatar-06.jpg" alt="img" className="rounded-circle" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Reservations */}
    </div>
    <div className="row">
      {/* Customers */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
              <h5>Customers</h5>
              <Link to="all-customers"className="text-decoration-underline fw-medium">View All</Link>
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody><tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link  to="customer-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/customer/customer-01.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link  to="customer-details">Reuben Keen</Link></h6>
                          <span className="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">No of Bookings</p>
                      <h6 className="fs-14 fw-semibold">89</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link  to="customer-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/customer/customer-02.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link  to="customer-details">William Jones</Link></h6>
                          <span className="badge badge-sm bg-violet-transparent rounded-pill">Company</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">No of Bookings</p>
                      <h6 className="fs-14 fw-semibold">45</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link  to="customer-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/customer/customer-04.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link  to="customer-details">Adam Bolden</Link></h6>
                          <span className="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">No of Bookings</p>
                      <h6 className="fs-14 fw-semibold">32</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link  to="customer-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/customer/customer-05.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link  to="customer-details">Harvey Jimenez</Link></h6>
                          <span className="badge badge-sm bg-violet-transparent rounded-pill">Company</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">No of Bookings</p>
                      <h6 className="fs-14 fw-semibold">21</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link  to="customer-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/customer/customer-06.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link  to="customer-details">William Ward</Link></h6>
                          <span className="badge badge-sm bg-secondary-transparent rounded-pill">Client</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">No of Bookings</p>
                      <h6 className="fs-14 fw-semibold">16</h6>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
      {/* /Customers */}
      {/* Income & Expenses */}
      <div className="col-xl-8 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-0">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
              <h5 className="mb-1">Income &amp; Expenses</h5>
              <div className="chart-icon d-flex align-items-center gap-4 mb-1">
                <p className="mb-0 d-flex align-items-center"><span className="chart-color bg-primary me-1" />Income</p>
                <p className=" d-flex align-items-center mb-0"><span className="chart-color bg-primary-300 me-1" />Expense</p>
              </div>
              <div className="dropdown mb-1">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-calendar me-1" />This Week
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">This Week</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Week</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">This Month</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-4">
              <div className="border br-5 p-2">
                <p className="mb-1">Income This Week</p>
                <h5>$96896<span className="fs-13 fw-semibold text-success ms-2">+34%</span></h5>
              </div>
              <div className="border br-5 p-2">
                <p className="mb-1">Expenses This Week</p>
                <h5>$12489<span className="fs-13 fw-semibold text-danger ms-2">+34%</span></h5>
              </div>
            </div>
            <div id="sales-statistics" />
          </div>
        </div>
      </div>
      {/* /Income & Expenses */}
    </div>
    <div className="row">
      {/* Maintenance */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
              <h5>Maintenance</h5>
              <to t0="car-maintenance" className="text-decoration-underline fw-medium">View All</to>
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody><tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-01.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ford Endeavour</Link></h6>
                          <p className="fs-13 text-default">Sedan</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">Odometer</p>
                      <h6 className="fs-14 fw-semibold">8656 KM</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-02.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ferrari 458 MM</Link></h6>
                          <p className="fs-13 text-default">SUV</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">Odometer</p>
                      <h6 className="fs-14 fw-semibold">565 KM</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-03.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Ford Mustang </Link></h6>
                          <p className="fs-13 text-default">Sedan</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">Odometer</p>
                      <h6 className="fs-14 fw-semibold">698 KM</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-04.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Toyota Tacoma 4</Link></h6>
                          <p className="fs-13 text-default">Minivans</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">Odometer</p>
                      <h6 className="fs-14 fw-semibold">855 KM</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="car-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/car/car-05.jpg" alt="img" />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="car-details">Chevrolet Truck</Link></h6>
                          <p className="fs-13 text-default">Hatchbacks</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-13 mb-1 text-default">Odometer</p>
                      <h6 className="fs-14 fw-semibold">5889 KM</h6>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
      {/* /Maintenance */}
      {/* Reservation Statistics */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-0">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
              <h5 className="mb-1">Reservation Statistics</h5>
              <Link to="all-reservation" className="text-decoration-underline fw-medium mb-1">View All</Link>
            </div>
            <div id="statistics_chart" />
          </div>
        </div>
      </div>
      {/* /Reservation Statistics */}
      {/* Drivers */}
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
              <h5>Drivers</h5>
              <Link  to="all-drivers" className="text-decoration-underline fw-medium">View All</Link>
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody><tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/drivers/driver-01.jpg" className="rounded-circle" alt />
                        </a>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">William Jones</a></h6>
                          <p className="fs-13 text-default">No of Raids : 90</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />In Ride</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/drivers/driver-02.jpg" className="rounded-circle" alt />
                        </a>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Leonard Jandreau</a></h6>
                          <p className="fs-13 text-default">No of Raids : 64</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />In Ride</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/drivers/driver-03.jpg" className="rounded-circle" alt />
                        </a>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Adam Bolden</a></h6>
                          <p className="fs-13 text-default">No of Raids : 36</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />In Ride</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/drivers/driver-04.jpg" className="rounded-circle" alt />
                        </a>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Harvey Jimenez</a></h6>
                          <p className="fs-13 text-default">No of Raids : 24</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />In Ride</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/drivers/driver-05.jpg" className="rounded-circle" alt />
                        </a>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">William Jones</a></h6>
                          <p className="fs-13 text-default">No of Raids : 40</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="badge badge-md bg-danger-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Not Booked</span>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
      {/* /Drivers */}
    </div>
    <div className="row">
      {/* Recent Invoices */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
              <h5 className="mb-1">Recent Invoices</h5>
              <Link Link="all-invoice" className="text-decoration-underline fw-medium mb-1">View All</Link>
            </div>
            <div className="custom-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>INVOICE NO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CREATED DATE</th>
                    <th>DUE DATE</th>
                    <th>INVOICE AMOUNT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="invoice-details" className="fs-12 fw-medium">#12345</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="customers-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="customers-details">Andrew Simons </Link></h6>
                        </div>
                      </div>
                    </td>
                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="61000f05130416210419000c110d044f020e0c">[email&nbsp;protected]</a></td>
                    <td>24 Jan 2025</td>
                    <td>24 Jan 2025</td>
                    <td>$120.00</td>												
                    <td>
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link  to="invoice-details" className="fs-12 fw-medium">#12346</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="customers-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/profiles/avatar-21.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="customers-details">David Steiger</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e68287908f82a6839e878b968a83c885898b">[email&nbsp;protected]</a></td>
                    <td>19 Dec 2024</td>
                    <td>19 Dec 2024</td>
                    <td>$85.00</td>												
                    <td>
                      <span className="badge badge-md bg-info-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link  to="invoice-details" className="fs-12 fw-medium">#12347</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="customers-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/profiles/avatar-12.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="customers-details">Virginia Phu</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f0809885b09588919d809c95de939f9d">[email&nbsp;protected]</a></td>
                    <td>11 Dec 2024</td>
                    <td>11 Dec 2024</td>
                    <td>$250.00</td>												
                    <td>
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link  to="invoice-details" className="fs-12 fw-medium">#12348</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="customers-details" className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/profiles/avatar-03.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="customers-details">Walter Hartmann</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1463757860716654716c75796478713a777b79">[email&nbsp;protected]</a></td>
                    <td>29 Nov 2024</td>
                    <td>229 Nov 2024</td>
                    <td>$175.00</td>												
                    <td>
                      <span className="badge badge-md bg-purple-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Overdue</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="invoice-details" className="fs-12 fw-medium">#12349</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="customers-details"className="avatar flex-shrink-0">
                          <img src="/admin-assets/img/profiles/avatar-07.jpg" className="rounded-circle" alt />
                        </Link>
                        <div className="flex-grow-1 ms-2">
                          <h6 className="fs-14 fw-semibold mb-1"><Link to="customers-details">Andrea Jermaine</Link></h6>
                        </div>
                      </div>
                    </td>
                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="39535c4b545850575c795c41585449555c175a5654">[email&nbsp;protected]</a></td>
                    <td>03 Nov 2024</td>
                    <td>03 Nov 2024</td>
                    <td>$200.00</td>												
                    <td>
                      <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center"><i className="ti ti-circle-filled fs-6 me-2" />Paid</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Invoices */}
    </div>
  </div>
</div>

  )
}

export default adminMain