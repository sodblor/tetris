"use client"

import { ArrowRight, Clock } from "lucide-react"

const articles = [
  {
    title: "All About Dr. Althea: Gentle Korean Skincare for Healthy, Glowing Skin",
    excerpt:
      "Learn how Dr. Althea blends science and soothing ingredients to support sensitive, acne-prone, and barrier-compromised skin.",
    category: "Brand Spotlight",
    slug: "dr-althea",
    image: "https://cdn11.bigcommerce.com/s-7p5jn6i1wf/images/stencil/original/uploaded_images/projects-1150-x-650-px-.png",
  },
  {
    title: "What Makes Dr. Althea Stand Out in K-Beauty",
    excerpt:
      "Clean, dermatologist-inspired formulas with centella, ceramides, hyaluronic acid, and niacinamide for calm, hydrated skin.",
    category: "Skincare Insight",
    slug: "dr-althea-what-makes-standout",
    image: "https://doctoraltheaglobal.com/cdn/shop/files/4_e5224ea5-c671-4137-92c6-73e8cbf2e8a4.jpg?v=1764139057&width=1548",
  },
  {
    title: "Dr. Althea Bestsellers & Real User Impressions",
    excerpt:
      "From 345 Relief Cream to Vitamin C Boosting Serum, explore hero products and what real users say about them.",
    category: "Product Review",
    slug: "dr-althea-bestsellers-real-user-impressions",
    image: "https://www.skincupid.de/cdn/shop/files/22_e1c4c4c4-bac4-495c-83e5-5c221b3f2ca7.png?v=1760352216&width=550",
  },
]

export default function BlogArticles() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Journal</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
              Beauty Stories
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
                    <a href={`/blog/${articles[0].slug}`} className="lg:col-span-2 group cursor-pointer">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6">
              <img
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground mb-3">
                  {articles[0].category}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-card mb-2">{articles[0].title}</h3>
              </div>
            </div>
          </a>
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <a key={index} href={`/blog/${article.slug}`} className="group cursor-pointer block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{article.category}</span>
                <h3 className="font-medium text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
