import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../Apiservice/apiService"; // adjust path

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // FAQs per page

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await apiService.getAllactiveFaquser({
          page: currentPage,
          limit,
        });
        setFaqs(response.data.faqs || []);
        setTotalPages(response.data.pages || 1); // same fix like testimonials
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="main-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">FAQ</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : faqs.length === 0 ? (
            <p className="text-center">No FAQs available</p>
          ) : (
            <div className="faq-info">
              {faqs.map((faq, i) => (
                <div className="faq-card bg-white" key={faq._id || i}>
                  <h4 className="faq-title">
                    <a
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href={`#faq${faq._id}`}
                      aria-expanded="false"
                    >
                      {faq.question}
                    </a>
                  </h4>
                  <div id={`faq${faq._id}`} className="card-collapse collapse">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center mt-4">
                <nav>
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 && "disabled"
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        Prev
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        currentPage === totalPages && "disabled"
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
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faq;
