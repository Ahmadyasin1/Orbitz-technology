import { ArrowRight, Shield, Clock, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Managed IT Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive IT management that keeps your business running smoothly while you focus on growth
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Free Assessment <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Proactive monitoring and maintenance to prevent issues before they impact your business
              </p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Rapid Response</h3>
              <p className="text-gray-600">
                Quick resolution of IT issues with guaranteed response times and expert support
              </p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Dedicated Team</h3>
              <p className="text-gray-600">
                Your own team of IT professionals who understand your business and technology needs
              </p>
            </div>
          </div>
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
