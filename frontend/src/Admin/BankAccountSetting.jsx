import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BankAccountSetting = () => {
  const [bankAccount, setBankAccount] = useState([]);
  const [newBankAccount, setNewBankAccount] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    branch: "",
    ifsc: "",
    isDefault: false,
  });
  const [editingBankAccount, setEditingBankAccount] = useState(null);
  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //
  const fetchBankAccount = async () => {
    try {
      const res = await apiService.getAllBankAccount();
      setBankAccount(res.data.data);
    } catch (err) {
      toast.error("Failed to load signatures"+err.message);
    }
  };

  useEffect(() => {
    fetchBankAccount();
  }, []);

  const handleAddBankAccount = async (e) => {
    e.preventDefault();
    if (
      !newBankAccount.bankName ||
      !newBankAccount.accountNumber ||
      !newBankAccount.accountHolderName ||
      !newBankAccount.branch ||
      !newBankAccount.ifsc
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await apiService.addBankAccount(newBankAccount);
      toast.success("Bank account added successfully");
      setNewBankAccount({
        bankName: "",
        accountNumber: "",
        accountHolderName: "",
        branch: "",
        ifsc: "",
        isDefault: false,
      });
      fetchBankAccount();
    } catch (err) {
      toast.error("Failed to add bank account"+err.message);
    }
  };

  const handleUpdateBankAccount = async (e) => {
    e.preventDefault();

    if (
      !editingBankAccount.bankName ||
      !editingBankAccount.accountNumber ||
      !editingBankAccount.accountHolderName ||
      !editingBankAccount.branch ||
      !editingBankAccount.ifsc
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await apiService.updateBankAccount(
        editingBankAccount._id,
        editingBankAccount
      );
      toast.success("Bank account updated successfully");
      setEditingBankAccount(null);
      fetchBankAccount();
    } catch (err) {
      toast.error("Failed to update bank account"+err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.deleteBankAccount(id);
      toast.success("Bank account deleted successfully");
      fetchBankAccount();
    } catch (err) {
      toast.error("Failed to delete bank account"+err.message);
    }
  };

  const startEdit = (bankAccount) => {
    setEditingBankAccount({ ...bankAccount });
  };
  return (
    <div className="page-wrapper">
      <div className="content me-0 pb-0 me-lg-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Settings</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Settings
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Settings Prefix */}
        <div className="row">
          <div className="col-lg-3">
            {/* inner sidebar - unchanged */}
            <div className="settings-sidebar slimscroll">
              <div className="sidebar-menu">
                <ul>
                  {/* Account Setting */}
                  <li className="menu-title">
                    <span>ACCOUNT SETTING</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    <li>
                      <Link to="/admin-dashboard/profile-setting">
                        <i className="ti ti-user-edit me-2" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin-dashboard/security-setting">
                        <i className="ti ti-lock me-2" />
                        Security
                      </Link>
                    </li>
                  </ul>

                  {/* Website Setting */}
                  <li className="menu-title">
                    <span>Website Setting</span>
                  </li>
                  <ul className="sidebar-links pb-3 mb-3 border-bottom">
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/login-setting">
                          <i className="ti ti-lock-bolt me-2"></i>
                          <span>Login & Register</span>
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/company-setting">
                          <i className="ti ti-building me-2" />
                          <span>Company Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType === 1 && (
                      <li>
                        <Link to="/admin-dashboard/email-setting">
                          <i className="ti ti-mail me-2" />
                          <span>Email Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                     <li>
                                         <Link to="/admin-dashboard/language-setting">
                                           <i className="ti ti-language me-2" />
                   
                                           <span> Language Settings</span>
                                         </Link>
                                       </li>
                    {userType === 1 && (
                      <li>
                        <a href="language-setting.html">
                          <i className="ti ti-language me-2" />
                          <span>Language</span>
                        </a>
                      </li>
                    )}

                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/invoice-setting">
                          <i className="ti ti-file-invoice me-2" />
                          <span>Invoice Settings</span>
                          <span className="track-icon" />
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li>
                        <Link to="/admin-dashboard/signature-setting">
                          <i className="ti ti-signature me-2" />
                          <span>Signatures</span>
                        </Link>
                      </li>
                    )}
                    {userType !== 1 && (
                      <li className="active">
                        <Link to="/admin-dashboard/bank-account-setting">
                          <i className="ti ti-file-dollar me-2" />
                          <span>Bank Accounts</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="card">
              <div className="card-header">
                <h5>Invoice Setting</h5>
              </div>
              <div className="card-body">
                <div className="payment-section">
                  <h6 className="mb-3">Bank Accounts</h6>
                  {/* Table Header */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                    <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3"></div>
                    <div>
                      <div className="mb-2 me-2">
                        <a
                          className="btn btn-primary d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#add_bank"
                        >
                          <i className="ti ti-plus me-2" />
                          Add New Account
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  {/* Custom Data Table */}
                  <div className="custom-datatable-filter table-responsive brandstable country-table">
                    <table className="table datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>NAME</th>
                          <th>BANK</th>
                          <th>BRANCH</th>
                          <th>ACCOUNT NO</th>
                          <th>IFSC</th>
                          <th>CREATED ON</th>
                          <th>STATUS</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {bankAccount.map((bank) => (
                          <tr key={bank._id}>
                            <td>
                              <p className="text-gray-9 fw-semibold fs-14">
                                {bank.accountHolderName}
                                {bank.isDefault && (
                                  <span className="ms-2 badge badge-soft-purple">
                                    Default
                                  </span>
                                )}
                              </p>
                            </td>
                            <td>
                              <p className="text-gray-9">{bank.bankName}</p>
                            </td>
                            <td>
                              <p className="text-gray-9">{bank.branch}</p>
                            </td>
                            <td>
                              <p className="text-gray-9">
                                {bank.accountNumber}
                              </p>
                            </td>
                            <td>
                              <p className="text-gray-9">{bank.ifsc}</p>
                            </td>
                            <td>
                              <p className="text-gray-9">
                                {new Date(bank.createdAt).toLocaleString()}
                              </p>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  bank.status
                                    ? "badge-success-transparent"
                                    : "badge-danger-transparent"
                                } d-inline-flex align-items-center badge-sm`}
                              >
                                <i className="ti ti-point-filled me-1" />
                                {bank.status ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <button
                                  className="btn btn-icon btn-sm"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end p-2">
                                  <li>
                                    <a
                                      onClick={() => startEdit(bank)}
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_bank"
                                    >
                                      <i className="ti ti-edit me-1" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      onClick={() =>
                                        setEditingBankAccount(bank)
                                      }
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_bank"
                                    >
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Custome Data Tabel */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Add bank */}
        <div className="modal fade" id="add_bank">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Add Bank Account</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Bank Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={newBankAccount.bankName}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        bankName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newBankAccount.accountNumber}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        accountNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Holder Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newBankAccount.accountHolderName}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        accountHolderName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Branch <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newBankAccount.branch}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        branch: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    IFSC <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={newBankAccount.ifsc}
                    onChange={(e) =>
                      setNewBankAccount({
                        ...newBankAccount,
                        ifsc: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      checked={newBankAccount.isDefault}
                      onChange={(e) =>
                        setNewBankAccount({
                          ...newBankAccount,
                          isDefault: e.target.checked,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Mark as Default
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddBankAccount}
                    className="btn btn-primary"
                  >
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add bank */}
        {/* Edit bank */}
        <div className="modal fade" id="edit_bank">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Edit Bank Account</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Bank Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingBankAccount?.bankName}
                    onChange={(e) =>
                      setEditingBankAccount({
                        ...editingBankAccount,
                        bankName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingBankAccount?.accountNumber}
                    onChange={(e) =>
                      setEditingBankAccount({
                        ...editingBankAccount,
                        accountNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Holder Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingBankAccount?.accountHolderName}
                    onChange={(e) =>
                      setEditingBankAccount({
                        ...editingBankAccount,
                        accountHolderName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Branch <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingBankAccount?.branch}
                    onChange={(e) =>
                      setEditingBankAccount({
                        ...editingBankAccount,
                        branch: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    IFSC <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingBankAccount?.ifsc}
                    onChange={(e) =>
                      setEditingBankAccount({
                        ...editingBankAccount,
                        ifsc: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked1"
                      checked={editingBankAccount?.isDefault}
                      onChange={(e) =>
                        setEditingBankAccount({
                          ...editingBankAccount,
                          isDefault: e.target.checked,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked1"
                    >
                      Mark as Default
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label form-label mt-0 mb-0">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        checked={editingBankAccount?.status}
                        onChange={(e) =>
                          setEditingBankAccount({
                            ...editingBankAccount,
                            status: e.target.checked,
                          })
                        }
                      />
                      Status
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateBankAccount}
                      className="btn btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit bank */}
        {/* Delete */}
        <div className="modal fade" id="delete_bank">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-26" />
                </span>
                <h4 className="mb-1">Delete Bank Account</h4>
                <p className="mb-3">
                  Are you sure you want to delete bank account?
                </p>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-light me-3" data-bs-dismiss="modal">
                    Cancel
                  </a>
                  <button
                    onClick={() =>
                      editingBankAccount && handleDelete(editingBankAccount._id)
                    }
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BankAccountSetting;
