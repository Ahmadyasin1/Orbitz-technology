import { ArrowRight, FileText, TrendingUp, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Real success stories from our clients who transformed their business with our IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Healthcare Provider Transformation</h3>
              <p className="text-gray-600 mb-4">
                How we helped a regional healthcare provider modernize their IT infrastructure and improve patient care.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Financial Services Modernization</h3>
              <p className="text-gray-600 mb-4">
                Transforming a traditional bank's operations with modern digital banking solutions.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Manufacturing Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Streamlining operations for a manufacturing company with custom ERP solutions.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Start Your Project <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
