// Banner Punchline
// “Orbitz Technology — Innovate Boldly, Scale Smartly, Lead Fearlessly with AI.”

"use client"
import { Card } from "@/components/ui/card"

export default function CompanyOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Punchline */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-text-reveal delay-200 tracking-tight">
          Orbitz Technology — Innovate Boldly, Scale Smartly, Lead Fearlessly with AI.
        </h1>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 shadow-xl animate-slideInFromBottom delay-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-text-reveal delay-200">About Us</h2>
            <p className="text-gray-700 text-lg mb-4">Founded in 2011 and headquartered in Chicago, with offices in the UK and Pakistan, Orbitz Technology is an innovation-driven IT consulting and solutions company dedicated to empowering businesses through AI, software, and strategic technology services. We pride ourselves on combining the precision and insight of former Big 4 consultants with the creativity and technical mastery of world-class developers to deliver intelligent, scalable, and reliable solutions.</p>
            <p className="text-gray-700 text-lg mb-4">Our approach starts with careful planning and strategic consulting, using AI-powered analytics and deep industry knowledge to craft tailored roadmaps that align technology with your business goals. Next, our development teams bring thoughtful innovation to life—building bespoke software and intelligent infrastructure designed for growth, agility, and security.</p>
            <p className="text-gray-700 text-lg mb-4">To ensure you never miss a beat, our expert Managed IT team provides continuous monitoring, proactive maintenance, and rapid response services that guarantee seamless business continuity and operational resilience.</p>
            <p className="text-gray-700 text-lg mb-4">At Orbitz Technology, we’re more than a service provider—we are your innovation partner. We foster collaborative relationships built on trust, transparency, and shared success, embedding ourselves alongside your team to co-create solutions that unlock new possibilities and sustained value.</p>
            <p className="text-gray-700 text-lg mb-4">Our mission is to empower small and medium businesses to innovate boldly, scale intelligently, and create thriving futures powered by cutting-edge AI and technology solutions.</p>
            <p className="text-gray-700 text-lg mb-4">Our vision is a future where technology drives smarter, faster, and simpler ways for businesses to succeed—and we are pioneering that transformation every step of the way.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}
