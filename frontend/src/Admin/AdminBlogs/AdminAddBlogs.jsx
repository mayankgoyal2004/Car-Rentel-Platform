import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiService from "../../../Apiservice/apiService";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AdminAddBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagsId, setTagsId] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);
  // Fetch Categories
  const getAllActiveCategory = async () => {
    try {
      const res = await apiService.getAllActiveBlogCategory();
      if (res.data.success) setCategories(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch categories" + err.message);
    }
  };

  // Fetch Tags
  const getAllActiveTags = async () => {
    try {
      const res = await apiService.getAllActiveTags();
      if (res.data.success) setTags(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch tags" + err.message);
    }
  };

  useEffect(() => {
    getAllActiveCategory();
    getAllActiveTags();
  }, []);

  // Create Blog
  const handleCreateBlog = async () => {
    if (!title.trim() || !categoryId) {
      toast.error("Title and Category are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category_id", categoryId);
      formData.append("tags_id", tagsId);

      if (image) formData.append("image", image);

      const res = await apiService.addBlog(formData);
      toast.success(res.data.message || "Blog Created Successfully!");

      setTitle("");
      setDescription("");
      setCategoryId("");
      setTagsId([]);
      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
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
            Blogs
          </Link>
        </div>
        <h2 className="blog-title">Add Blog</h2>

        {/* Upload Image */}
        <div className="form-group">
          <label>Featured Image</label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
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
          <select value={tagsId} onChange={(e) => setTagsId(e.target.value)}>
            <option value="">Select Tag</option>
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
        <div className="button-group">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => {
              setTitle("");
              setDescription("");
              setCategoryId("");
              setTagsId([]);
              setImage(null);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-submit"
            onClick={handleCreateBlog}
          >
            Create Blog
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminAddBlogs;
