import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { ToastContainer, toast } from "react-toastify";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();

  // image can be File or string (backend URL)
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await apiService.getUerDetails();
      const { Customer, user } = res.data;

      setFirstName(Customer?.firstName || "");
      setLastName(Customer?.lastName || "");
      setUserName(user?.userName || "");
      setPhone(Customer?.contact || user?.contact || "");
      setEmail(Customer?.email || user?.email || "");
      setAddress(Customer?.address || user?.address || "");
      setCountry(Customer?.country || "");
      setState(Customer?.state || "");
      setCity(Customer?.city || "");
      setPincode(Customer?.pincode || "");

      const img = Customer?.image || user?.image || null;
      setImage(img);
      if (img) {
        setImagePreview(
          typeof img === "string"
            ? BASE_URL_IMG + img
            : URL.createObjectURL(img)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userName", userName);
    formData.append("contact", phone);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pincode", pincode);

    if (image) formData.append("image", image);

    try {
      const res = await apiService.updateuserDetials(formData);
      toast.success("Profile updated!");
      dispatch(addUser(res.data.user));
      fetchUser();
    } catch (err) {
      console.error(err);
      // Show backend error message if available
      const message =
        err.response?.data?.message ||
        "Error saving profile. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-9">
      <div className="settings-info">
        <h4>Profile</h4>
        <form onSubmit={handleSubmit}>
          {/* Profile Picture */}
          <div className="profile-info-pic mb-3">
            {imagePreview && (
              <img src={imagePreview} alt="Profile" width="100" />
            )}
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </div>

          {/* Basic Info */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>First Name *</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label>Last Name *</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label>User Name *</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Phone *</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Email *</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Address Info */}
          <div className="mb-3">
            <label>Address *</label>
            <textarea
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Pincode</label>
              <input
                type="text"
                className="form-control"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary me-2"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={fetchUser}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
