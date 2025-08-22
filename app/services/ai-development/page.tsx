"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Database, 
  Bot, 
  Eye,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Zap
} from "lucide-react"

export default function AIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(59, 130, 246, 0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              AI Development Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-blue-100 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              Smart, scalable AI services tailored for your business. Automate, gain insights, and innovate with Orbitz Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
                onClick={() => (window.location.href = "/contact")}
              >
                Start AI Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg hover-lift"
              >
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              What We Do: Smart, Scalable AI Services Tailored for You
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              From strategy to deployment, we deliver comprehensive AI solutions that transform your business and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* AI Strategy & Consulting */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center animate-bounceIn delay-500">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">AI Strategy & Consulting</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                  Planning to go AI-first? We partner with you to assess your landscape, define your AI roadmap, and unlock the right opportunities—from AIOps to legacy system integration and automation strategy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    AI readiness assessment
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Strategic roadmap development
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Legacy system integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Custom Generative AI Systems */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-bounceIn delay-600">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 animate-fadeInScale delay-700">
                    Custom Generative AI Systems
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Leverage the power of generative intelligence—our AI agents and custom model development solutions help you automatically generate content, insights, and experiences that truly resonate.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom model training
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Model adaptation & fine-tuning
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Full lifecycle support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI-Powered Chatbots & Agents */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromRight delay-600 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-bounceIn delay-700">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 animate-fadeInScale delay-800">
                    AI-Powered Chatbots & Agents
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Deliver round-the-clock support with smart chatbots and AI agents. From LLM-powered assistants to voice interfaces, our bots understand context and engage naturally.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Natural conversational bots
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Intelligent assistants
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Voice interface integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Advanced Machine Learning */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-orange-50 h-full animate-slideInFromLeft delay-700 hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 animate-bounceIn delay-800">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Advanced Machine Learning & Predictive Intelligence
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Predict trends, detect fraud, personalize responses, and automate intelligently. Using tailored ML pipelines and real-time models to drive smarter decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Fraud detection systems
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Intelligent automation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Generative AI for Content */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-blue-50 h-full animate-slideInFromBottom delay-800 hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 animate-bounceIn delay-800">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Generative AI for Content & Innovation
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  From generating text, images, or code to streamlining creative workflows, our generative AI capabilities span all forms of media using top frameworks.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Content generation (text, images, code)
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Creative workflow automation
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Multi-media AI solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* End-to-End Integration */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-purple-50 h-full animate-slideInFromRight delay-800 hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 animate-bounceIn delay-800">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  End-to-End Integration & Deployment
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  We ensure your AI solutions integrate securely and seamlessly with DevOps, AIOps, vector databases, RAG systems, and model observability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    DevOps & AIOps integration
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Vector databases & RAG systems
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Model observability & monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Orbitz Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Why Choose Orbitz Technology?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              Industry expertise, proven results, and cutting-edge AI solutions that deliver measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Industry-Centric Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-500">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-600">
                  Industry-Centric Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                  Whether you're in healthcare, finance, logistics, real estate, retail, or beyond, we craft AI that's rooted in industry understanding and real-world applicability.
                </p>
              </CardContent>
            </Card>

            {/* Proven Track Record */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-600">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-700">
                  Proven Track Record, Trusted Impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Our solutions mirror the excellence recognized in industry leaders for cutting-edge, results-driven development that delivers measurable business outcomes.
                </p>
              </CardContent>
            </Card>

            {/* Top-Tier Talent */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-700">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Top-Tier Talent
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Our team brings together data engineers, AI strategists, developers, and DevOps specialists, all under one roof to build solutions that are as creative as they are robust.
                </p>
              </CardContent>
            </Card>

            {/* Security, Ethics & Performance */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-800">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Security, Ethics & Performance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  We embed secure, ethical AI practices into every project—from encrypted data handling to bias mitigation and continuous model audits ensuring responsible innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Our Offerings at a Glance
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">
              Comprehensive AI services designed to transform your business operations
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl animate-slideInFromBottom delay-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Service</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What We Deliver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">AI Strategy & Consulting</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">AI readiness, roadmap, legacy integration</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Generative AI</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Custom model training, adaptation, lifecycle support</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Chatbots & AI Agents</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Natural conversational bots, intelligent assistants</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Machine Learning</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Predictive analytics, automation, fraud detection</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Secure Integration & Ops</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">DevOps, AIOps, observability, RAG, vector stores</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Our AI Development Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              A proven, systematic approach to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-500">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-600">Discovery & Analysis</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-700">We understand your business needs, data landscape, and AI opportunities.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-600">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-700">Data Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We clean, organize, and prepare your data for optimal AI model performance.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-700">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">Model Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We build, train, and validate AI models using cutting-edge techniques.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-800">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">Deployment & Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We deploy AI solutions and provide ongoing monitoring and optimization.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`,
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Ready to Transform with AI?</h2>
            <p className="text-xl mb-8 text-blue-100 animate-fadeInScale delay-300">
              Let's discuss how smart, scalable AI services can revolutionize your business operations and drive unprecedented growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg hover-lift"
            >
              Download AI Guide
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-slideInFromLeft delay-500 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-600">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 animate-fadeInScale delay-700">Call Us</h3>
              <p className="text-blue-200 animate-slideInFromBottom delay-800">+1 (319) 610-4889</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-slideInFromBottom delay-600 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-700">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 animate-fadeInScale delay-800">Email Us</h3>
              <p className="text-blue-200 animate-slideInFromBottom delay-800">info@orbitztechnology.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-slideInFromRight delay-700 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-800">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 animate-fadeInScale delay-800">AI Expertise</h3>
              <p className="text-blue-200 animate-slideInFromBottom delay-800">Smart, Scalable Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
