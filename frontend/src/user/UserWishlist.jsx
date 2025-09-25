import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { Heart } from "react-feather";

const UserWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const getWishList = async () => {
    try {
      const res = await apiService.getWishlist();
      setWishlist(res.data.wishlist ); 
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  const handleWishlist = async (carId) => {
    try {
      const res = await apiService.addWishlist({ carId });
      setWishlist(res.data.wishlist || []); 
    } catch (err) {
      console.error("Error toggling wishlist:", err);
    }
  };

  useEffect(() => {
    getWishList();
  }, []);

  // helper to check if car is in wishlist
  const isInWishlist = (carId) =>
    Array.isArray(wishlist) && wishlist.some((w) => w._id === carId);

  return (
    <div className="content dashboard-content">
      <div className="container">
        <div className="content-header">
          <h4>Wishlist</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="wishlist-wrap">
              {!wishlist.length ? (
                <div className="text-center py-5">
                  <h5>No cars in your wishlist yet.</h5>
                </div>
              ) : (
                wishlist.map((car) => (
                  <div key={car._id} className="listview-car">
                    <div className="card">
                      <div className="blog-widget d-flex">
                        <div className="blog-img">
                           <button
                            onClick={() => handleWishlist(car._id)}
                            className="btn btn-link p-0 border-0"
                          >
                            <Heart
                              size={20}
                              color={isInWishlist(car._id) ? "red" : "gray"}
                              fill={isInWishlist(car._id) ? "red" : "none"}
                            />
                          </button>
                          <Link to={`/listing-details/${car._id}`}>
                            <img
                              src={BASE_URL_IMG + car?.image}
                              className="img-fluid"
                              alt={car.carName}
                            />
                          </Link>
                         
                        </div>
                        <div className="bloglist-content w-100">
                          <div className="card-body">
                            <div className="blog-list-head d-flex">
                              <div className="blog-list-title">
                                <h3>
                                  <Link to={`/listing-details/${car._id}`}>
                                    {car.carName}
                                  </Link>
                                </h3>
                                <h6>
                                  Category :
                                  <span>{car?.carBrand?.brandName}</span>
                                </h6>
                              </div>
                              <div className="blog-list-rate">
                                <h6>
                                  ${car?.pricing?.prices?.daily || 0}{" "}
                                  <span>/ Day</span>
                                </h6>
                              </div>
                            </div>
                            <div className="listing-details-group">
                              <ul>
                                <li>
                                  <p>{car?.carTransmission?.carTransmission}</p>
                                </li>
                                <li>
                                  <p>{car.mileage} KM</p>
                                </li>
                                <li>
                                  <p>{car?.carFuel?.carFuel}</p>
                                </li>
                                <li>
                                  <p>{car.year ? new Date(car.year).getFullYear() : "N/A"}</p>
                                </li>
                                <li>
                                  <p>{car?.carSeats?.carSeats} Persons</p>
                                </li>
                              </ul>
                            </div>
                            <div className="blog-list-head list-head-bottom d-flex">
                              <div className="address-info">
                                <h6>
                                  {car?.mainLocation?.location || "Unknown"}
                                </h6>
                              </div>
                              <div className="listing-button">
                                <Link
                                  to={`/listing-details/${car._id}`}
                                  className="btn btn-order"
                                >
                                  Rent Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishlist;
