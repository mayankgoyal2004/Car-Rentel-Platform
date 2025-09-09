import React from 'react'
import { Link } from 'react-router-dom'

const Maintainance = () => {
  return (
   <div className="main-wrapper">
  <div className="error-box">
    <img src="/user-assets/img/maintenance.png" className="img-fluid" alt="Maintenance" />
    <h2 className="coming-soon">We're Down For Maintenance</h2>
    <p>Our website is currently undergoing scheduled maintenance, will be right 
      back in a few minutes.</p>
    <h6>We'll Be Back Shortly</h6>
    <div className="footer-social-links">
      <ul className="nav">						
        <li>
          <a href="#" target="_blank"><i className="feather-instagram hi-icon" /></a>
        </li>						
        <li>
          <a href="#" target="_blank"><i className="feather-twitter hi-icon" /> </a>
        </li>						
        <li>
          <a href="#" target="_blank"><i className="feather-youtube hi-icon" /></a>
        </li>
        <li>
          <a href="#" target="_blank"><i className="feather-facebook hi-icon" /></a>
        </li>
        <li>
          <a href="#" target="_blank"><i className="feather-linkedin hi-icon" /></a>
        </li>
      </ul>
    </div>
    <Link to="/"  className="btn-maintance btn btn-primary">Back to Home</Link>
  </div>
</div>

  )
}

export default Maintainance