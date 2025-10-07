import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  // ✅ Redirect with filter params
  const handleCategoryClick = (carType) => {
    navigate(`/listing?carType=${encodeURIComponent(carType)}`);
  };

  const categories = [
    { name: "Sports Coupe", cars: 14, img: "/user-assets/img/category/category-01.png" },
    { name: "Sedan", cars: 12, img: "/user-assets/img/category/category-02.png" },
    { name: "Sports Car", cars: 35, img: "/user-assets/img/category/category-03.png" },
    { name: "Pickup", cars: 35, img: "/user-assets/img/category/category-04.png" },
    { name: "Family MPV", cars: 35, img: "/user-assets/img/category/category-05.png" },
    { name: "Crossover", cars: 30, img: "/user-assets/img/category/category-06.png" },
  ];

  return (
    <section className="category-section-four">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Heading title */}
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2>Featured Categories</h2>
              <p>
                Know what you’re looking for? Browse our extensive selection of cars
              </p>
            </div>

            {/* Category list */}
            <div className="row row-gap-4">
              {categories.map((cat, index) => (
                <div key={index} className="col-xl-2 col-md-4 col-sm-6 d-flex">
                  <div
                    className="category-item flex-fill"
                    onClick={() => handleCategoryClick(cat.name)}
                    style={{ cursor: "pointer" }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="category-info d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="title">{cat.name}</h6>
                        <p>{cat.cars} Cars</p>
                      </div>
                      <i className="bx bx-right-arrow-alt link-icon" />
                    </div>
                    <div className="category-img">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All */}
            <div className="view-all-btn text-center aos" data-aos="fade-down">
              <button
                onClick={() => navigate("/listing")}
                className="btn btn-secondary"
              >
                View All <i className="bx bx-right-arrow-alt ms-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
