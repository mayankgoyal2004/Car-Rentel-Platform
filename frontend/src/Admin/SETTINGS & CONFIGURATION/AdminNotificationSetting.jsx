import React from 'react'

const AdminNotificationSetting = () => {
  return (
    <div className="page-wrapper">
  <div className="content me-4 pb-0">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Settings</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Settings</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="row">
      <div className="col-xl-3">
        {/* inner sidebar */}
        <div className="settings-sidebar slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li className="menu-title"><span>ACCOUNT SETTING</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="profile-setting.html">
                      <i className="ti ti-user-edit me-2" /><span>Profile</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="security-setting.html">
                      <i className="ti ti-lock me-2" /><span>Security</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="notifications-setting.html">
                      <i className="ti ti-bell me-2" /><span>Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="integrations-settings.html">
                      <i className="ti ti-device-nintendo me-2" /><span>Integrations</span>
                    </a>
                  </li>
                  <li>
                    <a href="tracker-setting.html">
                      <i className="ti ti-brand-stackshare me-2" /><span>Tracker</span>
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>WEBSITE SETTING</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="company-setting.html">
                      <i className="ti ti-building me-2" /><span>Company Settings</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="localization-setting.html">
                      <i className="ti ti-settings-2 me-2" /><span>Localization</span>
                    </a>
                  </li>
                  <li>
                    <a href="prefixes.html">
                      <i className="ti ti-corner-up-left-double me-2" /><span>Prefixes</span>
                    </a>
                  </li>
                  <li>
                    <a href="seo-setup.html">
                      <i className="ti ti-seo me-2" /><span>SEO Setup</span>
                    </a>
                  </li>
                  <li>
                    <a href="language-setting.html">
                      <i className="ti ti-language me-2" /><span>Language</span>
                    </a>
                  </li>
                  <li>
                    <a href="maintenance-mode.html">
                      <i className="ti ti-color-filter me-2" /><span>Maintenance Mode</span>
                    </a>
                  </li>
                  <li>
                    <a href="login-setting.html">
                      <i className="ti ti-lock-bolt me-2" /><span>Login &amp; Register</span>
                    </a>
                  </li>
                  <li>
                    <a href="ai-configuration.html">
                      <i className="ti ti-grain me-2" /><span>AI Configuration</span>
                    </a>
                  </li>
                  <li>
                    <a href="plugin-managers.html">
                      <i className="ti ti-car-crash me-2" /><span>Plugin Managers</span>
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>RENTAL SETTINGS</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="rental-setting.html">
                      <i className="ti ti-file-invoice me-2" /><span>Rental</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="insurance-setting.html">
                      <i className="ti ti-file-delta me-2" /><span>Insurance</span>
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>APP SETTINGS</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="invoice-setting.html">
                      <i className="ti ti-file-invoice me-2" /><span>Invoice Settings</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="invoice-template.html">
                      <i className="ti ti-template me-2" /><span>Invoice Templates</span>
                    </a>
                  </li>
                  <li>
                    <a href="signatures-setting.html">
                      <i className="ti ti-signature me-2" /><span>Signatures</span>
                    </a>
                  </li>
                  <li>
                    <a href="custom-fields.html">
                      <i className="ti ti-forms me-2" /><span>Custom Fields</span>
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>SYSTEM SETTINGS</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="email-setting.html">
                      <i className="ti ti-mail me-2" /><span>Email Settings</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="email-templates.html">
                      <i className="ti ti-mail-fast me-2" /><span>Email Templates</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="sms-gateways.html">
                      <i className="ti ti-messages me-2" /><span>SMS Gateways</span><span className="track-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-cookies.html">
                      <i className="ti ti-cookie me-2" /><span>GDPR Cookies</span><span className="track-icon" />
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>FINANCE SETTINGS</span></li>
              <li>
                <ul className="sidebar-links pb-3 mb-3 border-bottom">
                  <li>
                    <a href="payment-methods.html">
                      <i className="ti ti-currency-dollar me-2" /><span>Payment Methods</span>
                    </a>
                  </li>
                  <li>
                    <a href="bank-accounts.html">
                      <i className="ti ti-file-dollar me-2" /><span>Bank Accounts</span>
                    </a>
                  </li>
                  <li>
                    <a href="tax-rates.html">
                      <i className="ti ti-file-percent me-2" /><span>Tax Rates</span>
                    </a>
                  </li>
                  <li>
                    <a href="currencies.html">
                      <i className="ti ti-world-dollar me-2" /><span>Currencies</span>
                    </a>
                  </li>
                </ul>							
              </li>
              <li className="menu-title"><span>OTHER SETTINGS</span></li>
              <li>
                <ul className="sidebar-links">
                  <li>
                    <a href="sitemap.html">
                      <i className="ti ti-map me-2" /><span>Sitemap</span>
                    </a>
                  </li>
                  <li>
                    <a href="clear-cache.html">
                      <i className="ti ti-database-x me-2" /><span>Clear Cache</span>
                    </a>
                  </li>
                  <li>
                    <a href="storage.html">
                      <i className="ti ti-database me-2" /><span>Storage</span>
                    </a>
                  </li>
                  <li>
                    <a href="cronjob.html">
                      <i className="ti ti-clock-cog me-2" /><span>Cronjob</span>
                    </a>
                  </li>
                  <li>
                    <a href="system-backup.html">
                      <i className="ti ti-file-check me-2" /><span>System Backup</span>
                    </a>
                  </li>
                  <li>
                    <a href="database-backup.html">
                      <i className="ti ti-file-database me-2" /><span>Database Backup</span>
                    </a>
                  </li>
                  <li>
                    <a href="system-update.html">
                      <i className="ti ti-refresh-dot me-2" /><span>System Update</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* /inner sidebar */}
      </div>
      <div className="col-xl-9">
        <div className="card">
          <div className="card-header">
            <h5>Account Settings</h5>
          </div>
          <div className="card-body">
            <div className="security-content">
              <h6 className="mb-3">Notifications</h6>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="notification-settings">
                    <h6 className="fs-14 fw-medium mb-1">Notify me about</h6>
                    <div className="d-flex align-items-center gap-2">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          All New Messages
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Mentions Only
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                          Nothing
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div>
                      <h6 className="fs-14 fw-medium mb-1">Notify me about</h6>
                      <p className="fs-13">Enable desktop notifications to get instant updates on bookings, payments, and tenant requests.</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="form-check form-check-md form-switch">
                        <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div>
                      <h6 className="fs-14 fw-medium mb-1">Unread Notification Badge</h6>
                      <p className="fs-13">Ensure you never miss important rental updates or car status changes with the unread notification badge.</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="form-check form-check-md form-switch">
                        <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="mb-3">Notification Type</h6>
              <div className="notification-type">
                <ul>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fs-14 fw-medium mb-1">Booking &amp; Rental Updates</h6>
                        <p className="fs-13">Get immediate alerts for any changes to bookings or rental details to ensure you’re always in the loop.</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="form-check form-check-md form-switch">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fs-14 fw-medium mb-1">Payment &amp; Invoice Notifications</h6>
                        <p className="fs-13">Ensure you never miss important rental updates or car status changes with the unread notification badge.</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="form-check form-check-md form-switch">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fs-14 fw-medium mb-1">User &amp; Tenant Notifications</h6>
                        <p className="fs-13">Get immediate alerts for every payment received, failed transactions, and new invoices for smooth financial management.</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="form-check form-check-md form-switch">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fs-14 fw-medium mb-1">Vehicle Management</h6>
                        <p className="fs-13">Stay informed about vehicle availability and maintenance status for a smooth fleet management experience.</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="form-check form-check-md form-switch">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fs-14 fw-medium mb-1">Discounts &amp; Offers</h6>
                        <p className="fs-13">Receive real-time updates on all the latest deals and special promotions, ensuring you're always informed</p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="form-check form-check-md form-switch">
                          <input className="form-check-input form-label" type="checkbox" role="switch" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>			
</div>

  )
}

export default AdminNotificationSetting