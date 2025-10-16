import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuestion = async () => {
    if (!question.trim() || isLoading) return;

    const userMsg = { sender: "user", text: question };
    setMessages([...messages, userMsg]);
    setQuestion("");
    setIsLoading(true);
    
    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      const botMsg = { sender: "bot", text: data.answer };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const botMsg = { sender: "bot", text: "Sorry, something went wrong." };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="chat-wrapper">
          
          {/* Header */}
          <div className="header">
            <h1 className="header-title">
              CareerInsightBot
            </h1>
            <p className="header-subtitle">Your AI-powered career Q&A assistant</p>
          </div>

          {/* Messages Container */}
          <div className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-screen">
                <div className="welcome-icon">💼</div>
                <p className="welcome-title">Welcome to CareerInsightBot</p>
                <p className="welcome-subtitle">Ask me anything about careers, roles, or skills!</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message-wrapper ${msg.sender === "user" ? "message-user" : "message-bot"}`}
              >
                <div className={`message-bubble ${msg.sender === "user" ? "bubble-user" : "bubble-bot"}`}>
                  <div className="message-sender">
                    {msg.sender === "user" ? "You" : "CareerInsight"}
                  </div>
                  <p className="message-text">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="message-wrapper message-bot">
                <div className="message-bubble bubble-bot">
                  <div className="loader-container">
                    <div className="loader-dots">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                      <span className="dot dot-3"></span>
                    </div>
                    <span className="loader-text">CareerInsight is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="input-area">
            <div className="input-wrapper">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendQuestion()}
                placeholder="Ask a career question..."
                disabled={isLoading}
                className="input-field"
              />
              <button
                onClick={sendQuestion}
                disabled={isLoading || !question.trim()}
                className="send-button"
              >
                <span className="button-text-desktop">Send</span>
                <span className="button-text-mobile">➤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
