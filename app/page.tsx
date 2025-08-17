"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
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
} from "lucide-react"

export default function OrbitzTechnologyHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-gray-600">
            <span>24/7 Support</span>
            <span>Contact our team</span>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>🌐 Oak Brook, IL</span>
            <span>📞 +1 (319) 610-4889</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo2.png" alt="Orbitz Technology Logo" className="w-14 h-14 object-contain drop-shadow-lg" style={{background: 'white', borderRadius: '8px', padding: '4px'}} />
              <span className="text-2xl font-bold text-gray-900 align-middle">Orbitz Technology</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
                    Services <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4 space-y-2">
                      <a
                        href="/services/managed-it"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Managed IT Services
                      </a>
                      <a
                        href="/services/software-development"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Software Development
                      </a>
                      <a
                        href="/services/it-consulting"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        IT Consulting
                      </a>
                      <a
                        href="/services/cybersecurity"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Cybersecurity
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
                    Industries <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4 space-y-2">
                      <a
                        href="/industries/healthcare"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Healthcare
                      </a>
                      <a
                        href="/industries/financial"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Financial Services
                      </a>
                      <a
                        href="/industries/real-estate"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Real Estate
                      </a>
                      <a
                        href="/industries/manufacturing"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Manufacturing
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
                    Resources <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4 space-y-2">
                      <a
                        href="/resources/case-studies"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Case Studies
                      </a>
                      <a
                        href="/resources/whitepapers"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Whitepapers
                      </a>
                      <a
                        href="/resources/blog"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Blog
                      </a>
                      <a
                        href="/resources/webinars"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        Webinars
                      </a>
                    </div>
                  </div>
                </div>
                <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Contact
                </a>
                <a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="/services" className="block py-2 text-gray-700">
                Services
              </a>
              <a href="/industries" className="block py-2 text-gray-700">
                Industries
              </a>
              <a href="/resources" className="block py-2 text-gray-700">
                Resources
              </a>
              <a href="/contact" className="block py-2 text-gray-700">
                Contact
              </a>
              <a href="/about" className="block py-2 text-gray-700">
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Primary Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Fallback Image if video fails to load */}
          <noscript>
            <img src="/modern-data-center.png" alt="Fallback" className="w-full h-full object-cover" />
          </noscript>
          {/* Enhanced Gradient Overlay with Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-500/70 to-purple-700/80 animate-pulse pointer-events-none"></div>
          {/* Animated Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-ping animation-delay-3000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                One partner.
              </span>
              <span className="block bg-gradient-to-r from-pink-100 via-white to-purple-100 bg-clip-text text-transparent">
                Infinite possibilities.
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-500">
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
              Custom IT Solutions for Business Growth & Success. Every business is unique, so Orbitz Technology creates
              tailored IT strategies that grow with your business.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-1000">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-500 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transform"
                onClick={() => (window.location.href = "/about")}
              >
                Discover our capabilities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-500 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transform"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Free Consultation
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-sm mb-3 font-medium tracking-wider uppercase">Explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real businesses we've transformed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    HC
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">HealthCare Plus</h4>
                    <p className="text-sm text-gray-600">Healthcare Provider</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "Orbitz Technology transformed our patient management system, reducing appointment scheduling time by
                  75% and improving patient satisfaction scores significantly."
                </blockquote>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>HIPAA Compliance Achieved</span>
                  <span className="text-green-600 font-semibold">+75% Efficiency</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    FS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Solutions Inc</h4>
                    <p className="text-sm text-gray-600">Financial Services</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "Their cybersecurity implementation saved us from potential breaches and ensured PCI DSS compliance.
                  Our clients trust us more than ever."
                </blockquote>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Zero Security Incidents</span>
                  <span className="text-blue-600 font-semibold">100% Compliance</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    RE
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">RealEstate Pro</h4>
                    <p className="text-sm text-gray-600">Real Estate</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "The custom CRM system they built increased our lead conversion rate by 60% and streamlined our entire
                  sales process."
                </blockquote>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Custom CRM Solution</span>
                  <span className="text-purple-600 font-semibold">+60% Conversions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Clients served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Transforming Businesses Through Strategic Technology Innovation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Orbitz Technology, we don't just provide IT services—we architect digital transformations that propel
                your business into the future. Our comprehensive approach combines cutting-edge technology with deep
                industry expertise to deliver solutions that drive measurable growth.
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

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Capabilities That Power Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions that drive digital transformation and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Managed IT Services</h3>
                <p className="text-gray-600 mb-6">
                  We specialize in IT Support, Advanced Cybersecurity, Cloud and Software Architecture, and Provide
                  Service & Proactive Issue Management.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 IT Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cybersecurity & Compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cloud Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Disaster Recovery
                  </li>
                </ul>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                  Get More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Mobile apps (Android & iOS), custom software solutions (CRM, ERP, Marketing tools), AI bot
                  integration, CRM platforms.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Mobile App Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom CRM/ERP Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI Bot Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Marketing Tools
                  </li>
                </ul>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Get More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Project management, UI/UX design, business analysis, change management, quality testing, strategic
                  planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Project Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality Testing
                  </li>
                </ul>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                  Get More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Technology Solutions</h2>
            <p className="text-xl text-purple-200">Advanced capabilities that set us apart from the competition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero-Trust Security</h3>
              <p className="text-gray-300">
                Advanced security architecture that assumes no implicit trust and continuously validates every
                transaction.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-300">
                Intelligent automation and machine learning integration to optimize your business processes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Infrastructure</h3>
              <p className="text-gray-300">
                Worldwide cloud presence ensuring optimal performance and disaster recovery capabilities.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Certifications</h3>
              <p className="text-gray-300">
                Certified professionals with expertise in the latest technologies and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600">A proven 4-step approach to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Select a Project",
                desc: "We work with you to identify the right technology solution for your business needs.",
              },
              {
                step: "02",
                title: "Project Analysis",
                desc: "Our experts analyze your requirements and create a comprehensive project plan.",
              },
              {
                step: "03",
                title: "Plan & Execute",
                desc: "We implement the solution with careful planning and expert execution.",
              },
              {
                step: "04",
                title: "Deliver Results",
                desc: "We deliver measurable results and provide ongoing support for your success.",
              },
            ].map((process, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Orbitz Technology Advantage</h2>
            <p className="text-xl text-gray-600">Why industry leaders choose us as their technology partner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business-First Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  We prioritize your business objectives over implementing technology for technology's sake. Our
                  approach ensures every solution directly contributes to your bottom line and operational efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ROI-focused implementations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stakeholder alignment process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Measurable business outcomes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proactive Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Our proactive monitoring and maintenance approach prevents issues before they impact your business. We
                  don't just fix problems—we prevent them from occurring.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 system monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated issue resolution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cybersecurity that goes beyond basic protection. We implement enterprise-grade security
                  frameworks tailored to your industry's specific compliance requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-layered security architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Compliance automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Threat intelligence integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Partnership</h3>
                <p className="text-gray-600 mb-4">
                  You're not just a client—you're a partner. Our dedicated account management ensures consistent
                  communication and strategic alignment with your evolving business needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quarterly business reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Strategic technology roadmaps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Our solutions are designed to scale with your growth. From startup to enterprise, our technology
                  infrastructure adapts to your changing needs without disruption.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Elastic cloud architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modular system design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Future-proof technology stack
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600 mb-4">
                  Our track record speaks for itself. With over 500 successful implementations and a 99.9% client
                  satisfaction rate, we deliver measurable results that drive business growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    500+ successful projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    99.9% client satisfaction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Industry-leading uptime
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions for your industry with deep expertise</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Healthcare",
                icon: "🏥",
                desc: "HIPAA-compliant solutions, EHR integration, telemedicine platforms",
              },
              {
                name: "Financial & Insurance",
                icon: "🏦",
                desc: "Secure banking technology, compliance management, risk assessment",
              },
              { name: "Real Estate", icon: "🏢", desc: "Property management systems, CRM solutions, virtual tours" },
              {
                name: "Manufacturing",
                icon: "🏭",
                desc: "Industrial IoT, automation systems, supply chain management",
              },
              {
                name: "Education",
                icon: "🎓",
                desc: "Learning management systems, student portals, virtual classrooms",
              },
              { name: "Dental", icon: "🦷", desc: "Practice management software, patient scheduling, digital records" },
              { name: "Law Firms", icon: "⚖️", desc: "Case management solutions, document automation, client portals" },
              {
                name: "Small Business",
                icon: "🏪",
                desc: "Custom business solutions, workflow automation, growth tools",
              },
            ].map((industry, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-gray-600">
              We leverage the most advanced technologies to deliver superior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
              <div className="space-y-3">
                {["Microsoft Azure", "Amazon AWS", "Google Cloud", "Hybrid Solutions"].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-blue-600 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development</h3>
              <div className="space-y-3">
                {["React & Next.js", "Node.js & Python", ".NET & C#", "Mobile (iOS/Android)"].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-green-600 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Databases</h3>
              <div className="space-y-3">
                {["SQL Server", "PostgreSQL", "MongoDB", "Redis Cache"].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <span className="text-purple-600 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-3">
                {["Zero Trust Architecture", "Multi-Factor Auth", "Encryption at Rest", "SIEM Solutions"].map(
                  (tech, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <span className="text-red-600 font-medium">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Explore Our Technology Capabilities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch And Start Your Project</h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how Orbitz Technology can help you achieve your goals with custom IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
              onClick={() => (window.location.href = "/contact")}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Free Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-purple-100">+1 (319) 610-4889</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-purple-100">info@orbitztechnology.com</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-purple-100">14 Kimberley Cir, Oak Brook, IL 60523</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-xl font-bold">Orbitz Technology</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Custom IT Solutions for Business Growth & Success. Empowering small and mid-sized businesses with
                scalable technology solutions and industry-specific expertise.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@orbitztechnology.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (319) 610-4889</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>14 Kimberley Cir, Oak Brook, IL 60523, USA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Managed IT Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cybersecurity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Financial Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    24/7 Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Partners Section */}
          <div className="w-full flex flex-col items-center mb-8">
            <h3 className="text-lg font-semibold mb-2 text-white">Our Partners</h3>
            <div className="flex space-x-8 items-center">
              <a href="https://www.insight.com/en_US/home.html" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <img src="/placeholder-logo.png" alt="Insight Logo" className="w-12 h-12 object-contain bg-white rounded shadow" />
                <span className="text-gray-200 font-medium">Insight</span>
              </a>
              <a href="https://www.getweave.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <img src="/placeholder-logo.png" alt="Weave Logo" className="w-12 h-12 object-contain bg-white rounded shadow" />
                <span className="text-gray-200 font-medium">Weave</span>
              </a>
            </div>
          </div>
            <p className="text-gray-400 text-sm">© 2024 Orbitz Technology. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
