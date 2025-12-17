const ingredientContent = {
  niacinamide: {
    name: "Niacinamide",
    subtitle: "Also known as Vitamin B3",
    intro:
      "Niacinamide is a versatile, well-researched skincare ingredient that supports a healthy barrier, more even tone, and smoother texture. It is generally gentle and works well for many skin types, including oily, acne-prone, and sensitive skin when used correctly.",
    benefits: [
      "Helps reduce the look of enlarged pores and excess oil",
      "Supports a stronger skin barrier and improved hydration",
      "Helps fade the appearance of dark spots and post-acne marks over time",
      "Can calm visible redness and balance an uneven-looking complexion",
    ],
    goodFor: [
      "Oily or combination skin dealing with shine and visible pores",
      "Acne-prone skin with lingering marks or uneven tone",
      "Normal to dry skin that wants extra barrier support and brightness",
      "Many sensitive skin types, when introduced slowly at lower strengths (2–5%)",
    ],
    howToUse: [
      "Apply after cleansing and toning, before heavier creams or oils",
      "Start with once per day, then increase to twice daily if skin tolerates it well",
      "Pairs well with hydrating ingredients like hyaluronic acid and ceramides",
      "Always use sunscreen in the morning when targeting dark spots or uneven tone",
    ],
    cautions: [
      "Very high percentages (10%+) can feel too strong or tingly for some sensitive or compromised barriers",
      "If you notice redness or discomfort, reduce how often you use it or switch to a lower concentration",
      "Avoid layering with too many strong actives at once; keep the rest of your routine gentle",
    ],
  },
  "salicylic-acid-bha": {
    name: "Salicylic Acid (BHA)",
    subtitle: "Oil-soluble exfoliating acid",
    intro:
      "Salicylic acid is a beta hydroxy acid (BHA) that can dive into pores to help dissolve excess oil and buildup. It is a staple ingredient for acne-prone and congested skin.",
    benefits: [
      "Helps unclog pores and reduce blackheads and whiteheads",
      "Smooths rough, bumpy texture",
      "Can reduce the frequency of breakouts when used consistently",
      "Helps calm the look of redness around active blemishes",
    ],
    goodFor: [
      "Oily and combination skin with clogged pores",
      "Acne-prone skin that experiences frequent breakouts",
      "Skin with stubborn blackheads on the nose, chin, or forehead",
    ],
    howToUse: [
      "Use in a cleanser or leave-on toner 2–3 times per week to start",
      "Apply only on clean, dry skin and avoid the eye area",
      "Follow with a gentle moisturizer to prevent over-drying",
      "Introduce slowly if you are already using other strong actives (like retinoids or vitamin C)",
    ],
    cautions: [
      "Can be drying or irritating if overused or layered with too many exfoliants",
      "Not recommended for very sensitive or compromised skin without guidance",
      "Always pair with broad-spectrum sunscreen during the day, as exfoliation can make skin more sun-sensitive",
    ],
  },
  clay: {
    name: "Clay",
    subtitle: "Oil-absorbing mineral ingredient",
    intro:
      "Clays (such as kaolin or bentonite) are absorbent minerals used in masks and cleansers to help draw out excess oil and impurities from the skin's surface.",
    benefits: [
      "Helps absorb excess sebum and reduce surface shine",
      "Can make pores look smaller and less congested",
      "Leaves skin feeling clean and refreshed when used correctly",
    ],
    goodFor: [
      "Oily and combination skin, particularly in the T-zone",
      "Acne-prone skin that feels greasy or congested",
    ],
    howToUse: [
      "Use a clay mask 1–2 times per week on oily or breakout-prone areas",
      "Leave on for the recommended time, then rinse with lukewarm water",
      "Follow with hydrating products to keep the barrier comfortable",
    ],
    cautions: [
      "Leaving clay masks on too long can over-dry the skin",
      "Avoid daily use unless your skin is very oily and tolerates it well",
      "If your skin feels tight or overly dry, reduce how often you use it",
    ],
  },
  "green-tea": {
    name: "Green Tea",
    subtitle: "Antioxidant-rich botanical extract",
    intro:
      "Green tea extract is packed with antioxidants and soothing compounds that help protect skin from environmental stress and calm visible redness.",
    benefits: [
      "Provides antioxidant protection against environmental damage",
      "Helps calm and comfort the look of irritated or flushed skin",
      "Supports a more balanced, less reactive complexion over time",
    ],
    goodFor: [
      "Most skin types, including sensitive and redness-prone",
      "Oily and acne-prone skin that needs soothing care",
    ],
    howToUse: [
      "Often found in toners, essences, and moisturizers for daily use",
      "Can be layered easily with most actives because it is generally gentle",
      "Ideal in both morning and evening routines for added antioxidant support",
    ],
    cautions: [
      "Allergies to botanical extracts are possible; patch test if you are reactive",
      "If redness or itching appears, discontinue and simplify your routine",
    ],
  },
  "hyaluronic-acid": {
    name: "Hyaluronic Acid",
    subtitle: "Water-binding humectant",
    intro:
      "Hyaluronic acid is a humectant that attracts and holds water in the upper layers of the skin, helping it look plumper, smoother, and more hydrated.",
    benefits: [
      "Boosts hydration and plumps the look of fine dehydration lines",
      "Helps skin feel softer and more comfortable",
      "Works well in many routines without feeling heavy",
    ],
    goodFor: [
      "Dry, dehydrated, or tight-feeling skin",
      "Normal and combination skin needing a hydration boost",
      "Oily skin that prefers lightweight moisture layers",
    ],
    howToUse: [
      "Apply on slightly damp skin after cleansing or toning",
      "Seal with a cream or lotion to prevent moisture from evaporating",
      "Can be used morning and night and layered under most serums and creams",
    ],
    cautions: [
      "On very dry air days, always follow with an occlusive moisturizer so hydration doesn’t evaporate from the skin",
      "Extremely high concentrations can feel sticky or uncomfortable for some users",
    ],
  },
  ceramides: {
    name: "Ceramides",
    subtitle: "Barrier-repair lipids",
    intro:
      "Ceramides are lipids (fats) that naturally exist in the skin barrier. Topical ceramides help replenish this protective layer so skin can hold onto moisture and feel less reactive.",
    benefits: [
      "Help repair and reinforce a weakened skin barrier",
      "Improve moisture retention and reduce feelings of tightness",
      "Support calmer, more resilient skin over time",
    ],
    goodFor: [
      "Dry, dehydrated, or flaky skin",
      "Sensitive or compromised barriers",
      "Skin that feels tight or easily irritated after cleansing",
    ],
    howToUse: [
      "Look for ceramides in moisturizers and barrier creams used as the final step in your routine",
      "Use consistently, especially in colder or drier seasons",
      "Can be paired with actives like niacinamide and hyaluronic acid for extra support",
    ],
    cautions: [
      "Generally very well-tolerated; reactions are rare but still patch test if highly sensitive",
    ],
  },
  glycerin: {
    name: "Glycerin",
    subtitle: "Classic hydrating humectant",
    intro:
      "Glycerin is a long-standing, effective humectant that draws water into the outer layer of skin, helping it feel soft, supple, and comfortable.",
    benefits: [
      "Boosts surface hydration and helps prevent dryness",
      "Supports a smoother, more flexible skin feel",
      "Plays nicely with many other skincare ingredients",
    ],
    goodFor: [
      "All skin types, especially dry and dehydrated",
      "Sensitive skin needing simple, non-irritating hydration",
    ],
    howToUse: [
      "Common in cleansers, toners, essences, serums, and moisturizers for daily use",
      "Layer with other humectants and emollients for balanced hydration",
    ],
    cautions: [
      "Generally low risk; if a product feels sticky, pair it with a cream on top",
    ],
  },
  panthenol: {
    name: "Panthenol",
    subtitle: "Pro-vitamin B5 for soothing hydration",
    intro:
      "Panthenol (pro-vitamin B5) is a soothing, moisturizing ingredient that helps comfort irritated skin and support a healthy barrier.",
    benefits: [
      "Helps reduce feelings of tightness and dryness",
      "Soothes the look of redness and irritation",
      "Supports barrier repair when used consistently",
    ],
    goodFor: [
      "Dry, sensitive, or irritated skin",
      "Post-treatment or over-exfoliated skin needing calm and comfort",
    ],
    howToUse: [
      "Found in toners, serums, and creams for daily or as-needed use",
      "Can be layered easily with most active ingredients",
    ],
    cautions: [
      "Very well-tolerated; as always, patch test if your skin is extremely reactive",
    ],
  },
  "centella-asiatica": {
    name: "Centella Asiatica (Cica)",
    subtitle: "Soothing herbal extract",
    intro:
      "Centella asiatica, often called Cica, is a calming botanical extract loved in K-beauty for helping to soothe and support stressed or sensitive skin.",
    benefits: [
      "Helps calm visible redness and irritation",
      "Supports the skin’s natural healing and barrier function",
      "Provides gentle antioxidant support",
    ],
    goodFor: [
      "Sensitive, reactive, or redness-prone skin",
      "Skin recovering from breakouts or over-exfoliation",
    ],
    howToUse: [
      "Often used in toners, serums, and creams for daily or targeted use",
      "Pairs well with ceramides, panthenol, and hyaluronic acid in barrier-focused routines",
    ],
    cautions: [
      "As with all botanicals, patch test if you are prone to allergies or reactions",
    ],
  },
  "aloe-vera": {
    name: "Aloe Vera",
    subtitle: "Cooling, hydrating plant extract",
    intro:
      "Aloe vera is a classic soothing ingredient that provides lightweight hydration and a cooling feel on the skin.",
    benefits: [
      "Helps soothe mild irritation and discomfort",
      "Provides light, water-based hydration",
      "Can feel refreshing on hot or sensitized skin",
    ],
    goodFor: [
      "Most skin types, especially combination and oily needing light hydration",
      "Skin that feels warm or slightly irritated",
    ],
    howToUse: [
      "Common in gels, toners, and light moisturizers",
      "Use after cleansing and before or instead of heavier creams, depending on your skin type",
    ],
    cautions: [
      "Some people are sensitive to aloe; patch test first if you have plant allergies",
    ],
  },
  antioxidants: {
    name: "Antioxidants",
    subtitle: "Protection from daily environmental stress",
    intro:
      "Antioxidants are a broad group of ingredients (like vitamin C, green tea, and resveratrol) that help defend skin from free radical damage caused by pollution, UV exposure, and daily life.",
    benefits: [
      "Help protect skin from environmental stressors",
      "Support a brighter, more even-looking tone over time",
      "Work alongside sunscreen to support long-term skin health",
    ],
    goodFor: [
      "All skin types",
      "Anyone wanting to focus on prevention and long-term skin health",
    ],
    howToUse: [
      "Commonly used in serums or essences during the day under sunscreen",
      "Can often be layered with hydrating ingredients and barrier-supporting creams",
    ],
    cautions: [
      "Some antioxidant formulas can be strong; if you experience irritation, alternate days or switch to a gentler option",
    ],
  },
  peptides: {
    name: "Peptides",
    subtitle: "Signal-supporting ingredients",
    intro:
      "Peptides are short chains of amino acids that can help support the skin’s feeling of firmness, smoothness, and resilience.",
    benefits: [
      "Can help soften the look of fine lines over time",
      "Support a smoother, more elastic skin feel",
      "Often feel gentle and cushioning on the skin",
    ],
    goodFor: [
      "Normal to dry and mature skin",
      "Anyone looking for a gentle, barrier-friendly way to support long-term firmness",
    ],
    howToUse: [
      "Usually found in serums and moisturizers used once or twice daily",
      "Layer easily with hydrating ingredients and many actives",
    ],
    cautions: [
      "Generally low risk; choose formulas that also include good basic moisturizers to see best results",
    ],
  },
  "azelaic-acid": {
    name: "Azelaic Acid",
    subtitle: "Multifunctional acid for tone and texture",
    intro:
      "Azelaic acid is a gentle, multi-tasking ingredient that can help improve visible redness, uneven tone, and textural irregularities, especially in acne-prone or redness-prone skin.",
    benefits: [
      "Helps fade the look of post-acne marks and uneven tone",
      "Can reduce visible redness and blotchiness over time",
      "Supports smoother, more refined-looking texture",
    ],
    goodFor: [
      "Acne-prone skin with lingering marks",
      "Redness-prone or easily flushed skin (in appropriate formulas)",
    ],
    howToUse: [
      "Start a few times per week, especially if using other actives",
      "Apply after cleansing and before heavier creams",
      "Use sunscreen daily when working on discoloration and tone",
    ],
    cautions: [
      "Can cause mild tingling or dryness at first; build up use slowly",
      "Avoid layering with too many strong acids in the same routine to reduce irritation risk",
    ],
  },
  "tea-tree-low": {
    name: "Tea Tree (low %)",
    subtitle: "Clarifying essential oil used in low concentrations",
    intro:
      "Tea tree oil has antimicrobial properties and is sometimes used in low concentrations to help support acne-prone skin.",
    benefits: [
      "Helps target blemish-causing bacteria on the skin’s surface",
      "Can support a clearer-looking complexion when used carefully",
    ],
    goodFor: [
      "Acne-prone and oily skin that tolerates essential oils",
    ],
    howToUse: [
      "Look for well-formulated products that use tea tree at low, skin-friendly levels",
      "Use as a targeted treatment on breakout-prone areas rather than all over the face at first",
    ],
    cautions: [
      "Essential oils can be irritating or sensitizing, especially in higher amounts",
      "Always patch test before use and discontinue if you notice burning, itching, or increased redness",
      "Avoid applying pure, undiluted tea tree oil directly to the skin",
    ],
  },
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const content = ingredientContent[slug]
  const name = content?.name || slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  return {
    title: `${name} – Ingredient Guide`,
    description: content
      ? `Learn what ${name} does, who it is for, and how to use it safely.`
      : `Ingredient guide for ${name}.`,
  }
}

export default function IngredientPage({ params }) {
  const slug = params.slug
  const content = ingredientContent[slug]

  const name = content?.name || slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Ingredient Guide</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">{name}</h1>
        {content?.subtitle && (
          <p className="text-sm text-muted-foreground mb-8">{content.subtitle}</p>
        )}

        {content ? (
          <div className="space-y-8 leading-relaxed text-[15px] sm:text-base text-muted-foreground">
            <section>
              <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">What it does</h2>
              <p>{content.intro}</p>
            </section>

            {content.benefits && (
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">Key benefits</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  {content.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {content.goodFor && (
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">Who it’s good for</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  {content.goodFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {content.howToUse && (
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">How to use</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  {content.howToUse.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {content.cautions && (
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">What to watch out for</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  {content.cautions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        ) : (
          <div className="space-y-6 leading-relaxed text-[15px] sm:text-base text-muted-foreground">
            <p>
              A detailed ingredient guide for this item is coming soon. It will cover what it is, key benefits, who it
              is best for, how to use it safely, and what to avoid.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
