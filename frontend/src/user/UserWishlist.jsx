import React from 'react'
import { Link } from 'react-router-dom'

const UserWishlist = () => {
  return (
    <div className="content dashboard-content">
  <div className="container">
    {/* Content Header */}
    <div className="content-header">
      <h4>Wishlist</h4>
    </div>
    {/* /Content Header */}	
    <div className="row">
      {/* Wishlist */}
      <div className="col-md-12">
        <div className="wishlist-wrap">
          <div className="listview-car">
            <div className="card">
              <div className="blog-widget d-flex">
                <div className="blog-img">
                  <Link to="/listing-details">
                    <img src="/user-assets/img/car-list-2.jpg" className="img-fluid" alt="blog-img" />
                  </Link>		
                  <a href="javascript:void(0)" className="fav-icon selected" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Remove From Wishlist">
                    <i className="feather-heart" />
                  </a>													    
                </div>
                <div className="bloglist-content w-100">
                  <div className="card-body">
                    <div className="blog-list-head d-flex">
                      <div className="blog-list-title">
                        <h3><Link to="/listing-details">BMW 640 XI Gran Turismo</Link></h3>
                        <h6>Category : <span>BMW</span></h6>		
                      </div>
                      <div className="blog-list-rate">
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h6>$60 <span>/ Day</span></h6>
                      </div>
                    </div>	
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Auto" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>4600 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Normal</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2021</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>6 Persons</p>
                        </li>
                      </ul>	
                    </div>	
                    <div className="blog-list-head list-head-bottom d-flex">
                      <div className="blog-list-title">
                        <div className="title-bottom">
                          <div className="address-info">
                            <h6><i className="feather-map-pin me-2" />Pattaya, Thailand</h6>
                          </div>
                        </div>	
                      </div>
                      <div className="listing-button">
                        <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                      </div>
                    </div>	
                  </div>					 
                </div>			 
              </div> 
            </div>
          </div>
          <div className="listview-car">
            <div className="card">
              <div className="blog-widget d-flex">
                <div className="blog-img">
                  <Link to="/listing-details">
                    <img src="/user-assets/img/car-list-1.jpg" className="img-fluid" alt="blog-img" />
                  </Link>		
                  <a href="javascript:void(0)" className="fav-icon selected" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Remove From Wishlist">
                    <i className="feather-heart" />
                  </a>										    
                </div>
                <div className="bloglist-content w-100">
                  <div className="card-body">
                    <div className="blog-list-head d-flex">
                      <div className="blog-list-title">
                        <h3><Link to="/listing-details">Ferrari 458 MM Speciale</Link></h3>
                        <h6>Category : <span>Ferrarai</span></h6>		
                      </div>
                      <div className="blog-list-rate">
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h6>$100 <span>/ Day</span></h6>
                      </div>
                    </div>	
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Auto" /></span>
                          <p>Auto</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>10 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2018</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>5 Persons</p>
                        </li>
                      </ul>	
                    </div>	
                    <div className="blog-list-head list-head-bottom d-flex">
                      <div className="blog-list-title">
                        <div className="title-bottom">
                          <div className="address-info">
                            <h6><i className="feather-map-pin me-2" />Newyork, USA</h6>
                          </div>
                        </div>	
                      </div>
                      <div className="listing-button">
                        <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                      </div>
                    </div>	
                  </div>					 
                </div>			 
              </div> 
            </div>
          </div>
          <div className="listview-car">
            <div className="card">
              <div className="blog-widget d-flex">
                <div className="blog-img">
                  <Link to="/listing-details">
                    <img src="/user-assets/img/car-list-3.jpg" className="img-fluid" alt="blog-img" />
                  </Link>		
                  <a href="javascript:void(0)" className="fav-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Add to Wishlist">
                    <i className="feather-heart" />
                  </a>													    
                </div>
                <div className="bloglist-content w-100">
                  <div className="card-body">
                    <div className="blog-list-head d-flex">
                      <div className="blog-list-title">
                        <h3><Link to="/listing-details">Ford Mustang, Blue 2014</Link></h3>
                        <h6>Category : <span>Ford</span></h6>		
                      </div>
                      <div className="blog-list-rate">
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h6>$400 <span>/ Day</span></h6>
                      </div>
                    </div>	
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Auto" /></span>
                          <p>Auto</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>2500 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2019</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>4 Persons</p>
                        </li>
                      </ul>	
                    </div>	
                    <div className="blog-list-head list-head-bottom d-flex">
                      <div className="blog-list-title">
                        <div className="title-bottom">
                          <div className="address-info">
                            <h6><i className="feather-map-pin me-2" />Lasvegas, USA</h6>
                          </div>
                        </div>	
                      </div>
                      <div className="listing-button">
                        <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                      </div>
                    </div>	
                  </div>					 
                </div>			 
              </div> 
            </div>
          </div>
          <div className="listview-car">
            <div className="card">
              <div className="blog-widget d-flex">
                <div className="blog-img">
                  <Link to="/listing-details">
                    <img src="/user-assets/img/car-list-5.jpg" className="img-fluid" alt="blog-img" />
                  </Link>		
                  <a href="javascript:void(0)" className="fav-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Add to Wishlist">
                    <i className="feather-heart" />
                  </a>													    
                </div>
                <div className="bloglist-content w-100">
                  <div className="card-body">
                    <div className="blog-list-head d-flex">
                      <div className="blog-list-title">
                        <h3><Link to="/listing-details">Audi A3 2019 new</Link></h3>
                        <h6>Category : <span>Audi</span></h6>		
                      </div>
                      <div className="blog-list-rate">
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h6>$45 <span>/ Day</span></h6>
                      </div>
                    </div>	
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Auto" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>1700 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Petrol</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2019</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>4 Persons</p>
                        </li>
                      </ul>	
                    </div>	
                    <div className="blog-list-head list-head-bottom d-flex">
                      <div className="blog-list-title">
                        <div className="title-bottom">
                          <div className="address-info">
                            <h6><i className="feather-map-pin me-2" />Newyork, USA</h6>
                          </div>
                        </div>	
                      </div>
                      <div className="listing-button">
                        <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                      </div>
                    </div>	
                  </div>					 
                </div>			 
              </div> 
            </div>
          </div>
          <div className="listview-car">
            <div className="card">
              <div className="blog-widget d-flex">
                <div className="blog-img">
                  <Link to="/listing-details">
                    <img src="/user-assets/img/car-list-4.jpg" className="img-fluid" alt="blog-img" />
                  </Link>	
                  <a href="javascript:void(0)" className="fav-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Add to Wishlist">
                    <i className="feather-heart" />
                  </a>													    
                </div>
                <div className="bloglist-content w-100">
                  <div className="card-body">
                    <div className="blog-list-head d-flex">
                      <div className="blog-list-title">
                        <h3><Link to="/listing-details">2018 Chevrolet Camaro</Link></h3>
                        <h6>Category : <span>Chevrolet</span></h6>		
                      </div>
                      <div className="blog-list-rate">
                        <div className="list-rating">							
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h6>$36 <span>/ Day</span></h6>
                      </div>
                    </div>	
                    <div className="listing-details-group">
                      <ul>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt="Auto" /></span>
                          <p>Manual</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-02.svg" alt="10 KM" /></span>
                          <p>1200 KM</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-03.svg" alt="Petrol" /></span>
                          <p>Diesel</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-04.svg" alt="Power" /></span>
                          <p>Power</p>
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-05.svg" alt={2018} /></span>
                          <p>2018</p>	
                        </li>
                        <li>
                          <span><img src="/user-assets/img/icons/car-parts-06.svg" alt="Persons" /></span>
                          <p>4 Persons</p>
                        </li>
                      </ul>	
                    </div>	
                    <div className="blog-list-head list-head-bottom d-flex">
                      <div className="blog-list-title">
                        <div className="title-bottom">
                          <div className="address-info">
                            <h6><i className="feather-map-pin me-2" />Lasvegas, USA</h6>
                          </div>
                        </div>	
                      </div>
                      <div className="listing-button">
                        <Link to="/listing-details" className="btn btn-order"><span><i className="feather-calendar me-2" /></span>Rent Now</Link>
                      </div>
                    </div>	
                  </div>					 
                </div>			 
              </div> 
            </div>
          </div>
        </div>
        {/* /Wishlist */}
      </div>
    </div>										
  </div>			
</div>

  )
}

export default UserWishlist