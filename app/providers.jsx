"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const LANGUAGE_KEY = "lioele:language"
const FAVORITES_KEY = "lioele:favorites"
const CART_KEY = "lioele:cart"

const translations = {
  en: {
    nav: {
      brand: "LIOELE",
      shop: "Skincare",
      makeup: "Makeup",
      tips: "Tips",
      journal: "Journal",
      contact: "Contact",
      favourites: "Favourites",
      search: "Search",
      language: "Language",
      favoritesCount: "items saved",
    },
    hero: {
      badge: "New Collection",
      cta: "Explore Now",
      pause: "Pause",
      play: "Play",
    },
    featured: {
      collection: "Collection",
      title: "Featured Products",
    },
    shop: {
      badge: "Shop",
      title: "Curated Korean Skincare",
      subtitle: "Browse our most-loved formulas by category. Layer-friendly textures and gentle ingredients for every skin journey.",
      searchPlaceholder: "Search skincare...",
      empty: "No products match your filters.",
      addToBag: "Add to bag",
      filters: "Filters",
    },
    favourites: {
      title: "Your Favourites",
      empty: "Save items to see them here.",
      remove: "Remove",
      goShop: "Browse skincare",
      goMakeup: "Browse makeup",
    },
    cart: {
      title: "Shopping Bag",
      empty: "Your bag is empty",
      subtotal: "Subtotal",
      shipping: "Shipping",
      total: "Total",
      checkout: "Proceed to Checkout",
      continueShopping: "Continue Shopping",
      remove: "Remove",
      quantity: "Quantity",
      delivery: "Delivery",
      readyToPay: "Ready to pay",
    },
  },
  mn: {
    nav: {
      brand: "LIOELE",
      shop: "Арьс арчилгаа",
      makeup: "Будалт",
      tips: "Зөвлөгөө",
      journal: "Блог",
      contact: "Холбоо барих",
      favourites: "Дуртай",
      search: "Хайх",
      language: "Хэл",
      favoritesCount: "хадгалсан",
    },
    hero: {
      badge: "Шинэ цуглуулга",
      cta: "Үзэх",
      pause: "Зогсоох",
      play: "Тоглуулах",
    },
    featured: {
      collection: "Цуглуулга",
      title: "Онцлох бүтээгдэхүүн",
    },
    shop: {
      badge: "Дэлгүүр",
      title: "Шилмэл арьс арчилгаа",
      subtitle: "Категориор шүүж, давхарлаж хэрэглэхэд хялбар, зөөлөн найрлагатай бүтээгдэхүүнүүдээс сонгоорой.",
      searchPlaceholder: "Арьс арчилгаа хайх...",
      empty: "Тохирох бүтээгдэхүүн олдсонгүй.",
      addToBag: "Сагсанд нэмэх",
      filters: "Шүүлтүүр",
    },
    makeup: {
      badge: "Будалт",
      title: "Хөнгөн Солонгос будалт",
      subtitle: "Арьстайгаа зохицох чийгшүүлэгч суурь, зөөлөн өнгө, халамжтай пигментүүд.",
      searchPlaceholder: "Будалт хайх...",
      addToBag: "Сагсанд нэмэх",
      empty: "Тохирох будалтын бүтээгдэхүүн байхгүй байна.",
      filters: "Шүүлтүүр",
    },
    favourites: {
      title: "Таны дуртай бүтээгдэхүүн",
      empty: "Дараа харахаар хадгалаарай.",
      remove: "Устгах",
      goShop: "Арьс арчилгаа үзэх",
      goMakeup: "Будалт үзэх",
    },
    cart: {
      title: "Сагс",
      empty: "Таны сагс хоосон байна",
      subtotal: "Дэд дүн",
      shipping: "Хүргэлт",
      total: "Нийт дүн",
      checkout: "Төлбөр төлөх",
      continueShopping: "Дэлгүүр үргэлжлүүлэх",
      remove: "Устгах",
      quantity: "Тоо хэмжээ",
      delivery: "Хүргэлт",
      readyToPay: "Төлбөр төлөх бэлэн",
    },
    search: {
      placeholder: "Бүтээгдэхүүн, категори хайх...",
      noResults: "Илэрц олдсонгүй",
      quickLinks: "Түргэн холбоосууд",
      viewAll: "Бүх илэрцийг харах",
    },
  },
}

const AppContext = createContext()

const getByPath = (obj, path) => path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}

export default function AppProvider({ children }) {
  const [language, setLanguage] = useState("en")
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedLang = typeof window !== "undefined" ? window.localStorage.getItem(LANGUAGE_KEY) : null
    const storedFavs = typeof window !== "undefined" ? window.localStorage.getItem(FAVORITES_KEY) : null
    const storedCart = typeof window !== "undefined" ? window.localStorage.getItem(CART_KEY) : null

    if (storedLang) {
      setLanguage(storedLang)
      document.documentElement.lang = storedLang
    }
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs))
      } catch (err) {
        console.error("Failed to parse favorites", err)
      }
    }
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart))
      } catch (err) {
        console.error("Failed to parse cart", err)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(LANGUAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const t = (key) => getByPath(translations[language], key) ?? getByPath(translations.en, key) ?? key

  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "mn" : "en"))

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0
      return total + price * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      favorites,
      toggleFavorite,
      isFavorite: (id) => favorites.includes(id),
      cart,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      getCartTotal,
      getCartCount,
    }),
    [language, favorites, cart],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
