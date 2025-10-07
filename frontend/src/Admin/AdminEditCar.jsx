import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { toast } from "react-toastify";

const AdminEditCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
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
    pricingTypes: ["daily", "weekly", "monthly", "yearly"],
  });

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

  // Fetch all necessary data
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

  // Fetch car data to pre-fill the form
  const fetchCarData = async () => {
    try {
      const res = await apiService.getSingleCarById(id);
      if (res.data.success) {
        const carData = res.data.data;

        setFormData({
          carName: carData.carName,
          permalink: carData.permalink || "",
          carType: carData.carType?._id || "",
          carBrand: carData.carBrand?._id || "",
          carModel: carData.carModel?._id || "",
          category: carData.category || "",
          plateNumber: carData.plateNumber || "",
          vinNumber: carData.vinNumber || "",
          mainLocation: carData.mainLocation?._id || "",
          otherLocations: carData.otherLocations?._id || [],
          carFuel: carData.carFuel?._id || "",
          odometer: carData.odometer || "",
          carColor: carData.carColor?._id || "",
          year: carData.year,
          carTransmission: carData.carTransmission?._id || "",
          mileage: carData.mileage || "",
          passengers: carData.passengers || "",
          NoofSeats: carData.carSeats?._id || "",
          airbags: carData.airbags || "",
          noOfDoors: carData.noOfDoors || "",
          image: null,
          description: carData.description || "",
        });

        if (carData.carFeatures) {
          setSelectedFeatures(
            carData.carFeatures.map((feature) => feature._id)
          );
        }

        // Set selected extra services
        if (carData.extraService) {
          setSelectedExtraServices(
            carData.extraService.map((service) => service._id)
          );
        }

        // Set pricing data
        if (carData.pricing) {
          setPricingData({
            dailyPrice: carData.pricing.prices?.daily || "",
            weeklyPrice: carData.pricing.prices?.weekly || "",
            monthlyPrice: carData.pricing.prices?.monthly || "",
            yearlyPrice: carData.pricing.prices?.yearly || "",
            baseKilometers: carData.pricing.baseKilometers || "",
            extraKmPrice: carData.pricing.extraKilometerPrice || "",
            pricingTypes: ["daily", "weekly", "monthly", "yearly"],
          });
        }

        // Set damages
        if (carData.damages) {
          setDamages(carData.damages);
        }

        // Set FAQs
        if (carData.faqs) {
          setFaqs(carData.faqs);
        }

        // Set preview image
        if (carData.image) {
          setPreviewImage(carData.image);
        }

        console.log("FORM DATA AFTER SET:", {
          ...formData,
          carName: carData.carName,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load car data");
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
    fetchcarExtraServices();

    if (id) {
      fetchCarData();
    }
  }, [id]);

  const handleSaveBasicInfo = async () => {
    try {
      setIsSubmitting(true);

      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          if (Array.isArray(formData[key])) {
            formData[key].forEach((val) => form.append(`${key}[]`, val));
          } else {
            form.append(key, formData[key]);
          }
        }
      });

      const res = await apiService.editCarBasic(id, form);

      if (res.data.success) {
        toast.success("Car basic info updated successfully!");
        nextStep();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while updating!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDamages = async () => {
    try {
      const res = await apiService.updateCarDamage(id, { damages });
      if (res.data.success) {
        toast.success("Damages saved successfully!");
        nextStep();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error saving damages");
    }
  };

  const handleAddDamage = () => {
    if (!currentDamage.location || !currentDamage.type) return;

    if (editingIndex !== null) {
      const updatedDamages = [...damages];
      updatedDamages[editingIndex] = currentDamage;
      setDamages(updatedDamages);
      setEditingIndex(null);
    } else {
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
      updatedFaqs[editingFaqIndex] = currentFaq;
      setEditingFaqIndex(null);
    } else {
      updatedFaqs.push(currentFaq);
    }

    setFaqs(updatedFaqs);
    setCurrentFaq({ question: "", answer: "" });
  };

  const saveCarFaqs = async () => {
    try {
      const res = await apiService.updateCarFaq(id, { faqs });
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
    setIsSubmitting(true);
    try {
      const response = await apiService.updateCarFeatures(id, {
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
    setIsSubmitting(true);
    try {
      const response = await apiService.updateCarExtraFeatures(id, {
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
    const formData = new FormData();
    carDocuments.forEach((file) => {
      formData.append("documents", file);
    });

    carPolicies.forEach((file) => {
      formData.append("policies", file);
    });

    carVideos.forEach((file) => {
      formData.append("videos", file);
    });

    try {
      const res = await apiService.uploadCarDocument(id, formData);
      if (res.data.success) {
        toast.success("Documents uploaded successfully!");
        nextStep();
      } else {
        toast.error(res.data.message || "Failed to upload documents");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error uploading documents");
    }
  };

  const handlePricingChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
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

  const handleSavePricing = async () => {
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
      };

      const res = await apiService.updateCarPricing(id, payload);

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
        return prev.filter((id) => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const handleExtraFeatureToogle = (featureId) => {
    setSelectedExtraServices((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter((id) => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const handleSaveSeo = async () => {
    try {
      const res = await apiService.updateCarDescription(id, {
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
      setPreviewImage(URL.createObjectURL(file));
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

              {/* Basic Info Step */}
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
                                src={BASE_URL_IMG + previewImage}
                                alt="preview"
                                className="img-fluid rounded-circle"
                              />
                            ) : (
                              "image"
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
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
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
                                  name="year"
                                  className="form-control yearpicker"
                                  value={formData.year}
                                  onChange={handleChange}
                                />
                                <span className="input-icon-addon"></span>
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
                      onClick={() => navigate("/admin-dashboard/all-cars")}
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

              {/* Features Step */}
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

              {/* Pricing Step */}
              <fieldset style={showStep(2)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-files text-secondary me-2" />
                      Pricing
                    </h4>
                  </div>

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

              {/* Extra Services Step */}
              <fieldset style={showStep(3)}>
                <form onSubmit={(e) => e.preventDefault()}>
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

              {/* Documents Step */}
              <fieldset style={showStep(4)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-file-invoice text-secondary me-2" />
                      Documents
                    </h4>
                  </div>
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Documents</h6>
                        <p>Upload Car Documents</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-4">
                          <label className="form-label">Car Documents</label>
                          <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                            <i className="ti ti-upload me-1" />
                            Upload Documents
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                              onChange={(e) => handleFileChange(e, "car")}
                            />
                          </div>
                          <p>Upload car documents like RC, insurance, etc.</p>

                          {carDocuments.length > 0 && (
                            <div className="mt-3">
                              <h6>Selected Documents:</h6>
                              <ul className="list-group">
                                {carDocuments.map((file, index) => (
                                  <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                  >
                                    {file.name}
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger"
                                      onClick={() => handleRemove("car", index)}
                                    >
                                      <i className="ti ti-x" />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Policies</h6>
                        <p>Upload Car Policies</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-4">
                          <label className="form-label">Car Policies</label>
                          <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                            <i className="ti ti-upload me-1" />
                            Upload Policies
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                              onChange={(e) => handleFileChange(e, "policy")}
                            />
                          </div>
                          <p>Upload car policies and terms documents.</p>

                          {carPolicies.length > 0 && (
                            <div className="mt-3">
                              <h6>Selected Policies:</h6>
                              <ul className="list-group">
                                {carPolicies.map((file, index) => (
                                  <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                  >
                                    {file.name}
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger"
                                      onClick={() =>
                                        handleRemove("policy", index)
                                      }
                                    >
                                      <i className="ti ti-x" />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Videos</h6>
                        <p>Upload Car Videos</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-4">
                          <label className="form-label">Car Videos</label>
                          <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                            <i className="ti ti-upload me-1" />
                            Upload Videos
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                              accept="video/*"
                              onChange={(e) => handleFileChange(e, "video")}
                            />
                          </div>
                          <p>Upload car videos for better showcasing.</p>

                          {carVideos.length > 0 && (
                            <div className="mt-3">
                              <h6>Selected Videos:</h6>
                              <ul className="list-group">
                                {carVideos.map((file, index) => (
                                  <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                  >
                                    {file.name}
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger"
                                      onClick={() =>
                                        handleRemove("video", index)
                                      }
                                    >
                                      <i className="ti ti-x" />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Or Add Video Link
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <select
                                name="videoPlatform"
                                className="form-control mb-2"
                                value={formData.videoPlatform}
                                onChange={handleChange}
                              >
                                <option value="">Select Platform</option>
                                <option value="youtube">YouTube</option>
                                <option value="vimeo">Vimeo</option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="videoLink"
                                value={formData.videoLink}
                                onChange={handleChange}
                                placeholder="Paste video URL here"
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
                      className="btn btn-outline-light border wizard-prev me-2"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                    <button
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={handleSaveDocuments}
                    >
                      Add Damages
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>

              {/* Damages Step */}
              <fieldset style={showStep(5)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-id text-secondary me-2" />
                      Damages
                    </h4>
                  </div>
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Damages</h6>
                        <p>Add any existing damages to the car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Location</label>
                              <input
                                type="text"
                                className="form-control"
                                value={currentDamage.location}
                                onChange={(e) =>
                                  setCurrentDamage({
                                    ...currentDamage,
                                    location: e.target.value,
                                  })
                                }
                                placeholder="e.g., Front bumper"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Type</label>
                              <input
                                type="text"
                                className="form-control"
                                value={currentDamage.type}
                                onChange={(e) =>
                                  setCurrentDamage({
                                    ...currentDamage,
                                    type: e.target.value,
                                  })
                                }
                                placeholder="e.g., Scratch, Dent"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Description</label>
                              <input
                                type="text"
                                className="form-control"
                                value={currentDamage.description}
                                onChange={(e) =>
                                  setCurrentDamage({
                                    ...currentDamage,
                                    description: e.target.value,
                                  })
                                }
                                placeholder="Optional description"
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary mb-4"
                          onClick={handleAddDamage}
                        >
                          {editingIndex !== null
                            ? "Update Damage"
                            : "Add Damage"}
                        </button>

                        {damages.length > 0 ? (
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>Location</th>
                                  <th>Type</th>
                                  <th>Description</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {damages.map((damage, index) => (
                                  <tr key={index}>
                                    <td>{damage.location}</td>
                                    <td>{damage.type}</td>
                                    <td>{damage.description || "-"}</td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-info me-1"
                                        onClick={() => handleEditDamage(index)}
                                      >
                                        <i className="ti ti-edit" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        onClick={() =>
                                          handleRemoveDamage(index)
                                        }
                                      >
                                        <i className="ti ti-trash" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="alert alert-info">
                            No damages added yet.
                          </div>
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
                      onClick={handleSaveDamages}
                    >
                      Add FAQs
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>

              {/* FAQ Step */}
              <fieldset style={showStep(6)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-question-mark text-secondary me-2" />
                      Frequently Asked Questions
                    </h4>
                  </div>
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car FAQs</h6>
                        <p>Add frequently asked questions about this car</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-4">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Question</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={currentFaq.question}
                                  onChange={(e) =>
                                    setCurrentFaq({
                                      ...currentFaq,
                                      question: e.target.value,
                                    })
                                  }
                                  placeholder="Enter question"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Answer</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={currentFaq.answer}
                                  onChange={(e) =>
                                    setCurrentFaq({
                                      ...currentFaq,
                                      answer: e.target.value,
                                    })
                                  }
                                  placeholder="Enter answer"
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="btn btn-primary mb-4"
                            onClick={handleAddFaq}
                          >
                            {editingFaqIndex !== null
                              ? "Update FAQ"
                              : "Add FAQ"}
                          </button>

                          {faqs.length > 0 ? (
                            <div className="accordion" id="faqAccordion">
                              {faqs.map((faq, index) => (
                                <div key={index} className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#faqCollapse${index}`}
                                    >
                                      {faq.question}
                                    </button>
                                  </h2>
                                  <div
                                    id={`faqCollapse${index}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                  >
                                    <div className="accordion-body">
                                      {faq.answer}
                                      <div className="mt-2">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-info me-1"
                                          onClick={() => handleEditFaq(index)}
                                        >
                                          <i className="ti ti-edit" /> Edit
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-danger"
                                          onClick={() => handleRemoveFaq(index)}
                                        >
                                          <i className="ti ti-trash" /> Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="alert alert-info">
                              No FAQs added yet.
                            </div>
                          )}
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
                      className="btn btn-primary wizard-next d-flex align-items-center"
                      onClick={saveCarFaqs}
                    >
                      SEO Settings
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </form>
              </fieldset>

              {/* SEO Step */}
              <fieldset style={showStep(7)}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-seo text-secondary me-2" />
                      SEO Settings
                    </h4>
                  </div>
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row row-gap-4">
                      <div className="col-xl-3">
                        <h6 className="mb-1">Car Description</h6>
                        <p>Add a detailed description for SEO</p>
                      </div>
                      <div className="col-xl-9">
                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control"
                            rows="6"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Add a detailed description of the car for better SEO..."
                          ></textarea>
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
                      Save Car
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditCar;
