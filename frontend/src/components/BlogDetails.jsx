import React from "react";
import { Link, useParams } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { useEffect } from "react";
import { useState } from "react";

const BlogDetails = () => {
   const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
    const { slug } = useParams();
  const fetchBlog = async () => {
    try {
      const res = await apiService.getSingleBlog(slug);
       if (res.data.success) {
        setBlog(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

   useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  return (
    <div>
      <div className="main-wrapper">
        {/* Breadscrumb Section */}
        <div className="blogbanner">
          <div className="blogbanner-content">
            <span className="blog-hint">Health</span>
            <h1>The Top 25 Bike Stores in Toronto by Neighbourhood</h1>
            <ul className="entry-meta meta-item justify-content-center">
              <li>
                <div className="post-author">
                  <div className="post-author-img">
                    <img
                      src="/user-assets/img/profiles/avatar-01.jpg"
                      alt="author"
                    />
                  </div>
                  <a href="javascript:void(0)">
                    <span> John Doe </span>
                  </a>
                </div>
              </li>
              <li className="date-icon">
                <i className="fa-solid fa-calendar-days" /> October 6, 2022
              </li>
            </ul>
          </div>
        </div>
        {/* /Breadscrumb Section */}
        {/* Blog Grid*/}
        <div className="blog-section">
          <div className="container">
            <div className="blog-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vehicula sapien nec nisi aliquam, vitae finibus purus
                sodales. Mauris at turpis nulla. Curabitur nec tellus est. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Vestibulum pharetra arcu ac arcu varius,
                non congue neque aliquet. Pellentesque at feugiat purus. Aenean
                faucibus vehicula eros.
              </p>
              <p>
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                consectetur semper, mauris nulla aliquam risus, nec ultricies
                sapien elit sed ante. Aenean luctus felis in sem consequat
                auctor. Nulla turpis enim, scelerisque sit amet consectetur vel,
                lacinia sed augue. Proin ultricies dui id ex fringilla porta.
                Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                ipsum, in malesuada justo risus nec lorem. Nam augue augue,
                mollis nec condimentum euismod, lacinia ultricies leo.
              </p>
            </div>
            <blockquote className="blog-quotes">
              <img src="/user-assets/img/blogquote.svg" alt="quotes" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vehicula sapien nec nisi aliquam, vitae finibus purus
                sodales. Mauris at turpis nulla. Curabitur nec tellus est. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Vestibulum pharetra arcu ac arcu varius,
                non congue neque aliquet. Pellentesque at feugiat purus. Aenean
                faucibus vehicula eros.
              </p>
              <h6>Luis Pickford</h6>
            </blockquote>
            <div className="blog-description">
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                consectetur semper, mauris nulla aliquam risus, nec ultricies
                sapien elit sed ante. Aenean luctus felis in sem consequat
                auctor. Nulla turpis enim, scelerisque sit amet consectetur vel,
                lacinia sed augue. Proin ultricies dui id ex fringilla porta.
                Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
                ipsum, in malesuada justo risus nec lorem. Nam augue augue,
                mollis nec condimentum euismod, lacinia ultricies leo.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="bloginner-img">
                  <img
                    src="/user-assets/img/blog/blog-detail-01.jpg"
                    className="img-fluid"
                    alt="Blog"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="bloginner-img">
                  <img
                    src="/user-assets/img/blog/blog-detail-02.jpg"
                    className="img-fluid"
                    alt="Blog"
                  />
                </div>
              </div>
            </div>
            <div className="share-postsection">
              <div className="row">
                <div className="col-lg-4">
                  <div className="sharelink d-flex align-items-center">
                    <a href="javascript:void(0);" className="share-img">
                      <i className="feather-share-2" />
                    </a>
                    <a href="javascript:void(0);" className="share-text">
                      Share
                    </a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tag-list">
                    <ul className="tags">
                      <li>Rims </li>
                      <li>Speed </li>
                      <li>Make </li>
                      <li>Transmission </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogdetails-pagination">
              <ul>
                <li>
                  <Link to="/blog-details" className="prev-link">
                    <i className="fas fa-regular fa-arrow-left" /> Previous Post
                  </Link>
                  <Link to="/blog-details">
                    <h3>The Best SPA Salons For Your Relaxation</h3>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/blogDetails" className="next-link">
                    Next Post <i className="fas fa-regular fa-arrow-right" />{" "}
                  </Link>
                  <Link to="/blog-details">
                    <h3>8 Amazing Tricks About Business</h3>{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="review-sec mb-0">
              <div className="review-header">
                <h4>
                  Reviews<span>(2)</span>
                </h4>
                <div className="reviewbox-list-rating">
                  <p>
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span> (5 out of 5)</span>
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div className="review-header-group">
                  <div className="review-widget-header">
                    <span className="review-widget-img">
                      <img
                        src="/user-assets/img/profiles/avatar-01.jpg"
                        className="img-fluid"
                        alt="Blog"
                      />
                    </span>
                    <div className="review-design">
                      <h6>Johnson</h6>
                      <p>02 Jan 2023</p>
                    </div>
                  </div>
                  <div className="reviewbox-list-rating">
                    <p>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span> (5 out of 5)</span>
                    </p>
                  </div>
                </div>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.It was popularised in the 1960s{" "}
                </p>
              </div>
              <div className="review-card">
                <div className="review-header-group">
                  <div className="review-widget-header">
                    <span className="review-widget-img">
                      <img
                        src="/user-assets/img/profiles/avatar-02.jpg"
                        className="img-fluid"
                        alt="Blog"
                      />
                    </span>
                    <div className="review-design">
                      <h6>Casandra</h6>
                      <p>02 Jan 2023</p>
                    </div>
                  </div>
                  <div className="reviewbox-list-rating">
                    <p>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span> (5 out of 5)</span>
                    </p>
                  </div>
                </div>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.It was popularised in the 1960s{" "}
                </p>
              </div>
            </div>
            <div className="review-sec mb-0">
              <div className="review-header">
                <h4>Leave a Reply</h4>
              </div>
              <div className="card-body">
                <div className="review-list">
                  <ul>
                    <li className="review-box feedbackbox mb-0">
                      <div className="review-details">
                        <form action="/blogDetils">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="input-block">
                                <label>
                                  Full Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-block">
                                <label>
                                  Email Address{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-block">
                                <label>Comments </label>
                                <textarea
                                  rows={4}
                                  className="form-control"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="submit-section">
                            <button
                              className="btn btn-primary submit-review"
                              type="submit"
                            >
                              {" "}
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Blog Grid*/}
      </div>
    </div>
  );
};

export default BlogDetails;
