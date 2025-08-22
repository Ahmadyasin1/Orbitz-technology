import React from "react";

export default function ManufacturingIndustryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(59, 130, 246, 0.7)), url('https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Manufacturing Industry IT Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Learn how Orbitz Technology delivers IT solutions for the manufacturing sector.
            </p>
          </div>
        </div>
      </section>
      {/* Add more content or details here as needed */}
    </div>
  );
}
