import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiService from "../../Apiservice/apiService";

const AdminEditEnvoice = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [car, setCars] = useState([]);
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    carId: "",
    reservationId: "",
    fromDate: "",
    dueDate: "",
    currency: "USD",
    status: "pending",
    from: "",
    to: "",
    paymentMethod: "",
    terms: "",
    notes: "",
    items: [
      {
        description: "Car Rental",
        quantity: 1,
        netPrice: 0,
        tax: 0,
        totalPrice: 0,
      },
    ],
  });
  const calculateTotals = () => {
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + item.netPrice * item.quantity,
      0
    );
    const taxTotal = invoiceData.items.reduce(
      (sum, item) => sum + item.tax * item.quantity,
      0
    );
    const total = subtotal + taxTotal;

    return { subtotal, taxTotal, total };
  };

  const { subtotal, taxTotal, total } = calculateTotals();

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllReservationAdmin();
      setReservation(res.data.data);
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };

  const getOwnerDetails = async () => {
    setLoading(true);
    try {
      const res = await apiService.getOwnerDetails();
      setOwner(res.data.data);
      setInvoiceData((prevData) => ({
        ...prevData,
        from: res.data.data.businessName,
      }));
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };
  const getCustoemrs = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllCustomerAdmin();
      setCustomers(res.data.data);
    } catch (err) {
      console.error("Error fetching Reservations:", err);
    } finally {
      setLoading(false);
    }
  };
  const getCars = async () => {
    try {
      const res = await apiService.getAllCarAdmin();
      setCars(res.data.data);
    } catch (err) {
      console.error("Error fetching Cars:", err);
      toast.error("Failed to load cars");
    }
  };

  useEffect(() => {
    fetchReservations();
    getOwnerDetails();
    getCustoemrs();
    getCars();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === "description" ? value : parseFloat(value) || 0,
    };

    // Recalculate total price for numeric fields
    if (field !== "description") {
      updatedItems[index].totalPrice =
        updatedItems[index].netPrice * updatedItems[index].quantity +
        updatedItems[index].tax * updatedItems[index].quantity;
    }

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };
  const addNewItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          description: "",
          quantity: 1,
          netPrice: 0,
          tax: 0,
          totalPrice: 0,
        },
      ],
    }));
  };
  const removeItem = (index) => {
    if (invoiceData.items.length > 1) {
      const updatedItems = invoiceData.items.filter((_, i) => i !== index);
      setInvoiceData((prev) => ({
        ...prev,
        items: updatedItems,
      }));
    }
  };
  const getRentalPeriod = (reservation) => {
    if (!reservation?.pickupDate || !reservation?.dropDate) return 1;

    const start = new Date(reservation.pickupDate);
    const end = new Date(reservation.dropDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const getCarPrice = (reservation) => {
    if (!reservation?.car?.pricing?.prices) return 0;
    const prices = reservation.car.pricing.prices;

    switch (reservation.bookingType) {
      case "daily":
        return prices.daily || 0;
      case "weekly":
        return prices.weekly || 0;
      case "monthly":
        return prices.monthly || 0;
      case "yearly":
        return prices.yearly || 0;
      default:
        return prices.daily || 0;
    }
  };

  const getTotalCarPricing = (reservation) => {
    if (!reservation?.car?.pricing?.prices) return 0;

    const rentalDays = getRentalPeriod(reservation);
    const prices = reservation.car.pricing.prices;

    let carPrice = 0;

    switch (reservation.bookingType) {
      case "daily":
        carPrice = (prices.daily || 0) * rentalDays;
        break;
      case "weekly": {
        const weeks = Math.ceil(rentalDays / 7);
        carPrice = (prices.weekly || 0) * weeks;
        break;
      }
      case "monthly": {
        const months = Math.ceil(rentalDays / 30);
        carPrice = (prices.monthly || 0) * months;
        break;
      }
      case "yearly": {
        const years = Math.ceil(rentalDays / 365);
        carPrice = (prices.yearly || 0) * years;
        break;
      }
      default:
        carPrice = (prices.daily || 0) * rentalDays;
    }

    return carPrice;
  };

  const getExtraServicesTotal = (reservation) => {
    if (
      !reservation?.extraServices ||
      !Array.isArray(reservation.extraServices)
    )
      return 0;

    return reservation.extraServices.reduce(
      (total, service) =>
        total + (service.price || 0) * (service.quantity || 1),
      0
    );
  };
  const handleReservationSelect = (reservation) => {
    const selectedReservation = reservations.find(
      (r) => r._id === reservation._id
    );
    if (selectedReservation) {
      const rentalDays = getRentalPeriod(selectedReservation);
      const carPrice = getCarPrice(selectedReservation);
      const totalCarPricing = getTotalCarPricing(selectedReservation);
      const extraServicesTotal = getExtraServicesTotal(selectedReservation);
      const items = [];
      items.push({
        description: `Car Rental - ${
          selectedReservation.car?.carName || "Car"
        }`,
        quantity: rentalDays,
        netPrice: carPrice,
        tax: 0,
        totalPrice: totalCarPricing,
      });
      if (selectedReservation.extraServices) {
        selectedReservation.extraServices.forEach((service, index) => {
          if (service && service.name) {
            items.push({
              description: `Extra Service - ${service.name}`,
              quantity: service.quantity || 1,
              netPrice: service.price || 0,
              tax: 0,
              totalPrice: service.price * service.quantity,
            });
          }
        });
      }
      if (
        selectedReservation.securityDeposit &&
        selectedReservation.securityDeposit > 0
      ) {
        items.push({
          description: "Security Deposit",
          quantity: 1,
          netPrice: selectedReservation.securityDeposit,
          tax: 0,
          totalPrice: selectedReservation.securityDeposit,
        });
      }
      if (
        selectedReservation.driverPrice &&
        selectedReservation.driverPrice > 0
      ) {
        items.push({
          description: "Driver Service",
          quantity: rentalDays,
          netPrice: selectedReservation.driverPrice,
          tax: 0,
          totalPrice: selectedReservation.driverPrice * rentalDays,
        });
      }
      setInvoiceData((prev) => ({
        ...prev,
        reservationId: selectedReservation._id,
        carId: selectedReservation.car?._id || "",
        to: selectedReservation.customer?._id || "",
        fromDate: selectedReservation.pickupDate
          ? selectedReservation.pickupDate.split("T")[0]
          : "",
        dueDate: selectedReservation.dropDate
          ? selectedReservation.dropDate.split("T")[0]
          : "",
        items: items,
      }));
      const modal = document.getElementById("link_reservation");
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  };

  const fetchinvoice = async () => {
    const res = await apiService.getInvoiceDetails(id);
    setInvoice(res.data.data);
invoiceData.invoiceNumber = invoice.invoiceNumber



  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const invoicePayload = {
        ...invoiceData,
        subtotal,
        taxTotal,
        totalAmount: total,
        issuedDate: new Date().toISOString(),
        items: invoiceData.items.map((item) => ({
          ...item,
          quantity: Number(item.quantity),
          netPrice: Number(item.netPrice),
          tax: Number(item.tax),
          totalPrice: Number(item.totalPrice),
        })),
      };

      const res = await apiService.editInvoice(id, invoicePayload);

      if (res.data.success) {
        toast.success("Invoice created successfully!");
        navigate("/admin-dashboard-invoices");
      }
    } catch (err) {
      console.error("Error creating invoice:", err);
      toast.error("Failed to create invoice");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content me-4">
          <div className="mb-3">
            <Link
              to="/admin-dashboard/all-invoice"
              className="d-inline-flex align-items-center fw-medium"
            >
              <i className="ti ti-arrow-narrow-left me-2" />
              Back to List
            </Link>
          </div>
          <div className="filterbox mb-3 d-flex align-items-center invoice-title">
            <h4 className="me-3">
              <i className="ti ti-menu-2 me-2" />
              Edit Invoice
            </h4>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <div className="border-bottom mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="me-lg-3">
                      <h5 className="mb-3">Invoice Details</h5>
                      <div className="row gx-3">
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Invoice Number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={reservation?.invoiceNumber}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Car</label>
                            <select className="select">
                              <option>{reservation}</option>
                              <option>Ford Endeavour</option>
                              <option selected>Ferrari 458 MM</option>
                              <option>Ford Mustang</option>
                              <option>Toyota Tacoma 4</option>
                              <option>Chevrolet Truck</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">From Date</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Due Date</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Currency</label>
                            <select className="select">
                              <option>Select</option>
                              <option selected>Dollor</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Status</label>
                            <select className="select">
                              <option>Select</option>
                              <option selected>Paid</option>
                              <option>Pending</option>
                              <option>Overdue</option>
                              <option>Unpaid</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ms-lg-3">
                      <h5 className="mb-3">Billing Details</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label">From</label>
                            <select className="select">
                              <option selected>Dreams Rent</option>
                              <option>Ford Endeavour</option>
                              <option>Ferrari 458 MM</option>
                              <option>Ford Mustang</option>
                              <option>Toyota Tacoma 4</option>
                              <option>Chevrolet Truck</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-2">
                            <div className="d-flex align-items-center justify-content-between">
                              <label className="form-label">To</label>
                              <a
                                href="javascript:void(0);"
                                className="text-info d-block mb-1"
                              >
                                Add New
                              </a>
                            </div>
                            <select className="select">
                              <option>Select Customer</option>
                              <option selected>Andrew Simons</option>
                              <option>David Steiger</option>
                              <option>Virginia Phu</option>
                              <option>Walter Hartmann</option>
                              <option>Andrea Jermaine</option>
                            </select>
                          </div>
                          <div className="bg-light border p-3 rounded mb-3">
                            <div className="d-flex align-items-center mb-2">
                              <a
                                href="javascript:void(0);"
                                className="avatar avatar-lg me-2 avatar-rounded"
                              >
                                <img
                                  src="/admin-assets/img/profiles/avatar-21.jpg"
                                  alt
                                />
                              </a>
                              <div>
                                <h6 className="fs-14">
                                  <a href="javascript:void(0);">David Seigar</a>
                                </h6>
                                <p>20 Cooper Square, New York, NY 10003, USA</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-2 ">
                                Contact : +447123456789
                              </p>
                              <p>
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="245d4b515615161764415c45495448410a474b49"
                                >
                                  [email&nbsp;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mb-3">Rental Details</h5>
                <div className="table-responsive border border-gray br-10 mb-3">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th className="w-50">DESCRIPTION</th>
                        <th>QUANTITY</th>
                        <th>NET PRICE</th>
                        <th>TAX</th>
                        <th>TOTAL PRICE</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Car Rental (Toyota Camry 2024)"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="5 Days"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={50.0}
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="12.50"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="262.50"
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <a href className="btn btn-icon btn-sm text-danger">
                              <i className="ti ti-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="GPS Navigation"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1 Unit"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={10.0}
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1.50"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="11.50"
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <a href className="btn btn-icon btn-sm text-danger">
                              <i className="ti ti-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Additional Driver"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1 Person"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={15.0}
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="2.25"
                            />
                          </div>
                        </td>
                        <td className="pe-0">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="17.25"
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <a href className="btn btn-icon btn-sm text-danger">
                              <i className="ti ti-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-secondary d-inline-flex align-items-center me-2"
                  >
                    <i className="ti ti-plus me-1" />
                    Add More
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#link_reservation"
                  >
                    Link Reservation
                  </a>
                </div>
                <div className="border-bottom mb-3">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="me-lg-4">
                        <h5 className="mb-3">Others</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Payment Method
                              </label>
                              <select className="select">
                                <option>Select</option>
                                <option>Bank Transfer</option>
                                <option>Paypal</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Terms &amp; Conditions{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                rows={3}
                                defaultValue={
                                  "The car must be returned in the same condition as rented. Additional charges may apply for damages, late returns, or excessive mileage."
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Notes <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                rows={3}
                                defaultValue={
                                  "All charges are final and include applicable taxes, fees, and additional costs incurred during the rental period."
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card bg-light">
                        <div className="card-body">
                          <div className="border-bottom mb-3">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <span>Subtotal</span>
                              <h6>$290.27</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <span>Discount (0%)</span>
                              <h6 className="text-danger fs-14 fw-medium">
                                $0.00
                              </h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <span>TAX (0%)</span>
                              <h6>$30.30</h6>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <h4>Total Amount </h4>
                            <h4>$320.27</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <a href="javascript:void(0);" className="btn btn-light me-2">
                  Cancel
                </a>
                <a href="javascript:void(0);" className="btn btn-primary">
                  Save &amp; Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Link Reservation */}
      <div className="modal fade" id="link_reservation">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Link Reservation</h5>
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
              {/* Custom Data Table */}
              <div className="custom-datatable-filter table-responsive">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th className="no-sort">ID</th>
                      <th>CAR</th>
                      <th>CUSTOMER</th>
                      <th>PICK UP DETAILS</th>
                      <th>DROP OFF DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link
                          to="reservation-details"
                          className="text-info d-block mb-1"
                        >
                          #BR3466
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar me-2 flex-shrink-0"
                          >
                            <img src="/admin-assets/img/car/car-01.jpg" alt />
                          </a>
                          <div>
                            <h6 className="fs-14">
                              <a href="javascript:void(0);">Ford Endeavour</a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-rounded me-2 flex-shrink-0"
                          >
                            <img
                              src="/admin-assets/img/customer/customer-01.jpg"
                              alt
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 fs-14">
                              <a href="javascript:void(0);">Reuben Keen</a>
                            </h6>
                            <span className="badge bg-secondary-transparent rounded-pill">
                              Client
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">12</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Newyork </p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">13</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Newyork </p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to="reservation-details"
                          className="text-info d-block mb-1"
                        >
                          #FR7321
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar me-2 flex-shrink-0"
                          >
                            <img src="/admin-assets/img/car/car-02.jpg" alt />
                          </a>
                          <div>
                            <h6 className="fs-14">
                              <a href="javascript:void(0);">Ferrari 458 MM</a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-rounded me-2 flex-shrink-0"
                          >
                            <img
                              src="/admin-assets/img/customer/customer-02.jpg"
                              alt
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 fs-14">
                              <a href="javascript:void(0);">William Jones</a>
                            </h6>
                            <span className="badge bg-secondary-transparent rounded-pill">
                              Company
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">14</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Los Angeles</p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">16</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Newyork </p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to="reservation-details"
                          className="text-info d-block mb-1"
                        >
                          #FD8414
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar me-2 flex-shrink-0"
                          >
                            <img src="/admin-assets/img/car/car-03.jpg" alt />
                          </a>
                          <div>
                            <h6 className="fs-14">
                              <a href="javascript:void(0);">Ford Mustang </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-rounded me-2 flex-shrink-0"
                          >
                            <img
                              src="/admin-assets/img/customer/customer-03.jpg"
                              alt
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 fs-14">
                              <a href="javascript:void(0);">Leonard Jandreau</a>
                            </h6>
                            <span className="badge bg-secondary-transparent rounded-pill">
                              Company
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">19</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Chicago </p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-2 fs-16">22</h5>
                            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                              Feb, 2025
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-9 mb-0">Newyork </p>
                            <span className="fs-13">01:00 PM</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Custom Data Table */}
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a href="javascript:void(0);" className="btn btn-primary">
                  Create New
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Link Reservation */}
    </div>
  );
};

export default AdminEditEnvoice;
