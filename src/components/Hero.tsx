"use client";

import { ArrowRight, Star, ShieldCheck, Clock, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-white to-accent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-10 rounded-full translate-y-24 -translate-x-24" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="relative z-10">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Zap size={16} fill="white" />
              ⚡ Выезд в день обращения · Скидка 10% + ароматизация в подарок
            </div>

            {/* H1 — SEO: ключевик "химчистка" + USP скорость */}
            <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-4">
              Диван как новый —
              <span className="text-primary block">мастер приедет за 2 часа</span>
            </h1>

            {/* Subtitle — три боли клиента */}
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Пятно от кофе? Запах кота? Гости завтра? —
              Мастер выедет в день обращения. Химчистка мебели в Ташкенте с гарантией результата.
            </p>

            {/* Guarantee line */}
            <div className="flex items-center gap-2 mb-6 text-sm text-green-700 font-semibold bg-green-50 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck size={16} className="text-green-600" />
              Если не устроит результат — вернём деньги
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700">
                <ShieldCheck size={16} className="text-primary" />
                Гарантия качества
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700">
                <Clock size={16} className="text-primary" />
                Выезд за 2 часа
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700">
                <Star size={16} className="text-yellow-400" fill="#facc15" />
                4.9 / 5 рейтинг
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quiz"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl text-base"
              >
                Рассчитать стоимость
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+998781136068"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-base"
              >
                Позвонить нам
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-48 flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🛋️</div>
                  <p className="font-bold text-lg">Мы чистим всё!</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Диван 3-х местный</span>
                  <span className="font-bold text-secondary">от 250 000 сум</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Кресло</span>
                  <span className="font-bold text-secondary">от 120 000 сум</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Матрас 2-х спальный</span>
                  <span className="font-bold text-secondary">от 200 000 сум</span>
                </div>
                <div className="border-t pt-3 flex items-center justify-between">
                  <span className="text-primary font-bold">Скидка 10%</span>
                  <span className="text-xs text-gray-500">на первый заказ</span>
                </div>
              </div>
            </div>

            {/* Floating review */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 max-w-[180px]">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600">&ldquo;Отличная работа! Диван как новый&rdquo;</p>
              <p className="text-xs font-bold text-secondary mt-1">— Нилуфар М.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
