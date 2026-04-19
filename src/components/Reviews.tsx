import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Нилуфар М.",
    location: "Юнусабадский район",
    rating: 5,
    text: "Заказала химчистку углового дивана. Мастер приехал вовремя, работал аккуратно. Диван стал как новый! Пятно от кофе — как не бывало. Буду заказывать снова.",
    service: "Угловой диван",
    date: "Март 2024",
  },
  {
    name: "Акмал Р.",
    location: "Мирзо-Улугбекский район",
    rating: 5,
    text: "Очень доволен работой! Матрас пах кошкой — сейчас ни запаха нет. Цена адекватная, мастер профессиональный. Рекомендую Ezzy всем друзьям.",
    service: "Матрас + кресло",
    date: "Февраль 2024",
  },
  {
    name: "Дилноза К.",
    location: "Чиланзарский район",
    rating: 5,
    text: "Заказала чистку дивана и двух кресел. Пятна от вина вывели полностью, я даже не верила что возможно. Мастер всё объяснил, показал результат. 5 звёзд без вопросов!",
    service: "Диван + 2 кресла",
    date: "Январь 2024",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">Отзывы</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Что говорят клиенты
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} fill="#facc15" className="text-yellow-400" />
            ))}
            <span className="font-bold text-secondary ml-2">4.9</span>
            <span className="text-gray-400 text-sm">(127 отзывов)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-accent rounded-2xl p-6 relative hover:shadow-md transition-shadow"
            >
              <Quote size={32} className="text-primary/30 absolute top-4 right-4" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-secondary text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-primary font-bold">{review.service}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
