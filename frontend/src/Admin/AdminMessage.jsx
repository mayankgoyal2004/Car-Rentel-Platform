import React from 'react'

const AdminMessage = () => {
  return (
   <div className="page-wrapper">
  <div className="content pb-0">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h4 className="mb-1">Chat</h4>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Chat</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="chat-wrapper">
      {/* Chats sidebar */}
      <div className="sidebar-group">
        <div id="chats" className="sidebar-content active slimscroll">
          <div className="slimscroll">
            <div className="chat-search-header border-bottom">                            
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4>Chats</h4>
                <div className="chat-options">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="javascript:void(0)" className="btn chat-search-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                        <i className="ti ti-search" />
                      </a>
                    </li>
                    <li>
                      <a className="btn no-bg" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-volume-off me-2" />Mute Notification</a></li>
                        <li><a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-clock-hour-4 me-2" />Disappearing Message</a></li>
                        <li><a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-clear-all me-2" />Clear Message</a></li>
                        <li><a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-trash me-2" />Delete Chat</a></li>
                        <li><a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-ban me-2" />Block</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* Chat Search */}
                <div className="chat-search search-wrap contact-search">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search Contacts" />
                      <span className="input-group-text"><i className="ti ti-search" /></span>
                    </div>
                  </form>
                </div>
                {/* /Chat Search */}
              </div>
            </div>       
            <div className="sidebar-body chat-body" id="chatsidebar">
              <div className="chat-users-wrap">
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Anthony Lewis</h6>
                        <p><span className="animate-typing text-success">Typing
                            <span className="dot bg-success" />
                            <span className="dot bg-success" />
                            <span className="dot bg-success" />
                          </span>
                        </p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">02:40 PM</span>
                        <div className="chat-pin">
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>    
                    </div>
                  </a>                        
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>    
                <div className="chat-list"> 
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-01.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Elliot Murray</h6>
                        <p><i className="ti ti-file me-1" />Document</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">06:12 AM</span>
                        <div className="chat-pin">
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>    
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-02.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Stephan Peralt</h6>
                        <p>Video</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">03:15 AM</span>
                        <div className="chat-pin">
                          <i className="ti ti-video text-secondary me-2" />
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>     
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-18.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Rebecca Smtih</h6>
                        <p>Hi How are you</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">Sunday</span>
                        <div className="chat-pin">
                          <span className="badge badge-xs rounded-pill bg-info">2</span>
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>    
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-14.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Harvey Smith</h6>
                        <p>Haha oh man</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">03:15 AM</span>
                        <div className="chat-pin">
                          <span className="badge badge-xs rounded-pill bg-info">2</span>
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>    
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-08.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Lori Broaddus</h6>
                        <p>Do you know which...</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">02:40 PM</span>
                        <div className="chat-pin">
                          <i className="ti ti-check text-gray-3" />
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>   
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-15.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Brian Villalobos</h6>
                        <p>Do you know which...</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">06:12 AM</span>
                        <div className="chat-pin">
                          <i className="ti ti-pin me-2" />
                          <i className="ti ti-checks text-gray-5" />
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>   
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-08.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Linda Ray</h6>
                        <p><i className="ti ti-photo me-2" />Photo</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">Wednesday</span>
                        <div className="chat-pin">
                          <span className="badge badge-xs rounded-pill bg-info">2</span>
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>   
                <div className="chat-list">
                  <a href="chat.html" className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <img src="/admin-assets/img/profiles/avatar-07.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Doglas Martini</h6>
                        <p className="text-success"><i className="ti ti-video-plus text-success me-2" />Incoming Video Call</p>
                      </div>
                      <div className="chat-user-time">
                        <span className="time">02:40 PM</span>
                        <div className="chat-pin">
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>    
                    </div>
                  </a>                    
                  <div className="chat-dropdown">
                    <a className="#" href="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archive Chat</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chats</a></li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                    </ul>
                  </div>     
                </div>       
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / Chats sidebar */}					
      {/* Chat */}
      <div className="chat chat-messages show" id="middle">
        <div>
          <div className="chat-header">
            <div className="user-details">
              <div className="d-xl-none">
                <a className="text-muted chat-close me-2" href="#">
                  <i className="fas fa-arrow-left" />
                </a>
              </div>
              <div className="avatar avatar-lg online flex-shrink-0">
                <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
              </div>
              <div className="ms-2 overflow-hidden">
                <h6>Anthony Lewis</h6>
                <span className="last-seen">Online</span>
              </div>
            </div>
          </div>
          <div className="chat-body chat-page-group slimscroll">
            <div className="messages">
              <div className="chats">
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="chat-content">							
                  <div className="chat-profile-name">
                    <h6>Anthony Lewis<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span></h6>
                  </div>
                  <div className="chat-info">
                    <div className="message-content">
                      Hello <span className="text-primary">@Keene</span> <br />
                      I'm looking to rent a car next weekend. Do you have any cars available?
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                  </div>			
                </div>
              </div>
              <div className="chats chats-right">
                <div className="chat-content">
                  <div className="chat-profile-name text-end">
                    <h6>Horace Keene<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span><span className="msg-read success"><i className="ti ti-checks" /></span></h6>                                        
                  </div>
                  <div className="chat-info">
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                    <div className="message-content">
                      Sure, Sarah. What’s the new policy?
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>                                           
                    </div>   
                  </div>
                </div>
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-14.jpg" className="rounded-circle dreams_chat" alt="image" />
                </div>
              </div>     
              <div className="chats">
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="chat-content">										
                  <div className="chat-profile-name">
                    <h6>Anthony Lewis<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span></h6>
                  </div>
                  <div className="chat-info">
                    <div className="message-content">
                      Starting next month, we’ll be implementing a hybrid work model. Employees can work from home up to three days a week.
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                  </div>
                </div>
              </div>
              <div className="chats chats-right">
                <div className="chat-content">
                  <div className="chat-profile-name text-end">
                    <h6>Horace Keene<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span><span className="msg-read success"><i className="ti ti-checks" /></span></h6>                                        
                  </div>
                  <div className="chat-info">
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                    <div className="message-content">
                      That sounds great! Are there any specific requirements for tracking our hours when working remotely?
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-14.jpg" className="rounded-circle dreams_chat" alt="image" />
                </div>
              </div>
              <div className="chat-line">
                <span className="chat-date">Today, July 24</span>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="chat-content">
                  <div className="chat-profile-name">
                    <h6>Anthony Lewis<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span></h6>
                  </div>
                  <div className="chat-info">
                    <div className="message-content">
                      Yes, we’ll be using a time-tracking tool to log hours. You’ll need to ensure you’re available during your usual working hours and keep your manager updated if anything changes.
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                  </div>	
                </div>
              </div>
              <div className="chats chats-right">
                <div className="chat-content">
                  <div className="chat-profile-name text-end">
                    <h6>Horace Keene<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">08:00 AM</span><span className="msg-read success"><i className="ti ti-checks" /></span></h6>                                        
                  </div>
                  <div className="chat-info">
                    <div className="chat-actions">
                      <a className="#" href="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Reply</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Forward</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-file-export me-2" />Copy</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-heart me-2" />Mark as Favourite</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-trash me-2" />Delete</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-check me-2" />Mark as Unread</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-box-align-right me-2" />Archeive Chat</a></li>
                        <li><a className="dropdown-item" href="#"><i className="ti ti-pinned me-2" />Pin Chat</a></li>
                      </ul>
                    </div>   
                    <div className="message-content">
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);"><span className="p-2 bg-primary d-flex align-items-center justify-content-center rounded-circle me-2"><i className="ti ti-player-play" /></span></a>
                        <img src="/admin-assets/img/bg/play-wave.png" alt="img" className="img-fluid me-2" />
                        <span>0:05</span>
                      </div>
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                            <div className="emoj-group-list">
                              <ul>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-03.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-10.svg" alt="Icon" /></a></li>
                                <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-09.svg" alt="Icon" /></a></li>
                                <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                        </ul>
                      </div>                                           
                    </div>   
                  </div>
                </div>
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-14.jpg" className="rounded-circle dreams_chat" alt="image" />
                </div>
              </div> 
              <div className="chats">
                <div className="chat-avatar">
                  <img src="/admin-assets/img/profiles/avatar-29.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="chat-content">
                  <div className="chat-profile-name">
                    <h6>Edward Lietz<i className="ti ti-circle-filled fs-7 mx-2" /><span className="chat-time">02:39 PM</span><span className="msg-read success"><i className="ti ti-checks" /></span></h6>
                  </div>
                  <div className="message-content">
                    <span className="animate-typing text-success">Typing
                      <span className="dot bg-success" />
                      <span className="dot bg-success" />
                      <span className="dot bg-success" />
                    </span>
                    <div className="emoj-group">
                      <ul>
                        <li className="emoj-action"><a href="javascript:void(0);"><i className="ti ti-mood-smile" /></a>
                          <div className="emoj-group-list">
                            <ul>
                              <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                              <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                              <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                              <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                              <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                              <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);"><i className="ti ti-arrow-forward-up" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>                       
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <form className="footer-form d-flex align-items-center">
            <div className="form-item">
              <a href="javascript:void(0);" data-bs-toggle="dropdown" className="bg-dark text-white p-2 border rounded-circle d-flex align-items-center justify-content-center me-1">
                <i className="ti ti-dots-vertical" />
              </a>
              {/* <div class="dropdown-menu dropdown-menu-end p-3" >
										<a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-camera-selfie me-2"></i>Camera</a>
										<a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-photo-up me-2"></i>Gallery</a>
										<a href="javascript:void(0);" class="dropdown-item" ><i class="ti ti-music me-2"></i>Audio</a>
										<a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-map-pin-share me-2"></i>Location</a>
										<a href="javascript:void(0);" class="dropdown-item" ><i class="ti ti-user-check me-2"></i>Contact</a>
									</div> */}
            </div>
            <div className="form-item emoj-action-foot">
              <div className="emoj-group-list-foot down-emoji-circle">
                <ul>
                  <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-02.svg" alt="Icon" /></a></li>
                  <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-05.svg" alt="Icon" /></a></li>
                  <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-06.svg" alt="Icon" /></a></li>
                  <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-07.svg" alt="Icon" /></a></li>
                  <li><a href="javascript:void(0);"><img src="/admin-assets/img/icons/emonji-08.svg" alt="Icon" /></a></li>
                  <li className="add-emoj"><a href="javascript:void(0);"><i className="ti ti-plus" /></a></li>
                </ul>
              </div>
              <a href="javascript:void(0);" className="action-circle p-2 border rounded-circle d-flex align-items-center justify-content-center me-1"><i className="ti ti-mood-smile" /></a>
            </div>  
            <div className="form-item">
              <a href="javascript:void(0);" className="action-circle p-2 border rounded-circle d-flex align-items-center justify-content-center me-3"><i className="ti ti-microphone" /></a>
            </div>
            <input type="text" className="form-control me-3" placeholder="Type Your Message" />
            <div className="form-btn">
              <button className="btn btn-primary" type="submit">
                <i className="ti ti-send" />
              </button>
            </div>                       
          </form>
        </div>
      </div>
      {/* /Chat */}
    </div>
  </div>
</div>

  )
}

export default AdminMessage