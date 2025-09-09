import React from "react";
import { Link } from "react-router-dom";

const Bloglist = () => {
  return (
    <div>
      <div className="main-wrapper">
        {/* Breadscrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">Blog List</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" >Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Blogs</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog List
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadscrumb Section */}
        {/* Blog List*/}
        <div className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-list-01.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <img
                                    src="/user-assets/img/profiles/avatar-13.jpg"
                                    alt="author"
                                  />
                                </div>
                                <a href="javascript:void(0)">
                                  {" "}
                                  <span> Alphonsa Daniel </span>
                                </a>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 6, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <a href="javascript:void(0)">
                              <span>Dealers</span>
                            </a>
                            <a href="javascript:void(0)">
                              <span>Car Showcase</span>
                            </a>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link    to ="/blog-details">
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                             to ="/blog-details"
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-list-02.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <img
                                    src="/user-assets/img/profiles/avatar-03.jpg"
                                    alt="author"
                                  />
                                </div>
                                <a href="javascript:void(0)">
                                  {" "}
                                  <span> Helan </span>
                                </a>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 15, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <a href="javascript:void(0)">
                              <span>Dealers</span>
                            </a>
                            <a href="javascript:void(0)">
                              <span>Car Showcase</span>
                            </a>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link    to ="/blog-details">
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                             to ="/blog-details"
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-list-03.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <img
                                    src="/user-assets/img/profiles/avatar-05.jpg"
                                    alt="author"
                                  />
                                </div>
                                <a href="javascript:void(0)">
                                  {" "}
                                  <span> Rabien Ustoc </span>
                                </a>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 17, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <a href="javascript:void(0)">
                              <span>Dealers</span>
                            </a>
                            <a href="javascript:void(0)">
                              <span>Car Showcase</span>
                            </a>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link    to ="/blog-details">
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                             to ="/blog-details"
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-list-04.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <img
                                    src="/user-assets/img/profiles/avatar-06.jpg"
                                    alt="author"
                                  />
                                </div>
                                <a href="javascript:void(0)">
                                  {" "}
                                  <span> Valerie L. Ellis </span>
                                </a>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Mar 10, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <a href="javascript:void(0)">
                              <span>Dealers</span>
                            </a>
                            <a href="javascript:void(0)">
                              <span>Car Showcase</span>
                            </a>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link    to ="/blog-details">
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                             to ="/blog-details"
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Pagination*/}
                <div className="pagination">
                  <nav>
                    <ul className="pagination mt-0">
                      <li className="previtem">
                        <a className="page-link" href="#">
                          <i className="fas fa-regular fa-arrow-left me-2" />{" "}
                          Prev
                        </a>
                      </li>
                      <li className="justify-content-center pagination-center">
                        <div className="page-group">
                          <ul>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="active page-link" href="#">
                                2{" "}
                                <span className="visually-hidden">
                                  (current)
                                </span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                5
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nextlink">
                        <a className="page-link" href="#">
                          Next{" "}
                          <i className="fas fa-regular fa-arrow-right ms-2" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*/Pagination*/}
              </div>
              <div className="col-lg-4 theiaStickySidebar">
                <div className="rightsidebar">
                  <div className="card">
                    <h4>
                      <img
                        src="/user-assets/img/icons/details-icon.svg"
                        alt="details-icon"
                      />{" "}
                      Filter
                    </h4>
                    <div className="filter-content looking-input input-block mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To Search type and hit enter"
                      />
                    </div>
                  </div>
                  <div className="card">
                    <h4>
                      <img
                        src="/user-assets/img/icons/category-icon.svg"
                        alt="details-icon"
                      />{" "}
                      Categories
                    </h4>
                    <ul className="blogcategories-list">
                      <li>
                        <a href="javascript:void(0)">Accept Credit Cards</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Smoking Allowed</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Bike Parking</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Street Parking</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Wireless Internet</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Pet Friendly</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card tags-widget">
                    <h4>
                      <i className="feather-tag" /> Tags
                    </h4>
                    <ul className="tags">
                      <li>Air </li>
                      <li>Engine </li>
                      <li>Item </li>
                      <li>On Road </li>
                      <li>Rims </li>
                      <li>Speed </li>
                      <li>Make </li>
                      <li>Transmission </li>
                    </ul>
                  </div>
                  <div className="card mb-0">
                    <h4>
                      <i className="feather-tag" />
                      Top Article
                    </h4>
                    <div className="article">
                      <div className="article-blog">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-3.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="article-content">
                        <h5>
                          <Link    to ="/blog-details">
                            Great Business Tips in 2023
                          </Link>
                        </h5>
                        <div className="article-date">
                          <i className="fa-solid fa-calendar-days" />
                          <span>Jan 6, 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-blog">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-4.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="article-content">
                        <h5>
                          <Link    to ="/blog-details">
                            Excited News About Cars.
                          </Link>
                        </h5>
                        <div className="article-date">
                          <i className="fa-solid fa-calendar-days" />
                          <span>Feb 5, 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-blog">
                        <Link    to ="/blog-details">
                          <img
                            className="img-fluid"
                            src="/user-assets/img/blog/blog-5.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="article-content">
                        <h5>
                          <Link    to ="/blog-details">
                            8 Amazing Tricks About Business
                          </Link>
                        </h5>
                        <div className="article-date">
                          <i className="fa-solid fa-calendar-days" />
                          <span>March 10, 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Blog Grid*/}
      </div>
      {/* scrollToTop start */}
      {/* <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919px, 307.919px",
              strokeDashoffset: "228.265px",
            }}
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Bloglist;
