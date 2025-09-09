import React from 'react'

const UserPreference = () => {
  return (
   
		
				


					<div className="col-lg-9">
  <div className="settings-info">
    <div className="settings-sub-heading">
      <h4>Preferences</h4>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="preference-wrap">
          <div className="preference-info">
            <h6>Language </h6>
            <p>Select display language</p>
          </div>
          <div className="preference-select">
            <select className="select">
              <option>English</option>
              <option>Japanese</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="preference-wrap">
          <div className="preference-info">
            <h6>Region / Locale</h6>
            <p>Select region</p>
          </div>
          <div className="preference-select">
            <select className="select">
              <option>United States (English)</option>
              <option>Japan (Japanese)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


				

		
	
  )
}

export default UserPreference