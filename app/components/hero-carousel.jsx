"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      title: "Glass Skin Secret",
      description: "Achieve that coveted Korean glass skin with our revolutionary hydration ritual",
      image: "https://sentisenti.com/cdn/shop/collections/Dr._Althea-image-sentisenti.webp?v=1736888988&width=2048",
    },
    {
      title: "Gentle Essence Layering",
      description: "Master the art of skincare layering with our bestselling essence collection",
      image: "https://doctoraltheaglobal.com/cdn/shop/collections/home-desktop.jpg?v=1748335118",
    },
    {
      title: "Natural Radiance Boost",
      description: "Enhance your natural glow with clean, gentle formulas",
      image: "https://www.lamourlife.com/cdn/shop/collections/dr_althea.png?v=1752599629&width=3840",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay, slides.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl mx-auto px-6 animate-in fade-in duration-700">
              <p className="text-sm font-medium tracking-widest uppercase mb-4">New Collection</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-medium mb-6 text-balance">{slide.title}</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">{slide.description}</p>
              <Link
                href="/shop"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute bottom-8 right-8 z-20 text-white/60 hover:text-white text-sm transition-colors"
      >
        {isAutoPlay ? "⏸ Pause" : "▶ Play"}
      </button>
    </section>
  )
}

export default HeroCarousel