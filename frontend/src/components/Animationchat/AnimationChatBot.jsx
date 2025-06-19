import React, { useEffect, useState } from "react";
import "../../pages/HomePage/Home.css";

const animatedMessages = [
  { type: "user", text: "Is “natural” skincare actually better?" },
  {
    type: "bot",
    text:
      "Not always 👀 \n“Natural” isn’t regulated — some ingredients can still irritate your skin or harm the planet. What is better? Cruelty-free, non-toxic, and ethically sourced. I can help you decode labels if you’ve got a product in mind 🧴✨",
  },
  { type: "user", text: "Okay… so what ingredients should I look out for?" },
  {
    type: "bot",
    text: `The no-go list:\n🚫 Parabens (linked to hormone disruption)\n🚫 Phthalates (often hiding under “fragrance”)\n🚫 SLS/SLES (harsh on your skin and waterways)\n🚫 Microplastics (yep, they’re in some scrubs 😬)\nWant a clean swap for something you're using now?`
  },
  { type: "user", text: "Yeah, I use the Neutrogena face wash — any cleaner swaps?" },
  {
    type: "bot",
    text: `Yes!\n✨ Try Youth to the People Superfood Cleanser – gentle, effective, and 100% vegan.\n💧 Or Byoma Gel Cleanser – budget-friendly, skin-barrier-safe, and fragrance-free.\nBoth are cruelty-free and come in recyclable packaging.\nWant a full clean skincare routine for your skin type?`
  },
];

const emojiRegex = /[\u{1F600}-\u{1F6FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{1F680}-\u{1F6FF}\u2600-\u26FF\u2700-\u27BF]/gu;

const AnimatedChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);
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
          const chars = Array.from(message.text);
          setDisplayedText([""]);
          setTyping(true);

          const typingInterval = setInterval(() => {
            setDisplayedText((prev) => {
              const nextChar = chars[charIndex];
              const isEmoji = nextChar.match(emojiRegex);
              const newLines = [...prev];

              if (isEmoji || nextChar === "\n") {
                newLines.push(nextChar);
              } else {
                newLines[newLines.length - 1] += nextChar;
              }

              charIndex++;
              if (charIndex === chars.length) {
                clearInterval(typingInterval);
                setMessages((prevMessages) => [...prevMessages, message]);
                setDisplayedText([]);
                setTyping(false);
                setCurrentIndex((prev) => prev + 1);
              }
              return newLines;
            });
          }, 15);
        }, 3000);

        return () => clearTimeout(thinkingDelay);
      }
    }
  }, [currentIndex]);

  const renderBotMessage = (text) => {
    const lines = text.split("\n");
    return (
      <div className="chat bot">
        <p>{lines[0]}</p>
        {lines.length > 1 && (
          <div>
            {lines.slice(1).map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="chat-ui-box"
      style={{
        background: "#fff",
        height: "500px",
        maxHeight: "500px",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="search-bar-ui">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Start a chat with your clean living assistant"
          readOnly
        />
        <i className="fas fa-microphone mic-icon"></i>
      </div>

      <div
        className="chat-container"
        style={{ flex: 1, overflowY: "auto", padding: "1rem" }}
      >
        {messages.map((msg, i) =>
          msg.type === "bot" && msg.text.includes("\n")
            ? renderBotMessage(msg.text)
            : (
              <div key={i} className={`chat ${msg.type}`}>
                {msg.text}
              </div>
            )
        )}

        {showThinking && (
          <div className="chat bot">
            <em>CleanClick is thinking...</em>
          </div>
        )}

        {typing && (
          <div className={`chat ${animatedMessages[currentIndex]?.type}`}>
  <pre style={{ margin: 0, whiteSpace: "pre-wrap", display: "inline" }}>
    {displayedText}
  </pre>
  <span className="cursor">|</span>
</div>
        )}
      </div>
    </div>
  );
};

export default AnimatedChatBot;
