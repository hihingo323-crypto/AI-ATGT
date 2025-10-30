"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useRef, useEffect, useState } from "react"

export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState<string | null>(null)

  const { messages, input, setInput, sendMessage, isLoading } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Xin chào! Tôi là trợ lý an toàn giao thông. Bạn có câu hỏi gì về lái xe an toàn không?",
      },
    ],
    onError: (error) => {
      setError("Có lỗi xảy ra. Vui lòng thử lại.")
      console.error("Chat error:", error)
    },
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setError(null)
    sendMessage()
  }

  return (
    <div className="flex flex-col h-96 bg-card">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
        <h3 className="font-bold text-lg">Trợ Lý An Toàn Giao Thông</h3>
        <button
          onClick={onClose}
          className="text-primary-foreground hover:opacity-80 transition"
          aria-label="Đóng chat"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {error && <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg text-sm">{error}</div>}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-muted-foreground rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg rounded-bl-none">
              <p className="text-sm">Đang gõ...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi..."
          className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={isLoading}
          aria-label="Nhập tin nhắn"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          aria-label="Gửi tin nhắn"
        >
          Gửi
        </button>
      </form>
    </div>
  )
}
