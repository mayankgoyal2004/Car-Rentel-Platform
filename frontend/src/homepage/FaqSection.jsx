import React from 'react'

const Faq = () => {
  return (
       <section className="faq-section-four pt-0">
      <div className="container">	
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading heading-four" >
              <h2>Frequently asked questions</h2>
              <p>Explore to learn more about how can empower your business</p>
            </div>				
            <div className="accordion faq-accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                    How old do I need to be to rent a car?
                  </button>
                </h2>
                <div id="faqOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="true" aria-controls="faqTwo">
                    What documents do I need to rent a car?
                  </button>
                </h2>
                <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="true" aria-controls="faqThree">
                    What types of vehicles are available for rent?
                  </button>
                </h2>
                <div id="faqThree" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour" aria-expanded="true" aria-controls="faqFour">
                    Can I rent a car with a debit card?
                  </button>
                </h2>
                <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive" aria-expanded="true" aria-controls="faqFive">
                    What is your fuel policy?
                  </button>
                </h2>
                <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqSix" aria-expanded="true" aria-controls="faqSix">
                    Can I add additional drivers to my rental agreement?
                  </button>
                </h2>
                <div id="faqSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <p>You can browse our selection online or contact us for assistance in choosing the right vehicle for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq