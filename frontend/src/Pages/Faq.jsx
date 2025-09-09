import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
 
  <div className="main-wrapper">
   
    {/* Breadscrumb */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">FAQ</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
              </ol>
            </nav>							
          </div>
        </div>
      </div>
    </div>
    {/* /Breadscrumb */}		     	
    {/* FAQ  */}
    <section className="section faq-section">
      <div className="container">
        <div className="faq-info">
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">What is about rental car deals?</a>
            </h4>
            <div id="faqOne" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">In which areas do you operate?</a>
            </h4>
            <div id="faqTwo" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?</a>
            </h4>
            <div id="faqThree" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia?</a>
            </h4>
            <div id="faqFour" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqFive" aria-expanded="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?</a>
            </h4>
            <div id="faqFive" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqSix" aria-expanded="false">eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?</a>
            </h4>
            <div id="faqSix" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>	
          <div className="faq-card bg-white"  >
            <h4 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqSeven" aria-expanded="false">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod?</a>
            </h4>
            <div id="faqSeven" className="card-collapse collapse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>													
        </div>		
      </div>	
    </section>	
    {/* /FAQ */}	
   
  </div>
  

  )
}

export default Faq