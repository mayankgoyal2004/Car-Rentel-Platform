import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await apiService.getTestominialHomePage();
        setTestimonials(response.data.testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-heading heading-four">
          <h2 className="demoFunction">Our Clients Feedback</h2>
          <p>
            Provided by customers about&nbsp;their&nbsp;experience with a
            product or service.
          </p>
        </div>

        <div className="row row-gap-4 justify-content-center">
          {loading ? (
            <p className="text-center">Loading testimonials...</p>
          ) : testimonials.length > 0 ? (
            testimonials.map((item) => (
              <div key={item._id} className="col-lg-4 col-md-6 d-flex">
                <div className="testimonial-item testimonial-item-two flex-fill">
                  <div className="user-img">
                    <img
                      src={BASE_URL_IMG + item.image}
                      className="img-fluid"
                      loading="lazy"
                      alt={item.customer}
                    />
                  </div>
                  <p>{item.review}</p>
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star filled" />
                    ))}
                  </div>
                  <div className="user-info">
                    <h6>{item.customer}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No testimonials available.</p>
          )}
        </div>

        <div className="view-all-btn text-center aos">
          <Link to="/testimonials" className="btn btn-secondary">
            View All
            <i className="bx bx-right-arrow-alt ms-1" />
          </Link>
        </div>

        {/* Client slider remains static */}
        <div className="client-slider owl-carousel">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <img
                src={`/user-assets/img/clients/client-0${i}.svg`}
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
