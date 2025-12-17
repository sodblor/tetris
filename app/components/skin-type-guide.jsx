"use client"

import { useState } from "react"

const toIngredientSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[()]+/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const skinTypes = {
  oily: {
    name: "Oily",
    title: "💧 Oily Skin",
    description: "Characterized by excess sebum production, enlarged pores, and visible shine.",
    color: "from-pink-200 to-rose-100",
    bulletColor: "text-pink-400",
    chipBg: "bg-pink-100 text-pink-700",
    lineColor: "bg-pink-300",
    characteristics: [
      "Shiny appearance throughout the day",
      "Large, visible pores",
      "Prone to acne and breakouts",
      "Thicker skin texture",
    ],
    keyIngredients: ["Niacinamide", "Salicylic Acid (BHA)", "Clay", "Green Tea"],
    avoid: ["Heavy oils", "Thick creams", "Pore-clogging silicones"],
    routine: [
      { step: "Cleanse", product: "Gentle Gel Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Clarifying Toner", time: "After cleansing" },
      { step: "Serum", product: "Niacinamide + Hyaluronic Acid", time: "After toning" },
      { step: "Moisturize", product: "Lightweight Gel Moisturizer", time: "Pat onto skin" },
      { step: "Protect", product: "Oil-Control Sunscreen SPF 50", time: "Morning only" },
    ],
    tips: [
      "Use a clay mask once a week to deeply cleanse pores",
      "Pat skin dry instead of rubbing to avoid irritation",
      "Consider a light face mist throughout the day instead of re-applying products",
    ],
  },
  dry: {
    name: "Dry",
    title: "🌿 Dry Skin",
    description: "Characterized by low oil production, tightness, and lack of moisture.",
    color: "from-amber-100 to-orange-100",
    bulletColor: "text-amber-500",
    chipBg: "bg-amber-100 text-amber-800",
    lineColor: "bg-amber-300",
    characteristics: [
      "Feels tight or rough, especially after cleansing",
      "Dull or flaky appearance",
      "Fine lines more noticeable",
      "Can feel sensitive or irritated",
    ],
    keyIngredients: ["Hyaluronic Acid", "Ceramides", "Glycerin", "Panthenol"],
    avoid: ["Harsh cleansers", "Alcohol-based products", "Over-exfoliation"],
    routine: [
      { step: "Cleanse", product: "Cream or Low-Foam Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Hydrating Toner", time: "After cleansing" },
      { step: "Serum", product: "Hyaluronic Acid or Barrier-Repair Serum", time: "After toning" },
      { step: "Moisturize", product: "Rich Moisturizing Cream", time: "Gently massage into skin" },
      { step: "Protect", product: "Hydrating Sunscreen SPF 50", time: "Morning only" },
    ],
    tips: [
      "Apply moisturizer to damp skin to lock in hydration",
      "Use a humidifier during dry or winter months",
      "Avoid very hot water when cleansing; use lukewarm instead",
    ],
  },
  sensitive: {
    name: "Sensitive",
    title: "🌸 Sensitive Skin",
    description: "Easily irritated, reactive to products and environmental factors.",
    color: "from-rose-100 to-pink-100",
    bulletColor: "text-rose-400",
    chipBg: "bg-rose-100 text-rose-800",
    lineColor: "bg-rose-300",
    characteristics: [
      "Redness and irritation",
      "Reactive to many products",
      "Burning or stinging sensation",
      "Can feel hot or flushed easily",
    ],
    keyIngredients: ["Centella Asiatica", "Aloe Vera", "Panthenol", "Ceramides"],
    avoid: ["Fragrance", "Essential oils", "Alcohol", "Strong acids"],
    routine: [
      { step: "Cleanse", product: "Gentle Cream Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Soothing Essence or Toner", time: "After cleansing" },
      { step: "Serum", product: "Centella or Barrier-Repair Serum", time: "After toning" },
      { step: "Moisturize", product: "Calming Barrier Cream", time: "While skin is damp" },
      { step: "Protect", product: "Mineral Sunscreen SPF 50+", time: "Morning only" },
    ],
    tips: [
      "Always patch test new products before full application",
      "Keep your routine simple with minimal active ingredients",
      "Avoid over-exfoliating or using too many new products at once",
    ],
  },
  normal: {
    name: "Normal",
    title: "✨ Normal Skin",
    description: "Well-balanced, neither too oily nor too dry, and not easily irritated.",
    color: "from-emerald-100 to-teal-100",
    bulletColor: "text-emerald-500",
    chipBg: "bg-emerald-100 text-emerald-800",
    lineColor: "bg-emerald-300",
    characteristics: [
      "Balanced oil and moisture",
      "Small, less visible pores",
      "Even overall tone",
      "Rarely experiences breakouts or dryness",
    ],
    keyIngredients: ["Hyaluronic Acid", "Niacinamide", "Antioxidants", "Peptides"],
    avoid: ["Over-cleansing", "Harsh, stripping products"],
    routine: [
      { step: "Cleanse", product: "Mild Gel or Foam Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Refreshing Toner or Essence", time: "After cleansing" },
      { step: "Serum", product: "Hydrating + Antioxidant Serum", time: "After toning" },
      { step: "Moisturize", product: "Lightweight Lotion", time: "Gently pat into skin" },
      { step: "Protect", product: "Daily Sunscreen SPF 50", time: "Morning only" },
    ],
    tips: [
      "Maintain a consistent routine to keep balance",
      "Introduce stronger actives slowly if needed",
      "Adjust texture (lighter or richer) seasonally",
    ],
  },
  "acne-prone": {
    name: "Acne-prone",
    title: "🔥 Acne-prone Skin",
    description: "Prone to frequent breakouts, congestion, and post-acne marks.",
    color: "from-red-100 to-rose-100",
    bulletColor: "text-red-400",
    chipBg: "bg-red-100 text-red-800",
    lineColor: "bg-red-300",
    characteristics: [
      "Frequent whiteheads, blackheads, or pimples",
      "Clogged pores and congestion",
      "Post-acne dark marks or redness",
      "Can feel both oily and dehydrated",
    ],
    keyIngredients: ["Salicylic Acid (BHA)", "Niacinamide", "Azelaic Acid", "Tea Tree (low %)"],
    avoid: ["Heavy oils", "Comedogenic makeup", "Harsh scrubs or picking skin"],
    routine: [
      { step: "Cleanse", product: "Gentle BHA Gel Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Soothing or BHA Toner (few times/week)", time: "After cleansing" },
      { step: "Serum", product: "Niacinamide or Azelaic Acid Serum", time: "After toning" },
      { step: "Moisturize", product: "Oil-free Gel Moisturizer", time: "Pat onto skin" },
      { step: "Protect", product: "Non-comedogenic Sunscreen SPF 50", time: "Morning only" },
    ],
    tips: [
      "Avoid picking or squeezing pimples to reduce scarring",
      "Introduce actives like BHA and azelaic acid slowly",
      "Keep makeup and sunscreen labeled non-comedogenic",
    ],
  },
  combination: {
    name: "Combination",
    title: "⚖️ Combination Skin",
    description: "Oily T-zone with drier cheeks and jawline, needs balanced care.",
    color: "from-purple-100 to-pink-100",
    bulletColor: "text-purple-500",
    chipBg: "bg-purple-100 text-purple-800",
    lineColor: "bg-purple-300",
    characteristics: [
      "Oily T-zone (forehead, nose, chin)",
      "Normal-to-dry cheeks and jawline",
      "Different pore sizes in different areas",
      "Uneven texture in some zones",
    ],
    keyIngredients: ["Hyaluronic Acid", "Niacinamide", "Green Tea", "Aloe Vera"],
    avoid: ["Over-moisturizing oily areas", "Harsh stripping cleansers"],
    routine: [
      { step: "Cleanse", product: "Balanced Gel Cleanser", time: "Morning & Night" },
      { step: "Tone", product: "Balancing Toner", time: "After cleansing" },
      { step: "Serum", product: "Hydrating + Niacinamide Serum", time: "After toning" },
      { step: "Moisturize", product: "Lightweight Hydrating Lotion", time: "Use more on dry areas" },
      { step: "Protect", product: "Mattifying Sunscreen SPF 50", time: "Morning only" },
    ],
    tips: [
      "Use lighter textures on the T-zone and richer cream on dry areas",
      "You can multi-mask (clay on T-zone, hydrating mask on cheeks)",
      "Exfoliate gently 1–2 times per week to smooth texture",
    ],
  },
}

export default function SkinTypeGuide() {
  const [activeType, setActiveType] = useState("oily")
  const current = skinTypes[activeType]

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Find Your Skin Type</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tap through each skin type to see key signs, ingredients, and a simple Korean-inspired routine.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-muted/30 p-2 rounded-full">
          {Object.entries(skinTypes).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setActiveType(key)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 transition-colors ${
                activeType === key ? "bg-foreground text-background" : "text-foreground hover:bg-foreground/10"
              }`}
            >
              {type.title.split(" ")[0]} <span className="ml-1 hidden sm:inline">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {/* Overview Card */}
        <div
          className={`bg-gradient-to-br ${current.color} rounded-3xl p-8 md:p-12 border border-pink-200/30 shadow-sm`}
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">{current.title}</h3>
          <p className="text-lg text-muted-foreground">{current.description}</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Characteristics */}
          <div className="p-8 rounded-3xl border border-pink-200/30 bg-white/50 backdrop-blur">
            <h4 className="text-xl font-serif font-bold text-foreground mb-4">Characteristics</h4>
            <ul className="space-y-3">
              {current.characteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`${current.bulletColor} text-xl mt-1`}>•</span>
                  <span className="text-muted-foreground">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Ingredients */}
          <div className="p-8 rounded-3xl border border-pink-200/30 bg-white/50 backdrop-blur">
            <h4 className="text-xl font-serif font-bold text-foreground mb-4">Key Ingredients</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {current.keyIngredients.map((ingredient, idx) => (
                <a
                  key={idx}
                  href={`/ingredients/${toIngredientSlug(ingredient)}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${current.chipBg} hover:underline`}
                >
                  {ingredient}
                </a>
              ))}
            </div>
            {current.avoid.length > 0 && (
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Avoid:</p>
                <div className="flex flex-wrap gap-2">
                  {current.avoid.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Daily Routine */}
        <div>
          <h4 className="text-2xl font-serif font-bold text-foreground mb-6">Recommended Routine</h4>
          <div className="grid md:grid-cols-5 gap-4">
            {current.routine.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-2xl border border-pink-200/30 bg-white/50 backdrop-blur h-full flex flex-col">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h5 className="font-serif font-bold text-foreground mb-2 mt-2">{item.step}</h5>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">{item.product}</p>
                  <p className="text-xs text-pink-600 font-medium">{item.time}</p>
                </div>
                {idx < current.routine.length - 1 && (
                  <div
                    className={`hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 ${current.lineColor}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200/50">
          <h4 className="text-xl font-serif font-bold text-foreground mb-4">💡 Pro Tips</h4>
          <ul className="space-y-2 text-muted-foreground">
            {current.tips.map((tip, idx) => (
              <li key={idx}>• {tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
