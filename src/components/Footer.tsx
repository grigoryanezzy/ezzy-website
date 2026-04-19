import { Phone, MessageCircle, Share2, MapPin, Clock } from "lucide-react";

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
              <a
                href="https://t.me/ezzy_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/ezzy_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Услуги</h3>
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
                <a href="tel:+998901234567" className="hover:text-primary transition-colors">
                  +998 90 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary flex-shrink-0" />
                <a href="https://t.me/ezzy_uz" className="hover:text-primary transition-colors">
                  @ezzy_uz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Ташкент, все районы</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Пн–Вс: 8:00 – 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200 text-sm">
            © 2024 Ezzy. Все права защищены.
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
