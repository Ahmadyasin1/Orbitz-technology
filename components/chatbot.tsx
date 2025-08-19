"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send, User, Bot, Phone, MessageSquare } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatbotProps {
  whatsappNumber?: string // Your WhatsApp number
}

export default function Chatbot({ whatsappNumber = "+1234567890" }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant from Orbitz Technology. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [showContactForm, setShowContactForm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Predefined responses for common queries
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Orbitz Technology. I can help you with basic information about our services. For detailed discussions, I'd recommend speaking with our expert team."
    }
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer AI Development, Software Development, Cybersecurity, IT Consulting, and Managed IT Services. For specific requirements and detailed consultation, our human experts can provide better guidance. Would you like to connect with them?"
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Pricing varies based on your specific requirements. Our human consultants can provide accurate quotes after understanding your needs. Would you like me to connect you with our team?"
    }
    
    if (message.includes('contact') || message.includes('talk') || message.includes('speak')) {
      return "I'd be happy to connect you with our human experts! They can provide detailed information and personalized solutions. Shall I arrange a WhatsApp consultation for you?"
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence')) {
      return "We specialize in AI Development Solutions including machine learning, automation, and intelligent systems. Our AI experts can discuss your specific AI needs in detail. Would you like to schedule a consultation?"
    }
    
    if (message.includes('cybersecurity') || message.includes('security')) {
      return "We provide comprehensive cybersecurity solutions. For security assessments and customized protection strategies, our cybersecurity specialists can help you better. Shall I connect you with them?"
    }

    // Default response suggesting human contact
    return "That's a great question! For the best assistance with your specific needs, I'd recommend speaking with our human experts who can provide detailed guidance. Would you like me to connect you with our team via WhatsApp?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)

      // Check if bot response suggests human contact
      if (botResponse.text.includes('connect') || botResponse.text.includes('WhatsApp') || botResponse.text.includes('consultation')) {
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 2).toString(),
            text: 'Click the "Talk to Human Expert" button below to start a WhatsApp conversation with our team!',
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, followUp])
        }, 1000)
      }
    }, 1500)
  }

  const handleWhatsAppRedirect = () => {
    // Create a summary of the conversation
    const conversationSummary = messages
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.text)
      .join('\n- ')

    const message = `Hello! I was chatting with your AI assistant on the Orbitz Technology website.

My conversation topics:
- ${conversationSummary}

${userName ? `Name: ${userName}` : ''}
${userEmail ? `Email: ${userEmail}` : ''}

I'd like to speak with a human expert about my requirements.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 ${
            isOpen ? 'hidden' : 'flex'
          } items-center justify-center`}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="w-96 h-[600px] shadow-2xl border-2 border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Orbitz AI Assistant</CardTitle>
                    <p className="text-sm text-white/90">Online • Typically replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col h-[500px]">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-4 h-4 mt-1 text-purple-600" />
                        )}
                        {message.sender === 'user' && (
                          <User className="w-4 h-4 mt-1 text-white" />
                        )}
                        <div>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-purple-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* WhatsApp Connection Button */}
              <div className="px-4 py-2 border-t">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Talk to Human Expert on WhatsApp</span>
                </Button>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
