import { ArrowRight, DollarSign, Shield, TrendingUp, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinancialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Financial Services IT</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Secure, compliant technology solutions for banks, credit unions, and financial institutions
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Financial Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Banking Systems</h3>
              <p className="text-gray-600">Modern core banking systems with real-time transaction processing</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensure compliance with financial regulations and security standards</p>
            </div>
            <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
              <p className="text-gray-600">Advanced risk assessment and fraud detection systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Modernize Your Financial Technology</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started <Phone className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
