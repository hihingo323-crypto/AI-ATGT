"use client"

import { useState } from "react"

const tips = [
  {
    id: 1,
    title: "Kiểm Tra Xe Trước Khi Lái",
    description: "Luôn kiểm tra lốp xe, phanh, đèn và gương chiếu hậu trước khi lên đường.",
    icon: "🔧",
    details: "Kiểm tra áp suất lốp, chất lượng phanh, và đảm bảo tất cả đèn hoạt động bình thường.",
  },
  {
    id: 2,
    title: "Tuân Thủ Giới Hạn Tốc Độ",
    description: "Luôn lái xe với tốc độ phù hợp với điều kiện đường và giới hạn tốc độ.",
    icon: "⚡",
    details: "Giảm tốc độ khi trời mưa, đêm tối, hoặc đường xá có nhiều giao thông.",
  },
  {
    id: 3,
    title: "Không Sử Dụng Điện Thoại",
    description: "Tập trung vào đường xá, không sử dụng điện thoại khi lái xe.",
    icon: "📱",
    details: "Sử dụng chế độ lái xe an toàn hoặc để điện thoại ở chế độ im lặng.",
  },
  {
    id: 4,
    title: "Giữ Khoảng Cách An Toàn",
    description: "Luôn giữ khoảng cách an toàn với xe phía trước để có thời gian phản ứng.",
    icon: "📏",
    details: "Quy tắc 3 giây: Giữ khoảng cách sao cho bạn có ít nhất 3 giây để phản ứng.",
  },
  {
    id: 5,
    title: "Sử Dụng Dây An Toàn",
    description: "Luôn đeo dây an toàn cho tất cả hành khách trên xe.",
    icon: "🛡️",
    details: "Dây an toàn có thể cứu sống bạn trong trường hợp xảy ra tai nạn.",
  },
  {
    id: 6,
    title: "Tránh Lái Xe Khi Mệt Mỏi",
    description: "Không lái xe khi bạn cảm thấy mệt mỏi hoặc buồn ngủ.",
    icon: "😴",
    details: "Nếu cảm thấy mệt, hãy dừng lại và nghỉ ngơi hoặc nhờ người khác lái.",
  },
]

export default function DrivingTips() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="tips" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Mẹo Lái Xe An Toàn</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Những mẹo quan trọng để lái xe an toàn hơn</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setExpandedId(expandedId === tip.id ? null : tip.id)}
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{tip.title}</h3>
              <p className="text-muted-foreground mb-4">{tip.description}</p>

              {expandedId === tip.id && (
                <div className="mt-4 pt-4 border-t border-border text-sm text-card-foreground">{tip.details}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
