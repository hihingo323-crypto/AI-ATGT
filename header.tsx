"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-3xl">🚗</span>
          <span>An Toàn Giao Thông</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-primary-foreground/10 rounded"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#tips" className="hover:opacity-80 transition">
            Mẹo Lái Xe
          </Link>
          <Link href="#safety" className="hover:opacity-80 transition">
            An Toàn
          </Link>
          <Link href="#contact" className="hover:opacity-80 transition">
            Liên Hệ
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-primary-foreground/5 px-4 py-3 flex flex-col gap-3">
          <Link href="#tips" className="hover:opacity-80 transition">
            Mẹo Lái Xe
          </Link>
          <Link href="#safety" className="hover:opacity-80 transition">
            An Toàn
          </Link>
          <Link href="#contact" className="hover:opacity-80 transition">
            Liên Hệ
          </Link>
        </nav>
      )}
    </header>
  )
}
