import { ArrowRight, Code, Smartphone, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Software Development</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Custom software solutions designed to streamline your operations and drive business growth
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Web Applications</h3>
              <p className="text-gray-600">Modern, responsive web applications built with cutting-edge technologies</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Enterprise Software</h3>
              <p className="text-gray-600">
                Scalable enterprise solutions including CRM, ERP, and custom business applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Development Quote <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
