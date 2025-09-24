import React from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  PlusCircle,
  AlertCircle,
  MapPin,
  Trash2,
  Edit3,
  Eye,
} from "react-feather";
const UserReview = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedReveiw, setSelectedreview] = useState(null);
  const getAllReservationUser = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAllReviewUser();
      setReview(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch Reservation");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllReservationUser();
  }, []);

    const handleDelete = async () => {
        try {
          if (!selectedReveiw) return;
          const res = await apiService.deleteCarReviewAdmin(selectedReveiw); // <-- your DELETE route
          if (res.data.success) {
            toast.success("Contact deleted successfully");
             setReview( review.filter((c) => c._id !== selectedReveiw));
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to delete contact");
        }
      };
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
                    <div className="sort-week sort"></div>
                    <div className="sort-relevance sort"></div>
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
                    <h4>
                      All Reviews <span>{review.length}</span>
                    </h4>
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

                        <th>Review</th>
                        <th>Ratings</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : review.length > 0 ? (
                        review.map((rev) => (
                          <tr key={rev._id}>
                            <td>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <div className="table-avatar">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_review"
                                  className="avatar avatar-lg flex-shrink-0"
                                >
                                  <img
                                    className="avatar-img"
                                    src={BASE_URL_IMG + rev?.car?.image}
                                    alt="Booking"
                                  />
                                </a>
                                <div className="table-head-name flex-grow-1">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_review"
                                  ></a>
                                  <p>{rev?.car?.carName}</p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <p>{rev?.comment}</p>
                            </td>
                            <td>
                              <div>
                                {Array.from({ length: rev.carReview }).map(
                                  (_, i) => (
                                    <i
                                      key={i}
                                      className="ti ti-star-filled text-warning"
                                    />
                                  )
                                )}
                              </div>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  className="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_review"
                                      onClick={() => setSelectedreview(rev._id)}
                                  >
                                    <i className="feather-trash-2" /> Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No Reservation found
                          </td>
                        </tr>
                      )}
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
            <div className="modal fade" id="delete_review">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Review</h4>
              <p className="mb-3">Are you sure you want to delete Review?</p>
              <div className="d-flex justify-content-center">
                <a
                  
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button
                  onClick={handleDelete}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
