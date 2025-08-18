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

      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <img src="/logo2.png" alt="Orbitz Technology Logo" className="w-14 h-14 object-contain drop-shadow-lg" style={{background: 'white', borderRadius: '12px', padding: '4px', border: '2px solid #7c3aed'}} />
                <span className="text-2xl font-extrabold text-gray-900 align-middle tracking-tight">Orbitz Technology</span>
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-700 font-medium transition-colors focus:outline-none flex items-center">Services <span className="ml-1">▼</span></button>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                    <a href="/services/managed-it" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Managed IT</a>
                    <a href="/services/software-development" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Software Development</a>
                    <a href="/services/it-consulting" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">IT Consulting</a>
                    <a href="/services/cybersecurity" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Cybersecurity</a>
                  </div>
                </div>
                {/* Industries Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-700 font-medium transition-colors focus:outline-none flex items-center">Industries <span className="ml-1">▼</span></button>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                    <a href="/industries/healthcare" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Healthcare</a>
                    <a href="/industries/financial" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Financial Services</a>
                    <a href="/industries/real-estate" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Real Estate</a>
                    <a href="/industries/manufacturing" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Manufacturing</a>
                  </div>
                </div>
                {/* Resources Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-700 font-medium transition-colors focus:outline-none flex items-center">Resources <span className="ml-1">▼</span></button>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                    <a href="/resources/case-studies" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Case Studies</a>
                    <a href="/resources/whitepapers" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Whitepapers</a>
                    <a href="/resources/blog" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Blog</a>
                    <a href="/resources/webinars" className="block px-6 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">Webinars</a>
                  </div>
                </div>
                <a href="/contact" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Contact</a>
                <a href="/about" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">About</a>
              </div>
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
                <a href="/contact" className="ml-4 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition">Get Started</a>
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
              <a href="/services/managed-it" className="block py-2 text-gray-700">Managed IT</a>
              <a href="/services/software-development" className="block py-2 text-gray-700">Software Development</a>
              <a href="/services/it-consulting" className="block py-2 text-gray-700">IT Consulting</a>
              <a href="/services/cybersecurity" className="block py-2 text-gray-700">Cybersecurity</a>
              <a href="/industries/healthcare" className="block py-2 text-gray-700">Healthcare</a>
              <a href="/industries/financial" className="block py-2 text-gray-700">Financial Services</a>
              <a href="/industries/real-estate" className="block py-2 text-gray-700">Real Estate</a>
              <a href="/industries/manufacturing" className="block py-2 text-gray-700">Manufacturing</a>
              <a href="/resources/case-studies" className="block py-2 text-gray-700">Case Studies</a>
              <a href="/resources/whitepapers" className="block py-2 text-gray-700">Whitepapers</a>
              <a href="/resources/blog" className="block py-2 text-gray-700">Blog</a>
              <a href="/resources/webinars" className="block py-2 text-gray-700">Webinars</a>
              <a href="/contact" className="block py-2 text-gray-700">Contact</a>
              <a href="/about" className="block py-2 text-gray-700">About</a>
              <a href="/contact" className="block py-2 text-white bg-purple-600 rounded-full font-semibold text-center">Get Started</a>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                One partner.
              </span>
              <span className="block bg-gradient-to-r from-pink-100 via-white to-purple-100 bg-clip-text text-transparent">
                Infinite possibilities.
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-500">
            <p className="text-base md:text-lg mb-8 text-white/95 max-w-2xl mx-auto leading-relaxed font-light">
              Custom IT Solutions for Business Growth & Success. Every business is unique, so Orbitz Technology creates tailored IT strategies that grow with your business.
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
                Get Started
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
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 font-medium mb-2 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-semibold shadow-sm">Real results. Real impact.</span>
              <br />
              <span className="block mt-2">See how we've helped businesses achieve measurable growth and transformation.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    {/* Professional Healthcare Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">HealthCare Plus</h4>
                    <p className="text-sm text-gray-600">Healthcare Provider</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "Orbitz Technology transformed our patient management system, reducing appointment scheduling time by 75% and improving patient satisfaction scores significantly."
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
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    {/* Professional Finance Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">Financial Solutions Inc</h4>
                    <p className="text-sm text-gray-600">Financial Services</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "Their cybersecurity implementation saved us from potential breaches and ensured PCI DSS compliance. Our clients trust us more than ever."
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
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    {/* Professional Real Estate Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">RealEstate Pro</h4>
                    <p className="text-sm text-gray-600">Real Estate</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "The custom CRM system they built increased our lead conversion rate by 60% and streamlined our entire sales process."
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

      {/* Our Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders and innovators</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
            {/* Insight */}
            <a href="https://www.insight.com/en_US/home.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/insight-logo.png" alt="Insight" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">Insight</span>
            </a>
            {/* Privacy Evolved */}
            <a href="https://www.privacyevolved.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/privacy-evolved-logo.png" alt="Privacy Evolved" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">Privacy Evolved</span>
            </a>
            {/* CMIT Solutions */}
            <a href="https://cmitsolutions.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/cmit-logo.png" alt="CMIT Solutions" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">CMIT Solutions</span>
            </a>
            {/* NexusTek */}
            <a href="https://www.nexustek.com/managed-it-services" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/nexustek-logo.png" alt="NexusTek" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">NexusTek</span>
            </a>
            {/* Growexx */}
            <a href="https://www.growexx.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/growexx-logo.png" alt="Growexx" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">Growexx</span>
            </a>
            {/* Weave */}
            <a href="https://www.getweave.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 mb-2 group-hover:shadow-xl transition-all">
                <img src="/weave-logo.png" alt="Weave" className="max-h-12 max-w-full object-contain" />
              </div>
              <span className="text-gray-800 font-semibold text-base mt-1">Weave</span>
            </a>
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
            {/* Managed IT Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center mr-4">
                    {/* Professional Shield Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5.25-3.75 10-8 10s-8-4.75-8-10V7l8-4z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Managed IT Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
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

            {/* Software Development */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center mr-4">
                    {/* Professional Code Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Software Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
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

            {/* IT Consulting */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center mr-4">
                    {/* Professional Consulting Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">IT Consulting</h3>
                </div>
                <p className="text-gray-600 mb-4">
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

      {/* Work Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600">A proven 4-step approach to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">Select a Project</h3>
                <p className="text-gray-600 text-base text-center">We work with you to identify the right technology solution for your business needs.</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">Project Analysis</h3>
                <p className="text-gray-600 text-base text-center">Our experts analyze your requirements and create a comprehensive project plan.</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">Plan & Execute</h3>
                <p className="text-gray-600 text-base text-center">We implement the solution with careful planning and expert execution.</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">Deliver Results</h3>
                <p className="text-gray-600 text-base text-center">We deliver measurable results and provide ongoing support for your success.</p>
              </CardContent>
            </Card>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-gray-600">
              We leverage the most advanced technologies to deliver superior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Cloud Platforms */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-8 h-8 object-contain" />
                  <span className="text-blue-600 font-semibold">Microsoft Azure</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" alt="AWS" className="w-8 h-8 object-contain" />
                  <span className="text-blue-600 font-semibold">Amazon AWS</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-8 h-8 object-contain" />
                  <span className="text-blue-600 font-semibold">Google Cloud</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg" alt="Hybrid" className="w-8 h-8 object-contain" />
                  <span className="text-blue-600 font-semibold">Hybrid Solutions</span>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 bg-green-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 object-contain" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 object-contain" />
                  <span className="text-green-600 font-semibold">React & Next.js</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-green-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 object-contain" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 object-contain" />
                  <span className="text-green-600 font-semibold">Node.js & Python</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-green-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" className="w-8 h-8 object-contain" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-8 h-8 object-contain" />
                  <span className="text-green-600 font-semibold">.NET & C#</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-green-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="iOS" className="w-8 h-8 object-contain" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" className="w-8 h-8 object-contain" />
                  <span className="text-green-600 font-semibold">Mobile (iOS/Android)</span>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Databases</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 bg-purple-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="w-8 h-8 object-contain" />
                  <span className="text-purple-600 font-semibold">SQL Server</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-purple-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 object-contain" />
                  <span className="text-purple-600 font-semibold">PostgreSQL</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-purple-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 object-contain" />
                  <span className="text-purple-600 font-semibold">MongoDB</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-purple-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-8 h-8 object-contain" />
                  <span className="text-purple-600 font-semibold">Redis Cache</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 bg-red-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zeromq.svg" alt="Zero Trust" className="w-8 h-8 object-contain" />
                  <span className="text-red-600 font-semibold">Zero Trust Architecture</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-red-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg" alt="MFA" className="w-8 h-8 object-contain" />
                  <span className="text-red-600 font-semibold">Multi-Factor Auth</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-red-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/letsencrypt.svg" alt="Encryption" className="w-8 h-8 object-contain" />
                  <span className="text-red-600 font-semibold">Encryption at Rest</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-red-50 rounded-xl py-3 px-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/splunk.svg" alt="SIEM" className="w-8 h-8 object-contain" />
                  <span className="text-red-600 font-semibold">SIEM Solutions</span>
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
                <img src="/logo2.png" alt="Orbitz Technology Logo" className="w-12 h-12 object-contain drop-shadow-lg bg-white rounded-lg p-2" />
                <span className="text-2xl font-bold text-white align-middle">Orbitz Technology</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-xs">Empowering businesses with innovative IT solutions, security, and digital transformation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>
                <li><a href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Managed IT</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400"><Phone className="w-5 h-5" /> +1 (319) 610-4889</li>
                <li className="flex items-center gap-2 text-gray-400"><Mail className="w-5 h-5" /> info@orbitztechnology.com</li>
                <li className="flex items-center gap-2 text-gray-400"><Globe className="w-5 h-5" /> 14 Kimberley Cir, Oak Brook, IL 60523</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.56 0-1.1-.03-1.64-.1A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.72-.07-6.9-.07-8.62 0-1.72.07-2.88.36-3.8.77a6.56 6.56 0 0 0-2.36 1.54A6.56 6.56 0 0 0 .77 7.384c-.41.92-.7 2.08-.77 3.8-.07 1.72-.07 6.9 0 8.62.07 1.72.36 2.88.77 3.8a6.56 6.56 0 0 0 1.54 2.36 6.56 6.56 0 0 0 2.36 1.54c.92.41 2.08.7 3.8.77 1.72.07 6.9.07 8.62 0 1.72-.07 2.88-.36 3.8-.77a6.56 6.56 0 0 0 2.36-1.54 6.56 6.56 0 0 0 1.54-2.36c.41-.92.7-2.08.77-3.8.07-1.72.07-6.9 0-8.62-.07-1.72-.36-2.88-.77-3.8a6.56 6.56 0 0 0-1.54-2.36 6.56 6.56 0 0 0-2.36-1.54c-.92-.41-2.08-.7-3.8-.77zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm6.4-10.8a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.95h-3.56v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z"/></svg></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Orbitz Technology. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
