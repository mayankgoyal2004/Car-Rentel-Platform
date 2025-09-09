import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
  <div className="main-wrapper">
   
    {/* Breadscrumb Section */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">Gallery </h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">Gallery</li>
              </ol>
            </nav>							
          </div>
        </div>
      </div>
    </div>
    {/* /Breadscrumb Section */}		     	
    {/* Gallery section*/}
    <div className="section gallery-section"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-01.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-01.jpg" />
              </a>
            </div>					
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">								
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-02.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-02.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-03.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-03.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">					
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-04.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-04.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-05.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-05.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-06.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-06.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">					
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-07.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-07.jpg" />
              </a>											
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-08.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-08.jpg" />
              </a>											
            </div>									
          </div>	
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-09.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-09.jpg" />
              </a>											
            </div>									
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-10.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-10.jpg" />
              </a>											
            </div>									
          </div>	
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-11.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-11.jpg" />
              </a>											
            </div>									
          </div>	
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down">
            <div className="gallery-widget">
              <a href="/user-assets/img/gallery/gallery-12.jpg" data-fancybox="gallery2">
                <img className="img-fluid" alt="Image" src="/user-assets/img/gallery/gallery-thum-12.jpg" />
              </a>											
            </div>									
          </div>	
        </div> 
      </div> 
    </div> 					  
    {/* /Gallery section*/}
   	
  </div>

</div>

  )
}

export default Gallery