import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Apiservice/apiService"; 
import { ToastContainer, toast } from "react-toastify";

const AdminContactMessage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAllContactAdmin();
      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  // Delete contact
  const handleDelete = async () => {
    try {
      if (!selectedId) return;
      const res = await apiService.deletecontact(selectedId); 
      if (res.data.success) {
        toast.success("Contact deleted successfully");
        setContacts(contacts.filter((c) => c._id !== selectedId));
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Contact Messages</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Messages
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Table */}
        <div className="custom-datatable-filter table-responsive">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th>FROM</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>CREATED DATE</th>
                <th>MESSAGE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <h6 className="fs-14 fw-semibold">{contact.name}</h6>
                      </div>
                    </td>
                    <td>
                      <p className="text-gray-9">{contact.phone}</p>
                    </td>
                    <td>
                      <p className="text-gray-9">{contact.email}</p>
                    </td>
                    <td>
                      <p className="text-gray-9">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-sm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-message text-gray-9 fs-18" />
                        </button>
                        <ul
                          className="dropdown-menu p-3"
                          style={{ minWidth: "250px" }}
                        >
                          <li>
                            <p className="mb-0 text-start text-wrap">
                              {contact.comments || "No message"}
                            </p>
                          </li>
                        </ul>
                      </div>
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
                              className="dropdown-item rounded-1"

                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                              onClick={() => setSelectedId(contact._id)}
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* /Table */}
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_contact">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Message</h4>
              <p className="mb-3">
                Are you sure you want to delete this message?
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
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
      {/* /Delete Modal */}
    </div>
  );
};

export default AdminContactMessage;
