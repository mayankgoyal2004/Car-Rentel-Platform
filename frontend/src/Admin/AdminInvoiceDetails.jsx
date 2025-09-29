import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";

const AdminInvoiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [printing, setPrinting] = useState(false);
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [bankAcount, setBankAccount] = useState(null);

  const getInvoiceLogo = async () => {
    const res = await apiService.getInvoiceLogo();
    if (res.data.data) {
      setLogo(res.data.data.logo);
    }
  };
  const getInvoiceSignature = async () => {
    const res = await apiService.getActiveSignature();
    if (res.data.data) {
      setSignature(res.data.data);
    }
  };
  const getBankAccount = async () => {
    const res = await apiService.getActiveBankAccount();
    if (res.data.data) {
      setBankAccount(res.data.data);
    }
  };

  useEffect(() => {
    getInvoiceSignature();
    getInvoiceLogo();
    getBankAccount();
  }, []);

  const fetchInvoiceDetails = async () => {
    setLoading(true);
    try {
      const res = await apiService.getInvoiceDetails(id);
      setInvoice(res.data.data);
    } catch (err) {
      console.error("Error fetching invoice details:", err);
      toast.error("Failed to load invoice details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchInvoiceDetails();
    }
  }, [id]);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 500);
  };

  const handleDownload = async () => {
    try {
      // You can implement PDF download functionality here
      // For now, we'll use print as download alternative
      handlePrint();
    } catch (err) {
      console.error("Error downloading invoice:", err);
      toast.error("Failed to download invoice");
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content me-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="page-wrapper">
        <div className="content me-4">
          <div className="text-center py-5">
            <h4>Invoice not found</h4>
            <p className="text-muted">
              The invoice you're looking for doesn't exist.
            </p>
            <Link to="/admin-dashboard-invoices" className="btn btn-primary">
              Back to Invoices
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
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

        <div className="filterbox mb-3 d-flex align-items-center justify-content-between invoice-title">
          <h4 className="me-3">
            <i className="ti ti-menu-2 me-2" />
            Invoice Details
          </h4>
          <h4 className=" badge badge-success"> {invoice.status}</h4>
        </div>

        <div className="card car-invoice">
          <div className="card-body">
            {/* Header Section */}
            <div className="row justify-content-between align-items-center border-bottom mb-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <h2 className="text-violet mb-3">#{invoice.invoiceNumber}</h2>
                  <p className="mb-1 fw-medium d-flex">
                    <span className="text-dark min-width-100 d-flex">
                      Created Date
                    </span>
                    {new Date(invoice.fromDate).toLocaleDateString()}
                  </p>
                  <p className="fw-medium d-flex">
                    <span className="text-dark min-width-100 d-flex">
                      Due Date
                    </span>
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-end mb-2">
                  <img
                    src={BASE_URL_IMG + logo}
                    className="invoice-logo img-fluid"
                    alt="logo"
                  />
                  <p className="mb-2">{invoice.from.name}</p>
                  <h4 className=" badge badge-success"> {invoice.status}</h4>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="row border-bottom mb-3">
              <div className="col-md-6">
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="text-dark mb-3 fw-semibold">From</h5>
                    <div>
                      <h6 className="mb-1">{invoice.from.name}</h6>
                      <p className="mb-1">{invoice.admin.address}</p>
                      <p className="mb-1">
                        Contact:{" "}
                        <span className="text-dark">
                          {invoice.admin.contact || "N/N"}
                        </span>
                      </p>
                      <p>{invoice.admin.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="text-dark mb-3 fw-semibold">To</h5>
                    <div>
                      <h6 className="mb-1">{invoice.customer.name}</h6>
                      <p className="mb-1">
                        {invoice.customer?.address || "Address not specified"}
                      </p>
                      <p className="mb-1">
                        Contact:{" "}
                        <span className="text-dark">
                          {invoice.customer?.contact || "N/A"}
                        </span>
                      </p>
                      <p>{invoice.customer?.email || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Items */}
            <div>
              <div className="table-responsive border border-gray br-10 mb-3">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>DESCRIPTION</th>
                      <th className="text-end">TYPE</th>
                      <th className="text-end">QUANTITY</th>
                      <th className="text-end">UNIT PRICE</th>
                      <th className="text-end">TAX</th>
                      <th className="text-end">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items &&
                      invoice.items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <h6 className="fw-semibold">{item.description}</h6>
                          </td>
                          <td className="text-gray-5 fw-medium text-end">
                            {item.description.includes("Rental")
                              ? "Car Rental"
                              : item.description.includes("Service")
                              ? "Add-on"
                              : item.description.includes("Insurance")
                              ? "Insurance"
                              : "Other"}
                          </td>
                          <td className="text-gray-5 fw-medium text-end">
                            {item.quantity.toFixed(2)}
                          </td>
                          <td className="text-gray-5 fw-medium text-end">
                            ${item.netPrice}
                          </td>
                          <td className="text-gray-5 fw-medium text-end">
                            ${item.tax.toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-bold text-end">
                            {item.totalPrice.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals and Notes */}
            <div className="row border-bottom mb-3">
              <div className="col-md-7">
                <div className="py-4">
                  <div className="mb-3">
                    <h6 className="mb-1">Terms and Conditions</h6>
                    <p>{invoice.terms}</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Notes</h6>
                    <p>{invoice.notes}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <p className="mb-0">Sub Total</p>
                  <p className="text-dark fw-medium mb-2">
                    $ {invoice.subtotal}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <p className="mb-0">Tax</p>
                  <p className="text-dark fw-medium mb-2">
                    ${invoice.taxTotal || 0}
                  </p>
                </div>
                <div className="d-flex justify-content-between border-bottom align-items-center pb-2 mb-2 pe-3">
                  <p className="mb-0">Discount</p>
                  <p className="text-danger fw-medium mb-2">$ {0}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <h5>Total Amount</h5>
                  <h5>$ {invoice.totalAmount}</h5>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="row justify-content-between align-items-center">
              <div className="col-md-9">
                <div className="d-flex align-items-center">
                  <div className="me-4">
                  
                  </div>
                  <div>
                    <h5 className="mb-2">Bank Details</h5>
                    <p className="mb-2 d-flex">
                      <span className="text-dark min-width-150 d-flex">
                        Bank Name
                      </span>
                      {bankAcount.bankName}
                    </p>
                    <p className="mb-2 d-flex">
                      <span className="text-dark min-width-150 d-flex">
                        Account Number
                      </span>
                      {bankAcount.accountNumber}
                    </p>
                    <p className="mb-2 d-flex">
                      <span className="text-dark min-width-150 d-flex">
                        IFSC Code
                      </span>
                      {bankAcount.ifsc}
                    </p>
                    <p className="mb-0 d-flex">
                      <span className="text-dark min-width-150 d-flex">
                        Payment Reference
                      </span>
                      {invoice.invoiceNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-end">
                  <img
                    src={BASE_URL_IMG + signature?.image}
                    className="img-fluid"
                    alt="signature"
                  />
                </div>
                <div className="text-end mb-3">
                  <h6 className="fs-14 fw-medium pe-3">{signature.name}</h6>
                  <p>Assistant Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <button
            onClick={handlePrint}
            disabled={printing}
            className="btn btn-primary d-flex justify-content-center align-items-center me-2"
          >
            <i className="ti ti-printer me-2" />
            {printing ? "Printing..." : "Print Invoice"}
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-dark d-flex justify-content-center align-items-center border"
          >
            <i className="ti ti-download me-2" />
            Download Invoice
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .page-wrapper {
            margin: 0;
            padding: 0;
          }
          .content {
            padding: 0;
          }
          .mb-3, .mb-4 {
            margin-bottom: 1rem !important;
          }
          .btn {
            display: none !important;
          }
          .filterbox {
            display: none !important;
          }
          .card {
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminInvoiceDetails;
