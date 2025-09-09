import React from 'react'

const UserMessage = () => {
  return (
    <div className="content content-chat top-space-chat">
  <div className="container">
    {/* Content Header */}
    <div className="content-header">
      <h4>Messages</h4>
    </div>
    {/* /Content Header */}	
    <div className="row chat-window">
      <div className="col-xl-12">
        <div className="chat-window">
          {/* Chat Left */}
          <div className="chat-cont-left">
            <div className="chat-header">
              <span>Chats</span>
              <a href="javascript:void(0)" className="chat-compose">
                <i className="feather-plus-circle" />
              </a>
            </div>
            <form className="chat-search">
              <div className="input-group">
                <div className="input-group-prepend">
                  <i className="fas fa-search" />
                </div>
                <input type="text" className="form-control rounded-pill" placeholder="Search" />
              </div>
            </form>
            <div className="chat-users-list">
              <div className="chat-scroll">
                <a href="javascript:void(0);" className="notify-block d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-away">
                      <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Mark Villiams</div>
                      <div className="user-last-chat">Have you called them?</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">2 min</div>
                      <div className="badge badge-success rounded-pill">15</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat active d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-online">
                      <img src="/user-assets/img/profiles/avatar-09.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Elizabeth Sosa</div>
                      <div className="user-last-chat">I'll call you later </div>
                    </div>
                    <div>
                      <div className="last-chat-time block">8:01 PM</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-away">
                      <img src="/user-assets/img/profiles/avatar-10.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Michael Howard</div>
                      <div className="user-last-chat">Thank you</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">7:30 PM</div>
                      <div className="badge badge-success rounded-pill">3</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-online">
                      <img src="/user-assets/img/profiles/avatar-11.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Horace Keene</div>
                      <div className="user-last-chat">Have you called them?</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">5 Mins Ago</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-offline">
                      <img src="/user-assets/img/profiles/avatar-12.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Marvin Campbell</div>
                      <div className="user-last-chat">Yesterday i completed the task</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">11:21 AM</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-online">
                      <img src="/user-assets/img/profiles/avatar-13.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">James Albert</div>
                      <div className="user-last-chat">What is the major functionality?</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">10:05 AM</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-away">
                      <img src="/user-assets/img/profiles/avatar-14.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Richard Ohare</div>
                      <div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">Yesterday</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-offline">
                      <img src="/user-assets/img/profiles/avatar-15.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Paul Richard</div>
                      <div className="user-last-chat">Let's talk briefly in the evening. </div>
                    </div>
                    <div>
                      <div className="last-chat-time block">Sunday</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-online">
                      <img src="/user-assets/img/profiles/avatar-07.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">John Gibbs </div>
                      <div className="user-last-chat">Do you have any collections? If so, what of?</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">Saturday</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0);" className="notify-block read-chat d-flex open-chat">
                  <div className="media-img-wrap flex-shrink-0">
                    <div className="avatar avatar-away">
                      <img src="/user-assets/img/profiles/avatar-06.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="media-body chat-custom flex-grow-1">
                    <div>
                      <div className="user-name">Judy Mercer</div>
                      <div className="user-last-chat">Connect the two modules with in 1 day.</div>
                    </div>
                    <div>
                      <div className="last-chat-time block">Friday</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* /Chat Left */}
          {/* Chat Right */}
          <div className="chat-cont-right">
            <div className="chat-header">
              <a id="back_user_list" href="javascript:void(0)" className="back-user-list">
                <i className="feather-chevron-left" />
              </a>
              <div className="notify-block d-flex">
                <div className="media-img-wrap flex-shrink-0">
                  <div className="avatar avatar-online">
                    <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                  </div>
                </div>
                <div className="media-body flex-grow-1">
                  <div className="user-name">Mark Villiams</div>
                  <div className="user-status">online</div>
                </div>
              </div>
              <div className="chat-options">
                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#voice_call">
                  <i className="feather-phone" />
                </a>
                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#video_call">
                  <i className="feather-video" />
                </a>
                <a href="javascript:void(0)">
                  <i className="feather-more-vertical" />
                </a>
              </div>
            </div>
            <div className="chat-body">
              <div className="chat-scroll">
                <ul className="list-unstyled">
                  <li className="notify-block sent d-flex">
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Hello. What can I do for you?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:30 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notify-block received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>I'm just looking around.</p>
                          <p>Will you tell me something about yourself?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:35 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <p>Are you there? That time!</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:40 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <div className="chat-msg-attachments">
                            <div className="chat-attachment">
                              <img src="/user-assets/img/chat-img-01.jpg" alt="Attachment" />
                              <a href="#" className="chat-attach-download">
                                <i className="fas fa-download" />
                              </a>
                            </div>
                            <div className="chat-attachment">
                              <img src="/user-assets/img/chat-img-02.jpg" alt="Attachment" />
                              <a href="#" className="chat-attach-download">
                                <i className="fas fa-download" />
                              </a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:41 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notify-block sent d-flex">
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Where?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:42 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:42 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <div className="chat-msg-attachments">
                            <div className="chat-attachment">
                              <img src="/user-assets/img/chat-img-03.jpg" alt="Attachment" />
                              <a href="#" className="chat-attach-download">
                                <i className="fas fa-download" />
                              </a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:50 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notify-block received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>You wait for notice.</p>
                          <p>Consectetuorem ipsum dolor sit?</p>
                          <p>Ok?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:55 PM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="chat-date">Today</li>
                  <li className="notify-block received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>10:17 AM</span>
                              </div>
                            </li>
                            <li><a href="#">Edit</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notify-block sent d-flex">
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Lorem ipsum dollar sit</p>
                          <div className="chat-msg-actions dropdown">
                            <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fe fe-elipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>10:19 AM</span>
                              </div>
                            </li>
                            <li><a href="#">Edit</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notify-block received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="/user-assets/img/profiles/avatar-08.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <div className="msg-typing">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-footer">
              <div className="input-group">
                <div className="btn-file btn">
                  <i className="fa fa-paperclip" />
                  <input type="file" />
                </div>
                <input type="text" className="input-msg-send form-control rounded-pill" placeholder="Type something" />
                <button type="button" className="btn msg-send-btn rounded-pill ms-2"><i className="fa-solid fa-paper-plane" /></button>
              </div>
            </div>
          </div>
          {/* /Chat Right */}
        </div>
      </div>
    </div>
    {/* /Row */}
  </div>
</div>

  )
}

export default UserMessage