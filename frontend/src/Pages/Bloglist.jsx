import React from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useState } from "react";
import { useEffect } from "react";
import { Tag, ArrowRight, ArrowLeft } from "react-feather";

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [latestBlogs, setLatestBlogs] = useState([]);
  const fetchLatestBlogs = async () => {
    try {
      const res = await apiService.getLatestBlog();
      setLatestBlogs(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await apiService.getAllActiveBlogCategoryHomepage();
      setCategories(res.data.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchAllActiveBlogs = async () => {
    setLoading(true);
    try {
      const res = await apiService.getBlogsForUser({
        search, // from state
        category, // from state
        page: currentPage, // from state
        limit: 3,
      });

      setBlogs(res.data.data || []);
      setTotalPages(res.data.pagination?.totalPages || 1);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllActiveBlogs(); // use state inside function
  }, [search, category, currentPage]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const handleCategoryChange = (catId) => {
    setCategory(catId === category ? "" : catId);
    setCurrentPage(1);
  };
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };
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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a>Blogs</a>
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
                  {loading ? (
                    <p>Loading blogs...</p>
                  ) : blogs.length === 0 ? (
                    <p>No blogs found.</p>
                  ) : (
                    blogs.map((blog) => (
                      <div
                        className="col-lg-12 col-md-12 d-lg-flex"
                        key={blog.slug}
                      >
                        <div className="blog grid-blog">
                          <div className="blog-image-list">
                            <Link to={`/blog-details/${blog?.slug}`}>
                              <img
                                className="img-fluid height-100"
                                src={BASE_URL_IMG + blog?.image}
                                alt={blog?.title}
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
                                        src={BASE_URL_IMG + blog?.admin?.image}
                                        alt={blog?.admin?.userName}
                                      />
                                    </div>
                                    <a>
                                      {" "}
                                      <span>{blog?.admin?.userName}</span>
                                    </a>
                                  </div>
                                </li>
                                <li className="date-icon ms-3">
                                  <i className="fa-solid fa-calendar-days" />{" "}
                                  <span>
                                    {new Date(
                                      blog?.createdAt
                                    ).toLocaleDateString()}
                                  </span>
                                </li>
                              </ul>
                              <p className="blog-category mb-0">
                                <a href="javascript:void(0)">
                                  <span>{blog?.category?.categoryName}</span>
                                </a>
                              </p>
                            </div>
                            <h3 className="blog-title">
                              <Link to={`/blog-details/${blog?.slug}`}>
                                {blog?.title}
                              </Link>
                            </h3>
                            <p className="blog-description">
                              {blog?.description?.slice(0, 150)}...
                            </p>
                            <Link
                              to={`/blog-details/${blog?.slug}`}
                              className="viewlink btn btn-primary justify-content-center"
                            >
                              Read More <ArrowRight className="ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/*Pagination*/}
                {totalPages > 1 && (
                  <div className="pagination">
                    <nav>
                      <ul className="pagination justify-content-center mt-4">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            <ArrowLeft className="me-2" />
                            Prev
                          </button>
                        </li>

                        {getPageNumbers().map((page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          </li>
                        ))}

                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                          >
                            Next
                            <i className="fas fa-regular fa-arrow-right ms-2" />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
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
                        value={search}
                        onChange={handleSearchChange}
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
                        <a
                          href="javascript:void(0)"
                          className={category === "" ? "active" : ""}
                          onClick={() => setCategory("")}
                        >
                          All Categories
                        </a>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat._id}>
                          <a
                            href="javascript:void(0)"
                            className={category === cat._id ? "active" : ""}
                            onClick={() => handleCategoryChange(cat._id)}
                          >
                            {cat.categoryName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card mb-0">
                    <h4>
                      <Tag /> Latest Article
                    </h4>

                    {latestBlogs.map((blog) => (
                      <div className="article" key={blog._id}>
                        <div className="article-blog">
                          <Link to={`/blog-details/${blog.slug}`}>
                            <img
                              className="img-fluid"
                              src={BASE_URL_IMG + blog.image}
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <h5>
                            <Link to={`/blog-details/${blog?.slug}`}>
                              {blog?.title}
                            </Link>
                          </h5>
                          <div className="article-date">
                            <i className="fa-solid fa-calendar-days" />
                            <span>
                              {new Date(blog.createdAt).toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default Bloglist;
