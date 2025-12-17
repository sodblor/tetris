import "./globals.css"
import AppProvider from "./providers"

export const metadata = {
  title: "LIOELE | Korean Beauty",
  description: "Discover gentle, natural beauty with our curated LIOELE Korean skincare collection. Clean ingredients, soft results.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}