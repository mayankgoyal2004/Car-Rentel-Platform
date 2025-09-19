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
  //!!! seasional pricing

  getAllSeasionalPricing({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-seasonal-pricing?search=${search}&page=${page}`,
      {
        headers: getAuthHeaders(),
      }
    );
  }

  getAllActiveSeasionalPricing() {
    return axios.get(BASE_URL + `get-all-active-seasonal-pricing`, {
      headers: getAuthHeaders(),
    });
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

  //!! car Safety features

  getAllSafetyFeatures({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-safety-features?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }
  getAllActiveSafetyFeatures() {
    return axios.get(BASE_URL + `get-all-active-safety-features`, {
      headers: getAuthHeaders(),
    });
  }

  addSafetyFeatures(data) {
    return axios.post(BASE_URL + "add-safety-feature", data, {
      headers: getAuthHeaders(),
    });
  }
  updateSafetyFeature(id, data) {
    return axios.post(BASE_URL + `update-safety-feature/${id}`, data, {
      headers: getAuthHeaders(),
    });
  }

  deleteSafetyFeatures(data) {
    return axios.delete(BASE_URL + `delete-safety-feature/${data}`, {
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

  getAllcarHomePage(filters = {}) {
    return axios.get(BASE_URL + `all-cars-home-page`, {
      params: filters,
      paramsSerializer: (params) => new URLSearchParams(params).toString(),
    });
  }
  //!!! reservation api

  getAllReservationAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL + `get-all-reservation?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  addCarReservationByAdmin(data) {
    return axios.post(BASE_URL + "add-reservation-admin", data, {
      headers: getAuthHeaders(),
    });
  }

  getAllAproverCarAdmin({ search = "", page } = {}) {
    return axios.get(
      BASE_URL +
        `get-all-active-reservation-admin?search=${search}&page=${page}`,
      { headers: getAuthHeaders() }
    );
  }

  getsinglereservaton(id) {
    return axios.get(BASE_URL + `get-reservation-by/${id}`, {
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
}

export default new apiServices();
