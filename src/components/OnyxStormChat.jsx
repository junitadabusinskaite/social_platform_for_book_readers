import Navbar from "./Navbar"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const OnyxStormChat = () => {
  const [messages, setMessages] = useState([
    { text: "heyy", sender: "user123", profilePic: "user123.jpg" },
    { text: "Hi!", sender: "hello123" },
    { text: "How are you?", sender: "hello123" },
    { text: "i’m great. What about u?", sender: "user123", profilePic: "user123.jpg" },
    { text: "Hey there!", sender: "reader456", profilePic: "reader456.jpg" },
    { text: "Hello!", sender: "hello123" }
  ])

  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "hello123" }]);
      setInput("");
    }
  };

  const getProfileLink = (username) => {
    if (username === "user123") return "../userprofile";
    if (username === "reader456") return "../readerprofile";
  };

  return (
    <><Navbar />
      <Link to="../newreleases" className="text-black p-4">← go back to new releases</Link>
      <h2 className="text-center">Onyx Storm</h2>
      <div className="forum-chat-container">
        <div className="chat-box">
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "hello123" ? "sent" : "received"}`}>
                <div className="message-wrapper">
                  {msg.sender !== "hello123" && (
                    <img src={`./${msg.profilePic}`} alt="profile" className="profile-pic" />
                  )}
                  <div className="message-content">
                    {msg.sender !== "hello123" && (
                      <div className="username">
                        <Link to={getProfileLink(msg.sender)} className="text-black text-decoration-none">
                          {msg.sender}
                        </Link>
                      </div>
                    )}
                    <div className="message-text">{msg.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <textarea className="form-control" placeholder="Write here..." value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              rows="1"
            />
            <button className="send-btn" onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnyxStormChat