import { ArrowRight, Heart, Shield, Database, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Healthcare IT Solutions</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              HIPAA-compliant technology solutions designed specifically for healthcare organizations
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Learn More <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Patient Management</h3>
              <p className="text-gray-600">Comprehensive patient management systems with secure data handling</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">HIPAA Compliance</h3>
              <p className="text-gray-600">Ensure full HIPAA compliance with our specialized security measures</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Electronic Health Records</h3>
              <p className="text-gray-600">Modern EHR systems for efficient patient data management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Healthcare IT</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Schedule Consultation <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
