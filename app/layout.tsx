import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayni Ibrahim | Full-Stack Web Developer",
  description:
    "Portfolio of Ayni Ibrahim, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Ayni Ibrahim | Full-Stack Web Developer",
    description:
      "Portfolio of Ayni Ibrahim, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
