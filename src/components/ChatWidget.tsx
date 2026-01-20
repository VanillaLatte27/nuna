'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
}

const PREDEFINED_QA = [
    { id: 'about', question: 'Tell me about Nuna', answer: 'I am a final year Psychology student at UGM with a passion for HR, specifically in Recruitment and Training.' },
    { id: 'contact', question: 'How can I contact you?', answer: 'You can email me at nunasivaa@gmail.com or use the WhatsApp button below!' },
    { id: 'skills', question: 'What are your main skills?', answer: 'I specialize in Psychological Testing, Recruitment Selection, Training Design, and HR Administration tools.' },
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'init', text: 'Hi! I am Nuna\'s virtual assistant. How can I help you today?', sender: 'bot' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const idCounter = useRef(0);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleOptionClick = (qa: { id: string, question: string, answer: string }) => {
        idCounter.current += 1;
        // Add user question
        const userMsg: Message = { id: `u-${idCounter.current}`, text: qa.question, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Simulate delay then add bot answer
        setTimeout(() => {
            idCounter.current += 1;
            const botMsg: Message = { id: `b-${idCounter.current}`, text: qa.answer, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.button
                className="chat-trigger"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <FaTimes /> : (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src="/profile.jpeg"
                            alt="Chat"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                        />
                    </div>
                )}
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        <div className="chat-header">
                            <div className="avatar">
                                <Image src="/profile.jpeg" alt="Nuna" width={40} height={40} />
                            </div>
                            <div className="info">
                                <h4>Nuna Siva</h4>
                                <span>Virtual Assistant</span>
                            </div>
                        </div>

                        <div className="chat-body">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-options">
                            {PREDEFINED_QA.map((qa) => (
                                <button key={qa.id} onClick={() => handleOptionClick(qa)}>
                                    {qa.question}
                                </button>
                            ))}
                            <a
                                href="https://wa.me/6287888818946"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wa-btn"
                            >
                                <FaWhatsapp /> Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .chat-trigger {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: #fff; /* Monochrome */
          color: #0f171e;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          z-index: 1000;
          overflow: hidden;
          padding: 0;
        }

        .chat-window {
          position: fixed;
          bottom: 7rem;
          right: 2rem;
          width: 320px;
          height: 450px;
          background: rgba(20, 30, 40, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chat-header {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .chat-header .avatar img {
          border-radius: 50%;
          object-fit: cover;
        }

        .chat-header h4 {
          font-size: 1rem;
          color: #fff;
          margin: 0;
        }

        .chat-header span {
          font-size: 0.8rem;
          color: #ccc;
        }

        .chat-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          max-width: 80%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .message.bot {
          background: rgba(255,255,255,0.1);
          color: #eee;
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }

        .message.user {
          background: #fff;
          color: #0f171e;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }

        .chat-options {
          padding: 1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .chat-options button {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #ccc;
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s;
          text-align: left;
        }

        .chat-options button:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
          border-color: #fff;
        }
        
        .wa-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: #25D366;
            color: #fff;
            padding: 0.6rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 0.5rem;
            font-size: 0.9rem;
        }
        
        .wa-btn:hover {
            background: #22c35e;
        }
      `}</style>
        </>
    );
}
