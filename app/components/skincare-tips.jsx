"use client"

import { ArrowRight } from "lucide-react"

const tips = [
  {
    number: "01",
    title: "Double Cleanse",
    description:
      "Start with an oil-based cleanser to remove makeup, followed by a water-based cleanser for a deep clean.",
    image: "https://www.koreancosmetic.cy/cdn/shop/files/GreenReliefAmino-1.png?v=1745408544&width=533",
  },
  {
    number: "02",
    title: "Layer Lightest to Heaviest",
    description: "Apply products from thinnest to thickest consistency to ensure maximum absorption.",
    image: "https://media.superdrug.com//medias/prd-back-mp-00167029-600x600?context=bWFzdGVyfHByZC1pbWFnZXN8OTA1MTN8aW1hZ2UvanBlZ3xhRFJpTDJnd1lTOHhNVGt5TkRZek1qYzJORFEwTmk5d2NtUXRZbUZqYXkxdGNDMHdNREUyTnpBeU9WODJNREI0TmpBd3w5NzIxZTY5MDgzNmNlZmI5NTdhNmRkMWYyNDE5ZjIwNTM5YzNmNmE3NzVhNjVkMWI4ZjdjZDI4YTIxZTUzZjZk",
  },
  {
    number: "03",
    title: "Pat, Don't Rub",
    description: "Gently pat products into your skin to boost circulation and help ingredients absorb better.",
    image: "https://kbeautyworld.com/cdn/shop/files/Dr.AltheaJellySealDewyMaskKBeautyWorld_1.webp?v=1760619255&width=800",
  },
  {
    number: "04",
    title: "SPF Every Day",
    description: "Protect your skin barrier with sunscreen daily, even on cloudy days, to prevent premature aging.",
    image: "https://www.skincupid.ca/cdn/shop/files/Dr.Althea_Green_Tea_Fresh_Sunscreen_MODEL.png?v=1759416712&width=800",
  },
]

export default function SkincareTips() {
  return (
    <section id="tips" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Skincare 101</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Tips for Radiant Skin
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master the art of Korean skincare with these essential tips for achieving that natural, dewy glow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-secondary/50 rounded-3xl p-6 lg:p-8 hover:bg-secondary transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-full sm:w-40 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={tip.image || "/placeholder.svg"}
                    alt={tip.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <span className="font-serif text-3xl font-medium text-primary/30 block mb-2">{tip.number}</span>
                  <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
