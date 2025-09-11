import axios from "axios";

export const BASE_URL_IMG = "http://localhost:7777/";
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

  adminRegister(data) {
    return axios.post(BASE_URL + "register-admin", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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

  //!! blog tags 
  getAllBlogTag({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blogs/get-all-blog-tag?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveTags() {
    return axios.get(
      BASE_URL + `blog-all-active-tags`,
      { headers: getAuthHeaders() }
    );
  }
  getAllBlogTagSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blog-all-tags-superadmin?search=${search}&page=${page}`,
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
    return axios.post(BASE_URL + "blogs/update-tag", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteblogtag(data) {
    return axios.delete(BASE_URL + `blogs/tag-delete/${data}`, {
      headers: getAuthHeaders(),
    });
  }


  //!!blog category
  addblogcategory(data) {
    return axios.post(BASE_URL + "blogs/category", data, {
      headers: getAuthHeaders(),
    });
  }

  updateblogcategory(data) {
    return axios.post(BASE_URL + "blogs/update-category", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteblogcategory(data) {
    return axios.delete(BASE_URL + `blogs/category-delete/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllBlogCategory({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blogs/get-all-blog-category?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveBlogCategory() {
    return axios.get(BASE_URL + "blogs/all-active-category", {
      headers: getAuthHeaders(),
    });
  }

  getAllBlogCategorySuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blog-all-category-superadmin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  //!!!!       blog api
  addBlog(data) {
    return axios.post(BASE_URL + "blogs/add", data, {
      headers: getAuthHeaders(),
    });
  }

  getAllBlogSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blog-all-blogs-superadmin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  updateblog(data) {
    return axios.post(BASE_URL + "blogs/update-blog", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteblog(data) {
    return axios.delete(BASE_URL + `blogs/delete-blog/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  getAllBlog({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blogs/get-all-blogs?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getBlogsForUser({
    search = "",
    category = "",
    tag = "",
    page = 1,
    limit = 10,
  } = {}) {
    return axios.get(
      BASE_URL +
        `blogs/user?search=${search}&category=${category}&tag=${tag}&page=${page}&limit=${limit}`
    );
  }
  getSingleBlog(slug) {
    return axios.get(BASE_URL + `blogs/get-single-blog/${slug}`);
  }
}

export default new apiServices();
