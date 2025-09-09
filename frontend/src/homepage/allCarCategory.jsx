import React from 'react'

const AllCarCategory = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="accordion custom-accordion" id="faqAcordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                View All Cars &amp; Categories
              </button>
            </h2>
            <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAcordion">
              <div className="accordion-body">
                <div className="row row-gap-3">
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">Coupe</a></li>
                      <li><a href="javascript:void(0);">Convertible</a></li>
                      <li><a href="javascript:void(0);">Hatchback</a></li>
                      <li><a href="javascript:void(0);">Sport utility vehicles</a></li>
                      <li><a href="javascript:void(0);">Minivan</a></li>
                      <li><a href="javascript:void(0);">Pickup Truck</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">Sports car</a></li>
                      <li><a href="javascript:void(0);">SUV</a></li>
                      <li><a href="javascript:void(0);">Wagon</a></li>
                      <li><a href="javascript:void(0);">Crossover</a></li>
                      <li><a href="javascript:void(0);">Electric vehicle</a></li>
                      <li><a href="javascript:void(0);">Jeep</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">C1-segment cars</a></li>
                      <li><a href="javascript:void(0);">Compact car</a></li>
                      <li><a href="javascript:void(0);">Hatchback</a></li>
                      <li><a href="javascript:void(0);">Luxury car</a></li>
                      <li><a href="javascript:void(0);">MPV</a></li>
                      <li><a href="javascript:void(0);">Van</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">Maruti Suzuki</a></li>
                      <li><a href="javascript:void(0);">Hyundai</a></li>
                      <li><a href="javascript:void(0);">Tata Motors</a></li>
                      <li><a href="javascript:void(0);">Skoda</a></li>
                      <li><a href="javascript:void(0);">Volkswagen</a></li>
                      <li><a href="javascript:void(0);">Renault</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">Toyota</a></li>
                      <li><a href="javascript:void(0);">Nissan</a></li>
                      <li><a href="javascript:void(0);">MG Motor</a></li>
                      <li><a href="javascript:void(0);">Kia</a></li>
                      <li><a href="javascript:void(0);">Ford</a></li>
                      <li><a href="javascript:void(0);">Jeep</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <ul className="category-list">
                      <li><a href="javascript:void(0);">Coupe</a></li>
                      <li><a href="javascript:void(0);">Convertible</a></li>
                      <li><a href="javascript:void(0);">Hatchback</a></li>
                      <li><a href="javascript:void(0);">Sport utility vehicles</a></li>
                      <li><a href="javascript:void(0);">Minivan</a></li>
                      <li><a href="javascript:void(0);">Pickup Truck</a></li>
                    </ul>
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

export default AllCarCategory