"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✍️ КОПИРАЙТЕР: вопросы сформулированы от лица клиента, ответы — живые, без канцелярщины
// 📊 МАРКЕТОЛОГ: каждый ответ снимает возражение и ведёт к действию
// 🔎 SEO: вопросы содержат ключевые слова "химчистка", "мебель", "Ташкент", "мастер"

const faqs = [
  {
    question: "Как быстро вы приедете?",
    answer:
      "Мастер выезжает в день обращения — обычно в течение 1–2 часов после звонка. Если вы позвоните до 18:00, мы гарантируем приезд сегодня. В загруженные дни договариваемся на удобное время.",
  },
  {
    question: "Безопасна ли химия для детей и животных?",
    answer:
      "Да. Мы используем только сертифицированные профессиональные средства европейских брендов — они гипоаллергенные и не токсичны. После высыхания (1–3 часа) мебель полностью безопасна для детей и домашних животных.",
  },
  {
    question: "Что если результат не понравится?",
    answer:
      "Мы вернём деньги. Без вопросов. Это наша гарантия качества: если вы не довольны результатом — напишите нам, и мы решим вопрос в течение 24 часов. За 4 года работы такие случаи были единичными.",
  },
  {
    question: "Сколько времени занимает чистка?",
    answer:
      "Зависит от объёма: угловой диван — 2–3 часа, кресло — 1–1,5 часа, матрас — 1,5–2 часа. После чистки мебель сохнет ещё 1–3 часа. Мастер скажет точное время на месте, оценив загрязнение.",
  },
  {
    question: "Какие материалы вы чистите?",
    answer:
      "Чистим велюр, рогожку, микрофибру, флок, кожу и экокожу, жаккард, шенилл. Если сомневаетесь — пришлите фото в Telegram, мастер скажет сразу. Диваны, кресла, матрасы, ковры, автомобильные сиденья.",
  },
  {
    question: "Нужно ли готовить мебель перед приездом?",
    answer:
      "Нет ничего особенного. Просто уберите с дивана подушки и мелкие вещи. Мастер приезжает со всем оборудованием — водой, пылесосом, профессиональной химией. Ваша задача — открыть дверь.",
  },
  {
    question: "Есть ли гарантия на результат?",
    answer:
      "Да. Если результат не устроил — возвращаем деньги. Дополнительно: если пятно проявится снова в течение 7 дней после чистки — приедем и устраним бесплатно. Это наша репутация, и мы её бережём.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-wide">FAQ</span>
          {/* 🔎 SEO: H2 с ключевым словом */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Частые вопросы о химчистке мебели
          </h2>
          <p className="text-gray-500">
            Отвечаем честно — без скрытых условий
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-accent/50 transition-colors"
              >
                <span className="font-bold text-secondary pr-4">{faq.question}</span>
                <span className="flex-shrink-0 text-primary">
                  {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 bg-accent/30">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 📊 МАРКЕТОЛОГ: CTA после FAQ — пока читают, прогревают себя сами */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">Остались вопросы? Спросите прямо в Telegram</p>
          <a
            href="https://t.me/+998772603003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2AABEE] hover:bg-[#1a9bde] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
            </svg>
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
