import React, { useState, useRef, useEffect } from "react";
import { Input, MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

// 更新消息类型接口以匹配 MessageBox 要求
interface IMessage {
  id: string;
  position: "left" | "right";
  type: "text";
  text: string;
  date: Date;
  title: string;
  avatar?: string;
  focus?: boolean;
  titleColor?: string;
  forwarded?: boolean;
  replyButton?: boolean;
  removeButton?: boolean;
  status?: "waiting" | "sent" | "received" | "read";
  notch?: boolean;
  copiableDate?: boolean;
}

interface ChatProps {
  userName?: string;
  userAvatar?: string;
  botAvatar?: string;
  onSendMessage?: (message: string) => void;
  initialMessages?: IMessage[];
}

const Chat: React.FC<ChatProps> = ({
  userName = "User",
  userAvatar = "/user-avatar.png",
  botAvatar = "/bot-avatar.png",
  onSendMessage,
  initialMessages = [],
}) => {
  const [messages, setMessages] = useState<IMessage[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: IMessage = {
        id: generateId(),
        position: "right",
        type: "text",
        text: inputText,
        date: new Date(),
        title: userName,
        avatar: userAvatar,
        focus: false,
        forwarded: false,
        replyButton: false,
        removeButton: false,
        status: "sent",
        notch: true,
        copiableDate: true,
      };

      setMessages([...messages, newMessage]);
      setInputText("");
      onSendMessage?.(inputText);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f0f17]">
      {/* 消息列表区域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.position === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex ${
                message.position === "right" ? "flex-row-reverse" : "flex-row"
              } items-start gap-2 max-w-[80%]`}
            >
              <img
                src={message.position === "right" ? userAvatar : botAvatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div
                className={`flex flex-col ${
                  message.position === "right" ? "items-end" : "items-start"
                }`}
              >
                <span className="text-sm text-gray-400 mb-1">
                  {message.title}
                </span>
                <div
                  className={`p-3 rounded-2xl ${
                    message.position === "right"
                      ? "bg-[#7C3AED] text-white rounded-tr-none"
                      : "bg-[#1f1f2e] text-white rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div className="p-4 border-t border-[#2a2a3a]">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              placeholder="Message Rosie..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              maxHeight={100}
              multiline={false}
              className="w-full bg-[#1f1f2e] text-white rounded-xl p-4 pr-12 border-none focus:ring-2 focus:ring-[#7C3AED] placeholder-gray-500"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
