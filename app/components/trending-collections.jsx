"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const collections = [
  {
    id: 1,
    title: "Dewy Glass Skin Ritual",
    subtitle: "5-Step Daily Routine",
    description: "Achieve that coveted Korean glass skin look with our curated collection",
    gradient: "from-pink-100 to-rose-50",
    image: "https://pureseoul.co.uk/cdn/shop/collections/DR.ALTHEA-minimal-classy-luxury-korean-skincare-brand-at-PURESEOUL-The-Uks-Best-K-Beauty-Shop-HEADER.webp?v=1708340657",
    products: 5,
  },
  {
    id: 2,
    title: "Sensitive Skin Saviors",
    subtitle: "Gentle & Soothing",
    description: "Calming formulas designed for reactive and easily irritated skin",
    gradient: "from-orange-50 to-pink-100",
    image: "https://doctoraltheaglobal.com/cdn/shop/files/5_c807fb9f-ef54-4940-95d1-b29ffacb6bc2.jpg?v=1764139307&width=1548",
    products: 6,
    products: 4,
  },
  {
    id: 3,
    title: "Summer Glow Kit",
    subtitle: "Hydration & Protection",
    description: "Lightweight essentials for bright, protected, and hydrated summer skin",
    gradient: "from-yellow-50 to-orange-100",
    image: "https://www.masksheets.com/cdn/shop/files/SaveClip.App_504359109_18172469974337144_6704085949219105200_n_1024x1024.jpg?v=1752788151",
    products: 6,
  },
  {
    id: 4,
    title: "Night Repair Complex",
    subtitle: "While You Sleep",
    description: "Intensive treatments that work overnight for transformation",
    gradient: "from-purple-50 to-pink-100",
    image: "https://secretskin.co.za/wp-content/uploads/2025/07/Dr.-Althea-Ft-Image.jpg",
    products: 5,
  },
]

export default function TrendingCollections() {
  const [hoveredCollection, setHoveredCollection] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Curated Collections</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Trending Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collections designed for specific skin concerns and beauty goals
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
            >
              <div
                className={`relative h-96 bg-gradient-to-br ${collection.gradient} rounded-3xl overflow-hidden mb-6 transition-all duration-300 ${hoveredCollection === collection.id ? "shadow-xl" : "shadow-md"}`}
              >
                {/* Background Image */}
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-medium tracking-widest text-white/80 uppercase mb-2">
                      {collection.products} Products
                    </span>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-2">{collection.subtitle}</p>
                    <h3 className="font-serif text-3xl font-medium text-white mb-3">{collection.title}</h3>
                    <p className="text-white/80 text-sm mb-6 line-clamp-2">{collection.description}</p>

                    {/* Hover CTA */}
                    <div
                      className={`flex items-center gap-2 text-white font-medium transition-all duration-300 ${hoveredCollection === collection.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    >
                      Explore Collection
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}
