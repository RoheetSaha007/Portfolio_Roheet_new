import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Roheet Saha - Portfolio",
  description: "Electronics & Communication Engineer | Full Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
