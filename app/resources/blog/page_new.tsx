"use client";

import { Calendar, User, Tag, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "technical-interruptions-and-managed-it-services",
      title: "Technical Interruptions and Managed IT Services for Your Business",
      image: "/modern-data-center.png",
      date: "Jan 20, 2025",
      author: "Orbitz Technology",
      category: "IT Solution",
      excerpt: "Discover how managed IT services can minimize downtime and maximize business efficiency with proactive monitoring and strategic planning.",
      readTime: "5 min read",
      content: `In today's fast-moving environment, where everything is digital, small and medium sized enterprises rely on IT infrastructural support in their day-to-day operations. From smooth communication to mission critical workloads, IT interruptions can have a significant impact on productivity and business continuity.

Managed IT services provide proactive monitoring, rapid response, and strategic planning to minimize downtime and maximize efficiency. With a dedicated IT partner, businesses can focus on growth while experts handle the technology.

Key Benefits:
- 24/7 monitoring and support
- Disaster recovery planning
- Cost-effective solutions
- Scalable infrastructure

Learn how managed IT services can help your business stay resilient and efficient.`
    },
    {
      slug: "is-it-worth-the-risk-for-a-company-to-go-dark",
      title: "Is It Worth the Risk for a Company to Go Dark?",
      image: "/ai-neural-network-data.png",
      date: "Jan 12, 2025",
      author: "Orbitz Technology",
      category: "Cloud Solution",
      excerpt: "Explore the serious risks and consequences when companies cut ties with IT support and learn how to avoid costly downtime.",
      readTime: "4 min read",
      content: `In today's fast-paced digital landscape, businesses rely heavily on technology to keep operations running smoothly. But what happens when a company decides to cut ties with its IT support?

Risks of Going Dark:
- Increased vulnerability to cyber threats
- Loss of productivity
- Higher recovery costs
- Damaged reputation

Discover the risks and consequences of going dark and how to avoid costly downtime by maintaining robust IT support and cloud solutions.`
    },
    {
      slug: "ensuring-business-continuity-in-uncertain-times",
      title: "Ensuring Business Continuity in Uncertain Times",
      image: "/business-success.png",
      date: "Jan 07, 2025",
      author: "Orbitz Technology",
      category: "Cloud Solution",
      excerpt: "Learn essential business continuity planning strategies and how cloud solutions can protect your business from data emergencies.",
      readTime: "6 min read",
      content: `In today's digital world, businesses must be prepared for any data-related emergency. A well-structured BDR (Backup & Disaster Recovery) strategy not only safeguards your critical data but also ensures minimal downtime and operational continuity.

Essentials of Business Continuity Planning:
- Regular data backups
- Cloud-based recovery
- Risk assessment
- Employee training

Learn the essentials of business continuity planning and how cloud solutions can protect your business.`
    },
    {
      slug: "seamlessly-transition-to-the-future-of-it",
      title: "Seamlessly Transition to the Future of IT",
      image: "/modern-office-colorful-lighting.png",
      date: "Feb 11, 2024",
      author: "Orbitz Technology",
      category: "IT Helpdesk",
      excerpt: "Discover how cloud computing and digital transformation can improve scalability, reduce costs, and enhance business flexibility.",
      readTime: "7 min read",
      content: `In the era of digital transformation, cloud computing has become an essential component of modern business operations. Cloud technologies enable businesses to improve scalability, reduce operational costs, and enhance flexibility.

Transitioning Tips:
- Assess current infrastructure
- Choose the right cloud provider
- Plan for migration
- Train staff

Find out how to transition your IT infrastructure for the future and stay ahead in the competitive market.`
    },
    {
      slug: "streamlining-it-solutions-around-the-clock",
      title: "Streamlining IT Solutions Around the Clock",
      image: "/modern-data-center.png",
      date: "Feb 01, 2024",
      author: "Orbitz Technology",
      category: "IT Solution",
      excerpt: "Learn how to implement 24/7 IT solutions with automation, monitoring tools, and strategic maintenance for business growth.",
      readTime: "5 min read",
      content: `In today's fast-paced business environment, the need for seamless IT support has never been more critical. Technology plays a vital role in the success of modern businesses, and any disruption can lead to lost revenue and productivity.

How to Streamline IT:
- Implement automation
- Use remote monitoring tools
- Integrate helpdesk solutions
- Schedule regular maintenance

Learn how to streamline your IT solutions for 24/7 reliability and business growth.`
    },
    {
      slug: "proactive-infrastructure-management-for-a-resilient-it-ecosystem",
      title: "Proactive Infrastructure Management for a Resilient IT Ecosystem",
      image: "/ai-neural-network-data.png",
      date: "Jan 25, 2024",
      author: "Orbitz Technology",
      category: "Cybersecurity",
      excerpt: "Discover comprehensive infrastructure management services that protect your business from threats and ensure minimal downtime.",
      readTime: "6 min read",
      content: `In today's rapidly evolving digital world, businesses must maintain a resilient and secure IT infrastructure to stay competitive. With Orbitz Technology's comprehensive Proactive Infrastructure Management services, we ensure your business is protected from threats and downtime.

Proactive Steps:
- Continuous monitoring
- Threat detection
- Automated updates
- Compliance management

Discover how proactive infrastructure management can safeguard your business ecosystem.`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-office-colorful-lighting.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Latest Technology Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Orbitz Technology Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge insights, expert analysis, and best practices in IT infrastructure, cloud computing, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">{blogPosts.length}+</div>
              <div className="text-gray-600 font-medium">Expert Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600 font-medium">IT Support Coverage</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-pink-600">1000+</div>
              <div className="text-gray-600 font-medium">Businesses Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights & Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on technology trends, best practices, and industry innovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-semibold"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Stay Updated with Latest Tech Insights</h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter and never miss our latest articles, tips, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-blue-200">
              Join 10,000+ professionals who trust Orbitz Technology for the latest IT insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
