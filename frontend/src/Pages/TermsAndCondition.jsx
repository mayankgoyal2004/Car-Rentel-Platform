import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const TermsAndCondition = () => {
      useEffect(() => {
          AOS.init();
        }, []);
        
  return (
    		<div>
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar mt-5">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">Terms &amp; Conditions</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Terms &amp; Conditions</li>
            </ol>
          </nav>							
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}		     	
  {/* Terms & Conditions */}
  <div className="privacy-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="terms-policy">
            <p data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p data-aos="fade-down">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            <p data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul data-aos="fade-down">
              <li><span><i className="fa-solid fa-circle-check" /></span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et </li>
              <li><span><i className="fa-solid fa-circle-check" /></span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </li>
              <li><span><i className="fa-solid fa-circle-check" /></span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
              <li><span><i className="fa-solid fa-circle-check" /></span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et </li>
              <li><span><i className="fa-solid fa-circle-check" /></span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </li>
              <li><span><i className="fa-solid fa-circle-check" /></span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
            </ul>
            <p data-aos="fade-down">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            <p className="mb-0" data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>		
    </div>	
  </div>	
  {/* /Terms & Conditions */}
</div>

  )
}

export default TermsAndCondition