"use client"

import { useMemo } from "react"
import { Heart, ShoppingBag, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Footer from "@/app/components/footer"
import { useApp } from "@/app/providers"
import Navigation from "@/app/components/navigation"
import { allProducts } from "@/app/data/products"
import { shopProducts } from "@/app/shop/page"

const getText = (field, language) => {
  if (!field) return ""
  if (typeof field === "string") return field
  return field[language] || field.en || ""
}

// Combine all products
const getAllProducts = () => {
  return [...allProducts, ...shopProducts]
}

export default function FavouritesPage() {
  const { language, toggleFavorite, isFavorite, addToCart, t } = useApp()
  const favorites = useApp().favorites
  const allProductsCombined = useMemo(() => getAllProducts(), [])

  const favoriteProducts = useMemo(() => {
    return allProductsCombined.filter((product) => favorites.includes(product.id))
  }, [favorites, allProductsCombined])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/30 via-background to-secondary/20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("favourites.title")}</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium">{t("favourites.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {favoriteProducts.length === 0
              ? t("favourites.empty")
              : `${favoriteProducts.length} ${language === "en" ? "items saved" : "бүтээгдэхүүн хадгалагдсан"}`}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-12 lg:py-16">
        {favoriteProducts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
            <Heart className="w-16 h-16 text-muted-foreground/40 mx-auto" />
            <p className="text-lg text-muted-foreground">{t("favourites.empty")}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("favourites.goShop")}
              </Link>
              <Link
                href="/makeup"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                {t("favourites.goMakeup")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
            {favoriteProducts.map((product) => (
              <article
                key={product.id}
                className="group h-full flex flex-col border border-border/60 rounded-3xl overflow-hidden bg-card shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/products/${product.id}`} className="relative aspect-[3/4] overflow-hidden block">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 bg-background/90 text-xs font-semibold px-3 py-1 rounded-full border border-border">
                      {getText(product.badge, language)}
                    </span>
                  )}
                </Link>
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <Link href={`/products/${product.id}`} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {getText(product.category, language)} · {product.type === "makeup" ? t("nav.makeup") : t("nav.shop")}
                      </p>
                      <h3 className="text-lg font-semibold mt-1 hover:text-primary transition-colors">{product.name}</h3>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleFavorite(product.id)
                      }}
                      className="p-2 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-all flex-shrink-0"
                      aria-label="Remove from favourites"
                    >
                      <Heart className="w-5 h-5 fill-primary" />
                    </button>
                  </Link>
                  <Link href={`/products/${product.id}`}>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {getText(product.description, language)}
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>{product.rating || 4.5}</span>
                    </div>
                    <span className="text-base font-semibold">{product.price}</span>
                  </div>
                  {product.details && (
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {(typeof product.details === "object"
                        ? product.details[language] || product.details.en || product.details
                        : product.details
                      )?.map((detail, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {product.type === "makeup" ? t("makeup.addToBag") : t("shop.addToBag")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
