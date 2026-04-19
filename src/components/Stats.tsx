import { Users, Star, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5 000+",
    label: "Довольных клиентов",
    description: "за 4 года работы",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Средний рейтинг",
    description: "по отзывам клиентов",
  },
  {
    icon: MapPin,
    value: "Ташкент",
    label: "Весь город",
    description: "выезд в любой район",
  },
  {
    icon: Award,
    value: "100%",
    label: "Гарантия",
    description: "или вернём деньги",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">О нас</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Почему выбирают Ezzy
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Мы работаем с 2020 года и знаем всё о чистке мебели в Ташкенте
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="font-bold text-primary text-sm mb-1">{stat.label}</div>
                <div className="text-blue-200 text-xs">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Discount banner */}
        <div className="bg-primary rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
          <div className="relative z-10">
            <div className="text-5xl font-black text-white mb-2">−10%</div>
            <h3 className="text-xl font-bold text-white mb-2">Скидка на первый заказ</h3>
            <p className="text-blue-100 mb-6 text-sm">
              Закажите химчистку сейчас и получите скидку 10% на весь объём работ!
            </p>
            <a
              href="#quiz"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Получить скидку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
