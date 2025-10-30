"use client"

export default function Hero() {
  const handleGetStarted = () => {
    const tipsSection = document.getElementById("tips")
    if (tipsSection) {
      tipsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">An Toàn Giao Thông Là Ưu Tiên Hàng Đầu</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 text-balance">
          Học các mẹo lái xe an toàn và tương tác với chatbot AI để giải đáp mọi câu hỏi về giao thông
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow text-lg"
          aria-label="Bắt đầu xem mẹo lái xe"
        >
          Bắt Đầu Ngay
        </button>
      </div>
    </section>
  )
}
