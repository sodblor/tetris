"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { skincareProducts } from "@/app/data/products"
import { useApp } from "@/app/providers"

const ProductCarousel = () => {
  const { t, toggleFavorite, isFavorite, language } = useApp()
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-2">{t("featured.collection")}</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground">{t("featured.title")}</h2>
          </div>
          <div className="hidden lg:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border/50 hover:border-foreground/20 hover:bg-accent transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border/50 hover:border-foreground/20 hover:bg-accent transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {skincareProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72 group">
              <div className="relative mb-4 overflow-hidden rounded-3xl bg-card aspect-[3/4]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute right-3 top-3 p-2 rounded-full bg-background/80 backdrop-blur text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Toggle favourite"
                >
                  <Heart className={`w-5 h-5 ${isFavorite(product.id) ? "fill-primary text-primary" : ""}`} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {typeof product.category === 'object' ? product.category[language] || product.category.en : product.category}
              </p>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">{product.name}</h3>
              <p className="text-primary font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel
