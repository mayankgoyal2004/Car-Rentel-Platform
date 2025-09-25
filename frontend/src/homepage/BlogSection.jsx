import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useEffect, useState } from "react";
const BlogSection = () => {
  const [blog, setBlogs] = useState([]);
  const fetchLatestCar = async () => {
    try {
      const res = await apiService.getLatestBlog();
      setBlogs(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    fetchLatestCar();
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
          {blog.map((b) => (
            <div key={b._id} className="col-lg-4 col-md-6 d-lg-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to={`/blog-details/${b.slug}`}>
                    <img
                      className="img-fluid"
                      src={BASE_URL_IMG + b.image}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <p className="blog-category">
                    <a href="javascript:void(0)">
                      <span>{b.category?.categoryName}</span>
                    </a>
                  </p>
                  <h3 className="blog-title">
                    <Link to={`/blog-details/${b?.slug}`}>{b?.title}</Link>
                  </h3>
                  <p className="blog-description">
                    {b.description?.length > 100
                      ? b?.description?.slice(0, 100) + "..."
                      : b.description}
                  </p>
                  <ul className="meta-item mb-0">
                    <li>
                      <div className="post-author">
                        <div className="post-author-img">
                          <img
                            src={BASE_URL_IMG + b.admin?.image}
                            alt="author"
                          />
                        </div>
                        <a>
                          {" "}
                          <span> {b.admin?.userName} </span>
                        </a>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days" />{" "}
                      <span>{new Date(b.createdAt).toDateString()}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="view-all text-center aos-init aos-animate"
          data-aos="fade-down"
        >
          <Link
            to="/blog-list"
            className="btn btn-view d-inline-flex align-items-center"
          >
            View all Blogs{" "}
            <span>
              <i className="feather-arrow-right ms-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
