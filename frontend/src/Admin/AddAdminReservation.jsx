import React, { useEffect, useState } from "react";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";

const AddAdminReservation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cars, setCars] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [locations, setLocations] = useState([]);

  const [reservationData, setReservationData] = useState({
    // Step 1: Car & Dates Info
    tariff: "Weekly",
    rentalType: "Self Pickup",
    passengers: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    pickupLocation: "",
    returnLocation: "",
    securityDeposit: "",
    returnSameLocation: true,
    selectedCar: null,

    // Step 2: Customer Info
    customer: "",
    driver: "",

    // Step 3: Extra Services
    extraServices: [],

    // Step 4: Billing Details
    baseKilometers: "",
    // unlimitedKilometers: false,
    kmExtraPrice: "",
    // insuranceEnabled: false,
    // insuranceType: "",
  });

  const steps = [
    "Car & Dates Info",
    "Customer",
    "Extra Services",
    "Billing Details",
  ];

  const fetchAllActiveCars = async () => {
    try {
      const res = await apiService.getAllAproverCarAdmin();
      if (res.data.success) {
        // Map the API response to match your component's expected structure
        const formattedCars = res.data.data.map((car) => ({
          id: car._id || car.id,
          _id: car?._id,
          carName: car?.carName,
          carType: car?.carType?.carType,
          carColor: car?.carColor?.carColor,
          year: car.year,
          price: car.pricing.prices.daily,
          status: car.status,
          inRental: car.inRent,
          location: car.mainLocation.location,
          image: car.image,
          extraServices:
            car.extraService?.map((es) => ({
              id: es._id || es.id,
              name: es.name,
              price: es.price,
              type: es.type,
              period: es.type === "per_day" ? "Per Day" : "One Time",
              description: es.description || "",
            })) || [],
        }));
        setCars(formattedCars);
      }
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  const fetchAllActiveCustomers = async () => {
    try {
      const res = await apiService.getAllActiveCustomer();
      if (res.data.success) {
        // Map the API response to match your component's expected structure
        const formattedCustomers = res.data.data.map((customer) => ({
          id: customer?._id,
          _id: customer?._id,
          name: customer?.name,
          email: customer?.email,
          phone: customer?.contact,
          bookings: customer?.bookingsCount,
          image: customer?.image,
        }));
        setCustomers(formattedCustomers);
      }
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const fetchAllActiveDriver = async () => {
    try {
      const res = await apiService.getAllActiveDriver();
      if (res.data.success) {
        // Map the API response to match your component's expected structure
        const formattedDrivers = res.data.data.map((driver) => ({
          id: driver._id,
          _id: driver._id,
          name: driver.name,
          phone: driver?.contact,
          price: driver.price || driver.pricePerDay || 0,
          rides: driver.ridesCompleted,
          image: driver.image,
          status: driver.status,
        }));
        setDrivers(formattedDrivers);
      }
    } catch (err) {
      console.error("Error fetching drivers:", err);
    }
  };

  const fetchAllActiveLocation = async () => {
    try {
      const res = await apiService.getAllActiveLocation();
      if (res.data.success) {
        // Map the API response to match your component's expected structure
        const formattedLocations = res.data.data.map((location) => ({
          id: location._id,
          _id: location._id,
          name: location.title,
          address: location.location,
        }));
        setLocations(formattedLocations);
      }
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };

  useEffect(() => {
    fetchAllActiveCars();
    fetchAllActiveCustomers();
    fetchAllActiveDriver();
    fetchAllActiveLocation();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReservationData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
      if (name === "returnSameLocation" && checked) {
        updated.returnLocation = prev.pickupLocation;
      } else if (name === "pickupLocation" && prev.returnSameLocation) {
        updated.returnLocation = value;
      }
      return updated;
    });
  };

  const handleServiceToggle = (serviceId) => {
    setReservationData((prev) => {
      const services = [...prev.extraServices];
      const index = services.indexOf(serviceId);

      if (index > -1) {
        services.splice(index, 1);
      } else {
        services.push(serviceId);
      }

      return { ...prev, extraServices: services };
    });
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

  const handleSubmit = async () => {
    try {
      // Format the data to match your API endpoint expectations
      const formattedData = {
        car_id: reservationData.selectedCar,
        customer_id: reservationData.customer,
        rentalType: reservationData.rentalType,
        pickupLocation: reservationData.pickupLocation,
        pickupAddress:
          locations.find((loc) => loc.id === reservationData.pickupLocation)
            ?.address || "",
        dropLocation: reservationData.returnLocation,
        dropAddress:
          locations.find((loc) => loc.id === reservationData.returnLocation)
            ?.address || "",
        noOfPassengers: parseInt(reservationData.passengers) || 1,
        bookingType: reservationData.tariff,
        pickupTime: reservationData.startTime,
        dropTime: reservationData.endTime,
        pickupDate: reservationData.startDate,
        dropDate: reservationData.endDate,
        driver_id: reservationData.driver,
        driverType: reservationData.driver ? "withDriver" : "self",
        extraService_id: reservationData.extraServices,
        securityDeposit: parseFloat(reservationData.securityDeposit) || 0,
        paymentStatus: "Pending",
        paymentMethod: "Credit Card",
        totalPrice: calculateTotalPrice(),
      };

      const res = await apiService.addCarReservationByAdmin(formattedData);
      if (res.data.success) {
        alert("Reservation created successfully!");
        // Reset form or navigate away
        setReservationData({
          tariff: "Weekly",
          rentalType: "Self Pickup",
          passengers: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
          pickupLocation: "",
          returnLocation: "",
          securityDeposit: "",
          returnSameLocation: true,
          selectedCar: null,
          customer: "",
          driver: "",
          extraServices: [],
          baseKilometers: "",
          // unlimitedKilometers: false,
          kmExtraPrice: "",
          // insuranceEnabled: false,
          // insuranceType: "",
        });
        setCurrentStep(0);
      } else {
        alert(
          "Failed to create reservation: " +
            (res.data.message || "Unknown error")
        );
      }
    } catch (err) {
      console.error("Reservation creation error:", err);
      alert(
        "Error creating reservation: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  const calculateTotalPrice = () => {
    const selectedCar = cars.find(
      (car) => car.id === reservationData.selectedCar
    );
    if (!selectedCar) return 0;

    // Calculate rental duration in days
    const startDate = new Date(reservationData.startDate);
    const endDate = new Date(reservationData.endDate);
    const rentalDays =
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1;

    let total = selectedCar.price * rentalDays;

    // Add driver cost if selected
    if (reservationData.driver) {
      const selectedDriver = drivers.find(
        (driver) => driver.id === reservationData.driver
      );
      if (selectedDriver) {
        total += selectedDriver.price * rentalDays;
      }
    }

    // Add extra services cost
    reservationData.extraServices.forEach((serviceId) => {
      const selectedCar = cars.find(
        (car) => car.id === reservationData.selectedCar
      );
      if (selectedCar) {
        const service = selectedCar.extraServices.find(
          (s) => s.id === serviceId
        );
        if (service) {
          if (service.period === "Per Day") {
            total += service.price * rentalDays;
          } else {
            total += service.price;
          }
        }
      }
    });

    // Add security deposit
    total += parseFloat(reservationData.securityDeposit) || 0;

    // Add insurance cost if enabled
    // if (reservationData.insuranceEnabled) {
    //   total += reservationData.insuranceType === "full" ? 200 : 100;
    // }

    return total;
  };

  const renderStepIndicator = () => {
    return (
      <div className="reservation-wizard mb-4">
        <ul
          className="d-flex align-items-center flex-wrap row-gap-2"
          id="progressbar"
        >
          {steps.map((step, index) => (
            <li
              key={index}
              className={`d-flex align-items-center me-2 ${
                index === currentStep
                  ? "active"
                  : index < currentStep
                  ? "activated"
                  : ""
              }`}
            >
              {index < currentStep ? (
                <span className="active-check me-2">
                  <i className="ti ti-check" />
                </span>
              ) : (
                <span className="me-2 wizard-icon">
                  <i
                    className={`ti ti-${
                      index === 0
                        ? "calendar"
                        : index === 1
                        ? "user-check"
                        : index === 2
                        ? "float-center"
                        : "file-invoice"
                    }`}
                  />
                </span>
              )}
              <h6>{step}</h6>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderStep1 = () => {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              {renderStepIndicator()}

              <div className="card card-bg">
                <div className="card-body">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-info-circle me-2 text-secondary fs-24" />
                    Basic Info
                  </h4>
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <h5 className="mb-1">Date & Time Of Travel</h5>
                  <p>Add Information on Date of Travel</p>
                </div>

                <div className="border-bottom mb-3 pb-3">
                  <div className="row gx-3">
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">Tariff</label>
                        <select
                          className="form-select"
                          name="tariff"
                          value={reservationData.tariff}
                          onChange={handleInputChange}
                        >
                          <option value="weekly">Weekly</option>
                          <option value="daily">daily</option>
                          <option value="monthly">monthly</option>
                          <option value="yearly">yearly</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">Rental Type</label>
                        <select
                          className="form-select"
                          name="rentalType"
                          value={reservationData.rentalType}
                          onChange={handleInputChange}
                        >
                          <option value="selfPickup">Self Pickup</option>
                          <option value="delivery">Delivery</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">No of Passengers</label>
                        <input
                          type="number"
                          className="form-control"
                          name="passengers"
                          value={reservationData.passengers}
                          onChange={handleInputChange}
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gx-3">
                    <div className="col-xl-6">
                      <div className="row gx-3">
                        <div className="col-md-7">
                          <div className="mb-3">
                            <label className="form-label">
                              Start Date <span className="text-danger"> *</span>
                            </label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="date"
                                className="form-control"
                                name="startDate"
                                value={reservationData.startDate}
                                onChange={handleInputChange}
                                required
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <label className="form-label">
                              Time <span className="text-danger"> *</span>
                            </label>
                            <div className="input-icon-end position-relative flex-fill">
                              <input
                                type="time"
                                className="form-control"
                                name="startTime"
                                value={reservationData.startTime}
                                onChange={handleInputChange}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="row gx-3">
                        <div className="col-md-7">
                          <div className="mb-3">
                            <label className="form-label">
                              End Date <span className="text-danger"> *</span>
                            </label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="date"
                                className="form-control"
                                name="endDate"
                                value={reservationData.endDate}
                                onChange={handleInputChange}
                                required
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <label className="form-label">
                              Time <span className="text-danger"> *</span>
                            </label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="time"
                                className="form-control"
                                name="endTime"
                                value={reservationData.endTime}
                                onChange={handleInputChange}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-3">
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">
                          Pickup Location <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          name="pickupLocation"
                          value={reservationData.pickupLocation}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Location</option>
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">
                          Return Location <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          name="returnLocation"
                          value={reservationData.returnLocation}
                          onChange={handleInputChange}
                          required
                          disabled={reservationData.returnSameLocation}
                        >
                          <option value="">Select Location</option>
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label className="form-label">
                          Security Deposit ($)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="securityDeposit"
                          value={reservationData.securityDeposit}
                          onChange={handleInputChange}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  <label className="d-flex align-items-center">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      name="returnSameLocation"
                      checked={reservationData.returnSameLocation}
                      onChange={handleInputChange}
                    />
                    Return to Same Location
                  </label>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <h5 className="mb-1">Select Vehicle</h5>
                      <p>Select Vehicle for your rental</p>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                      <div className="top-search me-2">
                        <div className="top-search-group">
                          <span className="input-icon">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search cars..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="car-select">
                  {cars.filter((car) => car?.status === true).length === 0 ? (
                    <div className="alert alert-info">
                      No available cars found. Please try again later.
                    </div>
                  ) : (
                    cars
                      .filter((car) => car?.status === true)
                      .map((car) => (
                        <div
                          key={car.id}
                          className={`card ${
                            reservationData.selectedCar === car.id
                              ? "border-primary"
                              : ""
                          }`}
                          onClick={() =>
                            setReservationData({
                              ...reservationData,
                              selectedCar: car.id,
                            })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card-body">
                            <div className="row gy-3">
                              <div className="col-lg-4">
                                <div className="d-flex align-items-center">
                                  <div className="form-check form-check-md me-3">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="selectedCar"
                                      checked={
                                        reservationData.selectedCar === car.id
                                      }
                                      onChange={() =>
                                        setReservationData({
                                          ...reservationData,
                                          selectedCar: car.id,
                                        })
                                      }
                                    />
                                  </div>
                                  <span className="avatar flex-shrink-0 me-2">
                                    <img
                                      src={
                                        car.image
                                          ? `${BASE_URL_IMG}${car.image}`
                                          : "/default-car.jpg"
                                      }
                                      alt={car.carName}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </span>
                                  <div>
                                    <p className="mb-0">{car?.carType}</p>
                                    <h6 className="fs-14">{car?.carName}</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="row gy-3">
                                  <div className="col-md-4">
                                    <div>
                                      <p className="mb-1">Color</p>
                                      <h6 className="fs-14 d-inline-flex align-items-center">
                                        <i className="ti ti-square-filled me-1" />
                                        {car.carColor}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <p className="mb-1">Year</p>
                                      <h6 className="fs-14">
                                        {new Date(
                                          car.year
                                        ).toLocaleDateString()}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <p className="mb-1">Price</p>
                                      <h6 className="fs-14">
                                        ${car.price}
                                        <span className="text-gray-5">
                                          /day
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="float-md-end">
                                  {car.inRental && (
                                    <span className="badge bg-danger-transparent d-inline-flex align-items-center badge-sm mb-1">
                                      <i className="ti ti-point-filled me-1" />
                                      In Rent
                                    </span>
                                  )}
                                  <h6 className="fs-14">{car.location}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>

              <div className="card-footer px-0 pb-0">
                <div className="d-flex align-items-center justify-content-end flex-wrap row-gap-3">
                  <div className="field-btns">
                    <button className="btn btn-light me-2" type="button">
                      <i className="ti ti-chevron-left me-1" />
                      Cancel
                    </button>
                  </div>
                  <div className="field-btns">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={nextStep}
                      disabled={
                        !reservationData.selectedCar ||
                        !reservationData.startDate ||
                        !reservationData.endDate
                      }
                    >
                      Add Customer
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <SummarySidebar
            reservationData={reservationData}
            cars={cars}
            customers={customers}
            drivers={drivers}
            locations={locations}
          />
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              {renderStepIndicator()}

              <div className="card card-bg">
                <div className="card-body">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-user-check me-2 text-secondary fs-24" />
                    Customer
                  </h4>
                </div>
              </div>

              <div className="border-bottom mb-3">
                <div className="mb-3">
                  <h6 className="mb-1">Select Customer</h6>
                  <p>Add Information of Customer</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Customer <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <select
                        className="form-select"
                        name="customer"
                        value={reservationData.customer}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Customer</option>
                        {customers.map((customer) => (
                          <option key={customer.id} value={customer.id}>
                            {customer.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {reservationData.customer && (
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="row align-items-center gy-3">
                        <div className="col-md-11">
                          <div className="row gx-2 gy-3">
                            <div className="col-md-4">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                  <img
                                    src={
                                      customers.find(
                                        (c) => c.id === reservationData.customer
                                      )?.image || "/default-user.jpg"
                                    }
                                    alt="Customer"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    {
                                      customers.find(
                                        (c) => c.id === reservationData.customer
                                      )?.name
                                    }
                                  </h6>
                                  <span className="badge bg-info-transparent">
                                    {
                                      customers.find(
                                        (c) => c.id === reservationData.customer
                                      )?.bookings
                                    }{" "}
                                    Bookings
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div>
                                <h6 className="fs-14 mb-1">Phone</h6>
                                <p>
                                  {
                                    customers.find(
                                      (c) => c.id === reservationData.customer
                                    )?.phone
                                  }
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div>
                                <h6 className="fs-14 mb-1">Email</h6>
                                <p>
                                  {
                                    customers.find(
                                      (c) => c.id === reservationData.customer
                                    )?.email
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="mb-3">
                  <h6 className="mb-1">Select Driver (Optional)</h6>
                  <p>Add Information of Driver</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Driver</label>
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <select
                        className="form-select"
                        name="driver"
                        value={reservationData.driver}
                        onChange={handleInputChange}
                      >
                        <option value="">No Driver</option>
                        {drivers
                          .filter((d) => d.status === "available")
                          .map((driver) => (
                            <option key={driver.id} value={driver.id}>
                              {driver.name} - ${driver.price}/day
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {reservationData.driver && (
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="row align-items-center gy-3">
                        <div className="col-md-11">
                          <div className="row gx-2 gy-3">
                            <div className="col-md-5">
                              <div className="d-flex align-items-center">
                                <div className="form-check form-check-md me-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked
                                    readOnly
                                  />
                                </div>
                                <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                  <img
                                    src={
                                      drivers.find(
                                        (d) => d.id === reservationData.driver
                                      )?.image
                                    }
                                    alt="Driver"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    {
                                      drivers.find(
                                        (d) => d.id === reservationData.driver
                                      )?.name
                                    }
                                  </h6>
                                  <span className="badge bg-violet-transparent">
                                    {
                                      drivers.find(
                                        (d) => d.id === reservationData.driver
                                      )?.rides
                                    }{" "}
                                    Rides
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div>
                                <h6 className="fs-14 mb-1">Phone</h6>
                                <p>
                                  {
                                    drivers.find(
                                      (d) => d.id === reservationData.driver
                                    )?.phone
                                  }
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h6 className="fs-14 mb-1">Price</h6>
                                <p>
                                  $
                                  {
                                    drivers.find(
                                      (d) => d.id === reservationData.driver
                                    )?.price
                                  }
                                  /day
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="card-footer px-0 pb-0">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="field-btns">
                    <button
                      className="btn btn-light me-2"
                      type="button"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                  </div>
                  <div className="field-btns">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={nextStep}
                      disabled={!reservationData.customer}
                    >
                      Add Extra Services
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <SummarySidebar
            reservationData={reservationData}
            cars={cars}
            customers={customers}
            drivers={drivers}
            locations={locations}
          />
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    // Get the selected car
    const selectedCar = cars.find(
      (car) => car.id === reservationData.selectedCar
    );
    
    // Get the extra services for the selected car
    const carExtraServices = selectedCar ? selectedCar.extraServices : [];

    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              {renderStepIndicator()}

              <div className="card card-bg">
                <div className="card-body">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-float-center me-2 text-secondary fs-24" />
                    Extra Service
                  </h4>
                </div>
              </div>

              <div className="border-bottom mb-3">
                <div className="mb-3">
                  <h6 className="mb-1">Select Extra Services</h6>
                  <p>Add extra services for your rental</p>
                </div>
              </div>

              <div className="row">
                {carExtraServices.length === 0 ? (
                  <div className="col-12">
                    <div className="alert alert-info">
                      No extra services available for this car.
                    </div>
                  </div>
                ) : (
                  carExtraServices.map((service) => (
                    <div key={service.id} className="col-md-6 mb-3">
                      <div
                        className={`custom-checkbox ${
                          reservationData.extraServices.includes(service.id)
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`custom-check-${service.id}`}
                            checked={reservationData.extraServices.includes(
                              service.id
                            )}
                            onChange={() => handleServiceToggle(service.id)}
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <label
                            className="form-check-label ms-2 ps-4"
                            htmlFor={`custom-check-${service.id}`}
                          >
                            <span className="fw-semibold text-gray-9 d-block mb-1">
                              {service.name}
                            </span>
                            <span className="d-block">
                              {service.description}
                            </span>
                          </label>
                          <div className="text-end">
                            <p className="mb-1">{service.period}</p>
                            <h6>${service.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="card-footer px-0 pb-0">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="field-btns">
                    <button
                      className="btn btn-light me-2"
                      type="button"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                  </div>
                  <div className="field-btns">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={nextStep}
                    >
                      Proceed to Billing
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <SummarySidebar
            reservationData={reservationData}
            cars={cars}
            customers={customers}
            drivers={drivers}
            locations={locations}
          />
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              {renderStepIndicator()}

              <div className="card card-bg">
                <div className="card-body">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-file-invoice me-2 text-secondary fs-24" />
                    Billing Details
                  </h4>
                </div>
              </div>

              <div className="border-bottom mb-3">
                <div className="mb-3">
                  <h6 className="mb-1">Rent & Service Billing</h6>
                  <p>Add extra services for your rental</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">
                          Base Kilometers (Per Day)
                        </label>
                        {/* <label className="d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                            name="unlimitedKilometers"
                            checked={reservationData.unlimitedKilometers}
                            onChange={handleInputChange}
                          />
                          Unlimited
                        </label> */}
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        name="baseKilometers"
                        value={reservationData.baseKilometers}
                        onChange={handleInputChange}
                        // disabled={reservationData.unlimitedKilometers}
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Kilometers Extra Price ($ per km)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="kmExtraPrice"
                        value={reservationData.kmExtraPrice}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <h6 className="mb-1">Insurance</h6>
                    <p>Add Insurance for Your Ride</p>
                  </div>
                  <div className="form-check form-check-md form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                      name="insuranceEnabled"
                      checked={reservationData.insuranceEnabled}
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label mt-0"
                      htmlFor="switch-sm"
                    >
                      Enable
                    </label>
                  </div>
                </div>
{/* 
                {reservationData.insuranceEnabled && (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom-checkbox active">
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="insuranceType"
                            id="custom-check-11"
                            value="full"
                            checked={reservationData.insuranceType === "full"}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <label
                            className="form-check-label ms-2 ps-4"
                            htmlFor="custom-check-11"
                          >
                            <span className="fw-semibold text-gray-9 d-block mb-1">
                              Full Premium Insurance
                            </span>
                            <span className="d-block text-info">
                              +4 Benefits
                              <i className="ti ti-info-circle-filled text-gray-5 ms-1" />
                            </span>
                          </label>
                          <div className="text-end">
                            <p className="mb-1">One Time</p>
                            <h6>$200</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="custom-checkbox">
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="insuranceType"
                            id="custom-check-12"
                            value="basic"
                            checked={reservationData.insuranceType === "basic"}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <label
                            className="form-check-label ms-2 ps-4"
                            htmlFor="custom-check-12"
                          >
                            <span className="fw-semibold text-gray-9 d-block mb-1">
                              Basic Insurance
                            </span>
                            <span className="d-block text-info">
                              +2 Benefits
                              <i className="ti ti-info-circle-filled text-gray-5 ms-1" />
                            </span>
                          </label>
                          <div className="text-end">
                            <p className="mb-1">One Time</p>
                            <h6>$100</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>

              <div className="card-footer px-0 pb-0">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="field-btns">
                    <button
                      className="btn btn-light me-2"
                      type="button"
                      onClick={prevStep}
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back
                    </button>
                  </div>
                  <div className="field-btns">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Finish & Save
                      <i className="ti ti-chevron-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <SummarySidebar
            reservationData={reservationData}
            cars={cars}
            customers={customers}
            drivers={drivers}
            locations={locations}
          />
        </div>
      </div>
    );
  };

  const SummarySidebar = ({
    reservationData,
    cars,
    customers,
    drivers,
    locations,
  }) => {
    const selectedCar = cars.find(
      (car) => car.id === reservationData.selectedCar
    );
    const selectedCustomer = customers.find(
      (customer) => customer.id === reservationData.customer
    );
    const selectedDriver = drivers.find(
      (driver) => driver.id === reservationData.driver
    );
    const pickupLocation = locations.find(
      (loc) => loc.id === reservationData.pickupLocation
    );
    const returnLocation = locations.find(
      (loc) => loc.id === reservationData.returnLocation
    );

    // Calculate rental duration in days
    const startDate = new Date(reservationData.startDate);
    const endDate = new Date(reservationData.endDate);
    const rentalDays =
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1;

    // Calculate total price
    const carPrice = selectedCar ? selectedCar.price * rentalDays : 0;
    const driverPrice = selectedDriver ? selectedDriver.price * rentalDays : 0;
    
    // Calculate services price from selected car's extra services
    const servicesPrice = reservationData.extraServices.reduce(
      (total, serviceId) => {
        if (selectedCar) {
          const service = selectedCar.extraServices.find(
            (s) => s.id === serviceId
          );
          if (service) {
            if (service.period === "Per Day") {
              return total + service.price * rentalDays;
            } else {
              return total + service.price;
            }
          }
        }
        return total;
      },
      0
    );
    
    const securityDeposit = parseFloat(reservationData.securityDeposit) || 0;
    // const insurancePrice = reservationData.insuranceEnabled
    //   ? reservationData.insuranceType === "full"
    //     ? 200
    //     : 100
    //   : 0;

    const totalPrice =
      carPrice + driverPrice + servicesPrice + securityDeposit ;

    return (
      <>
        <div className="card">
          <div className="card-header bg-gray-900 rounded-top-3">
            <h5 className="text-white">Summary</h5>
          </div>
          <div className="card-body">
            {selectedCar && (
              <div className="border rounded p-3 bg-light mb-3">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center">
                      <span className="avatar flex-shrink-0 me-2">
                        <img
                          src={BASE_URL_IMG + selectedCar.image}
                          alt={selectedCar.carName}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                      </span>
                      <div>
                        <p className="mb-0">{selectedCar.carType}</p>
                        <h6 className="fs-14">{selectedCar.carName}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <p className="mb-0">Price</p>
                      <h6 className="fs-14">
                        ${selectedCar.price}
                        <span className="text-gray-5">/day</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Start Date</h6>
              <p>
                {reservationData.startDate
                  ? new Date(reservationData.startDate).toLocaleDateString()
                  : "Not set"}
                , {reservationData.startTime || ""}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">End Date</h6>
              <p>
                {reservationData.endDate
                  ? new Date(reservationData.endDate).toLocaleDateString()
                  : "Not set"}
                , {reservationData.endTime || ""}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Rental Period</h6>
              <p>{rentalDays} Days</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Rental Type</h6>
              <p>{reservationData.rentalType}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Pickup Location</h6>
              <p>{pickupLocation ? pickupLocation.name : "Not set"}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Return Location</h6>
              <p>{returnLocation ? returnLocation.name : "Not set"}</p>
            </div>

            {selectedCustomer && (
              <div className="border-top pt-3 mt-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-medium fs-14">Customer</h6>
                  <p>{selectedCustomer.name}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-medium fs-14">Phone</h6>
                  <p>{selectedCustomer.phone}</p>
                </div>
              </div>
            )}

            {selectedDriver && (
              <div className="border-top pt-3 mt-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-medium fs-14">Driver</h6>
                  <p>{selectedDriver.name}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-medium fs-14">Driver Price</h6>
                  <p>${driverPrice}</p>
                </div>
              </div>
            )}

            {reservationData.extraServices.length > 0 && selectedCar && (
              <div className="border-top pt-3 mt-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-medium fs-14">Extra Services</h6>
                  <p>${servicesPrice}</p>
                </div>
                <div className="mt-2">
                  {reservationData.extraServices.map((serviceId) => {
                    const service = selectedCar.extraServices.find(
                      (s) => s.id === serviceId
                    );
                    return service ? (
                      <div
                        key={service.id}
                        className="d-flex align-items-center justify-content-between mb-1"
                      >
                        <span className="text-muted small">{service.name}</span>
                        <span className="small">
                          ${service.price}
                          {service.period === "Per Day" ? "/day" : ""}
                        </span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {securityDeposit > 0 && (
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6 className="fw-medium fs-14">Security Deposit</h6>
                <p>${securityDeposit}</p>
              </div>
            )}

            {insurancePrice > 0 && (
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6 className="fw-medium fs-14">Insurance</h6>
                <p>${insurancePrice}</p>
              </div>
            )}

            <div className="border-top pt-3 mt-3">
              <div className="d-flex align-items-center justify-content-between">
                <h5>Total Price</h5>
                <h5 className="text-primary">${totalPrice}</h5>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-danger w-100 mb-4"
          onClick={() => setCurrentStep(0)}
        >
          <i className="ti ti-x me-1" />
          Cancel Booking
        </button>
      </>
    );
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4 pb-0">
        <div className="mb-3">
          <a
            href="#reservations"
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-narrow-left me-2" />
            Reservation
          </a>
        </div>

        <div className="wizard-form">
          {currentStep === 0 && renderStep1()}
          {currentStep === 1 && renderStep2()}
          {currentStep === 2 && renderStep3()}
          {currentStep === 3 && renderStep4()}
        </div>
      </div>
    </div>
  );
};

export default AddAdminReservation;