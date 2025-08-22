"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Chatbot from "@/components/chatbot"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Menu,
  X,
  ArrowRight,
  Shield,
  Code,
  Users,
  Globe,
  Phone,
  Mail,
  Clock,
  Award,
  CheckCircle,
  Building2,
  Stethoscope,
  Briefcase,
  Home,
  GraduationCap,
  Scale,
  ShoppingBag,
  Factory,
  Laptop,
  Cloud,
  Database,
  BookOpen,
  FileText,
  Video,
  Presentation,
} from "lucide-react"

export default function OrbitzTechnologyHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Video content configuration
  const videoContent = [
    {
      id: 1,
      videoSrc: "/hero_bg.mp4", // Keep existing video for AI content
      title: {
        line1: "Unlock Growth With Smart AI—",
        line2: "Boost Productivity, Cut Costs"
      },
      description: "Embrace the future of work with AI-powered transformation. Drive efficiency, agility, and growth with solutions built just for you.",
      primaryButton: "Explore AI Solutions",
      secondaryButton: "Schedule Demo",
      overlayStyle: "from-purple-600/80 via-pink-500/70 to-purple-700/80" // Original gradient
    },
    {
      id: 2,
      videoSrc: "/hero_bg2.mp4", // This will be the IT partner video (same video, different overlay)
      title: {
        line1: "Your All-in-One IT Partner",
        line2: "for Growth"
      },
      description: "Cut through complexity with integrated hardware, infrastructure, and custom software. Scale smarter, work easier, and unlock new possibilities.",
      primaryButton: "Discover Our Solutions",
      secondaryButton: "Get Started",
      overlayStyle: "from-blue-600/80 via-cyan-500/70 to-blue-700/80" // Different gradient for visual distinction
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Video rotation effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoContent.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Change every 3 seconds as requested
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [videoContent.length, isPaused])

  // Function to handle manual video switching
  const handleVideoSwitch = (index: number) => {
    setCurrentVideoIndex(index)
    // Reset the interval when manually switching
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoContent.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const handleDropdownEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const services = [
  { name: "Managed IT Services", href: "/services/managed-it", icon: Cloud, desc: "24/7 IT support and management" },
  { name: "Software Development", href: "/services/software-development", icon: Laptop, desc: "Custom software solutions" },
  { name: "Technology Advisory", href: "/services/technology-advisory", icon: Users, desc: "Strategic technology guidance" },
  { name: "AI Development", href: "/services/ai-development", icon: Code, desc: "Artificial intelligence solutions" },
  { name: "Cyber Security", href: "/services/cybersecurity", icon: Shield, desc: "Advanced security solutions" },
  ]

  const industries = [
    { name: "Healthcare", href: "/industries/healthcare", icon: Stethoscope, desc: "HIPAA-compliant solutions" },
    { name: "Financial Services", href: "/industries/financial", icon: Briefcase, desc: "Secure banking technology" },
    { name: "Real Estate", href: "/industries/real-estate", icon: Home, desc: "Property management systems" },
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, desc: "Industrial IoT solutions" },
    { name: "Education", href: "/industries/education", icon: GraduationCap, desc: "Learning management systems" },
    { name: "Legal", href: "/industries/legal", icon: Scale, desc: "Case management solutions" },
  ]

  const resources = [
    { 
      name: "Case Studies", 
      href: "#case-studies", 
      icon: FileText,
      action: () => {
        const caseStudiesSection = document.getElementById('case-studies-section');
        if (caseStudiesSection) {
          caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { name: "Blog", href: "https://orbitztechnology.com/blog", icon: Presentation },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video Container with Smooth Transitions */}
          <div className="relative w-full h-full">
            {videoContent.map((content, index) => (
              <div
                key={content.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentVideoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <video
                  key={`video-${content.id}-${currentVideoIndex}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-1000"
                  style={{ filter: "brightness(0.7)" }}
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(console.error);
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <source src={content.videoSrc} type="video/mp4" />
                </video>
                
                {/* Dynamic Gradient Overlay with enhanced animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${content.overlayStyle} pointer-events-none animate-pulse-glow`}></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Animated Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce-in animation-delay-100"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-bounce-in animation-delay-300"></div>
            <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-white/30 rounded-full animate-bounce-in animation-delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce-in animation-delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/35 rounded-full animate-bounce-in animation-delay-800"></div>
          </div>
        </div>

        {/* Dynamic Content with enhanced animations */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-slide-in-bottom">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span 
                key={`line1-${currentVideoIndex}`}
                className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-text-reveal"
              >
                {videoContent[currentVideoIndex].title.line1}
              </span>
              <span 
                key={`line2-${currentVideoIndex}`}
                className="block bg-gradient-to-r from-pink-100 via-white to-purple-100 bg-clip-text text-transparent animate-text-reveal animation-delay-200"
              >
                {videoContent[currentVideoIndex].title.line2}
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-scale animation-delay-400">
            <p 
              key={`desc-${currentVideoIndex}`}
              className="text-base md:text-lg mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed font-light animate-slide-in-bottom animation-delay-500"
            >
              {videoContent[currentVideoIndex].description}
            </p>
          </div>

          <div className="animate-slide-in-bottom animation-delay-700">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-500 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transform hover-lift group"
                onClick={() => {
                  if (currentVideoIndex === 0) {
                    window.location.href = "/services"
                  } else {
                    window.location.href = "/services/ai-development"
                  }
                }}
              >
                {videoContent[currentVideoIndex].primaryButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-500 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transform"
                onClick={() => (window.location.href = "/contact")}
              >
                {videoContent[currentVideoIndex].secondaryButton}
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <span className="text-sm mb-3 font-medium tracking-wider uppercase">Explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Compact Top Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              SOLUTIONS INTEGRATOR
            </div>
            <h1 className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium animate-fade-in-up">
              As the leading Solutions Integrator, our experts solve our clients' technology challenges by combining the right 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> hardware, software, and services</span>.
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Streamlined Content */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                SOLUTIONS
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
                See and surpass<br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent animate-gradient-x">
                  what's possible
                </span>
              </h2>

              {/* Simplified Feature highlights */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Expert Solutions</p>
                    <p className="text-xs text-gray-600">Tailored Technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animation-delay-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Proven Results</p>
                    <p className="text-xs text-gray-600">Industry Leaders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Simplified Description */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empowering Business Success</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    By blending the right technologies and strategies, we empower businesses to <strong>simplify complexity and drive success</strong>.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Go beyond the expected. Discover the full scope of our <span className="text-purple-600 font-medium">AI and technology expertise</span>.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We partner with you to identify the right strategies, tools, and solutions that drive innovation, efficiency, and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities Section - Moved from below */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">IT Capabilities That Power Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300">
              We provide comprehensive technology solutions that drive digital transformation and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Technology Advisory */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">Technology Advisory</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-700">
                  We help businesses improve operations through tailored software solutions aligned with business goals and technical capacity.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Implementation Strategy</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Technology Advisory</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Business Consulting</span>
                  </li>
                </ul>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 text-sm font-semibold mt-auto group hover-glow">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Development */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-600">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-700">AI Development</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Custom-built AI solutions with advanced machine learning models and NLP systems for actionable insights and smarter decisions.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>AI Assistants & Chatbots</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Custom LLMs</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>NLP Solutions</span>
                  </li>
                </ul>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 text-sm font-semibold mt-auto group hover-glow">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Software Development */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromLeft delay-600 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-700">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Software Development</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Full-cycle software development for enterprises, SMBs, and startups, backed by 20+ years of expertise and innovation.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Custom Development</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Platform Implementation</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>App Modernization</span>
                  </li>
                </ul>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 text-sm font-semibold mt-auto group hover-glow">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Cyber Security */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-red-50 to-orange-50 h-full animate-slideInFromBottom delay-700 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-800">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Cyber Security</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Comprehensive cybersecurity services protecting organizational IT assets and building resilient digital ecosystems.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Software Security</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Network Monitoring</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Infrastructure Protection</span>
                  </li>
                </ul>
                <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0 text-sm font-semibold mt-auto group hover-glow">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Managed IT Services */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-cyan-50 to-blue-50 h-full animate-slideInFromRight delay-800 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-800">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Managed IT Services</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Comprehensive managed IT services optimizing environments by integrating specialists with in-house teams.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Software Management</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Infrastructure Management</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>24/7 Monitoring</span>
                  </li>
                </ul>
                <Button variant="ghost" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 p-0 text-sm font-semibold mt-auto group hover-glow">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Partners Section - Moved below IT Capabilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">Our Partners</h2>
            <p className="text-xl text-gray-600 animate-fadeInScale delay-300">Trusted by industry leaders and innovators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center items-center">
            {/* AWS */}
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-slideInFromLeft delay-400">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all hover-lift hover-scale">
                <img src="/aws.png" alt="AWS" className="max-h-12 max-w-full object-contain animate-bounceIn delay-500" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1 animate-fadeInScale delay-600">AWS</span>
            </a>
            {/* Insight */}
            <a href="https://www.insight.com/en_US/home.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-slideInFromBottom delay-500">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all hover-lift hover-scale">
                <img src="/insight-logo.png" alt="Insight" className="max-h-12 max-w-full object-contain animate-bounceIn delay-600" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1 animate-fadeInScale delay-700">Insight</span>
            </a>
            {/* Microsoft */}
            <a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-slideInFromLeft delay-600">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all hover-lift hover-scale">
                <img src="/microsoft.png" alt="Microsoft" className="max-h-12 max-w-full object-contain animate-bounceIn delay-700" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1 animate-fadeInScale delay-800">Microsoft</span>
            </a>
            {/* Weave */}
            <a href="https://www.getweave.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-slideInFromBottom delay-700">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all hover-lift hover-scale">
                <img src="/weave-logo.png" alt="Weave" className="max-h-12 max-w-full object-contain animate-bounceIn delay-800" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1 animate-fadeInScale delay-800">Weave</span>
            </a>
            {/* Google */}
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-slideInFromRight delay-800">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all hover-lift hover-scale">
                <img src="/google.png" alt="Google" className="max-h-12 max-w-full object-contain animate-bounceIn delay-800" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1 animate-fadeInScale delay-800">Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Slalom Inspired Design */}
      <section id="case-studies-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">Success Stories & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300">Discover how we've helped businesses transform with cutting-edge technology solutions</p>
          </div>
          
          {/* Horizontal Scrollable Case Studies with Image Focus */}
          <div className="relative animate-slideInFromLeft delay-400">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-8 pb-6" style={{ width: 'max-content' }}>
                
                {/* Case Study 1 - Financial Services CRM */}
                <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer animate-slideInFromLeft delay-500 hover-lift"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/business-success.png" 
                      alt="Financial Services CRM Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fadeInScale delay-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold animate-bounceIn delay-700">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-blue-300 text-sm font-medium mb-2 block animate-slideInFromBottom delay-800">Financial Services</span>
                      <h3 className="text-white text-xl font-bold leading-tight animate-text-reveal delay-800">CRM Cloud Migration with AI Integration</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 animate-fadeInScale delay-800">
                      Complete transformation from on-premise Microsoft Dynamics CRM to Dynamics 365 Online with AI-powered Copilot implementation, delivering enhanced customer insights and streamlined operations.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">AI Ready</div>
                          <div className="text-xs text-gray-500">Platform</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">40%</div>
                          <div className="text-xs text-gray-500">Efficiency</div>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 - Technology Marketing */}
                <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/ai-neural-network-data.png" 
                      alt="Marketing Technology Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-purple-300 text-sm font-medium mb-2 block">Technology</span>
                      <h3 className="text-white text-xl font-bold leading-tight">Global Marketing Tech Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Revolutionized email marketing and ABM processes with Stensul and Folloze implementation, dramatically reducing campaign time-to-market and improving engagement rates.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">50%</div>
                          <div className="text-xs text-gray-500">Time Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">3x</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>
                      <div className="flex items-center text-purple-600 text-sm font-semibold group-hover:text-purple-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 3 - Commercial Real Estate */}
                <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/modern-office-colorful-lighting.png" 
                      alt="Real Estate CRM Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-green-300 text-sm font-medium mb-2 block">Real Estate</span>
                      <h3 className="text-white text-xl font-bold leading-tight">CRM Cloud Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Seamless migration of Dynamics CRM to cloud with custom application development for Americas Markets Teams, featuring PeopleSoft integration and enhanced workflow automation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">Enhanced</div>
                          <div className="text-xs text-gray-500">Workflow</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">Cloud</div>
                          <div className="text-xs text-gray-500">Ready</div>
                        </div>
                      </div>
                      <div className="flex items-center text-green-600 text-sm font-semibold group-hover:text-green-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 4 - Heavy Equipment Industry */}
                <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/modern-data-center.png" 
                      alt="Heavy Equipment CRM & Service Cloud" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-orange-300 text-sm font-medium mb-2 block">Manufacturing</span>
                      <h3 className="text-white text-xl font-bold leading-tight">CRM & Service Cloud Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Comprehensive CRM modernization and Service Cloud-based Call Center implementation for heavy equipment industry, achieving significant operational improvements and cost reductions.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">20%</div>
                          <div className="text-xs text-gray-500">Cost Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">Modern</div>
                          <div className="text-xs text-gray-500">Platform</div>
                        </div>
                      </div>
                      <div className="flex items-center text-orange-600 text-sm font-semibold group-hover:text-orange-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Post 1 - Latest Insights */}
                <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/blog")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/practicee-ehr.png" 
                      alt="AI in Healthcare" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-indigo-300 text-sm font-medium mb-2 block">Healthcare Technology</span>
                      <h3 className="text-white text-xl font-bold leading-tight">AI Revolution in Healthcare</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Exploring how artificial intelligence is transforming patient care, streamlining operations, and revolutionizing healthcare delivery in the digital age.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">5 min read</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">Jan 15, 2025</span>
                      </div>
                      <div className="flex items-center text-indigo-600 text-sm font-semibold group-hover:text-indigo-700 transition-colors">
                        <span>Read article</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Enhanced Scroll Navigation */}
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10">
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dual CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/resources/case-studies")}
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={() => (window.location.href = "/resources/blog")}
            >
              Read Latest Insights
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Transforming Your Business with Strategic Technology
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
                Orbitz Technology delivers digital transformation and measurable growth through innovative IT solutions and deep industry expertise.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600">
                      Advanced cybersecurity frameworks including HIPAA, PCI DSS, NIST, and GDPR compliance to protect
                      your most valuable assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Cloud Architecture</h3>
                    <p className="text-gray-600">
                      Future-proof cloud solutions that grow with your business, ensuring optimal performance and
                      cost-efficiency at every stage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Software Excellence</h3>
                    <p className="text-gray-600">
                      Bespoke applications designed specifically for your workflow, from mobile apps to enterprise CRM
                      and ERP systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Schedule Strategic Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
                  onClick={() => (window.location.href = "/resources/case-studies")}
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">System Uptime</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Expert Support</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Satisfied Clients</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">Our Work Process</h2>
            <p className="text-xl text-gray-600 animate-fadeInScale delay-300">A proven 4-step approach to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md animate-bounceIn delay-500 pulse-glow">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 animate-fadeInScale delay-600">Select a Project</h3>
                <p className="text-gray-600 text-base text-center animate-slideInFromBottom delay-700">We work with you to identify the right technology solution for your business needs.</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md animate-bounceIn delay-600 pulse-glow">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 animate-fadeInScale delay-700">Project Analysis</h3>
                <p className="text-gray-600 text-base text-center animate-slideInFromBottom delay-800">Our experts analyze your requirements and create a comprehensive project plan.</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md animate-bounceIn delay-700 pulse-glow">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 animate-fadeInScale delay-800">Plan & Execute</h3>
                <p className="text-gray-600 text-base text-center animate-slideInFromBottom delay-800">We implement the solution with careful planning and expert execution.</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md animate-bounceIn delay-800 pulse-glow">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 animate-fadeInScale delay-800">Deliver Results</h3>
                <p className="text-gray-600 text-base text-center animate-slideInFromBottom delay-800">We deliver measurable results and provide ongoing support for your success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">What makes Orbitz Technology a top development company</h2>
            <p className="text-xl text-gray-600 animate-fadeInScale delay-300">Why industry leaders choose us as their technology partner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-600">Business-First Philosophy</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-700">
                  We prioritize your business objectives over implementing technology for technology's sake. Our approach ensures every solution directly contributes to your bottom line and operational efficiency.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    ROI-focused implementations
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Stakeholder alignment process
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Measurable business outcomes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-700">Proactive Excellence</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  Our proactive monitoring and maintenance approach prevents issues before they impact your business. We don't just fix problems—we prevent them from occurring.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    24/7 system monitoring
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Predictive maintenance
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Automated issue resolution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromRight delay-600 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-700">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-800">Enterprise Security</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  Comprehensive cybersecurity that goes beyond basic protection. We implement enterprise-grade security frameworks tailored to your industry's specific compliance requirements.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Multi-layered security architecture
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Compliance automation
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Threat intelligence integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 h-full animate-slideInFromLeft delay-700 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-800">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-800">Dedicated Partnership</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  You're not just a client—you're a partner. Our dedicated account management ensures consistent communication and strategic alignment with your evolving business needs.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Quarterly business reviews
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Strategic technology roadmaps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-indigo-50 h-full animate-slideInFromBottom delay-800 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-800">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Scalable Innovation</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Our solutions are designed to scale with your growth. From startup to enterprise, our technology infrastructure adapts to your changing needs without disruption.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Elastic cloud architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Modular system design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Future-proof technology stack
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Proven Results</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Our track record speaks for itself. With over 500 successful implementations and a 99.9% client satisfaction rate, we deliver measurable results that drive business growth.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    500+ successful projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    99.9% client satisfaction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Industry-leading uptime
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-bottom">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-gray-600 animate-fade-in-scale animation-delay-200">
              We leverage the most advanced technologies to deliver superior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {/* Cloud Platforms */}
            <div className="flex flex-col h-full animate-slide-in-left animation-delay-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center min-h-[28px]">Cloud Platforms</h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 bg-blue-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-100">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-8 h-8 object-contain hover-scale" />
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Microsoft Azure</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-200">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" alt="AWS" className="w-8 h-8 object-contain hover-scale" />
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Amazon AWS</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-300">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-8 h-8 object-contain hover-scale" />
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Google Cloud</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-400">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg" alt="Hybrid" className="w-8 h-8 object-contain hover-scale" />
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Hybrid Solutions</span>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="flex flex-col h-full animate-slide-in-left animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center min-h-[28px]">Development</h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 bg-green-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-500">
                  <div className="flex items-center gap-1 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4 object-contain hover-scale" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-4 h-4 object-contain hover-scale" />
                  </div>
                  <span className="text-green-600 font-semibold text-sm">React & Next.js</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-600">
                  <div className="flex items-center gap-1 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4 object-contain hover-scale" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 object-contain hover-scale" />
                  </div>
                  <span className="text-green-600 font-semibold text-sm">Node.js & Python</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-xl py-3 px-4 min-h-[56px] hover-lift hover-glow transition-all duration-300 animate-card-flip animation-delay-700">
                  <div className="flex items-center gap-1 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" className="w-4 h-4 object-contain hover-scale" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-4 h-4 object-contain hover-scale" />
                  </div>
                  <span className="text-green-600 font-semibold text-sm">.NET & C#</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-1 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="iOS" className="w-4 h-4 object-contain" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-green-600 font-semibold text-sm">Mobile (iOS/Android)</span>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center min-h-[28px]">Databases</h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 bg-purple-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-purple-600 font-semibold text-sm">SQL Server</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-purple-600 font-semibold text-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-purple-600 font-semibold text-sm">MongoDB</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-purple-600 font-semibold text-sm">Redis Cache</span>
                </div>
              </div>
            </div>

            {/* SAAS Platforms */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center min-h-[28px]">SAAS Platforms</h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 bg-orange-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="/Technologies Logo/salesforce_logo.png" alt="Salesforce" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-orange-600 font-semibold text-sm">Salesforce</span>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="/Technologies Logo/hubspot_logo.png" alt="HubSpot" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-orange-600 font-semibold text-sm">HubSpot</span>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="/Technologies Logo/adobe_logo.png" alt="Adobe" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-orange-600 font-semibold text-sm">Adobe Suite</span>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="/Technologies Logo/microsoft_dynamic_logo.png" alt="Microsoft Dynamics" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-orange-600 font-semibold text-sm">Microsoft Dynamics</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center min-h-[28px]">Security</h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 bg-red-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zeromq.svg" alt="Zero Trust" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-red-600 font-semibold text-sm">Zero Trust Architecture</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg" alt="MFA" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-red-600 font-semibold text-sm">Multi-Factor Auth</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/letsencrypt.svg" alt="Encryption" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-red-600 font-semibold text-sm">Encryption at Rest</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-xl py-3 px-4 min-h-[56px]">
                  <div className="flex items-center gap-2 min-w-[32px]">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/splunk.svg" alt="SIEM" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-red-600 font-semibold text-sm">SIEM Solutions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold"
              onClick={() => (window.location.href = "/technology")}
            >
              Explore Our Technology Capabilities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - New Professional Blue Design */}
      <section id="contact" className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`,
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-reveal delay-200">Ready to empower your business?</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto animate-fadeInScale delay-300">
              Let's discuss how Orbitz Technology can help you achieve your goals with custom IT solutions.
            </p>
          </div>
          
          <div className="mb-10 animate-bounceIn delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group pulse-glow hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </section>
      
      {/* AI Chatbot */}
      <Chatbot whatsappNumber="+13196104889" />
    </div>
  )
}
