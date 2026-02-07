"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { 
  chatbotKnowledgeBase, 
  quickQuestions, 
  greetings, 
  thanks, 
  defaultResponses 
} from "./ChatbotData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi! I'm your AI assistant. I can help you learn about Saddock, Three.js, web development, and more. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const getBotResponse = async (userMessage, conversationHistory) => {
    try {
      console.log("Sending message to API route...");

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory,
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error:", errorData);
        
        if (response.status === 500) {
          return `❌ Server error: ${errorData.error || 'Unknown error'}`;
        }
        
        return `❌ Error: ${errorData.error || 'Failed to get response'}`;
      }

      const data = await response.json();
      console.log("API response received:", data);

      return data.reply || "I'm having trouble generating a response right now.";

    } catch (error) {
      console.error("Chat error:", error);
      return `❌ Connection error: ${error.message}. Please check your internet connection.`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowQuickQuestions(false);

    try {
      // Get AI response with conversation history
      const responseText = await getBotResponse(currentInput, messages);
      
      const botResponse = {
        id: Date.now() + 1,
        type: "bot",
        content: responseText,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse = {
        id: Date.now() + 1,
        type: "bot",
        content: "Sorry, I encountered an error. Please try again!",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = async (question) => {
    setInputValue(question);
    // Small delay to show the question in the input before sending
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
             {/* Chat Toggle Button */}
       <motion.button
         onClick={() => setIsOpen(!isOpen)}
         className="fixed bottom-6 right-6 z-50 text-foreground rounded-full flex items-center justify-center custom-bg"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         aria-label="AI Assistant"
       >
         <span className="relative w-14 h-14 p-4 hover:text-accent transition-colors peer">
           {isOpen ? <X className="w-full h-auto" strokeWidth={1.5} /> : <MessageCircle className="w-full h-auto" strokeWidth={1.5} />}
           
           <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
           
           <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
             AI Assistant
           </span>
         </span>
       </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-background/95 backdrop-blur-md border border-accent/30 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-accent/20">
              <div className="flex items-center space-x-2">
                <Bot size={20} className="text-accent" />
                <span className="font-semibold text-foreground">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-accent text-background"
                        : "bg-accent/10 text-foreground border border-accent/20"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === "bot" && (
                        <Bot size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      )}
                      {message.type === "user" && (
                        <User size={16} className="text-background mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Quick Questions */}
              {showQuickQuestions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2 text-xs text-muted">
                    <Sparkles size={12} />
                    <span>Quick questions:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.slice(0, 4).map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-lg p-2 text-foreground transition-colors text-left"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-accent/10 text-foreground border border-accent/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-accent" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-accent/20">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-accent/10 border border-accent/20 rounded-lg px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-accent text-background rounded-lg px-3 py-2 hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
