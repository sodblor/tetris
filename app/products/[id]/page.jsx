"use client"

import { useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Heart, Star, CheckCircle, XCircle } from "lucide-react"
import Footer from "@/app/components/footer"
import { useApp } from "@/app/providers"
import Navigation from "@/app/components/navigation"
import { allProducts } from "@/app/data/products"
import { shopProducts } from "@/app/shop/page"

const enrichedShopProducts = shopProducts.map((product) => ({
  ...product,
  type: product.type || "skincare",
  whenToUse: product.whenToUse || {
    en: [
      "Use as directed in your routine",
      "Can be used morning and/or evening",
      "Follow product-specific recommendations",
    ],
    mn: [
      "Үйлдэлд заасны дагуу хэрэглэх",
      "Өглөө, орой хэрэглэх боломжтой",
      "Бүтээгдэхүүний тусгай зөвлөмжийг дагах",
    ],
  },
  avoidFor: product.avoidFor || [],
}))

const getAllProducts = () => {
  return [...allProducts, ...enrichedShopProducts]
}

const skinTypes = {
  oily: { name: "Oily", emoji: "💧", color: "bg-pink-100 text-pink-800" },
  dry: { name: "Dry", emoji: "🌿", color: "bg-amber-100 text-amber-800" },
  sensitive: { name: "Sensitive", emoji: "🌸", color: "bg-rose-100 text-rose-800" },
  normal: { name: "Normal", emoji: "✨", color: "bg-emerald-100 text-emerald-800" },
  "acne-prone": { name: "Acne-prone", emoji: "🔥", color: "bg-red-100 text-red-800" },
  combination: { name: "Combination", emoji: "⚖️", color: "bg-purple-100 text-purple-800" },
}

const getText = (field, language) => {
  if (!field) return ""
  if (typeof field === "string") return field
  return field[language] || field.en || ""
}

export default function ProductDetailPage({ params }) {
  const { language, toggleFavorite, isFavorite, addToCart, t } = useApp()
  const allProductsCombined = useMemo(() => getAllProducts(), [])
  const product = useMemo(() => allProductsCombined.find((p) => p.id === params.id), [params.id, allProductsCombined])

  if (!product) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <section className="pt-28 pb-16 px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Return to shop
          </Link>
        </section>
        <Footer />
      </main>
    )
  }

  const productDetails = {
    howToUse: product.howToUse || {
      en: [
        "Apply to clean, dry skin",
        "Use morning and/or evening",
        "Follow with moisturizer and sunscreen",
        "Start with 2-3 times per week if new to active ingredients",
      ],
      mn: [
        "Цэвэр, хуурай арьсанд түрхэх",
        "Өглөө, орой хэрэглэх",
        "Чийгшүүлэгч болон нарнаас хамгаалах бүтээгдэхүүн дараа нь хэрэглэх",
        "Хэрэв идэвхтэй бодис шинээр хэрэглэж байгаа бол долоо хоногт 2-3 удаа эхлэх",
      ],
    },
    whenToUse: product.whenToUse || {
      en: [
        "Use as directed in your routine",
        "Can be used morning and/or evening",
        "Follow product-specific recommendations",
      ],
      mn: [
        "Үйлдэлд заасны дагуу хэрэглэх",
        "Өглөө, орой хэрэглэх боломжтой",
        "Бүтээгдэхүүний тусгай зөвлөмжийг дагах",
      ],
    },
    ingredients: product.ingredients || {
      en: [
        "Key active ingredients",
        "Supporting hydrating agents",
        "Soothing botanical extracts",
        "Barrier-supporting ceramides",
      ],
      mn: [
        "Гол идэвхтэй бодисууд",
        "Дэмжлэг үзүүлэх чийгшүүлэгч бодисууд",
        "Тайвшруулах ургамлын экстрактууд",
        "Хамгаалах давхаргыг дэмжих церамидууд",
      ],
    },
    effects: product.effects || {
      en: [
        "Improves skin texture and tone",
        "Provides deep hydration",
        "Strengthens skin barrier",
        "Reduces visible redness and irritation",
      ],
      mn: [
        "Арьсны бүтэц, өнгийг сайжруулна",
        "Гүн чийгшүүлнэ",
        "Арьсны хамгаалах давхаргыг бэхжүүлнэ",
        "Харагдах улайлт, цочролыг бууруулна",
      ],
    },
    suitableFor: product.suitableFor || ["oily", "dry", "sensitive", "normal", "acne-prone", "combination"],
    avoidFor: product.avoidFor || [],
  }

  const suitableNames = productDetails.suitableFor
    .map((skinType) => skinTypes[skinType]?.name)
    .filter(Boolean)
  const avoidNames = productDetails.avoidFor
    .map((skinType) => skinTypes[skinType]?.name)
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href={product.type === "makeup" ? "/makeup" : "/shop"}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {product.type === "makeup" ? t("nav.makeup") : t("nav.shop")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted/30">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-background/90 text-xs font-semibold px-3 py-1 rounded-full border border-border">
                  {getText(product.badge, language)}
                </span>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {getText(product.category, language)} · {product.type === "makeup" ? t("nav.makeup") : t("nav.shop")}
                </p>
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{getText(product.description, language)}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-lg font-semibold">{product.rating || 4.5}</span>
                </div>
                <span className="text-2xl font-bold text-foreground">{product.price}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-3 px-6 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {product.type === "makeup" ? t("makeup.addToBag") : t("shop.addToBag")}
                </button>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-3 rounded-full border transition-colors ${
                    isFavorite(product.id)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Save to favourites"
                >
                  <Heart className={`w-5 h-5 ${isFavorite(product.id) ? "fill-primary" : ""}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "How to Use" : "Хэрхэн хэрэглэх"}
              </h2>
              <ul className="space-y-3">
                {(typeof productDetails.howToUse === "object"
                  ? productDetails.howToUse[language] || productDetails.howToUse.en
                  : productDetails.howToUse
                )?.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "When to Use" : "Хэзээ хэрэглэх"}
              </h2>
              <ul className="space-y-3">
                {(typeof productDetails.whenToUse === "object"
                  ? productDetails.whenToUse[language] || productDetails.whenToUse.en
                  : productDetails.whenToUse
                )?.map((when, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{when}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "What's Inside" : "Агуулга"}
              </h2>
              <ul className="space-y-3">
                {(typeof productDetails.ingredients === "object"
                  ? productDetails.ingredients[language] || productDetails.ingredients.en
                  : productDetails.ingredients
                )?.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "What's the Effect" : "Үр дүн"}
              </h2>
              <ul className="space-y-3">
                {(typeof productDetails.effects === "object"
                  ? productDetails.effects[language] || productDetails.effects.en
                  : productDetails.effects
                )?.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{effect}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitable For */}
            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "Suitable For" : "Тохиромжтой арьс"}
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                {productDetails.suitableFor.map((skinType) => {
                  const type = skinTypes[skinType]
                  if (!type) return null
                  return (
                    <span
                      key={skinType}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${type.color}`}
                    >
                      {type.emoji} {type.name}
                    </span>
                  )
                })}
              </div>
              {productDetails.avoidFor && productDetails.avoidFor.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    {language === "en" ? "Not Recommended For" : "Тохиромжгүй арьс"}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {productDetails.avoidFor.map((skinType) => {
                      const type = skinTypes[skinType]
                      if (!type) return null
                      return (
                        <span
                          key={skinType}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700"
                        >
                          {type.emoji} {type.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              {(suitableNames.length > 0 || avoidNames.length > 0) && (
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? `${
                        suitableNames.length > 0
                          ? `Best for: ${suitableNames.join(", ")} skin. `
                          : ""
                      }${
                        avoidNames.length > 0
                          ? `Not ideal for: ${avoidNames.join(", ")} skin.`
                          : ""
                      }`
                    : `${
                        suitableNames.length > 0
                          ? `Илүү тохирох арьсны төрөл: ${suitableNames.join(", ")}. `
                          : ""
                      }${
                        avoidNames.length > 0
                          ? `Дэмжиж зөвлөдөггүй арьсны төрөл: ${avoidNames.join(", ")}.`
                          : ""
                      }`}
                </p>
              )}
            </div>
          </div>

          {/* Product Details List */}
          {product.details && (
            <div className="p-8 rounded-3xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {language === "en" ? "Product Details" : "Бүтээгдэхүүний дэлгэрэнгүй"}
              </h2>
              <ul className="space-y-3">
                {(typeof product.details === "object"
                  ? product.details[language] || product.details.en || product.details
                  : product.details
                )?.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

