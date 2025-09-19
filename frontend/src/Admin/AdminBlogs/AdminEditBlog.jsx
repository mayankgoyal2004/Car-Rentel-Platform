import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiService, { BASE_URL_IMG } from "../../../Apiservice/apiService";

export const AdminEditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagsId, setTagsId] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState(true); // default true

  const { id } = useParams();

  // 🔹 Fetch categories
  const getAllActiveCategory = async () => {
    try {
      const res = await apiService.getAllActiveBlogCategory();
      if (res.data.success) setCategories(res.data.data || []);
    } catch {
      toast.error("Failed to fetch categories");
    }
  };

  // 🔹 Fetch tags
  const getAllActiveTags = async () => {
    try {
      const res = await apiService.getAllActiveTags();
      if (res.data.success) setTags(res.data.data || []);
    } catch {
      toast.error("Failed to fetch tags");
    }
  };

  // 🔹 Fetch single blog details
  const getBlogDetails = async () => {
    try {
      const res = await apiService.getSingleBlogForAdmin(id);
      if (res.data.success) {
        const blog = res.data.data;
        setTitle(blog.title || "");
        setDescription(blog.description || "");
        setCategoryId(blog.category?._id || "");
        setStatus(blog.status);
        setTagsId(blog.tags?.map((t) => t._id) || []);
        setPreview(blog.image ? BASE_URL_IMG + blog.image : null); // show existing image
      }
    } catch {
      toast.error("Failed to fetch blog details");
    }
  };

  useEffect(() => {
    getAllActiveCategory();
    getAllActiveTags();
    if (id) getBlogDetails();
  }, [id]);

  // 🔹 Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🔹 Submit
  const handleEditBlog = async () => {
    if (!title.trim() || !categoryId) {
      toast.error("Title and Category are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("_id", id);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category_id", categoryId);
      tagsId.forEach((tag) => formData.append("tags_id[]", tag));
      if (image) formData.append("image", image);
      formData.append("status", status);
      const res = await apiService.updateblog(formData);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="blog-wrapper">
      <div className="blog-card">
        <div className="mb-4">
          <Link
            to="/admin-dashboard/all-blogs"
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-narrow-left me-1" />
            All blogs
          </Link>
        </div>
        <h2 className="blog-title">Edit Blog</h2>

        {/* Upload Image */}
        <div className="form-group">
          <label>Featured Image</label>
          {preview && (
            <div style={{ marginBottom: "10px" }}>
              <img
                src={preview}
                alt="Preview"
                style={{ width: "150px", borderRadius: "8px" }}
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>

        {/* Title */}
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            value={title}
            placeholder="Enter blog title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category *</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div className="form-group">
          <label>Tags</label>
          <select
            multiple
            value={tagsId}
            onChange={(e) =>
              setTagsId(
                Array.from(e.target.selectedOptions, (opt) => opt.value)
              )
            }
          >
            {tags.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.TagName}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="6"
            value={description}
            placeholder="Write your blog content here..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Actions */}
     <div className="modal-footer">
                <div className="d-flex justify-content-between align-items-center w-100">
                <div className="form-check form-check-md form-switch me-2">
  <label className="form-check-label form-label mt-0 mb-0">
    <input
      className="form-check-input form-label me-2"
      type="checkbox"
      role="switch"
      checked={status}
      onChange={(e) => setStatus(e.target.checked)}
    />
    Status
  </label>
</div>

                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button onClick={handleEditBlog} className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
      </div>
      <ToastContainer />
    </div>
  );
};
