import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "An Toàn Giao Thông - Mẹo Lái Xe An Toàn",
  description:
    "Tìm hiểu các mẹo lái xe an toàn, quy tắc giao thông, và tương tác với chatbot AI để giải đáp mọi câu hỏi về an toàn giao thông.",
  keywords: "an toàn giao thông, mẹo lái xe, quy tắc giao thông, lái xe an toàn",
  authors: [{ name: "An Toàn Giao Thông" }],
  openGraph: {
    title: "An Toàn Giao Thông - Mẹo Lái Xe An Toàn",
    description: "Tìm hiểu các mẹo lái xe an toàn và tương tác với chatbot AI",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4a9d6f" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
