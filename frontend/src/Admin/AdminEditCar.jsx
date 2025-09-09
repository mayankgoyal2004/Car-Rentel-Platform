// import React from 'react'
// import { Link } from 'react-router-dom'

// const AdminEditCar = () => {
//   return (
//   <div>
//   <div className="page-wrapper">
//     <div className="content me-4 pb-0">
//       <div className="mb-3">
//         <Link to="all-cars" className="d-inline-flex align-items-center fw-medium"><i className="ti ti-arrow-left me-1" />Back to List</Link>
//       </div>
//       <div className="card mb-0">
//         <div className="card-body">
//           <div className="add-wizard car-steps">
//             <ul className="nav d-flex align-items-center flex-wrap gap-3">
//               <li className="nav-item active">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-info-circle me-1" />Basic</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-flame me-1" />Features</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-files me-1" />Pricing</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-float-center me-1" />Extra Services</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-file-invoice me-1" />Uploads</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-id me-1" />Damages</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-question-mark me-1" />FAQ</a>
//               </li>
//               <li className="nav-item">
//                 <a href="javascript:void(0);" className="nav-link d-flex align-items-center"><i className="ti ti-seo me-1" />SEO</a>
//               </li>
//             </ul>
//             <fieldset id="first-field">
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-info-circle text-secondary me-2" />Basic Info</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-4 pb-4">							
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Featured Image</h6>
//                       <p>Upload Featured Image</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
//                         <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames">
//                           <img src="/admin-assets/img/car/car-02.jpg" className="img-fluid rounded-circle" alt="brands" />
//                           <a href="javascript:void(0);" className="upload-img-trash trash-end btn btn-sm rounded-circle">
//                             <i className="ti ti-trash fs-12" />
//                           </a>
//                         </div>   
//                         <div>
//                           <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
//                             <i className="ti ti-photo me-1" />Change
//                             <input type="file" className="form-control image-sign" multiple />
//                           </div>
//                           <p>Recommended size is 500px x 500px</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>										
//                 </div>	
//                 <div className="border-bottom mb-2 pb-2">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Car Info</h6>
//                       <p>Add Information About Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="mb-3">
//                         <label className="form-label">Name <span className="text-danger">*</span></label>
//                         <input type="text" className="form-control" defaultValue="Acura Sport" />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Permalink</label>
//                         <input type="text" className="form-control" defaultValue="https://www.example.com/cars/" />
//                         <p className="fs-13 fw-medium mt-1">Preview : <a href="javascript:void(0);" className="link-info">https://www.example.com/cars/</a></p>
//                       </div>
//                       <div className="row">
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <label className="form-label">Car Type <span className="text-danger">*</span></label>
//                               <a href="javascript:void(0);" className="link-info mb-2" data-bs-toggle="modal" data-bs-target="#add_type">Add New</a>
//                             </div>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Sedan</option>
//                               <option>Hatchback</option>
//                               <option>SUV</option>
//                               <option>Coupes</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <label className="form-label">Brand <span className="text-danger">*</span></label>
//                               <a href="javascript:void(0);" className="link-info mb-2" data-bs-toggle="modal" data-bs-target="#add_brand">Add New</a>
//                             </div>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Toyota</option>
//                               <option>Audi</option>
//                               <option>Lamborghini</option>
//                               <option>BMW</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <label className="form-label">Model <span className="text-danger">*</span></label>
//                               <a href="javascript:void(0);" className="link-info mb-2" data-bs-toggle="modal" data-bs-target="#add_model">Add New</a>
//                             </div>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Urban Cruiser</option>
//                               <option>Fortuner</option>
//                               <option>V8</option>
//                               <option>Huracan</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Category <span className="text-danger">*</span></label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Car</option>
//                               <option>Bike</option>
//                               <option>Truck</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Plate Number</label>
//                             <input type="text" className="form-control" defaultValue="ABC 1234" />
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">VIN Number</label>
//                             <input type="text" className="form-control" defaultValue="ABC12345" />
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Main Location <span className="text-danger">*</span></label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Johnson Dealer Zone</option>
//                               <option>Miller Auto Trade Zone</option>
//                               <option>Thompson Dealer Parking</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Link Other Location</label>
//                             <select className="limited-multi-select" multiple="multiple">
//                               <option value={1}>Evans Dealer Car Zone</option>
//                               <option value={2} selected>Allen Dealer Parking Lot</option>
//                               <option value={3}>Walker Auto Trade Yard</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Fuel</label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Petrol</option>
//                               <option>Diesel</option>
//                               <option>Electric</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Odometer</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Color <span className="text-danger">*</span></label>
//                             <select className="select2-color">
//                               <option value="red" className="bg-danger" selected>Red</option>
//                               <option value="green" className="bg-success">Green</option>
//                               <option value="blue" className="bg-info">Blue</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Year of Car <span className="text-danger">*</span></label>
//                             <div className="input-icon-end position-relative">
//                               <input type="text" className="form-control yearpicker" defaultValue={2025} />
//                               <span className="input-icon-addon">
//                                 <i className="ti ti-calendar" />
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Transmission</label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>Manual</option>
//                               <option>Automatic</option>
//                               <option>Semi Automatic</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Mileage</label>
//                             <input type="text" className="form-control" defaultValue="45 km" />
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Passengers</label>
//                             <input type="text" className="form-control" defaultValue={04} />
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">No of Seats</label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option selected>2 Seater</option>
//                               <option>4 Seater</option>
//                               <option>5 Seater</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">No of Doors</label>
//                             <select className="select">
//                               <option>Select</option>
//                               <option>2 Doors</option>
//                               <option>3 Doors</option>
//                               <option selected>4 Doors</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">No of Air Bags</label>
//                             <input type="text" className="form-control" defaultValue={02} />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>	
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-light d-flex align-items-center me-2"><i className="ti ti-chevron-left me-1" />Cancel</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center" type="button">Add Features<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset>
//               <form action="#">		
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-flame text-secondary me-2" />Features &amp; Amenities</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>									
//                 <div className="border-bottom mb-2 pb-2 amenity-wrap">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Features &amp; Amenities</h6>
//                       <p>Add Information About Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div className="mb-3">
//                             <div className="form-check mb-0">
//                               <input className="form-check-input select-all" type="checkbox" id="select-all1" />
//                               <label className="form-check-label" htmlFor="amenity">
//                                 Check All
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity" />
//                               <label className="form-check-label" htmlFor="amenity">
//                                 Air Condition
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity1" />
//                               <label className="form-check-label" htmlFor="amenity1">
//                                 Climate Control
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity2" />
//                               <label className="form-check-label" htmlFor="amenity2">
//                                 Climate Control Two Zones
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity3" defaultChecked />
//                               <label className="form-check-label" htmlFor="amenity3">
//                                 Luxury Climate Control 
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity4" />
//                               <label className="form-check-label" htmlFor="amenity4">
//                                 Sunroof
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity5" defaultChecked />
//                               <label className="form-check-label" htmlFor="amenity5">
//                                 Panoramic Sunroof 
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity6" />
//                               <label className="form-check-label" htmlFor="amenity6">
//                                 Moonroof  
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity7" />
//                               <label className="form-check-label" htmlFor="amenity7">
//                                 Push-button Start
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity8" />
//                               <label className="form-check-label" htmlFor="amenity8">
//                                 Keyless Access
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity9" />
//                               <label className="form-check-label" htmlFor="amenity9">
//                                 Rear Parking Sensors
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity10" />
//                               <label className="form-check-label" htmlFor="amenity10">
//                                 Parking Sensors
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity11" />
//                               <label className="form-check-label" htmlFor="amenity11">
//                                 Built-in Sat Nav
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity12" />
//                               <label className="form-check-label" htmlFor="amenity12">
//                                 Mobile Phone Technology
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity13" />
//                               <label className="form-check-label" htmlFor="amenity13">
//                                 Bluetooth
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity14" />
//                               <label className="form-check-label" htmlFor="amenity14">
//                                 Usb
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity15" />
//                               <label className="form-check-label" htmlFor="amenity15">
//                                 Qi Wireless Charging
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity16" />
//                               <label className="form-check-label" htmlFor="amenity16">
//                                 Audio/ipod 
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity17" defaultChecked />
//                               <label className="form-check-label" htmlFor="amenity17">
//                                 Cruise Control
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity18" />
//                               <label className="form-check-label" htmlFor="amenity18">
//                                 Adaptive Cruise Control
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity19" />
//                               <label className="form-check-label" htmlFor="amenity19">
//                                 Apple Carplay
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity20" />
//                               <label className="form-check-label" htmlFor="amenity20">
//                                 Android Auto
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity21" />
//                               <label className="form-check-label" htmlFor="amenity21">
//                                 Forward Collision Warning
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity22" />
//                               <label className="form-check-label" htmlFor="amenity22">
//                                 Lane Departure Warning
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity23" />
//                               <label className="form-check-label" htmlFor="amenity23">
//                                 Automatic Emergency Braking
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity24" />
//                               <label className="form-check-label" htmlFor="amenity24">
//                                 Active Parking Assist
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity25" />
//                               <label className="form-check-label" htmlFor="amenity25">
//                                 Automatic High Beams
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity26" />
//                               <label className="form-check-label" htmlFor="amenity26">
//                                 Adaptive Headlights
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity27" />
//                               <label className="form-check-label" htmlFor="amenity27">
//                                 360-degree Camera
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity29" />
//                               <label className="form-check-label" htmlFor="amenity29">
//                                 Rearview Camera
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity30" />
//                               <label className="form-check-label" htmlFor="amenity30">
//                                 Towing Hook
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity31" />
//                               <label className="form-check-label" htmlFor="amenity31">
//                                 Leather Interior
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="mb-3">
//                             <div className="form-check form-checkbox mb-0">
//                               <input className="form-check-input" type="checkbox" id="amenity32" />
//                               <label className="form-check-label" htmlFor="amenity32">
//                                 Fabric Interior
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Add Tariff &amp; Pricing<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset>
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-files text-secondary me-2" />Pricing &amp; Tariff </h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>										
//                 <div className="border-bottom mb-4 pb-2 unlimited-price">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Pricing</h6>
//                       <p>Add Pricing for Cars</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div className="mb-3">
//                             <label className="form-label">Pricing Type <span className="text-danger">*</span></label>
//                             <div className="d-flex align-items-center flex-wrap gap-3">
//                               <div className="form-check mb-0">
//                                 <input className="form-check-input" type="checkbox" id="price" defaultChecked />
//                                 <label className="form-check-label" htmlFor="price">
//                                   Daily
//                                 </label>
//                               </div>
//                               <div className="form-check mb-0">
//                                 <input className="form-check-input" type="checkbox" id="price1" defaultChecked />
//                                 <label className="form-check-label" htmlFor="price1">
//                                   Weekly
//                                 </label>
//                               </div>
//                               <div className="form-check mb-0">
//                                 <input className="form-check-input" type="checkbox" id="price2" defaultChecked />
//                                 <label className="form-check-label" htmlFor="price2">
//                                   Monthly
//                                 </label>
//                               </div>
//                               <div className="form-check mb-0">
//                                 <input className="form-check-input" type="checkbox" id="price3" defaultChecked />
//                                 <label className="form-check-label" htmlFor="price3">
//                                   Yearly
//                                 </label>
//                               </div>
//                             </div>															
//                           </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Daily Price <span className="text-danger">*</span></label>
//                             <input type="text" className="form-control" defaultValue={200} />
//                           </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Weekly Price <span className="text-danger">*</span></label>
//                             <input type="text" className="form-control" defaultValue={400} />
//                           </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Monthly Price <span className="text-danger">*</span></label>
//                             <input type="text" className="form-control" defaultValue={400} />
//                           </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                           <div className="mb-3">
//                             <label className="form-label">Yearly Price <span className="text-danger">*</span></label>
//                             <input type="text" className="form-control" defaultValue={6000} />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="mb-3">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <label className="form-label">Base Kilometers (Per Day) <span className="text-danger">*</span></label>
//                               <div className="form-check unlimited-checkbox mb-2">
//                                 <input className="form-check-input" type="checkbox" id="unlimited" />
//                                 <label className="form-check-label" htmlFor="unlimited">
//                                   Unlimited
//                                 </label>
//                               </div>
//                             </div>
//                             <input type="text" className="form-control" defaultValue={45} />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="mb-3 unlimited-wrap">
//                             <label className="form-label">Kilometers Extra Price <span className="text-danger">*</span></label>
//                             <input type="text" className="form-control" defaultValue={21} />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-4 pb-2">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Tarrif</h6>
//                       <p>Add Tariff Pricing for Cars</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
//                         <a href="javascript:void(0);" className="btn btn-dark btn-md d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-tarrif"><i className="ti ti-plus me-1" />Add New Tarrif Rate</a>
//                       </div>
//                       <div className="empty-data bg-light text-center mb-3">
//                         <p className="fw-medium">No Data Added</p>
//                       </div>	
//                       <div className="card bg-light mb-3">
//                         <div className="card-body pb-3">
//                           <h6 className="mb-3">Total Tariffs : 21</h6>
//                           <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
//                             <div>
//                               <h6 className="fs-14 fw-semibold mb-1">4 to 5 Days</h6>
//                               <div className="d-flex align-items-center gap-2 flex-wrap">
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$50</span></p>
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">25</span></p>
//                                 <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$200</span></p>
//                               </div>
//                             </div>
//                             <div className="d-flex align-items-center icon-list">
//                               <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-tarrif"><i className="ti ti-edit" /></a>
//                               <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_tarrif"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border p-20 br-5 mb-1">
//                             <div>
//                               <h6 className="fs-14 fw-semibold mb-1">5 to 8 Days</h6>
//                               <div className="d-flex align-items-center gap-2 flex-wrap">
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Price : <span className="text-gray-9">$80</span></p>
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Base Kilometers : <span className="text-gray-9">15</span></p>
//                                 <p className="fs-13 fw-medium mb-0">Kilometers Extra Price : <span className="text-gray-9">$150</span></p>
//                               </div>
//                             </div>
//                             <div className="d-flex align-items-center icon-list">
//                               <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-tarrif"><i className="ti ti-edit" /></a>
//                               <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_tarrif"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-2 pb-2">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Seasonal Pricing</h6>
//                       <p>Add Seasonal Pricing for Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
//                         <a href="javascript:void(0);" className="btn btn-dark btn-md d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#select_price"><i className="ti ti-plus me-1" />Select Seasonal Pricing</a>
//                         <a href="javascript:void(0);" className="text-info" data-bs-toggle="modal" data-bs-target="#add_price">Add New</a>
//                       </div>
//                       <div className="empty-data bg-light text-center mb-3">
//                         <p className="fw-medium">No Data Added</p>
//                       </div>	
//                       <div className="card bg-light mb-3">
//                         <div className="card-body pb-3">
//                           <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
//                             <div>
//                               <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Halloween<span className="badge bg-secondary-transparent ms-2">01 Oct 2025 - 31 Oct 2025 </span></h6>
//                               <div className="d-flex align-items-center gap-2 flex-wrap">
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Rate : <span className="text-gray-9">$200</span></p>
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly Rate : <span className="text-gray-9">$1400</span></p>
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Monthly Rate : <span className="text-gray-9">$4800</span></p>
//                                 <p className="fs-13 fw-medium mb-0 pe-2 mb-0">Late Fee : <span className="text-gray-9">$200</span></p>
//                               </div>
//                             </div>
//                             <div className="d-flex align-items-center icon-list">
//                               <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit_seasonal_price"><i className="ti ti-edit" /></a>
//                               <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_price"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-2 pb-2">								
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Insurance</h6>
//                       <p>Add Insurance for Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
//                         <a href="javascript:void(0);" className="btn btn-dark btn-md d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#select_insurance"><i className="ti ti-plus me-1" />Select New Insurance</a>
//                       </div>
//                       <div className="empty-data bg-light text-center mb-3">
//                         <p className="fw-medium">No Data Added</p>
//                       </div>	
//                       <div className="card bg-light mb-3">
//                         <div className="card-body pb-3">
//                           <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//                             <div>
//                               <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Full Premium Insurance</h6>
//                               <div className="d-flex align-items-center gap-2 flex-wrap">
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$200</span></p>
//                                 <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">04</span></p>
//                               </div>
//                             </div>
//                             <div className="d-flex align-items-center icon-list">
//                               <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit_insurance"><i className="ti ti-edit" /></a>
//                               <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_insurance"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
//                             <div>
//                               <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Roadside Assistance </h6>
//                               <div className="d-flex align-items-center gap-2 flex-wrap">
//                                 <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$250</span></p>
//                                 <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">06</span></p>
//                               </div>
//                             </div>
//                             <div className="d-flex align-items-center icon-list">
//                               <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit_insurance"><i className="ti ti-edit" /></a>
//                               <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_insurance"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Add Extra Services<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset>
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-float-center text-secondary me-2" />Extra Services</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>		
//                 <div className="border-bottom mb-2 pb-1 extra-service">	
//                   <div className="text-end">
//                     <a href="javascript:void(0);" className="link-purple text-decoration-underline fw-medium d-inline-block" data-bs-toggle="modal" data-bs-target="#edit_price">Edit Price</a>			
//                   </div>				
//                   <div className="row">
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-gps" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Navigation</h6>
//                             <p className="fs-13">Using GPS while travel</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-wifi-2" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Wi-Fi Hotspot</h6>
//                             <p className="fs-13">Constant portable internet</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">One time</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" defaultChecked />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-baby-carriage" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Child Safety Seats</h6>
//                             <p className="fs-13">Secure infant/toddler car seat</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-fill flex-wrap gap-3 active">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" defaultChecked />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-baby-carriage" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Fuel Pre-Purchase</h6>
//                             <p className="fs-13">Full tank, return hassle-free</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-user-star" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Roadside Assistance</h6>
//                             <p className="fs-13">24/7 emergency car support</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-satellite" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Satellite Radio</h6>
//                             <p className="fs-13"> Unlimited premium music</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-usb" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">USB Charger</h6>
//                             <p className="fs-13">Fast charging for devices</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" defaultChecked />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-checkup-list" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Express Check-in/out</h6>
//                             <p className="fs-13">Fast pickup &amp; return process</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-tallymark-2" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Toll Pass</h6>
//                             <p className="fs-13">Skip toll booth lines</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-file-pencil" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Insurance</h6>
//                             <p className="fs-13">Full coverage protection</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>											
//                     <div className="col-xxl-4 col-md-6 d-flex">
//                       <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
//                         <div className="d-flex align-items-center">
//                           <input className="form-check-input" type="checkbox" />
//                           <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
//                             <i className="ti ti-camera" />
//                           </span>
//                           <div>
//                             <h6 className="fs-14 fw-semibold mb-1">Dash Cam</h6>
//                             <p className="fs-13">Records trips extra security</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="fs-13 mb-1">Per Day</p>
//                           <h6 className="fs-14 fw-semibold">$10</h6>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Upload Documents<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset>
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-file-invoice text-secondary me-2" />Documents</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>		
//                 <div className="border-bottom mb-4 pb-3">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Car Documents</h6>
//                       <p>Add Important Documents of your Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-xxl-8 col-lg-10">
//                           <h6 className="mb-3">Upload  Document</h6>
//                           <div className="document-upload text-center bg-light br-5 mb-3">
//                             <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
//                             <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
//                             <p className="fs-12 mb-0">Maximum size 50mb</p>
//                             <input type="file" className="form-control image-sign" multiple accept=".pdf, .txt, .doc, .docx" />
//                           </div>
//                           <div className="mb-3">
//                             <p className="fs-13 mb-1">Upload Insurance, Car Registration, Documents</p>
//                             <p className="fs-13">Formats PDF, Word</p>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
//                             <div className="d-flex align-items-center">
//                               <span>
//                                 <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
//                               </span>
//                               <div className="ms-2">
//                                 <h6 className="fs-14 fw-medium">Insurance_car3546</h6>
//                                 <p className="fs-13">24.45 KB</p>
//                               </div>
//                             </div>
//                             <div className="progress-wrap">
//                               <div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
//                                 <div className="progress-bar bg-success" style={{width: '25%'}} />
//                               </div>
//                             </div>
//                             <div className="icon-list">
//                               <a href="javascript:void(0);" className="trash-icon"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
//                             <div className="d-flex align-items-center">
//                               <span>
//                                 <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
//                               </span>
//                               <div className="ms-2">
//                                 <h6 className="fs-14 fw-medium">Reg_car3546</h6>
//                                 <p className="fs-13">20.45 KB</p>
//                               </div>
//                             </div>
//                             <div className="progress-wrap d-none">
//                               <div className="progress" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
//                                 <div className="progress-bar bg-success" style={{width: '25%'}} />
//                               </div>
//                             </div>
//                             <div className="icon-list">
//                               <a href="javascript:void(0);" className="trash-icon"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-4 pb-3">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Policies</h6>
//                       <p>Add policies of your Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-xxl-8 col-lg-10">
//                           <h6 className="mb-3">Upload  Document</h6>
//                           <div className="document-upload text-center bg-light br-5 mb-3">
//                             <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
//                             <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
//                             <p className="fs-12 mb-0">Maximum size 50mb</p>
//                             <input type="file" className="form-control image-sign" multiple accept=".pdf, .txt, .doc, .docx" />
//                           </div>
//                           <div className="mb-3">
//                             <p className="fs-13 mb-1">Upload Car Policy Documents</p>
//                             <p className="fs-13">Formats PDF, Word</p>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
//                             <div className="d-flex align-items-center">
//                               <span>
//                                 <img src="/admin-assets/img/icons/pdf-icon.svg" alt="img" />
//                               </span>
//                               <div className="ms-2">
//                                 <h6 className="fs-14 fw-medium">Insurance_car3546</h6>
//                                 <p className="fs-13">24.45 KB</p>
//                               </div>
//                             </div>
//                             <div className="progress-wrap">
//                               <div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
//                                 <div className="progress-bar bg-success" style={{width: '25%'}} />
//                               </div>
//                             </div>
//                             <div className="icon-list">
//                               <a href="javascript:void(0);" className="trash-icon"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-4 pb-4">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Video</h6>
//                       <p>Add Video About Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-xxl-8 col-lg-10">
//                           <h6 className="mb-3">Upload  Document</h6>
//                           <div className="document-upload text-center bg-light br-5 mb-3">
//                             <img src="/admin-assets/img/icons/upload-icon.svg" alt="img" className="mb-2" />
//                             <p className="mb-2">Drop your files here or <span className="text-info text-decoration-underline">Browse</span></p>
//                             <p className="fs-12 mb-0">Maximum size 50mb</p>
//                             <input type="file" className="form-control image-sign" multiple accept="image/*" />
//                           </div>
//                           <div className="uploaded-images d-flex align-items-center flex-wrap gap-3">
//                             <div className="uploaded-img">
//                               <img src="/admin-assets/img/car/car-02.jpg" alt="img" />
//                               <a href="javscsript:void(0);" className="trash-icon fs-12"><i className="ti ti-trash" /></a>
//                             </div>
//                             <div className="uploaded-img">
//                               <img src="/admin-assets/img/car/car-07.jpg" alt="img" />
//                               <a href="javscsript:void(0);" className="trash-icon fs-12"><i className="ti ti-trash" /></a>
//                             </div>
//                             <div className="uploaded-img">
//                               <img src="/admin-assets/img/car/car-08.jpg" alt="img" />
//                               <a href="javscsript:void(0);" className="trash-icon fs-12"><i className="ti ti-trash" /></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-bottom mb-2 pb-4">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Video</h6>
//                       <p>Add Video About Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="row">
//                         <div className="col-md-4">
//                           <div className="mb-4">
//                             <label className="form-label">Platform <span className="text-danger">*</span></label>
//                             <select className="select">
//                               <option>Youtube</option>
//                               <option>Vimeo</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-8">
//                           <div className="mb-4">
//                             <label className="form-label">Video Link</label>
//                             <input type="text" className="form-control" defaultValue="https://www.youtube.com/cars_add/" />
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <div className="uploaded-video">
//                             <img src="/admin-assets/img/car/car-lg-01.jpg" alt="img" />
//                             <a href="https://www.youtube.com/embed/1trvO6dqQUI" data-fancybox className="play-icon">
//                               <i className="ti ti-player-play-filled" />
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Add Damage<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset>
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-id text-secondary me-2" />Damages</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>	
//                 <div className="border-bottom mb-2 pb-4">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">Damages</h6>
//                       <p>Add Damages On Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <a href="javascript:void(0);" className="btn btn-dark btn-md d-inline-flex align-items-center mb-3" data-bs-toggle="modal" data-bs-target="#add-damage"><i className="ti ti-plus me-1" />Add Damage</a>
//                       <div className="card border-0 bg-light mb-0">
//                         <div className="card-body">
//                           <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
//                             <h6>Total Damages : 04</h6>
//                             <div className="dropdown flag-dropdown">
//                               <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                                 All Damages
//                               </a>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                                     All Damages
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                                     Interior
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                                     Exterior
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="bg-white p-20 br-5 border mb-2">
//                             <div className="row align-items-center row-gap-3">
//                               <div className="col-xxl-8 col-md-7">
//                                 <div className="d-flex align-items-center gap-2 mb-1">
//                                   <h6 className="fs-14 fw-medium">Scratch</h6>
//                                   <span className="badge bg-pink-transparent badge-sm">Interior</span>
//                                 </div>
//                                 <p className="fs-13">Minor surface marks, often from keys, branches, or road debris.</p>
//                               </div>
//                               <div className="col-xxl-4 col-md-5">
//                                 <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
//                                   <p className="mb-0">Added on : 15 Jan 2025</p>
//                                   <div className="icon-list d-flex align-items-center">
//                                     <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-damage"><i className="ti ti-edit" /></a>
//                                     <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_damage"><i className="ti ti-trash" /></a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>															
//                           </div>
//                           <div className="bg-white p-20 br-5 border mb-2">
//                             <div className="row align-items-center row-gap-3">
//                               <div className="col-xxl-8 col-md-7">
//                                 <div className="d-flex align-items-center gap-2 mb-1">
//                                   <h6 className="fs-14 fw-medium">Dent</h6>
//                                   <span className="badge bg-secondary-transparent badge-sm">Exterior</span>
//                                 </div>
//                                 <p className="fs-13">Cracks, scratches, or faded surfaces due to heat exposure.</p>
//                               </div>
//                               <div className="col-xxl-4 col-md-5">
//                                 <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
//                                   <p className="mb-0">Added on : 15 Jan 2025</p>
//                                   <div className="icon-list d-flex align-items-center">
//                                     <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-damage"><i className="ti ti-edit" /></a>
//                                     <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_damage"><i className="ti ti-trash" /></a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>															
//                           </div>
//                           <div className="bg-white p-20 br-5 border mb-2">
//                             <div className="row align-items-center row-gap-3">
//                               <div className="col-xxl-8 col-md-7">
//                                 <div className="d-flex align-items-center gap-2 mb-1">
//                                   <h6 className="fs-14 fw-medium">Crack</h6>
//                                   <span className="badge bg-pink-transparent badge-sm">Interior</span>
//                                 </div>
//                                 <p className="fs-13">Seats, door panels, or carpets with stains, rips, or burns.</p>
//                               </div>
//                               <div className="col-xxl-4 col-md-5">
//                                 <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
//                                   <p className="mb-0">Added on : 15 Jan 2025</p>
//                                   <div className="icon-list d-flex align-items-center">
//                                     <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-damage"><i className="ti ti-edit" /></a>
//                                     <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_damage"><i className="ti ti-trash" /></a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>															
//                           </div>
//                           <div className="bg-white p-20 br-5 border mb-0">
//                             <div className="row align-items-center row-gap-3">
//                               <div className="col-xxl-8 col-md-7">
//                                 <div className="d-flex align-items-center gap-2 mb-1">
//                                   <h6 className="fs-14 fw-medium">Clip</h6>
//                                   <span className="badge bg-pink-transparent badge-sm">Interior</span>
//                                 </div>
//                                 <p className="fs-13">Non-functional windows, AC, or infotainment system damage.</p>
//                               </div>
//                               <div className="col-xxl-4 col-md-5">
//                                 <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
//                                   <p className="mb-0">Added on : 15 Jan 2025</p>
//                                   <div className="icon-list d-flex align-items-center">
//                                     <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit-damage"><i className="ti ti-edit" /></a>
//                                     <a href="javascript:void(0);" className="trash-icon" data-bs-toggle="modal" data-bs-target="#delete_damage"><i className="ti ti-trash" /></a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>															
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Add Faq<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>							
//             <fieldset>
//               <form action="#">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-question-mark text-secondary me-2" />FAQ</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>	
//                 <div className="border-bottom mb-2 pb-4">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">FAQ</h6>
//                       <p>Add FAQ of your Car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <a href="javascript:void(0);" className="btn btn-dark btn-md d-inline-flex align-items-center mb-3" data-bs-toggle="modal" data-bs-target="#add-faq"><i className="ti ti-plus me-1" />Add FAQ</a>
//                       <div className="card border-0 bg-light mb-0">
//                         <div className="card-body">														
//                           <h6 className="mb-3">Total FAQ : 04</h6>
//                           <div className="custom-accordion-icon" id="faqaccordion">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-one" aria-expanded="false" aria-controls="faq-one">
//                                   <span className="faq-icon"><i className="ti ti-grip-vertical" /></span>What are the requirements to rent a car?
//                                 </button>
//                               </h2>
//                               <div id="faq-one" className="accordion-collapse collapse" data-bs-parent="#faqaccordion">
//                                 <div className="accordion-body">
//                                   <p className="fs-13">You must be at least 21 years old, have a valid driver’s license, and a credit card for payment.</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-two" aria-expanded="false" aria-controls="faq-two">
//                                   <span className="faq-icon"><i className="ti ti-grip-vertical" /></span>What are the requirements to rent a car?
//                                 </button>
//                               </h2>
//                               <div id="faq-two" className="accordion-collapse collapse" data-bs-parent="#faqaccordion">
//                                 <div className="accordion-body">
//                                   <p className="fs-13">You must be at least 21 years old, have a valid driver’s license, and a credit card for payment.</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-three" aria-expanded="false" aria-controls="faq-three">
//                                   <span className="faq-icon"><i className="ti ti-grip-vertical" /></span>What are the requirements to rent a car?
//                                 </button>
//                               </h2>
//                               <div id="faq-three" className="accordion-collapse collapse" data-bs-parent="#faqaccordion">
//                                 <div className="accordion-body">
//                                   <p className="fs-13">You must be at least 21 years old, have a valid driver’s license, and a credit card for payment.</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-four" aria-expanded="false" aria-controls="faq-four">
//                                   <span className="faq-icon"><i className="ti ti-grip-vertical" /></span>What are the requirements to rent a car?
//                                 </button>
//                               </h2>
//                               <div id="faq-four" className="accordion-collapse collapse" data-bs-parent="#faqaccordion">
//                                 <div className="accordion-body">
//                                   <p className="fs-13">You must be at least 21 years old, have a valid driver’s license, and a credit card for payment.</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary wizard-next d-flex align-items-center">Add Seo<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>						
//             <fieldset>
//               <form action="all-cars">	
//                 <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
//                   <h4 className="d-flex align-items-center"><i className="ti ti-question-mark text-secondary me-2" />SEO</h4>
//                   <div className="dropdown flag-dropdown">
//                     <a className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" href="javascript:void(0);">
//                       <img src="/admin-assets/img/flags/gb.svg" alt="Language" className="img-fluid me-1" />English
//                     </a>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/gb.svg" alt height={16} className="me-1" />English
//                         </a>
//                       </li>
//                       <li>
//                         <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
//                           <img src="/admin-assets/img/flags/sa.svg" alt height={16} className="me-1" />Arabic
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>	
//                 <div className="border-bottom mb-2 pb-2">	
//                   <div className="row row-gap-4">
//                     <div className="col-xl-3">
//                       <h6 className="mb-1">SEO</h6>
//                       <p>Add SEO Meta of the car</p>
//                     </div>
//                     <div className="col-xl-9">
//                       <div className="mb-3">
//                         <label className="form-label">Meta Title <span className="text-danger">*</span></label>
//                         <input type="text" className="form-control" />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Keywords <span className="text-danger">*</span></label>
//                         <input type="text" className="form-control" />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Description <span className="text-danger">*</span></label>
//                         <textarea className="form-control" rows={3} defaultValue={""} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-end pt-3">
//                   <button type="button" className="btn btn-outline-light border wizard-prev me-2"><i className="ti ti-chevron-left me-1" />Back</button>
//                   <button className="btn btn-primary d-flex align-items-center">Save &amp; Exit<i className="ti ti-chevron-right ms-1" /></button>
//                 </div>
//               </form>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Page Wrapper */}
//   {/* Add New Tarrif */}
//   <div className="modal fade" id="add-tarrif">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Add New Tarrif</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">Tariff Name <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">Daily Price <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">From Days <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">To Days <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <label className="form-label">Base Kilometers (Per Day) <span className="text-danger">*</span></label>
//                     <div className="form-check mb-2">
//                       <input className="form-check-input" type="checkbox" id="unlimited1" />
//                       <label className="form-check-label" htmlFor="unlimited1">
//                         Unlimited
//                       </label>
//                     </div>
//                   </div>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <label className="form-label">Kilometers Extra Price <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Create Tarrif</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Add New Tarrif */}
//   {/* Edit Tarrif */}
//   <div className="modal fade" id="edit-tarrif">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Edit Tarrif</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">Tariff Name <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" defaultValue="4 to 5 days" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">Daily Price <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" defaultValue={50} />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">From Days <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" defaultValue={4} />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label className="form-label">To Days <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" defaultValue={5} />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <label className="form-label">Base Kilometers (Per Day) <span className="text-danger">*</span></label>
//                     <div className="form-check mb-2">
//                       <input className="form-check-input" type="checkbox" id="unlimited2" />
//                       <label className="form-check-label" htmlFor="unlimited2">
//                         Unlimited
//                       </label>
//                     </div>
//                   </div>
//                   <input type="text" className="form-control" defaultValue={100} />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <label className="form-label">Kilometers Extra Price <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" defaultValue={50} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Edit Tarrif */}
//   {/* Delete Tarrif */}
//   <div className="modal fade" id="delete_tarrif">
//     <div className="modal-dialog modal-dialog-centered modal-sm">
//       <div className="modal-content">
//         <div className="modal-body text-center">
//           <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
//             <i className="ti ti-trash-x fs-26" />
//           </span>
//           <h4 className="mb-1">Delete Tarrif</h4>
//           <p className="mb-3">Are you sure you want to delete Tarrif?</p>
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <Link to="edit-car" className="btn btn-primary">Yes, Delete</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Delete Damage */}
//   {/* Add Brand */}
//   <div className="modal fade" id="add_brand">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="mb-0">Create Brand</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <div className="modal-body pb-1">
//           <div className="mb-3">
//             <label className="form-label">Brand Image <span className="text-danger">*</span></label>
//             <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
//               <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
//                 <i className="ti ti-photo-up text-gray-4 fs-24" />
//               </div>                                              
//               <div className="profile-upload">
//                 <div className="profile-uploader d-flex align-items-center">
//                   <div className="drag-upload-btn btn btn-md btn-dark">
//                     <i className="ti ti-photo-up fs-14" />
//                     Upload
//                     <input type="file" className="form-control image-sign" multiple />
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <p className="fs-14">Upload Image size 180*180, within 5MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>                     
//           <div className="mb-3">
//             <label className="form-label">Brand Name <span className="text-danger">*</span></label>
//             <input type="text" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Total Cars <span className="text-danger">*</span></label>
//             <input type="text" className="form-control" />
//           </div>
//         </div>
//         <div className="modal-footer">
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <button type="submit" className="btn btn-primary">Create New</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Add Brand */}
//   {/* Add Type */}
//   <div className="modal fade" id="add_type">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="mb-0">Create Type</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <div className="modal-body pb-1">
//           <div className="mb-3">
//             <label className="form-label">Image <span className="text-danger">*</span></label>
//             <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
//               <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
//                 <i className="ti ti-photo-up text-gray-4 fs-24" />
//               </div>                                              
//               <div className="profile-upload">
//                 <div className="profile-uploader d-flex align-items-center">
//                   <div className="drag-upload-btn btn btn-md btn-dark">
//                     <i className="ti ti-photo-up fs-14" />
//                     Upload
//                     <input type="file" className="form-control image-sign" multiple />
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <p className="fs-14">Upload Image size 180*180, within 5MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>                     
//           <div className="mb-3">
//             <label className="form-label">Name <span className="text-danger">*</span></label>
//             <input type="text" className="form-control" />
//           </div>
//         </div>
//         <div className="modal-footer">
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <button type="submit" className="btn btn-primary">Create New</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Add Type */}
//   {/* Add Model */}
//   <div className="modal fade" id="add_model">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="mb-0">Create Model</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <div className="modal-body pb-1">
//           <div className="mb-3">
//             <label className="form-label">Model <span className="text-danger">*</span></label>
//             <input type="text" className="form-control" />							
//           </div>                  
//           <div className="mb-3">
//             <label className="form-label">Brand <span className="text-danger">*</span></label>
//             <select className="select">
//               <option>Select</option>
//               <option>Toyota</option>
//               <option>Audi</option>
//               <option>Lamborghini</option>
//             </select>
//           </div>                  
//           <div className="mb-3">
//             <label className="form-label">Total Cars <span className="text-danger">*</span></label>
//             <input type="text" className="form-control" />
//           </div>
//         </div>
//         <div className="modal-footer">
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <button type="submit" className="btn btn-primary">Create New</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Add Model */}
//   {/* Create Seasonal Pricing */}
//   <div className="modal fade" id="add_price">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Create Seasonal Pricing</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <label className="form-label">Season Name <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control" />
//                 </div>   
//               </div>
//               <div className="col-md-12">            
//                 <div className="mb-3">
//                   <label className="form-label">Start Date <span className="text-danger">*</span></label>
//                   <div className="input-icon-end position-relative">
//                     <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12">            
//                 <div className="mb-3">
//                   <label className="form-label">End Date <span className="text-danger">*</span></label>
//                   <div className="input-icon-end position-relative">
//                     <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " />
//                 </div>
//               </div>
//             </div>  
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Create New</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Create Seasonal Pricing */}
//   {/* Select Seasonal Pricing */}
//   <div className="modal fade" id="select_price">
//     <div className="modal-dialog modal-dialog-centered modal-lg">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Seasonal Pricing</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Halloween<span className="badge bg-secondary-transparent ms-2">01 Oct 2025 - 31 Oct 2025 </span></h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Rate : <span className="text-gray-9">$200</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly Rate : <span className="text-gray-9">$1400</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Monthly Rate : <span className="text-gray-9">$4800</span></p>
//                   <p className="fs-13 fw-medium mb-0 pe-2 mb-0">Late Fee : <span className="text-gray-9">$200</span></p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Easter<span className="badge bg-secondary-transparent ms-2">01 Apr 2025 - 30 Apr 2025 </span></h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Rate : <span className="text-gray-9">$220</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly Rate : <span className="text-gray-9">$1540</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Monthly Rate : <span className="text-gray-9">$6600</span></p>
//                   <p className="fs-13 fw-medium mb-0 pe-2 mb-0">Late Fee : <span className="text-gray-9">$250</span></p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">New Year<span className="badge bg-secondary-transparent ms-2">01 Jan 2025 - 15 Jan 2025</span></h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Rate : <span className="text-gray-9">$240</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly Rate : <span className="text-gray-9">$1680</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Monthly Rate : <span className="text-gray-9">$6720</span></p>
//                   <p className="fs-13 fw-medium mb-0 pe-2 mb-0">Late Fee : <span className="text-gray-9">$150</span></p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Christmas<span className="badge bg-secondary-transparent ms-2">01 Dec 2024 - 31 Dec 2025</span></h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily Rate : <span className="text-gray-9">$250</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly Rate : <span className="text-gray-9">$1750</span></p>
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Monthly Rate : <span className="text-gray-9">$7000</span></p>
//                   <p className="fs-13 fw-medium mb-0 pe-2 mb-0">Late Fee : <span className="text-gray-9">$300</span></p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Select Seasonal Pricing */}
//   {/* Select Seasonal Pricing */}
//   <div className="modal fade" id="select_insurance">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Insurance</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Full Premium Insurance</h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$200</span></p>
//                   <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">4</span>
//                     <i className="ti ti-info-circle-filled text-gray-5 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="No additional charges for emergency roadside services" />
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div> 
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Roadside Assistance</h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$250</span></p>
//                   <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">6</span>
//                     <i className="ti ti-info-circle-filled text-gray-5 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="No additional charges for emergency roadside services" />
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Liability Insurance</h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$150</span></p>
//                   <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">4</span>
//                     <i className="ti ti-info-circle-filled text-gray-5 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="No additional charges for emergency roadside services" />
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//             <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
//               <div>
//                 <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">Personal Accident Insurance</h6>
//                 <div className="d-flex align-items-center gap-2 flex-wrap">
//                   <p className="fs-13 fw-medium border-end pe-2 mb-0">Price : <span className="text-gray-9">$300</span></p>
//                   <p className="fs-13 fw-medium mb-0">Benefits : <span className="text-gray-9">5</span>
//                     <i className="ti ti-info-circle-filled text-gray-5 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="No additional charges for emergency roadside services" />
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center icon-list delivery-add">
//                 <a href="javascript:void(0);"><i className="ti ti-plus plus-active" /><i className="ti ti-check check-active" /></a>
//               </div>
//             </div>  
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Select Seasonal Pricing */}
//   {/* Edit Insurance */}
//   <div className="modal fade" id="edit_insurance">
//     <div className="modal-dialog modal-dialog-centered">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h4 className="mb-0">Edit Insurance</h4>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body">
//             <div className="mb-3">
//               <label className="form-label">Insurane Name <span className="text-danger"> *</span></label>
//               <input type="text" className="form-control" defaultValue="Full Premium Insurance" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Price Type <span className="text-danger"> *</span></label>
//               <div className="d-flex align-items-center">
//                 <div className="form-check me-3">
//                   <input className="form-check-input" type="radio" name="Radio" id="Radio-sm" defaultChecked />
//                   <label className="form-check-label" htmlFor="Radio-sm">
//                     Daily
//                   </label>
//                 </div>
//                 <div className="form-check me-3">
//                   <input className="form-check-input" type="radio" name="Radio" id="Radio-sm2" />
//                   <label className="form-check-label" htmlFor="Radio-sm2">
//                     Fixed
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input className="form-check-input" type="radio" name="Radio" id="Radio-sm3" />
//                   <label className="form-check-label" htmlFor="Radio-sm3">
//                     Percentage
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Price <span className="text-danger"> *</span></label>
//               <input type="text" className="form-control" defaultValue="$200" />
//             </div>
//             <div className="add-insurance-benifit-2">
//               <div className="mb-1">
//                 <label className="form-label">Benefit <span className="text-danger"> *</span></label>
//                 <input type="text" className="form-control" defaultValue="No additional charges for emergency roadside services." />
//               </div>
//             </div>
//             <a href="javascript:void(0);" className="d-inline-flex align-items-center text-info add-new-benifit-2"><i className="ti ti-plus me-1" />Add New</a>
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>		
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Edit  Insurance */}
//   {/* Edit Seasonal Pricing */}
//   <div className="modal fade" id="edit_seasonal_price">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="mb-3">
//                   <label className="form-label">Season Name <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control" defaultValue="Halloween" />
//                 </div>   
//               </div>
//               <div className="col-md-12">            
//                 <div className="mb-3">
//                   <label className="form-label">Start Date <span className="text-danger">*</span></label>
//                   <div className="input-icon-end position-relative">
//                     <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="28-01-2025" />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12">            
//                 <div className="mb-3">
//                   <label className="form-label">End Date <span className="text-danger">*</span></label>
//                   <div className="input-icon-end position-relative">
//                     <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="02-02-2025" />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Daily Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " defaultValue={50} />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Weekly Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " defaultValue={100} />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Monthly Rate <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " defaultValue={150} />
//                 </div>
//               </div>
//               <div className="col-md-6">            
//                 <div className="mb-3">
//                   <label className="form-label">Late Fees <span className="text-danger">*</span></label>	
//                   <input type="text" className="form-control " defaultValue={200} />
//                 </div>
//               </div>
//             </div>  
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Edit Seasonal Pricing */}
//   {/* Delete Pricing */}
//   <div className="modal fade" id="delete_price">
//     <div className="modal-dialog modal-dialog-centered modal-sm">
//       <div className="modal-content">
//         <div className="modal-body text-center">
//           <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
//             <i className="ti ti-trash-x fs-26" />
//           </span>
//           <h4 className="mb-1">Delete Pricing</h4>
//           <p className="mb-3">Are you sure you want to delete Pricing?</p>
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <Link to="edit-car" className="btn btn-primary">Yes, Delete</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Delete Pricing */}
//   {/* Delete Insurance */}
//   <div className="modal fade" id="delete_insurance">
//     <div className="modal-dialog modal-dialog-centered modal-sm">
//       <div className="modal-content">
//         <div className="modal-body text-center">
//           <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
//             <i className="ti ti-trash-x fs-26" />
//           </span>
//           <h4 className="mb-1">Delete Insurance</h4>
//           <p className="mb-3">Are you sure you want to delete Insurance?</p>
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <Link to="edit-car"  className="btn btn-primary">Yes, Delete</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Delete Insurance */}
//   {/* Edit Pricing */}
//   <div className="modal fade" id="edit_price">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Edit Pricing</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <table className="table custom-table1">
//               <thead className="thead-white">
//                 <tr>
//                   <th className="py-0">Extra Features</th>
//                   <th className="py-0">Pricing</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="fw-medium text-gray-9">Navigation</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={90} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>	
//                 <tr>
//                   <td className="fw-medium text-gray-9">Satellite Radio</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option selected>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={25} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>		
//                 <tr>
//                   <td className="fw-medium text-gray-9">Roadside Assistance</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option selected>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={47} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>		
//                 <tr>
//                   <td className="fw-medium text-gray-9">Express Check-in/out</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option selected>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={75} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>		
//                 <tr>
//                   <td className="fw-medium text-gray-9">Child Safety Seats</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option selected>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={22} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>		
//                 <tr>
//                   <td className="fw-medium text-gray-9">Roadside Assistance</td>
//                   <td>		
//                     <div className="d-flex align-items-center">								
//                       <select className="select">
//                         <option>One Time</option>
//                         <option selected>Per Day</option>
//                       </select>
//                       <div className="input-icon-start position-relative w-100 ms-2">
//                         <span className="input-icon-addon">
//                           <i className="ti ti-currency-dollar" />
//                         </span>
//                         <input type="text" className="form-control" defaultValue={48} />
//                       </div>
//                     </div>	
//                   </td>
//                 </tr>								
//               </tbody>
//             </table>
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Edit Pricing */}
//   {/* Add New Damage */}
//   <div className="modal fade" id="add-damage">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Add New Damage</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="mb-3">
//               <label className="form-label">Damage Location <span className="text-danger">*</span></label>	
//               <select className="select">
//                 <option>Select</option>
//                 <option>Interior</option>
//                 <option>Exterior</option>
//               </select>
//             </div>  
//             <div className="mb-3">
//               <label className="form-label">Damage Type <span className="text-danger">*</span></label>
//               <select className="select">
//                 <option>Select</option>
//                 <option>Scratch</option>
//                 <option>Dent</option>
//                 <option>Crack</option>
//                 <option>Clip</option>
//               </select>
//             </div> 
//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea className="form-control" rows={3} defaultValue={""} />
//             </div> 
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Create New</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Add New Damage */}
//   {/* Edit Damage */}
//   <div className="modal fade" id="edit-damage">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Edit Damage</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="mb-3">
//               <label className="form-label">Damage Location <span className="text-danger">*</span></label>	
//               <select className="select">
//                 <option>Select</option>
//                 <option selected>Interior</option>
//                 <option>Exterior</option>
//               </select>
//             </div>  
//             <div className="mb-3">
//               <label className="form-label">Damage Type <span className="text-danger">*</span></label>
//               <select className="select">
//                 <option>Select</option>
//                 <option selected>Scratch</option>
//                 <option>Dent</option>
//                 <option>Crack</option>
//                 <option>Clip</option>
//               </select>
//             </div> 
//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea className="form-control" rows={3} defaultValue={"Cracks, scratches, or faded surfaces due to heat exposure."} />
//             </div> 
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Create New</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Edit Damage */}
//   {/* Delete Damage */}
//   <div className="modal fade" id="delete_damage">
//     <div className="modal-dialog modal-dialog-centered modal-sm">
//       <div className="modal-content">
//         <div className="modal-body text-center">
//           <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
//             <i className="ti ti-trash-x fs-26" />
//           </span>
//           <h4 className="mb-1">Delete Damage</h4>
//           <p className="mb-3">Are you sure you want to delete Damage?</p>
//           <div className="d-flex justify-content-center">
//             <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//             <Link to="edit-car" className="btn btn-primary">Yes, Delete</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /Delete Damage */}
//   {/* Create FAQ */}
//   <div className="modal fade" id="add-faq">
//     <div className="modal-dialog modal-dialog-centered modal-md">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title mb-0">Create FAQ</h5>
//           <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
//             <i className="ti ti-x fs-16" />
//           </button>
//         </div>
//         <form action="edit-car">
//           <div className="modal-body pb-1">
//             <div className="mb-3">
//               <label className="form-label">Question <span className="text-danger">*</span></label>	
//               <input type="text" className="form-control" />
//             </div>  
//             <div className="mb-3">
//               <label className="form-label">Answer <span className="text-danger">*</span></label>
//               <textarea className="form-control" rows={3} defaultValue={""} />
//             </div> 
//           </div>
//           <div className="modal-footer">
//             <div className="d-flex justify-content-center">
//               <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
//               <button type="submit" className="btn btn-primary">Create New</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   {/* /Create FAQ */}
// </div>

//   )
// }

// export default AdminEditCar
import React from 'react'

const AdminEditCar = () => {
  return (
    <div>AdminEditCar</div>
  )
}

export default AdminEditCar