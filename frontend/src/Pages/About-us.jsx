import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  
const testimonials = [
    {
      id: 1,
      name: "Rabien Ustoc",
      rating: 5,
      avatar: "/user-assets/img/profiles/avatar-02.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      name: "Valerie L. Ellis",
      rating: 5,
      avatar: "/user-assets/img/profiles/avatar-03.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      name: "Laverne Marier",
      rating: 5,
      avatar: "/user-assets/img/profiles/avatar-04.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      name: "Sydney Salmons",
      rating: 5,
      avatar: "/user-assets/img/profiles/avatar-06.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 5,
      name: "Lucas Moquin",
      rating: 5,
      avatar: "/user-assets/img/profiles/avatar-07.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i < rating ? 'filled' : ''}`}
        />
      );
    }
    return stars;
  };
  

  
  return (
   <div>
  <div className="main-wrapper">
   
    {/* Breadscrumb Section */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">About us</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li className="breadcrumb-item"><a >Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>							
          </div>             
        </div>              
      </div>
    </div>
    {/* /Breadscrumb Section */}	
    {/* About */}
    <section className="section about-sec">				
      <div className="container">				
        <div className="row align-items-center">				
          <div className="col-lg-6" >
            <div className="about-img">
              <div className="about-exp">
                <span>12+ years of experiences</span>
              </div>
              <div className="abt-img">
                <img src="/user-assets/img/about-us.png" className="img-fluid" alt="About us" />
              </div>
            </div>
          </div>					
          <div className="col-lg-6"  >
            <div className="about-content">
              <h6>ABOUT OUR COMPANY</h6>
              <h2>Best Solution For Cleaning Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>At vero et accusamus iusto dignissimos</li>
                    <li>At vero et accusamus iusto dignissimos</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Nam libero tempore, cum soluta nobis</li>
                    <li>Nam libero tempore, cum soluta nobis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>					
        </div>
      </div>
    </section>
    {/* /About */}
    {/* services */}
    <section className="section services bg-light-primary">
      <div className="service-right">
        <img src="/user-assets/img/bg/service-right.svg" className="img-fluid" alt="services right" />
      </div>		
      <div className="container">	
        {/* Heading title*/}
        <div className="section-heading"  >
          <h2>How It Works</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {/* /Heading title */}
        <div className="services-work">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12"  >
              <div className="services-group">
                <div className="services-icon border-secondary">
                  <img className="icon-img bg-secondary" src="/user-assets/img/icons/services-icon-01.svg" alt="Choose Locations" />
                </div>
                <div className="services-content">
                  <h3>1. Choose Locations</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12"  >
              <div className="services-group">
                <div className="services-icon border-warning">
                  <img className="icon-img bg-warning" src="/user-assets/img/icons/services-icon-02.svg" alt="Choose Locations" />
                </div>
                <div className="services-content">
                  <h3>2. Pick-Up Locations</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12"  >
              <div className="services-group">
                <div className="services-icon border-dark">
                  <img className="icon-img bg-dark" src="/user-assets/img/icons/services-icon-03.svg" alt="Choose Locations" />
                </div>
                <div className="services-content">
                  <h3>3. Book your Car</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /services */}
    {/* Facts By The Numbers */}
    <section className="section facts-number">
      <div className="facts-left">
        <img src="/user-assets/img/bg/facts-left.png" className="img-fluid" alt="facts left" />
      </div>
      <div className="facts-right">
        <img src="/user-assets/img/bg/facts-right.png" className="img-fluid" alt="facts right" />
      </div>
      <div className="container">
        {/* Heading title*/}
        <div className="section-heading"  >
          <h2 className="title text-white">Facts By The Numbers</h2>
          <p className="description text-white">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {/* /Heading title */}
        <div className="counter-group">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 d-flex"  >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-heart.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4><span className="counterUp">16</span>K+</h4>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex"  >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-car.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4><span className="counterUp">2547</span>+</h4>
                    <p>Count of Cars</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex"  >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-headphone.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4><span className="counterUp">625</span>K+</h4>
                    <p>Car Center Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex"  >
              <div className="count-group flex-fill">
                <div className="customer-count d-flex align-items-center">
                  <div className="count-img">
                    <img src="/user-assets/img/icons/bx-history.svg" alt="Icon" />
                  </div>
                  <div className="count-content">
                    <h4><span className="counterUp">200</span>K+</h4>
                    <p>Total Kilometer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Facts By The Numbers */}
    {/* Why Choose Us */}
    <section className="section why-choose">
      <div className="choose-left">
        <img src="/user-assets/img/bg/choose-left.png" className="img-fluid" alt="Why Choose Us" />
      </div>		
      <div className="container">	
        {/* Heading title*/}
        <div className="section-heading"  >
          <h2>Why Choose Us</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {/* /Heading title */}
        <div className="why-choose-group">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 d-flex"  >
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="choose-img choose-black">
                    <img src="/user-assets/img/icons/bx-selection.svg" alt="Icon" />
                  </div>
                  <div className="choose-content">
                    <h4>Easy &amp; Fast Booking</h4>
                    <p>Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex"  >
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="choose-img choose-secondary">
                    <img src="/user-assets/img/icons/bx-crown.svg" alt="Icon" />
                  </div>
                  <div className="choose-content">
                    <h4>Many Pickup Location</h4>
                    <p>Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex"  >
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="choose-img choose-primary">
                    <img src="/user-assets/img/icons/bx-user-check.svg" alt="Icon" />
                  </div>
                  <div className="choose-content">
                    <h4>Customer Satisfaction</h4>
                    <p>Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Why Choose Us */}
    {/* About us Testimonials */}
    <section className="section about-testimonial testimonials-section">
      <div className="container">
        {/* Heading title*/}
        <div className="section-heading"  >
          <h2 className="title text-white">What People say about us? </h2>
          <p className="description text-white">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {/* /Heading title */}
        <div className="testimonials-section ">
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="quotes-head"></div>
                <div className="review-box">
                  <div className="review-profile">
                    <div className="review-img">
                      <img 
                        src={testimonial.avatar} 
                        className="img-fluid" 
                        alt={testimonial.name} 
                      />
                    </div>
                  </div>
                  <div className="review-details">
                    <h6>{testimonial.name}</h6>
                    <div className="list-rating">
                      <div className="list-rating-star">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p><span>({testimonial.rating}.0)</span></p>
                    </div>
                  </div>
                </div>
                <p>{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </section>
    {/* About us Testimonials */}
    {/* FAQ  */}
    <section className="section faq-section bg-light-primary">
      <div className="container">				
        {/* Heading title*/}
        <div className="section-heading"  >
          <h2>Frequently Asked Questions </h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {/* /Heading title */}
        <div className="faq-info">
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">What is about rental car deals?</a>
            </h4>
            <div id="faqOne" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">In which areas do you operate?</a>
            </h4>
            <div id="faqTwo" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?</a>
            </h4>
            <div id="faqThree" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia?</a>
            </h4>
            <div id="faqFour" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqFive" aria-expanded="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?</a>
            </h4>
            <div id="faqFive" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqSix" aria-expanded="false">eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?</a>
            </h4>
            <div id="faqSix" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqSeven" aria-expanded="false">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod?</a>
            </h4>
            <div id="faqSeven" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>													
        </div>		
      </div>	
    </section>	
    {/* /FAQ */}

  </div>
  
 
</div>

  )
}

export default About