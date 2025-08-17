import { ArrowRight, Target, TrendingUp, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">IT Consulting</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Strategic IT guidance to align technology with your business objectives and drive digital transformation
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
              <p className="text-gray-600">Develop comprehensive IT strategies aligned with your business goals</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600">Guide your organization through digital transformation initiatives</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technology Assessment</h3>
              <p className="text-gray-600">
                Evaluate current systems and recommend improvements for optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Strategy?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Book Strategy Session <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
