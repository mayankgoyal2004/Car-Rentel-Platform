import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../Apiservice/apiService";
import { ToastContainer, toast } from "react-toastify";

const AdminAddCars = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [carId, setCarId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [carFeatures, setCarFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [extraServices, setExtraServices] = useState([]);
  const [selectedExtraServices, setSelectedExtraServices] = useState([]);
  const [carDocuments, setCarDocuments] = useState([]);
  const [carPolicies, setCarPolicies] = useState([]);
  const [carVideos, setCarVideos] = useState([]);
  const [damages, setDamages] = useState([]);
  const [currentDamage, setCurrentDamage] = useState({
    location: "",
    type: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [pricingData, setPricingData] = useState({
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    yearlyPrice: "",
    baseKilometers: "",
    extraKmPrice: "",
    // unlimitedKm: false,
    pricingTypes: ["daily", "weekly", "monthly", "yearly"], // Default all selected
    // insurance: [],
    // seasonal: [],
  });
  // const [selectedSeasonalPricingIds, setSelectedSeasonalPricingIds] = useState(
  //   []
  // );
  // const [seasonalPricings, setSeasonalPricings] = useState([]);

  const [formData, setFormData] = useState({
    carName: "",
    permalink: "",
    carType: "",
    carBrand: "",
    carModel: "",
    category: "",
    plateNumber: "",
    vinNumber: "",
    mainLocation: "",
    otherLocations: [],
    carFuel: "",
    odometer: "",
    carColor: "",
    year: "",
    carTransmission: "",
    mileage: "",
    passengers: "",
    NoofSeats: "",
    airbags: "",
    noOfDoors: "",
    image: null,
    carFeatures: [],
    extraService: [],
    // seasonalPricingId: "",
    carDocuments: [],
    carPolicies: [],
    carVideo: [],
    damages: [],
    faqs: [],
    description: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    yearlyPrice: "",
    baseKilometers: "",
    extraKmPrice: "",
    videoPlatform: "",
    videoLink: "",
  });
  const [carTypes, setCarTypes] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carFuels, setCarFuels] = useState([]);
  const [carColors, setCarColors] = useState([]);
  const [carTransmissions, setCarTransmissions] = useState([]);
  const [carSeats, setCarSeats] = useState([]);
  const [locations, setLocations] = useState([]);

  const [faqs, setFaqs] = useState([]);
  const [currentFaq, setCurrentFaq] = useState({ question: "", answer: "" });
  const [editingFaqIndex, setEditingFaqIndex] = useState(null);

  const steps = [
    "basic",
    "features",
    "pricing",
    "extra-services",
    "documents",
    "damages",
    "faq",
    "seo",
  ];

  const fetchCarTypes = async () => {
    try {
      const res = await apiService.getAllCarTypes();
      if (res.data.success) {
        setCarTypes(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarBrands = async () => {
    try {
      const res = await apiService.getAllActiveCarBrands();
      if (res.data.success) {
        setCarBrands(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarModels = async () => {
    try {
      const res = await apiService.getAllActiveCarModel();
      if (res.data.success) {
        setCarModels(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarFuels = async () => {
    try {
      const res = await apiService.getAllActiveCarFuel();
      if (res.data.success) {
        setCarFuels(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarColors = async () => {
    try {
      const res = await apiService.getAllActiveCarColor();
      if (res.data.success) {
        setCarColors(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarTransmissions = async () => {
    try {
      const res = await apiService.getAllActiveCarTransmissions();
      if (res.data.success) {
        setCarTransmissions(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCarSeats = async () => {
    try {
      const res = await apiService.getAllActiveCarSeats();
      if (res.data.success) {
        setCarSeats(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const fetchLocations = async () => {
    try {
      const res = await apiService.getAllActiveLocation();
      if (res.data.success) {
        setLocations(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchSeasionalPricing = async () => {
  //   try {
  //     const res = await apiService.getAllActiveSeasionalPricing();
  //     if (res.data.success) {
  //       setSeasonalPricings(res.data.data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const fetCarFeatures = async () => {
    try {
      const res = await apiService.getAllActiveCarFeatures();
      if (res.data.success) {
        setCarFeatures(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const fetchcarExtraServices = async () => {
    try {
      const res = await apiService.getAllactiveExtraServices();
      if (res.data.success) {
        setExtraServices(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCarTypes();
    fetchCarBrands();
    fetchCarModels();
    fetchCarFuels();
    fetchCarColors();
    fetchCarTransmissions();
    fetchCarSeats();
    fetchLocations();
    fetCarFeatures();
    // fetchSeasionalPricing();
    fetchcarExtraServices();
  }, []);

  const handleSaveBasicInfo = async () => {
    try {
      setIsSubmitting(true);

      // build form data (for file upload)
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          // handle array (locations, features etc.)
          if (Array.isArray(formData[key])) {
            formData[key].forEach((val) => form.append(`${key}[]`, val));
          } else {
            form.append(key, formData[key]);
          }
        }
      });

      const res = await apiService.addBasicCar(form);

      if (res.data.success) {
        toast.success("Car basic info saved successfully!");
        setCarId(res.data.car._id);
        nextStep();
      } else {
        toast.error(res.data.message || "Failed to save car info");
      }
    } catch (err) {
      toast.error(
        "Error adding car: " + (err.response?.data?.message || err.message)
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSaveDamages = async () => {
    try {
      const res = await apiService.updateCarDamage(carId, { damages });
      if (res.data.success) {
        toast.success("Damages saved successfully!");
        nextStep();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(
        "Error saving damages: " + (err.response?.data?.message || err.message)
      );
    }
  };

  const handleAddDamage = () => {
    if (!currentDamage.location || !currentDamage.type) return;

    if (editingIndex !== null) {
      // Edit existing
      const updatedDamages = [...damages];
      updatedDamages[editingIndex] = currentDamage;
      setDamages(updatedDamages);
      setEditingIndex(null);
    } else {
      // Add new
      setDamages([...damages, currentDamage]);
    }

    setCurrentDamage({ location: "", type: "", description: "" });
  };
  const handleRemoveDamage = (index) => {
    const updatedDamages = damages.filter((_, i) => i !== index);
    setDamages(updatedDamages);
  };
  const handleEditDamage = (index) => {
    setCurrentDamage(damages[index]);
    setEditingIndex(index);
  };
  const handleAddFaq = () => {
    if (!currentFaq.question || !currentFaq.answer) {
      toast.error("Question and Answer are required");
      return;
    }

    const updatedFaqs = [...faqs];

    if (editingFaqIndex !== null) {
      // Editing existing FAQ
      updatedFaqs[editingFaqIndex] = currentFaq;
      setEditingFaqIndex(null);
    } else {
      // Adding new FAQ
      updatedFaqs.push(currentFaq);
    }

    setFaqs(updatedFaqs);
    setCurrentFaq({ question: "", answer: "" });
  };
  const saveCarFaqs = async () => {
    try {
      const res = await apiService.updateCarFaq(carId, { faqs }); // faqs is an array of {question, answer}
      if (res.data.success) {
        toast.success("FAQs saved successfully!");
        nextStep();
      } else {
        toast.error(res.data.message || "Failed to save FAQs");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error saving FAQs");
    }
  };
  const handleEditFaq = (index) => {
    setCurrentFaq(faqs[index]);
    setEditingFaqIndex(index);
  };

  const handleRemoveFaq = (index) => {
    const updatedFaqs = faqs.filter((_, idx) => idx !== index);
    setFaqs(updatedFaqs);
  };

  const handleSaveFeatures = async () => {
    if (!carId) {
      toast.error("Please complete basic information first");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.updateCarFeatures(carId, {
        carFeatures: selectedFeatures,
      });

      if (response.data.success) {
        toast.success("Features saved successfully!");
        nextStep();
        return true;
      } else {
        toast.error(response.data.message || "Failed to save features");
        return false;
      }
    } catch (error) {
      console.error("Error saving features:", error);
      toast.error("Failed to save features");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveExtraFeatures = async () => {
    if (!carId) {
      toast.error("Please complete basic information first");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.updateCarExtraFeatures(carId, {
        extraService: selectedExtraServices,
      });

      if (response.data.success) {
        toast.success("ExtraServices saved successfully!");
        nextStep();
        return true;
      } else {
        toast.error(response.data.message || "Failed to save ExtraServices");
        return false;
      }
    } catch (error) {
      console.error("Error saving features:", error);
      toast.error("Failed to save features");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSaveDocuments = async () => {
    if (!carId) {
      toast.error("Please save basic info first");
      return;
    }

    const formData = new FormData();
    carDocuments.forEach((file) => {
      formData.append("documents", file);
    });

    // Append Policies
    carPolicies.forEach((file) => {
      formData.append("policies", file);
    });

    // Append Videos
    carVideos.forEach((file) => {
      formData.append("videos", file);
    });

    try {
      const res = await apiService.uploadCarDocument(carId, formData);
      if (res.data.success) {
        toast.success("Documents uploaded successfully!");
        nextStep();
      } else {
        toast.error(res.data.message || "Failed to upload documents");
      }
    }  catch (err) {
      toast.error(
        "Error uploading documents: " + (err.response?.data?.message || err.message)
      );
    }
  };

  const handlePricingChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle pricing type toggles (daily, weekly, etc.)
      setPricingData((prev) => {
        const newPricingTypes = checked
          ? [...prev.pricingTypes, name]
          : prev.pricingTypes.filter((type) => type !== name);

        return {
          ...prev,
          pricingTypes: newPricingTypes,
        };
      });
    } else {
      setPricingData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Save pricing data
  const handleSavePricing = async () => {
    if (!carId) {
      toast.error("Please save basic info first");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        prices: {
          daily: Number(pricingData.dailyPrice),
          weekly: Number(pricingData.weeklyPrice),
          monthly: Number(pricingData.monthlyPrice),
          yearly: Number(pricingData.yearlyPrice),
        },
        baseKilometers: Number(pricingData.baseKilometers),
        extraKilometerPrice: Number(pricingData.extraKmPrice),
        // unlimitedKilometers: pricingData.unlimitedKm,
        // seasonal: selectedSeasonalPricingIds,
        // insurance: pricingData.insurance,
      };

      const res = await apiService.updateCarPricing(carId, payload);

      if (res.data.success) {
        toast.success("Pricing saved successfully!");
        nextStep();
      } else {
        toast.error(res.data.message || "Failed to save pricing");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while saving pricing!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        // Remove feature if already selected
        return prev.filter((id) => id !== featureId);
      } else {
        // Add feature if not selected
        return [...prev, featureId];
      }
    });
  };

  const handleExtraFeatureToogle = (featureId) => {
    setSelectedExtraServices((prev) => {
      if (prev.includes(featureId)) {
        // Remove feature if already selected
        return prev.filter((id) => id !== featureId);
      } else {
        // Add feature if not selected
        return [...prev, featureId];
      }
    });
  };
  const handleSaveSeo = async () => {
    try {
      const res = await apiService.updateCarDescription(carId, {
        description: formData.description,
      });

      if (res.data.success) {
        toast.success("SEO data saved successfully!");
        navigate("/admin-dashboard/all-cars");
      } else {
        toast.error(res.data.message || "Failed to save SEO data");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error saving SEO data");
    }
  };

  // const toggleSeasonalPricing = (id) => {
  //   setSelectedSeasonalPricingIds((prev) =>
  //     prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
  //   );
  // };

  // Toggle insurance

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Function to show only the current step
  const showStep = (stepIndex) => {
    return currentStep === stepIndex
      ? { display: "block" }
      : { display: "none" };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file)); // preview in UI
    }
  };
  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);

    if (type === "car") {
      setCarDocuments((prev) => [...prev, ...files]);
    } else if (type === "policy") {
      setCarPolicies((prev) => [...prev, ...files]);
    } else if (type === "video") {
      setCarVideos((prev) => [...prev, ...files]);
    }
  };

  const handleRemove = (type, index) => {
    if (type === "car") {
      setCarDocuments((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "policy") {
      setCarPolicies((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "video") {
      setCarVideos((prev) => prev.filter((_, i) => i !== index));
    }
  };
  return (
    <div className="page-wrapper">
      <div className="content me-0">
        <div className="mb-3">
          <Link
            to="/admin-dashboard/all-cars"
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-left me-1" />
            Back to List
          </Link>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="add-wizard car-steps">
              <ul className="nav d-flex align-items-center flex-wrap gap-3">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className={`nav-item ${
                      currentStep === index ? "active" : ""
                    }`}
                  >
                    <a
                      href="javascript:void(0);"
                      className="nav-link d-flex align-items-center"
                    >
                      <i className={`ti ti-${getStepIcon(step)} me-1`} />
                      {formatStepName(step)}
                    </a>
                  </li>
                ))}
              </ul>
              <fieldset id="first-field" style={showStep(0)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-info-circle text-secondary me-2" />
                      Basic Info
                    </h4>
                  </div>
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Featured Image</h6>
                        <p>Upload Featured Image</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames">
                            {previewImage ? (
                              <img
                                src={previewImage}
                                alt="preview"
                                className="img-fluid rounded-circle"
                              />
                            ) : (
                              <img
                                src="/admin-assets/img/car/car-02.jpg"
                                alt="default"
                                className="img-fluid rounded-circle"
                              />
                            )}
                          </div>
                          <div>
                            <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                              <i className="ti ti-photo me-1" />
                              Change
                              <input
                                type="file"
                                className="form-control image-sign"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                            </div>
                            <p>Recommended size is 500px x 500px</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-2 pb-2">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Info</h6>
                        <p>Add Information About Car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="carName"
                            className="form-control"
                            value={formData.carName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Permalink</label>
                          <input
                            type="text"
                            name="permalink"
                            className="form-control"
                            value={formData.permalink}
                            onChange={handleChange}
                            placeholder="https://www.example.com/cars/"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-label">
                                  Car Type{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <select
                                name="carType"
                                className="form-control"
                                value={formData.carType}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carTypes.map((type) => (
                                  <option key={type._id} value={type._id}>
                                    {type.carType}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-label">
                                  Brand <span className="text-danger">*</span>
                                </label>
                              </div>
                              <select
                                name="carBrand"
                                className="form-control"
                                value={formData.carBrand}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carBrands.map((brand) => (
                                  <option key={brand._id} value={brand._id}>
                                    {brand.brandName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-label">
                                  Model <span className="text-danger">*</span>
                                </label>
                              </div>
                              <select
                                name="carModel"
                                className="form-control"
                                value={formData.carModel}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carModels.map((model) => (
                                  <option key={model._id} value={model._id}>
                                    {model.carModel}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Category <span className="text-danger">*</span>
                              </label>
                              <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select form-control"
                              >
                                <option key={""}>Select</option>
                                <option key={"Car"} value={"Car"}>
                                  Car
                                </option>
                                <option key={"Bike"} value={"Bike"}>
                                  Bike
                                </option>
                                <option key={"Truck"} value={"Truck"}>
                                  Truck
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Plate Number</label>
                              <input
                                type="text"
                                className="form-control"
                                name="plateNumber"
                                value={formData.plateNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">VIN Number</label>
                              <input
                                type="text"
                                className="form-control"
                                name="vinNumber"
                                value={formData.vinNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Main Location{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                name="mainLocation"
                                className="form-control"
                                value={formData.mainLocation}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {locations.map((location) => (
                                  <option
                                    key={location._id}
                                    value={location._id}
                                  >
                                    {location.location}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Link Other Location
                              </label>
                              <select
                                name="otherLocations"
                                className="form-control"
                                value={formData.otherLocations}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {locations.map((location) => (
                                  <option
                                    key={location._id}
                                    value={location._id}
                                  >
                                    {location.location}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Fuel</label>
                              <select
                                name="carFuel"
                                className="form-control"
                                value={formData.carFuel}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carFuels.map((fuel) => (
                                  <option key={fuel._id} value={fuel._id}>
                                    {fuel.carFuel}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Odometer</label>
                              <input
                                type="text"
                                className="form-control"
                                name="odometer"
                                value={formData.odometer}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Color <span className="text-danger">*</span>
                              </label>
                              <select
                                name="carColor"
                                className="form-control"
                                value={formData.carColor}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carColors.map((color) => (
                                  <option key={color._id} value={color._id}>
                                    {color.carColor}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Year of Car{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-icon-end position-relative">
                                <input
                                  type="date"
                                  name="yearOfCar"
                                  className="form-control yearpicker"
                                  value={formData.yearOfCar}
                                  onChange={handleChange}
                                />

                                <span className="input-icon-addon">
                                  <i className="ti ti-calendar" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Transmission</label>
                              <select
                                name="carTransmission"
                                className="form-control"
                                value={formData.carTransmission}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carTransmissions.map((Transmission) => (
                                  <option
                                    key={Transmission._id}
                                    value={Transmission._id}
                                  >
                                    {Transmission.carTransmission}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Mileage</label>
                              <input
                                type="text"
                                className="form-control"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Passengers</label>
                              <input
                                type="text"
                                className="form-control"
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">No of Seats</label>
                              <select
                                name="NoofSeats"
                                className="form-control"
                                value={formData.NoofSeats}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                {carSeats.map((seats) => (
                                  <option key={seats._id} value={seats._id}>
                                    {seats.carSeats}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">No of Doors</label>
                              <input
                                type="text"
                                className="form-control"
                                name="noOfDoors"
                                value={formData.noOfDoors}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                No of Air Bags
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="airbags"
                                value={formData.airbags}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-light d-flex align-items-center me-2"
                      onClick={handleSaveBasicInfo}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      type="button"
                      onClick={handleSaveBasicInfo}
                    >
                      Add Features
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset style={showStep(1)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-flame text-secondary me-2" />
                      Features &amp; Amenities
                    </h4>
                  </div>
                  <div className="border-bottom mb-2 pb-2 amenity-wrap">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Features &amp; Amenities</h6>
                        <p>Select features for your car</p>
                      </div>
                      <div className="col-xl-9">
                        {carFeatures.length === 0 ? (
                          <div className="text-center py-4">
                            <p>No features available</p>
                          </div>
                        ) : (
                          <>
                            <div className="row">
                              {carFeatures.map((feature) => (
                                <div
                                  key={feature._id}
                                  className="col-lg-4 col-md-6"
                                >
                                  <div className="mb-3">
                                    <div className="form-check form-checkbox mb-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`feature-${feature._id}`}
                                        checked={selectedFeatures.includes(
                                          feature._id
                                        )}
                                        onChange={() =>
                                          handleFeatureToggle(feature._id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`feature-${feature._id}`}
                                      >
                                        {feature.carFeature}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={handleSaveFeatures}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save Features & Continue"}
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset style={showStep(2)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-files text-secondary me-2" />
                      Pricing
                    </h4>
                  </div>

                  {/* Main Pricing Section */}
                  <div className="border-bottom mb-4 pb-2 unlimited-price">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Pricing</h6>
                        <p>Add Pricing for Cars</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Pricing Type{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="d-flex align-items-center flex-wrap gap-3">
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="daily"
                                    id="price-daily"
                                    checked={pricingData.pricingTypes.includes(
                                      "daily"
                                    )}
                                    onChange={handlePricingChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="price-daily"
                                  >
                                    Daily
                                  </label>
                                </div>
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="weekly"
                                    id="price-weekly"
                                    checked={pricingData.pricingTypes.includes(
                                      "weekly"
                                    )}
                                    onChange={handlePricingChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="price-weekly"
                                  >
                                    Weekly
                                  </label>
                                </div>
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="monthly"
                                    id="price-monthly"
                                    checked={pricingData.pricingTypes.includes(
                                      "monthly"
                                    )}
                                    onChange={handlePricingChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="price-monthly"
                                  >
                                    Monthly
                                  </label>
                                </div>
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="yearly"
                                    id="price-yearly"
                                    checked={pricingData.pricingTypes.includes(
                                      "yearly"
                                    )}
                                    onChange={handlePricingChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="price-yearly"
                                  >
                                    Yearly
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Daily Price */}
                          {pricingData.pricingTypes.includes("daily") && (
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Daily Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">$</span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="dailyPrice"
                                    value={pricingData.dailyPrice}
                                    onChange={handlePricingChange}
                                    min="0"
                                    step="0.01"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Weekly Price */}
                          {pricingData.pricingTypes.includes("weekly") && (
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Weekly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">$</span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="weeklyPrice"
                                    value={pricingData.weeklyPrice}
                                    onChange={handlePricingChange}
                                    min="0"
                                    step="0.01"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Monthly Price */}
                          {pricingData.pricingTypes.includes("monthly") && (
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Monthly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">$</span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="monthlyPrice"
                                    value={pricingData.monthlyPrice}
                                    onChange={handlePricingChange}
                                    min="0"
                                    step="0.01"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Yearly Price */}
                          {pricingData.pricingTypes.includes("yearly") && (
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Yearly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">$</span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="yearlyPrice"
                                    value={pricingData.yearlyPrice}
                                    onChange={handlePricingChange}
                                    min="0"
                                    step="0.01"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Base Kilometers */}
                          <div className="col-lg-6 col-md-6">
                            <div className="mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-label">
                                  Base Kilometers (Per Day){" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <input
                                type="number"
                                className="form-control"
                                name="baseKilometers"
                                value={pricingData.baseKilometers}
                                onChange={handlePricingChange}
                                min="0"
                              />
                            </div>
                          </div>

                          {/* Extra KM Price */}
                          <div className="col-lg-6 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Kilometers Extra Price{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="extraKmPrice"
                                  value={pricingData.extraKmPrice}
                                  onChange={handlePricingChange}
                                  min="0"
                                  step="0.01"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seasonal Pricing Section */}
                  {/* <div className="border-bottom mb-2 pb-2">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Seasonal Pricing</h6>
                        <p>Add Seasonal Pricing for Car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                          <button
                            type="button"
                            className="btn btn-dark btn-md d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#select_price"
                          >
                            <i className="ti ti-plus me-1" />
                            Select Seasonal Pricing
                          </button>
                        </div>

                        <div className="empty-data bg-light text-center mb-3">
                          <p className="fw-medium">No Seasonal Pricing Added</p>
                        </div>

                      </div>
                    </div>
                  </div> */}

                  {/* Insurance Section */}
                  {/* <div className="border-bottom mb-2 pb-2">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Insurance</h6>
                        <p>Add Insurance for Car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                          <button
                            type="button"
                            className="btn btn-dark btn-md d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#select_insurance"
                          >
                            <i className="ti ti-plus me-1" />
                            Select Insurance
                          </button>
                        </div>

                     
                        <div className="empty-data bg-light text-center mb-3">
                          <p className="fw-medium">No Insurance Added</p>
                        </div>

                      
                      </div>
                    </div>
                  </div> */}

                  {/* Navigation Buttons */}
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={handleSavePricing}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save Pricing & Continue"}
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset style={showStep(3)}>
                {" "}
                <form a onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-float-center text-secondary me-2" />
                      Extra Services
                    </h4>
                  </div>
                  <div className="border-bottom mb-2 pb-2 amenity-wrap">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Extra Services </h6>
                        <p>Select Extra Services for your car</p>
                      </div>
                      <div className="col-xl-9">
                        {extraServices.length === 0 ? (
                          <div className="text-center py-4">
                            <p>No features available</p>
                          </div>
                        ) : (
                          <>
                            <div className="row">
                              {extraServices.map((feature) => (
                                <div
                                  key={feature._id}
                                  className="col-lg-4 col-md-6"
                                >
                                  <div className="mb-3">
                                    <div className="form-check form-checkbox mb-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`feature-${feature._id}`}
                                        checked={selectedExtraServices.includes(
                                          feature._id
                                        )}
                                        onChange={() =>
                                          handleExtraFeatureToogle(feature._id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`feature-${feature._id}`}
                                      >
                                        {feature.name}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={handleSaveExtraFeatures}
                    >
                      Upload Documents
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset style={showStep(4)}>
                <form>
                  {/* Car Documents */}
                  <div className="border-bottom mb-4 pb-3">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Documents</h6>
                        <p>Add Important Documents of your Car</p>
                      </div>
                      <div className="col-xl-9">
                        <h6 className="mb-3">Upload Document</h6>
                        <input
                          type="file"
                          className="form-control"
                          multiple
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => handleFileChange(e, "car")}
                        />
                        <div className="mt-3">
                          {carDocuments.map((file, idx) => (
                            <div
                              key={idx}
                              className="d-flex align-items-center justify-content-between bg-white border br-5 p-2 mb-2"
                            >
                              <span>{file.name}</span>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => handleRemove("car", idx)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Policy Documents */}
                  <div className="border-bottom mb-4 pb-3">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Policies</h6>
                        <p>Add policies of your Car</p>
                      </div>
                      <div className="col-xl-9">
                        <h6 className="mb-3">Upload Document</h6>
                        <input
                          type="file"
                          className="form-control"
                          multiple
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => handleFileChange(e, "policy")}
                        />
                        <div className="mt-3">
                          {carPolicies.map((file, idx) => (
                            <div
                              key={idx}
                              className="d-flex align-items-center justify-content-between bg-white border br-5 p-2 mb-2"
                            >
                              <span>{file.name}</span>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => handleRemove("policy", idx)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Videos */}
                  <div className="border-bottom mb-4 pb-3">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Videos</h6>
                        <p>Add Video About Car</p>
                      </div>
                      <div className="col-xl-9">
                        <h6 className="mb-3">Upload Video</h6>
                        <input
                          type="file"
                          className="form-control"
                          multiple
                          accept="video/*"
                          onChange={(e) => handleFileChange(e, "video")}
                        />
                        <div className="mt-3 d-flex flex-wrap gap-2">
                          {carVideos.map((file, idx) => (
                            <div
                              key={idx}
                              className="d-flex flex-column align-items-center"
                            >
                              <video width="120" controls>
                                <source
                                  src={URL.createObjectURL(file)}
                                  type={file.type}
                                />
                              </video>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger mt-1"
                                onClick={() => handleRemove("video", idx)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={handleSaveDocuments}
                    >
                      Add Damage
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset style={showStep(5)}>
                <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-id text-secondary me-2" />
                    Damages
                  </h4>
                </div>

                {/* List of Damages */}
                {damages.map((dmg, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 mb-2 border br-5 d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6>{dmg.type}</h6>
                      <span className="badge bg-secondary-transparent">
                        {dmg.location}
                      </span>
                      <p>{dmg.description}</p>
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleEditDamage(idx)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveDamage(idx)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add/Edit Damage Form */}
                <div className="border p-3 mb-3 br-5">
                  <select
                    className="form-select mb-2"
                    value={currentDamage.location}
                    onChange={(e) =>
                      setCurrentDamage({
                        ...currentDamage,
                        location: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Location</option>
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                  </select>

                  <select
                    className="form-select mb-2"
                    value={currentDamage.type}
                    onChange={(e) =>
                      setCurrentDamage({
                        ...currentDamage,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="Scratch">Scratch</option>
                    <option value="Dent">Dent</option>
                    <option value="Crack">Crack</option>
                    <option value="Clip">Clip</option>
                  </select>

                  <textarea
                    className="form-control mb-2"
                    placeholder="Description"
                    value={currentDamage.description}
                    onChange={(e) =>
                      setCurrentDamage({
                        ...currentDamage,
                        description: e.target.value,
                      })
                    }
                  />

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddDamage}
                  >
                    {editingIndex !== null ? "Save Changes" : "Add Damage"}
                  </button>
                </div>

                {/* Navigation */}
                <div className="d-flex justify-content-end gap-2 pt-3">
                  <button className="btn btn-outline-light" onClick={prevStep}>
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleSaveDamages}
                  >
                    Next Step
                  </button>
                </div>
              </fieldset>
              <fieldset style={showStep(6)}>
                <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-question-mark text-secondary me-2" />
                    FAQ
                  </h4>
                </div>

                {/* List of FAQs */}
                {faqs.length > 0 ? (
                  <div className="card border-0 bg-light mb-0">
                    <div className="card-body">
                      <h6 className="mb-3">Total FAQ: {faqs.length}</h6>
                      <div className="custom-accordion-icon" id="faqAccordion">
                        {faqs.map((faq, idx) => (
                          <div key={idx} className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq-${idx}`}
                                aria-expanded="false"
                                aria-controls={`faq-${idx}`}
                              >
                                <span className="faq-icon">
                                  <i className="ti ti-grip-vertical" />
                                </span>
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`faq-${idx}`}
                              className="accordion-collapse collapse"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                <p className="fs-13">{faq.answer}</p>
                                <div className="d-flex gap-2">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-warning"
                                    onClick={() => handleEditFaq(idx)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleRemoveFaq(idx)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>No FAQs added yet.</p>
                )}

                {/* Add/Edit FAQ Form */}
                <div className="border p-3 mb-3 br-5">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Question"
                    value={currentFaq.question}
                    onChange={(e) =>
                      setCurrentFaq({ ...currentFaq, question: e.target.value })
                    }
                  />
                  <textarea
                    className="form-control mb-2"
                    placeholder="Answer"
                    value={currentFaq.answer}
                    onChange={(e) =>
                      setCurrentFaq({ ...currentFaq, answer: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddFaq}
                  >
                    {editingFaqIndex !== null ? "Save Changes" : "Add FAQ"}
                  </button>
                </div>

                {/* Navigation */}
                <div className="d-flex justify-content-end gap-2 pt-3">
                  <button className="btn btn-outline-light" onClick={prevStep}>
                    Back
                  </button>
                  <button className="btn btn-primary" onClick={saveCarFaqs}>
                    Save & Exit
                  </button>
                </div>
              </fieldset>
              <fieldset style={showStep(7)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-seo text-secondary me-2" />
                      SEO
                    </h4>
                  </div>
                  <div className="border-bottom mb-2 pb-2">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">SEO</h6>
                        <p>Add SEO Meta of the car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-3">
                          <label className="form-label">
                            Description <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      className="btn btn-primary d-flex align-items-center"
                      onClick={handleSaveSeo}
                    >
                      Save &amp; Exit
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
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

      {/* /Create Seasonal Pricing */}
      {/* Select Seasonal Pricing */}
    </div>
  );
};
const getStepIcon = (step) => {
  const icons = {
    basic: "info-circle",
    features: "flame",
    pricing: "files",
    "extra-services": "float-center",
    documents: "file-invoice",
    damages: "id",
    faq: "question-mark",
    seo: "seo",
  };
  return icons[step] || "circle";
};

const formatStepName = (step) => {
  return step
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default AdminAddCars;
