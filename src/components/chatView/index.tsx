import React, { useState, useRef, useEffect } from "react";
import { MessageBox, Input, Button, MessageType } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

interface ChatMessage {
  position: "left" | "right";
  type: "text";
  text: string;
  date: Date;
  title: string;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        position: "right",
        type: "text",
        text: inputText,
        date: new Date(),
        title: "User",
      };
      setMessages([...messages, newMessage]);
      setInputText("");

      // 模拟AI回复
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          position: "left",
          type: "text",
          text: "AI response here...",
          date: new Date(),
          title: "AI Assistant",
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const messageBoxProps = {
    focus: false,
    titleColor: "#fff",
    forwarded: false,
    status: "sent" as const,
    notch: true,
    removeButton: false,
    retracted: false,
    replyButton: false,
    reply: false,
    toJSON: () => ({}),
    onReplyClick: () => {},
    onRemoveClick: () => {},
    onTitleClick: () => {},
    onForwardClick: () => {},
    onReplyMessageClick: () => {},
    onAvatarClick: () => {},
    // 添加其他必需的属性...
  };

  return (
    <div className="flex flex-col flex-1 bg-[#111919]">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            id={index.toString()}
            position={message.position}
            type={message.type}
            text={message.text}
            date={message.date}
            title={message.title}
            {...messageBoxProps}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#323737]">
        <Input
          placeholder="Ask anything from here"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
          multiline={false}
          maxHeight={100}
          className="bg-[#1c2121] text-white rounded-xl border-[#323737]"
          rightButtons={
            <Button
              text="Send"
              onClick={handleSend}
              title="Send"
              className="bg-[#00FFD1] text-black rounded-xl px-4 py-2 hover:shadow-[0_0_20px_rgba(0,255,209,0.4)]"
            />
          }
        />
      </div>
    </div>
  );
};

const CustomStyles = `
  .rce-container-mbox {
    background: transparent;
  }
  
  .rce-mbox {
    max-width: 80%;
  }
  
  .rce-mbox-left {
    background: #262929 !important;
    color: white !important;
  }
  
  .rce-mbox-right {
    background: #00FFD1 !important;
    color: black !important;
  }
  
  .rce-mbox-right .rce-mbox-title {
    color: #000 !important;
  }
  
  .rce-mbox-left .rce-mbox-title {
    color: #fff !important;
  }
  
  .rce-input {
    background: #1c2121 !important;
    border-color: #323737 !important;
  }
  
  .rce-input::placeholder {
    color: #767a7a;
  }

  .rce-mbox-left:before {
    border-right-color: #262929 !important;
  }

  .rce-mbox-right:before {
    border-left-color: #00FFD1 !important;
  }
`;

const ChatView: React.FC = () => {
  return (
    <>
      <style>{CustomStyles}</style>
      <ChatInterface />
    </>
  );
};

export default ChatView;
