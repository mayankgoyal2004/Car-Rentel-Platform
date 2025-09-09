import React from 'react'

const UserNotification = () => {
  return (
   
					<div className="col-lg-9">
  <div className="settings-info">
    <div className="settings-sub-heading">
      <h4>Notifications</h4>
    </div>
    <div className="notification-grid">
      <div className="notification-checkbox">
        <h5>Notify me when...</h5>
        <ul className="nav">
          <li>
            <label className="custom_check">
              <input type="checkbox" name="offers" defaultChecked />
              <span className="checkmark" />
              Special Offers &amp; Discounts
            </label>
          </li>
          <li>
            <label className="custom_check">
              <input type="checkbox" name="booking" defaultChecked />
              <span className="checkmark" />
              Booking Confirmations
            </label>
          </li>
          <li>
            <label className="custom_check">
              <input type="checkbox" name="car_added" defaultChecked />
              <span className="checkmark" />
              When new car added
            </label>
          </li>
        </ul>
      </div>
      <div className="notification-status">
        <div className="notification-status-content">
          <h5>Mobile Push notifications</h5>
          <p>Receive push notification when you allow the option</p>
        </div>
        <div className="status-toggle">
          <input id="mobile_notifications" className="check" type="checkbox" defaultChecked />
          <label htmlFor="mobile_notifications" className="checktoggle">checkbox</label>
        </div>
      </div>
      <div className="notification-status">
        <div className="notification-status-content">
          <h5>Desktop notifications</h5>
          <p>Receive desktop notification when you allow the option</p>
        </div>
        <div className="status-toggle">
          <input id="desktop_notifications" className="check" type="checkbox" defaultChecked />
          <label htmlFor="desktop_notifications" className="checktoggle">checkbox</label>
        </div>
      </div>
      <div className="notification-status">
        <div className="notification-status-content">
          <h5>Email notifications</h5>
          <p>Receive notifications through mails when you allow the option</p>
        </div>
        <div className="status-toggle">
          <input id="email_notifications" className="check" type="checkbox" defaultChecked />
          <label htmlFor="email_notifications" className="checktoggle">checkbox</label>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default UserNotification