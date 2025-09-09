import React from 'react'
import { Link } from 'react-router-dom'

const AdminNewsLetter = () => {
  return (
 <div>
  <div className="page-wrapper">
    <div className="content me-4">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Newsletters</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Newsletters</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* /Breadcrumb */}
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
        </div>
      </div>
      {/* /Table Header */}
      {/* Custom Data Table */}
      <div className="custom-datatable-filter table-responsive">
        <table className="table datatable">
          <thead className="thead-light">
            <tr>
              <th>EMAIL</th>
              <th>DATE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5839363c2a3d2f183d20393528343d763b3735">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">24 Jan 2025</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bedadfc8d7dafedbc6dfd3ced2db90ddd1d3">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">19 Dec 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f3839b86b3968b929e839f96dd909c9e">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">11 Dec 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2651474a52435466435e474b564a430845494b">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c06091e010d0502092c09140d011c0009420f0301">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">03 Nov 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="96f2f3f8f8ffe5d6f3eef7fbe6faf3b8f5f9fb">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">31 Oct 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="acc0cdc2ecc9d4cdc1dcc0c982cfc3c1">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">15 Oct 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9efdecebf3eedefbe6fff3eef2fbb0fdf1f3">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">26 Sep 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d2b8a7bebbb792b7aab3bfa2beb7fcb1bdbf">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">01 Sep 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
            <tr>
              <td>
                <p className="text-gray-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ff959a9e91bf9a879e928f939ad19c9092">[email&nbsp;protected]</a></p>
              </td>
              <td>
                <p className="text-gray-9">15 Aug 2024</p>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a className="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete"><i className="ti ti-trash me-1" />Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>                                                
          </tbody>	
        </table>
      </div>
      {/* Custom Data Table */}
      <div className="table-footer" />			
    </div>			
  </div>
  {/* /Page Wrapper */}
  {/* /Main Wrapper */}
  {/* Delete  */}
  <div className="modal fade" id="delete">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Newsletter</h4>
          <p className="mb-3">Are you sure you want to delete Newsletter?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <Link to="admin-news-letter"  className="btn btn-primary">Yes, Delete</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</div>


  )
}

export default AdminNewsLetter