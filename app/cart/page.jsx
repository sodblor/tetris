"use client"

import { useMemo } from "react"
import Link from "next/link"
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Package } from "lucide-react"
import Footer from "@/app/components/footer"
import { useApp } from "@/app/providers"
import Navigation from "@/app/components/navigation"

const getText = (field, language) => {
  if (!field) return ""
  if (typeof field === "string") return field
  return field[language] || field.en || ""
}

export default function CartPage() {
  const { language, cart, removeFromCart, updateCartQuantity, getCartTotal, t } = useApp()

  const subtotal = getCartTotal()
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/30 via-background to-secondary/20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("cart.delivery")}</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium">{t("cart.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("cart.readyToPay")}</p>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-12 lg:py-16">
        {cart.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/40 mx-auto" />
            <p className="text-lg text-muted-foreground">{t("cart.empty")}</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("cart.continueShopping")}
            </Link>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => {
                const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0
                const itemTotal = price * item.quantity

                return (
                  <article
                    key={item.id}
                    className="flex gap-4 p-6 border border-border/60 rounded-3xl bg-card shadow-sm"
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {getText(item.description, language)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{t("cart.quantity")}:</span>
                          <div className="flex items-center gap-2 border border-border rounded-full">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-accent rounded-l-full transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-accent rounded-r-full transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-foreground">${itemTotal.toFixed(2)}</p>
                          <p className="text-xs text-muted-foreground">${price.toFixed(2)} each</p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 border border-border/60 rounded-3xl bg-card shadow-sm space-y-6">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("cart.subtotal")}</span>
                    <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("cart.shipping")}</span>
                    <span className="text-foreground font-medium">
                      {shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">{t("cart.total")}</span>
                    <span className="font-bold text-lg text-foreground">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
                  <Package className="w-4 h-4" />
                  {t("cart.checkout")}
                </button>

                <Link
                  href="/shop"
                  className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("cart.continueShopping")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
