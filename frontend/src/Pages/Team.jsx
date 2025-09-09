import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'


const Team = () => {
   useEffect(() => {
      AOS.init();
    }, []);
  
  return (
   
	
<div>
  <div className="main-wrapper">
   
    {/* Breadscrumb Section */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">Meet our Team</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">Meet our Team</li>
              </ol>
            </nav>							
          </div>
        </div>
      </div>
    </div>
    {/* /Breadscrumb Section */}
    {/* Meet our Team */}
    <section className="our-team-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={100}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-01.jpg" alt="Our Team" />
              </div>	
              <div className="team-prof">
                <h3 className="team-post-title">Matt Fierce</h3>
                <span className="team-designation">CEO</span>	
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={200}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-02.jpg" alt="Our Team" />
              </div>
              <div className="team-prof">
                <h3 className="team-post-title">May Daniel</h3>
                <span className="team-designation">COO</span>
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={300}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-03.jpg" alt="Our Team" />
              </div>
              <div className="team-prof">
                <h3 className="team-post-title">Alberrt Hendrenz</h3>
                <span className="team-designation">Business head</span>
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={400}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-04.jpg" alt="Our Team" />
              </div>
              <div className="team-prof">
                <h3 className="team-post-title">Roseline</h3>
                <span className="team-designation">Business Analyst</span>
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={500}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-05.jpg" alt="Our Team" />
              </div>
              <div className="team-prof">
                <h3 className="team-post-title">Hendriques</h3>
                <span className="team-designation">Designer</span>
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down" data-aos-duration={1200} data-aos-delay={600}>
            <div className="our-team">
              <div className="profile-pic">
                <img src="/user-assets/img/our-team/team-06.jpg" alt="Our Team" />
              </div>
              <div className="team-prof">
                <h3 className="team-post-title">Maria</h3>
                <span className="team-designation">Lead Developer</span>
                <div className="footer-social-links m-0">
                  <ul className="nav">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f fa-facebook fi-icon" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter fi-icon" /> </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin fi-icon" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>		
      </div>	
    </section>	
    {/* /Meet our Team */}	
  
  </div>
  
</div>

  )
}

export default Team