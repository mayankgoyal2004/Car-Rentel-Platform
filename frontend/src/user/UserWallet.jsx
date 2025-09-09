import React from 'react'

const UserWallet = () => {
  return (
<div className="content">
  <div className="container">
    {/* Content Header */}
    <div className="content-header">
      <h4>Wallet</h4>
    </div>
    {/* /Content Header */}
    {/* Wallet Info */}
    <div className="row">
      <div className="col-lg-5 col-md-12 d-flex">
        <div className="card wallet-card flex-fill">
          <div className="card-body">
            <div className="balance-info">
              <div className="balance-grid">
                <div className="balance-content">
                  <h6>Available Balance</h6>
                  <h4>$4544</h4>
                </div>
                <div className="refersh-icon">
                  <a href="javascript:void(0);">
                    <i className="fas fa-arrows-rotate" />
                  </a>
                </div>
              </div>
              <div className="balance-list">
                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="balance-inner credit-info">
                      <h6>$1,23,464</h6>
                      <p>Total Credit</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="balance-inner debit-info">
                      <h6>$7,357</h6>
                      <p>Total Debit</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="balance-inner transaction-info">
                      <h6>$6,56,415</h6>
                      <p>Total Transaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group wallet-form-group">
              <label>Add Wallet Credits ($)</label>
              <input type="text" className="form-control" placeholder={1000} />
            </div>
            <div className="wallet-btn">
              <a href="javascript:void(0);" className="btn" data-bs-toggle="modal" data-bs-target="#add_payment">Add Payment</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 d-flex">
        <div className="card your-card flex-fill">
          <div className="card-body">
            <div className="wallet-header">
              <h4>Your Cards</h4>
              <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_card">
                <i className="feather-plus-circle" />
              </a>
            </div>
            <div className="wallet-table">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <label className="custom_radio">
                          <input type="radio" name="payment" defaultValue="wallet" defaultChecked />
                          <span className="checkmark" /> 
                          <img src="/user-assets/img/icons/wallet-01.svg" alt="Icon" />
                        </label>
                      </td>
                      <td>
                        <h6>3210 **** **** **12</h6>
                        <p>Card Number</p>
                      </td>
                      <td>
                        <h6>$3000</h6>
                        <p>Balance</p>
                      </td>
                      <td>
                        <h6>Active</h6>
                        <p>Status</p>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void(0);">
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
                        <label className="custom_radio">
                          <input type="radio" name="payment" defaultValue="wallet" />
                          <span className="checkmark" /> 
                          <img src="/user-assets/img/icons/wallet-02.svg" alt="Icon" />
                        </label>
                      </td>
                      <td>
                        <h6>7847 **** **** **78</h6>
                        <p>Card Number</p>
                      </td>
                      <td>
                        <h6>$2300</h6>
                        <p>Balance</p>
                      </td>
                      <td>
                        <h6>Active</h6>
                        <p>Status</p>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void(0);">
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
                        <label className="custom_radio">
                          <input type="radio" name="payment" defaultValue="wallet" />
                          <span className="checkmark" /> 
                          <img src="/user-assets/img/icons/wallet-03.svg" alt="Icon" />
                        </label>
                      </td>
                      <td>
                        <h6>4710 **** **** **64</h6>
                        <p>Card Number</p>
                      </td>
                      <td>
                        <h6>$1800</h6>
                        <p>Balance</p>
                      </td>
                      <td>
                        <h6>Active</h6>
                        <p>Status</p>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void(0);">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Wallet Info */}
    {/* Wallet Table */}
    <div className="row">
      <div className="col-lg-12 d-flex">
        <div className="card book-card flex-fill mb-0">
          <div className="card-header">	
            <div className="row align-items-center">
              <div className="col-md-5">
                <h4>Wallet Usage History</h4>	
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
                    <th>Ref Id</th>
                    <th>Transaction For</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Self Deposit Paypal</a>
                        </div>
                      </div>
                    </td>
                    <td>15 Sep 2023, 09:00 AM</td>
                    <td className="text-success-light">+ $300</td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#1002</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Audi A3 2019 new</a>
                        </div>
                      </div>
                    </td>
                    <td>23 Oct 2023, 12:00 PM</td>
                    <td className="text-danger">- $500</td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#1003</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Self Deposit Stripe</a>
                        </div>
                      </div>
                    </td>
                    <td>02 Nov 2023, 10:30 AM</td>
                    <td className="text-success-light">+ $600</td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#1004</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Audi A3 2020 new</a>
                        </div>
                      </div>
                    </td>
                    <td>18 Dec 2023, 02:30 PM</td>
                    <td className="text-success-light">+ $1500</td>
                    <td>
                      <span className="badge badge-light-warning">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#1005</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Self Deposit Stripe</a>
                        </div>
                      </div>
                    </td>
                    <td>05 Jan 2024, 08:00 AM</td>
                    <td className="text-danger">- $450</td>
                    <td>
                      <span className="badge badge-light-danger">Failed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#1006</td>
                    <td>
                      <div className="table-avatar">
                        <div className="table-head-name flex-grow-1">
                          <a href="javascript:void(0);" className="mb-0">Self Deposit Paypal</a>
                        </div>
                      </div>
                    </td>
                    <td>20 Feb 2024, 11:30 PM</td>
                    <td className="text-success-light">+ $1000</td>
                    <td>
                      <span className="badge badge-light-success">Completed</span>
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
    {/* /Wallet Table */}
  </div>
</div>

)
}

export default UserWallet