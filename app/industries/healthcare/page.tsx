
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Healthcare IT Solutions
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto font-light drop-shadow-lg">
            At Orbitz Technology, we help healthcare providers, research institutions, pharmaceutical companies, and health startups harness the power of digital innovation. Through consulting, custom software development, implementation, integration, and long‑term support, we deliver solutions that improve patient care, enable precision diagnostics, streamline operations, and reduce costs of care.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Healthcare Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Healthcare Business Intelligence (BI)</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Transform raw clinical and operational data into actionable insights.</li>
                <li>ETL (Extract, Transform, Load) processes</li>
                <li>Enterprise Data Warehousing (EDW)</li>
                <li>Data mining & predictive analytics</li>
                <li>Dashboards, visualization, & reporting</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Telehealth Platforms</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Live video/audio consultations</li>
                <li>Secure chat & image sharing</li>
                <li>Patient records integration</li>
                <li>Payment & insurance gateway integration</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Patient Engagement Tools</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Patient portals</li>
                <li>Telehealth integration</li>
                <li>Wellness & lifestyle apps</li>
                <li>Education & self-service tools</li>
                <li>Engagement analytics & reporting</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Electronic Medical Records (EMR/EHR)</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Comprehensive medical history storage</li>
                <li>Lab results & treatment plans in one view</li>
                <li>Scheduling & automated reminders</li>
                <li>Data consolidation from devices & third-party systems</li>
                <li>Speech-to-text records entry</li>
                <li>E-prescriptions</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Healthcare Mobile Applications</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Remote patient monitoring</li>
                <li>Real-time health data tracking from IoT/wearables</li>
                <li>Mobile access to EMRs/EHRs</li>
                <li>Secure prescribing & order management</li>
                <li>Appointment & notification management</li>
                <li>Online consultations</li>
                <li>Education & training portals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orbitz Technology */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Orbitz Technology?</h2>
          <p className="text-lg text-gray-700 mb-4">Healthcare organizations choose Orbitz Technology because we combine deep medical IT expertise with a commitment to compliance, scalability, and user-centric design.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Healthcare IT expertise – Proven ability to build HIPAA-, GDPR-, and ISO-compliant solutions.</li>
                <li>Standards-driven development – Familiarity with FHIR, HL7, ICD-10, DICOM, and US/EU healthcare regulations.</li>
                <li>Scalable systems – Solutions that grow with your operations, from startups to enterprise healthcare networks.</li>
                <li>End-to-end support – From consulting and system design through launch, upgrades, and long-term support.</li>
                <li>Innovation-ready – Integration of AI, ML, predictive analytics, IoT, and automation for future-proof healthcare software.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Tailored functionality – Solutions designed specifically for your workflows without unnecessary complexity.</li>
                <li>Enhanced interoperability – Secure, frictionless data exchange across systems and devices.</li>
                <li>Improved patient outcomes – Better data = faster, more accurate clinical decisions.</li>
                <li>Operational efficiency – Reduced paperwork, automated processes, optimized resource allocation.</li>
                <li>Regulatory confidence – Development aligned with HIPAA, GDPR, FDA, and ISO/IEC standards.</li>
                <li>Scalability for growth – Flexible architecture to accommodate patients, clinicians, and facilities.</li>
                <li>Cybersecurity protection – Multi-factor authentication, encryption, and role-based access security.</li>
                <li>Cost efficiency – Reduced misdiagnosis, administrative errors, and care delivery costs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">1. Discovery & Strategy</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Stakeholder interviews & workflow assessment</li>
                <li>Requirements gathering & regulatory analysis</li>
                <li>Optimal technology stack selection</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-pink-700 mb-2">2. Development & Integration</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Custom software or platform-based solution design</li>
                <li>Compliance-first architecture (HIPAA/GDPR/FDA)</li>
                <li>Integration with hospital systems & third-party apps</li>
                <li>Rigorous QA and interoperability testing</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">3. Deployment</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>System rollout within IT infrastructure</li>
                <li>Data migration from legacy systems</li>
                <li>User training & onboarding programs</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">4. Post-Deployment & Support</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Continuous monitoring & performance optimization</li>
                <li>Security audits & compliance updates</li>
                <li>Feature upgrades, extensions, and scaling support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Expertise in Emerging Healthcare Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700">
                <li>AI & Machine Learning – Diagnostic support, predictive analytics, and clinical decision assistance.</li>
                <li>RPA (Robotic Process Automation) – Intelligent bots for patient queries, scheduling, and reporting.</li>
                <li>Virtual & Augmented Reality (VR/AR/MR) – Surgical precision, medical training, and patient education.</li>
                <li>Medical Imaging Software – Automated medical image classification and analytics for faster, more accurate diagnoses.</li>
                <li>IoT-enabled Solutions – Remote patient monitoring, connected devices, and smart medical systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build the Future of Healthcare Together</h2>
        <p className="text-xl mb-8 text-pink-100">
          At Orbitz Technology, we combine healthcare domain knowledge with strong engineering expertise to deliver digital solutions that transform care delivery. Whether you’re looking to create a next-gen telehealth app, modernize legacy EHRs, or implement advanced analytics, our team can help you achieve measurable results.
        </p>
        <a href="/contact" className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all text-lg">Contact Us</a>
      </section>
    </div>
  )
}
