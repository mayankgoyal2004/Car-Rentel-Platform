import React from 'react'
import { Link } from 'react-router-dom'

const InvioceDetails = () => {
  return (
   <div className="main-wrapper">
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">Invoice</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Invoice</li>
            </ol>
          </nav>							
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}	
  {/* Invoice */}
  <div className="invoice-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-body">
            {/* Invoice heading */}
            <div className="invoice-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="invoice-logo">
                    <img src="/user-assets/img/logo.svg" alt="logo" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="invoice-info">
                    <h1>Invoice</h1>
                    <h6>Invoice Number : <span>In983248782</span></h6>
                  </div>
                </div>
              </div>
            </div>
            {/* /Invoice heading */}
            {/* Invoice To */}
            <div className="invoice-item-bill">
              <ul>
                <li>
                  <div className="invoice-info">
                    <h6>Billed to</h6>
                    <p>
                      Customer Name<br />
                      9087484288<br />
                      Address line 1,<br /> 
                      Address line 2<br />
                      Zip code ,City - Country
                    </p>
                  </div>
                </li>
                <li>
                  <div className="invoice-info">
                    <h6>Invoice From</h6>
                    <p>
                      Company Name<br />
                      9087484288<br />
                      Address line 1, Address line 2<br />
                      Zip code ,City - Country
                    </p>
                  </div>
                </li>
                <li>
                  <div className="invoice-info">
                    <p>Issue Date : <span> 27 Jul 2022</span></p>
                    <p>Due Date : <span> 27 Aug 2022</span></p>
                    <p>Due Amount  : <span> $ 1,54,22</span></p>
                    <p>Recurring Invoice : <span> 15 Months</span></p>
                    <p>PO Number  : <span> 54515454</span></p>
                  </div>
                </li>
              </ul>
            </div>
            {/* /Invoice To */}
            {/* Invoice Item */}
            <div className="invoice-table-wrap">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-center table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Rate/Item</th>
                          <th>Quantity</th>
                          <th>Discount (%)</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dreams Rental Cars</td>
                          <td>Kia Soul</td>
                          <td>$1,110</td>
                          <td>2</td>
                          <td>2 %</td>
                          <td>$2,220</td>
                        </tr>
                        <tr>
                          <td>Dreams Rental Cars</td>
                          <td>Toyota Tacoma</td>
                          <td>$1,110</td>
                          <td>0</td>
                          <td>0</td>
                          <td>$2,220</td>
                        </tr>
                        <tr>
                          <td>Dreams Rental Cars</td>
                          <td>Audi A3</td>
                          <td>$1,110</td>
                          <td>0</td>
                          <td>0</td>
                          <td>$2,220</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Invoice Item */}
            {/* Payment Details */}
            <div className="payment-details">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="invoice-terms">											
                    <h6>Payment  Details</h6>
                    <div className="invocie-note">
                      <p>Debit Card<br />
                        XXXXXXXXXXXX-2541<br />
                        HDFC Bank</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="invoice-total-box">
                    <div className="invoice-total-inner">
                      <p>Taxable  <span>$6,660.00</span></p>
                      <p>Additional Charges<span>$6,660.00</span></p>
                      <p>Discount: <span>- $ 3,300.00</span></p>
                      <p>Sub total <span> $ 3,300.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Details */}
            {/* Total Amount */}
            <div className="invoice-total">
              <h4>Total Amount <span>$143,300.00</span></h4>
            </div>
            {/* /Total Amount */}
            <div className="invoice-note-footer">
              <div className="row align-items-center">								
                <div className="col-lg-6 col-md-12">
                  <div className="invocie-note">
                    <h6>Notes</h6>
                    <p>Enter customer notes or any other details</p>
                  </div>
                  <div className="invocie-note mb-0">
                    <h6>Terms and Conditions</h6>
                    <p>Enter customer notes or any other details</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="invoice-sign">										
                    <img className="img-fluid d-inline-block" src="/user-assets/img/signature.png" alt="sign" />										
                    <span className="d-block">Harristemp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Invoice */}		
</div>

  )
}

export default InvioceDetails