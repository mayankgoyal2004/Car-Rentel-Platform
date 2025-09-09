import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogSection = () => {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
  <section className="blog-section news-section pt-0">
  <div className="container">
    {/* Heading title*/}
    <div className="section-heading" data-aos="fade-down">
      <h2>News &amp; Insights For You</h2>
      <p>This blog post provides valuable insights into the benefits</p>
    </div>
    {/* /Heading title */}
    <div className="row">
      <div className="col-lg-4 col-md-6 d-lg-flex">
        <div className="blog grid-blog">
          <div className="blog-image">
            <Link to="/blog-details"><img className="img-fluid" src="/user-assets/img/blog/blog-4.jpg" alt="Post Image" /></Link>
          </div>
          <div className="blog-content">
            <p className="blog-category">
              <a href="javascript:void(0)"><span>Journey</span></a>
            </p>
            <h3 className="blog-title"><Link to="/blog-details">The 2023 Ford F-150 Raptor – A First Look</Link></h3>
            <p className="blog-description">Covers all aspects of the automotive industry with a focus on accessibility and consumer relevance.....</p>
            <ul className="meta-item mb-0">
              <li>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="/user-assets/img/profiles/avatar-04.jpg" alt="author" />
                  </div>
                  <a href="javascript:void(0)"> <span> Hellan </span></a>
                </div>
              </li>
              <li className="date-icon"><i className="fa-solid fa-calendar-days" /> <span>October 6, 2022</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-lg-flex">
        <div className="blog grid-blog">
          <div className="blog-image">
            <Link to="/blog-details"><img className="img-fluid" src="/user-assets/img/blog/blog-3.jpg" alt="Post Image" /></Link>
          </div>
          <div className="blog-content">
            <p className="blog-category">
              <a href="javascript:void(0)"><span>Tour &amp; tip</span></a>
            </p>
            <h3 className="blog-title"><Link to="/blog-details">Tesla Model S: Top Secret Car Collector’s Garage</Link></h3>
            <p className="blog-description">Catering to driving enthusiasts, Road &amp; Track provides engaging content on...</p>
            <ul className="meta-item mb-0">
              <li>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="/user-assets/img/profiles/avatar-13.jpg" alt="author" />
                  </div>
                  <a href="javascript:void(0)"> <span> Alphonsa Daniel </span></a>
                </div>
              </li>
              <li className="date-icon"><i className="fa-solid fa-calendar-days" /> <span>March 6, 2023</span></li>
            </ul>
          </div>
        </div>
      </div>					
      <div className="col-lg-4 col-md-6 d-lg-flex">
        <div className="blog grid-blog">
          <div className="blog-image">
            <Link to="/blog-details"><img className="img-fluid" src="/user-assets/img/blog/blog-10.jpg" alt="Post Image" /></Link>
          </div>
          <div className="blog-content">
            <p className="blog-category">
              <a href="javascript:void(0)"><span>Updates</span></a>
            </p>
            <h3 className="blog-title"><Link to="/blog-details">Dedicated To Cars, Covering Everything</Link></h3>
            <p className="blog-description">Known for its irreverent take on car culture, offers a mix of news, reviews...</p>
            <ul className="meta-item mb-0">
              <li>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="/user-assets/img/profiles/avatar-13.jpg" alt="author" />
                  </div>
                  <a href="javascript:void(0)"> <span> Hellan</span></a>
                </div>
              </li>
              <li className="date-icon"><i className="fa-solid fa-calendar-days" /> <span>March 6, 2023</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="view-all text-center aos-init aos-animate" data-aos="fade-down">
      <Link to="/blog-list" className="btn btn-view d-inline-flex align-items-center">View all Blogs <span><i className="feather-arrow-right ms-2" /></span></Link>
    </div>
  </div>
</section>

  )
}

export default BlogSection