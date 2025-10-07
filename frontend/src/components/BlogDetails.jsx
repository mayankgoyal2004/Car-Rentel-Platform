import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { Share2 } from "react-feather";
import { ToastContainer, toast } from "react-toastify";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({
    message: "",
  });

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await apiService.getSingleBlogUser(slug);
      console.log("Blog response:", res.data);

      if (res.data.success) {
        setBlog(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments
  const fetchComments = async (blogId) => {
    if (!blogId) return;
    try {
      const res = await apiService.getAllblogsComment(blogId);
      if (res.data.success) {
        setComments(res.data.comments);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

    if (!commentForm.message.trim()) {
      toast.error("Please enter a comment before submitting.");
      return;
    }

    try {
      const res = await apiService.addblogComment(blog._id, commentForm);

      if (res.data.success) {
        fetchComments(blog._id);
        setCommentForm((prev) => ({ ...prev, message: "" }));
        toast.success(res.data.message || "Comment added successfully!");
      } else {
        toast.error(
          res.data.message || "Failed to add comment. Please try again."
        );
      }
    } catch (err) {
      console.error("Error adding comment:", err);

      if (err.response?.status === 403) {
        toast.error("Please login to post a comment.");
      } else {
        toast.error(
          err.response?.data?.message ||
            "Something went wrong while adding comment."
        );
      }
    }
  };
  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog?._id) fetchComments(blog._id);
  }, [blog]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="main-wrapper">
      {/* Blog Banner */}
      <div
        className="blogbanner"
        style={{
          backgroundImage: `url(${BASE_URL_IMG + blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <div className="blogbanner-content">
          <span className="blog-hint">{blog.category?.categoryName}</span>
          <h1>{blog?.title}</h1>
          <ul className="entry-meta meta-item justify-content-center">
            <li>
              <div className="post-author">
                <div className="post-author-img">
                  <img
                    src={BASE_URL_IMG + blog.admin?.image}
                    alt={blog.admin?.userName}
                  />
                </div>
                <span>{blog.admin?.userName}</span>
              </div>
            </li>
            <li className="date-icon">
              {new Date(blog?.createdAt).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-section container">
        <div className="blog-description">
          <p>{blog?.description}</p>
        </div>

       

        {/* Comments Section */}
        <div className="review-sec">
          <h4>Comments ({comments?.length})</h4>
          {comments?.map((c) => (
            <div key={c._id} className="review-card">
              <div className="review-header-group">
                <div className="post-author-img">
                  <img
                    src={BASE_URL_IMG + c.createdBy?.image}
                    alt={c.createdBy?.email}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="review-design">
                  <h6>{c.createdBy?.userName}</h6>
                  <p>{new Date(c?.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <p>{c?.message}</p>
            </div>
          ))}

          {/* Add Comment Form */}
          <div className="review-sec mb-0">
            <h4>Leave a Reply</h4>
            <form onSubmit={addComment}>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6"></div>
                <div className="col-lg-12">
                  <textarea
                    rows={4}
                    placeholder="Your Comment"
                    value={commentForm?.message}
                    onChange={(e) =>
                      setCommentForm({
                        ...commentForm,
                        message: e.target.value,
                      })
                    }
                    className="form-control mb-2"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default BlogDetails;
