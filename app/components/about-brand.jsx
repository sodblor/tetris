"use client"

import { Sparkles, Leaf, Heart } from "lucide-react"

const values = [
  {
    title: "Clean Ingredients",
    description: "Every formula is crafted with naturally-derived, gentle ingredients that nourish without harm.",
    icon: Leaf,
  },
  {
    title: "K-Beauty Innovation",
    description: "We bring the latest Korean skincare innovations to help you achieve that coveted glass skin.",
    icon: Sparkles,
  },
  {
    title: "Cruelty Free",
    description: "All our products are 100% cruelty-free and never tested on animals. Beauty without compromise.",
    icon: Heart,
  },
]

export default function AboutBrand() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <img
                    src="https://www.blushme.lk/cdn/shop/files/Untitleddesign-2025-07-26T235336.571.png?v=1753554247&width=1080"
                    alt="Woman applying skincare"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src="https://www.maquibeauty.com/images/productos/dr-althea-crema-antiedad-rapid-firm-sculpting-2-87688.jpeg" alt="Skincare texture" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://a-beauty.com.ua/image/cache/catalog/doctors/hyalcica-total-moisture-10-d-cream/doctors-hyalcica-total-moisture-10-d-cream-80-ml-uvlazhnyayushchy-krem-s-10-formami-gialuronovoy-kisloty-texture-1000x1000.jpg"
                    alt="Natural ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src="https://mapetitecoree.com/cdn/shop/files/DR-ALTHEA-345-Relief-Cream-50ml-Ma-Petite-Coree.jpg?crop=center&height=794&v=1747481704&width=794" alt="Skincare routine" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Beauty That Feels <span className="text-primary">Like Self-Care</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
             Lioele was born from a love for Korean skincare and a commitment to create products that are safe, inclusive, and gentle for every skin type. We believe skincare should be a quiet moment of care in your day—a ritual that soothes, restores, and protects.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
             Rooted in innovation from Korea’s leading laboratories, Lioele blends effectiveness with responsibility. Our eco-friendly, vegan formulas are thoughtfully developed to be your safest choice, helping you achieve healthy, natural radiance with confidence and peace of mind.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
