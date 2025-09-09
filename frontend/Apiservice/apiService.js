import axios from "axios";

export const BASE_URL_IMG = "http://localhost:7777/uploads/";
const BASE_URL = "http://localhost:7777/admin/";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("token");
  return {
    Accept: "application/json",
    Authorization: token,
  };
};

class apiServices {
  register(data) {
    return axios.post(BASE_URL + "register", data);
  }
  login(data) {
    return axios.post(BASE_URL + "login", data);
  }
  verifyEmail(token) {
    return axios.post(BASE_URL + `verify-email?token=${token}`);
  }
  forgotPassword(data) {
    return axios.post(BASE_URL + "forgot-password", data);
  }
  resetpassword(data) {
    return axios.post(BASE_URL + "reset-password", data);
  }
  getAllBlogTag({ search = "", page } = {}) {
    return axios.get(
      BASE_URL +
        `blogs/get-all-blog-tag?search=${encodeURIComponent(
          search
        )}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  addblogstag(TagName) {
    const token = sessionStorage.getItem("token");
    const header = {
      Accept: "application/json",
      Authorization: token,
    };
    return axios.post(BASE_URL + "blogs/tag", TagName, { headers: header });
  }
  updateblogtag(data) {
    return axios.post(BASE_URL + "blogs/update-tag", data , { headers: getAuthHeaders() });
  }

  deleteblogtag(data) {



    return axios.delete(BASE_URL + `blogs/tag-delete/${data}` , { headers: getAuthHeaders() });
  }
}

export default new apiServices();
