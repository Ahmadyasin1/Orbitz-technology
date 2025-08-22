
"use client"
import { ArrowRight, Shield, Clock, Users, Phone, Server, Cloud, Lock, RefreshCw, ShoppingCart, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Managed & Co-Managed IT Services
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-pink-100 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              At Orbitz Technology, we provide Managed and Co-Managed IT Services that empower businesses to operate securely, efficiently, and without interruption. Whether you need a dedicated IT partner or an extension of your existing team, our services are built to reduce downtime, improve security, and support growth.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Section with Dropdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-text-reveal delay-200">Company</h2>
              <div className="relative inline-block text-left">
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="company-menu-button" aria-expanded="true" aria-haspopup="true">
                  Company Pages
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.063a.75.75 0 111.08 1.04l-4.25 4.667a.75.75 0 01-1.08 0l-4.25-4.667a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                </button>
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="company-menu-button">
                    <a href="/company/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700" role="menuitem">Overview</a>
                    <a href="/company/our-approach" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700" role="menuitem">Our Approach</a>
                    <a href="/company/our-partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700" role="menuitem">Our Partners</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-md mt-6">Orbitz Technology is more than an MSP, we’re a strategic IT partner dedicated to helping businesses unlock the full potential of their technology. With our team of experts, advanced tools, and proactive support, we keep your IT reliable, scalable, and secure so you can focus on what you do best.</p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Our Approach</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">Assessment & Discovery | Planning & Customization | Implementation & Support | Monitoring & Improvement</p>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <Shield className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Assessment & Discovery</h3>
              <p className="text-gray-600 text-sm">We evaluate your IT infrastructure to uncover strengths, weaknesses, and risks.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <Server className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-orange-500 mb-2">Planning & Customization</h3>
              <p className="text-gray-600 text-sm">We design tailored solutions that align with your goals and budget.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-600">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-600 mb-2">Implementation & Support</h3>
              <p className="text-gray-600 text-sm">From onboarding to ongoing management, we deliver seamless operations.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromRight delay-700">
              <RefreshCw className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-purple-600 mb-2">Monitoring & Improvement</h3>
              <p className="text-gray-600 text-sm">We proactively monitor and continuously optimize your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Why Clients Choose Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">End-to-End IT Support | Predictable Pricing | Proactive Protection | Flexible Engagement | Scalable Solutions | Trusted Expertise</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <div className="flex items-center gap-4 mb-2">
                <Shield className="w-10 h-10 text-pink-600" />
                <h3 className="text-lg font-bold text-pink-600 leading-tight">End-to-End IT Support</h3>
              </div>
              <p className="text-gray-600 text-sm">From daily troubleshooting to long-term IT strategy</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <div className="flex items-center gap-4 mb-2">
                <Server className="w-10 h-10 text-orange-500" />
                <h3 className="text-lg font-bold text-orange-500 leading-tight">Predictable Pricing</h3>
              </div>
              <p className="text-gray-600 text-sm">Flat-rate packages with no hidden surprises</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 shadow-md animate-slideInFromRight delay-600">
              <div className="flex items-center gap-4 mb-2">
                <Lock className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-600 leading-tight">Proactive Protection</h3>
              </div>
              <p className="text-gray-600 text-sm">24/7 monitoring and advanced security defenses</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-700">
              <div className="flex items-center gap-4 mb-2">
                <Users className="w-10 h-10 text-orange-500" />
                <h3 className="text-lg font-bold text-orange-500 leading-tight">Flexible Engagement</h3>
              </div>
              <p className="text-gray-600 text-sm">Choose full Managed IT or Co-Managed IT</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-800">
              <div className="flex items-center gap-4 mb-2">
                <Cloud className="w-10 h-10 text-purple-600" />
                <h3 className="text-lg font-bold text-purple-600 leading-tight">Scalable Solutions</h3>
              </div>
              <p className="text-gray-600 text-sm">Services that adapt as your business grows</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-8 shadow-md animate-slideInFromRight delay-900">
              <Server className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Trusted Expertise</h3>
              <p className="text-gray-600 text-sm">Certified professionals with proven MSP experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Services at a Glance</h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">A quick look at our core offerings</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl animate-slideInFromBottom delay-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Service Area</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">24/7 Help Desk Support</td>
                    <td className="px-8 py-6 text-gray-700">Always-on assistance from skilled engineers, not generic call-center agents.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Remote & On-Site IT Support</td>
                    <td className="px-8 py-6 text-gray-700">Quick resolutions via secure remote access or in-person visits when needed.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Server & Network Management</td>
                    <td className="px-8 py-6 text-gray-700">Proactive monitoring, patching, updates, and performance optimization.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Cloud Services & Migration</td>
                    <td className="px-8 py-6 text-gray-700">Secure, seamless cloud adoption and management tailored to your business.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Cybersecurity & Compliance</td>
                    <td className="px-8 py-6 text-gray-700">Endpoint protection, threat detection, and compliance management (HIPAA, PCI).</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Backup & Disaster Recovery</td>
                    <td className="px-8 py-6 text-gray-700">Automated backups and reliable recovery to protect against data loss.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">IT Procurement & Asset Mgmt</td>
                    <td className="px-8 py-6 text-gray-700">Streamlined purchasing, renewals, and lifecycle management of IT assets.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Onboarding & Offboarding</td>
                    <td className="px-8 py-6 text-gray-700">Smooth employee setup and secure deactivation to maintain compliance.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Co-Managed IT Services</td>
                    <td className="px-8 py-6 text-gray-700">Supplemental expertise, tools, and monitoring to support internal IT teams.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves IT that works seamlessly, securely, and strategically.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver Managed & Co-Managed IT Services that eliminate headaches, reduce risks, and unlock growth opportunities.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
            <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Contact Us Today <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
