import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const AdminBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchBlog = async () => {
    try {
      const res = await apiService.getSingleBlogForAdmin(id);
      if (res.data.success) {
        setBlog(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="page-wrapper">
      <div className="content me-0 me-md-0 me-lg-4">
        {/* Blogs Details */}
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="blog-details">
              <div>
                <Link
                  to="/admin-dashboard/all-blogs"
                  className="d-inline-flex align-items-center fw-medium"
                >
                  <i className="ti ti-arrow-narrow-left me-1" />
                  Back to Blogs
                </Link>
              </div>

              {/* Blog Title */}
              <h3>{blog.title}</h3>

              {/* Blog Image */}
              {blog.image && (
                <div className="blog-details-1">
                  <img
                    src={`${BASE_URL_IMG}${blog.image}`}
                    alt={blog.title}
                    className="w-100 rounded-3"
                  />
                </div>
              )}

              {/* Blog Description */}
              <p>{blog.description}</p>

              {/* Blog Meta */}
              <div className="d-flex align-items-center gap-3 mt-3 mb-3">
                <span>
                  <i className="ti ti-user me-1" />
                  {blog.admin?.name} ({blog.admin?.email})
                </span>
                <span>
                  <i className="ti ti-calendar me-1" />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
                {blog.category && (
                  <span className="badge badge-info badge-md">
                    {blog.category.categoryName}
                  </span>
                )}
              </div>

              {/* Blog Tags */}
              {blog.tags?.length > 0 && (
                <div className="d-flex align-items-center flex-wrap gap-2 mt-3">
                  <h6 className="me-2">Tags:</h6>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag._id}
                      className="badge badge-blog-details badge-md"
                    >
                      {tag.TagName}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /Blogs Details */}
      </div>
    </div>
  );
};

export default AdminBlogDetails;
