"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import DrivingTips from "@/components/driving-tips"
import ChatBot from "@/components/chatbot"
import Footer from "@/components/footer"

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DrivingTips />

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-2xl z-40"
        aria-label="Mở chat"
      >
        💬
      </button>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-24px)] bg-card rounded-lg shadow-2xl z-50 border border-border">
          <ChatBot onClose={() => setShowChat(false)} />
        </div>
      )}

      <Footer />
    </div>
  )
}
