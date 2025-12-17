"use client"

import { ArrowRight } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary" />
      <div className="absolute top-32 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-accent/40 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Korean Beauty Essentials
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Gentle Beauty, <span className="text-primary">Natural Glow</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Discover the art of Korean skincare with our curated collection of clean, gentle formulas designed to
              reveal your skin's natural radiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 text-sm font-medium group transition-colors">
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full px-8 h-12 text-sm font-medium border border-foreground/20 hover:bg-accent bg-transparent transition-colors">
                Learn Our Story
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-12 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl font-medium text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Clean Products</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl font-medium text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center lg:text-left hidden sm:block">
                <p className="font-serif text-3xl font-medium text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Cruelty Free</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-4 bg-accent rounded-[3rem] -rotate-3" />
              <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl shadow-primary/10 overflow-hidden">
                <img
                  src="/korean-skincare-products-elegant-minimal-pink-back.jpg"
                  alt="Korean skincare products"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg shadow-primary/10 animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
                <p className="text-xs text-muted-foreground mb-1">Best Seller</p>
                <p className="font-medium text-foreground">Glow Serum</p>
                <p className="text-sm text-primary font-medium">$48.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
