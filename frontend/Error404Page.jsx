import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="main-wrapper">
  <div className="error-box">
    <img src="/user-assets/img/404.png" className="img-fluid" alt="Page not found" />
    <h3>Oops! Page not found!</h3>
    <p>The page you requested was not found.</p>
    <div className="back-button">					
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  </div>
</div>

  )
}

export default ErrorPage