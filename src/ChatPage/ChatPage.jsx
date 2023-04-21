import React from 'react';
import "./ChatPage.css";

function ChatPage() {
  return (
    <div className="ChatPage">
        <div className="chat-box">
            <div className="wrapper">
                {/* <form onSubmit={handleSubmit}></form> */}
                <input type="text" />
                <button type ="submit">Send</button>
            </div>
        </div>
    <h1>Welcome to Better</h1>
    </div>
  )
}

export default ChatPage