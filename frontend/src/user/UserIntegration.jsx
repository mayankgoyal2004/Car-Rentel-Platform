import React from 'react'

const UserIntegration = () => {
  return (
   <div className="col-lg-9">
  <div className="settings-info">
    <div className="settings-sub-heading">
      <h4>Integrations</h4>
    </div>
    <div className="row">
      <div className="col-md-5">
        <div className="integration-grid">
          <div className="integration-calendar">
            <img src="/user-assets/img/icons/integration-icon.svg" alt="Icon" />
            <div className="status-toggle">
              <input id="google_calendar" className="check" type="checkbox" defaultChecked />
              <label htmlFor="google_calendar" className="checktoggle">checkbox</label>
            </div>
          </div>
          <div className="integration-content">
            <h5>Google Calendar</h5>
            <p>Powerful &amp; free service  to organize your schedule and coordinate events </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default UserIntegration