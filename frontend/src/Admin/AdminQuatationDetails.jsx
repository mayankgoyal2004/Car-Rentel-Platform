import React from 'react'
import { Link } from 'react-router-dom'

const AdminQuatationDetails = () => {
  return (
   <div className="page-wrapper">
  <div className="content me-4">
    <div className="mb-3">
      <Link to="all-quotations"  className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-narrow-left me-2" />Quotations</Link>
    </div>
    <div className="filterbox mb-3 d-flex align-items-center invoice-title">
      <h4 className="me-3"><i className="ti ti-menu-2 me-2" />Quotations Details</h4>
    </div>
    <div className="card car-invoice">
      <div className="card-body">
        <div className="border-bottom mb-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="  mb-3">
                <h2 className="text-violet mb-3">#QT78245</h2>
                <p className="mb-1 fw-medium d-flex"><span className="text-dark min-width-100 d-flex">Created Date</span>Sep 24, 2025 </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" text-end mb-2">
                <img src="/admin-assets/img/logo.svg" className="invoice-logo img-fluid mb-2" alt="logo" />
                <p className="mb-2">Flat8, Park View House, 7 high Street , US</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="text-dark mb-3 fw-semibold">From</h5>
                  <div>
                    <h6 className="mb-1">DreamsRent</h6>
                    <p className="mb-1">Flat8,Park View House, 7 high Street , US</p>
                    <p className="mb-1">Contact : <span className="text-dark">+447123456789</span></p>
                    <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ff9b8d9a9e928c8d9a918bbf9a879e928f939ad19c9092">[email&nbsp;protected]</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="text-dark mb-3 fw-semibold">To</h5>
                  <div>
                    <h6 className="mb-1">David Seigar</h6>
                    <p className="mb-1">20 Cooper Square, New York, NY 10003, USA</p>
                    <p className="mb-1">Contact : <span className="text-dark">+447123456789</span></p>
                    <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="176e78626526252457726f767a677b723974787a">[email&nbsp;protected]</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="table-responsive border border-gray br-10 mb-3">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>DESCRIPTION</th>
                  <th className="text-end">TYPE</th>
                  <th className="text-end">QUANTITY</th>
                  <th className="text-end">COST</th>
                  <th className="text-end">DISCOUNT</th>
                  <th className="text-end">TAX</th>
                  <th className="text-end">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6 className="fw-semibold">Tesla Model Y Rental</h6></td>
                  <td className="text-gray-5 fw-medium text-end">Car Rental</td>
                  <td className="text-gray-5 fw-medium text-end">5 Days</td>
                  <td className="text-gray-5 fw-medium text-end">$60.00</td>
                  <td className="text-gray-5 fw-medium text-end">$20.00</td>
                  <td className="text-gray-5 fw-medium text-end">30%</td>
                  <td className="text-gray-9 fw-bold text-end">$270.00</td>
                </tr>
                <tr>
                  <td><h6 className="fw-semibold">GPS Navigation System</h6></td>
                  <td className="text-gray-5 fw-medium text-end">Add-on</td>
                  <td className="text-gray-5 fw-medium text-end">1 Unit</td>
                  <td className="text-gray-5 fw-medium text-end">$10.00</td>
                  <td className="text-gray-5 fw-medium text-end">$0.00</td>
                  <td className="text-gray-5 fw-medium text-end">0%</td>
                  <td className="text-gray-9 fw-bold text-end">$10.00</td>
                </tr>
                <tr>
                  <td><h6 className="fw-semibold">Full Coverage Insurance</h6></td>
                  <td className="text-gray-5 fw-medium text-end">Insurance</td>
                  <td className="text-gray-5 fw-medium text-end">5 Days</td>
                  <td className="text-gray-5 fw-medium text-end">$20.00</td>
                  <td className="text-gray-5 fw-medium text-end">$10.00</td>
                  <td className="text-gray-5 fw-medium text-end">20%</td>
                  <td className="text-gray-9 fw-bold text-end">$80.00</td>
                </tr>
                <tr>
                  <td><h6 className="fw-semibold">Extra Driver Fee</h6></td>
                  <td className="text-gray-5 fw-medium text-end">Add-on</td>
                  <td className="text-gray-5 fw-medium text-end">1 Person</td>
                  <td className="text-gray-5 fw-medium text-end">$15.00</td>
                  <td className="text-gray-5 fw-medium text-end">$5.00</td>
                  <td className="text-gray-5 fw-medium text-end">5%</td>
                  <td className="text-gray-9 fw-bold text-end">$10.00</td>
                </tr>
                <tr>
                  <td><h6 className="fw-semibold">Late Return Fee</h6></td>
                  <td className="text-gray-5 fw-medium text-end">Penalty</td>
                  <td className="text-gray-5 fw-medium text-end">1 Instance</td>
                  <td className="text-gray-5 fw-medium text-end">$30.00</td>
                  <td className="text-gray-5 fw-medium text-end">$0.00</td>
                  <td className="text-gray-5 fw-medium text-end">0%</td>
                  <td className="text-gray-9 fw-bold text-end">$30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-bottom mb-3">
          <div className="row">
            <div className="col-md-7">
              <div className="py-2">
                <div className="mb-3">
                  <h6 className="mb-1">Terms and Conditions</h6>
                  <p>The car must be returned in the same condition as rented. Additional charges may apply for damages, late returns, or excessive mileage.</p>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1">Notes</h6>
                  <p>All charges are final and include applicable taxes, fees, and additional costs incurred during the rental period.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                <p className="mb-0">Sub Total</p>
                <p className="text-dark fw-medium mb-2">$400</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                <p className="mb-0">Discount (0%)</p>
                <p className="text-danger fw-medium mb-2">00.0</p>
              </div>
              <div className="d-flex justify-content-between border-bottom align-items-center pb-2 mb-2 pe-3">
                <p className="mb-0">TAX (0%)</p>
                <p className="text-dark fw-medium mb-2">$54</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                <h5>Total Amount</h5>
                <h5>$500.00</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-9">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <p className="mb-2 text-center">Scan to the pay</p>
                <img src="/admin-assets/img/icons/qr-img.svg" alt />
              </div>
              <div>
                <h5 className="mb-2">Bank Details</h5>
                <p className="mb-2 d-flex"><span className="text-dark min-width-150 d-flex">Bank Name</span>ABC Bank </p>
                <p className="mb-2 d-flex"><span className="text-dark min-width-150 d-flex">Account Number</span>782459739212</p>
                <p className="mb-2 d-flex"><span className="text-dark min-width-150 d-flex">IFSC Code</span>ABC0001345</p>
                <p className="mb-0 d-flex"><span className="text-dark min-width-150 d-flex">Payment Reference</span>INV-20250220-001</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-end">
              <img src="/admin-assets/img/icons/sign-2.svg" className="img-fluid" alt="sign" />
            </div>
            <div className="text-end mb-3">
              <h6 className="fs-14 fw-medium pe-3">Ted M. Davis</h6>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <a href="javascript:void(0);" className="btn btn-primary d-flex justify-content-center align-items-center me-2"><i className="ti ti-printer me-2" />Print Quotation</a>
      <a href="javascript:void(0);" className="btn btn-dark d-flex justify-content-center align-items-center border"><i className="ti ti-download me-2" />Download</a>
    </div>
  </div>			
</div>

  )
}

export default AdminQuatationDetails