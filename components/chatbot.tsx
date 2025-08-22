"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send, User, Bot, Phone, MessageSquare, Minimize2, Maximize2, Clock, CheckCheck } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered'
}

interface ChatbotProps {
  whatsappNumber?: string
}

export default function Chatbot({ whatsappNumber = "+1234567890" }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 Hello! Welcome to Orbitz Technology! I\'m Sarah, your AI assistant. I\'m here to help you learn about our services and connect you with our expert team when needed.\n\nHow can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
      status: 'delivered'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [conversationStage, setConversationStage] = useState<'initial' | 'engaged' | 'ready_for_human'>('initial')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [lastUserActivity, setLastUserActivity] = useState(new Date())

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI responses with more human-like conversation
  const getBotResponse = (userMessage: string): { text: string; delay?: number } => {
    const message = userMessage.toLowerCase()
    setLastUserActivity(new Date())

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return {
        text: "Hello there! 😊 It's wonderful to meet you! I'm here to help you discover how Orbitz Technology can transform your business with cutting-edge solutions.\n\nWhat brings you to us today? Are you looking for:\n• AI Development Solutions\n• Cybersecurity Services\n• Software Development\n• IT Consulting\n• Or something else entirely?",
        delay: 1200
      }
    }

    // Services inquiry
    if (message.includes('service') || message.includes('what do you do') || message.includes('capabilities') || message.includes('solutions')) {
      setConversationStage('engaged')
      return {
        text: "Great question! 🚀 We're a full-service technology company specializing in:\n\n🤖 **AI Development Solutions** - Machine learning, automation, and intelligent systems\n🔐 **Cybersecurity** - Enterprise-grade protection and compliance\n💻 **Software Development** - Custom applications and platforms\n☁️ **IT Consulting** - Strategic technology guidance\n🛠️ **Managed IT Services** - 24/7 support and infrastructure management\n\nWhich of these interests you most? I'd love to share more specific details! Or would you prefer to speak with one of our specialists for a personalized consultation?",
        delay: 1800
      }
    }

    // AI-specific questions
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('automation')) {
      setConversationStage('engaged')
      return {
        text: "Excellent choice! 🧠✨ AI is truly revolutionary for businesses. Our AI Development Solutions include:\n\n• **Custom AI Models** - Tailored to your specific business needs\n• **Process Automation** - Streamline operations and reduce costs\n• **Predictive Analytics** - Data-driven insights for better decisions\n• **Natural Language Processing** - Chatbots, document analysis, and more\n• **Computer Vision** - Image recognition and analysis systems\n\nMany of our clients see 40-60% efficiency improvements within the first 6 months! 📈\n\nWhat specific challenges are you hoping AI might solve for your business? Our AI specialists would love to discuss your unique requirements in detail.",
        delay: 2000
      }
    }

    // Cybersecurity questions
    if (message.includes('security') || message.includes('cybersecurity') || message.includes('protection') || message.includes('compliance')) {
      setConversationStage('engaged')
      return {
        text: "Security is absolutely critical in today's digital landscape! 🔒 Our cybersecurity services provide comprehensive protection:\n\n• **Zero Trust Architecture** - Never trust, always verify approach\n• **24/7 Threat Monitoring** - Real-time protection and response\n• **Compliance Management** - HIPAA, PCI DSS, GDPR, and more\n• **Penetration Testing** - Regular security assessments\n• **Employee Training** - Your team as the first line of defense\n\nWe've helped organizations prevent over $2.3M in potential cyber damages last year alone! 💪\n\nAre you dealing with specific security concerns, or looking for a comprehensive security audit? Our cybersecurity experts can provide a free security assessment.",
        delay: 1900
      }
    }

    // Pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('quote') || message.includes('how much')) {
      setConversationStage('ready_for_human')
      return {
        text: "I completely understand that budget is an important consideration! 💰\n\nOur pricing varies significantly based on your specific needs, project scope, and the level of customization required. Here's what I can tell you:\n\n• **AI Projects**: Typically range from $15K - $150K+ depending on complexity\n• **Cybersecurity**: Monthly services from $2K - $25K based on company size\n• **Software Development**: $50 - $200 per hour depending on expertise needed\n\nHowever, these are just rough estimates. The best way to get accurate pricing is through a personalized consultation where we understand your exact requirements.\n\nWould you like me to connect you with one of our solution specialists? They can provide a detailed quote tailored to your needs - and the consultation is completely free! 🎯",
        delay: 2200
      }
    }

    // Timeline questions
    if (message.includes('time') || message.includes('timeline') || message.includes('how long') || message.includes('duration') || message.includes('when')) {
      return {
        text: "Great question about timelines! ⏰ Project duration really depends on scope and complexity:\n\n• **Simple AI Solutions**: 4-8 weeks\n• **Custom Software**: 2-6 months\n• **Enterprise AI Systems**: 3-12 months\n• **Cybersecurity Implementation**: 2-4 weeks\n• **Full Digital Transformation**: 6-18 months\n\nWe always work with you to establish realistic timelines that meet your business objectives. Most clients are impressed with how quickly we can deliver initial results!\n\nWhat's your ideal timeline? Are you working with any specific deadlines? Our project managers are excellent at creating delivery schedules that work for you.",
        delay: 1600
      }
    }

    // Industry-specific questions
    if (message.includes('healthcare') || message.includes('financial') || message.includes('banking') || message.includes('education') || message.includes('manufacturing')) {
      return {
        text: "Absolutely! We have extensive experience in your industry! 🏥🏦🏫🏭\n\nWe understand that every industry has unique challenges, compliance requirements, and operational needs. Our industry-specific expertise includes:\n\n• **Healthcare**: HIPAA compliance, EHR integration, telemedicine\n• **Financial**: PCI DSS compliance, fraud detection, secure transactions\n• **Education**: Learning management systems, student data protection\n• **Manufacturing**: IoT integration, supply chain optimization\n• **Legal**: Case management, document automation, client portals\n\nWe've successfully delivered 200+ projects across various industries, and we'd love to share relevant case studies with you.\n\nWould you like to discuss your industry-specific challenges with one of our specialists who understands your sector inside and out?",
        delay: 1800
      }
    }

    // Contact/consultation requests
    if (message.includes('contact') || message.includes('talk') || message.includes('speak') || message.includes('consultation') || message.includes('meeting') || message.includes('call')) {
      setConversationStage('ready_for_human')
      return {
        text: "Perfect! I'd love to connect you with our expert team! 🤝\n\nOur specialists can provide:\n• **Free consultation** (30-45 minutes)\n• **Detailed project assessment**\n• **Custom solution recommendations**\n• **Accurate timeline and pricing**\n• **Live demonstrations** of relevant solutions\n\nYou can reach out in two convenient ways:\n1. **Continue our conversation on WhatsApp** - Instant connection with our team\n2. **Schedule a video call** - Face-to-face consultation at your convenience\n\nWhich would you prefer? Our team typically responds within 10 minutes during business hours! ⚡",
        delay: 1500
      }
    }

    // Company questions
    if (message.includes('company') || message.includes('about') || message.includes('who are you') || message.includes('experience') || message.includes('team')) {
      return {
        text: "I'm so glad you asked! 🌟 Here's what makes Orbitz Technology special:\n\n• **8+ years** of technology excellence\n• **500+ successful projects** delivered\n• **98.5% client satisfaction** rate\n• **24/7 support** for all our solutions\n• **Certified experts** in AI, cybersecurity, and software development\n\nWe're not just a service provider - we're your technology partner! Our team includes former engineers from Microsoft, Google, and Amazon, and we're passionate about helping businesses thrive through technology.\n\nOur clients often tell us we feel more like an extension of their team rather than an external vendor. That's exactly the relationship we aim for!\n\nWould you like to hear about some of our recent success stories, or do you have specific questions about our expertise?",
        delay: 1900
      }
    }

    // Help or confused responses
    if (message.includes('help') || message.includes('confused') || message.includes('not sure') || message.includes('don\'t know')) {
      return {
        text: "No worries at all! I'm here to help make everything clear! 😊\n\nLet me ask you a few simple questions to better understand how we can help:\n\n1. **What's your main business challenge right now?**\n   (e.g., manual processes, security concerns, outdated systems)\n\n2. **What's your industry or business type?**\n   (e.g., healthcare, finance, retail, manufacturing)\n\n3. **What's prompting you to look for technology solutions?**\n   (e.g., growth, compliance, efficiency, competition)\n\nJust answer any of these that feel relevant, and I'll provide much more targeted information! Or if you'd prefer, I can connect you directly with one of our consultants who can walk you through everything step by step.",
        delay: 1700
      }
    }

    // Default response with conversation progression
    const defaultResponses = [
      "That's a really interesting point! 🤔 I want to make sure I give you the most helpful information. Could you tell me a bit more about what you're looking for specifically?",
      "I appreciate you sharing that with me! To provide you with the most relevant information, could you help me understand your main technology challenges or goals?",
      "Thank you for that question! I'd love to give you a detailed answer. Are you exploring technology solutions for a specific business need or project?",
      "That's a great question! I want to make sure I address exactly what you're looking for. What's the most important technology challenge your business is facing right now?"
    ]

    const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    
    return {
      text: `${randomResponse}\n\nAlternatively, if you'd prefer to discuss your needs directly with one of our technology experts, I can connect you with them right away. They're fantastic at understanding unique business requirements and providing personalized recommendations! 🚀`,
      delay: 1400
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    const response = getBotResponse(inputValue)
    const typingDelay = response.delay || 1500

    // Simulate more realistic typing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        status: 'delivered'
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)

      // Auto-suggest human contact for engaged users
      if (conversationStage === 'engaged') {
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 2).toString(),
            text: "💡 **Quick tip**: If you'd like to dive deeper into any of these topics, our specialists are available for immediate consultation via WhatsApp or scheduled calls. They love talking about these solutions! 😊",
            sender: 'bot',
            timestamp: new Date(),
            status: 'delivered'
          }
          setMessages(prev => [...prev, followUp])
        }, 3000)
      }
    }, typingDelay)
  }

  const handleWhatsAppRedirect = () => {
    const conversationSummary = messages
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.text)
      .slice(-3) // Last 3 user messages
      .join('\n- ')

    const message = `🚀 Hello from Orbitz Technology website!

I was chatting with Sarah (your AI assistant) and would like to speak with a human expert.

💬 My recent questions/interests:
- ${conversationSummary}

${userName ? `Name: ${userName}` : ''}
${userEmail ? `Email: ${userEmail}` : ''}

I'm ready to discuss my requirements with your team! 😊`

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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Enhanced Chatbot Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 ${
            isOpen ? 'hidden' : 'flex'
          } items-center justify-center group relative`}
        >
          <MessageCircle className="w-8 h-8 text-white" />
          {/* Notification pulse */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with our AI Assistant
          </div>
        </Button>
      </div>

      {/* Enhanced Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className={`transition-all duration-300 shadow-2xl border-2 border-purple-100 ${
            isMinimized 
              ? 'w-80 h-16' 
              : 'w-96 md:w-[420px] h-[600px] md:h-[650px]'
          }`}>
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Sarah - AI Assistant</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Online • Responds instantly</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20 p-1"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-1"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <CardContent className="p-0 flex flex-col h-[500px] md:h-[550px]">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg rounded-br-sm'
                            : 'bg-white text-gray-800 rounded-lg rounded-bl-sm shadow-sm border'
                        } px-4 py-3`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === 'bot' && (
                            <Bot className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {message.text}
                            </p>
                            <div className={`flex items-center justify-between mt-2 text-xs ${
                              message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                            }`}>
                              <span>{formatTime(message.timestamp)}</span>
                              {message.sender === 'user' && (
                                <CheckCheck className={`w-4 h-4 ${
                                  message.status === 'delivered' ? 'text-white' : 'text-white/50'
                                }`} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 px-4 py-3 rounded-lg rounded-bl-sm shadow-sm border max-w-[85%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-5 h-5 text-purple-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-gray-500">Sarah is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* WhatsApp Direct Button */}
                <div className="px-4 py-3 bg-green-50 border-t border-green-200">
                  <Button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Continue on WhatsApp</span>
                    <div className="ml-auto bg-white/20 px-2 py-1 rounded text-xs">
                      Instant Response
                    </div>
                  </Button>
                </div>

                {/* Enhanced Input Area */}
                <div className="p-4 border-t bg-white">
                  <div className="flex space-x-3">
                    <div className="flex-1 relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="pr-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-full py-3"
                        maxLength={500}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                        {inputValue.length}/500
                      </div>
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("Tell me about your AI solutions")}
                      className="text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      🤖 AI Solutions
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("I need cybersecurity help")}
                      className="text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      🔐 Security
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("What are your pricing options?")}
                      className="text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      💰 Pricing
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
