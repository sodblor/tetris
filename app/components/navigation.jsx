"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Heart } from "lucide-react"
import { useApp } from "@/app/providers"

export default function Navigation() {
  const { t, toggleLanguage, language, favorites, getCartCount } = useApp()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: t("nav.shop"), href: "/shop" },
    { name: t("nav.tips"), href: "#tips" },
    { name: t("nav.journal"), href: "#blog" },
    { name: "Skin Help", href: "/skin-help" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-medium tracking-wide text-foreground">{t("nav.brand")}</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/favourites"
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hidden sm:block"
              aria-label={t("nav.favourites")}
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center px-1">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center px-1">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleLanguage}
              className="hidden md:inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <span>{language === "en" ? "EN" : "MN"}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 md:hidden"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsOpen(false)
                }}
                className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <span>{language === "en" ? "Монгол" : "English"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
