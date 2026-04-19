import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-white text-lg">E</span>
              </div>
              <span className="font-bold text-xl">Ezzy</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Профессиональная химчистка мягкой мебели в Ташкенте. Выезд на дом, современное оборудование, безопасная химия.
            </p>
            <div className="flex gap-3">
              {/* Telegram */}
              <a
                href="https://t.me/+998772603003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#2AABEE] rounded-xl flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
                </svg>
              </a>
              {/* Instagram — правильная иконка */}
              <a
                href="https://www.instagram.com/ezzy.clean?igsh=YmU4eGlrcDF3NHQw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                {/* Корректная иконка Instagram (не Share2) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            {/* 🔎 SEO: H3 с ключевыми словами */}
            <h3 className="font-bold text-white mb-4">Химчистка мебели в Ташкенте</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Химчистка диванов</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Химчистка кресел</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Химчистка матрасов</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Химчистка ковров</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Химчистка авто-сидений</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Устранение запахов</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-white mb-4">Контакты</h3>
            <div className="space-y-3 text-blue-200 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+998781136068" className="hover:text-primary transition-colors">
                  +998 78 113-60-68
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary flex-shrink-0" />
                <a href="https://t.me/+998772603003" className="hover:text-primary transition-colors">
                  Telegram: +998 77 260-30-03
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@ezzy.uz" className="hover:text-primary transition-colors">info@ezzy.uz</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>г. Ташкент</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Пн–Вс: 8:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* ✅ Год обновлён: 2024 → 2026 */}
          <p className="text-blue-200 text-sm">
            © 2026 Ezzy. Все права защищены.
          </p>
          <a
            href="#quiz"
            className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2 rounded-lg transition-colors text-sm"
          >
            Заказать химчистку
          </a>
        </div>
      </div>
    </footer>
  );
}
