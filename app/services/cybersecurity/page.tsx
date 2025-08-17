import { ArrowRight, Shield, Lock, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Cybersecurity Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from evolving cyber threats
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Security Assessment <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Threat Protection</h3>
              <p className="text-gray-600">Advanced threat detection and prevention systems to safeguard your data</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Encryption</h3>
              <p className="text-gray-600">End-to-end encryption solutions to protect sensitive business information</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Security Monitoring</h3>
              <p className="text-gray-600">24/7 security monitoring and incident response to minimize risks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Business Today</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Security Audit <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
