import axios from "axios";

export const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;
const BASE_URL = import.meta.env.VITE_BASE_URL;


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
  getAllActiveBlogCategoryHomepage() {
    return axios.get(BASE_URL + "blogs/all-active-category-home");
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
  getLatestBlog() {
    return axios.get(BASE_URL + `blogs/latest`);
  }
  getBlogsForUser({ search = "", category = "", page = 1, limit = 10 } = {}) {
    return axios.get(
      BASE_URL +
        `blogs/user?search=${search}&category=${category}&page=${page}&limit=${limit}`
    );
  }

  getSingleBlogForAdmin(id) {
    return axios.get(BASE_URL + `blogs/get-single-blog-admin/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getSingleBlogUser(slug) {
    return axios.get(BASE_URL + `blogs/get-single-blog-user/${slug}`, {
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

  //!! driver api
  getAllDriverAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-driver?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getAllActiveDriver() {
    return axios.get(BASE_URL + `get-all-active-driver`, {
      headers: getAuthHeaders(),
    });
  }
  getlastest5drivers() {
    return axios.get(BASE_URL + `get-5-latest-driver`, {
      headers: getAuthHeaders(),
    });
  }
  addDriver(data) {
    return axios.post(BASE_URL + "add-driver", data, {
      headers: getAuthHeaders(),
    });
  }
  updateDriver(id, data) {
    return axios.post(BASE_URL + `update-driver/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteDriver(data) {
    return axios.delete(BASE_URL + `delete-driver/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! driver api
  getAllCustomerAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-customer?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getAllActiveCustomer() {
    return axios.get(BASE_URL + `get-all-active-customer`, {
      headers: getAuthHeaders(),
    });
  }
  getMessageByCustomer() {
    return axios.get(BASE_URL + "get-all-message-by-customer", {
      headers: getAuthHeaders(),
    });
  }
  getOwnerDetails() {
    return axios.get(BASE_URL + "get-owner-details", {
      headers: getAuthHeaders(),
    });
  }
  deleteOwner(id) {
    return axios.delete(BASE_URL + `delete-owner/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllcustomerSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-customer-super-admin?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getChat(receiverId) {
    return axios.get(BASE_URL + `chat/${receiverId}`, {
      headers: getAuthHeaders(),
    });
  }
  getChatAdmin(receiverId) {
    return axios.get(BASE_URL + `chat-admin/${receiverId}`, {
      headers: getAuthHeaders(),
    });
  }
  getAllOwnerAdmin() {
    return axios.get(BASE_URL + `get-all-owner-super-admin`, {
      headers: getAuthHeaders(),
    });
  }
  getLatest5Customer() {
    return axios.get(BASE_URL + `get-5-customer-admin`, {
      headers: getAuthHeaders(),
    });
  }
  getCustomerById(id) {
    return axios.get(BASE_URL + `get-customer-by-id/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  addCustomer(data) {
    return axios.post(BASE_URL + "add-customer", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCustomer(id, data) {
    return axios.post(BASE_URL + `update-customer/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteCustomer(data) {
    return axios.delete(BASE_URL + `delete-customer/${data}`, {
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

  getAllTestimocialUser({ search = "", page = 1, limit = 4 } = {}) {
    return axios.get(
      BASE_URL +
        `get-all-testimonial-user?search=${search}&page=${page}&limit=${limit}`,
      {
        headers: getAuthHeaders(),
      }
    );
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
  getFaqHomePage() {
    return axios.get(BASE_URL + `get-all-active-faq-homepage`);
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
  getAllactiveFaquser({ search = "", page = 1, limit = 4 } = {}) {
    return axios.get(
      BASE_URL +
        `get-all-active-faq?search=${search}&page=${page}&limit=${limit}`,
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
  //!!! homepage testimonials
  getTestominialHomePage() {
    return axios.get(BASE_URL + `get-all-testimonial-homepage`);
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
  getStateByCountry(countryId) {
    return axios.get(BASE_URL + `get-state-by-country/${countryId}`, {
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
  getCityByState(stateId) {
    return axios.get(BASE_URL + `get-city-by-state/${stateId}`, {
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

  //!!! extra services
  getAllExtraServices({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-extra-services?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }

  getAllactiveExtraServices() {
    return axios.get(BASE_URL + `get-all-active-extra-services`, {
      headers: getAuthHeaders(),
    });
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

  //!!! location api
  getAllLocation({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-location?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }
  getAllActiveLocation() {
    return axios.get(BASE_URL + `get-all-active-location`, {
      headers: getAuthHeaders(),
    });
  }

  addLocation(data) {
    return axios.post(BASE_URL + "add-location", data, {
      headers: getAuthHeaders(),
    });
  }

  deleteLocation(data) {
    return axios.delete(BASE_URL + `delete-location/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  updateLocation(id, data) {
    return axios.post(BASE_URL + `update-location/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  //!! car features
  getAllCarFeatures({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-features?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarFeatures() {
    return axios.get(BASE_URL + `get-all-acitve-car-features`, {
      headers: getAuthHeaders(),
    });
  }

  addCarFeature(data) {
    return axios.post(BASE_URL + "add-car-feature", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarFeature(id, data) {
    return axios.post(BASE_URL + `update-car-feature/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarFeature(data) {
    return axios.delete(BASE_URL + `delete-car-feature/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car transmissions
  getAllCarTransmissions({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-transmission?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarTransmissions() {
    return axios.get(BASE_URL + `get-all-active-car-transmission`, {
      headers: getAuthHeaders(),
    });
  }
  getCarDetailyById(id) {
    return axios.get(BASE_URL + `get-car-by-id/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  addCarTransmission(data) {
    return axios.post(BASE_URL + "add-car-transmission", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarTransmission(id, data) {
    return axios.post(BASE_URL + `update-car-transmission/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarTransmission(data) {
    return axios.delete(BASE_URL + `delete-car-transmission/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car cylinders
  getAllCarCylinders({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-cylinder?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarCylinders() {
    return axios.get(BASE_URL + `get-all-active-car-cylinder`, {
      headers: getAuthHeaders(),
    });
  }

  addCarCylinder(data) {
    return axios.post(BASE_URL + "add-car-cylinder", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarCylinder(id, data) {
    return axios.post(BASE_URL + `update-car-cylinder/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarCylinder(data) {
    return axios.delete(BASE_URL + `delete-car-cylinder/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car seats
  getAllCarSeats({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-seats?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarSeats() {
    return axios.get(BASE_URL + `get-all-active-car-seats`, {
      headers: getAuthHeaders(),
    });
  }

  addCarSeats(data) {
    return axios.post(BASE_URL + "add-car-seats", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarSeats(id, data) {
    return axios.post(BASE_URL + `update-car-seats/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarSeats(data) {
    return axios.delete(BASE_URL + `delete-car-seats/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car types
  getAllCarTypes({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-types?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarTypes() {
    return axios.get(BASE_URL + `get-all-active-car-type`, {
      headers: getAuthHeaders(),
    });
  }

  addCarType(data) {
    return axios.post(BASE_URL + "add-car-type", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarType(id, data) {
    return axios.post(BASE_URL + `update-car-type/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarType(data) {
    return axios.delete(BASE_URL + `delete-car-type/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car models
  getAllCarModel({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-model?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarModel() {
    return axios.get(BASE_URL + `get-all-active-car-model`, {
      headers: getAuthHeaders(),
    });
  }

  addCarModel(data) {
    return axios.post(BASE_URL + "add-car-model", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarModel(id, data) {
    return axios.post(BASE_URL + `update-car-model/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarModel(data) {
    return axios.delete(BASE_URL + `delete-car-model/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car fuel
  getAllCarFuel({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-fuel?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarFuel() {
    return axios.get(BASE_URL + `get-all-active-car-fuel`, {
      headers: getAuthHeaders(),
    });
  }

  addCarFuel(data) {
    return axios.post(BASE_URL + "add-car-fuel", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarFuel(id, data) {
    return axios.post(BASE_URL + `update-car-fuel/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarFuel(data) {
    return axios.delete(BASE_URL + `delete-car-fuel/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car color
  getAllCarColor({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-color?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarColor() {
    return axios.get(BASE_URL + `get-all-active-car-color`, {
      headers: getAuthHeaders(),
    });
  }

  addCarColor(data) {
    return axios.post(BASE_URL + "add-car-color", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarColor(id, data) {
    return axios.post(BASE_URL + `update-car-color/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarColor(data) {
    return axios.delete(BASE_URL + `delete-car-color/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! car steering
  getAllCarSteering({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-steering?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarSteering() {
    return axios.get(BASE_URL + `get-all-active-car-steering`, {
      headers: getAuthHeaders(),
    });
  }

  addCarSteering(data) {
    return axios.post(BASE_URL + "add-car-steering", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarSteering(id, data) {
    return axios.post(BASE_URL + `update-car-steering/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarSteering(data) {
    return axios.delete(BASE_URL + `delete-car-steering/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!! car brands
  getAllCarBrands({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-brand?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveCarBrands() {
    return axios.get(BASE_URL + `get-all-active-car-brand`, {
      headers: getAuthHeaders(),
    });
  }

  addCarBrand(data) {
    return axios.post(BASE_URL + "add-car-brand", data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarBrand(id, data) {
    return axios.post(BASE_URL + `update-car-brand/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteCarBrand(data) {
    return axios.delete(BASE_URL + `delete-car-brand/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!!! car api

  getAllCarAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllCarSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-car-super-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllCarInRental() {
    return axios.get(BASE_URL + `get-all-car-inRental`, {
      headers: getAuthHeaders(),
    });
  }
  deleteCar(id) {
    return axios.delete(BASE_URL + `delete-cars/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  toolgeStatusByAdmin(id, data) {
    return axios.post(BASE_URL + `change-status-by-admin/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  toogleIsAvailableByAdmin(id, data) {
    return axios.post(BASE_URL + `change-is-available-by-admin/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  toogleCarFeatured(id, data) {
    return axios.post(BASE_URL + `cars/featured/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  getNewlyAddedCars() {
    return axios.get(BASE_URL + `get-newly-added-car-admin`, {
      headers: getAuthHeaders(),
    });
  }
  getFeaturedCar() {
    return axios.get(BASE_URL + `get-featured-car`);
  }
  getAllCarsForSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-cars-super-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  //!! car api
  addBasicCar(data) {
    return axios.post(BASE_URL + "add-car", data, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
  }
  editCarBasic(id, data) {
    return axios.post(BASE_URL + `edit-car-basics/${id}`, data, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
  }
  updateCarFeatures(id, data) {
    return axios.put(BASE_URL + `update-car/${id}/features`, data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarExtraFeatures(id, data) {
    return axios.put(BASE_URL + `update-car/${id}/extraService`, data, {
      headers: getAuthHeaders(),
    });
  }
  uploadCarDocument(id, data) {
    return axios.post(BASE_URL + `cars/${id}/upload`, data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarDamage(id, data) {
    return axios.post(BASE_URL + `cars/${id}/damages`, data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarFaq(id, data) {
    return axios.post(BASE_URL + `cars/${id}/faqs`, data, {
      headers: getAuthHeaders(),
    });
  }
  updateCarDescription(id, data) {
    return axios.post(BASE_URL + `cars/${id}/description`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllDamage(id) {
    return axios.get(BASE_URL + `get-car/${id}/damage`, {
      headers: getAuthHeaders(),
    });
  }

  updateCarPricing(id, data) {
    return axios.post(BASE_URL + `update-cars/${id}/pricing`, data, {
      headers: getAuthHeaders(),
    });
  }
  getSingleCarById(id) {
    return axios.get(BASE_URL + `get-car-by-id-admin/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  getAllcarHomePage(filters = {}) {
    return axios.get(BASE_URL + `all-cars-home-page`, {
      params: filters,
      paramsSerializer: (params) => new URLSearchParams(params).toString(),
    });
  }
  getCarDetails(id) {
    return axios.get(BASE_URL + `car-details-user/${id}`);
  }
  getCarReview(id) {
    return axios.get(BASE_URL + `car-review/${id}`);
  }
  getCarREviewByUser() {
    return axios.get(BASE_URL + `get-all-review-user`);
  }
  getCarReviewAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-review-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  addCarReview(id, data) {
    return axios.post(BASE_URL + `add-car-review/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteCarReviewAdmin(id) {
    return axios.delete(BASE_URL + `delete-car-review-admin/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  deletecarReviewuser(id) {
    return axios.delete(BASE_URL + `delete-car-review/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!! reservation api

  getAllReservationAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-reservation?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllReservationSuperAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-reservation-superAdmin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getLast5Reservation() {
    return axios.get(BASE_URL + `get-last-5-reservation`, {
      headers: getAuthHeaders(),
    });
  }
  getLatest5ReservationsForAdmin() {
    return axios.get(BASE_URL + `get-last-5-reservation-admin`, {
      headers: getAuthHeaders(),
    });
  }
  getAllReservationCalender() {
    return axios.get(BASE_URL + `get-all-calender-reservation`, {
      headers: getAuthHeaders(),
    });
  }
  getAllReviewUser() {
    return axios.get(BASE_URL + `get-all-review-user-dashboard`, {
      headers: getAuthHeaders(),
    });
  }
  getAllreservationUser() {
    return axios.get(BASE_URL + `get-all-reservation-user`, {
      headers: getAuthHeaders(),
    });
  }
  getAllPendingReservaton() {
    return axios.get(BASE_URL + `get-all-pending-reservation-user`, {
      headers: getAuthHeaders(),
    });
  }
  getAllCancelledReservaton() {
    return axios.get(BASE_URL + `get-all-cancelled-reservation-user`, {
      headers: getAuthHeaders(),
    });
  }
  getAllCompletedReservaton() {
    return axios.get(BASE_URL + `get-all-completed-reservation-user`, {
      headers: getAuthHeaders(),
    });
  }

  addCarReservationByAdmin(data) {
    return axios.post(BASE_URL + "add-reservation-admin", data, {
      headers: getAuthHeaders(),
    });
  }
  cancelRideByUser(id, data) {
    return axios.post(BASE_URL + `cancel-reservation-user/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  cancelRideByAdmin(id, data) {
    return axios.post(BASE_URL + `cancel-reservation-admin/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  editReservation(id, data) {
    return axios.post(BASE_URL + `update-reservation/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  editReservationStep2(id, data) {
    return axios.post(BASE_URL + `edit-reservation-user-step-2/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  delteReservation(id) {
    return axios.delete(BASE_URL + `delete-reservation/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  editPaymentStatusofUser(id) {
    return axios.post(
      BASE_URL + `payment-completed-by-user/${id}`,
      {},
      {
        headers: getAuthHeaders(),
      }
    );
  }
  changeReservationStatusToConformed(id) {
    return axios.post(
      BASE_URL + `change-reservation-status-conformed/${id}`,
      {},
      {
        headers: getAuthHeaders(),
      }
    );
  }
  changeReservationStatusToComplete(id) {
    return axios.post(
      BASE_URL + `change-reservation-status-complete/${id}`,
      {},
      {
        headers: getAuthHeaders(),
      }
    );
  }
  editReservationStep3(id, data) {
    return axios.post(BASE_URL + `edit-reservation-user-step-3/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  addReservationByUserStep1(id, data) {
    return axios.post(BASE_URL + `add-reservation-user-step-1/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllAproverCarAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-active-car-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  getsinglereservaton(id) {
    return axios.get(BASE_URL + `get-reservation-by/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  getReservationByIdBooking(id) {
    return axios.get(BASE_URL + `get-reservation-by-booking/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! contact api

  getAllContactAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-contact-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  addcontact(data) {
    return axios.post(BASE_URL + "add-constact", data);
  }
  deletecontact(id) {
    return axios.delete(BASE_URL + `delete-constact/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! blog comments api for blog

  getCommentBlog(id) {
    return axios.get(BASE_URL + `blogs/get-comments/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  addblogComment(id, data) {
    return axios.post(BASE_URL + `blogs/comments/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllCommentsAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `blogs/get-comments-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllblogsComment(id) {
    return axios.get(BASE_URL + `blogs/get-all-comments-user/${id}`);
  }
  deleteblogComment(data) {
    return axios.delete(BASE_URL + `blogs/comments/delete/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!! wishlist toogle api
  addWishlist(data) {
    return axios.post(BASE_URL + "toggle-wishlist", data, {
      headers: getAuthHeaders(),
    });
  }

  getWishlist() {
    return axios.get(BASE_URL + `get-wishlist`, {
      headers: getAuthHeaders(),
    });
  }

  //!! update user details

  updateuserDetials(data) {
    return axios.post(BASE_URL + "update-user-details", data, {
      headers: getAuthHeaders(),
    });
  }
  updateAdmin(data) {
    return axios.post(BASE_URL + "update-admin", data, {
      headers: getAuthHeaders(),
    });
  }
  getUerDetails() {
    return axios.get(BASE_URL + `get-user-details`, {
      headers: getAuthHeaders(),
    });
  }

  updateAdminPassword(data) {
    return axios.post(BASE_URL + "update-admin-password", data, {
      headers: getAuthHeaders(),
    });
  }
  sendEnquiry(id, data) {
    return axios.post(BASE_URL + `add-enquiry/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  getEnquiry({ search = "", page } = {}) {
    return axios.get(BASE_URL + `get-enquiry?search=${search}&page=${page}`, {
      headers: getAuthHeaders(),
    });
  }

  deleteEnquiry(id) {
    return axios.delete(BASE_URL + `delete-enquiry/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  //!!!  invoice api
  addInvoice(data) {
    return axios.post(BASE_URL + "add-invoice-admin", data, {
      headers: getAuthHeaders(),
    });
  }
  addInvoiceLogo(data) {
    return axios.post(BASE_URL + "add-invoice-logo", data, {
      headers: getAuthHeaders(),
    });
  }
  editInvoice(id, data) {
    return axios.post(BASE_URL + `edit-invoice-admin/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  getAllInvoice({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-invoice-admin?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }

  getInvoiceDetails(id) {
    return axios.get(BASE_URL + `get-invoice-details/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getLatestInvoice() {
    return axios.get(BASE_URL + `get-all-latest-invoice`, {
      headers: getAuthHeaders(),
    });
  }

  deleteInvoice(id) {
    return axios.delete(BASE_URL + `delete-invoice/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getInvoiceByReservationId(id) {
    return axios.get(BASE_URL + `get-invoice-by-reservation/${id}`, {
      headers: getAuthHeaders(),
    });
  }
  getInvoiceLogo() {
    return axios.get(BASE_URL + `get-invoice-logo`, {
      headers: getAuthHeaders(),
    });
  }

  //!!! signature api

  getActiveSignature() {
    return axios.get(BASE_URL + `get-all-active-signature`, {
      headers: getAuthHeaders(),
    });
  }
  addSignature(data) {
    return axios.post(BASE_URL + `add-signature`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllSignature({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-signature?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  updateSignature(id, data) {
    return axios.post(BASE_URL + `update-signature/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteSignature(data) {
    return axios.delete(BASE_URL + `delete-signature/${data}`, {
      headers: getAuthHeaders(),
    });
  }

  //!!! bank account api
  getActiveBankAccount() {
    return axios.get(BASE_URL + `get-all-active-bank-account`, {
      headers: getAuthHeaders(),
    });
  }
  addBankAccount(data) {
    return axios.post(BASE_URL + `add-bank-account`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllBankAccount({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-bank-account?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  updateBankAccount(id, data) {
    return axios.post(BASE_URL + `update-bank-account/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteBankAccount(data) {
    return axios.delete(BASE_URL + `delete-bank-account/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!!! Location Setting Api  api
  getActiveLocationsSetting() {
    return axios.get(BASE_URL + `get-all-active-location-Setting`);
  }
  addLocationSetting(data) {
    return axios.post(BASE_URL + `add-location-Setting`, data, {
      headers: getAuthHeaders(),
    });
  }

  getAllLocationSetting({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-location-Setting?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  updateLocationSetting(id, data) {
    return axios.post(BASE_URL + `update-location-Setting/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }
  deleteLocationSetting(data) {
    return axios.delete(BASE_URL + `delete-location-Setting/${data}`, {
      headers: getAuthHeaders(),
    });
  }
  //!! company setting
  addCompanySetting(data) {
    return axios.post(BASE_URL + `add-company-setting`, data, {
      headers: getAuthHeaders(),
    });
  }
  getCompanySettings() {
    return axios.get(BASE_URL + `get-company-setting`);
  }
  //!! captcha setting
  updatecaptchaSetting(data) {
    return axios.post(BASE_URL + `add-captcha-setting`, data, {
      headers: getAuthHeaders(),
    });
  }
  getCaptchaSetting() {
    return axios.get(BASE_URL + `get-captcha-setting`, {
      headers: getAuthHeaders(),
    });
  }
  getCaptchaFrontend() {
    return axios.get(BASE_URL + `get-captcha-frontend`);
  }

  //!! smtp setting
  updatesmtpSetting(data) {
    return axios.post(BASE_URL + `add-smtp-setting`, data, {
      headers: getAuthHeaders(),
    });
  }

  getSmtpSetting() {
    return axios.get(BASE_URL + `get-smtp-setting`, {
      headers: getAuthHeaders(),
    });
  }
}

export default new apiServices();
