import Navigation from "@/app/components/navigation"
import HeroCarousel from "@/app/components/hero-carousel"
import ProductCarousel from "@/app/components/product-carousel"
import AboutBrand from "@/app/components/about-brand"
import SkinTypeGuide from "@/app/components/skin-type-guide"
import SkincareTips from "@/app/components/skincare-tips"
import BlogArticles from "@/app/components/blog-articles"
import TrendingCollections from "@/app/components/trending-collections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroCarousel />
      <ProductCarousel />
      <AboutBrand />
      <TrendingCollections />
      <SkinTypeGuide />
      <SkincareTips />
      <BlogArticles />
    </main>
  )
}
