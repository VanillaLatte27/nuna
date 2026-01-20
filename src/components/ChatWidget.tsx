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

        </>
    );
}
