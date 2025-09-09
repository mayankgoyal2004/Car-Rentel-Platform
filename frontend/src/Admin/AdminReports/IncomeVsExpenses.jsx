import React from 'react'
import { Link } from 'react-router-dom'

const IncomeVsExpenses = () => {
  return (
    <div className="page-wrapper">
  <div className="content me-4 pb-0">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Income vs Expenses</h4>
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
    <div className="row border-bottom mb-4">
      {/* Total Earnings */}
      <div className="col-xl-4">
        <div className="card flex-fill mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="border-end pe-4 me-4">
                  <p className="mb-0">Total Income</p>
                  <h6 className="fw-semibold">$48,900</h6>
                </div>
                <div>
                  <p className="mb-0">Top Earning Car</p>
                  <h6 className="fw-semibold">Tesla Model 3</h6>
                </div>
              </div>
              <span className="avatar avatar-md bg-orange rounded-circle">
                <i className="ti ti-currency-dollar fs-18" />
              </span>
            </div>
            <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
              <p className="text-gray-500 mb-0 fs-12">Last Week</p>
              <span className="text-success fs12"><i className="ti ti-arrow-wave-right-up me-1" />+12%</span>
            </div>
          </div>
        </div>
        <div className="card flex-fill mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="border-end pe-4 me-4">
                  <p className="mb-0">Total Expenses</p>
                  <h6 className="fw-semibold">$19,400</h6>
                </div>
                <div>
                  <p className="mb-0">Highest Expense</p>
                  <h6 className="fw-semibold">Vehicle Repairs</h6>
                </div>
              </div>
              <span className="avatar avatar-md bg-success rounded-circle">
                <i className="ti ti-stairs-down fs-18" />
              </span>
            </div>
            <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
              <p className="text-gray-500 mb-0 fs-12">Last Week</p>
              <span className="text-danger fs12"><i className="ti ti-arrow-wave-right-down me-1" />-5.78%</span>
            </div>
          </div>
        </div>
        <div className="card flex-fill mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="border-end pe-4 me-4">
                  <p className="mb-0">Net Profit</p>
                  <h6 className="fw-semibold">$29,500</h6>
                </div>
                <div>
                  <p className="mb-0">Profit Margin</p>
                  <h6 className="fw-semibold">54%</h6>
                </div>
              </div>
              <span className="avatar avatar-md bg-info rounded-circle">
                <i className="ti ti-stairs-up fs-18" />
              </span>
            </div>
            <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
              <p className="text-gray-500 mb-0 fs-12">Last Week</p>
              <span className="text-success fs12"><i className="ti ti-arrow-wave-right-up me-1" />+19.26%</span>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
      {/* Total Earnings */}
      <div className="col-xl-8 d-flex">
        <div className="card flex-fill earnings-chart">
          <div className="card-header border-0 pb-0">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
              <h5>Income &amp; Expenses</h5>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-4">
                  <span className="chart-color bg-primary me-1" />
                  <p className="fs-13">Income</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="chart-color bg-primary-300 me-1" />
                  <p className="fs-13">Expense</p>
                </div>
              </div>
              <div className="dropdown me-2">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-calendar me-1" /> This Week
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">This Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">This Week</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item rounded-1">Last Week</a>
                  </li>
                </ul>
              </div> 
            </div>
            <div className="d-flex align-items-center">
              <div className="border rounded p-2 me-4">
                <p className="mb-0 text-gray-5">Income This Week</p>
                <h5>$96896 <span className="text-success fs-13 fw-semibold">+34%</span></h5>
              </div>
              <div className="border rounded p-2">
                <p className="mb-0 text-gray-5">Expenses This Week</p>
                <h5>$12489 <span className="text-danger fs-13 fw-semibold">-12%</span></h5>
              </div>
            </div>
          </div>
          <div className="card-body py-0">
            <div id="income_expense_chart" />
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
    </div>
    {/* /Charts */}
    {/* Table Header */}
    {/* /Table Header */}
    <div className="coupons-tabs">
      <ul className="nav nav-pills mb-3" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page" href="#income" aria-selected="true">Income</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#expense" aria-selected="false">Expence</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane show active" id="income" role="tabpanel">
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
                        <span><i className="ti ti-grip-vertical me-1" />RENTAL FEES</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />LATE FEES</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />ADDITIONAL SERVICES</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />TOTAL INCOME</span>
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
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>INVOICE NO</th>
                  <th>CAR</th>
                  <th>RENTAL FEES</th>
                  <th>LATE FEES</th>
                  <th>ADDITIONAL SERVICES</th>
                  <th>TOTAL INCOME</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12345</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-01.jpg" className="rounded-3" alt /></a>
                      <div>
                        <h6><a href="javascript:void(0);" className="fw-semibold fs-14">Ford Endeavour</a></h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,800</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$5,100</p>
                  </td>
                  <td>
                    24 Jan 2025
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-success" />Paid</span>
                  </td>
                </tr>                                                                                                  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12346</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-02.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Ferrari 458 MM</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,500</p>
                  </td>
                  <td>
                    $250
                  </td>
                  <td>
                    <p className="text-gray-9">$150</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$4,500</p>
                  </td>
                  <td>
                    19 Dec 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-info" />
                      Pending
                    </span>
                  </td>
                </tr>                                                                                          
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12347</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-03.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Ford Mustang </a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$4,600</p>
                  </td>
                  <td>
                    $300
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$3,800</p>
                  </td>
                  <td>
                    11 Dec 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12348</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-04.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Toyota Tacoma 4</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$4,100</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$4,700</p>
                  </td>
                  <td>
                    29 Nov 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-violet d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-purple" />Overdue</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12349</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-05.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Chevrolet Truck	</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,400</p>
                  </td>
                  <td>
                    $250
                  </td>
                  <td>
                    <p className="text-gray-9">$150</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$5,300</p>
                  </td>
                  <td>
                    03 Nov 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12350</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-06.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Etios Carmen	</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$4,300</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$4,000</p>
                  </td>
                  <td>
                    31 Oct 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-info" />
                      Pending
                    </span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12351</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-07.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Acura Sport </a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$4,900</p>
                  </td>
                  <td>
                    $250
                  </td>
                  <td>
                    <p className="text-gray-9">$150</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$3,600</p>
                  </td>
                  <td>
                    15 Oct 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12352</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-08.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Kia Soul 2016</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,600</p>
                  </td>
                  <td>
                    $250
                  </td>
                  <td>
                    <p className="text-gray-9">$150</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$5,800</p>
                  </td>
                  <td>
                    26 Sep 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 " />Failed</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12353</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-09.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Camaro</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,300</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$100</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$4,200</p>
                  </td>
                  <td>
                    01 Sep 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12354</a>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar me-2 flex-shrink-0"><img src="/admin-assets/img/car/car-10.jpg" className="rounded-3" alt /></a>
                      <a className="d-block fw-semibold" href="#">Toyota Camry</a>
                    </div>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$5,300</p>
                  </td>
                  <td>
                    $300
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$3,900</p>
                  </td>
                  <td>
                    15 Aug 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
              </tbody>
            </table>
          </div>
        </div>
        <div className="tab-pane" id="expense" role="tabpanel">
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
                        <span><i className="ti ti-grip-vertical me-1" />CATEGORY</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />VEHICLE RELATED</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />OPERATIONAL</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />MISCELLANEOUS</span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span><i className="ti ti-grip-vertical me-1" />TOTAL EXPENSE</span>
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
          {/* /Table Header */}
          <div className="collapse" id="filtercollapse">
            <div className="filterbox mb-3 d-flex align-items-center">
              <h6 className="me-3">Filters</h6>
              <div className="dropdown me-2">
                <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  Category
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
                      <input className="form-check-input m-0 me-2" type="checkbox" />Vehicle Repairs
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Fuel &amp; Maintenance
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Staff Salaries
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Office Rent
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Marketing
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Insurance
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Website Hosting
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Cleaning Supplies
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Car Loan Payment
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-item d-flex align-items-center rounded-1">
                      <input className="form-check-input m-0 me-2" type="checkbox" />Software Subscription
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
          <div className="custom-datatable-filter table-responsive expensetable">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>INVOICE NO</th>
                  <th>CATEGORY</th>
                  <th>VEHICLE RELATED</th>
                  <th>OPERATIONAL</th>
                  <th>MISCELLANEOUS</th>
                  <th>TOTAL EXPENSE</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12345</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Vehicle Repairs</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$3,800</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$5,100</p>
                  </td>
                  <td>
                    24 Jan 2025
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-success" />Paid</span>
                  </td>
                </tr>                                                                                                  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12346</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Vehicle Repairs</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$1,500</p>
                  </td>
                  <td>
                    $300
                  </td>
                  <td>
                    <p className="text-gray-9">0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$1,800</p>
                  </td>
                  <td>
                    19 Dec 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-info" />
                      Pending
                    </span>
                  </td>
                </tr>                                                                                          
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12347</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Staff Salaries</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">0</p>
                  </td>
                  <td>
                    $5,000
                  </td>
                  <td>
                    <p className="text-gray-9">0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$5,000</p>
                  </td>
                  <td>
                    11 Dec 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12348</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Office Rent</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$0</p>
                  </td>
                  <td>
                    $3,000
                  </td>
                  <td>
                    <p className="text-gray-9">$0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$3,000</p>
                  </td>
                  <td>
                    29 Nov 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-violet d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-purple" />Overdue</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12349</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Marketing</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$0</p>
                  </td>
                  <td>
                    $0
                  </td>
                  <td>
                    <p className="text-gray-9">$1,200</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$1,200</p>
                  </td>
                  <td>
                    03 Nov 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12350</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Insurance</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$1,800</p>
                  </td>
                  <td>
                    $500
                  </td>
                  <td>
                    <p className="text-gray-9">$0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$2,300</p>
                  </td>
                  <td>
                    31 Oct 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-info d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 text-info" />
                      Pending
                    </span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12351</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Website Hosting</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$0</p>
                  </td>
                  <td>
                    $0
                  </td>
                  <td>
                    <p className="text-gray-9">$600</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$600</p>
                  </td>
                  <td>
                    15 Oct 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12352</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Cleaning Supplies</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$500</p>
                  </td>
                  <td>
                    $200
                  </td>
                  <td>
                    <p className="text-gray-9">$0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$700</p>
                  </td>
                  <td>
                    26 Sep 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1 " />Failed</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12353</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Car Loan Payment</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$4,500</p>
                  </td>
                  <td>
                    $0
                  </td>
                  <td>
                    <p className="text-gray-9">$0</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$4,500</p>
                  </td>
                  <td>
                    01 Sep 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
                <tr>
                  <td>
                    <a href="javascript:void(0);">#INV12354</a>
                  </td>
                  <td>
                    <p className="text-gray-9">Software Subscription</p>
                  </td>
                  <td>
                    <p className="fs-14 text-gray-9">$0</p>
                  </td>
                  <td>
                    $0
                  </td>
                  <td>
                    <p className="text-gray-9">$900</p>
                  </td>
                  <td>
                    <p className="text-gray-9">$900</p>
                  </td>
                  <td>
                    15 Aug 2024
                  </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center border-violet badge-sm">
                      <i className="ti ti-point-filled me-1" />Paid</span>
                  </td>
                </tr>  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>			
</div>


  )
}

export default IncomeVsExpenses