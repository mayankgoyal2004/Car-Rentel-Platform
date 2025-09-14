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
    return axios.get(BASE_URL + `blog-all-active-tags`, {
      headers: getAuthHeaders(),
    });
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
  getSingleBlogForAdmin(id) {
    return axios.get(BASE_URL + `blogs/get-single-blog-admin/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!!! role api
  addRole(data) {
    return axios.post(BASE_URL + "add-roll", data, {
      headers: getAuthHeaders(),
    });
  }

  updateRole(data) {
    return axios.post(BASE_URL + "update-role", data, {
      headers: getAuthHeaders(),
    });
  }
  getAllRole({ search = "", page } = {}) {
    return axios.get(BASE_URL + `get-role?search=${search}&page=${page}`, {
      headers: getAuthHeaders(),
    });
  }
  deleteRole(data) {
    return axios.delete(BASE_URL + `delete-role/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  getroleById(id) {
    return axios.get(BASE_URL + `get-role-id/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllActiveRole() {
    return axios.get(BASE_URL + `get-all-active-role`, {
      headers: getAuthHeaders(),
    });
  }
  updatePermission(roleId, data) {
    return axios.post(BASE_URL + `roles/${roleId}/permissions`, data, {
      headers: getAuthHeaders(),
    });
  }
  //!! user by admin
  getUserByAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-user-by-admin?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  addUserByAdmin(data) {
    return axios.post(BASE_URL + "add-user-admin", data, {
      headers: getAuthHeaders(),
    });
  }
  updateUserByAdmin(data) {
    return axios.post(BASE_URL + "update-user-by-admin", data, {
      headers: getAuthHeaders(),
    });
  }
  deleteUserByAdmin(data) {
    return axios.delete(BASE_URL + `user-delete/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!! Faq category api

  getAllFaqCategory({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-faq-category?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getAllFaqCategoryActive() {
    return axios.get(BASE_URL + `get-all-active-faq-category`, {
      headers: getAuthHeaders(),
    });
  }

  addFaqCategory(data) {
    return axios.post(BASE_URL + "add-faq-category", data, {
      headers: getAuthHeaders(),
    });
  }
  updateFaqCategory(id, data) {
    return axios.post(BASE_URL + `update-faq-category/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteFaqCategory(data) {
    return axios.delete(BASE_URL + `delete-faq-category/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!!! faq api

  getAllFaq({ search = "", page } = {}) {
    return axios.get(BASE_URL + `get-all-faq?search=${search}&page=${page}`, {
      headers: getAuthHeaders(),
    });
  }

  addFaq(data) {
    return axios.post(BASE_URL + "add-faq", data, {
      headers: getAuthHeaders(),
    });
  }
  updateFaq(id, data) {
    return axios.post(BASE_URL + `update-faq/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteFaq(data) {
    return axios.delete(BASE_URL + `delete-faq/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!!!! testimonial

  getAlltestimonial({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-testimonial-admin?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  addtestimonial(data) {
    return axios.post(BASE_URL + "add-testimonial", data, {
      headers: getAuthHeaders(),
    });
  }

  deletetestimonial(data) {
    return axios.delete(BASE_URL + `delete/testimonial/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  updatetestimonial(id, data) {
    return axios.post(BASE_URL + `update-testimonial/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  //!!!!! location country api

  getAllCountry({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-country?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getAllActiveCountry() {
    return axios.get(BASE_URL + `get-all-active-country`, {
      headers: getAuthHeaders(),
    });
  }
  addCountry(data) {
    return axios.post(BASE_URL + "add-country", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCountry(data) {
    return axios.delete(BASE_URL + `delete-country/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  updateCountry(id, data) {
    return axios.post(BASE_URL + `update-country/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  //!!!! location state api
  getAllState({ search = "", page } = {}) {
    return axios.get(BASE_URL + `get-all-state?search=${search}&page=${page}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllActiveState() {
    return axios.get(BASE_URL + `get-all-active-state`, {
      headers: getAuthHeaders(),
    });
  }
  addState(data) {
    return axios.post(BASE_URL + "add-state", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteState(data) {
    return axios.delete(BASE_URL + `delete-state/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  updateState(id, data) {
    return axios.post(BASE_URL + `update-state/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  //!!! location city api
  getAllCity({ search = "", page } = {}) {
    return axios.get(BASE_URL + `get-all-city?search=${search}&page=${page}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllActiveCity() {
    return axios.get(BASE_URL + `get-all-active-city`, {
      headers: getAuthHeaders(),
    });
  }
  addCity(data) {
    return axios.post(BASE_URL + "add-city", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCity(data) {
    return axios.delete(BASE_URL + `delete-city/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  updateCity(id, data) {
    return axios.post(BASE_URL + `update-city/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  //!!! seasional pricing

  getAllSeasionalPricing({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-seasonal-pricing?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }

  addSeasionalPricing(data) {
    return axios.post(BASE_URL + "add-seasonal-pricing", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteSeasionalPricing(data) {
    return axios.delete(BASE_URL + `delete-seasonal-pricing/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  updateSeasionalPricing(id, data) {
    return axios.post(BASE_URL + `update-seasonal-pricing/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  //!!! extra services
  getAllExtraServices({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-extra-services?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }

  addExtraService(data) {
    return axios.post(BASE_URL + "add-extra-service", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteExtraService(data) {
    return axios.delete(BASE_URL + `delete-extra-service/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  updateExtraService(id, data) {
    return axios.post(BASE_URL + `update-extra-service/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
}

export default new apiServices();
