import Navbar from "./Navbar"
import { useState } from "react"

const PrivateChat = () => {
  const [activeUser, setActiveUser] = useState("user123")
  const [messages, setMessages] = useState({
    user123: [
      { text: "heyy", sender: "user123" },
      { text: "Hi!", sender: "hello123" },
      { text: "How are you?", sender: "hello123" },
      { text: "i’m great. What about u?", sender: "user123" }
    ],
    reader456: [
      { text: "Hey there!", sender: "reader456" },
      { text: "Hello!", sender: "hello123" }
    ]
  })

  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages({
        ...messages,
        [activeUser]: [...messages[activeUser], { text: input, sender: "hello123" }]
      })
      setInput("")
    }
  };

  return (
    <><Navbar />
      <div className="chat-container mt-4">
        <div className="user-list">
          {["user123", "reader456"].map((user) => (
            <div key={user} className={`user ${activeUser === user ? "active-user" : ""}`} onClick={() => setActiveUser(user)}>
              <img src={`./${user}.jpg`} alt={user} className="profile-pic" />
              <span>{user}</span>
            </div>
          ))}
        </div>

        <div className="chat-box">
          <div className="messages-container">
            {messages[activeUser].map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "hello123" ? "sent" : "received"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <textarea className="form-control" placeholder="Write here..." value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()} rows="1" />
            <button className="send-btn" onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateChat