import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";

const AdminEditEnvoice = () => {
  const { id } = useParams();
  const [reservations, setReservations] = useState([]);
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
      setReservations(res.data.data);
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
    } catch (err) {
      console.error("Error fetching Owner Details:", err);
    } finally {
      setLoading(false);
    }
  };

  const getCustomers = async () => {
    setLoading(true);
    try {
      const res = await apiService.getAllCustomerAdmin();
      setCustomers(res.data.data);
    } catch (err) {
      console.error("Error fetching Customers:", err);
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

  const fetchInvoice = async () => {
    try {
      setLoading(true);
      const res = await apiService.getInvoiceDetails(id);
      const invoiceData = res.data.data;
      setInvoice(invoiceData);

      console.log("Fetched invoice data:", invoiceData); // Debug log

      // Set the form data with the fetched invoice data - matching your API structure
      setInvoiceData({
        invoiceNumber: invoiceData.invoiceNumber || "",
        carId: invoiceData.car || "", // Note: your API has "car" not "carId"
        reservationId: invoiceData.reservation?._id || "",
        fromDate: invoiceData.fromDate
          ? invoiceData.fromDate.split("T")[0]
          : "",
        dueDate: invoiceData.dueDate ? invoiceData.dueDate.split("T")[0] : "",
        currency: invoiceData.currency || "USD",
        status: invoiceData.status || "pending",
        from: invoiceData.from?.name || "", // From is an object with name
        to: invoiceData.to?.name || invoiceData.customer?._id || "", // To is an object with name, fallback to customer ID
        paymentMethod: invoiceData.paymentMethod || "",
        terms: invoiceData.terms || "",
        notes: invoiceData.notes || "",
        items: invoiceData.items || [
          {
            description: "Car Rental",
            quantity: 1,
            netPrice: 0,
            tax: 0,
            totalPrice: 0,
          },
        ],
      });
    } catch (err) {
      console.error("Error fetching invoice:", err);
      toast.error("Failed to load invoice");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
    getOwnerDetails();
    getCustomers();
    getCars();
    if (id) {
      fetchInvoice();
    }
  }, [id]);

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

  const handleReservationSelect = (selectedReservation) => {
    if (selectedReservation) {
      const rentalDays = getRentalPeriod(selectedReservation);
      const carPrice = getCarPrice(selectedReservation);
      const totalCarPricing = getTotalCarPricing(selectedReservation);
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
        selectedReservation.extraServices.forEach((service) => {
          if (service && service.name) {
            items.push({
              description: `Extra Service - ${service.name}`,
              quantity: service.quantity || 1,
              netPrice: service.price || 0,
              tax: 0,
              totalPrice: (service.price || 0) * (service.quantity || 1),
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

      // Close modal
      const modal = document.getElementById("link_reservation");
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
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
        toast.success("Invoice updated successfully!");
        navigate("/admin-dashboard/all-invoice");
      }
    } catch (err) {
      console.error(" Error updating invoice:", err);
      toast.error("Failed to update invoice");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin-dashboard-invoices");
  };

  // Find the selected customer for display
  const selectedCustomer =
    customers.find((customer) => customer._id === invoiceData.to) ||
    customers.find((customer) => customer.name === invoiceData.to);

  if (loading && !invoiceData.invoiceNumber) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div>
      <div className="page-wrapper">
        <div className="content me-4">
          <div className="mb-3">
            <Link
              to="/admin-dashboard-invoices"
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
          <form onSubmit={handleSubmit}>
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
                              <label className="form-label">
                                Invoice Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={invoiceData.invoiceNumber}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Car</label>
                              <select
                                value={invoiceData.carId}
                                onChange={handleInputChange}
                                className="form-select"
                                name="carId"
                              >
                                <option value="">Select Car</option>
                                {car.map((car) => (
                                  <option key={car._id} value={car._id}>
                                    {car.carName || car.model}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">From Date</label>
                              <div className="input-icon-end position-relative">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="fromDate"
                                  value={invoiceData.fromDate}
                                  onChange={handleInputChange}
                                  required
                                />
                                <span className="input-icon-addon">
                                   
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Due Date</label>
                              <div className="input-icon-end position-relative">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="dueDate"
                                  value={invoiceData.dueDate}
                                  onChange={handleInputChange}
                                  required
                                />
                                <span className="input-icon-addon">
                                   
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Currency</label>
                              <select
                                className="form-select"
                                name="currency"
                                value={invoiceData.currency}
                                onChange={handleInputChange}
                              >
                                <option value="USD">USD</option>
                              
                                <option value="Dollor">Dollor</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Status</label>
                              <select
                                className="form-select"
                                name="status"
                                value={invoiceData.status}
                                onChange={handleInputChange}
                              >
                                <option value="pending">Pending</option>
                                <option value="paid">Paid</option>
                                <option value="overdue">Overdue</option>
                                <option value="unpaid">Unpaid</option>
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
                              <input
                                type="text"
                                className="form-control"
                                name="from"
                                value={invoiceData.from}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-label">To</label>
                                <Link
                                  to="/admin-dashboard/customers/add"
                                  className="text-info d-block mb-1"
                                >
                                  Add New
                                </Link>
                              </div>
                              <select
                                className="form-select"
                                name="to"
                                value={invoiceData.to}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="">Select Customer</option>
                                {customers.map((customer) => (
                                  <option
                                    key={customer._id}
                                    value={customer._id}
                                  >
                                    {customer.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items section remains the same */}
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
                        {invoiceData.items.map((item, index) => (
                          <tr key={index}>
                            <td className="pe-0">
                              <input
                                type="text"
                                className="form-control"
                                value={item.description}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "description",
                                    e.target.value
                                  )
                                }
                                required
                              />
                            </td>
                            <td className="pe-0">
                              <input
                                type="number"
                                className="form-control"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "quantity",
                                    e.target.value
                                  )
                                }
                                min="1"
                                required
                              />
                            </td>
                            <td className="pe-0">
                              <input
                                type="number"
                                className="form-control"
                                value={item.netPrice}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "netPrice",
                                    e.target.value
                                  )
                                }
                                step="0.01"
                                min="0"
                                required
                              />
                            </td>
                            <td className="pe-0">
                              <input
                                type="number"
                                className="form-control"
                                value={item.tax}
                                onChange={(e) =>
                                  handleItemChange(index, "tax", e.target.value)
                                }
                                step="0.01"
                                min="0"
                                required
                              />
                            </td>
                            <td className="pe-0">
                              <input
                                type="number"
                                className="form-control"
                                value={item.totalPrice.toFixed(2)}
                                readOnly
                              />
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm text-danger"
                                onClick={() => removeItem(index)}
                                disabled={invoiceData.items.length === 1}
                              >
                                <i className="ti ti-trash" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                    <button
                      type="button"
                      className="btn btn-secondary d-inline-flex align-items-center me-2"
                      onClick={addNewItem}
                    >
                      <i className="ti ti-plus me-1" />
                      Add More
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#link_reservation"
                    >
                      Link Reservation
                    </button>
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
                                <select
                                  className="form-select"
                                  name="paymentMethod"
                                  value={invoiceData.paymentMethod}
                                  onChange={handleInputChange}
                                >
                                  <option value="credit_card">
                                    Credit Card
                                  </option>
                                  <option value="bank_transfer">
                                    Bank Transfer
                                  </option>
                                  <option value="paypal">PayPal</option>
                                  <option value="cash">Cash</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Terms & Conditions{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <textarea
                                  className="form-control"
                                  rows={3}
                                  name="terms"
                                  value={invoiceData.terms}
                                  onChange={handleInputChange}
                                  required
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
                                  name="notes"
                                  value={invoiceData.notes}
                                  onChange={handleInputChange}
                                  required
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
                                <h6>${subtotal.toFixed(2)}</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <span>Discount (0%)</span>
                                <h6 className="text-danger fs-14 fw-medium">
                                  $0.00
                                </h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <span>TAX</span>
                                <h6>${taxTotal.toFixed(2)}</h6>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <h4>Total Amount</h4>
                              <h4>${total.toFixed(2)}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Invoice"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Link Reservation Modal - same as before */}
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
              <div className="custom-datatable-filter table-responsive">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th>ID</th>
                      <th>CAR</th>
                      <th>CUSTOMER</th>
                      <th>PICK UP DETAILS</th>
                      <th>DROP OFF DETAILS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation._id}>
                        <td>#{reservation.bookingId}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar me-2 flex-shrink-0">
                              <img
                                src={BASE_URL_IMG + reservation.car?.image}
                                alt={reservation.car?.carName}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div>
                              <h6 className="fs-14">
                                {reservation.car?.carName}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-rounded me-2 flex-shrink-0">
                              <img
                                src={BASE_URL_IMG + reservation.customer?.image}
                                alt={reservation.customer?.name}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div>
                              <h6 className="mb-1 fs-14">
                                {reservation.customer?.name}
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
                              <h5 className="mb-2 fs-16">
                                {new Date(reservation.pickupDate).getDate()}
                              </h5>
                              <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                                {new Date(
                                  reservation.pickupDate
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div>
                              <p className="text-gray-9 mb-0">
                                {reservation.pickupAddress}
                              </p>
                              <span className="fs-13">
                                {new Date(
                                  reservation.pickupDate
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                              <h5 className="mb-2 fs-16">
                                {new Date(reservation.dropDate).getDate()}
                              </h5>
                              <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
                                {new Date(
                                  reservation.dropDate
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div>
                              <p className="text-gray-9 mb-0">
                                {reservation.dropAddress}
                              </p>
                              <span className="fs-13">
                                {new Date(
                                  reservation.dropDate
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => handleReservationSelect(reservation)}
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditEnvoice;
