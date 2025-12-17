"use client"

import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"

const ageGroups = [
  {
    id: "teens",
    label: "Teens (13–19)",
    focus: "Gentle, barrier-friendly basics",
    tips: [
      "Use a gentle gel or foam cleanser once or twice a day.",
      "Avoid harsh scrubs and high-percentage actives.",
      "Spot-treat breakouts instead of drying your whole face.",
      "Always finish with a lightweight, non-comedogenic SPF 50 in the morning.",
    ],
  },
  {
    id: "twenties",
    label: "20s",
    focus: "Balancing, prevention, glow",
    tips: [
      "Build a simple routine: cleanse → hydrate → moisturize → SPF.",
      "Introduce vitamin C or niacinamide for brightening and refining pores.",
      "Use chemical exfoliants (AHA/BHA) 1–2 times per week – not every day.",
      "Focus on consistency rather than many products.",
    ],
  },
  {
    id: "thirties",
    label: "30s",
    focus: "Early anti‑aging & barrier support",
    tips: [
      "Prioritize hydration with essences and serums containing hyaluronic acid.",
      "Use antioxidants (vitamin C, green tea) in the daytime.",
      "Introduce gentle retinoids at night a few times a week.",
      "Never skip SPF 50 – UV protection is the best anti‑aging step.",
    ],
  },
  {
    id: "fortyPlus",
    label: "40+",
    focus: "Firmness, comfort, deep hydration",
    tips: [
      "Choose richer cream textures with ceramides and peptides.",
      "Layer hydrating toners/essences to reduce tightness.",
      "Use retinoids or retinal consistently if your skin tolerates them.",
      "Protect neck and décolleté with the same routine and SPF.",
    ],
  },
]

const concerns = [
  {
    title: "Oily / Acne‑Prone",
    help: [
      "Look for non‑comedogenic, oil‑free textures.",
      "Use BHA (salicylic acid) 2–3x per week to clear pores.",
      "Niacinamide helps reduce excess oil and post‑blemish marks.",
      "Avoid over‑cleansing – twice a day is enough.",
    ],
  },
  {
    title: "Dry / Dehydrated",
    help: [
      "Swap foaming cleansers for milk or cream cleansers.",
      "Layer humectants (glycerin, hyaluronic acid) under a richer cream.",
      "Use overnight sleeping masks 2–3x per week.",
      "Avoid hot water and strong foaming shampoos running over the face.",
    ],
  },
  {
    title: "Sensitive / Redness",
    help: [
      "Choose fragrance‑free, alcohol‑free formulas where possible.",
      "Look for centella asiatica (cica), panthenol, and ceramides.",
      "Introduce only one new product at a time and patch test.",
      "Avoid harsh scrubs and high‑percentage acids.",
    ],
  },
]

const everydayRules = [
  {
    title: "Purging vs regular breakouts",
    items: [
      "“Purging” happens when active ingredients (like retinoids, BHA, AHA) speed up cell turnover.",
      "Purging is usually in areas where you normally breakout and improves after 4–6 weeks.",
      "New breakouts in totally new areas or that keep getting worse are not purging – your skin may not like that product.",
      "If you see painful, cystic breakouts spreading, stop the product and give your skin a rest.",
    ],
  },
  {
    title: "Hygiene that secretly matters",
    items: [
      "Change pillowcases 1–2× per week to avoid buildup of oil, sweat and hair products.",
      "Use a clean face towel – ideally one just for your face.",
      "Wipe your phone screen regularly; makeup and bacteria from it can transfer to your cheeks.",
      "Glasses and sunglasses resting on your nose and temples can also trigger breakouts if not cleaned.",
    ],
  },
  {
    title: "Makeup & removal",
    items: [
      "Makeup removal is part of skincare – not an optional extra.",
      "Use a gentle cleansing balm or oil first to break down makeup and SPF (step one of double cleansing).",
      "Follow with a low‑pH gel or cream cleanser if you wear heavy base makeup or waterproof products.",
      "If you wear light makeup, a single gentle cleanse may be enough – listen to how your skin feels.",
    ],
  },
  {
    title: "Double cleansing: who needs it?",
    items: [
      "Double cleansing is most helpful if you wear long‑wear makeup, sunscreen, or live in a polluted city.",
      "Oily and combination skins that feel congested often love a balm/oil + gentle gel combination.",
      "Dry and sensitive skins can double cleanse a few times a week instead of every night.",
      "If your skin feels tight or raw, you might be cleansing too often or with formulas that are too strong.",
    ],
  },
  {
    title: "Oil, dehydration & dryness",
    items: [
      "Oil ≠ bad – even oily skin can benefit from lightweight non‑comedogenic oils.",
      "Dry skin lacks oil; dehydrated skin lacks water – you can be oily and dehydrated at the same time.",
      "Humectants (like glycerin, hyaluronic acid) pull in water, while oils and creams lock it in.",
      "In cold or dry weather, upping your moisturizer and using a humidifier can be more helpful than adding more actives.",
    ],
  },
  {
    title: "Hormones, weather & sudden breakouts",
    items: [
      "Hormonal acne often shows as deeper, painful spots around the jawline, chin, and lower cheeks.",
      "Sudden breakouts can be triggered by stress, diet changes, new medications, or sudden routine changes.",
      "Weather shifts (hot/humid vs cold/dry) change how much moisture and oil your skin needs.",
      "Track patterns (cycle, season, lifestyle) – it helps you adjust your routine more calmly.",
    ],
  },
]

export default function SkinHelpPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/30 via-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium">
            Simple Skin Tips for Every Age
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Not sure where to start? Use this guide to understand what your skin needs based on age, skin type, and daily
            habits so you can build a routine that feels gentle, effective, and realistic.
          </p>
        </div>
      </section>
      <section className="relative px-6 lg:px-8 py-12 lg:py-16">
       
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-secondary/25 via-background to-transparent" />
        <div className="relative max-w-5xl mx-auto space-y-16">
         
          <div className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl md:text-3xl font-medium">Tips by Age</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ageGroups.map((group) => (
                <div
                  key={group.id}
                  className="rounded-3xl bg-gradient-to-br from-card/95 via-card/80 to-secondary/40 border border-border/40 p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Age Group</p>
                      <h3 className="text-lg font-semibold mt-1">{group.label}</h3>
                    </div>
                    <span className="text-3xl" aria-hidden="true">
                      {group.emoji}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mt-1">{group.focus}</p>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                    {group.tips.map((tip) => (
                      <li key={tip} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl md:text-3xl font-medium">Tips by Skin Concern</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {concerns.map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl bg-gradient-to-br from-card/95 via-card/80 to-accent/30 border border-border/40 p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {block.emoji}
                    </span>
                    <h3 className="text-base font-semibold">{block.title}</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {block.help.map((tip) => (
                      <li key={tip} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border/40 bg-card shadow-md">
            <img
              src="https://www.cosmeticsdesign-asia.com/resizer/v2/4ZME5VOBCNHJTHRXNVZUFEXPQA.jpg?auth=dcbc64f179bad4803b346f5ce18643c497c35d3c8b62fdcec80133c3945cf785"
              alt="Woman gently applying skincare to her face"
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium">Everyday Skin Rules</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {everydayRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-3xl bg-gradient-to-br from-card/95 via-card/80 to-secondary/30 border border-border/40 p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold">{rule.title}</h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {rule.items.map((tip) => (
                      <li key={tip} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
