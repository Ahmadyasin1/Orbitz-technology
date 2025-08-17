import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Business Operations",
      excerpt:
        "Explore how artificial intelligence is transforming modern business processes and what it means for your organization.",
      date: "March 15, 2024",
      author: "John Smith",
      category: "AI & Technology",
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect against cyber threats.",
      date: "March 10, 2024",
      author: "Sarah Johnson",
      category: "Cybersecurity",
    },
    {
      title: "Cloud Migration: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrating your business operations to the cloud.",
      date: "March 5, 2024",
      author: "Mike Davis",
      category: "Cloud Computing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Technology Blog</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology and business
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-purple-600">
                      <Tag className="w-4 h-4 mr-1" />
                      <span>{post.category}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
