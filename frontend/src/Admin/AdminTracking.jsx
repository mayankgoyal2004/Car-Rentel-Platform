import React from 'react'

const AdminTracking = () => {
  return (
  <div className="page-wrapper">
  <div className="content me-4 pb-0">
    {/* Tracking */}
    <div className="map-wrap tracking position-relative">
      <div id="map" className="tracking-map w-100 z-1" />	
      <div className="position-absolute top-0 start-0 w-100 z-2 p-3">										
        <div className="input-icon-start position-relative">
          <span className="input-icon-addon">
            <i className="ti ti-search" />
          </span>
          <input type="text" className="form-control" placeholder="Search by Car Name" />
        </div>
      </div>	
    </div>	
    {/* /Tracking */}					
  </div>
</div>

  )
}

export default AdminTracking