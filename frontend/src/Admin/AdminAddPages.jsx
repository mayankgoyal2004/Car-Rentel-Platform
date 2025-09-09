import React from 'react'
import { Link } from 'react-router-dom'

const AdminAddPages = () => {
  return (
 
<div className="page-wrapper">
  <div className="content me-4">
    <div className="mb-4">
      <Link to="admin-pages"  className="d-flex align-items-center"><span className="me-1"><i className="ti ti-arrow-narrow-left" /></span>Pages</Link>
    </div>	
    <div className="add_page">
      <div className="card mb-0">
        <div className="card-header">
          <h5>Add Page</h5>
        </div>
        <form action="admin-pages">
          <div className="card-body pb-1">
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Slug  <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Keywords</label>
                    <input className="input-tags form-control" type="text" data-role="tagsinput" name="Label" defaultValue="Book Car, Online" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div className="editor" />
                    <p className="mt-2 fs-14">Maximum 60 Words</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <h6>SEO Settings</h6>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Meta Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Meta Keywords <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Meta Description</label>
                    <textarea rows={4} className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Canonical URL <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">OG Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">OG Description</label>
                    <textarea rows={4} className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label className="form-label mb-2">OG Image <span className="text-danger">*</span></label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                        <i className="ti ti-photo-up fs-14" />
                      </div>                                              
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input type="file" className="form-control image-sign" multiple />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex align-items-center justify-content-end">
              <a href="javascript:void(0);" className="btn btn-light me-2"> Cancel</a>
              <button type="submit" className="btn btn-primary">Create New</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>			
</div>


  )
}

export default AdminAddPages