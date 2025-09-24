import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";import { useSelector } from "react-redux";

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const userData = useSelector((store) => store.user);
  const userType = userData?.userType; //

  const fetchAllCars = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      let res;
      if (userType === 1) {
        res = await apiService.getAllCarsForSuperAdmin({
          page,
          search: searchQuery,
        });
      } else {
        res = await apiService.getAllCarAdmin({
          page,
          search: searchQuery,
        });
      }

      if (res.data.success) {
        const populatedCars = res.data.data.map((car) => ({
          ...car,
          carType: car.carType ? car.carType.carType : "Unknown",
          carBrand: car.carBrand ? car.carBrand.brandName : "Unknown",
          carModel: car.carModel ? car.carModel.carModel : "Unknown",
          carFuel: car.carFuel ? car.carFuel.carFuel : "Unknown",
          carColor: car.carColor ? car.carColor.carColor : "Unknown",
          carTransmission: car.carTransmission
            ? car.carTransmission.carTransmission
            : "Unknown",
          carSeats: car.carSeats ? car.carSeats.carSeats : "Unknown",
          location: car.mainLocation ? car.mainLocation.location : "Unknown",
          pricing: car?.pricing?.prices?.daily,
        }));
        setCars(populatedCars);
        setTotalPages(res.data.pagination.totalPages || 1);
        setCurrentPage(res.data.pagination.currentPage || 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCars(currentPage, search);
  }, [currentPage, search]);



  const handleToggleStatus = async (carId, currentStatus) => {
  try {
    const res = await apiService.toolgeStatusByAdmin(carId, {status:  !currentStatus});

    if (res.data.success) {
      toast.success("Car status updated successfully");

      // Update state without refetch
      setCars((prevCars) =>
        prevCars.map((c) =>
          c._id === carId ? { ...c, status: !currentStatus } : c
        )
      );
    } else {
      toast.error(res.data.message || "Failed to update status");
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Server error");
  }
};

  // Pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">All Cars</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Cars
                </li>
              </ol>
            </nav>
          </div>
            <div className="dropdown me-3">
  <a href="javascript:void(0);" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
    Status
  </a>
  <ul className="dropdown-menu dropdown-menu-md p-2">
    <li className="dropdown-item">
      Active
    </li>
    <li className="dropdown-item">
      Inactive
    </li>
  </ul>
</div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
             
            </div>
            <div className="mb-2 me-2">
              <div className="dropdown">
                <a
                   
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </a>
              </div>
           

            </div>
            
            <div className="mb-2">
              <Link
                to="/admin-dashboard/add-car"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add New Car
              </Link>
            </div>
          </div>
        </div>
        
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                />
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
                <th className="no-sort">
                  <div className="form-check form-check-md">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="select-all"
                    />
                  </div>
                </th>
                <th>CAR</th>
                <th>BASE LOCATION</th>
                <th>PRICE (PER DAY)</th>
                {/* <th>DAMAGES</th> */}
                {/* <th>IS FEATURED</th> */}
                <th>CREATED DATE</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id}>
                  <td>
                    <div className="form-check form-check-md">
                      <input className="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/admin-dashboard/car-details/${car._id}`}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src={`${BASE_URL_IMG + car.image}`}
                          className="rounded-3"
                          alt="car"
                        />
                      </Link>
                      <div>
                        <h6>
                          <Link
                            to={`/admin-dashboard/car-details/${car._id}`}
                            className="fs-14 fw-semibold"
                          >
                            {car.carName}
                          </Link>
                        </h6>
                        <p>{car.carModel}</p>
                      </div>
                    </div>
                  </td>
                  <td>{car.location}</td>
                  <td>
                    <p className="fs-14 fw-semibold text-gray-9">
                      ${car.pricing}
                    </p>
                  </td>
                  {/* <td>
                    <p className="text-gray-9">01</p>
                  </td>
                  <td>
                    <i className="ti ti-star-filled text-warning" />
                  </td> */}
                  <td>
                    <h6 className="fs-14 fw-normal">
                      {new Date(car.createdAt).toLocaleDateString()}
                    </h6>
                    <p className="fs-13">
                      {new Date(car.createdAt).toLocaleTimeString()}
                    </p>
                  </td>
                  <td>
                    {userType === 1 ? (
                      <button
                        className={`badge border-0 ${
                          car.status ? "bg-success" : "bg-danger"
                        }`}
                        onClick={() => handleToggleStatus(car._id, car.status)}
                      >
                        {car.status ? "Active" : "Inactive"}
                      </button>
                    ) : (
                      <span
                        className={`badge ${
                          car.status ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {car.status ? "Active" : "Inactive"}
                      </span>
                    )}
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
                          <Link
                            to={`/admin-dashboard/car-details/${car._id}`}
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-eye me-1" />
                            View Details
                          </Link>
                        </li>
                      {userType !==1&&    (    <li>
                          <Link
                            to="/admin-dashboard/add-reservation"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-plus me-1" />
                            Add Reservation
                          </Link>
                        </li> )}
                  {userType !==1&&    (<li>
                          <Link
                            to={`/admin-dashboard/edit-car/${car._id}`}
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                        </li>) }  
                        <li>
                          <a
                            className="dropdown-item rounded-1"
                             
                            data-bs-toggle="modal"
                            data-bs-target="#delete_extra_services"
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
        {/* Pagination */}
        <nav aria-label="Page navigation" className="mt-3">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
            </li>

            {[...Array(totalPages)].map((_, idx) => (
              <li
                key={idx}
                className={`page-item ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        {/* Custom Data Table */}
        <div className="table-footer" />
      </div>
        <div>
              {/* Your existing JSX */}
      
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
    </div>
  );
};

export default AdminCars;
