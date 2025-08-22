
"use client"
import { ArrowRight, Code, Smartphone, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Software Development
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-pink-100 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              At Orbitz Technology, we’re not just developers—we’re builders of possibility. With years of experience empowering businesses through software, mobile, and QA services, we partner with you to solve real problems, streamline processes, and elevate user experiences with purpose, transparency, and unwavering commitment.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Our Software Development Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              Custom, mobile, engineering, and QA solutions built for your business needs.
            </p>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Software Development */}
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromLeft delay-400 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-10 h-10 text-pink-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">Custom Software Development</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                Got a vision that doesn’t fit in a box? We craft scalable, secure, and flexible solutions tailored to your needs. From enterprise-grade platforms to consumer-facing apps, we bring rich functionality and seamless integration to life.
              </p>
            </div>
            {/* Mobile Development */}
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-orange-50 h-full animate-slideInFromBottom delay-500 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-10 h-10 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-700">Mobile Development</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                Your audience is on the go—and so are we. Whether you want lightning-fast native apps, cross-platform solutions, hybrid builds, or PWAs, our mobile offerings ensure outstanding performance, gorgeous interfaces, and offline-friendly experiences.
              </p>
            </div>
            {/* Software & Product Engineering */}
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-blue-50 h-full animate-slideInFromRight delay-600 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Software & Product Engineering</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                The smartest software starts with a smart strategy. We’ll help you uncover your business needs, shape your product roadmap, and deliver solutions—from MVP to full-scale software—so you hit the market fast and confidently.
              </p>
            </div>
            {/* QA & Testing Services */}
            <div className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-purple-50 h-full animate-slideInFromLeft delay-700 hover-lift rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-10 h-10 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">QA & Testing Services</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                Quality isn’t an afterthought—it's baked in. Our full-spectrum QA services span functional, performance, usability, compatibility, security, and automated testing. Whether as end-to-end support or a standalone service, we help you deliver zero-bug software with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Our Approach: Your Success, Our Drive</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">Strategic & Human-Centered | End-to-End Development | Partnership Over Project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <h3 className="text-lg font-bold text-pink-600 mb-2">Strategic & Human-Centered</h3>
              <p className="text-gray-600 text-sm">We don't chase features. We listen, learn, and lead—with lean planning, value engineering, and user-first design.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <h3 className="text-lg font-bold text-orange-500 mb-2">End-to-End Development</h3>
              <p className="text-gray-600 text-sm">From discovery to deployment, our pipeline covers every step: ideation, design, QA, CI/CD, and beyond. Then, we stay with you—supporting, improving, and evolving your solution over time.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromRight delay-600">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Partnership Over Project</h3>
              <p className="text-gray-600 text-sm">We’re not here for a one-time gig. We aim to be a trusted extension of your team—transparent, accountable, and in it for the long haul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Spotlight: Why Clients Choose Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">Intelligent innovation | Ownership and trust | Result-driven delivery</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <h3 className="text-lg font-bold text-pink-600 mb-2">Intelligent innovation</h3>
              <p className="text-gray-600 text-sm">We build tech to solve real problems, not just to show off.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Ownership and trust</h3>
              <p className="text-gray-600 text-sm">You keep the code; you decide the future. We're happy to keep supporting, but there are no strings.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 shadow-md animate-slideInFromRight delay-600">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Result-driven delivery</h3>
              <p className="text-gray-600 text-sm">Our goal is real business impact—faster workflows, improved user experiences, and higher productivity.</p>
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
                    <th className="px-8 py-6 text-left text-lg font-bold">Service</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What We Offer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Custom Software Development</td>
                    <td className="px-8 py-6 text-gray-700">Tailored web and desktop applications built for scalability, flexibility, and integration.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Mobile Development</td>
                    <td className="px-8 py-6 text-gray-700">Native (iOS/Android), cross-platform, hybrid, and PWA apps with stellar UX and performance.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Software/Product Engineering</td>
                    <td className="px-8 py-6 text-gray-700">Strategy-led development: MVPs, full products, compliance, design, and road mapping.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">QA & Testing</td>
                    <td className="px-8 py-6 text-gray-700">Comprehensive QA—functional, performance, security, usability, compatibility, and automated testing.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Maintenance & DevOps</td>
                    <td className="px-8 py-6 text-gray-700">CI/CD, secure deployments, legacy modernization, and ongoing enhancements.</td>
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Ready to Build Your Custom Solution?</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              Let’s talk about how Orbitz Technology can help you build, launch, and scale your next software project.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Development Quote
            <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
}
