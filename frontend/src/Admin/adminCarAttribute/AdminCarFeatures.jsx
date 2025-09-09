import React from 'react'

const AdminCarFeatures = () => {
  return (
 <div>
  {/* /Page Wrapper */}
  {/* Add Feature */}
  <div className="modal fade" id="add_feature">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Feature</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Feature <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Create New</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Type */}
  {/* Edit Type */}
  <div className="modal fade" id="edit_feature">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Feature</h4>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="mb-3">
            <label className="form-label">Feature <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="Air Conditioner" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="form-check form-check-md form-switch me-2">
              <label className="form-check-label form-label mt-0 mb-0">
                <input className="form-check-input form-label me-2" type="checkbox" role="switch" defaultChecked />
                Status
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-primary">Save Changes</a>
            </div>
          </div>						
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Type */}
  {/* Delete Type */}
  <div className="modal fade" id="delete_feature">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Feature</h4>
          <p className="mb-3">Are you sure you want to delete feature?</p>
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" className="btn btn-primary">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Brand */}
</div>

  )
}

export default AdminCarFeatures