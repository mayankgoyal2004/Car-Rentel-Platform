import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import apiService, { BASE_URL_IMG } from "../../Apiservice/apiService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

const socket = io(BASE_URL_IMG);

const AdminMessage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const chatEndRef = useRef();
  const userData = useSelector((store) => store.user);
  const currentUserId = userData._id;

  useEffect(() => {
    if (!currentUserId) return;
    socket.emit("user-connected", currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    const handleReceiveMessage = ({ senderId, message }) => {
      if (selectedUser && selectedUser._id === senderId) {
        setMessages((prev) => [
          ...prev,
          {
            sender: senderId,
            message,
            createdAt: new Date(),
          },
        ]);
      }
    };

    socket.on("receive-message", handleReceiveMessage);

    return () => {
      socket.off("receive-message", handleReceiveMessage);
    };
  }, [selectedUser]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiService.getMessageByCustomer();
        if (res.data.success) {
          setUsers(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const selectUser = async (user) => {
    setSelectedUser(user);
    setChatOpen(true);
    try {
      const res = await apiService.getChatAdmin(user._id);
      if (res.data.success) {
        setMessages(res.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = () => {
    if (!input || !selectedUser) return;
    socket.emit("send-message", {
      senderId: currentUserId,
      receiverId: selectedUser._id,
      message: input,
    });
    setMessages((prev) => [
      ...prev,
      {
        sender: currentUserId,
        message: input,
        createdAt: new Date().toISOString(),
      },
    ]);
    setInput("");
  };
  const closeChat = () => {
    setChatOpen(false);
  };
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}

        <div className="my-auto mb-2">
          <h4 className="mb-1">Messages</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Messages
              </li>
            </ol>
          </nav>
        </div>
        <div className="content content-chat top-space-chat">
          <div className="container">
            <div className="content-header">
              <h4>Messages</h4>
            </div>
            <div className={`row chat-window ${chatOpen ? "chat-slide" : ""}`}>
              {/* Users List */}
              <div className="col-xl-4 chat-cont-left">
                <div className="chat-header">
                  <span>Chats</span>
                </div>
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    {users.length > 0 ? (
                      users.map((user) => (
                        <div
                          key={user._id}
                          className={`notify-block d-flex ${
                            selectedUser?._id === user._id ? "active" : ""
                          }`}
                          onClick={() => selectUser(user)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                              <img
                                src={
                                  user.image
                                    ? BASE_URL_IMG + user.image
                                    : "/default-avatar.png"
                                }
                                alt={user.userName}
                                className="avatar-img rounded-circle"
                                onError={(e) => {
                                  e.target.src = "/default-avatar.png";
                                }}
                              />
                            </div>
                          </div>
                          <div className="media-body chat-custom flex-grow-1">
                            <div className="user-name">
                              {user.firstName && user.lastName
                                ? `${user.firstName} ${user.lastName}`
                                : user.userName}
                            </div>
                            {user.lastMessage && (
                              <div className="text-muted small text-truncate">
                                {user.lastMessage}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center p-3 text-muted">
                        No conversations yet
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="col-xl-8 chat-cont-right">
                <div className="chat-header">
                  <div className="notify-block d-flex">
                    {selectedUser ? (
                      <>
                        <div className="media-img-wrap flex-shrink-0">
                          <button
                            onClick={closeChat}
                            style={{
                              border: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <ArrowLeft size={20} />
                          </button>
                          <div className="avatar avatar-online">
                            <img
                              src={
                                selectedUser.image
                                  ? BASE_URL_IMG + selectedUser.image
                                  : "/default-avatar.png"
                              }
                              alt={selectedUser.userName}
                              className="avatar-img rounded-circle"
                              onError={(e) => {
                                e.target.src = "/default-avatar.png";
                              }}
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div className="user-name">
                            {selectedUser.firstName && selectedUser.lastName
                              ? `${selectedUser.firstName} ${selectedUser.lastName}`
                              : selectedUser.userName}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="user-name">
                        Select a user to start chatting
                      </div>
                    )}
                  </div>
                </div>

                {/* Messages */}
                <div className="chat-body chat-scroll">
                  <ul className="list-unstyled">
                    {messages.length > 0 ? (
                      messages.map((msg, index) => (
                        <li
                          key={msg._id || index}
                          className={`notify-block d-flex ${
                            msg.sender === currentUserId ||
                            (typeof msg.sender === "object" &&
                              msg.sender._id === currentUserId)
                              ? "sent"
                              : "received"
                          }`}
                        >
                          {msg.sender !== currentUserId &&
                            !(
                              typeof msg.sender === "object" &&
                              msg.sender._id === currentUserId
                            ) && (
                              <div className="avatar flex-shrink-0">
                                <img
                                  src={
                                    selectedUser?.image
                                      ? BASE_URL_IMG + selectedUser.image
                                      : "/default-avatar.png"
                                  }
                                  className="avatar-img rounded-circle"
                                  alt="User"
                                />
                              </div>
                            )}
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <p>{msg.message}</p>
                              <span className="time small text-muted">
                                {new Date(msg.createdAt).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div className="text-center p-4 text-muted">
                        {selectedUser
                          ? "No messages yet. Start the conversation!"
                          : "Select a user to view messages"}
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </ul>
                </div>

                {/* Message Input */}
                <div className="chat-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Type a message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={!selectedUser}
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill ms-2"
                      onClick={sendMessage}
                      disabled={!selectedUser || !input.trim()}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;
