import React, { useEffect, useState } from "react";
import apiService from "../../Apiservice/apiService";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await apiService.getFaqHomePage();
        setFaqs(response.data.faqs || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <section className="faq-section-four pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading heading-four">
              <h2>Frequently asked questions</h2>
              <p>Explore to learn more about how we can empower your business</p>
            </div>
            <div className="accordion faq-accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={faq._id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`faq${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
