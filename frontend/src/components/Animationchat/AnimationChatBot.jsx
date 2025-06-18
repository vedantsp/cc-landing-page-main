import React, { useEffect, useState } from "react";
import "../../pages/HomePage/Home.css";

const animatedMessages = [
  { type: "user", text: "The best places in London for vintage fashion?" },
  {
    type: "bot",
    text:
      "If you're looking for vintage fashion, London is the place for it! Are you shopping online or in person?",
  },
  { type: "user", text: "In person" },
  {
    type: "bot",
    text: `Sure! Here's some of the best vintage shops in London for a fun day out:
- House of Vintage – Shoreditch
- Atika – Brick Lane
- Rellik – Notting Hill
- Beyond Retro – Dalston & Soho
- Nordic Poetry - Shoreditch
- Retromania – Victoria
- Goldsmith Vintage – Soho, Camden, Greenwich
- One of a Kind Archive – Portobello Road
- 128 - Hackney Road`
  },
];

const AnimatedChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(false);
  const [showThinking, setShowThinking] = useState(false);

  useEffect(() => {
    if (currentIndex < animatedMessages.length) {
      const message = animatedMessages[currentIndex];

      if (message.type === "user") {
        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, message]);
          setCurrentIndex((prev) => prev + 1);
        }, 1000);
      } else {
        setShowThinking(true);
        const thinkingDelay = setTimeout(() => {
          setShowThinking(false);
          let charIndex = 0;
          setDisplayedText("");
          setTyping(true);

          const typingInterval = setInterval(() => {
            setDisplayedText((prev) => {
              const nextChar = message.text.charAt(charIndex);
              charIndex++;
              if (charIndex === message.text.length + 1) {
                clearInterval(typingInterval);
                setMessages((prevMessages) => [...prevMessages, message]);
                setDisplayedText("");
                setTyping(false);
                setCurrentIndex((prev) => prev + 1);
              }
              return prev + nextChar;
            });
          }, 30);
        }, 3000);

        return () => clearTimeout(thinkingDelay);
      }
    }
    // Removed looping logic here — chat stops after all messages are shown.
  }, [currentIndex]);

  return (
    <div className="chat-ui-box" style={{ background: '#fff' }}>
      <div className="search-bar-ui">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Start a chat with your clean living assistant"
          readOnly
        />
        <i className="fas fa-microphone mic-icon"></i>
      </div>

      <div className="chat-container">
        {messages.map((msg, i) => (
          <div key={i} className={`chat ${msg.type}`}>
            {msg.text.includes("\n") ? (
              <>
                <p>{msg.text.split("\n")[0]}</p>
                <ul>
                  {msg.text
                    .split("\n")
                    .slice(1)
                    .map((line, j) => (
                      <li key={j}>{line.replace(/^[-\u2022]\s*/, "")}</li>
                    ))}
                </ul>
              </>
            ) : (
              msg.text
            )}
          </div>
        ))}

        {showThinking && (
          <div className="chat bot">
            <em>CleanClick is thinking...</em>
          </div>
        )}

        {typing && (
          <div className={`chat ${animatedMessages[currentIndex]?.type}`}>
            {displayedText}<span className="cursor">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedChatBot;
