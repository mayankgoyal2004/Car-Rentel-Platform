import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService"; // make sure correct path

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 4; // testimonials per page

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await apiService.getAllTestimocialUser({
          page: currentPage,
          limit,
        });
        setTestimonials(response.data.testimonials || []);
        setTotalPages(response.data.pages || 1); // ✅ fixed
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Testimonials</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Testimonials
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="container">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : testimonials.length === 0 ? (
              <p className="text-center">No testimonials available</p>
            ) : (
              <div className="testimonial-group">
                <div className="row">
                  {testimonials.map((t) => (
                    <div key={t._id} className="col-lg-6 col-12 d-flex mb-4">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="review-box d-flex align-items-center">
                            <div className="review-profile me-3">
                              <div className="review-img">
                                <img
                                  src={BASE_URL_IMG + t.image}
                                  className="img-fluid"
                                  alt={t.customer}
                                />
                              </div>
                            </div>
                            <div className="review-details">
                              <h6>{t.customer}</h6>
                              <div className="list-rating">
                                <div className="list-rating-star">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <i
                                      key={i}
                                      className={`fas fa-star ${
                                        i < t.rating ? "filled" : ""
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p>
                                  <span>({t.rating}.0)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3">{t.review}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
