export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Về Chúng Tôi</h4>
            <p className="opacity-90">
              Trang web này cung cấp thông tin về an toàn giao thông và các mẹo lái xe an toàn.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#tips" className="hover:opacity-80 transition">
                  Mẹo Lái Xe
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:opacity-80 transition">
                  An Toàn
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
            <p className="opacity-90">
              Email: info@antoangiaoThong.com
              <br />
              Điện thoại: 1900-1234
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; 2025 An Toàn Giao Thông. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
