export const metadata = {
  title: "Dr. Althea Bestsellers & Real User Impressions",
  description:
    "Dive into Dr. Althea hero products like 345 Relief Cream and Vitamin C Boosting Serum, plus what real users say.",
}

export default function DrAltheaBestsellersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Product Review</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
          Dr. Althea Bestsellers &amp; Real User Impressions
        </h1>

        <div className="space-y-6 leading-relaxed text-[15px] sm:text-base text-muted-foreground">
          <p>
            Dr. Althea&apos;s lineup includes a few standout products that consistently appear in reviews, routines, and
            recommendation lists. Together, they showcase the brand&apos;s focus on hydration, barrier repair, and gentle
            brightening.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-foreground mt-8">345 Relief Cream</h2>
          <p>
            345 Relief Cream is one of the brand&apos;s best-known formulas. It is frequently highlighted for helping to
            soothe irritated or sensitized skin while reinforcing the moisture barrier. The texture feels light and
            non-greasy, making it comfortable for daily use.
          </p>
          <p>
            Many users appreciate its blend of ceramides and niacinamide, which can support barrier strength and a more
            even-looking tone over time. As with any skincare product, results vary, but it has become a go-to option
            for those who want barrier care without heaviness.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-foreground mt-8">Vitamin C Boosting Serum</h2>
          <p>
            This serum is often mentioned for its ability to gently improve radiance and help fade the look of dark
            spots. Instead of relying on an aggressive formula, it pairs vitamin C with supportive ingredients to make
            brightening more accessible for sensitive or reactive skin types.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-foreground mt-8">Amino Acid Cleanser &amp; Soothing Hydration</h2>
          <p>
            Beyond treatments and creams, Dr. Althea&apos;s amino acid cleansers and soothing essences are designed to round
            out a complete routine. They aim to cleanse effectively while respecting the skin barrier, then layer on
            hydration with minimal irritation.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-foreground mt-8">🧪 Real User Impressions</h2>
          <p>
            Across different review platforms, many users describe Dr. Althea products as gentle, hydrating, and easy to
            combine with the rest of their routine. People with sensitive or combination skin often report feeling more
            comfortable and moisturized, with fewer flare-ups when they stick with barrier-supporting products.
          </p>
          <p>
            Some users with very oily skin mention that richer, more occlusive formulas can feel a bit heavy, which is a
            reminder that texture preferences and skin needs are always personal.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-foreground mt-8">🧴 Final Thoughts</h2>
          <p>
            Taken together, these bestsellers reflect Dr. Althea&apos;s philosophy: calm, caring skincare that fits into
            everyday life. Whether you start with a single cream or build a full routine, the focus stays on comfort,
            balance, and long-term skin health rather than quick fixes.
          </p>
        </div>
      </section>
    </main>
  )
}
