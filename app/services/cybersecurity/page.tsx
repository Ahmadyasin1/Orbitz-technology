
"use client"
import { ArrowRight, Shield, Lock, Eye, Phone, UserCheck, AlertTriangle, Globe, Users, Search, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Cyber Security Services
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-pink-100 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              At Orbitz Technology, we believe Cyber Security is more than just firewalls and antivirus. It’s about creating a resilient digital ecosystem where your business can thrive without fear of disruption. As a Managed Service Provider (MSP), we bring enterprise-level protection, strategic guidance, and human centric support to businesses of all sizes. Our mission is simple: to safeguard your data, people, and reputation against evolving cyber threats.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cyber Security Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Why Cyber Security Matters</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">With cyber threats evolving every day, your best defense is an intelligent, layered approach.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <UserCheck className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">People are the weak link</h3>
              <p className="text-gray-600 text-sm">Most breaches stem from human error. We help you close this gap with training and proactive systems.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <AlertTriangle className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-orange-500 mb-2">Ransomware & Malware</h3>
              <p className="text-gray-600 text-sm">Attackers target every vulnerability, every day. A robust approach stops them before they catch you off guard.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-md animate-slideInFromRight delay-600">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-600 mb-2">Compliance & Trust</h3>
              <p className="text-gray-600 text-sm">Your clients and regulators expect protection, and we help you deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">What We Do</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">End-to-end cyber security solutions that protect your business at every layer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromLeft delay-400 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Search className="w-10 h-10 text-pink-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">Assessment & Strategy</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-700">Identify risks, uncover vulnerabilities, and design a clear roadmap to stronger defenses.</p>
            </div>
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-orange-50 h-full animate-slideInFromBottom delay-500 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-10 h-10 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-700">Advanced Threat Detection & Response</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">24/7 monitoring, intrusion detection, and AI-powered threat response.</p>
            </div>
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50 h-full animate-slideInFromRight delay-600 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Endpoint & Network Security</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">Lock down every device, application, and access point.</p>
            </div>
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-purple-50 h-full animate-slideInFromLeft delay-700 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-10 h-10 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Identity & Access Management</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">Ensure only the right people access the right information, with MFA and zero-trust controls.</p>
            </div>
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-pink-50 h-full animate-slideInFromBottom delay-800 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-10 h-10 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Dark Web Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">Continuous scanning for compromised credentials and leaked company data.</p>
            </div>
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50 h-full animate-slideInFromRight delay-800 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Governance, Risk & Compliance (GRC)</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">Stay aligned with HIPAA, PCI, GDPR, and other industry regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Our Approach: Protect – Detect – Respond – Comply</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">A proven, systematic approach to deliver exceptional results.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <Search className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Assess & Strategize</h3>
              <p className="text-gray-600 text-sm">Learn, plan, and prioritize your defenses.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-orange-500 mb-2">Deploy the Shield</h3>
              <p className="text-gray-600 text-sm">Secure endpoints, access points, networks, and data.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-600">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-600 mb-2">Monitor & Alert</h3>
              <p className="text-gray-600 text-sm">Our SOC-style monitoring keeps threats in check, 24/7.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromRight delay-700">
              <Users className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-purple-600 mb-2">Train & Strengthen</h3>
              <p className="text-gray-600 text-sm">Arm your team with knowledge; reduce risk at the source.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromRight delay-800">
              <FileText className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Test & Adapt</h3>
              <p className="text-gray-600 text-sm">Validate your security, stay compliant, and evolve with an ever-changing threat landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Why Clients Choose Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">Comprehensive Coverage | Affordable Enterprise-Grade Security | Human-First Approach | Proactive Defense | Industry Expertise</p>
          </div>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <Shield className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-pink-600 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-sm">From risk assessments to compliance, training to 24/7 monitoring.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <Lock className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-orange-500 mb-2">Affordable Enterprise-Grade Security</h3>
              <p className="text-gray-600 text-sm">We deliver top-tier cybersecurity without the enterprise price tag.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-600">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-600 mb-2">Human-First Approach</h3>
              <p className="text-gray-600 text-sm">We explain solutions in plain English, not tech jargon, so you always feel confident and informed.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl p-8 shadow-md animate-slideInFromRight delay-700">
              <Eye className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-orange-500 mb-2">Proactive Defense</h3>
              <p className="text-gray-600 text-sm">Instead of waiting for attacks, we prevent, detect, and respond before they disrupt your business.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 shadow-md animate-slideInFromRight delay-800">
              <Globe className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-purple-600 mb-2">Industry Expertise</h3>
              <p className="text-gray-600 text-sm">With experience across healthcare, finance, legal, education, and more, we know your risks and how to protect against them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Our Offerings at a Glance</h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">A quick look at our core offerings</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl animate-slideInFromBottom delay-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Service Area</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What We Deliver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Risk Assessment & vCISO</td>
                    <td className="px-8 py-6 text-gray-700">Cybersecurity risk audits, roadmap development, and virtual CISO advisory.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Threat Detection & Response</td>
                    <td className="px-8 py-6 text-gray-700">24/7 Security Operations monitoring, Endpoint Detection & Response (EDR), Managed Detection & Response (MDR).</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Network & Endpoint Security</td>
                    <td className="px-8 py-6 text-gray-700">Firewall management, intrusion detection/prevention (IDPS), device and application protection.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Identity & Access Management</td>
                    <td className="px-8 py-6 text-gray-700">Multi-Factor Authentication (MFA), Zero-Trust security, privileged access controls.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Phishing & Awareness Training</td>
                    <td className="px-8 py-6 text-gray-700">Automated phishing simulations, employee training modules, reporting dashboards.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Dark Web Monitoring</td>
                    <td className="px-8 py-6 text-gray-700">Continuous scanning of the dark web for compromised data and credential leaks.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Governance, Risk & Compliance (GRC)</td>
                    <td className="px-8 py-6 text-gray-700">HIPAA, PCI, GDPR, and other regulatory compliance frameworks.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Vulnerability & Penetration Testing</td>
                    <td className="px-8 py-6 text-gray-700">Regular scans, penetration tests, and remediation reports.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Incident Response & Recovery</td>
                    <td className="px-8 py-6 text-gray-700">Rapid response plans, disaster recovery, and business continuity support.</td>
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves more than reactive protection; it deserves a proactive partner.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we ensure you’re always a step ahead of cybercriminals.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Security Audit
            <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
}
